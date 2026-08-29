<template>
  <section
    class="relative bg-gradient-to-br from-gray-50 to-purple-50 min-h-[62vh] md:min-h-screen lg:min-h-[92vh] flex items-start md:items-center overflow-hidden pt-10 md:pt-20 lg:pt-12"
  >
    <!-- Animated Technology Icons Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Matrix-style Futuristic Grid Lines -->
      <div class="absolute inset-0">
        <!-- Vertical Grid Lines -->
        <div
          class="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute left-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute left-96 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-400/25 to-transparent animate-pulse-fast"
        />
        <div
          class="absolute right-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute right-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-400/20 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute right-96 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent animate-pulse-fast"
        />

        <!-- Horizontal Grid Lines -->
        <div
          class="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute top-64 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute top-96 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/25 to-transparent animate-pulse-fast"
        />
        <div
          class="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute bottom-64 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute bottom-96 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent animate-pulse-fast"
        />

        <!-- Diagonal Matrix Lines -->
        <div
          class="absolute top-20 left-20 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent rotate-45 animate-glow-slow"
        />
        <div
          class="absolute top-40 right-20 w-48 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -rotate-45 animate-glow-medium"
        />
        <div
          class="absolute bottom-20 left-40 w-56 h-px bg-gradient-to-r from-transparent via-green-500/35 to-transparent rotate-12 animate-glow-fast"
        />
        <div
          class="absolute bottom-40 right-40 w-40 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent -rotate-12 animate-glow-slow"
        />

        <!-- Moving Data Points -->
        <div
          class="absolute top-48 left-36 w-1 h-1 bg-blue-500 rounded-full animate-data-flow-1"
        />
        <div
          class="absolute top-72 right-48 w-1 h-1 bg-purple-500 rounded-full animate-data-flow-2"
        />
        <div
          class="absolute bottom-48 left-72 w-1 h-1 bg-green-500 rounded-full animate-data-flow-3"
        />
        <div
          class="absolute bottom-72 right-36 w-1 h-1 bg-indigo-500 rounded-full animate-data-flow-4"
        />
        <div
          class="absolute top-60 left-80 w-1 h-1 bg-cyan-500 rounded-full animate-data-flow-5"
        />
        <div
          class="absolute bottom-60 right-80 w-1 h-1 bg-pink-500 rounded-full animate-data-flow-6"
        />

        <!-- Connection Nodes -->
        <div
          class="absolute top-36 left-68 w-2 h-2 bg-blue-400 rounded-full animate-node-pulse opacity-60"
        />
        <div
          class="absolute top-68 right-72 w-2 h-2 bg-purple-400 rounded-full animate-node-pulse opacity-50"
          style="animation-delay: 0.5s"
        />
        <div
          class="absolute bottom-36 left-88 w-2 h-2 bg-green-400 rounded-full animate-node-pulse opacity-70"
          style="animation-delay: 1s"
        />
        <div
          class="absolute bottom-68 right-56 w-2 h-2 bg-indigo-400 rounded-full animate-node-pulse opacity-55"
          style="animation-delay: 1.5s"
        />
      </div>
    </div>

    <!-- Container Div -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-5 md:py-12 lg:py-10">
      <div
        class="grid md:grid-cols-2 gap-8 lg:gap-10 items-center"
      >
        <!-- Left Content - 50% -->
        <div class="space-y-8">
          <!-- Small Text Above -->
          <div class="space-y-6">
            <p
              class="text-sm lg:text-base text-gray-500 uppercase tracking-wider font-medium"
            >
              AI-FIRST SOFTWARE DEVELOPMENT COMPANY
            </p>

            <h1
              class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900"
            >
              <span class="text-black">Software That Runs</span><br >
              <span
                class="bg-gradient-to-r from-[#3533cd] via-[#5450e0] to-[#1e1b69] bg-clip-text text-transparent"
              >
                Your Business For You</span
              >
            </h1>

            <p
              class="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              We design, build and maintain AI automation, SaaS platforms and
              enterprise applications — shipped in two-week sprints, owned by
              you from day one.
            </p>

            <!-- Specialty chips: tells a first-time visitor what we actually
                 do before they scroll — this is what mobile sees first,
                 since HeroTerminal now falls below the CTA row on small
                 screens (see the comment near HeroTerminal below). -->
            <ul class="flex flex-wrap gap-2 pt-1">
              <li
                v-for="specialty in specialties"
                :key="specialty"
                class="text-xs sm:text-sm font-medium text-[#1e1b69] bg-white/70 border border-[#3533cd]/20 rounded-full px-3 py-1.5"
              >
                {{ specialty }}
              </li>
            </ul>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-row items-center gap-3 sm:gap-4 pt-4">
            <NuxtLink
              to="/contact"
              class="interactive-button bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-4 py-2.5 sm:px-8 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              Book a Free Consultation
              <svg aria-hidden="true"
                class="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="/services"
              class="flex items-center justify-center whitespace-nowrap text-gray-700 font-semibold text-base px-2 hover:text-[#3533cd] transition-colors duration-300"
            >
              Explore Services
              <svg aria-hidden="true"
                class="ml-1.5 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>

            <!-- Only rendered once a real intro video is configured — see
                 NUXT_PUBLIC_INTRO_VIDEO_ID in .env.example. -->
            <button
              v-if="introVideoId"
              type="button"
              aria-label="Play the ByteStackLab intro video"
              class="hidden sm:flex items-center justify-center text-gray-700 font-medium text-base hover:text-[#3533cd] transition-colors duration-300"
              @click="openVideoModal"
            >
              <span
                class="w-11 h-11 bg-[#3533cd] rounded-full flex items-center justify-center"
              >
                <svg aria-hidden="true"
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span class="ml-3 whitespace-nowrap">Watch our story</span>
            </button>
          </div>
        </div>

        <!--
          Hero Terminal — was `hidden md:flex`, meaning mobile visitors (the
          majority of BD traffic) got a text-only hero with nothing below the
          CTAs. HeroTerminal is already `w-full` with no desktop-only sizing,
          and the grid above collapses to a single stacked column below `md`,
          so dropping `hidden` is enough: it now falls in after the CTA row
          instead of competing with it for the first screen.
        -->
        <div class="flex items-center justify-stretch relative">
          <div class="relative z-10 w-[calc(100%-10px)] ml-auto">
            <HeroTerminal />
          </div>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <div
      v-if="showVideoModal"
      class="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300"
      style="background: rgba(0, 0, 0, 0.15); backdrop-filter: blur(2px)"
      @click="closeVideoModal"
    >
      <div
        class="relative w-full max-w-5xl mx-auto p-8 transform transition-all duration-300 scale-100"
        @click.stop
      >
        <!-- Close Button -->
        <button
          aria-label="Close video"
          class="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-red-50 transition-all duration-300 z-20 border-4 border-white ring-4 ring-purple-500/40 hover:ring-red-500/50"
          @click="closeVideoModal"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Video Container -->
        <div
          class="relative bg-white rounded-2xl overflow-hidden border-4 border-white ring-8 ring-purple-500/20 transform hover:scale-[1.02] transition-all duration-300 video-container shadow-2xl"
        >
          <div class="aspect-video">
            <iframe
              v-if="showVideoModal"
              class="w-full h-full"
              :src="videoUrl"
              title="Company Story Video"
              frameborder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
              "
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import HeroTerminal from '~/components/HeroTerminal.vue';

const specialties = ["AI Automation", "SaaS Platforms", "Enterprise Apps", "Mobile Apps"];

// The hero used to hard-code the YouTube ID `ScMzIvxBSi4` — a tutorial
// placeholder, not a ByteStackLab video. Shipping that live is a credibility
// risk, so the play button now only renders when a real ID is configured via
// NUXT_PUBLIC_INTRO_VIDEO_ID. Set it and the button comes back.
const introVideoId = computed(() => useRuntimeConfig().public.introVideoId || "");

// Video modal state
const showVideoModal = ref(false);
const videoUrl = computed(
  () =>
    `https://www.youtube-nocookie.com/embed/${introVideoId.value}?autoplay=1&rel=0&modestbranding=1&controls=1`,
);

// Video modal functions
const openVideoModal = () => {
  showVideoModal.value = true;
};

const closeVideoModal = () => {
  showVideoModal.value = false;
};

// Close modal on escape key
const handleKeyDown = (event) => {
  if (event.key === "Escape" && showVideoModal.value) {
    closeVideoModal();
  }
};

// Add event listener on mount
onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

// Remove event listener on unmount
onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped>
/* Matrix-style futuristic animations */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes pulse-medium {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.6;
  }
}

@keyframes pulse-fast {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes glow-slow {
  0%,
  100% {
    opacity: 0.2;
    box-shadow: 0 0 5px currentColor;
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 20px currentColor;
  }
}

@keyframes glow-medium {
  0%,
  100% {
    opacity: 0.1;
    box-shadow: 0 0 3px currentColor;
  }
  50% {
    opacity: 0.6;
    box-shadow: 0 0 15px currentColor;
  }
}

@keyframes glow-fast {
  0%,
  100% {
    opacity: 0.3;
    box-shadow: 0 0 4px currentColor;
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 25px currentColor;
  }
}

@keyframes data-flow-1 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(200px, -100px);
    opacity: 0;
  }
}

@keyframes data-flow-2 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(-150px, 120px);
    opacity: 0;
  }
}

@keyframes data-flow-3 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(180px, -80px);
    opacity: 0;
  }
}

@keyframes data-flow-4 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(-120px, -150px);
    opacity: 0;
  }
}

@keyframes data-flow-5 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(-200px, 100px);
    opacity: 0;
  }
}

@keyframes data-flow-6 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(150px, -120px);
    opacity: 0;
  }
}

@keyframes node-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-medium {
  animation: pulse-medium 3s ease-in-out infinite;
}

.animate-pulse-fast {
  animation: pulse-fast 2s ease-in-out infinite;
}

.animate-glow-slow {
  animation: glow-slow 5s ease-in-out infinite;
}

.animate-glow-medium {
  animation: glow-medium 4s ease-in-out infinite;
}

.animate-glow-fast {
  animation: glow-fast 3s ease-in-out infinite;
}

.animate-data-flow-1 {
  animation: data-flow-1 8s linear infinite;
}

.animate-data-flow-2 {
  animation: data-flow-2 10s linear infinite;
  animation-delay: 1s;
}

.animate-data-flow-3 {
  animation: data-flow-3 9s linear infinite;
  animation-delay: 2s;
}

.animate-data-flow-4 {
  animation: data-flow-4 7s linear infinite;
  animation-delay: 0.5s;
}

.animate-data-flow-5 {
  animation: data-flow-5 11s linear infinite;
  animation-delay: 3s;
}

.animate-data-flow-6 {
  animation: data-flow-6 6s linear infinite;
  animation-delay: 1.5s;
}

.animate-node-pulse {
  animation: node-pulse 2s ease-in-out infinite;
}

/* Background gradient animation */
section {
  background: linear-gradient(-45deg, #f8fafc, #f1f5f9, #e2e8f0, #f3e8ff);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Video Modal Styles */
.video-container {
  box-shadow:
    0 40px 80px -12px rgba(0, 0, 0, 0.5),
    0 25px 50px -15px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(147, 51, 234, 0.3),
    0 0 0 6px rgba(255, 255, 255, 1);
  backdrop-filter: none;
  transform: translateZ(0);
}

/* Modal animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Enhanced backdrop blur support */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-\[0\.5px\] {
    backdrop-filter: blur(0.5px);
  }
  .backdrop-blur-\[1px\] {
    backdrop-filter: blur(1px);
  }
  .backdrop-blur-\[2px\] {
    backdrop-filter: blur(2px);
  }
}
</style>
