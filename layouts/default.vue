<template>
  <div class="min-h-screen bg-white overflow-x-hidden">
    <!-- Page Preloader -->
    <PagePreloader :show="isPageLoading" />
    
    <!--
      Keyboard/screen-reader users landed on every page having to tab through
      the whole navigation (and the mobile tab bar) before reaching content.
      Visually hidden until focused, then it appears above the fixed navbar.
    -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:rounded-lg focus:bg-[#3533cd] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
    >
      Skip to main content
    </a>

    <!-- Navigation -->
    <NavBar />

    <!-- Main Content -->
    <main id="main-content" tabindex="-1" class="pt-20 focus:outline-none">
      <slot />
    </main>

    <!-- Footer -->
    <FooterSection />

    <!-- AI Assistant -->
    <AiChatWidget />

    <!-- Cookie Consent -->
    <CookieConsentBanner />
  </div>
</template>

<script setup>
// Explicit component imports
import NavBar from '~/components/NavBar.vue'
import FooterSection from '~/components/FooterSection.vue'
import PagePreloader from '~/components/PagePreloader.vue'
import AiChatWidget from '~/components/AiChatWidget.vue'
import CookieConsentBanner from '~/components/CookieConsentBanner.vue'

const nuxtApp = useNuxtApp()
const { isPageLoading, startLoading, stopLoading, resetLoading } = usePageLoader()

// Drive the preloader off Nuxt's real navigation lifecycle.
//
// This previously combined a route watcher, a router.beforeEach and a
// router.afterEach — each starting/stopping the loader on its own timer, which
// added ~1.1s of artificial delay to every single in-app navigation. Nuxt's
// client-side routing is already instant; the loader now only appears while a
// page genuinely has work outstanding (an unresolved useAsyncData, a lazy
// chunk), which on a normal connection means it never flashes at all.
//
// Registering the guards inside onMounted also re-registered them on every
// layout mount, so they stacked up. App-level hooks do not have that problem.
nuxtApp.hook('page:start', startLoading)
nuxtApp.hook('page:finish', stopLoading)
// Safety net: a cancelled or errored navigation never fires page:finish.
nuxtApp.hook('page:loading:end', resetLoading)
</script>

<style scoped>
/* Add any layout-specific styles here */
</style>
 