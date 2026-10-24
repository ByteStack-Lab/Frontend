<template>
  <canvas
    ref="canvasRef"
    class="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000"
    :class="ready ? 'opacity-100' : 'opacity-0'"
    aria-hidden="true"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Group,
  SphereGeometry,
  ShaderMaterial,
  Mesh,
  BufferGeometry,
  Float32BufferAttribute,
  Points,
  LineSegments,
  LineLoop,
  LineBasicMaterial,
  Vector3,
  CatmullRomCurve3,
  TubeGeometry,
  RingGeometry,
  MeshBasicMaterial,
  BackSide,
  DoubleSide,
} from "three";

/**
 * Hero background: a half-visible 3D globe pinned to the right edge.
 *
 * Land is built from a 360x180 mask (public/images/globe-land.png) as ~6k glowing
 * dots, wrapped in a frosted-glass core with a rim atmosphere and a faint
 * graticule. A scan band sweeps pole to pole, arcs fire from Dhaka to cities
 * worldwide with a packet riding each one, rings pulse where they land, and two
 * tilted orbits carry satellites. The cursor nudges the tilt.
 *
 * Client-only and loaded as a lazy chunk (`<LazyHeroGlobe />`), so three.js never
 * touches SSR or the critical path. Pauses off-screen / in hidden tabs, renders a
 * single static frame for prefers-reduced-motion, and renders nothing at all if
 * WebGL is unavailable (the gradient behind it still looks fine).
 */

const canvasRef = ref(null);
const ready = ref(false);

// [name, lat, lon] — Dhaka (index 0) is the hub most arcs start from.
const CITIES = [
  ["Dhaka", 23.81, 90.41],
  ["London", 51.51, -0.13],
  ["New York", 40.71, -74.0],
  ["San Francisco", 37.77, -122.42],
  ["Toronto", 43.65, -79.38],
  ["Dubai", 25.2, 55.27],
  ["Singapore", 1.35, 103.82],
  ["Sydney", -33.87, 151.21],
  ["Tokyo", 35.68, 139.69],
  ["Berlin", 52.52, 13.4],
  ["Sao Paulo", -23.55, -46.63],
  ["Nairobi", -1.29, 36.82],
];

const FOV = 32;
const TILT_X = 0.38;
const TILT_Z = -0.22;
const MASK_URL = "/images/globe-land.png";

// Palette tuned for the light hero background (additive glow would vanish on it).
const INDIGO = [0.208, 0.2, 0.804]; // #3533cd
const DEEP = [0.118, 0.106, 0.412]; // #1e1b69
const CYAN = [0.024, 0.714, 0.831]; // #06b6d4

let renderer = null;
let scene = null;
let camera = null;
let tiltGroup = null;
let spinGroup = null;
let landPoints = null;
let arcs = [];
let heads = null;
let rings = [];
let satellites = [];
let cityVecs = [];
let mask = null;

let width = 0;
let height = 0;
let isSmall = false;
let rafId = 0;
let lastTime = 0;
let idleHandle = 0;
let isVisible = true;
let reduceMotion = false;
let disposed = false;
let observer = null;
let resizeObserver = null;
const pointer = { x: 0, y: 0, sx: 0, sy: 0 };

// Uniform objects shared by reference across materials, so one write updates all.
const shared = {
  uTime: { value: 0 },
  uPx: { value: 1 },
  uCam: { value: 5 },
};

const rand = (min, max) => min + Math.random() * (max - min);

function latLonToVec(lat, lon) {
  const phi = (lat * Math.PI) / 180;
  const lam = (lon * Math.PI) / 180;
  return new Vector3(Math.cos(phi) * Math.sin(lam), Math.sin(phi), Math.cos(phi) * Math.cos(lam));
}

function loadMask() {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = img.width;
      c.height = img.height;
      const g = c.getContext("2d", { willReadFrequently: true });
      g.drawImage(img, 0, 0);
      resolve({ data: g.getImageData(0, 0, c.width, c.height).data, w: c.width, h: c.height });
    };
    img.onerror = () => resolve(null); // no mask: fall back to a fully dotted ball
    img.src = MASK_URL;
  });
}

/* ---------------------------------------------------------------- shaders */

const landMaterial = (size) =>
  new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      ...shared,
      uSize: { value: size },
      uScan: { value: 0 },
      uA: { value: new Vector3(...INDIGO) },
      uB: { value: new Vector3(...DEEP) },
      uC: { value: new Vector3(...CYAN) },
    },
    vertexShader: /* glsl */ `
      attribute float aSeed;
      uniform float uTime, uSize, uScan, uPx, uCam;
      uniform vec3 uA, uB, uC;
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(mat3(modelViewMatrix) * position);
        float facing = dot(n, normalize(-mv.xyz));
        float scan = smoothstep(0.16, 0.0, abs(position.y - uScan));
        float tw = 0.6 + 0.4 * sin(uTime * 1.4 + aSeed * 6.2831);
        vAlpha = smoothstep(0.0, 0.35, facing) * (0.55 * tw + 0.5 * scan + 0.3);
        vColor = mix(mix(uA, uB, aSeed * 0.6), uC, scan);
        gl_PointSize = uSize * uPx * (uCam / -mv.z) * (0.7 + 0.5 * facing) * (1.0 + scan * 0.9);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        gl_FragColor = vec4(vColor, vAlpha * smoothstep(0.5, 0.22, d));
      }
    `,
  });

// Soft round sprites for arc heads, city markers and satellites.
const glowMaterial = () =>
  new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { ...shared },
    vertexShader: /* glsl */ `
      attribute float aSize;
      attribute float aAlpha;
      attribute vec3 aColor;
      uniform float uPx, uCam;
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        vAlpha = aAlpha;
        vColor = aColor;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPx * (uCam / -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float halo = smoothstep(0.5, 0.0, d);
        float core = smoothstep(0.2, 0.1, d);
        gl_FragColor = vec4(mix(vColor, vec3(1.0), core * 0.55), vAlpha * (0.35 * halo + 0.65 * core));
      }
    `,
  });

const coreMaterial = () =>
  new ShaderMaterial({
    transparent: true,
    depthWrite: true, // occludes the far-side dots and arcs
    vertexShader: /* glsl */ `
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        float f = pow(1.0 - max(dot(vN, vV), 0.0), 2.2);
        float l = clamp(dot(vN, normalize(vec3(-0.45, 0.55, 0.7))), 0.0, 1.0);
        vec3 col = mix(vec3(0.96, 0.96, 1.0), vec3(0.33, 0.31, 0.88), f);
        col = mix(col, vec3(0.42, 0.41, 0.9), (1.0 - l) * 0.16);
        gl_FragColor = vec4(col, 0.55 + 0.35 * f);
      }
    `,
  });

const atmosphereMaterial = () =>
  new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: BackSide,
    vertexShader: /* glsl */ `
      varying vec3 vN;
      void main() {
        vN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    // Back faces only: peaks just outside the globe's silhouette, fades both ways.
    fragmentShader: /* glsl */ `
      varying vec3 vN;
      void main() {
        float k = -vN.z;
        float i = smoothstep(0.0, 0.46, k) * (1.0 - smoothstep(0.46, 0.72, k));
        vec3 col = mix(vec3(0.208, 0.2, 0.804), vec3(0.024, 0.714, 0.831), smoothstep(0.1, 0.5, i));
        gl_FragColor = vec4(col, i * 0.6);
      }
    `,
  });

const arcMaterial = (color) =>
  new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uHead: { value: -1 },
      uTrail: { value: 0.5 },
      uFade: { value: 1 },
      uColor: { value: new Vector3(...color) },
    },
    vertexShader: /* glsl */ `
      varying float vU;
      void main() {
        vU = uv.x;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uHead, uTrail, uFade;
      uniform vec3 uColor;
      varying float vU;
      void main() {
        float d = uHead - vU;
        float trail = (d >= 0.0 && d < uTrail) ? pow(1.0 - d / uTrail, 1.6) : 0.0;
        float path = step(vU, uHead) * 0.32 * uFade;
        gl_FragColor = vec4(uColor, max(path, trail * 0.95));
      }
    `,
  });

/* ----------------------------------------------------------------- scene */

function buildLandPoints() {
  if (landPoints) {
    spinGroup.remove(landPoints);
    landPoints.geometry.dispose();
    landPoints.material.dispose();
  }
  const count = isSmall ? 9000 : 20000;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const pos = [];
  const seed = [];
  for (let i = 0; i < count; i++) {
    const y = 1 - ((i + 0.5) / count) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    if (mask) {
      const lon = Math.atan2(x, z);
      const lat = Math.asin(y);
      const px = Math.min(mask.w - 1, Math.floor(((lon / Math.PI + 1) / 2) * mask.w));
      const py = Math.min(mask.h - 1, Math.floor((0.5 - lat / Math.PI) * mask.h));
      if (mask.data[(py * mask.w + px) * 4] < 128) continue; // ocean
    }
    pos.push(x, y, z);
    seed.push(Math.random());
  }
  const geo = new BufferGeometry();
  geo.setAttribute("position", new Float32BufferAttribute(pos, 3));
  geo.setAttribute("aSeed", new Float32BufferAttribute(seed, 1));
  landPoints = new Points(geo, landMaterial(2.4));
  landPoints.renderOrder = 2;
  landPoints.frustumCulled = false;
  spinGroup.add(landPoints);
}

function buildGraticule() {
  const pts = [];
  const seg = 96;
  const R = 1.002;
  const ring = (fn) => {
    for (let i = 0; i < seg; i++) {
      const a = fn(i / seg);
      const b = fn((i + 1) / seg);
      pts.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
  };
  for (let lat = -60; lat <= 60; lat += 30) {
    const phi = (lat * Math.PI) / 180;
    ring((t) => new Vector3(Math.cos(phi) * Math.sin(t * Math.PI * 2), Math.sin(phi), Math.cos(phi) * Math.cos(t * Math.PI * 2)).multiplyScalar(R));
  }
  for (let lon = 0; lon < 180; lon += 30) {
    const lam = (lon * Math.PI) / 180;
    ring((t) => {
      const phi = t * Math.PI * 2;
      return new Vector3(Math.cos(phi) * Math.sin(lam), Math.sin(phi), Math.cos(phi) * Math.cos(lam)).multiplyScalar(R);
    });
  }
  const geo = new BufferGeometry();
  geo.setAttribute("position", new Float32BufferAttribute(pts, 3));
  const lines = new LineSegments(geo, new LineBasicMaterial({ color: 0x3533cd, transparent: true, opacity: 0.1, depthWrite: false }));
  lines.renderOrder = 1;
  spinGroup.add(lines);
}

function addGlowPoints(count) {
  const geo = new BufferGeometry();
  geo.setAttribute("position", new Float32BufferAttribute(new Float32Array(count * 3), 3));
  geo.setAttribute("aSize", new Float32BufferAttribute(new Float32Array(count), 1));
  geo.setAttribute("aAlpha", new Float32BufferAttribute(new Float32Array(count), 1));
  geo.setAttribute("aColor", new Float32BufferAttribute(new Float32Array(count * 3), 3));
  const pts = new Points(geo, glowMaterial());
  pts.frustumCulled = false;
  return pts;
}

function setGlow(pts, i, v, size, alpha, color) {
  const g = pts.geometry;
  g.attributes.position.setXYZ(i, v.x, v.y, v.z);
  g.attributes.aSize.setX(i, size);
  g.attributes.aAlpha.setX(i, alpha);
  g.attributes.aColor.setXYZ(i, color[0], color[1], color[2]);
}

function flagGlowDirty(pts) {
  const a = pts.geometry.attributes;
  a.position.needsUpdate = a.aSize.needsUpdate = a.aAlpha.needsUpdate = a.aColor.needsUpdate = true;
}

// Lay a ring flat on the globe's surface at a city, facing outwards.
function placeRing(mesh, v) {
  mesh.position.copy(v).multiplyScalar(1.007);
  mesh.quaternion.setFromUnitVectors(new Vector3(0, 0, 1), v.clone().normalize());
}

function buildCities() {
  cityVecs = CITIES.map(([, lat, lon]) => latLonToVec(lat, lon));
  const markers = addGlowPoints(CITIES.length);
  cityVecs.forEach((v, i) => setGlow(markers, i, v.clone().multiplyScalar(1.006), i === 0 ? 16 : 10, 1, i === 0 ? CYAN : INDIGO));
  flagGlowDirty(markers);
  markers.renderOrder = 4;
  spinGroup.add(markers);

  // Pulse rings: two on the hub, plus a small pool reused for arc arrivals.
  const ringGeo = new RingGeometry(0.016, 0.02, 48);
  const make = (hub) => {
    const mat = new MeshBasicMaterial({ color: hub ? 0x06b6d4 : 0x3533cd, transparent: true, opacity: 0, side: DoubleSide, depthWrite: false });
    const mesh = new Mesh(ringGeo, mat);
    mesh.renderOrder = 4;
    spinGroup.add(mesh);
    return mesh;
  };
  rings = [
    ...[0, 0.5].map((phase) => {
      const mesh = make(true);
      placeRing(mesh, cityVecs[0]);
      return { mesh, hub: true, phase, t: 0, active: true };
    }),
    ...Array.from({ length: 8 }, () => ({ mesh: make(false), hub: false, phase: 0, t: 1, active: false })),
  ];
}

function pulseAt(cityIndex) {
  const ring = rings.find((r) => !r.hub && !r.active);
  if (!ring) return;
  placeRing(ring.mesh, cityVecs[cityIndex]);
  ring.t = 0;
  ring.active = true;
}

function buildArc(arc) {
  const fromHub = Math.random() < 0.65;
  const a = fromHub ? 0 : Math.floor(Math.random() * CITIES.length);
  let b = Math.floor(Math.random() * CITIES.length);
  if (b === a) b = (b + 1) % CITIES.length;
  const va = cityVecs[a];
  const vb = cityVecs[b];
  const angle = Math.max(va.angleTo(vb), 0.05);
  const lift = 0.14 + angle * 0.3;
  const sinA = Math.sin(angle);
  const pts = [];
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    const h = 1.006 + lift * Math.sin(Math.PI * t);
    pts.push(
      new Vector3()
        .addScaledVector(va, Math.sin((1 - t) * angle) / sinA)
        .addScaledVector(vb, Math.sin(t * angle) / sinA)
        .multiplyScalar(h),
    );
  }
  arc.curve = new CatmullRomCurve3(pts);
  arc.b = b;
  arc.color = Math.random() < 0.7 ? INDIGO : CYAN;
  arc.t = -rand(0, 0.4); // negative = still waiting to launch
  arc.speed = rand(0.0055, 0.0095);
  arc.landed = false;
  arc.mesh.geometry.dispose();
  arc.mesh.geometry = new TubeGeometry(arc.curve, 64, 0.0034, 5, false);
  arc.mesh.material.uniforms.uColor.value.set(...arc.color);
}

function buildArcs() {
  const count = isSmall ? 4 : 8;
  heads = addGlowPoints(count);
  heads.renderOrder = 5;
  spinGroup.add(heads);
  arcs = Array.from({ length: count }, () => {
    const mesh = new Mesh(new BufferGeometry(), arcMaterial(INDIGO));
    mesh.renderOrder = 3;
    mesh.frustumCulled = false;
    spinGroup.add(mesh);
    const arc = { mesh };
    buildArc(arc);
    arc.t = rand(-0.2, 1.3); // stagger the first volley
    arc.landed = arc.t >= 1;
    return arc;
  });
}

function buildOrbits() {
  const defs = [
    { r: 1.38, rx: 1.22, rz: 0.45, speed: 0.00042, color: INDIGO },
    { r: 1.66, rx: 0.95, rz: -0.55, speed: -0.00028, color: CYAN },
  ];
  satellites = [];
  defs.forEach((d) => {
    const g = new Group();
    g.rotation.set(d.rx, 0, d.rz);
    const pts = [];
    for (let i = 0; i < 128; i++) pts.push(Math.cos((i / 128) * Math.PI * 2) * d.r, Math.sin((i / 128) * Math.PI * 2) * d.r, 0);
    const geo = new BufferGeometry();
    geo.setAttribute("position", new Float32BufferAttribute(pts, 3));
    const ring = new LineLoop(geo, new LineBasicMaterial({ color: d.color === CYAN ? 0x06b6d4 : 0x3533cd, transparent: true, opacity: 0.16, depthWrite: false }));
    ring.renderOrder = 1;
    g.add(ring);
    const sat = addGlowPoints(1);
    sat.renderOrder = 5;
    g.add(sat);
    satellites.push({ pts: sat, def: d, angle: rand(0, Math.PI * 2) });
    tiltGroup.add(g);
  });
}

function buildScene() {
  scene = new Scene();
  camera = new PerspectiveCamera(FOV, 1, 0.1, 50);
  tiltGroup = new Group();
  spinGroup = new Group();
  tiltGroup.add(spinGroup);
  scene.add(tiltGroup);

  const atmosphere = new Mesh(new SphereGeometry(1.16, 64, 64), atmosphereMaterial());
  atmosphere.renderOrder = -1;
  tiltGroup.add(atmosphere);

  const core = new Mesh(new SphereGeometry(0.985, 64, 64), coreMaterial());
  core.renderOrder = 0;
  tiltGroup.add(core);

  buildGraticule();
  buildLandPoints();
  buildCities();
  buildArcs();
  buildOrbits();

  // Start with Asia turned towards the visible (left-of-centre) half.
  spinGroup.rotation.y = -(CITIES[0][2] * Math.PI) / 180 - 0.65;
  tiltGroup.rotation.set(TILT_X, 0, TILT_Z);
}

/* ---------------------------------------------------------------- layout */

function resize() {
  const canvas = canvasRef.value;
  if (!canvas || !renderer) return;
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  width = rect.width;
  height = rect.height;

  const small = width < 768;
  const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
  renderer.setPixelRatio(dpr);
  renderer.setSize(width, height, false);

  // Globe centre sits on the right edge (desktop) or near the bottom-right (phones),
  // so only the left / upper half of the sphere is on screen.
  let radiusPx;
  let cx;
  let cy;
  if (small) {
    radiusPx = width * 0.52;
    cx = width;
    cy = height * 0.72;
  } else {
    radiusPx = Math.min(height * 0.5, width * 0.36);
    cx = width;
    cy = height * 0.5;
  }

  // Pick the camera distance so a unit sphere projects to radiusPx, then use a
  // view offset (off-axis frustum) to slide it to (cx, cy) with no lens distortion.
  const camDist = Math.sqrt(1 + (height / (2 * radiusPx * Math.tan((FOV * Math.PI) / 360))) ** 2);
  camera.fov = FOV;
  camera.aspect = width / height;
  camera.position.set(0, 0, camDist);
  camera.near = Math.max(0.1, camDist - 3);
  camera.far = camDist + 4;
  camera.setViewOffset(width, height, width / 2 - cx, height / 2 - cy, width, height);

  shared.uPx.value = dpr;
  shared.uCam.value = camDist;

  if (small !== isSmall) {
    isSmall = small;
    buildLandPoints();
  }
  landPoints.material.uniforms.uSize.value = Math.max(1.8, radiusPx * 0.0066);

  if (reduceMotion) render();
}

/* ------------------------------------------------------------- animation */

const tmp = new Vector3();

function update(dt, time) {
  const k = dt / 16.67; // normalise to 60fps steps
  shared.uTime.value = time / 1000;
  landPoints.material.uniforms.uScan.value = Math.sin(time * 0.00045) * 0.85;

  spinGroup.rotation.y += dt * 0.0001;
  pointer.sx += (pointer.x - pointer.sx) * 0.05 * k;
  pointer.sy += (pointer.y - pointer.sy) * 0.05 * k;
  tiltGroup.rotation.x = TILT_X + pointer.sy * 0.14;
  tiltGroup.rotation.y = pointer.sx * 0.22;

  arcs.forEach((arc, i) => {
    arc.t += arc.speed * k;
    const life = 1 + arc.mesh.material.uniforms.uTrail.value + 0.15;
    if (arc.t >= 1 && !arc.landed) {
      arc.landed = true;
      pulseAt(arc.b);
    }
    if (arc.t > life) buildArc(arc);
    writeArcState(arc, i);
  });
  flagGlowDirty(heads);

  for (const r of rings) {
    if (r.hub) {
      const p = (time / 2200 + r.phase) % 1;
      r.mesh.scale.setScalar(1 + p * 5);
      r.mesh.material.opacity = 0.55 * (1 - p);
    } else if (r.active) {
      r.t += 0.018 * k;
      if (r.t >= 1) {
        r.active = false;
        r.mesh.material.opacity = 0;
      } else {
        r.mesh.scale.setScalar(1 + r.t * 4.5);
        r.mesh.material.opacity = 0.6 * (1 - r.t);
      }
    }
  }

  for (const s of satellites) {
    s.angle += s.def.speed * dt;
    setGlow(s.pts, 0, tmp.set(Math.cos(s.angle) * s.def.r, Math.sin(s.angle) * s.def.r, 0), 11, 1, s.def.color);
    flagGlowDirty(s.pts);
  }
}

function writeArcState(arc, i) {
  const u = arc.mesh.material.uniforms;
  u.uHead.value = arc.t;
  u.uFade.value = 1 - Math.min(1, Math.max(0, (arc.t - 1) / (u.uTrail.value + 0.15)));
  if (arc.t >= 0 && arc.t <= 1) {
    setGlow(heads, i, arc.curve.getPoint(arc.t), 20, 1, arc.color);
  } else {
    setGlow(heads, i, tmp.set(0, 0, 0), 0, 0, arc.color);
  }
}

function render() {
  renderer.render(scene, camera);
}

function loop(time) {
  rafId = 0;
  if (!isVisible || document.hidden || disposed) return;
  const dt = lastTime ? Math.min(time - lastTime, 50) : 16.67;
  lastTime = time;
  update(dt, time);
  render();
  rafId = requestAnimationFrame(loop);
}

function start() {
  if (reduceMotion || rafId || !renderer) return;
  lastTime = 0;
  rafId = requestAnimationFrame(loop);
}

function stop() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
}

function onPointerMove(e) {
  pointer.x = e.clientX / window.innerWidth - 0.5;
  pointer.y = e.clientY / window.innerHeight - 0.5;
}

function onVisibility() {
  if (document.hidden) stop();
  else start();
}

async function init(canvas) {
  mask = await loadMask();
  if (disposed) return;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: window.innerWidth >= 768, powerPreference: "high-performance" });
  } catch (err) {
    console.warn("Hero globe skipped, WebGL unavailable:", err?.message);
    return; // leave the plain gradient
  }
  renderer.setClearColor(0x000000, 0);
  isSmall = canvas.getBoundingClientRect().width < 768;
  buildScene();
  resize();

  if (reduceMotion) {
    // One still frame with arcs mid-flight so it still reads as "connected".
    arcs.forEach((arc, i) => {
      arc.t = 0.55 + (i % 3) * 0.15;
      writeArcState(arc, i);
    });
    flagGlowDirty(heads);
    render();
  }

  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible) start();
    else stop();
  });
  observer.observe(canvas);
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.addEventListener("visibilitychange", onVisibility);

  ready.value = true;
  start();
}

onMounted(async () => {
  // Inside <LazyHeroGlobe>'s Suspense boundary the canvas isn't in the document
  // yet when this hook fires, so the template ref is still null until next tick.
  await nextTick();
  const canvas = canvasRef.value;
  if (!canvas) return;
  reduceMotion = prefersReducedMotion();
  // Let the hero text paint first; the globe is decoration.
  const kick = () =>
    init(canvas).catch((err) => console.error("Hero globe failed to start:", err));
  if ("requestIdleCallback" in window) idleHandle = window.requestIdleCallback(kick, { timeout: 1500 });
  else idleHandle = window.setTimeout(kick, 300);
});

onBeforeUnmount(() => {
  disposed = true;
  stop();
  if ("cancelIdleCallback" in window) window.cancelIdleCallback(idleHandle);
  else window.clearTimeout(idleHandle);
  observer?.disconnect();
  resizeObserver?.disconnect();
  window.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("visibilitychange", onVisibility);
  scene?.traverse((o) => {
    o.geometry?.dispose();
    o.material?.dispose();
  });
  renderer?.dispose();
  renderer?.forceContextLoss();
});
</script>
