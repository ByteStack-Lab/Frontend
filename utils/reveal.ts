import type { DirectiveBinding, ObjectDirective } from 'vue'
import { prefersReducedMotion } from '~/utils/motion'

/**
 * `v-reveal` — fade/slide an element in the first time it scrolls into view.
 *
 *   <div v-reveal>                       fade up
 *   <div v-reveal:left="150">            slide in from the left, 150ms delay
 *   <div v-reveal="{ from: 'scale', delay: 100, duration: 900 }">
 *   <div v-reveal.stagger="90">          reveal each direct child, 90ms apart
 *   <div v-reveal:wipe>                  left-to-right wipe (lines, rules)
 *
 * Progressive enhancement, deliberately:
 *  - The server renders every element fully visible. The hidden state is only
 *    applied after hydration, and only to elements that are still below the
 *    fold — so crawlers, no-JS visitors and the above-the-fold paint (LCP) are
 *    never affected.
 *  - Once revealed, the `data-reveal*` attributes and inline custom properties
 *    are removed again, so the element goes back to exactly its authored styles
 *    (its own hover transitions, transforms, `position: fixed` descendants…).
 *  - Only `opacity`, `transform` and `clip-path` ever change: no layout shift.
 *  - Skipped entirely for `prefers-reduced-motion`, without IntersectionObserver,
 *    and for elements that are already on screen (or above it) when they mount.
 *
 * The styles for the two states live in assets/css/main.css.
 */

export type RevealFrom = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' | 'wipe'

export interface RevealOptions {
  /** Where the element comes from. Horizontal variants fall back to `up` on phones. */
  from?: RevealFrom
  /** ms to wait after the element enters the viewport. */
  delay?: number
  /** ms the transition takes. */
  duration?: number
  /** px of travel for the slide variants. */
  distance?: number
  /** `.stagger` only: ms between siblings that enter in the same frame. */
  step?: number
}

/** A bare number is the delay, or — with `.stagger` — the step between children. */
export type RevealValue = number | RevealOptions | undefined

interface RevealState {
  delay: number
  duration: number
  /** > 0 → siblings revealed in the same observer batch are offset by this much. */
  step: number
  timer?: number
}

const DEFAULT_DURATION = 700
const DEFAULT_DISTANCE = 28
const DEFAULT_STEP = 90
/** Cap so a long list never makes its last items wait noticeably. */
const MAX_STAGGER_STEPS = 6
/** Share of the viewport height above which an element counts as "already visible". */
const TRIGGER_LINE = 0.9
const PHONE_QUERY = '(max-width: 767px)'
/** Empty children up to this tall (px) are treated as decorative rules. */
const RULE_MAX_HEIGHT = 8

const states = new WeakMap<HTMLElement, RevealState>()
const staggerChildren = new WeakMap<HTMLElement, HTMLElement[]>()
const pending = new Set<HTMLElement>()
let observer: IntersectionObserver | null = null
let listeningForPageEnd = false

const canAnimate = () =>
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window &&
  !prefersReducedMotion()

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(onIntersect, {
      threshold: 0,
      // Same line as TRIGGER_LINE: fire once the element's top crosses 90% of the viewport.
      rootMargin: `0px 0px -${Math.round((1 - TRIGGER_LINE) * 100)}% 0px`,
    })
  }
  return observer
}

function onIntersect(entries: IntersectionObserverEntry[]) {
  const entered = entries
    .filter((entry) => entry.isIntersecting)
    // Top-to-bottom, left-to-right, so staggered delays read in natural order.
    .sort(
      (a, b) =>
        a.boundingClientRect.top - b.boundingClientRect.top ||
        a.boundingClientRect.left - b.boundingClientRect.left,
    )

  // Siblings that arrive in the same batch are one visual row/group: stagger within it.
  const perParent = new Map<Element | null, number>()
  for (const { target } of entered) {
    const el = target as HTMLElement
    const state = states.get(el)
    if (!state) continue
    let offset = 0
    if (state.step > 0) {
      const index = perParent.get(el.parentElement) ?? 0
      perParent.set(el.parentElement, index + 1)
      offset = Math.min(index, MAX_STAGGER_STEPS) * state.step
    }
    show(el, state.delay + offset)
  }
}

function show(el: HTMLElement, delay: number) {
  const state = states.get(el)
  if (!state) return
  observer?.unobserve(el)
  pending.delete(el)

  // Make sure the hidden state has been painted-in so the change below transitions.
  void el.offsetWidth
  el.style.setProperty('--reveal-delay', `${delay}ms`)
  el.style.setProperty('--reveal-duration', `${state.duration}ms`)
  el.setAttribute('data-reveal', 'shown')

  // Hand the element back to its authored styles once the transition is done.
  state.timer = window.setTimeout(() => finish(el), delay + state.duration + 120)
}

function finish(el: HTMLElement) {
  el.removeAttribute('data-reveal')
  el.removeAttribute('data-reveal-type')
  for (const prop of ['x', 'y', 'scale', 'delay', 'duration']) {
    el.style.removeProperty(`--reveal-${prop}`)
  }
  states.delete(el)
}

function teardown(el: HTMLElement) {
  const state = states.get(el)
  if (state?.timer) window.clearTimeout(state.timer)
  observer?.unobserve(el)
  pending.delete(el)
  states.delete(el)
}

// An element sitting in the last few % of the page can never cross the trigger
// line, so reveal whatever is left once the visitor reaches the bottom.
function onScroll() {
  if (pending.size === 0) {
    window.removeEventListener('scroll', onScroll)
    listeningForPageEnd = false
    return
  }
  const atBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
  if (atBottom) {
    for (const el of [...pending]) show(el, states.get(el)?.delay ?? 0)
  }
}

function register(
  el: HTMLElement,
  from: RevealFrom,
  distance: number,
  state: RevealState,
) {
  const rect = el.getBoundingClientRect()
  // Already on screen, scrolled past, or not rendered (display: none): leave it alone.
  if (rect.bottom <= 0 || rect.top < window.innerHeight * TRIGGER_LINE) return

  const onPhone = window.matchMedia?.(PHONE_QUERY).matches
  let x = 0
  let y = 0
  let scale = 1
  switch (from) {
    case 'up':
      y = distance
      break
    case 'down':
      y = -distance
      break
    case 'left':
    case 'right':
      if (onPhone) y = distance
      else x = (from === 'left' ? -1 : 1) * Math.round(distance * 1.15)
      break
    case 'scale':
      scale = 0.94
      y = Math.round(distance * 0.4)
      break
    default:
      break // 'fade' and 'wipe' don't move
  }

  states.set(el, state)
  el.style.setProperty('--reveal-x', `${x}px`)
  el.style.setProperty('--reveal-y', `${y}px`)
  el.style.setProperty('--reveal-scale', String(scale))
  if (from === 'wipe') el.setAttribute('data-reveal-type', 'wipe')
  el.setAttribute('data-reveal', 'hidden')

  pending.add(el)
  getObserver().observe(el)
  if (!listeningForPageEnd) {
    listeningForPageEnd = true
    window.addEventListener('scroll', onScroll, { passive: true })
  }
}

function apply(el: HTMLElement, binding: DirectiveBinding<RevealValue>) {
  if (!canAnimate()) return

  const stagger = Boolean(binding.modifiers.stagger)
  const value = binding.value
  const options: RevealOptions = typeof value === 'number' ? {} : (value ?? {})
  const bareNumber = typeof value === 'number' ? value : undefined

  const from = (binding.arg as RevealFrom | undefined) ?? options.from ?? 'up'
  const distance = options.distance ?? DEFAULT_DISTANCE
  const duration = options.duration ?? DEFAULT_DURATION
  const delay = stagger ? (options.delay ?? 0) : (options.delay ?? bareNumber ?? 0)
  const step = stagger ? (options.step ?? bareNumber ?? DEFAULT_STEP) : 0

  if (stagger) {
    const children = Array.from(el.children) as HTMLElement[]
    staggerChildren.set(el, children)
    for (const child of children) {
      // Thin empty bars (the little gradient rule above a section heading)
      // draw themselves left to right instead of sliding up like the text.
      const isRule =
        child.childElementCount === 0 &&
        !child.textContent?.trim() &&
        child.getBoundingClientRect().height <= RULE_MAX_HEIGHT
      register(child, isRule ? 'wipe' : from, distance, { delay, duration, step })
    }
  } else {
    register(el, from, distance, { delay, duration, step: 0 })
  }
}

export const revealDirective: ObjectDirective<HTMLElement, RevealValue> = {
  mounted: apply,
  unmounted(el) {
    teardown(el)
    staggerChildren.get(el)?.forEach(teardown)
    staggerChildren.delete(el)
  },
  // Nothing is rendered differently on the server — see the header comment.
  getSSRProps: () => ({}),
}
