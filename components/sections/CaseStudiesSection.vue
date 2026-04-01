<template>
  <section
    ref="elementRef"
    id="case-studies"
    class="py-14 md:py-20 lg:py-16 transition-all duration-1000 ease-out"
    :class="{
      'opacity-0 translate-y-20': !isVisible,
      'opacity-100 translate-y-0': isVisible,
    }"
    style="background-color: #f7f7fa"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div
          class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"
        ></div>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Our Recent
        </h2>
        <h3 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          <span
            class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
            >Case Studies</span
          >
        </h3>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          We solve problems in different industry verticals and have deep
          expertise in some of them.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="flex justify-center items-center py-12">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3533cd]"
        ></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">
          Failed to load case studies. Please try again later.
        </p>
      </div>

      <!-- Case Studies Rows -->
      <div v-else-if="caseStudies && caseStudies.length > 0" class="space-y-12">
        <!-- Dynamic Case Studies -->
        <div
          v-for="(caseStudy, index) in caseStudies"
          :key="caseStudy.id"
          class="rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300"
          :style="{ backgroundColor: caseStudy.bgColor }"
        >
          <div
            class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <!-- Image Column -->
            <div
              :class="
                index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
              "
            >
              <div class="relative">
                <img
                  :src="caseStudy.image || '/images/case-study-placeholder.png'"
                  :alt="caseStudy.title"
                  class="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <!-- Content Column -->
            <div
              :class="
                index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
              "
              class="space-y-6"
            >
              <!-- Category Badge -->
              <div
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                :class="caseStudy.categoryClass"
              >
                {{ caseStudy.category }}
              </div>

              <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">
                {{ caseStudy.title }}
              </h3>

              <p class="text-gray-600 leading-relaxed text-lg">
                {{ caseStudy.description }}
              </p>

              <!-- Technologies Used -->
              <div
                v-if="
                  caseStudy.technologies && caseStudy.technologies.length > 0
                "
                class="space-y-3"
              >
                <h4
                  class="text-sm font-semibold text-gray-800 uppercase tracking-wide"
                >
                  Technologies Used
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in caseStudy.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-white/70 text-gray-700 text-sm rounded-full border border-gray-200"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Metrics -->
              <div
                v-if="caseStudy.metrics && caseStudy.metrics.length > 0"
                class="grid grid-cols-2 gap-4"
              >
                <div
                  v-for="metric in caseStudy.metrics"
                  :key="metric.label"
                  class="text-center p-4 bg-white/50 rounded-lg border border-white/30"
                >
                  <div class="text-2xl font-bold text-gray-900">
                    {{ metric.value }}
                  </div>
                  <div class="text-sm text-gray-600">{{ metric.label }}</div>
                </div>
              </div>

              <div
                class="pt-4 flex"
                :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
              >
                <NuxtLink
                  :to="`/case-studies/${caseStudy.slug}`"
                  :class="
                    caseStudy.buttonClass ||
                    'text-[#3533cd] hover:text-[#1e1b69]'
                  "
                  class="inline-flex items-center px-6 py-3 font-medium transition-colors group read-more-btn"
                >
                  Read More
                  <svg
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
          </div>
        </div>
      </div>

      <!-- No Case Studies State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600">
          No featured case studies available at the moment.
        </p>
      </div>

      <!-- Read More Case Studies -->
      <div class="flex justify-end mt-16">
        <NuxtLink
          to="/case-studies"
          class="inline-flex items-center px-6 py-3 text-[#3533cd] font-medium hover:text-[#1e1b69] transition-colors group"
        >
          Read More Case Studies
          <svg
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
import { useScrollAnimation } from "~/composables/useScrollAnimation";

// Scroll animation
const { isVisible, elementRef } = useScrollAnimation();

// API composable
const api = useApi();

// Fetch featured case studies
const {
  data: caseStudies,
  pending,
  error,
} = await useLazyAsyncData("featured-case-studies", async () => {
  try {
    const data = await api.getFeaturedCaseStudies();
    return data;
  } catch (error) {
    console.error("Error fetching featured case studies:", error);
    throw error;
  }
});
</script>

<style scoped>
/* Component-specific styles */
.group:hover svg {
  transform: translateX(4px);
}

/* Image hover effects */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.02);
}

/* Button hover effects */
button {
  transition: all 0.3s ease;
}
</style>
