<template>
  <section
    ref="elementRef"
    class="py-16 md:py-24 lg:py-20 transition-all duration-1000 ease-out"
    :class="{
      'opacity-0 translate-y-20': !isVisible,
      'opacity-100 translate-y-0': isVisible,
    }"
    style="background-color: #f9f9ff"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <!-- Decorative line -->
        <div
          class="w-20 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"
        />

        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span
            class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
          >
            Services We Offer
          </span>
        </h2>

        <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Comprehensive digital solutions to transform your business ideas into
          powerful, scalable applications.
        </p>

        <!-- Subtitle -->
        <div class="flex items-center justify-center mt-4 space-x-2">
          <div class="w-2 h-2 rounded-full bg-[#3533cd] animate-pulse"/>
          <p class="text-sm text-gray-500 font-medium">Featured Services</p>
          <div class="w-2 h-2 rounded-full bg-[#3533cd] animate-pulse"/>
        </div>
      </div>

      <!-- Services Carousel -->
      <div ref="containerRef" class="relative pb-12">
        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center items-center h-72">
          <div class="text-center">
            <div
              class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#3533cd]"
            />
            <p class="mt-4 text-gray-600">Loading services...</p>
          </div>
        </div>

        <!-- Services Content -->
        <div v-else-if="featuredServices.length > 0">
          <!-- Slider wrapper with side arrows -->
          <div class="relative flex items-center">
            <!-- Left Arrow -->
            <button
              v-if="canSlide"
              class="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#3533cd] text-[#3533cd] hover:bg-[#3533cd] hover:text-white transition-all duration-300 mr-4 z-10"
              :class="
                currentSlide === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:scale-105'
              "
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

            <!-- Carousel Track -->
            <div class="flex-1 overflow-hidden pb-8">
              <div
                ref="carousel"
                class="flex transition-transform duration-[1500ms] ease-in-out cursor-grab active:cursor-grabbing"
                :style="{
                  transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                  width: `${totalSlides * 100}%`,
                }"
                @mousedown="startDrag"
                @mousemove="drag"
                @mouseup="endDrag"
                @mouseleave="endDrag"
                @touchstart="startDrag"
                @touchmove="drag"
                @touchend="endDrag"
              >
                <!-- Create slides by grouping services -->
                <div
                  v-for="slideIndex in totalSlides"
                  :key="`slide-${slideIndex}`"
                  class="flex flex-none gap-4"
                  :style="{ width: `${100 / totalSlides}%` }"
                >
                  <!-- Services for this slide -->
                  <div
                    v-for="service in getServicesForSlide(slideIndex - 1)"
                    :key="service.id"
                    class="flex-none"
                    :style="{
                      width: `calc(${100 / cardsPerView}% - ${((cardsPerView - 1) * 16) / cardsPerView}px)`,
                    }"
                  >
                    <!-- Service Card -->
                    <div
                      data-animate
                      class="h-full"
                      @mouseenter="stopAutoSlide"
                      @mouseleave="startAutoSlideDelayed"
                    >
                      <NuxtLink
                        :to="`/services/${service.slug}`"
                        class="block h-full"
                      >
                        <div
                          class="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:translate-y-3 transform-gpu border border-gray-100 h-[420px] flex flex-col"
                        >
                          <!-- Icon Circle at Top Left -->
                          <div class="flex justify-start p-8 pb-6">
                            <div
                              class="w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                              :style="{
                                background: getServiceIconColor(service.id),
                              }"
                            >
                              <img
                                v-if="service.icon"
                                :src="service.icon"
                                :alt="service.title || service.name"
                                class="w-10 h-10 object-contain"
                              >
                              <span
                                v-else
                                class="text-white text-3xl font-bold transition-all duration-300"
                              >
                                {{
                                  service.title?.charAt(0) ||
                                  service.name?.charAt(0)
                                }}
                              </span>
                            </div>
                          </div>

                          <!-- Content -->
                          <div class="px-8 pb-8 flex-1 flex flex-col">
                            <h3
                              class="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#3533cd] transition-colors duration-500"
                            >
                              {{ service.title || service.name }}
                            </h3>
                            <p
                              class="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4 flex-1 group-hover:text-gray-700 transition-colors duration-300"
                            >
                              {{
                                service.short_description || service.description
                              }}
                            </p>

                            <!-- Tags -->
                            <div
                              v-if="service.tags && service.tags.length > 0"
                              class="flex flex-wrap gap-2 mb-6"
                            >
                              <span
                                v-for="tag in service.tags.slice(0, 3)"
                                :key="tag"
                                class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full group-hover:bg-[#3533cd] group-hover:text-white transition-all duration-300"
                              >
                                {{ tag }}
                              </span>
                            </div>

                            <!-- Call to Action -->
                            <div class="mt-auto">
                              <span
                                class="inline-flex items-center text-[#3533cd] font-semibold text-sm group-hover:text-[#1e1b69] transition-all duration-300 group-hover:translate-x-2"
                              >
                                Learn More
                                <svg
                                  class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Arrow -->
            <button
              v-if="canSlide"
              class="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#3533cd] text-white hover:bg-[#1e1b69] transition-all duration-300 ml-4 z-10"
              :class="
                currentSlide === maxSlides
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:scale-105'
              "
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

          <!-- Navigation Dots -->
          <div v-if="canSlide" class="flex justify-center mt-6 space-x-3">
            <button
              v-for="(dot, index) in totalSlidePositions"
              :key="index"
              class="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
              :class="
                currentSlide === index
                  ? 'bg-[#3533cd] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              "
              @click="goToSlide(index)"
            />
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <p class="text-gray-600">
            No featured services available at the moment.
          </p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div class="inline-flex flex-col items-center">
          <p class="text-gray-600 mb-4 max-w-md">
            Ready to transform your business with our professional services?
          </p>
          <NuxtLink
            to="/services"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
          >
            <span>View All Services</span>
            <svg
              class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";
import { useScrollAnimation } from "~/composables/useScrollAnimation";
import { useStaggeredAnimation } from "~/composables/useStaggeredAnimation";

// Reactive data
const featuredServices = ref([]);
const loading = ref(true);

// Scroll animation for main section
const { isVisible, elementRef } = useScrollAnimation();

// Staggered animation for service cards
const { containerRef } = useStaggeredAnimation({ staggerDelay: 150 });

// Carousel state
const currentSlide = ref(0);
const carousel = ref(null);
let autoSlideInterval = null;

// Window width tracker for reactive responsive behavior
const windowWidth = ref(1024); // Default for SSR

// Calculate total cards
const totalCards = computed(() => featuredServices.value.length);

// Drag functionality
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const dragThreshold = 50;

// Responsive cards per view
const cardsPerView = computed(() => {
  const width = windowWidth.value;

  if (width >= 1024) {
    return 3; // Desktop: 3 cards per slide
  }
  if (width >= 768) {
    return 2; // Tablet: 2 cards per slide
  }
  return 1; // Mobile: 1 card per slide
});

// Calculate total slides
const totalSlides = computed(() => {
  if (totalCards.value <= cardsPerView.value) return 1;

  return Math.ceil(totalCards.value / cardsPerView.value);
});

// Calculate maximum slide index (0-based)
const maxSlides = computed(() => {
  return Math.max(0, totalSlides.value - 1);
});

const canSlide = computed(() => {
  // Enable sliding if we have more cards than can be displayed in one view
  return totalCards.value > cardsPerView.value;
});

// Calculate total number of slide positions (for dots)
const totalSlidePositions = computed(() => {
  return totalSlides.value;
});

// Navigation functions
const nextSlide = () => {
  if (!canSlide.value) return;

  if (currentSlide.value < maxSlides.value) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0; // Loop back to beginning
  }
};

const prevSlide = () => {
  if (!canSlide.value) return;

  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = maxSlides.value; // Loop to end
  }
};

const goToSlide = (index) => {
  if (!canSlide.value) return;
  currentSlide.value = Math.max(0, Math.min(index, maxSlides.value));
};

// Drag functionality
const startDrag = (e) => {
  if (!canSlide.value) return;

  isDragging.value = true;
  startX.value = e.pageX || e.touches[0].pageX;
  scrollLeft.value = currentSlide.value;
  stopAutoSlide();
};

const drag = (e) => {
  if (!isDragging.value || !canSlide.value) return;
  e.preventDefault();

  const x = e.pageX || e.touches[0].pageX;
  const diff = startX.value - x;
  const threshold = 50; // Minimum drag distance to trigger slide

  // Only trigger slide change if dragged enough
  if (Math.abs(diff) > threshold) {
    if (diff > 0 && currentSlide.value < maxSlides.value) {
      // Dragged left, go to next slide
      currentSlide.value++;
      startX.value = x; // Reset start position
    } else if (diff < 0 && currentSlide.value > 0) {
      // Dragged right, go to previous slide
      currentSlide.value--;
      startX.value = x; // Reset start position
    }
  }
};

const endDrag = () => {
  if (!isDragging.value) return;
  isDragging.value = false;

  // Restart auto-slide after a short delay
  setTimeout(() => {
    if (canSlide.value) {
      startAutoSlide();
    }
  }, 1000);
};

// Auto slide functionality
const startAutoSlide = () => {
  if (!canSlide.value) {
    return;
  }

  stopAutoSlide(); // Clear existing interval first

  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Slide every 5 seconds for slower experience
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

// Handle window resize
const handleResize = () => {
  windowWidth.value = window.innerWidth;

  // Reset slide position if current slide exceeds new max
  if (currentSlide.value > maxSlides.value) {
    currentSlide.value = Math.max(0, maxSlides.value);
  }

  // Restart auto-slide with new dimensions
  if (canSlide.value) {
    stopAutoSlide();
    setTimeout(startAutoSlide, 500);
  }
};

// Watch for changes in cardsPerView to ensure responsive behavior
watch(cardsPerView, () => {
  currentSlide.value = 0; // Reset to first slide
  if (canSlide.value) {
    stopAutoSlide();
    setTimeout(startAutoSlide, 500);
  }
});

// Fetch featured services
const fetchServices = async () => {
  try {
    const { getFeaturedServices } = useApi();
    const services = await getFeaturedServices();
    featuredServices.value = services || [];
  } catch (error) {
    console.error("Error loading featured services:", error);
    featuredServices.value = [];
  } finally {
    loading.value = false;
  }
};

// Service icon color generator
const getServiceIconColor = (serviceId) => {
  const colors = [
    "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)", // Purple gradient
    "linear-gradient(135deg, #EF4444 0%, #F97316 100%)", // Red to orange gradient
    "linear-gradient(135deg, #10B981 0%, #059669 100%)", // Green gradient
    "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", // Blue gradient
    "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)", // Yellow to orange gradient
    "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)", // Pink gradient
  ];
  return colors[serviceId % colors.length];
};

// Lifecycle
onMounted(async () => {
  await fetchServices();

  // Set initial window width
  if (import.meta.client) {
    windowWidth.value = window.innerWidth;
  }

  // Wait for DOM to be fully ready
  await nextTick();

  // Start auto-slide after a delay to ensure everything is loaded
  setTimeout(() => {
    if (canSlide.value) {
      startAutoSlide();
    }
  }, 1500);

  // Handle window resize
  if (import.meta.client) {
    window.addEventListener("resize", handleResize);
  }
});

onUnmounted(() => {
  stopAutoSlide();
  if (import.meta.client) {
    window.removeEventListener("resize", handleResize);
  }
});

// Pause auto-slide on hover
const handleMouseEnter = () => {
  stopAutoSlide();
};

const handleMouseLeave = () => {
  if (canSlide.value && !isDragging.value) {
    setTimeout(startAutoSlide, 500);
  }
};

// Helper function to start auto slide with delay (for card hover)
const startAutoSlideDelayed = () => {
  if (canSlide.value && !isDragging.value) {
    setTimeout(() => {
      startAutoSlide();
    }, 1000); // 1 second delay after mouse leaves card
  }
};

// Helper function to get service for a specific slide and card position
const getServiceForSlide = (slideIndex, cardIndex) => {
  const serviceIndex = slideIndex * cardsPerView.value + cardIndex;
  return featuredServices.value[serviceIndex] || null;
};

// Helper function to get all services for a specific slide
const getServicesForSlide = (slideIndex) => {
  const startIndex = slideIndex * cardsPerView.value;
  const endIndex = startIndex + cardsPerView.value;
  return featuredServices.value.slice(startIndex, endIndex);
};
</script>

<style scoped>
/* Line clamp utility for truncating text */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Grid pattern for card header */
.bg-grid-white\/25 {
  background-image: url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='white' stroke-width='1' opacity='0.3'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e");
}

/* Smooth animations for cards */
.group {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center;
}

.group:hover {
  transform: translateY(12px);
  box-shadow:
    0 25px 50px -12px rgba(53, 51, 205, 0.25),
    0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Enhanced hover effects */
.group:hover .bg-gradient-to-r {
  background: linear-gradient(135deg, #3533cd 0%, #1e1b69 50%, #2d1b8a 100%);
}

/* Smooth tag transition */
.group:hover span[class*="bg-gray-100"] {
  transform: translateY(-2px);
}

/* Custom scrollbar if needed */
.overflow-hidden::-webkit-scrollbar {
  display: none;
}

.overflow-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Slide animation improvements */
.transition-transform {
  transition: transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Drag cursor styles */
.cursor-grab {
  cursor: grab;
}

.cursor-grabbing {
  cursor: grabbing;
}

.active\:cursor-grabbing:active {
  cursor: grabbing;
}

/* Card enter animation */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

[data-animate] {
  animation: slideInUp 0.6s ease-out forwards;
}

/* Stagger animation delay */
[data-animate]:nth-child(1) {
  animation-delay: 0.1s;
}
[data-animate]:nth-child(2) {
  animation-delay: 0.2s;
}
[data-animate]:nth-child(3) {
  animation-delay: 0.3s;
}
[data-animate]:nth-child(4) {
  animation-delay: 0.4s;
}
[data-animate]:nth-child(5) {
  animation-delay: 0.5s;
}
[data-animate]:nth-child(6) {
  animation-delay: 0.6s;
}
</style>
