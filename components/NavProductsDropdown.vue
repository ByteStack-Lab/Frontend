<template>
  <div class="relative group">
    <button
      class="text-gray-600 hover:text-[#3533cd] transition-colors duration-200 font-medium text-sm lg:text-base flex items-center space-x-1"
    >
      <span>Products</span>
      <svg aria-hidden="true"
        class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <!-- Products Dropdown -->
    <div
      class="absolute top-full left-0 mt-2 w-[600px] bg-white shadow-xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
    >
      <div class="p-6">
        <!-- Products Grid - 2 columns -->
        <div
          v-if="products.length"
          class="grid grid-cols-2 gap-4 mb-6"
        >
          <NuxtLink
            v-for="product in products"
            :key="product.id"
            :to="`/products/${product.slug}`"
            class="flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 group/item hover:bg-gray-50"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200"
              :class="
                product.bg_gradient ||
                'bg-gradient-to-br from-[#3533cd] to-[#1e1b69]'
              "
            >
              <svg aria-hidden="true"
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="product.icon_path || defaultProductIcon"
                />
              </svg>
            </div>
            <div>
              <h3
                class="font-semibold text-gray-900 group-hover/item:text-[#3533cd] transition-colors duration-200"
              >
                {{ product.name }}
              </h3>
              <p
                v-if="product.tagline"
                class="text-xs text-gray-500 mt-0.5 line-clamp-1"
              >
                {{ product.tagline }}
              </p>
            </div>
          </NuxtLink>
        </div>
        <div v-else class="text-center py-6 text-sm text-gray-500">
          Explore our full product lineup.
        </div>

        <!-- View All Products Link -->
        <div class="pt-4 border-t border-gray-100">
          <NuxtLink
            to="/products"
            class="flex items-center justify-center space-x-2 text-[#3533cd] hover:text-white hover:bg-gradient-to-r hover:from-[#3533cd] hover:to-[#1e1b69] font-medium py-3 px-6 rounded-xl transition-all duration-300 group border border-[#3533cd] hover:border-transparent"
          >
            <span>View all products</span>
            <svg aria-hidden="true"
              class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});

// Fallback icon (matches the "Products" tab icon in the mobile bottom nav)
// for any navbar-flagged product that has no icon_path set in Filament.
const defaultProductIcon =
  "M9.75 3h4.5L16 6h4a1 1 0 011 1v11a3 3 0 01-3 3H6a3 3 0 01-3-3V7a1 1 0 011-1h4l1.75-3zM8 12h8M8 16h5";
</script>
