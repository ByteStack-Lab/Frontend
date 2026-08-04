<template>
  <div class="min-h-screen bg-white">
    <!-- Back Navigation -->
    <div class="pt-28 pb-4 px-6 max-w-7xl mx-auto">
      <NuxtLink
        to="/products"
        class="inline-flex items-center gap-2 text-[#3533cd] font-semibold hover:gap-3 transition-all duration-300 group"
      >
        <svg
          class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
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
        Back to Products
      </NuxtLink>
    </div>

    <!-- Product Not Found -->
    <div v-if="error" class="py-40 text-center px-6">
      <div class="text-6xl mb-6">⚠️</div>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ error }}</h2>
      <p class="text-gray-600 mb-8">
        Please try again or contact support if the problem persists.
      </p>
      <NuxtLink
        to="/products"
        class="bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
      >
        Browse All Products
      </NuxtLink>
    </div>

    <!-- Loading State -->
    <div v-else-if="loading" class="py-40 text-center px-6">
      <div class="inline-block">
        <div
          class="w-12 h-12 border-4 border-[#3533cd]/20 border-t-[#3533cd] rounded-full animate-spin mb-6"
        />
      </div>
      <h2 class="text-2xl font-bold text-gray-900">Loading product...</h2>
    </div>

    <!-- Product Content -->
    <template v-else-if="product">
      <!-- Hero Section -->
      <section class="py-12 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Left: Product Info -->
            <div>
              <!-- Badges -->
              <div class="flex flex-wrap items-center gap-3 mb-6">
                <span
                  class="px-4 py-1.5 bg-indigo-50 text-[#3533cd] text-sm font-semibold rounded-full border border-indigo-100"
                >
                  {{ product.category }}
                </span>
                <span
                  v-if="product.badge"
                  :class="product.badgeClass"
                  class="px-4 py-1.5 text-sm font-bold rounded-full uppercase tracking-wide"
                >
                  {{ product.badge }}
                </span>
              </div>

              <h1
                class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                {{ product.name }}
              </h1>

              <!-- Star Rating -->
              <div class="flex items-center gap-3 mb-6">
                <div class="flex">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    class="w-5 h-5"
                    :class="
                      i <= product.rating ? 'text-yellow-400' : 'text-gray-200'
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <span class="text-gray-700 font-semibold"
                  >{{ product.rating }}.0</span
                >
                <span class="text-gray-400">•</span>
                <span class="text-gray-500"
                  >{{ product.reviews_count }} reviews</span
                >
              </div>

              <div
                class="text-lg text-gray-600 leading-relaxed mb-8 prose prose-sm max-w-none"
                v-html="sanitizeHtml(product.description)"
              />

              <!-- Key Features -->
              <div class="grid grid-cols-2 gap-3 mb-10">
                <div
                  v-for="feature in product.features"
                  :key="feature"
                  class="flex items-center gap-2 text-gray-700"
                >
                  <div
                    class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-3 h-3 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span class="text-sm font-medium">{{ feature }}</span>
                </div>
              </div>

              <!-- Pricing & CTA -->
              <div
                class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100"
              >
                <div class="flex items-end gap-2 mb-2">
                  <span class="text-4xl font-bold text-[#3533cd]">{{
                    product.price_display
                  }}</span>
                  <span class="text-gray-500 mb-1">{{
                    product.price_period
                  }}</span>
                </div>
                <p
                  class="text-gray-500 text-sm mb-6"
                  v-html="sanitizeHtml(product.pricing_note)"
                />

                <div class="flex flex-col sm:flex-row gap-3">
                  <button
                    class="flex-1 bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white py-4 px-6 rounded-xl font-bold text-base hover:shadow-lg hover:from-[#2a28a8] hover:to-[#5563e5] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg
                      class="w-5 h-5"
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
                    Purchase Now
                  </button>
                  <button
                    class="flex-1 border-2 border-[#3533cd] text-[#3533cd] py-4 px-6 rounded-xl font-bold text-base hover:bg-[#3533cd] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Free Trial
                  </button>
                </div>

                <p class="text-center text-xs text-gray-400 mt-4">
                  No credit card required for trial • Cancel anytime
                </p>
              </div>
            </div>

            <!-- Right: Visual Card -->
            <div class="relative">
              <div
                class="relative rounded-3xl overflow-hidden shadow-2xl"
                :class="product.bg_gradient"
              >
                <!-- Decorative blobs -->
                <div
                  class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
                />
                <div
                  class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"
                />

                <div
                  class="relative p-12 flex flex-col items-center text-center"
                >
                  <!-- Main Icon -->
                  <div
                    class="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 border border-white/30 shadow-xl"
                  >
                    <svg
                      class="w-14 h-14 text-white"
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
                    </svg>
                  </div>

                  <h3 class="text-3xl font-bold text-white mb-3">
                    {{ product.name }}
                  </h3>
                  <p
                    class="text-white/80 text-base leading-relaxed mb-8 max-w-sm"
                  >
                    {{ product.tagline }}
                  </p>

                  <!-- Mini Stats -->
                  <div class="grid grid-cols-3 gap-4 w-full">
                    <div
                      v-for="stat in product.stats"
                      :key="stat.label"
                      class="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                    >
                      <div class="text-2xl font-bold text-white">
                        {{ stat.value }}
                      </div>
                      <div class="text-white/70 text-xs mt-1">
                        {{ stat.label }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Decorative Elements -->
              <div
                class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl shadow-lg flex items-center justify-center animate-bounce-slow"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div
                class="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-[#3533cd] to-[#6675F7] rounded-2xl shadow-lg flex items-center justify-center animate-pulse-slow"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tabs Section -->
      <section class="py-16 px-6 bg-gray-50">
        <div class="max-w-7xl mx-auto">
          <!-- Tab Buttons -->
          <div
            class="relative z-10 flex flex-wrap gap-2 border-b border-gray-200 mb-10"
            role="tablist"
            aria-label="Product Details Tabs"
          >
            <button
              type="button"
              role="tab"
              :aria-selected="activeTab === 'overview'"
              :class="[
                'px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 -mb-px',
                activeTab === 'overview'
                  ? 'border-[#3533cd] text-[#3533cd]'
                  : 'border-transparent text-gray-500 hover:text-gray-700',
              ]"
              @mousedown.prevent="setActiveTab('overview')"
              @click="setActiveTab('overview')"
            >
              Overview
            </button>

            <button
              type="button"
              role="tab"
              :aria-selected="activeTab === 'pricing'"
              :class="[
                'px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 -mb-px',
                activeTab === 'pricing'
                  ? 'border-[#3533cd] text-[#3533cd]'
                  : 'border-transparent text-gray-500 hover:text-gray-700',
              ]"
              @mousedown.prevent="setActiveTab('pricing')"
              @click="setActiveTab('pricing')"
            >
              Pricing & Plans
            </button>

            <button
              type="button"
              role="tab"
              :aria-selected="activeTab === 'reviews'"
              :class="[
                'px-6 py-3 font-semibold text-sm transition-all duration-300 border-b-2 -mb-px',
                activeTab === 'reviews'
                  ? 'border-[#3533cd] text-[#3533cd]'
                  : 'border-transparent text-gray-500 hover:text-gray-700',
              ]"
              @mousedown.prevent="setActiveTab('reviews')"
              @click="setActiveTab('reviews')"
            >
              Reviews
            </button>
          </div>

          <!-- Active Tab Panel -->
          <div :key="activeTab">
            <!-- Tab: Overview -->
            <div v-if="activeTab === 'overview'">
              <div
                v-if="product.highlights && product.highlights.length"
                class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <div
                  v-for="(highlight, idx) in product.highlights"
                  :key="idx"
                  class="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
                >
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    :class="highlight.icon_bg"
                  >
                    <svg
                      class="w-6 h-6"
                      :class="highlight.icon_color"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        :d="highlight.icon_path"
                      />
                    </svg>
                  </div>
                  <h4 class="text-lg font-bold text-gray-900 mb-2">
                    {{ highlight.title }}
                  </h4>
                  <p
                    class="text-gray-600 text-sm leading-relaxed"
                    v-html="sanitizeHtml(highlight.description)"
                  />
                </div>
              </div>
              <div
                v-else
                class="bg-white rounded-2xl p-8 text-center border border-gray-100 text-gray-500"
              >
                Overview তথ্য এখনো যোগ করা হয়নি।
              </div>
            </div>

            <!-- Tab: Pricing -->
            <div v-else-if="activeTab === 'pricing'">
              <div
                v-if="product.plans && product.plans.length"
                class="grid md:grid-cols-3 gap-8"
              >
                <div
                  v-for="plan in product.plans"
                  :key="plan.name"
                  :class="[
                    'relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1',
                    plan.featured
                      ? 'border-[#3533cd] shadow-xl ring-2 ring-[#3533cd]/20'
                      : 'border-gray-200 shadow-card hover:shadow-card-hover',
                  ]"
                >
                  <div
                    v-if="plan.featured"
                    class="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <span
                      class="bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white text-xs font-bold px-4 py-1.5 rounded-full"
                    >
                      Most Popular
                    </span>
                  </div>

                  <h4 class="text-xl font-bold text-gray-900 mb-2">
                    {{ plan.name }}
                  </h4>
                  <p class="text-gray-500 text-sm mb-6">
                    {{ plan.description }}
                  </p>

                  <div class="flex items-end gap-1 mb-6">
                    <span class="text-4xl font-bold text-gray-900">{{
                      plan.price
                    }}</span>
                    <span class="text-gray-500 mb-1 text-sm">{{
                      plan.period
                    }}</span>
                  </div>

                  <ul class="space-y-3 mb-8">
                    <li
                      v-for="item in plan.features"
                      :key="item"
                      class="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg
                        class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {{ item }}
                    </li>
                  </ul>

                  <button
                    :class="[
                      'w-full py-3 rounded-xl font-bold transition-all duration-300',
                      plan.featured
                        ? 'bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white hover:shadow-lg'
                        : 'border-2 border-[#3533cd] text-[#3533cd] hover:bg-[#3533cd] hover:text-white',
                    ]"
                  >
                    {{ plan.cta }}
                  </button>
                </div>
              </div>
              <div
                v-else
                class="bg-white rounded-2xl p-8 text-center border border-gray-100 text-gray-500"
              >
                Pricing & Plans তথ্য এখনো পাওয়া যায়নি।
              </div>
            </div>

            <!-- Tab: Reviews -->
            <div v-else-if="activeTab === 'reviews'">
              <div
                v-if="product.reviews_list && product.reviews_list.length"
                class="space-y-6"
              >
                <div
                  v-for="review in product.reviews_list"
                  :key="review.author"
                  class="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
                >
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      :class="review.avatar_bg"
                    >
                      {{ (review.author || "A").charAt(0) }}
                    </div>
                    <div class="flex-1">
                      <div class="flex flex-wrap items-center gap-3 mb-2">
                        <span class="font-bold text-gray-900">{{
                          review.author
                        }}</span>
                        <span class="text-gray-400 text-xs">{{
                          review.role
                        }}</span>
                        <div class="flex ml-auto">
                          <svg
                            v-for="i in 5"
                            :key="i"
                            class="w-4 h-4"
                            :class="
                              i <= review.rating
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
                      </div>
                      <p
                        class="text-gray-600 text-sm leading-relaxed"
                        v-html="sanitizeHtml(review.text)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-else
                class="bg-white rounded-2xl p-8 text-center border border-gray-100 text-gray-500"
              >
                Reviews এখনো পাওয়া যায়নি।
              </div>
            </div>

            <div
              v-else
              class="bg-white rounded-2xl p-8 text-center border border-gray-100 text-gray-500"
            >
              Invalid tab state. Resetting to Overview...
            </div>
          </div>
        </div>
      </section>

      <!-- Image Gallery Section -->
      <section class="py-20 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-12">
            <div
              class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#E56F8C] rounded-full mx-auto mb-6"
            />
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Gallery
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Explore screenshots and visual previews of {{ product.name }} in
              action
            </p>
          </div>

          <div class="grid lg:grid-cols-12 gap-10 items-start">
            <!-- Left: Slider -->
            <div class="lg:col-span-7">
              <!-- Main Slider -->
              <div
                class="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100 mb-4 group cursor-pointer"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @mouseenter="stopGalleryAutoPlay"
                @mouseleave="startGalleryAutoPlay"
                @click="openLightbox(galleryIndex)"
              >
                <!-- Main Image -->
                <div
                  class="relative h-80 md:h-96 overflow-hidden"
                  :class="product.bg_gradient"
                >
                  <!-- Gradient placeholder with pattern -->
                  <div
                    class="absolute inset-0 flex flex-col items-center justify-center select-none"
                  >
                    <div
                      class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-white/30"
                    >
                      <svg
                        class="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          :d="
                            product.gallery_items?.[galleryIndex]?.icon_path ||
                            product.icon_path ||
                            'M13 10V3L4 14h7v7l9-11h-7z'
                          "
                        />
                      </svg>
                    </div>
                    <div class="text-white font-bold text-lg px-6 text-center">
                      {{
                        product.gallery_items?.[galleryIndex]?.title ||
                        "Gallery Item"
                      }}
                    </div>
                    <div class="text-white/70 text-sm mt-1 px-8 text-center">
                      {{
                        product.gallery_items?.[galleryIndex]?.desc ||
                        "No description"
                      }}
                    </div>
                  </div>

                  <!-- Decorative pattern overlay -->
                  <div
                    class="absolute inset-0 opacity-10"
                    style="
                      background-image: radial-gradient(
                        circle at 2px 2px,
                        white 1px,
                        transparent 0
                      );
                      background-size: 32px 32px;
                    "
                  />

                  <!-- Hover overlay: zoom & view icon -->
                  <div
                    class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center"
                  >
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40"
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Image counter badge -->
                <div
                  class="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ galleryIndex + 1 }} / {{ product.gallery_items.length }}
                </div>

                <!-- Expand badge -->
                <div
                  class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30 flex items-center gap-1.5"
                >
                  <svg
                    class="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  Full view
                </div>

                <!-- Prev Arrow -->
                <button
                  v-if="product.gallery_items.length > 1"
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                  @click.stop="galleryPrev"
                >
                  <svg
                    class="w-5 h-5 text-gray-800"
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

                <!-- Next Arrow -->
                <button
                  v-if="product.gallery_items.length > 1"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                  @click.stop="galleryNext"
                >
                  <svg
                    class="w-5 h-5 text-gray-800"
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
              </div>

              <!-- Thumbnail Strip -->
              <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                <button
                  v-for="(img, idx) in product.gallery"
                  :key="idx"
                  :class="[
                    'flex-shrink-0 relative overflow-hidden rounded-xl transition-all duration-300 border-2',
                    galleryIndex === idx
                      ? 'border-[#3533cd] ring-2 ring-[#3533cd]/30 opacity-100 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-90 hover:scale-102',
                  ]"
                  @click="galleryIndex = idx"
                >
                  <div
                    class="w-20 h-14 flex items-center justify-center"
                    :class="product.bg_gradient"
                  >
                    <svg
                      class="w-6 h-6 text-white/80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        :d="img.icon_path || product.icon_path"
                      />
                    </svg>
                  </div>
                  <!-- Active overlay -->
                  <div
                    v-if="galleryIndex === idx"
                    class="absolute inset-0 bg-[#3533cd]/20 flex items-center justify-center"
                  >
                    <div class="w-2 h-2 bg-white rounded-full shadow"/>
                  </div>
                </button>
              </div>

              <!-- Dot Indicators -->
              <div class="flex justify-center gap-2 mt-4">
                <button
                  v-for="(img, idx) in product.gallery"
                  :key="idx"
                  :class="[
                    'rounded-full transition-all duration-300',
                    galleryIndex === idx
                      ? 'w-6 h-2 bg-[#3533cd]'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400',
                  ]"
                  @click="galleryIndex = idx"
                />
              </div>
            </div>

            <!-- Right: Gallery Info Cards -->
            <div class="lg:col-span-5 space-y-4">
              <h3 class="text-xl font-bold text-gray-900 mb-5">
                Gallery Highlights
              </h3>

              <div
                v-for="(img, idx) in product.gallery"
                :key="idx"
                :class="[
                  'flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300',
                  galleryIndex === idx
                    ? 'border-[#3533cd] bg-indigo-50 shadow-md'
                    : 'border-gray-100 bg-white hover:border-indigo-200 hover:bg-gray-50 shadow-card',
                ]"
                @click="
                  galleryIndex = idx;
                  openLightbox(idx);
                "
              >
                <!-- Mini thumbnail -->
                <div
                  class="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center"
                  :class="product.bg_gradient"
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
                      stroke-width="1.5"
                      :d="
                        img?.icon_path ||
                        product?.icon_path ||
                        'M13 10V3L4 14h7v7l9-11h-7z'
                      "
                    />
                  </svg>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="font-semibold text-gray-900 text-sm truncate">
                    {{ img.title || "Gallery Item" }}
                  </div>
                  <div class="text-gray-500 text-xs mt-0.5 line-clamp-2">
                    {{ img.desc || "No description" }}
                  </div>
                </div>

                <!-- Active indicator -->
                <div
                  :class="[
                    'w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-300',
                    galleryIndex === idx ? 'bg-[#3533cd]' : 'bg-gray-200',
                  ]"
                />
              </div>

              <!-- View all in lightbox -->
              <button
                class="w-full mt-2 py-3 rounded-xl border-2 border-dashed border-[#3533cd]/40 text-[#3533cd] font-semibold text-sm hover:bg-indigo-50 hover:border-[#3533cd] transition-all duration-300 flex items-center justify-center gap-2"
                @click="openLightbox(0)"
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
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
                View All {{ product.gallery_items.length }} Images in Fullscreen
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Lightbox Modal -->
      <Teleport to="body">
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          @click="closeLightbox"
        >
          <!-- Close -->
          <button
            class="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
            @click="closeLightbox"
          >
            <svg
              class="w-6 h-6"
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

          <!-- Counter -->
          <div
            class="absolute top-6 left-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            {{ lightboxIndex + 1 }} / {{ product.gallery_items.length }}
          </div>

          <!-- Prev Arrow -->
          <button
            v-if="product.gallery_items.length > 1"
            class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            @click.stop="lightboxPrev"
          >
            <svg
              class="w-6 h-6"
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

          <!-- Next Arrow -->
          <button
            v-if="product.gallery_items.length > 1"
            class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            @click.stop="lightboxNext"
          >
            <svg
              class="w-6 h-6"
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

          <!-- Main lightbox content -->
          <div class="relative mx-16 md:mx-24 w-full max-w-4xl" @click.stop>
            <div
              class="rounded-2xl overflow-hidden shadow-2xl"
              :class="product.bg_gradient"
            >
              <div
                class="relative h-72 md:h-[28rem] flex flex-col items-center justify-center px-8"
              >
                <!-- Dot pattern -->
                <div
                  class="absolute inset-0 opacity-10"
                  style="
                    background-image: radial-gradient(
                      circle at 2px 2px,
                      white 1px,
                      transparent 0
                    );
                    background-size: 32px 32px;
                  "
                />

                <div class="relative z-10 text-center">
                  <div
                    class="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/30"
                  >
                    <svg
                      class="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        :d="
                          product.gallery_items?.[lightboxIndex]?.icon_path ||
                          product.icon_path ||
                          'M13 10V3L4 14h7v7l9-11h-7z'
                        "
                      />
                    </svg>
                  </div>
                  <h3 class="text-white text-2xl font-bold mb-3">
                    {{
                      product.gallery_items?.[lightboxIndex]?.title ||
                      "Gallery Item"
                    }}
                  </h3>
                  <p
                    class="text-white/80 text-base max-w-lg mx-auto leading-relaxed"
                  >
                    {{
                      product.gallery_items?.[lightboxIndex]?.desc ||
                      "No description"
                    }}
                  </p>
                </div>
              </div>

              <!-- Info bar -->
              <div
                class="bg-black/30 backdrop-blur-sm px-6 py-4 flex items-center justify-between"
              >
                <div>
                  <span class="text-white/60 text-xs uppercase tracking-wide">{{
                    product.name
                  }}</span>
                  <div class="text-white font-semibold text-sm mt-0.5">
                    {{
                      product.gallery_items?.[lightboxIndex]?.title ||
                      "Gallery Item"
                    }}
                  </div>
                </div>
                <div class="flex gap-1.5">
                  <button
                    v-for="(img, idx) in product.gallery"
                    :key="idx"
                    :class="[
                      'w-2 h-2 rounded-full transition-all duration-300',
                      lightboxIndex === idx
                        ? 'bg-white w-5'
                        : 'bg-white/40 hover:bg-white/70',
                    ]"
                    @click="lightboxIndex = idx"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>

      <!-- Related Products -->
      <section class="py-20 px-6">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-10 text-center">
            You Might Also Like
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="related in relatedProducts"
              :key="related.slug"
              class="group bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              <div
                class="h-32 relative overflow-hidden"
                :class="related.bg_gradient"
              >
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        :d="related.icon_path"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="p-5">
                <h4
                  class="font-bold text-gray-900 mb-1 group-hover:text-[#3533cd] transition-colors"
                >
                  {{ related.name }}
                </h4>
                <p class="text-gray-500 text-sm mb-4">
                  {{
                    (
                      related.description || "No description available"
                    ).substring(0, 80)
                  }}...
                </p>
                <div class="flex items-center justify-between">
                  <span class="font-bold text-[#3533cd]">{{
                    related.price
                  }}</span>
                  <NuxtLink
                    :to="`/products/${related.slug}`"
                    class="text-sm text-[#3533cd] font-semibold hover:underline"
                  >
                    View →
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <section class="py-20 px-6 bg-gradient-to-br from-[#3533cd] to-[#1e1b69]">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started with {{ product.name }}?
          </h2>
          <p class="text-indigo-200 text-lg mb-8">
            Join thousands of businesses already using {{ product.name }} to
            streamline their operations.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="bg-white text-[#3533cd] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Start Free Trial
            </button>
            <NuxtLink
              to="/contact"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3533cd] transition-all duration-300"
            >
              Talk to Sales
            </NuxtLink>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const slug = computed(() => route.params.slug);

const activeTab = ref("overview");
const validTabs = ["overview", "pricing", "reviews"];

const parseMaybeJson = (value, fallback) => {
  if (Array.isArray(value)) return value;
  if (value === null || value === undefined || value === "") return fallback;

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch {
      return fallback;
    }
  }

  return fallback;
};

const normalizeProduct = (rawProduct) => {
  const normalized = { ...rawProduct };

  normalized.features = parseMaybeJson(rawProduct.features, []);
  normalized.highlights = parseMaybeJson(rawProduct.highlights, []);
  normalized.plans = parseMaybeJson(rawProduct.plans, []);
  normalized.reviews_list = parseMaybeJson(rawProduct.reviews_list, []);
  normalized.stats = parseMaybeJson(rawProduct.stats, []);
  normalized.gallery = parseMaybeJson(rawProduct.gallery, []);
  normalized.gallery_items = parseMaybeJson(rawProduct.gallery_items, []);

  return normalized;
};

const setActiveTab = (tabId) => {
  activeTab.value = validTabs.includes(tabId) ? tabId : "overview";
};

// Server-side data fetching for SSR/SEO — refetches when the route slug changes
const { data: pageData, pending: loading } = await useLazyAsyncData(
  () => `product-${slug.value}`,
  async () => {
    try {
      const response = await $fetch(
        `${config.public.apiBase}/products/${slug.value}`,
        { method: "GET" },
      );

      if (!response.success || !response.data) {
        return {
          product: null,
          relatedProducts: [],
          error: "Product not found",
        };
      }

      const normalized = normalizeProduct(response.data);

      // Related products — fetched together so a failure here doesn't break the page
      let relatedProducts = [];
      try {
        const relatedResponse = await $fetch(
          `${config.public.apiBase}/products/${normalized.slug}/related`,
          { method: "GET" },
        );
        if (relatedResponse.success && relatedResponse.data) {
          relatedProducts = relatedResponse.data;
        }
      } catch (relatedErr) {
        console.error("Error fetching related products:", relatedErr);
      }

      return { product: normalized, relatedProducts, error: null };
    } catch (err) {
      console.error("Error fetching product:", err);
      return {
        product: null,
        relatedProducts: [],
        error: "Failed to load product. Please try again later.",
      };
    }
  },
  {
    watch: [slug],
    default: () => ({ product: null, relatedProducts: [], error: null }),
  },
);

const product = computed(() => pageData.value?.product || null);
const relatedProducts = computed(() => pageData.value?.relatedProducts || []);
const error = computed(() => pageData.value?.error || null);

// Correct HTTP status for crawlers/SEO, while keeping this page's own
// "Product Not Found" UI (below) instead of redirecting to a generic error page
if (import.meta.server && !product.value) {
  setResponseStatus(404);
}

// Reset UI state when navigating between product slugs client-side
watch(slug, () => {
  activeTab.value = "overview";
});
watch(product, () => {
  galleryIndex.value = 0;
});

// ── Gallery slider ──────────────────────────────────────────
const galleryIndex = ref(0);

const galleryNext = () => {
  if (!product.value?.gallery_items || product.value.gallery_items.length === 0)
    return;
  galleryIndex.value =
    (galleryIndex.value + 1) % product.value.gallery_items.length;
};

const galleryPrev = () => {
  if (!product.value?.gallery_items || product.value.gallery_items.length === 0)
    return;
  galleryIndex.value =
    galleryIndex.value === 0
      ? product.value.gallery_items.length - 1
      : galleryIndex.value - 1;
};

// Auto-play
let galleryTimer = null;
const startGalleryAutoPlay = () => {
  if (!product.value?.gallery_items || product.value.gallery_items.length <= 1)
    return;
  galleryTimer = setInterval(galleryNext, 4500);
};
const stopGalleryAutoPlay = () => {
  if (galleryTimer) {
    clearInterval(galleryTimer);
    galleryTimer = null;
  }
};

// Touch / swipe
let touchStartX = 0;
const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
};
const handleTouchEnd = (e) => {
  const diff = touchStartX - e.changedTouches[0].screenX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      galleryNext();
    } else {
      galleryPrev();
    }
  }
};

// ── Lightbox ────────────────────────────────────────────────
const lightboxOpen = ref(false);
const lightboxIndex = ref(0);

const openLightbox = (idx) => {
  lightboxIndex.value = idx;
  lightboxOpen.value = true;
  stopGalleryAutoPlay();
  if (import.meta.client) document.body.style.overflow = "hidden";
};
const closeLightbox = () => {
  lightboxOpen.value = false;
  if (import.meta.client) document.body.style.overflow = "";
  startGalleryAutoPlay();
};
const lightboxNext = () => {
  if (!product.value?.gallery_items || product.value.gallery_items.length === 0)
    return;
  lightboxIndex.value =
    (lightboxIndex.value + 1) % product.value.gallery_items.length;
};
const lightboxPrev = () => {
  if (!product.value?.gallery_items || product.value.gallery_items.length === 0)
    return;
  lightboxIndex.value =
    lightboxIndex.value === 0
      ? product.value.gallery_items.length - 1
      : lightboxIndex.value - 1;
};

// Keyboard navigation
onMounted(() => {
  startGalleryAutoPlay();
  const onKey = (e) => {
    if (lightboxOpen.value) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
    } else {
      if (e.key === "ArrowRight") galleryNext();
      if (e.key === "ArrowLeft") galleryPrev();
    }
  };
  window.addEventListener("keydown", onKey);
  onUnmounted(() => {
    stopGalleryAutoPlay();
    window.removeEventListener("keydown", onKey);
    if (import.meta.client) document.body.style.overflow = "";
  });
});

useHead(() => ({
  title: product.value
    ? `${product.value.name} - ByteStackLab Products`
    : "Product Not Found - ByteStackLab",
  meta: [
    {
      name: "description",
      content: product.value?.description || "Product not found.",
    },
  ],
  script: product.value?.seo?.schema_markup
    ? [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(product.value.seo.schema_markup),
        },
      ]
    : [],
}));
</script>
