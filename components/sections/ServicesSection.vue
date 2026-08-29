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
          From AI automation that removes manual work to SaaS platforms built
          for scale — pick the problem, we will scope the build.
        </p>

        <!-- Subtitle -->
        <div class="flex items-center justify-center mt-4 space-x-2">
          <div class="w-2 h-2 rounded-full bg-[#3533cd] animate-pulse"/>
          <p class="text-sm text-gray-500 font-medium">Featured Services</p>
          <div class="w-2 h-2 rounded-full bg-[#3533cd] animate-pulse"/>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="i in 3"
          :key="i"
          class="bg-white rounded-2xl shadow-card overflow-hidden animate-pulse border border-gray-100"
        >
          <div class="h-52 bg-gray-200" />
          <div class="p-6">
            <div class="h-6 bg-gray-200 rounded mb-4" />
            <div class="h-4 bg-gray-100 rounded mb-2" />
            <div class="h-4 bg-gray-100 rounded w-2/3 mb-6" />
            <div class="h-10 bg-gray-100 rounded-xl" />
          </div>
        </div>
      </div>

      <!-- Services Grid — same card shell as /services and /products -->
      <div
        v-else-if="featuredServices.length > 0"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <NuxtLink
          v-for="service in featuredServices"
          :key="service.id"
          :to="`/services/${service.slug}`"
          data-animate
          class="group bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col"
        >
          <!-- Card Banner -->
          <div
            class="relative h-52 overflow-hidden"
            :class="getServiceGradient(service.category)"
          >
            <!-- Category Tag -->
            <div class="absolute top-4 right-4 z-10">
              <span
                class="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30"
              >
                {{ formatCategoryLabel(service.category) }}
              </span>
            </div>
            <!-- Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500"
              >
                <NuxtImg
                  v-if="service.icon"
                  :src="service.icon"
                  :alt="service.title"
                  loading="lazy"
                  width="40"
                  height="40"
                  class="w-10 h-10 text-white"
                />
                <svg
                  v-else
                  aria-hidden="true"
                  class="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    :d="getServiceIconPath(service.category)"
                  />
                </svg>
              </div>
            </div>
            <!-- Bottom Wave -->
            <div class="absolute bottom-0 left-0 right-0">
              <svg aria-hidden="true"
                viewBox="0 0 400 40"
                preserveAspectRatio="none"
                class="w-full h-8 fill-white"
              >
                <path d="M0,40 C100,10 300,30 400,0 L400,40 Z" />
              </svg>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-6 flex flex-col flex-1">
            <h3
              class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3533cd] transition-colors duration-300"
            >
              {{ service.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
              {{ service.short_description }}
            </p>

            <!-- Feature Pills -->
            <div
              v-if="service.features && service.features.length > 0"
              class="flex flex-wrap gap-2 mb-5"
            >
              <span
                v-for="feature in service.features.slice(0, 3)"
                :key="feature"
                class="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
              >
                {{ feature }}
              </span>
            </div>

            <span
              class="w-full bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white py-3 px-4 rounded-xl font-semibold text-sm text-center hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600">
          No featured services available at the moment.
        </p>
      </div>

      <!-- View All Services -->
      <div v-if="featuredServices.length > 0" class="flex justify-end mt-16">
        <NuxtLink
          to="/services"
          class="inline-flex items-center px-6 py-3 text-[#3533cd] font-medium hover:text-[#1e1b69] transition-colors group"
        >
          View All Services
          <svg aria-hidden="true"
            class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useScrollAnimation } from "~/composables/useScrollAnimation";
import {
  getServiceIconPath,
  getServiceGradient,
  formatCategoryLabel,
} from "~/utils/serviceIcons";

// Reactive data — fetched during SSR so the homepage grid isn't an empty
// shell for crawlers.
const { data: featuredServicesData, pending: loading } = await useLazyAsyncData(
  "home-featured-services",
  async () => {
    const { getFeaturedServices } = useApi();
    try {
      return await getFeaturedServices();
    } catch (error) {
      console.error("Error loading featured services:", error);
      return [];
    }
  },
  { default: () => [] },
);
const featuredServices = computed(() => featuredServicesData.value || []);

// Scroll animation for main section
const { isVisible, elementRef } = useScrollAnimation();
</script>

<style scoped>
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
