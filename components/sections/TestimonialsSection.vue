<template>
  <section
    ref="elementRef"
    class="pt-16 pb-20 md:pt-32 md:pb-40 lg:pt-28 lg:pb-32 bg-white relative transition-all duration-1000 ease-out"
    :class="{
      'opacity-0 translate-y-20': !isVisible,
      'opacity-100 translate-y-0': isVisible,
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div
          class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"
        ></div>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          <span
            class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
            >Why Customers Love</span
          >
        </h2>
        <p class="text-4xl lg:text-5xl font-bold text-gray-900">
          Working With Us
        </p>
      </div>

      <!-- Main Testimonial Container -->
      <div class="relative max-w-5xl mx-auto px-4 lg:px-8">
        <!-- Loading State -->
        <div v-if="pending" class="flex justify-center items-center py-12">
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3533cd]"
          ></div>
        </div>

        <!-- Error State -->
        <div
          v-else-if="error && testimonials.length === 0"
          class="text-center py-12"
        >
          <p class="text-red-600">
            Failed to load testimonials. Please try again later.
          </p>
        </div>

        <!-- Testimonials Content -->
        <div v-else-if="testimonials.length > 0">
          <!-- Navigation Arrows -->
          <button
            @click="prevTestimonial"
            class="absolute left-[-60px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#3533cd] text-[#3533cd] items-center justify-center hover:bg-[#3533cd] hover:text-white transition-all duration-300 z-30 hidden lg:flex"
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
            @click="nextTestimonial"
            class="absolute right-[-60px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#3533cd] text-white items-center justify-center hover:bg-[#1e1b69] transition-all duration-300 z-30 hidden lg:flex"
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

          <!-- Quote Mark -->
          <div class="flex justify-center mb-12">
            <svg
              class="w-16 h-16 text-[#3533cd]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
              />
            </svg>
          </div>

          <!-- Testimonial Text -->
          <div class="text-center mb-16">
            <Transition name="fade" mode="out-in">
              <p
                :key="currentTestimonial"
                class="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
              >
                {{ testimonials[currentTestimonial].quote }}
              </p>
            </Transition>
          </div>

          <!-- Avatar Row with User Info -->
          <div
            class="flex justify-center items-center space-x-4 lg:space-x-6 relative"
          >
            <!-- Left Avatars -->
            <div
              v-for="(testimonial, index) in leftAvatars"
              :key="'left-' + index"
              @click="goToTestimonial(getLeftIndex(index))"
              class="cursor-pointer transition-all duration-500 opacity-60 hover:opacity-80 flex items-center"
            >
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                :class="[
                  index === 0
                    ? 'w-12 h-12 lg:w-14 lg:h-14'
                    : 'w-16 h-16 lg:w-18 lg:h-18',
                ]"
                class="rounded-full object-cover border border-gray-200"
              />
            </div>

            <!-- Center Avatar -->
            <div class="flex items-center justify-center">
              <img
                :src="testimonials[currentTestimonial].image"
                :alt="testimonials[currentTestimonial].name"
                class="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-3 border-[#3533cd]"
              />
            </div>

            <!-- Right Avatars -->
            <div
              v-for="(testimonial, index) in rightAvatars"
              :key="'right-' + index"
              @click="goToTestimonial(getRightIndex(index))"
              class="cursor-pointer transition-all duration-500 opacity-60 hover:opacity-80 flex items-center"
            >
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                :class="[
                  index === 1
                    ? 'w-12 h-12 lg:w-14 lg:h-14'
                    : 'w-16 h-16 lg:w-18 lg:h-18',
                ]"
                class="rounded-full object-cover border border-gray-200"
              />
            </div>
          </div>

          <!-- User Info Below Avatars -->
          <div class="text-center mt-8">
            <!-- Star Rating -->
            <div class="flex justify-center items-center mb-3 space-x-1">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>

            <!-- User Name -->
            <Transition name="fade" mode="out-in">
              <h4
                :key="currentTestimonial"
                class="text-lg font-bold text-[#3533cd] mb-2"
              >
                {{ testimonials[currentTestimonial].name }}
              </h4>
            </Transition>

            <!-- Designation and Company -->
            <Transition name="fade" mode="out-in">
              <p :key="currentTestimonial" class="text-sm text-gray-500">
                {{ testimonials[currentTestimonial].position
                }}{{
                  testimonials[currentTestimonial].company
                    ? " at " + testimonials[currentTestimonial].company
                    : ""
                }}
              </p>
            </Transition>
          </div>

          <!-- Mobile Navigation -->
          <div
            class="flex justify-center items-center space-x-4 mt-12 lg:hidden"
          >
            <button
              @click="prevTestimonial"
              class="w-12 h-12 rounded-full border-2 border-[#3533cd] text-[#3533cd] flex items-center justify-center hover:bg-[#3533cd] hover:text-white transition-all duration-300"
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
              @click="nextTestimonial"
              class="w-12 h-12 rounded-full bg-[#3533cd] text-white flex items-center justify-center hover:bg-[#1e1b69] transition-all duration-300"
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

        <!-- No Data State -->
        <div v-else class="text-center py-12">
          <p class="text-gray-600">No testimonials available at the moment.</p>
        </div>
      </div>

      <!-- Decorative Arrow Icons -->
      <div class="absolute bottom-8 left-8 opacity-80 hidden lg:block">
        <img
          src="/images/icons/arrow-left.svg"
          alt="Decorative Left Arrow"
          class="w-16 h-16 object-contain"
        />
      </div>
      <div class="absolute bottom-8 right-8 opacity-80 hidden lg:block">
        <img
          src="/images/icons/arrow-right.svg"
          alt="Decorative Right Arrow"
          class="w-16 h-16 object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useScrollAnimation } from "~/composables/useScrollAnimation";

// Scroll animation
const { isVisible, elementRef } = useScrollAnimation();

// Current testimonial index
const currentTestimonial = ref(0);

// Data state
const testimonials = ref([]);
const pending = ref(false);
const error = ref(null);

// Fetch testimonials from API
const fetchTestimonials = async () => {
  try {
    pending.value = true;
    error.value = null;
    const api = useApi();
    const data = await api.getAllTestimonials();

    if (data && data.length > 0) {
      testimonials.value = data;
    } else {
      // Fallback data if API fails or returns no data
      testimonials.value = [
        {
          quote:
            "Without any doubt I recommend ByteStackLab as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't be hesitated to introduce their work to someone else.",
          name: "Romeena De Silva",
          position: "Marketing Director",
          company: "Janet Cosmetics",
          image: "/images/testimonials/romeena-1.svg",
        },
        {
          quote:
            "Professional team with exceptional skills in software development. They delivered our project on time and exceeded our expectations. Highly recommended!",
          name: "Imran Khan",
          position: "Software Engineer",
          company: "TechCorp Solutions",
          image: "/images/testimonials/imran.svg",
        },
        {
          quote:
            "Amazing experience working with this team. Their technical expertise and attention to detail is outstanding. Would definitely work with them again.",
          name: "Sarah Johnson",
          position: "CEO",
          company: "Digital Ventures",
          image: "/images/testimonials/romeena-2.svg",
        },
        {
          quote:
            "Excellent service and support throughout the entire project lifecycle. The team was responsive and delivered high-quality solutions.",
          name: "Michael Chen",
          position: "Product Manager",
          company: "InnovateTech",
          image: "/images/testimonials/romeena-3.svg",
        },
        {
          quote:
            "Outstanding web development services. The team understood our requirements perfectly and created exactly what we envisioned.",
          name: "Emily Rodriguez",
          position: "Founder",
          company: "StartupVision",
          image: "/images/testimonials/romeena-4.svg",
        },
      ];
    }
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    error.value = err;
    // Use fallback data on error
    testimonials.value = [
      {
        quote:
          "Without any doubt I recommend ByteStackLab as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't be hesitated to introduce their work to someone else.",
        name: "Romeena De Silva",
        position: "Marketing Director",
        company: "Janet Cosmetics",
        image: "/images/testimonials/romeena-1.svg",
      },
      {
        quote:
          "Professional team with exceptional skills in software development. They delivered our project on time and exceeded our expectations. Highly recommended!",
        name: "Imran Khan",
        position: "Software Engineer",
        company: "TechCorp Solutions",
        image: "/images/testimonials/imran.svg",
      },
    ];
  } finally {
    pending.value = false;
  }
};

// Computed properties for avatar arrangement
const leftAvatars = computed(() => {
  if (!testimonials.value.length) return [];
  const total = testimonials.value.length;
  return [
    testimonials.value[(currentTestimonial.value - 2 + total) % total], // Far left
    testimonials.value[(currentTestimonial.value - 1 + total) % total], // Near left
  ];
});

const rightAvatars = computed(() => {
  if (!testimonials.value.length) return [];
  const total = testimonials.value.length;
  return [
    testimonials.value[(currentTestimonial.value + 1) % total], // Near right
    testimonials.value[(currentTestimonial.value + 2) % total], // Far right
  ];
});

// Navigation functions
const nextTestimonial = () => {
  if (testimonials.value.length === 0) return;
  currentTestimonial.value =
    (currentTestimonial.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  if (testimonials.value.length === 0) return;
  currentTestimonial.value =
    currentTestimonial.value === 0
      ? testimonials.value.length - 1
      : currentTestimonial.value - 1;
};

const goToTestimonial = (index) => {
  if (testimonials.value.length === 0) return;
  currentTestimonial.value = index;
};

const getLeftIndex = (index) => {
  if (testimonials.value.length === 0) return 0;
  const total = testimonials.value.length;
  return (currentTestimonial.value - 2 + index + total) % total;
};

const getRightIndex = (index) => {
  if (testimonials.value.length === 0) return 0;
  const total = testimonials.value.length;
  return (currentTestimonial.value + 1 + index) % total;
};

// Auto-slide functionality
let autoSlideInterval = null;

const startAutoSlide = () => {
  if (testimonials.value.length <= 1) return;
  autoSlideInterval = setInterval(() => {
    nextTestimonial();
  }, 8000); // Slower auto-slide (8 seconds)
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

// Lifecycle hooks
onMounted(async () => {
  await fetchTestimonials();
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<style scoped>
/* Smooth fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(15px) scale(0.98);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-15px) scale(0.98);
}

/* Border width utility */
.border-3 {
  border-width: 3px;
}

/* Custom width/height utilities */
.w-18 {
  width: 4.5rem;
}
.h-18 {
  height: 4.5rem;
}

/* Smooth hover effects */
.cursor-pointer {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cursor-pointer:hover {
  transform: translateY(-3px) scale(1.05);
}
</style>
