import { revealDirective } from '~/utils/reveal'

// Universal (not `.client`) on purpose: the server has to know the directive
// exists, even though it renders nothing for it — see utils/reveal.ts.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', revealDirective)
})
