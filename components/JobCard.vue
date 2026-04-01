<template>
  <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
    <div class="flex-1">
      <div class="flex items-center mb-4">
        <span
          :class="job.departmentClass"
          class="px-3 py-1 rounded-full text-sm font-medium mr-4"
        >
          {{ job.department }}
        </span>
        <span
          v-if="job.is_featured && !isFeatured"
          class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mr-4"
        >
          ⭐ Featured
        </span>
        <span class="text-sm text-gray-500 flex items-center">
          <svg
            class="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {{ job.location }}
        </span>
        <span class="mx-2 text-gray-300">•</span>
        <span class="text-sm text-gray-500 flex items-center">
          <svg
            class="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ job.type.replace("-", " ") }}
        </span>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ job.title }}</h3>
      <p
        v-if="job.experience_level"
        class="text-lg text-[#3533cd] font-medium mb-2"
      >
        {{ job.experience_level }}
      </p>
      <p class="text-gray-600 leading-relaxed mb-4">
        {{
          job.description.length > 200
            ? job.description.substring(0, 200) + "..."
            : job.description
        }}
      </p>

      <!-- Requirements -->
      <div class="mb-4" v-if="job.requirements && job.requirements.length > 0">
        <h4 class="text-sm font-semibold text-gray-800 mb-2">
          Key Requirements:
        </h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="req in job.requirements.slice(0, isFeatured ? 3 : 5)"
            :key="req"
            class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            {{ req }}
          </span>
          <span
            v-if="job.requirements.length > (isFeatured ? 3 : 5)"
            class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            +{{ job.requirements.length - (isFeatured ? 3 : 5) }} more
          </span>
        </div>
      </div>
    </div>

    <div class="lg:ml-8 mt-6 lg:mt-0">
      <div class="text-right mb-4">
        <div class="text-2xl font-bold text-[#3533cd]">{{ job.salary }}</div>
        <div class="text-sm text-gray-500">{{ job.salaryPeriod }}</div>
      </div>

      <div class="flex flex-col gap-3">
        <NuxtLink
          :to="`/careers/${job.slug}`"
          class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center w-full lg:w-auto justify-center"
        >
          Apply Now
          <svg
            class="ml-2 w-5 h-5"
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

        <NuxtLink
          :to="`/careers/${job.slug}`"
          class="border-2 border-[#3533cd] text-[#3533cd] px-8 py-3 rounded-lg font-semibold hover:bg-[#3533cd] hover:text-white transition-all duration-300 flex items-center w-full lg:w-auto justify-center"
        >
          View Details
          <svg
            class="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  job: {
    type: Object,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});
</script>
