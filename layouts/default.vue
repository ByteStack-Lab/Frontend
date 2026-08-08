<template>
  <div class="min-h-screen bg-white overflow-x-hidden">
    <!-- Page Preloader -->
    <PagePreloader :show="isPageLoading" />
    
    <!-- Navigation -->
    <NavBar />

    <!-- Main Content -->
    <main class="pt-20">
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
 