/**
 * Motion helpers that honour the OS-level "reduce motion" accessibility
 * setting (WCAG 2.3.3).
 *
 * The `prefers-reduced-motion` block in assets/css/main.css neutralises CSS
 * animations and `scroll-behavior: smooth`, but it cannot help when a script
 * passes `behavior: 'smooth'` to scrollTo()/scrollIntoView() — an explicit
 * argument always wins over the stylesheet. So anything scrolling from JS has
 * to ask first.
 *
 * Auto-imported by Nuxt from utils/ — no import statement needed.
 */

/** True when the visitor has asked their OS to minimise animation. */
export const prefersReducedMotion = () =>
  import.meta.client &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * ScrollBehavior to pass to scrollTo()/scrollIntoView().
 * Returns 'auto' (jump straight there) for reduced-motion visitors.
 */
export const scrollBehavior = () => (prefersReducedMotion() ? 'auto' : 'smooth')
