<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 overflow-hidden">
      <!-- Animated Background Grid -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse-slow"
        ></div>
        <div
          class="absolute left-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/15 to-transparent animate-pulse-medium"
        ></div>
        <div
          class="absolute right-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent animate-pulse-slow"
        ></div>
        <div
          class="absolute right-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-400/15 to-transparent animate-pulse-medium"
        ></div>
        <div
          class="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse-slow"
        ></div>
        <div
          class="absolute top-64 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse-medium"
        ></div>
        <!-- Floating dots -->
        <div
          class="absolute top-48 left-36 w-2 h-2 bg-blue-500/40 rounded-full animate-float-1"
        ></div>
        <div
          class="absolute top-72 right-48 w-2 h-2 bg-purple-500/40 rounded-full animate-float-2"
        ></div>
        <div
          class="absolute bottom-48 left-72 w-2 h-2 bg-indigo-500/40 rounded-full animate-float-3"
        ></div>
        <div
          class="absolute bottom-72 right-36 w-2 h-2 bg-pink-500/40 rounded-full animate-float-4"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-6">
          <div
            class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#E56F8C] rounded-full mx-auto mb-6"
          ></div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="text-gray-900">Our</span>
            <span
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
            >
              Products</span
            >
          </h1>
          <p
            class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our suite of innovative digital products crafted to
            accelerate your business growth and streamline operations with
            cutting-edge technology.
          </p>
        </div>

        <!-- Stats Row -->
        <div class="flex flex-wrap justify-center gap-8 mt-12">
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">6+</div>
            <div class="text-sm text-gray-500 mt-1">Products</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"></div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">100+</div>
            <div class="text-sm text-gray-500 mt-1">Active Users</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"></div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">5+</div>
            <div class="text-sm text-gray-500 mt-1">Years Experience</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"></div>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">100%</div>
            <div class="text-sm text-gray-500 mt-1">Client Focused</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section
      class="py-6 bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="tab in filterTabs"
            :key="tab.id"
            @click="activeFilter = tab.id"
            :class="[
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
              activeFilter === tab.id
                ? 'bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ]"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Loading State -->
        <div v-if="loading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="i in 6"
            :key="i"
            class="bg-white rounded-2xl shadow-card overflow-hidden animate-pulse"
          >
            <div class="h-52 bg-gray-200"></div>
            <div class="p-6">
              <div class="h-6 bg-gray-200 rounded mb-4"></div>
              <div class="h-4 bg-gray-100 rounded mb-4"></div>
              <div class="flex gap-2 mb-6">
                <div class="h-8 w-16 bg-gray-100 rounded-full"></div>
                <div class="h-8 w-16 bg-gray-100 rounded-full"></div>
              </div>
              <div
                class="h-10 bg-gradient-to-r from-[#3533cd] to-[#6675F7] rounded-xl mb-3"
              ></div>
            </div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <div class="text-red-500 text-lg font-semibold mb-4">{{ error }}</div>
          <button
            @click="fetchProducts"
            class="bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Try Again
          </button>
        </div>

        <!-- Products Grid -->
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in filteredProducts"
            :key="product.slug"
            class="group bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col"
          >
            <!-- Card Image/Banner -->
            <div
              class="relative h-52 overflow-hidden"
              :class="product.bg_gradient"
            >
              <!-- Badge -->
              <div class="absolute top-4 left-4 z-10">
                <span
                  v-if="product.badge"
                  :class="product.badgeClass"
                  class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                >
                  {{ product.badge }}
                </span>
              </div>
              <!-- Category Tag -->
              <div class="absolute top-4 right-4 z-10">
                <span
                  class="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30"
                >
                  {{ product.category }}
                </span>
              </div>
              <!-- Decorative Icon -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  class="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500"
                >
                  <component
                    :is="'svg'"
                    class="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      :d="product.icon_path"
                    />
                  </component>
                </div>
              </div>
              <!-- Bottom Wave -->
              <div class="absolute bottom-0 left-0 right-0">
                <svg
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
                {{ product.name }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                {{ product.description }}
              </p>

              <!-- Feature Pills -->
              <div class="flex flex-wrap gap-2 mb-5">
                <span
                  v-for="feature in product.features.slice(0, 3)"
                  :key="feature"
                  class="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
                >
                  {{ feature }}
                </span>
              </div>

              <!-- Pricing & Rating Row -->
              <div class="flex items-center justify-between mb-5">
                <div>
                  <div class="text-2xl font-bold text-[#3533cd]">
                    {{ product.price_display }}
                  </div>
                  <div class="text-xs text-gray-500">
                    {{ product.price_period }}
                  </div>
                </div>
                <div class="flex items-center gap-1">
                  <div class="flex">
                    <svg
                      v-for="i in 5"
                      :key="i"
                      class="w-4 h-4"
                      :class="
                        i <= product.rating
                          ? 'text-yellow-400'
                          : 'text-gray-200'
                      "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <span class="text-xs text-gray-500 ml-1"
                    >({{ product.reviews_count }})</span
                  >
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-3">
                <NuxtLink
                  :to="`/products/${product.slug}`"
                  class="flex-1 bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white py-3 px-4 rounded-xl font-semibold text-sm text-center hover:shadow-lg hover:from-[#2a28a8] hover:to-[#5563e5] transition-all duration-300"
                >
                  View Details
                </NuxtLink>
                <button
                  class="flex-1 border-2 border-[#3533cd] text-[#3533cd] py-3 px-4 rounded-xl font-semibold text-sm hover:bg-[#3533cd] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-24 bg-gradient-to-r from-[#3533cd] via-[#2d2a7a] to-[#1e1b69]"
    >
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Need a Custom Solution?
        </h2>
        <p class="text-xl text-white/90 mb-8 leading-relaxed">
          Our products are flexible and customizable. Let's discuss how we can
          tailor a solution specifically for your business needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-[#3533cd] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Get In Touch
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3533cd] transition-all duration-300"
          >
            Explore Services
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Products - ByteStackLab",
  meta: [
    {
      name: "description",
      content:
        "Explore ByteStackLab's suite of innovative digital products designed to accelerate your business growth.",
    },
  ],
});

const activeFilter = ref("all");

const filterTabs = [
  { id: "all", label: "All Products" },
  { id: "saas", label: "SaaS Tools" },
  { id: "analytics", label: "Analytics" },
  { id: "automation", label: "Automation" },
  { id: "security", label: "Security" },
];

const config = useRuntimeConfig();

// Server-side data fetching for SSR/SEO
const {
  data: pageData,
  pending: loading,
  refresh: fetchProducts,
} = await useLazyAsyncData(
  "products-index",
  async () => {
    try {
      const response = await $fetch(`${config.public.apiBase}/products`, {
        method: "GET",
      });

      if (response.success && response.data) {
        return { products: response.data, error: null };
      }
      return { products: [], error: "Failed to fetch products" };
    } catch (err) {
      console.error("Error fetching products:", err);
      return {
        products: [],
        error: "Failed to load products. Please try again later.",
      };
    }
  },
  { default: () => ({ products: [], error: null }) },
);

const products = computed(() => pageData.value?.products || []);
const error = computed(() => pageData.value?.error || null);

// Computed property for filtered products
const filteredProducts = computed(() => {
  if (activeFilter.value === "all") return products.value;
  return products.value.filter((p) => p.categoryId === activeFilter.value);
});
</script>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes pulse-medium {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.6;
  }
}

@keyframes float-1 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, -15px);
  }
}

@keyframes float-2 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-12px, 10px);
  }
}

@keyframes float-3 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(8px, 12px);
  }
}

@keyframes float-4 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-10px, -8px);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}
.animate-pulse-medium {
  animation: pulse-medium 3s ease-in-out infinite;
}
.animate-float-1 {
  animation: float-1 6s ease-in-out infinite;
}
.animate-float-2 {
  animation: float-2 7s ease-in-out infinite;
}
.animate-float-3 {
  animation: float-3 5s ease-in-out infinite;
}
.animate-float-4 {
  animation: float-4 8s ease-in-out infinite;
}
</style>
