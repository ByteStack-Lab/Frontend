<template>
  <section class="py-10 md:py-16 lg:py-14" style="background-color: #f7f7fa">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header with Navigation -->
      <div class="flex justify-between items-center mb-12">
        <!-- Left: Title -->
        <div>
          <div
            class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mb-4"
          />
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
            <span
              class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
              >Meet The People</span
            >
          </h2>
          <p class="text-xl text-gray-700 font-medium">We Are Working With</p>
        </div>

        <!-- Right: Navigation Arrows -->
        <div class="flex space-x-4">
          <button
            class="w-12 h-12 rounded-full border-2 border-[#3533cd] text-[#3533cd] flex items-center justify-center hover:bg-[#3533cd] hover:text-white transition-all duration-300 cursor-pointer"
            @click="prevSlide"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            class="w-12 h-12 rounded-full bg-[#3533cd] text-white flex items-center justify-center hover:bg-[#1e1b69] transition-all duration-300 cursor-pointer"
            @click="nextSlide"
          >
            <svg
              class="w-5 h-5"
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
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="flex justify-center items-center py-12">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3533cd]"
        />
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600 mb-4">
          Failed to load partners. Please try again later.
        </p>
        <button
          class="px-4 py-2 bg-[#3533cd] text-white rounded-lg hover:bg-[#1e1b69] transition-colors"
          @click="refresh()"
        >
          Retry
        </button>
      </div>

      <!-- Partners Logo Display -->
      <div
        v-else-if="partners && partners.length > 0"
        class="relative overflow-hidden"
      >
        <Transition name="slide-fade" mode="out-in">
          <div
            :key="currentSlide"
            class="flex justify-center items-center space-x-12 lg:space-x-16"
          >
            <div
              v-for="(partner, index) in visiblePartners"
              :key="partner.id"
              class="flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <a
                v-if="partner.website_url"
                :href="partner.website_url"
                target="_blank"
                rel="noopener noreferrer"
                :title="partner.name"
                class="block"
              >
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="h-12 lg:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                >
              </a>
              <img
                v-else
                :src="partner.logo"
                :alt="partner.name"
                :title="partner.name"
                class="h-12 lg:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
            </div>
          </div>
        </Transition>
      </div>

      <!-- No Data State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600">No partners available at the moment.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

// API Integration
const { getPartners } = useApi();

// Fetch partners data
const {
  data: partners,
  pending,
  error,
  refresh,
} = await useLazyAsyncData("partners", () => getPartners());

// Current slide tracking
const currentSlide = ref(0);

// Responsive items per page
const itemsPerPage = computed(() => {
  if (import.meta.client) {
    if (window.innerWidth >= 1024) return 6; // lg: 6 logos
    if (window.innerWidth >= 768) return 4; // md: 4 logos
    return 2; // sm: 2 logos
  }
  return 6;
});

// Computed property for visible partners
const visiblePartners = computed(() => {
  if (!partners.value || partners.value.length === 0) return [];

  const start = currentSlide.value * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  const result = partners.value.slice(start, end);
  return result;
});

// Navigation functions
const nextSlide = () => {
  if (!partners.value || partners.value.length === 0) return;

  const maxSlides = Math.ceil(partners.value.length / itemsPerPage.value);
  if (currentSlide.value < maxSlides - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0; // Loop back to start
  }
};

const prevSlide = () => {
  if (!partners.value || partners.value.length === 0) return;

  const maxSlides = Math.ceil(partners.value.length / itemsPerPage.value);
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = maxSlides - 1; // Loop to end
  }
};

// Auto slide functionality
let autoSlideInterval = null;

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 8000); // Change every 8 seconds
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

const handleResize = () => {
  // Reset to first slide on viewport changes to keep pagination aligned.
  currentSlide.value = 0;
};

// Lifecycle hooks
onMounted(() => {
  // Only start auto slide if we have data and no loading/error states
  if (
    partners.value &&
    partners.value.length > 0 &&
    !pending.value &&
    !error.value
  ) {
    startAutoSlide();
  }

  // Add window resize listener for responsive behavior
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  stopAutoSlide();

  // Remove resize listener
  window.removeEventListener("resize", handleResize);
});

// Watch for data changes to start/stop auto slide
watch([partners, pending, error], ([newPartners, newPending, newError]) => {
  stopAutoSlide();

  if (newPartners && newPartners.length > 0 && !newPending && !newError) {
    setTimeout(() => {
      startAutoSlide();
    }, 1000); // Small delay to ensure component is ready
  }
});
</script>

<style scoped>
/* Logo hover effects */
.hover\:scale-105:hover {
  transform: scale(1.1);
}

/* Custom grayscale hover effect */
.filter.grayscale {
  filter: grayscale(100%);
  opacity: 0.7;
}

.filter.grayscale:hover {
  filter: grayscale(0%);
  opacity: 1;
}

/* Smooth transitions for all elements */
.transition-all {
  transition: all 0.3s ease;
}

/* Ensure buttons are clickable */
button {
  pointer-events: auto;
  z-index: 10;
}

/* Slide transition effects */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
