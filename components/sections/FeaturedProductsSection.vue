<template>
  <section
    id="products"
    ref="elementRef"
    class="py-14 md:py-20 lg:py-16 bg-white transition-all duration-1000 ease-out"
    :class="{
      'opacity-0 translate-y-20': !isVisible,
      'opacity-100 translate-y-0': isVisible,
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div
          class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"
        />
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Our Featured
          <span
            class="block bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
            >Products</span
          >
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Beyond client work, we build and run our own SaaS products —
          proof we ship what we build for others.
        </p>
      </div>

      <!-- Loading State -->
      <div
        v-if="pending"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="i in 3"
          :key="i"
          class="bg-white rounded-2xl shadow-card overflow-hidden animate-pulse border border-gray-100"
        >
          <div class="h-40 bg-gray-200" />
          <div class="p-6">
            <div class="h-6 bg-gray-200 rounded mb-4" />
            <div class="h-4 bg-gray-100 rounded mb-2" />
            <div class="h-4 bg-gray-100 rounded w-2/3 mb-6" />
            <div class="h-10 bg-gray-100 rounded-xl" />
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">
          Failed to load products. Please try again later.
        </p>
      </div>

      <!-- Products Grid -->
      <div
        v-else-if="products && products.length > 0"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <NuxtLink
          v-for="product in products"
          :key="product.id"
          :to="`/products/${product.slug}`"
          data-animate
          class="group bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col"
        >
          <!-- Card Banner -->
          <div
            class="relative h-40 overflow-hidden flex items-center justify-center"
            :class="
              product.bg_gradient ||
              'bg-gradient-to-br from-[#3533cd] to-[#1e1b69]'
            "
          >
            <!-- Badge -->
            <div v-if="product.badge" class="absolute top-4 left-4 z-10">
              <span
                :class="product.badgeClass"
                class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
              >
                {{ product.badge }}
              </span>
            </div>

            <!-- Icon -->
            <div
              class="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500"
            >
              <svg aria-hidden="true"
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  :d="product.icon_path || defaultProductIcon"
                />
              </svg>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-6 flex flex-col flex-1">
            <h3
              class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3533cd] transition-colors duration-300"
            >
              {{ product.name }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
              {{ product.tagline || product.short_description }}
            </p>

            <!-- Feature Pills -->
            <div
              v-if="product.features && product.features.length"
              class="flex flex-wrap gap-2 mb-5"
            >
              <span
                v-for="feature in product.features.slice(0, 3)"
                :key="feature"
                class="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
              >
                {{ feature }}
              </span>
            </div>

            <!-- Price + CTA -->
            <div class="flex items-center justify-between mt-auto">
              <div v-if="product.price_display">
                <div class="text-lg font-bold text-[#3533cd]">
                  {{ product.price_display }}
                </div>
                <div v-if="product.price_period" class="text-xs text-gray-500">
                  {{ product.price_period }}
                </div>
              </div>
              <span
                v-else
                class="text-sm font-medium text-gray-400"
              >Explore product</span>
              <span
                class="inline-flex items-center text-[#3533cd] font-semibold text-sm group-hover:text-[#1e1b69] transition-colors"
              >
                Learn More
                <svg aria-hidden="true"
                  class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- No Products State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-600">
          No featured products available at the moment.
        </p>
      </div>

      <!-- View All Products -->
      <div class="flex justify-end mt-16">
        <NuxtLink
          to="/products"
          class="inline-flex items-center px-6 py-3 text-[#3533cd] font-medium hover:text-[#1e1b69] transition-colors group"
        >
          View All Products
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
import { useScrollAnimation } from "~/composables/useScrollAnimation";

// Scroll animation
const { isVisible, elementRef } = useScrollAnimation();

// Same fallback icon used for navbar-flagged products with no icon_path set.
const defaultProductIcon =
  "M9.75 3h4.5L16 6h4a1 1 0 011 1v11a3 3 0 01-3 3H6a3 3 0 01-3-3V7a1 1 0 011-1h4l1.75-3zM8 12h8M8 16h5";

// API composable
const api = useApi();

// Fetch featured products (SSR-aware, matches CaseStudiesSection's pattern)
const {
  data: products,
  pending,
  error,
} = await useLazyAsyncData("featured-products", async () => {
  try {
    const data = await api.getFeaturedProducts();
    return data;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw error;
  }
});
</script>

<style scoped>
.group:hover svg {
  transform: translateX(4px);
}

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
