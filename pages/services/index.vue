<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
    <!-- Services Hero Section -->
    <section class="relative pt-20 pb-12 overflow-hidden">
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
        <div class="text-center mb-10">
          <!-- Decorative Line -->
          <div
            class="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4"
          />

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
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
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div v-if="pending" class="text-center py-12">
          <div
            class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"
          />
          <p class="mt-4 text-gray-600">Loading services...</p>
        </div>

        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div
            v-for="service in filteredServices"
            :key="service.id"
            class="group bg-white rounded-xl shadow-card p-8 hover:shadow-card-hover transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <NuxtImg
                v-if="service.icon"
                :src="service.icon"
                :alt="service.title"
                loading="lazy"
                width="32"
                height="32"
                class="w-8 h-8 text-white"
              />
              <svg
                v-else
                aria-hidden="true"
                class="w-8 h-8 text-white"
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

            <h3
              class="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#3533cd] transition-colors duration-300"
            >
              {{ service.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ service.short_description }}
            </p>

            <!-- Features List -->
            <ul
              v-if="service.features && service.features.length > 0"
              class="space-y-2 mb-6"
            >
              <li
                v-for="feature in service.features.slice(0, 3)"
                :key="feature"
                class="flex items-center text-sm text-gray-600"
              >
                <svg aria-hidden="true"
                  class="w-4 h-4 text-[#3533cd] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>

            <NuxtLink
              :to="`/services/${service.slug}`"
              class="w-full bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center block"
            >
              Learn More
            </NuxtLink>
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
import { getServiceIconPath } from "~/utils/serviceIcons";

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
