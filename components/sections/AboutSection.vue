<template>
  <section
    ref="elementRef"
    id="about"
    class="py-16 md:py-24 lg:py-20 bg-white transition-all duration-1000 ease-out"
    :class="{
      'opacity-0 translate-y-20': !isVisible,
      'opacity-100 translate-y-0': isVisible,
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div
        class="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-center"
      >
        <!-- Left Side - Content (Takes 3 columns - 60%) -->
        <div
          class="md:col-span-1 lg:col-span-3 space-y-6 lg:space-y-8 order-2 lg:order-1"
        >
          <!-- Decorative Line -->
          <div
            class="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
          ></div>

          <!-- Main Content -->
          <div class="space-y-6">
            <!-- Mini Subtitle -->
            <p
              class="text-sm lg:text-base text-purple-600 uppercase tracking-wider font-semibold"
            >
              About Us
            </p>

            <h2
              class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
            >
              Building Software That<br />
              <span
                class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                >Businesses Depend On</span
              >
            </h2>

            <p
              class="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl"
            >
              Founded in 2020, ByteStackLab started with a clear purpose — to
              build software that genuinely solves business problems. We design
              and develop web applications, mobile apps, SaaS platforms, ERP
              systems, and AI-powered solutions for businesses locally and
              internationally.
            </p>

            <p
              class="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl"
            >
              We're a focused team that takes quality seriously. Every product
              we ship is built with clean architecture, thoughtful UI/UX, and
              the kind of attention to detail that keeps clients coming back.
            </p>
          </div>

          <!-- CTA Link -->
          <div class="flex items-center gap-3 group cursor-pointer">
            <NuxtLink to="/about" class="flex items-center gap-3 group">
              <span class="text-purple-600 font-medium"
                >Learn More About Us</span
              >
              <svg
                class="w-5 h-5 text-purple-600 transform group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>

        <!-- Right Side - Video Section (Takes 2 columns - 40%) -->
        <div
          class="md:col-span-1 lg:col-span-2 relative w-full max-w-md mx-auto lg:max-w-sm lg:mx-0 order-1 lg:order-2"
        >
          <!-- Main Video Container -->
          <div
            class="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 transform hover:scale-105 transition-transform duration-300 w-full"
          >
            <!-- Video Background Image -->
            <div
              class="aspect-video relative bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 video-thumbnail w-full"
            >
              <!-- Background Image -->
              <img
                ref="mainImage"
                src="/images/about-us.jpg"
                alt="About us video thumbnail"
                class="absolute inset-0 w-full h-full object-cover"
                @load="handleImageLoad"
                @error="handleImageError"
              />
              <!-- Fallback SVG thumbnail -->
              <img
                ref="fallbackImage"
                src="/images/video-thumbnail.svg"
                alt="Video thumbnail fallback"
                class="absolute inset-0 w-full h-full object-cover hidden"
              />

              <!-- Video Overlay - Very light to show thumbnail clearly -->
              <div
                class="absolute inset-0 video-overlay transition-all duration-300"
                style="background: rgba(0, 0, 0, 0.15)"
              ></div>

              <!-- Play Button Container -->
              <div class="absolute inset-0 flex items-center justify-center">
                <!-- Outer Circle with pulse effect -->
                <div class="relative">
                  <!-- Pulse Rings -->
                  <div class="absolute inset-0 animate-ping">
                    <div
                      class="w-16 h-16 bg-white bg-opacity-20 rounded-full"
                    ></div>
                  </div>
                  <div class="absolute inset-0 animate-pulse">
                    <div
                      class="w-20 h-20 bg-white bg-opacity-10 rounded-full -m-2"
                    ></div>
                  </div>

                  <!-- Main Play Button -->
                  <button
                    @click="openVideoModal"
                    class="interactive-button pulse-on-hover relative w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group hover:scale-110 transition-all duration-300 hover:shadow-xl"
                  >
                    <!-- Play Icon -->
                    <svg
                      class="w-6 h-6 text-purple-600 ml-1 group-hover:text-purple-700 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div
            class="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-md animate-bounce"
          ></div>
          <div
            class="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-md animate-pulse"
          ></div>
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
              title="Company Video"
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
import { useScrollAnimation } from "~/composables/useScrollAnimation";

// Scroll animation
const { isVisible, elementRef } = useScrollAnimation();

// Video modal state
const showVideoModal = ref(false);
const videoUrl = ref(
  "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0&modestbranding=1&controls=1",
);

// Image references
const mainImage = ref(null);
const fallbackImage = ref(null);

// Video modal functions
const openVideoModal = () => {
  showVideoModal.value = true;
  // Keep website fully interactive - no scroll prevention
};

const closeVideoModal = () => {
  showVideoModal.value = false;
  // No need to restore scroll as we didn't prevent it
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

// Image load handling
const handleImageLoad = () => {};

// Image error handling
const handleImageError = (event) => {
  console.error("Failed to load video thumbnail image");
  // Hide the failed image
  event.target.style.display = "none";
  // Show the fallback SVG image
  if (fallbackImage.value) {
    fallbackImage.value.classList.remove("hidden");
  }
};
</script>

<style scoped>
/* Smooth transitions for modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Custom pulse animation for play button rings */
@keyframes custom-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.1;
  }
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

/* Video thumbnail always visible - minimal overlay */
.video-thumbnail .video-overlay {
  background: rgba(0, 0, 0, 0.15) !important;
}

/* Hover effect makes overlay even lighter */
.video-thumbnail:hover .video-overlay {
  background: rgba(0, 0, 0, 0.1) !important;
}

/* Ensure images are fully visible */
.video-thumbnail img {
  opacity: 1;
  filter: brightness(1.1) contrast(1.05);
}

/* Modal backdrop - completely transparent to show website */
.modal-backdrop {
  background: transparent;
  backdrop-filter: none;
}

/* Modal overlay with subtle dark blur */
.video-modal-overlay {
  background: rgba(0, 0, 0, 0.15) !important;
  backdrop-filter: blur(2px) !important;
  transition: all 0.3s ease;
}

/* Video modal animations */
.video-modal-enter-active,
.video-modal-leave-active {
  transition: all 0.3s ease;
}

.video-modal-enter-from,
.video-modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Modal backdrop animation */
.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: all 0.3s ease;
}

.modal-backdrop-enter-from,
.modal-backdrop-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

/* Enhanced video container with dramatic shadow */
.video-container {
  box-shadow:
    0 40px 80px -12px rgba(0, 0, 0, 0.5),
    0 25px 50px -15px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(147, 51, 234, 0.3),
    0 0 0 6px rgba(255, 255, 255, 1);
  backdrop-filter: none;
  transform: translateZ(0);
}

/* Mobile responsive fixes for video card */
@media (max-width: 1023px) {
  /* Ensure video card is fully visible on mobile */
  .video-thumbnail {
    min-height: 200px;
    width: 100% !important;
  }

  /* Make sure the video container takes full available width on mobile */
  .video-thumbnail .aspect-video {
    width: 100%;
    min-height: 200px;
  }

  /* Ensure play button is clearly visible on mobile */
  .interactive-button {
    background: rgba(255, 255, 255, 0.95) !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
  }

  /* Mobile decorative elements positioning */
  .absolute.-top-3.-right-3 {
    top: -8px;
    right: -8px;
  }

  .absolute.-bottom-3.-left-3 {
    bottom: -8px;
    left: -8px;
  }
}

/* Tablet responsive fixes */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Ensure proper spacing and sizing on tablets */
  .video-thumbnail {
    max-width: 400px;
    margin: 0 auto;
  }

  /* Better text sizing for tablets */
  h2 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  /* Grid adjustments for tablets */
  .grid.md\\:grid-cols-2 {
    gap: 3rem;
  }
}
</style>
