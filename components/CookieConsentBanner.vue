<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="consent === 'pending'"
      class="fixed bottom-0 inset-x-0 z-[70] p-4 sm:p-6"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div
        class="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <p class="text-sm text-gray-600 leading-relaxed flex-1">
          We use cookies to understand site traffic and improve your experience.
          Read our
          <NuxtLink to="/privacy-policy" class="text-[#3533cd] font-medium hover:underline">
            Privacy Policy
          </NuxtLink>
          to learn more.
        </p>
        <div class="flex gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            class="flex-1 sm:flex-none px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors duration-200"
            @click="decline"
          >
            Decline
          </button>
          <button
            class="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white text-sm font-semibold hover:shadow-lg transition-all duration-200"
            @click="accept"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { consent, load, accept, decline } = useCookieConsent();

onMounted(() => {
  load();
});
</script>
