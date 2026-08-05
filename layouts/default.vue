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
import { watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Explicit component imports
import NavBar from '~/components/NavBar.vue'
import FooterSection from '~/components/FooterSection.vue'
import PagePreloader from '~/components/PagePreloader.vue'
import AiChatWidget from '~/components/AiChatWidget.vue'
import CookieConsentBanner from '~/components/CookieConsentBanner.vue'

const route = useRoute()
const router = useRouter()
const { isPageLoading, startLoading, stopLoading } = usePageLoader()

// Handle route changes
watch(() => route.path, (newPath, oldPath) => {
  if (oldPath && newPath !== oldPath) {
    startLoading()
    
    // Stop loading after a minimum duration
    setTimeout(() => {
      stopLoading()
    }, 800)
  }
})

// Handle router navigation start/finish
onMounted(() => {
  // Show preloader on route start
  router.beforeEach((to, from) => {
    if (from.path && to.path !== from.path) {
      startLoading()
    }
  })
  
  // Hide preloader on route complete
  router.afterEach(() => {
    setTimeout(() => {
      stopLoading()
    }, 500)
  })
})
</script>

<style scoped>
/* Add any layout-specific styles here */
</style>
 