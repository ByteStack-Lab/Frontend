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
        ></div>
        <div
          class="absolute left-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse-medium"
        ></div>
        <div
          class="absolute left-96 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-400/25 to-transparent animate-pulse-fast"
        ></div>
        <div
          class="absolute right-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent animate-pulse-slow"
        ></div>
        <div
          class="absolute right-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-400/20 to-transparent animate-pulse-medium"
        ></div>
        <div
          class="absolute right-96 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent animate-pulse-fast"
        ></div>

        <!-- Horizontal Grid Lines -->
        <div
          class="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse-slow"
        ></div>
        <div
          class="absolute top-64 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse-medium"
        ></div>
        <div
          class="absolute top-96 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/25 to-transparent animate-pulse-fast"
        ></div>
        <div
          class="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent animate-pulse-slow"
        ></div>
        <div
          class="absolute bottom-64 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-pulse-medium"
        ></div>
        <div
          class="absolute bottom-96 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent animate-pulse-fast"
        ></div>

        <!-- Diagonal Matrix Lines -->
        <div
          class="absolute top-20 left-20 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent rotate-45 animate-glow-slow"
        ></div>
        <div
          class="absolute top-40 right-20 w-48 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -rotate-45 animate-glow-medium"
        ></div>
        <div
          class="absolute bottom-20 left-40 w-56 h-px bg-gradient-to-r from-transparent via-green-500/35 to-transparent rotate-12 animate-glow-fast"
        ></div>
        <div
          class="absolute bottom-40 right-40 w-40 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent -rotate-12 animate-glow-slow"
        ></div>

        <!-- Moving Data Points -->
        <div
          class="absolute top-48 left-36 w-1 h-1 bg-blue-500 rounded-full animate-data-flow-1"
        ></div>
        <div
          class="absolute top-72 right-48 w-1 h-1 bg-purple-500 rounded-full animate-data-flow-2"
        ></div>
        <div
          class="absolute bottom-48 left-72 w-1 h-1 bg-green-500 rounded-full animate-data-flow-3"
        ></div>
        <div
          class="absolute bottom-72 right-36 w-1 h-1 bg-indigo-500 rounded-full animate-data-flow-4"
        ></div>
        <div
          class="absolute top-60 left-80 w-1 h-1 bg-cyan-500 rounded-full animate-data-flow-5"
        ></div>
        <div
          class="absolute bottom-60 right-80 w-1 h-1 bg-pink-500 rounded-full animate-data-flow-6"
        ></div>

        <!-- Connection Nodes -->
        <div
          class="absolute top-36 left-68 w-2 h-2 bg-blue-400 rounded-full animate-node-pulse opacity-60"
        ></div>
        <div
          class="absolute top-68 right-72 w-2 h-2 bg-purple-400 rounded-full animate-node-pulse opacity-50"
          style="animation-delay: 0.5s"
        ></div>
        <div
          class="absolute bottom-36 left-88 w-2 h-2 bg-green-400 rounded-full animate-node-pulse opacity-70"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute bottom-68 right-56 w-2 h-2 bg-indigo-400 rounded-full animate-node-pulse opacity-55"
          style="animation-delay: 1.5s"
        ></div>
      </div>
    </div>

    <!-- Container Div -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-5 md:py-12 lg:py-10">
      <div
        class="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-center"
      >
        <!-- Left Content - Takes 3 columns (60%) -->
        <div class="md:col-span-1 lg:col-span-3 space-y-8 pr-4 lg:pr-8">
          <!-- Small Text Above -->
          <div class="space-y-6">
            <p
              class="text-sm lg:text-base text-gray-500 uppercase tracking-wider font-medium"
            >
              INTELLIGENT SOFTWARE SOLUTIONS FOR MODERN ENTERPRISES
            </p>

            <h1
              class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900"
            >
              <span class="text-black">Transform Business</span><br />
              <span
                class="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                Through Innovation</span
              >
            </h1>

            <p
              class="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              ByteStackLab is your trusted partner for comprehensive software
              development. From custom web applications and native mobile apps
              to enterprise SaaS platforms, ERP systems, and AI-powered
              solutions—we build technology that drives real business results.
              Let's turn your vision into scalable, intelligent software.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-row items-center gap-3 sm:gap-4 pt-4">
            <NuxtLink
              to="/services"
              class="interactive-button flex-1 sm:flex-none bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              OUR SERVICES
              <svg
                class="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </NuxtLink>

            <button
              @click="openVideoModal"
              class="flex items-center justify-center text-gray-700 font-medium text-base hover:text-purple-600 transition-colors duration-300 animate-gentle-blink"
            >
              <div
                class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse-gentle"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <!-- Right Content - Hero Animation - Takes 2 columns (40%) -->
        <div class="hidden md:block md:col-span-1 lg:col-span-2 relative">
          <div class="relative z-10">
            <!-- Simple Tech Stack Animation -->
            <div class="w-full max-w-lg mx-auto">
              <img
                src="/images/hero-animation.gif"
                alt="Tech Stack Animation"
                class="w-full h-auto object-contain"
                loading="eager"
              />
            </div>
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
          @click="closeVideoModal"
          class="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-red-50 transition-all duration-300 z-20 border-4 border-white ring-4 ring-purple-500/40 hover:ring-red-500/50"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Video modal state
const showVideoModal = ref(false);
const videoUrl = ref(
  "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0&modestbranding=1&controls=1",
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

/* Gentle blinking animations for hero button */
@keyframes gentle-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes pulse-gentle {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
  }
}

.animate-gentle-blink {
  animation: gentle-blink 3s ease-in-out infinite;
}

.animate-pulse-gentle {
  animation: pulse-gentle 2s ease-in-out infinite;
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
