<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
    <!-- Services Hero Section -->
    <section class="relative pt-28 pb-12 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Matrix-style Grid Lines -->
        <div
          class="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute left-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/15 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute right-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute right-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-400/15 to-transparent animate-pulse-medium"
        />

        <div
          class="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute top-64 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/15 to-transparent animate-pulse-slow"
        />

        <!-- Moving Data Points -->
        <div
          class="absolute top-48 left-36 w-1 h-1 bg-blue-500 rounded-full animate-data-flow-1"
        />
        <div
          class="absolute top-72 right-48 w-1 h-1 bg-purple-500 rounded-full animate-data-flow-2"
        />
        <div
          class="absolute bottom-48 left-72 w-1 h-1 bg-green-500 rounded-full animate-data-flow-3"
        />
        <div
          class="absolute bottom-72 right-36 w-1 h-1 bg-indigo-500 rounded-full animate-data-flow-4"
        />
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-6">
          <!-- Decorative Line -->
          <div
            class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#E56F8C] rounded-full mx-auto mb-6"
          />

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="text-gray-900">Our</span>
            <span
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
            >
              Services</span
            >
          </h1>
          <p
            class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We offer comprehensive digital solutions to transform your business
            ideas into powerful, scalable, and user-friendly applications.
          </p>
        </div>

        <!-- Stats Row -->
        <div class="flex flex-wrap justify-center gap-8 mt-12">
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">
              {{ services.length }}+
            </div>
            <div class="text-sm text-gray-500 mt-1">Services</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"/>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">
              {{ serviceCategories.length }}+
            </div>
            <div class="text-sm text-gray-500 mt-1">Categories</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"/>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">5+</div>
            <div class="text-sm text-gray-500 mt-1">Years Experience</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"/>
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
            :class="[
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
              selectedCategory === tab.id
                ? 'bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ]"
            @click="selectedCategory = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div v-if="pending" class="text-center py-12">
          <div
            class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"
          />
          <p class="mt-4 text-gray-600">Loading services...</p>
        </div>

        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in filteredServices"
            :key="service.id"
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

              <NuxtLink
                :to="`/services/${service.slug}`"
                class="w-full bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white py-3 px-4 rounded-xl font-semibold text-sm text-center hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          v-if="!pending && filteredServices.length === 0"
          class="text-center py-12"
        >
          <p class="text-gray-600 text-lg">
            No services found for the selected category.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-16 bg-gradient-to-r from-[#3533cd] via-[#2d2a7a] to-[#1e1b69]"
    >
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Ideas into Reality?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Let's discuss your project and create something amazing together.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-[#3533cd] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3533cd] transition-all duration-300"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  getServiceIconPath,
  getServiceGradient,
  formatCategoryLabel,
} from "~/utils/serviceIcons";

// Page meta for SEO
useHead({
  title: "Our Services - AI Automation, SaaS & Software Development | ByteStackLab",
  meta: [
    {
      name: "description",
      content:
        "AI automation, SaaS product development, custom web & mobile apps, UI/UX design, QA, DevOps, and cybersecurity — explore ByteStackLab's full range of software services.",
    },
    {
      name: "keywords",
      content:
        "ai automation, saas development, web application development, mobile app development, ui ux design, qa testing, devops, cybersecurity",
    },
    {
      property: "og:title",
      content:
        "Our Services - AI Automation, SaaS & Software Development | ByteStackLab",
    },
    {
      property: "og:description",
      content:
        "AI automation, SaaS product development, custom web & mobile apps, UI/UX design, QA, DevOps, and cybersecurity — explore ByteStackLab's full range of software services.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content:
        "Our Services - AI Automation, SaaS & Software Development | ByteStackLab",
    },
    {
      name: "twitter:description",
      content:
        "AI automation, SaaS product development, custom web & mobile apps, UI/UX design, QA, DevOps, and cybersecurity — explore ByteStackLab's full range of software services.",
    },
  ],
});

// Reactive data
const selectedCategory = ref("");

// Server-side data fetching for SSR/SEO
const { data: services, pending } = await useLazyAsyncData(
  "services-page",
  () => {
    const { getServices } = useApi();
    return getServices();
  },
  { default: () => [] },
);

// Computed property for filtered services
const filteredServices = computed(() => {
  if (!selectedCategory.value) {
    return services.value;
  }
  return services.value.filter(
    (service) => service.category === selectedCategory.value,
  );
});

// Distinct categories actually present in the loaded services, used for
// both the Stats Row count and the filter tabs below.
const serviceCategories = computed(() => {
  return [...new Set(services.value.map((service) => service.category))];
});

// Filter tabs — "All Services" plus one tab per category that's actually
// in use, so this never drifts out of sync with the real data the way a
// hardcoded list (like the one on /products) can.
const filterTabs = computed(() => [
  { id: "", label: "All Services" },
  ...serviceCategories.value.map((category) => ({
    id: category,
    label: formatCategoryLabel(category),
  })),
]);
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

@keyframes data-flow-1 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(300px, -200px);
    opacity: 0;
  }
}

@keyframes data-flow-2 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate(-400px, 250px);
    opacity: 0;
  }
}

@keyframes data-flow-3 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate(200px, -300px);
    opacity: 0;
  }
}

@keyframes data-flow-4 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translate(-350px, -150px);
    opacity: 0;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-medium {
  animation: pulse-medium 3s ease-in-out infinite;
}

.animate-data-flow-1 {
  animation: data-flow-1 8s linear infinite;
}

.animate-data-flow-2 {
  animation: data-flow-2 10s linear infinite;
}

.animate-data-flow-3 {
  animation: data-flow-3 7s linear infinite;
}

.animate-data-flow-4 {
  animation: data-flow-4 9s linear infinite;
}
</style>
