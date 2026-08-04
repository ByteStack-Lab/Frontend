<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-purple-50 px-6 py-20 overflow-hidden relative"
  >
    <!-- Animated Background Grid (matches site-wide hero sections) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
      ></div>
      <div
        class="absolute right-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/15 to-transparent"
      ></div>
      <div
        class="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"
      ></div>
    </div>

    <div class="relative text-center max-w-xl mx-auto">
      <NuxtLink to="/" class="inline-block mb-10">
        <img
          src="/images/bytestacklab-180x48.png"
          srcset="/images/bytestacklab-180x48.png 1x, /images/bytestacklab360x96.png 2x"
          alt="ByteStackLab"
          class="h-10 mx-auto"
        />
      </NuxtLink>

      <div
        class="text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent mb-6"
      >
        {{ statusCode }}
      </div>

      <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {{ heading }}
      </h1>
      <p class="text-lg text-gray-600 mb-10 leading-relaxed">
        {{ message }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          @click="goHome"
        >
          Back to Home
        </button>
        <NuxtLink
          to="/contact"
          class="border-2 border-[#3533cd] text-[#3533cd] px-8 py-3 rounded-lg font-semibold hover:bg-[#3533cd] hover:text-white transition-all duration-300"
        >
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
});

const statusCode = computed(() => props.error?.statusCode || 500);

const heading = computed(() =>
  statusCode.value === 404 ? "Page Not Found" : "Something Went Wrong",
);

const message = computed(() =>
  statusCode.value === 404
    ? "The page you're looking for doesn't exist or may have been moved."
    : "An unexpected error occurred. Please try again, or head back to the homepage.",
);

useHead({
  title:
    statusCode.value === 404
      ? "Page Not Found | ByteStackLab"
      : "Error | ByteStackLab",
  meta: [{ name: "robots", content: "noindex, nofollow" }],
});

const goHome = () => clearError({ redirect: "/" });
</script>
