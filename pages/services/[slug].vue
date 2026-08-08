<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div
          class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#3533cd]"
        />
        <p class="mt-4 text-gray-600">Loading service details...</p>
      </div>
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="flex items-center justify-center min-h-screen"
    >
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p class="text-gray-600 mb-8">
          The service you're looking for doesn't exist.
        </p>
        <NuxtLink
          to="/services"
          class="bg-[#3533cd] text-white px-6 py-3 rounded-lg hover:bg-[#1e1b69] transition-colors"
        >
          View All Services
        </NuxtLink>
      </div>
    </div>

    <!-- Service Content -->
    <div v-else-if="service" class="pb-24">
      <!-- Hero Section -->
      <section class="relative pt-28 pb-20 overflow-hidden">
        <!-- Background -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#3533cd]/10 to-[#1e1b69]/10"
        />

        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <!-- Breadcrumb -->
          <nav class="mb-8">
            <ol class="flex items-center space-x-2 text-sm">
              <li>
                <NuxtLink to="/" class="text-gray-500 hover:text-gray-700"
                  >Home</NuxtLink
                >
              </li>
              <li><span class="text-gray-400">/</span></li>
              <li>
                <NuxtLink
                  to="/services"
                  class="text-gray-500 hover:text-gray-700"
                  >Services</NuxtLink
                >
              </li>
              <li><span class="text-gray-400">/</span></li>
              <li>
                <span class="text-gray-900">{{ service.title }}</span>
              </li>
            </ol>
          </nav>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Service Info -->
            <div>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#3533cd]/10 text-[#1e1b69] mb-4"
              >
                {{
                  service.category?.replace("-", " ")?.toUpperCase() ||
                  "SERVICE"
                }}
              </div>

              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {{ service.title }}
              </h1>

              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                {{ service.short_description }}
              </p>

              <div class="flex flex-wrap gap-4 mb-8">
                <div class="flex items-center text-[#3533cd]">
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="font-semibold">Free project consultation</span>
                </div>

                <div
                  v-if="service.delivery_time"
                  class="flex items-center text-gray-600"
                >
                  <svg
                    class="w-5 h-5 mr-2"
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
                  <span>{{ service.delivery_time }} days delivery</span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink
                  to="/contact"
                  class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
                >
                  Get a Free Quote
                </NuxtLink>
                <NuxtLink
                  to="/case-studies"
                  class="border-2 border-[#3533cd] text-[#3533cd] px-8 py-3 rounded-lg font-semibold hover:bg-[#3533cd] hover:text-white transition-all duration-300 text-center"
                >
                  See Our Work
                </NuxtLink>
              </div>
            </div>

            <!-- Service Image/Visual -->
            <div class="relative">
              <!-- Featured Image Display -->
              <div v-if="service.featured_image" class="relative group">
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <NuxtImg
                    :src="service.featured_image"
                    :alt="service.title"
                    class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    sizes="100vw lg:50vw"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <!-- Image Label -->
                <div
                  class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                >
                  Featured Image
                </div>
              </div>

              <!-- Fallback Icon Display -->
              <div
                v-else
                class="bg-white rounded-2xl shadow-xl p-12 text-center"
              >
                <div
                  class="w-24 h-24 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <NuxtImg
                    v-if="service.icon"
                    :src="service.icon"
                    :alt="service.title"
                    class="w-12 h-12"
                  />
                  <svg
                    v-else
                    class="w-12 h-12 text-white"
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

                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                  {{ service.title }}
                </h3>
                <p class="text-gray-600">{{ service.short_description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Service Details Section -->
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-12 gap-12">
            <!-- Left Column - Description and Details -->
            <div class="lg:col-span-7">
              <!-- eslint-disable vue/no-v-html -- sanitized via sanitizeHtml() below, which strips <script> tags, inline event handlers, and javascript: URLs -->
              <div
                class="prose prose-lg max-w-none"
                v-html="sanitizeHtml(service.description)"
              />
              <!-- eslint-enable vue/no-v-html -->

              <!-- Features -->
              <div
                v-if="service.features && service.features.length > 0"
                class="mt-12"
              >
                <h3 class="text-2xl font-bold text-gray-900 mb-6">
                  Key Features
                </h3>
                <div class="grid md:grid-cols-1 gap-4">
                  <div
                    v-for="feature in service.features"
                    :key="feature"
                    class="flex items-center space-x-3"
                  >
                    <svg
                      class="w-5 h-5 text-[#3533cd] flex-shrink-0"
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
                    <span class="text-gray-700">{{ feature }}</span>
                  </div>
                </div>
              </div>

              <!-- Technologies -->
              <div
                v-if="service.technologies && service.technologies.length > 0"
                class="mt-12"
              >
                <h3 class="text-2xl font-bold text-gray-900 mb-6">
                  Technologies We Use
                </h3>
                <div class="flex flex-wrap gap-3">
                  <span
                    v-for="tech in service.technologies"
                    :key="tech"
                    class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Column - Gallery Images -->
            <div class="lg:col-span-5">
              <div
                v-if="service.gallery && service.gallery.length > 0"
                class="sticky top-8"
              >
                <div class="mb-8">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">
                    Project Gallery
                  </h3>
                  <p class="text-gray-600">
                    Browse through our {{ service.title.toLowerCase() }} work
                    samples
                  </p>
                </div>

                <!-- Gallery Grid -->
                <div class="grid grid-cols-1 gap-4">
                  <!-- Gallery Images - All Same Size -->
                  <div
                    v-for="(image, index) in service.gallery.slice(0, 4)"
                    :key="index"
                    class="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    @click="openLightbox(index)"
                  >
                    <div class="aspect-w-16 aspect-h-10 overflow-hidden">
                      <NuxtImg
                        :src="image.url || image"
                        :alt="
                          image.alt ||
                          `${service.title} gallery image ${index + 1}`
                        "
                        class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <!-- Overlay -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div class="absolute bottom-4 left-4 right-4">
                        <h4
                          v-if="image.title"
                          class="text-white font-semibold text-sm mb-1"
                        >
                          {{ image.title }}
                        </h4>
                        <p
                          v-if="image.description"
                          class="text-white/80 text-xs"
                        >
                          {{ image.description }}
                        </p>
                      </div>

                      <!-- View Icon -->
                      <div class="absolute top-4 right-4">
                        <div
                          class="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                        >
                          <svg
                            class="w-4 h-4 text-white"
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
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- View All Button -->
                  <div v-if="service.gallery.length > 4" class="mt-6">
                    <button
                      class="w-full py-3 px-4 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center"
                      @click="openLightbox(0)"
                    >
                      View All {{ service.gallery.length }} Images
                    </button>
                  </div>
                </div>
              </div>

              <!-- Fallback when no gallery images -->
              <div v-else class="bg-gray-50 rounded-xl p-8 text-center">
                <svg
                  class="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  No Gallery Images
                </h3>
                <p class="text-gray-600 text-sm">
                  Gallery images will be displayed here when available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Image Lightbox Modal -->
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        @click="closeLightbox"
      >
        <div class="relative max-w-6xl max-h-full mx-4">
          <!-- Close Button -->
          <button
            class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            @click="closeLightbox"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Navigation Arrows -->
          <button
            v-if="service.gallery && service.gallery.length > 1"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            @click.stop="prevImage"
          >
            <svg
              class="w-8 h-8"
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
            v-if="service.gallery && service.gallery.length > 1"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            @click.stop="nextImage"
          >
            <svg
              class="w-8 h-8"
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

          <!-- Current Image -->
          <NuxtImg
            :src="currentLightboxImage.url || currentLightboxImage"
            :alt="
              currentLightboxImage.alt ||
              `Gallery image ${currentImageIndex + 1}`
            "
            class="max-w-full max-h-full object-contain rounded-lg"
            loading="eager"
            @click.stop
          />

          <!-- Image Info -->
          <div
            v-if="
              currentLightboxImage.title || currentLightboxImage.description
            "
            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg"
          >
            <h3
              v-if="currentLightboxImage.title"
              class="text-white font-semibold text-xl mb-2"
            >
              {{ currentLightboxImage.title }}
            </h3>
            <p v-if="currentLightboxImage.description" class="text-white/80">
              {{ currentLightboxImage.description }}
            </p>
          </div>

          <!-- Image Counter -->
          <div
            class="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
          >
            {{ currentImageIndex + 1 }} /
            {{ service.gallery && service.gallery.length }}
          </div>
        </div>
      </div>

      <!-- Pricing Philosophy Section -->
      <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <div
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#3533cd]/10 text-[#1e1b69] mb-4"
            >
              PRICING
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing Built Around Your Project
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              No two projects are the same, so we don't sell fixed packages.
              We scope every {{ service.title.toLowerCase() }} engagement
              around your goals, timeline, and budget in a free consultation.
            </p>
          </div>

          <!-- Why Custom Pricing -->
          <div class="grid md:grid-cols-3 gap-8 mb-20">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <div
                class="w-14 h-14 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6M9 8h6M17 16h6"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Scoped to Your Needs
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Your quote reflects the exact features, integrations, and
                complexity your project needs — nothing bundled in that you
                won't use.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-8">
              <div
                class="w-14 h-14 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Flexible Engagement
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Fixed-price for a well-defined scope, or a dedicated team for
                ongoing work — we structure the engagement around how you
                want to build.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-8">
              <div
                class="w-14 h-14 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                No-Surprise Estimates
              </h3>
              <p class="text-gray-600 leading-relaxed">
                You'll get a detailed proposal with milestones and cost
                breakdown before any work begins — no hidden fees, no scope
                creep.
              </p>
            </div>
          </div>

          <!-- How We Quote -->
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 class="text-2xl font-bold text-gray-900 text-center mb-10">
              How We Quote Your Project
            </h3>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                v-for="(step, index) in pricingSteps"
                :key="step.title"
                class="relative text-center"
              >
                <div
                  class="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white font-bold flex items-center justify-center"
                >
                  {{ index + 1 }}
                </div>
                <h4 class="font-semibold text-gray-900 mb-2">
                  {{ step.title }}
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>

            <div class="text-center mt-12">
              <NuxtLink
                to="/contact"
                class="inline-block bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Book a Free Consultation
              </NuxtLink>
              <p class="text-sm text-gray-500 mt-4">
                Prefer email? Reach us at
                <a
                  href="mailto:hello@bytestacklab.com"
                  class="text-[#3533cd] font-medium hover:underline"
                  >hello@bytestacklab.com</a
                >
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section
        v-if="service.faqs && service.faqs.length > 0"
        class="py-24 bg-white"
      >
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-gray-600">
              Everything you need to know about our
              {{ service.title.toLowerCase() }} service
            </p>
          </div>

          <div class="space-y-6">
            <div
              v-for="faq in service.faqs"
              :key="faq.id"
              class="border border-gray-200 rounded-lg"
            >
              <button
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                @click="toggleFaq(faq.id)"
              >
                <span class="font-semibold text-gray-900">{{
                  faq.question
                }}</span>
                <svg
                  :class="[
                    'w-5 h-5 text-gray-500 transition-transform',
                    openFaqs.includes(faq.id) ? 'rotate-180' : '',
                  ]"
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
              <div
                v-if="openFaqs.includes(faq.id)"
                class="px-6 pb-4 text-gray-600 leading-relaxed"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- No Service Data -->
    <div v-else class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p class="text-gray-600 mb-8">
          The service you're looking for doesn't exist or may have been moved.
        </p>
        <NuxtLink
          to="/services"
          class="bg-[#3533cd] text-white px-6 py-3 rounded-lg hover:bg-[#1e1b69] transition-colors"
        >
          Back to Services
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getServiceIconPath } from "~/utils/serviceIcons";

// Get route parameter
const route = useRoute();
const slug = route.params.slug;

// Use server-side data fetching for SSR
const {
  data: service,
  pending,
  error,
} = await useLazyAsyncData(`service-${slug}`, async () => {
  // Direct API call for server-side rendering
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase || "http://127.0.0.1:8000/api";

  const response = await $fetch(`${baseURL}/services/${slug}`);
  return response.data;
});

// Correct HTTP status for crawlers/SEO, while keeping this page's own
// "Service Not Found" UI (below) instead of redirecting to a generic error page
if (import.meta.server && (!service.value || error.value)) {
  setResponseStatus(404);
}

// Steps shown in the "How We Quote Your Project" section
const pricingSteps = [
  {
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and requirements in a free, no-obligation call.",
  },
  {
    title: "Scope & Proposal",
    description:
      "We put together a detailed proposal with deliverables, timeline, and a clear cost estimate.",
  },
  {
    title: "Approval & Kickoff",
    description:
      "Once you approve the proposal, we agree on milestones and get your project moving.",
  },
  {
    title: "Delivery & Support",
    description:
      "We build, test, and ship in stages, with support to keep things running after launch.",
  },
];

// FAQ toggle functionality
const openFaqs = ref([]);
const toggleFaq = (faqId) => {
  const index = openFaqs.value.indexOf(faqId);
  if (index > -1) {
    openFaqs.value.splice(index, 1);
  } else {
    openFaqs.value.push(faqId);
  }
};

// Image lightbox functionality
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

const currentLightboxImage = computed(() => {
  if (
    !service.value?.gallery ||
    !service.value.gallery[currentImageIndex.value]
  ) {
    return {};
  }
  return service.value.gallery[currentImageIndex.value];
});

const openLightbox = (index) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  // Prevent body scroll when lightbox is open
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  // Restore body scroll
  document.body.style.overflow = "auto";
};

const nextImage = () => {
  if (
    service.value?.gallery &&
    currentImageIndex.value < service.value.gallery.length - 1
  ) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0; // Loop to first image
  }
};

const prevImage = () => {
  if (service.value?.gallery && currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else if (service.value?.gallery) {
    currentImageIndex.value = service.value.gallery.length - 1; // Loop to last image
  }
};

// Close lightbox on Escape key
onMounted(() => {
  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    }
  };

  document.addEventListener("keydown", handleKeydown);

  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
    // Ensure body scroll is restored on component unmount
    document.body.style.overflow = "auto";
  });
});

// Dynamic SEO meta tags
const breadcrumbSchema = useBreadcrumbSchema();

useHead(() => ({
  title: service.value
    ? `${service.value.title} - ByteStackLab`
    : "Service Details - ByteStackLab",
  meta: [
    {
      name: "description",
      content:
        service.value?.short_description || "Professional digital services",
    },
    {
      name: "keywords",
      content: service.value?.features?.join(", ") || "digital services",
    },
    {
      property: "og:title",
      content: service.value
        ? `${service.value.title} - ByteStackLab`
        : "Service Details - ByteStackLab",
    },
    {
      property: "og:description",
      content:
        service.value?.short_description || "Professional digital services",
    },
  ],
  script: [
    ...(service.value?.seo?.schema_markup
      ? [
          {
            type: "application/ld+json",
            innerHTML: JSON.stringify(service.value.seo.schema_markup),
          },
        ]
      : []),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.value?.title || "Service", path: `/services/${slug}` },
    ]),
  ],
}));
</script>

<style scoped>
/* Custom styles for the service detail page */
.prose {
  line-height: 1.7;
}

.prose p {
  margin-bottom: 1rem;
}

.prose h1,
.prose h2,
.prose h3 {
  color: #1f2937;
  font-weight: 600;
}

/* Aspect ratio utility for consistent image sizing */
.aspect-w-16 {
  position: relative;
  padding-bottom: 62.5%; /* 16:10 aspect ratio */
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* Smooth transitions for gallery images */
.group img {
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Lightbox smooth transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* Custom scrollbar for modal if needed */
.modal-content::-webkit-scrollbar {
  width: 8px;
}

.modal-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Featured image hover effects */
.group:hover img {
  filter: brightness(1.05);
}

/* Gallery image overlay animations */
.group .absolute {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
