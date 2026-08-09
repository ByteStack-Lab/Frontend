<template>
  <div class="min-h-screen bg-gradient-to-b from-white via-[#f8f8ff] to-white">
    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center items-center min-h-screen">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3533cd]"
      />
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="min-h-screen flex items-center justify-center"
    >
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Blog Post Not Found
        </h1>
        <p class="text-gray-600 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <NuxtLink
          to="/blog"
          class="px-6 py-3 bg-[#3533cd] text-white rounded-lg hover:bg-[#1e1b69] transition-colors"
        >
          Back to Blog
        </NuxtLink>
      </div>
    </div>

    <!-- Blog Post Content -->
    <div v-else-if="blog">
      <!-- Reading Progress -->
      <div class="fixed left-0 right-0 top-0 z-40 h-1 bg-transparent">
        <div
          class="h-full bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#E56F8C] transition-all duration-150"
          :style="{ width: `${readingProgress}%` }"
        />
      </div>

      <!-- Hero Section -->
      <section
        class="relative overflow-hidden pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-[#f0f0ff]"
      >
        <div
          class="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#3533cd]/10 blur-3xl"
        />
        <div
          class="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#E56F8C]/10 blur-3xl"
        />
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
          <NuxtLink
            to="/blog"
            class="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#3533cd] hover:text-[#1e1b69] transition-colors"
          >
            <svg
              class="h-4 w-4"
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
            Back to all articles
          </NuxtLink>

          <!-- Breadcrumb -->
          <nav
            class="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-8"
          >
            <NuxtLink
              to="/"
              class="hover:text-[#3533cd] transition-colors duration-200"
              >Home</NuxtLink
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
                d="M9 5l7 7-7 7"
              />
            </svg>
            <NuxtLink
              to="/blog"
              class="hover:text-[#3533cd] transition-colors duration-200"
              >Blog</NuxtLink
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
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span class="max-w-[18rem] truncate text-gray-900 sm:max-w-sm">{{
              blog.title
            }}</span>
          </nav>

          <!-- Post Meta Info -->
          <div class="mb-6 flex flex-wrap items-center gap-3">
            <!-- Categories -->
            <div class="flex flex-wrap gap-2">
              <template v-if="blog.categories && blog.categories.length">
              <span
                v-for="category in blog.categories"
                :key="category.id || category"
                class="flex items-center gap-1.5 rounded-full border border-[#d9d9ff] bg-[#eeeeff] px-3 py-1 text-sm font-semibold text-[#3533cd]"
                :style="
                  category.color
                    ? `background-color: ${category.color}15; color: ${category.color};`
                    : ''
                "
              >
                <!-- Category Icon -->
                <svg
                  v-if="category.icon"
                  class="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <!-- Code Bracket Icon -->
                  <path
                    v-if="category.icon === 'code-bracket'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                  <!-- Design Icon -->
                  <path
                    v-else-if="category.icon === 'paint-brush'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                  />
                  <!-- Mobile Development Icon -->
                  <path
                    v-else-if="category.icon === 'device-phone-mobile'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                  <!-- Analytics/Data Icon -->
                  <path
                    v-else-if="category.icon === 'chart-bar'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                  <!-- Technology Icon -->
                  <path
                    v-else-if="category.icon === 'cpu-chip'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a3 3 0 003-3V6.75a3 3 0 00-3-3H6.75a3 3 0 00-3 3v10.5a3 3 0 003 3z"
                  />
                  <!-- SEO Icon -->
                  <path
                    v-else-if="category.icon === 'magnifying-glass'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                  <!-- Tutorial Icon -->
                  <path
                    v-else-if="category.icon === 'academic-cap'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                  <!-- Default Icon for unknown types -->
                  <path
                    v-else
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                {{ category.name || category }}
              </span>
              </template>
              <!-- Fallback to single category if categories array is not available -->
              <span
                v-else-if="blog.category"
                class="flex items-center gap-1.5 rounded-full border border-[#d9d9ff] bg-[#eeeeff] px-3 py-1 text-sm font-semibold text-[#3533cd]"
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
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                {{ blog.category }}
              </span>
            </div>
            <div
              class="flex items-center rounded-full bg-white/90 px-3 py-1.5 text-sm text-gray-600 shadow-sm ring-1 ring-gray-100"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {{ blog.formattedPublishedDate }}
            </div>
            <div
              class="flex items-center rounded-full bg-white/90 px-3 py-1.5 text-sm text-gray-600 shadow-sm ring-1 ring-gray-100"
            >
              <svg
                class="w-4 h-4 mr-2"
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
              {{ blog.readTimeText }}
            </div>
            <div
              class="flex items-center rounded-full bg-white/90 px-3 py-1.5 text-sm text-gray-600 shadow-sm ring-1 ring-gray-100"
            >
              <svg
                class="w-4 h-4 mr-2"
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
              {{ blog.views }} views
            </div>
          </div>

          <!-- Post Title -->
          <h1
            class="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
          >
            {{ blog.title }}
          </h1>

          <!-- Post Excerpt -->
          <p
            class="mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            {{ blog.excerpt }}
          </p>

          <!-- Author Info -->
          <div
            class="inline-flex items-center rounded-2xl border border-gray-100 bg-white/90 px-4 py-3 shadow-sm"
          >
            <NuxtImg
              :src="blog.authorImage || '/images/favicons/android-icon-192x192.png'"
              :alt="blog.authorName"
              class="h-12 w-12 rounded-full object-cover ring-2 ring-[#eeeeff]"
            />
            <div class="ml-4">
              <p class="text-xs uppercase tracking-wide text-gray-500">
                Written by
              </p>
              <h3 class="font-semibold text-gray-900">{{ blog.authorName }}</h3>
              <p class="text-sm text-gray-600">
                {{ blog.authorBio || "Content Writer" }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Image -->
      <section class="py-8">
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <NuxtImg
              :src="blog.featuredImage || '/images/blogs/1.webp'"
              :alt="blog.title"
              class="w-full h-64 md:h-96 object-cover"
              loading="eager"
              sizes="100vw lg:896px"
            />
            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white"
            >
              <p class="text-sm font-medium text-white/80">Featured cover</p>
              <p class="text-lg font-semibold">{{ blog.title }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Content -->
      <section class="py-12">
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
          <article
            class="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg shadow-[#3533cd]/5 md:p-10"
          >
            <!-- Content -->
            <!-- eslint-disable vue/no-v-html -- sanitized via sanitizeHtml() below, which strips <script> tags, inline event handlers, and javascript: URLs -->
            <div
              class="prose prose-lg max-w-none mb-12"
              v-html="sanitizeHtml(blog.content)"
            />
            <!-- eslint-enable vue/no-v-html -->

            <!-- Gallery Images -->
            <div
              v-if="blog.galleryImages && blog.galleryImages.length"
              class="mb-12"
            >
              <h4 class="mb-6 text-2xl font-bold text-gray-900">Gallery</h4>
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="(image, index) in blog.galleryImages"
                  :key="index"
                  class="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
                  @click="openLightbox(index)"
                >
                  <NuxtImg
                    :src="image"
                    :alt="`Gallery image ${index + 1} for ${blog.title}`"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="100vw md:50vw lg:33vw"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div
              v-if="blog.tags && blog.tags.length"
              class="mb-8 rounded-2xl bg-[#f8f8ff] p-5"
            >
              <h4 class="mb-4 text-lg font-semibold text-gray-900">Tags:</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in blog.tags"
                  :key="tag"
                  class="rounded-full border border-[#d9d9ff] bg-white px-3 py-1 text-sm text-gray-700 transition-colors hover:border-[#3533cd] hover:text-[#3533cd]"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>

            <!-- Social Share -->
            <div class="mb-8 border-t border-gray-200 pt-8">
              <h4 class="mb-4 text-lg font-semibold text-gray-900">
                Share this article:
              </h4>
              <div class="flex flex-wrap items-center gap-3">
                <button class="share-action-btn" @click="shareToX">
                  <svg
                    class="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.658-5.848 6.658H2.117l7.645-8.746L2.82 2.25h6.8l4.759 6.284L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                    />
                  </svg>
                  X
                </button>

                <button class="share-action-btn" @click="shareToFacebook">
                  <svg
                    class="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                  Facebook
                </button>

                <button class="share-action-btn" @click="shareToLinkedIn">
                  <svg
                    class="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                  LinkedIn
                </button>

                <button class="share-action-btn" @click="copyArticleLink">
                  <svg
                    class="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.59 14.37a5 5 0 01-7.07 0l-1.41-1.42a5 5 0 117.07-7.07l.71.7M8.41 9.63a5 5 0 017.07 0l1.41 1.42a5 5 0 11-7.07 7.07l-.71-.7"
                    />
                  </svg>
                  {{ copyLinkLabel }}
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Full Width CTA -->
      <section
        class="py-24 bg-gradient-to-r from-[#3533cd] via-[#2d2a7a] to-[#1e1b69]"
      >
        <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement This Strategy?
          </h2>
          <p class="text-xl text-white/90 mb-8 leading-relaxed">
            If this article matches your current challenge, we can help you
            design, build, and launch a tailored solution faster.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="bg-white text-[#3533cd] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Book a Free Consultation
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3533cd] transition-all duration-300"
            >
              Explore Related Services
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Related Posts -->
      <section
        v-if="relatedBlogs.length"
        class="py-16 bg-gradient-to-b from-[#f8f8ff] to-white"
      >
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
            <p class="text-gray-600">Discover more insights and stories</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              v-for="relatedPost in relatedBlogs"
              :key="relatedPost.id"
              class="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div class="aspect-video overflow-hidden">
                <NuxtImg
                  :src="relatedPost.featuredImage || '/images/blogs/1.webp'"
                  :alt="relatedPost.title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="100vw md:50vw lg:33vw"
                />
              </div>

              <div class="p-6">
                <div class="flex items-center text-sm text-gray-600 mb-3">
                  {{ relatedPost.formattedPublishedDate }}
                  <span class="mx-2">•</span>
                  {{ relatedPost.readTimeText }}
                </div>

                <h3
                  class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3533cd] transition-colors duration-300"
                >
                  {{ relatedPost.title }}
                </h3>

                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ relatedPost.excerpt }}
                </p>

                <NuxtLink
                  :to="`/blog/${relatedPost.slug}`"
                  class="inline-flex items-center text-[#3533cd] hover:text-[#1e1b69] font-medium text-sm group"
                >
                  Read More
                  <svg
                    class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
            </article>
          </div>
        </div>
      </section>
    </div>

    <!-- Lightbox Modal -->
    <div
      v-if="showLightbox && blog.galleryImages"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      @click="closeLightbox"
    >
      <div class="relative max-w-4xl max-h-full p-4">
        <!-- Close Button -->
        <button
          class="absolute right-4 top-4 z-10 rounded-full bg-black/35 p-2 text-white transition-colors hover:bg-black/60"
          aria-label="Close lightbox"
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

        <!-- Previous Button -->
        <button
          v-if="currentImageIndex > 0"
          class="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/35 p-2 text-white transition-colors hover:bg-black/60"
          aria-label="Previous image"
          @click.stop="previousImage"
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

        <!-- Next Button -->
        <button
          v-if="currentImageIndex < blog.galleryImages.length - 1"
          class="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/35 p-2 text-white transition-colors hover:bg-black/60"
          aria-label="Next image"
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

        <!-- Image -->
        <NuxtImg
          :src="blog.galleryImages[currentImageIndex]"
          :alt="`Gallery image ${currentImageIndex + 1} for ${blog.title}`"
          class="max-w-full max-h-full object-contain rounded-lg"
          loading="eager"
          @click.stop
        />

        <!-- Image Counter -->
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full"
        >
          {{ currentImageIndex + 1 }} / {{ blog.galleryImages.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

// Lightbox state
const showLightbox = ref(false);
const currentImageIndex = ref(0);
const readingProgress = ref(0);
const copyLinkLabel = ref("Copy Link");

// Server-side data fetching for SSR/SEO
const {
  data: blog,
  pending,
  error,
} = await useLazyAsyncData(`blog-${slug}`, () => {
  const { getBlog } = useApi();
  return getBlog(slug);
});

// Correct HTTP status for crawlers/SEO, while keeping this page's own
// "Blog Post Not Found" UI (below) instead of redirecting to a generic error page
if (import.meta.server && (!blog.value || error.value)) {
  setResponseStatus(404);
}

// Related posts — fetched separately so a failure here doesn't break the page
const { data: relatedBlogs } = await useLazyAsyncData(
  `blog-${slug}-related`,
  async () => {
    const { getRelatedBlogs } = useApi();
    try {
      return await getRelatedBlogs(slug);
    } catch (relatedError) {
      console.warn("Failed to fetch related blogs:", relatedError);
      return [];
    }
  },
  { default: () => [] },
);

// Dynamic SEO meta tags
const breadcrumbSchema = useBreadcrumbSchema();

useHead(() => ({
  title: blog.value
    ? `${blog.value.title} | ByteStackLab Blog`
    : "Blog | ByteStackLab",
  meta: [
    {
      name: "description",
      content: blog.value?.metaDescription || blog.value?.excerpt || "",
    },
    { property: "og:title", content: blog.value?.title || "" },
    { property: "og:description", content: blog.value?.excerpt || "" },
    { property: "og:image", content: blog.value?.featuredImage || "" },
    { property: "og:type", content: "article" },
  ],
  script: [
    ...(blog.value?.schemaMarkup
      ? [
          {
            type: "application/ld+json",
            innerHTML: JSON.stringify(blog.value.schemaMarkup),
          },
        ]
      : []),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: blog.value?.title || "Blog Post", path: `/blog/${slug}` },
    ]),
  ],
}));

const updateReadingProgress = () => {
  const doc = document.documentElement;
  const totalHeight = doc.scrollHeight - doc.clientHeight;
  const progress = totalHeight > 0 ? (doc.scrollTop / totalHeight) * 100 : 0;
  readingProgress.value = Math.min(100, Math.max(0, progress));
};

// Add keyboard/scroll listeners for lightbox + reading progress (client-only)
onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  updateReadingProgress();
});

// Lightbox functions
const openLightbox = (index) => {
  currentImageIndex.value = index;
  showLightbox.value = true;
  // Prevent body scroll when lightbox is open
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  showLightbox.value = false;
  // Restore body scroll
  document.body.style.overflow = "auto";
};

const nextImage = () => {
  if (currentImageIndex.value < blog.value.galleryImages.length - 1) {
    currentImageIndex.value++;
  }
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

// Keyboard navigation for lightbox
const handleKeydown = (event) => {
  if (!showLightbox.value) return;

  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowRight") {
    nextImage();
  } else if (event.key === "ArrowLeft") {
    previousImage();
  }
};

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("scroll", updateReadingProgress);
  // Ensure body scroll is restored if component unmounts with lightbox open
  document.body.style.overflow = "auto";
});

// Social sharing functions
const shareToX = () => {
  const url = `https://x.com/intent/tweet?text=${encodeURIComponent(blog.value.title)}&url=${encodeURIComponent(window.location.href)}`;
  window.open(url, "_blank", "width=600,height=400");
};

const shareToFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
  window.open(url, "_blank", "width=600,height=400");
};

const shareToLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
  window.open(url, "_blank", "width=600,height=400");
};

const copyArticleLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyLinkLabel.value = "Link Copied";
  } catch (err) {
    console.warn("Clipboard copy failed:", err);
    copyLinkLabel.value = "Copy Failed";
  }

  setTimeout(() => {
    copyLinkLabel.value = "Copy Link";
  }, 1800);
};
</script>

<style scoped>
.share-action-btn {
  display: inline-flex;
  align-items: center;
  border-radius: 0.75rem;
  border: 1px solid #d1d5db;
  background: #ffffff;
  padding: 0.625rem 1rem;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.share-action-btn:hover {
  border-color: #3533cd;
  color: #3533cd;
  box-shadow: 0 8px 18px rgba(53, 51, 205, 0.15);
}

/* Prose styling for blog content */
:deep(.prose) {
  color: #374151;
  line-height: 1.75;
  font-size: 1.05rem;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4) {
  color: #111827;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

:deep(.prose h2) {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

:deep(.prose h3) {
  font-size: 1.5rem;
  line-height: 2rem;
}

:deep(.prose p) {
  margin-bottom: 1.5rem;
}

:deep(.prose p + h2),
:deep(.prose p + h3) {
  margin-top: 2.5rem;
}

:deep(.prose strong) {
  color: #111827;
  font-weight: 600;
}

:deep(.prose a) {
  color: #3533cd;
  text-decoration: underline;
}

:deep(.prose a:hover) {
  color: #1e1b69;
}

:deep(.prose ul),
:deep(.prose ol) {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

:deep(.prose li) {
  margin-bottom: 0.5rem;
}

:deep(.prose blockquote) {
  border-left: 4px solid #3533cd;
  padding-left: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background: #f8f8ff;
  border-radius: 0 0.75rem 0.75rem 0;
  margin: 2rem 0;
  font-style: italic;
  color: #6b7280;
}

:deep(.prose pre) {
  background-color: #1f2937;
  color: #e5e7eb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

:deep(.prose code) {
  background-color: #f3f4f6;
  color: #1f2937;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

:deep(.prose img) {
  border-radius: 0.75rem;
  margin: 2rem 0;
  width: 100%;
  height: auto;
  box-shadow: 0 16px 30px rgba(17, 24, 39, 0.12);
}
</style>
