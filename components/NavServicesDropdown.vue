<template>
  <div class="relative group">
    <button
      class="text-gray-600 hover:text-[#3533cd] transition-colors duration-200 font-medium text-sm lg:text-base flex items-center space-x-1"
    >
      <span>Services</span>
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
    <!-- Services Dropdown -->
    <div
      class="absolute top-full left-0 mt-2 w-[600px] bg-white shadow-xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
    >
      <div class="p-6">
        <!-- Services Grid - 2 columns -->
        <div class="grid grid-cols-2 gap-4 mb-6">
          <!-- Dynamic Services -->
          <NuxtLink
            v-for="service in services"
            :key="service.id"
            :to="`/services/${service.slug}`"
            class="flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 group/item"
            :class="`hover:bg-gradient-to-r ${getServiceColor(service.category).hover}`"
          >
            <div
              class="w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200"
              :class="`${getServiceColor(service.category).from} ${getServiceColor(service.category).to}`"
            >
              <svg
                v-if="service.icon"
                aria-hidden="true"
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <image :href="service.icon" width="24" height="24" />
              </svg>
              <svg
                v-else
                aria-hidden="true"
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="getServiceIconPath(service.category)"
                />
              </svg>
            </div>
            <div>
              <h3
                class="font-semibold text-gray-900 transition-colors duration-200"
                :class="getServiceColor(service.category).text"
              >
                {{ service.title }}
              </h3>
            </div>
          </NuxtLink>
        </div>

        <!-- View All Services Link -->
        <div class="pt-4 border-t border-gray-100">
          <NuxtLink
            to="/services"
            class="flex items-center justify-center space-x-2 text-[#3533cd] hover:text-white hover:bg-gradient-to-r hover:from-[#3533cd] hover:to-[#1e1b69] font-medium py-3 px-6 rounded-xl transition-all duration-300 group border border-[#3533cd] hover:border-transparent"
          >
            <span>View all services</span>
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
import { getServiceIconPath } from "~/utils/serviceIcons";
import { getServiceColor } from "~/utils/serviceColors";

defineProps({
  services: {
    type: Array,
    default: () => [],
  },
});
</script>
