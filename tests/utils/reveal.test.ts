import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

type Binding = { value?: unknown; arg?: string; modifiers: Record<string, boolean> }

// Minimal IntersectionObserver: records what is observed and lets a test fire it.
class FakeObserver {
  static instance: FakeObserver | null = null
  observed = new Set<Element>()
  constructor(public callback: IntersectionObserverCallback) {
    FakeObserver.instance = this
  }
  observe(el: Element) {
    this.observed.add(el)
  }
  unobserve(el: Element) {
    this.observed.delete(el)
  }
  disconnect() {
    this.observed.clear()
  }
  /** Report the given elements as entering the viewport in one batch. */
  enter(...els: HTMLElement[]) {
    const entries = els.map((el) => ({
      target: el,
      isIntersecting: true,
      boundingClientRect: el.getBoundingClientRect(),
    }))
    this.callback(entries as unknown as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
  }
}

const VIEWPORT_HEIGHT = 800

/** An element positioned `top` px from the top of the viewport. */
const elementAt = (top: number, left = 0) => {
  const el = document.createElement('div')
  el.getBoundingClientRect = () =>
    ({ top, bottom: top + 100, left, right: left + 100, width: 100, height: 100 }) as DOMRect
  return el
}

const binding = (init: Partial<Binding> = {}): Binding => ({ modifiers: {}, ...init })

async function loadDirective(opts: { reducedMotion?: boolean } = {}) {
  vi.resetModules()
  FakeObserver.instance = null
  vi.stubGlobal('IntersectionObserver', FakeObserver)
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: query.includes('prefers-reduced-motion') ? Boolean(opts.reducedMotion) : false,
  }))
  Object.defineProperty(window, 'innerHeight', { value: VIEWPORT_HEIGHT, configurable: true })
  const { revealDirective } = await import('~/utils/reveal')
  const mount = (el: HTMLElement, b: Binding) =>
    (revealDirective.mounted as (el: HTMLElement, b: unknown) => void)(el, b)
  const unmount = (el: HTMLElement) =>
    (revealDirective.unmounted as (el: HTMLElement) => void)(el)
  return { revealDirective, mount, unmount }
}

describe('v-reveal', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('renders nothing different on the server', async () => {
    const { revealDirective } = await loadDirective()
    expect(revealDirective.getSSRProps?.({} as never, {} as never)).toEqual({})
  })

  it('leaves elements that are already on screen alone', async () => {
    const { mount } = await loadDirective()
    const el = elementAt(100)

    mount(el, binding())

    expect(el.hasAttribute('data-reveal')).toBe(false)
    expect(FakeObserver.instance?.observed.size ?? 0).toBe(0)
  })

  it('leaves elements that are already scrolled past alone', async () => {
    const { mount } = await loadDirective()
    const el = elementAt(-500)

    mount(el, binding())

    expect(el.hasAttribute('data-reveal')).toBe(false)
  })

  it('hides a below-the-fold element, reveals it on entry, then hands styles back', async () => {
    const { mount } = await loadDirective()
    const el = elementAt(2000)

    mount(el, binding())
    expect(el.getAttribute('data-reveal')).toBe('hidden')
    expect(el.style.getPropertyValue('--reveal-y')).toBe('28px')

    FakeObserver.instance!.enter(el)
    expect(el.getAttribute('data-reveal')).toBe('shown')
    expect(FakeObserver.instance!.observed.has(el)).toBe(false) // reveals once

    vi.advanceTimersByTime(2000)
    expect(el.hasAttribute('data-reveal')).toBe(false)
    expect(el.style.getPropertyValue('--reveal-y')).toBe('')
  })

  it('uses a bare number as the delay', async () => {
    const { mount } = await loadDirective()
    const el = elementAt(2000)

    mount(el, binding({ value: 250 }))
    FakeObserver.instance!.enter(el)

    expect(el.style.getPropertyValue('--reveal-delay')).toBe('250ms')
  })

  it('slides in from the side named by the argument, but only vertically on phones', async () => {
    const desktop = await loadDirective()
    const a = elementAt(2000)
    desktop.mount(a, binding({ arg: 'left' }))
    expect(a.style.getPropertyValue('--reveal-x')).toBe('-32px')
    expect(a.style.getPropertyValue('--reveal-y')).toBe('0px')

    const phone = await loadDirective()
    vi.stubGlobal('matchMedia', (query: string) => ({ matches: query.includes('max-width') }))
    const b = elementAt(2000)
    phone.mount(b, binding({ arg: 'left' }))
    expect(b.style.getPropertyValue('--reveal-x')).toBe('0px')
    expect(b.style.getPropertyValue('--reveal-y')).toBe('28px')
  })

  it('wipe only marks the element, it does not set opacity or transform', async () => {
    const { mount } = await loadDirective()
    const el = elementAt(2000)

    mount(el, binding({ arg: 'wipe' }))

    expect(el.getAttribute('data-reveal-type')).toBe('wipe')
    expect(el.style.opacity).toBe('')
    expect(el.style.transform).toBe('')
  })

  it('staggers children that enter together, in reading order', async () => {
    const { mount } = await loadDirective()
    const parent = document.createElement('div')
    const [a, b, c] = [elementAt(2000, 0), elementAt(2000, 200), elementAt(2000, 400)]
    parent.append(a, b, c)

    mount(parent, binding({ value: 100, modifiers: { stagger: true } }))
    expect(parent.hasAttribute('data-reveal')).toBe(false) // the container itself stays put
    FakeObserver.instance!.enter(c, a, b) // arrival order must not matter

    expect(a.style.getPropertyValue('--reveal-delay')).toBe('0ms')
    expect(b.style.getPropertyValue('--reveal-delay')).toBe('100ms')
    expect(c.style.getPropertyValue('--reveal-delay')).toBe('200ms')
  })

  it('draws thin empty rules with a wipe while the text children slide up', async () => {
    const { mount } = await loadDirective()
    const parent = document.createElement('div')
    const rule = elementAt(2000)
    rule.getBoundingClientRect = () =>
      ({ top: 2000, bottom: 2004, left: 0, right: 64, width: 64, height: 4 }) as DOMRect
    const heading = elementAt(2040)
    heading.textContent = 'Services'
    parent.append(rule, heading)

    mount(parent, binding({ value: 110, modifiers: { stagger: true } }))

    expect(rule.getAttribute('data-reveal-type')).toBe('wipe')
    expect(heading.hasAttribute('data-reveal-type')).toBe(false)
    expect(heading.style.getPropertyValue('--reveal-y')).toBe('28px')
  })

  it('does nothing when the visitor prefers reduced motion', async () => {
    const { mount } = await loadDirective({ reducedMotion: true })
    const el = elementAt(2000)

    mount(el, binding())

    expect(el.hasAttribute('data-reveal')).toBe(false)
  })

  it('stops observing and clears timers on unmount', async () => {
    const { mount, unmount } = await loadDirective()
    const el = elementAt(2000)

    mount(el, binding())
    expect(FakeObserver.instance!.observed.has(el)).toBe(true)
    unmount(el)

    expect(FakeObserver.instance!.observed.has(el)).toBe(false)
  })
})
