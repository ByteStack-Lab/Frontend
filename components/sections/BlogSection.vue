<template>
  <section
    id="blog"
    ref="elementRef"
    class="py-14 md:py-20 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden transition-all duration-1000 ease-out"
    :class="{
      'opacity-0 translate-y-20': !isVisible,
      'opacity-100 translate-y-0': isVisible,
    }"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-0 left-0 w-full h-full"
        style="
          background-image:
            radial-gradient(circle at 25px 25px, #3533cd 2px, transparent 0),
            radial-gradient(circle at 75px 75px, #1e1b69 2px, transparent 0);
          background-size: 100px 100px;
        "
      />
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div
          class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"
        />
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          From Our
          <span
            class="block bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
            >Engineering Blog</span
          >
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          How we build, what we learned, and the trade-offs behind the
          decisions — written by the engineers doing the work.
        </p>
      </div>

      <!-- Blog Slider Container -->
      <div class="relative overflow-hidden">
        <!-- Loading State -->
        <div v-if="isLoading" class="flex justify-center items-center py-20">
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3533cd]"
          />
        </div>

        <!-- Empty State -->
        <div v-else-if="blogs.length === 0" class="text-center py-20">
          <div class="text-gray-500 mb-4">
            <svg aria-hidden="true"
              class="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <p class="text-lg text-gray-600 mb-6">
            No featured blogs available at the moment
          </p>
          <button
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white font-medium rounded-lg hover:from-[#1e1b69] hover:to-[#3533cd] transition-all duration-300"
            type="button"
            @click="goToBlog"
          >
            View All Blogs
          </button>
        </div>

        <!-- Blog Slider -->
        <div
          v-else
          ref="sliderContainer"
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
        >
          <!-- Blog Card -->
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 px-3"
          >
            <NuxtLink :to="`/blog/${blog.slug}`" class="block">
              <div
                class="interactive-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 group shimmer relative"
              >
                <!-- Featured Badge -->
                <div class="absolute top-3 left-3 z-10">
                  <span
                    class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse"
                  >
                    ⭐ Featured
                  </span>
                </div>

                <!-- Blog Image -->
                <div class="aspect-video overflow-hidden">
                  <NuxtImg
                    :src="
                      blog.featuredImage ||
                      `/images/blogs/${((blog.id || index + 1) % 3) + 1}.webp`
                    "
                    :alt="blog.title"
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="100vw md:50vw lg:33vw"
                    @error="
                      $event.target.src = `/images/blogs/${((blog.id || index + 1) % 3) + 1}.webp`
                    "
                  />
                </div>

                <!-- Blog Content -->
                <div class="p-6">
                  <!-- Category Badges -->
                  <div
                    v-if="blog.categories && blog.categories.length > 0"
                    class="mb-3"
                  >
                    <span
                      v-for="category in blog.categories.slice(0, 2)"
                      :key="category.id"
                      class="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full mr-1"
                    >
                      <!-- Category Icon -->
                      <svg
                        v-if="category.icon"
                        aria-hidden="true"
                        class="w-3 h-3"
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
                          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a3 3 0 003-3V6.75a3 3 0 00-3 3v10.5a3 3 0 003 3z"
                        />
                        <!-- Default Icon -->
                        <path
                          v-else
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      {{ category.name }}
                    </span>
                    <span
                      v-if="blog.categories.length > 2"
                      class="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                    >
                      +{{ blog.categories.length - 2 }}
                    </span>
                  </div>
                  <!-- Fallback to single category for backward compatibility -->
                  <div v-else-if="blog.category" class="mb-3">
                    <span
                      class="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full"
                    >
                      <svg aria-hidden="true"
                        class="w-3 h-3"
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

                  <h3
                    class="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors"
                  >
                    {{ blog.title }}
                  </h3>

                  <!-- Excerpt -->
                  <p
                    v-if="blog.excerpt"
                    class="text-gray-600 text-sm mb-4 line-clamp-2"
                  >
                    {{ blog.excerpt }}
                  </p>

                  <!-- Meta Info -->
                  <div
                    class="flex items-center justify-between text-xs text-gray-500 mb-4"
                  >
                    <span v-if="blog.publishedAt">{{ blog.publishedAt }}</span>
                    <span v-if="blog.readTime">{{ blog.readTime }}</span>
                  </div>

                  <div class="mt-4">
                    <span
                      class="inline-flex items-center text-[#3533cd] font-medium group-hover:text-[#1e1b69] transition-colors group"
                    >
                      Read More
                      <svg aria-hidden="true"
                        class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- All Blogs Button -->
      <div
        v-if="!isLoading && blogs.length > 0"
        class="text-center mt-12 relative z-50"
      >
        <button
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white font-semibold rounded-full hover:from-[#1e1b69] hover:to-[#3533cd] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group cursor-pointer select-none relative z-50"
          style="pointer-events: auto; position: relative; z-index: 9999"
          @click="goToBlog"
          @mouseenter="stopAutoSlide"
          @mouseleave="startAutoSlide"
        >
          <svg aria-hidden="true"
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <span>View All Blogs</span>
          <svg aria-hidden="true"
            class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
        </button>

        <!-- Blog count indicator -->
        <p class="text-sm text-gray-500 mt-3">
          Showing {{ blogs.length }} featured blog{{
            blogs.length !== 1 ? "s" : ""
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useScrollAnimation } from "~/composables/useScrollAnimation";
import { useApi } from "~/composables/useApi";

// Navigation
const router = useRouter();

// Scroll animation
const { isVisible, elementRef } = useScrollAnimation();

// Navigation function
const goToBlog = async (event) => {
  // Prevent any event bubbling
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  try {
    await router.push("/blog");
  } catch (error) {
    console.error("Navigation error:", error);
    // Fallback to window location
    if (import.meta.client) {
      window.location.href = "/blog";
    }
  }
};

const currentSlide = ref(0);
const slideWidth = ref(20); // 20% for 5 slides visible (1/5 = 20%)
const sliderContainer = ref(null);
const autoSlideInterval = ref(null);

// Fallback data if the API fails
const FALLBACK_BLOGS = [
  {
    id: 1,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    featuredImage: "/images/blogs/1.webp",
    slug: "scalable-application-aws",
    excerpt:
      "Learn how to build and scale applications to handle millions of users.",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Modern React Development Best Practices",
    featuredImage: "/images/blogs/2.webp",
    slug: "react-best-practices",
    excerpt: "Discover the latest React patterns and best practices.",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Building Responsive Web Applications",
    featuredImage: "/images/blogs/3.webp",
    slug: "responsive-web-apps",
    excerpt: "Master the art of creating responsive web applications.",
    category: "Design",
  },
];

// Dynamic blog data — fetched during SSR so this section isn't an empty
// shell for crawlers.
const { data: blogsData, pending: isLoading } = await useLazyAsyncData(
  "home-featured-blogs",
  async () => {
    try {
      const { getFeaturedBlogs } = useApi();
      const featuredBlogs = await getFeaturedBlogs();
      return featuredBlogs.map((blog) => ({
        id: blog.id,
        title: blog.title,
        featuredImage: blog.featuredImage,
        slug: blog.slug,
        excerpt: blog.excerpt,
        publishedAt: blog.formattedPublishedDate,
        readTime: blog.readTimeText,
        category: blog.category, // Single category for backward compatibility
        categories: blog.categories, // Array of category objects
      }));
    } catch (error) {
      console.error("Error fetching featured blogs:", error);
      return FALLBACK_BLOGS;
    }
  },
  { default: () => [] },
);
const blogs = computed(() => blogsData.value || []);

// Set responsive slide width based on screen size
const updateSlideWidth = () => {
  if (import.meta.client) {
    const width = window.innerWidth;
    if (width >= 1536) {
      // 2xl
      slideWidth.value = 20; // 5 slides
    } else if (width >= 1280) {
      // xl
      slideWidth.value = 25; // 4 slides
    } else if (width >= 1024) {
      // lg
      slideWidth.value = 33.333; // 3 slides
    } else if (width >= 768) {
      // md
      slideWidth.value = 50; // 2 slides
    } else {
      slideWidth.value = 100; // 1 slide
    }

    // Reset current slide to valid position after resize
    const slidesPerView = Math.floor(100 / slideWidth.value);
    const maxSlides = Math.max(0, blogs.value.length - slidesPerView);
    if (currentSlide.value > maxSlides) {
      currentSlide.value = maxSlides;
    }

    // Disable auto-slide to test button functionality
    // stopAutoSlide()
    // if (blogs.value.length > 0) {
    //   setTimeout(() => {
    //     startAutoSlide()
    //   }, 100)
    // }
  }
};

// Auto slide functionality
const startAutoSlide = () => {
  // Only start auto slide if there are enough blogs to slide
  const slidesPerView = Math.floor(100 / slideWidth.value);
  if (blogs.value.length <= slidesPerView) {
    return;
  }

  autoSlideInterval.value = setInterval(() => {
    nextSlide();
  }, 3000); // Change slide every 3 seconds
};

const stopAutoSlide = () => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value);
  }
};

const nextSlide = () => {
  const slidesPerView = Math.floor(100 / slideWidth.value);
  const maxSlides = Math.max(0, blogs.value.length - slidesPerView);

  if (blogs.value.length <= slidesPerView) {
    currentSlide.value = 0;
    return;
  }

  currentSlide.value =
    currentSlide.value >= maxSlides ? 0 : currentSlide.value + 1;
};

onMounted(() => {
  updateSlideWidth();

  if (import.meta.client) {
    window.addEventListener("resize", updateSlideWidth);
  }
});

onUnmounted(() => {
  stopAutoSlide();
  if (import.meta.client) {
    window.removeEventListener("resize", updateSlideWidth);
  }
});
</script>

<style scoped>
/* Prevent text selection during drag */
.cursor-grabbing * {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions */
.transition-transform {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Enhanced card hover effects */
.interactive-card {
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.interactive-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

/* Featured badge animation */
@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 193, 7, 0.8);
  }
}

.animate-pulse {
  animation: pulse-glow 2s infinite;
}

/* Background pattern animation */
@keyframes pattern-shift {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}

.bg-pattern {
  animation: pattern-shift 20s linear infinite;
}
</style>
