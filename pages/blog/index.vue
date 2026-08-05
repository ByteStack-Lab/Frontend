<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-[#f0f0ff]">
    <!-- Blog Hero Section -->
    <section class="relative pt-28 pb-20 overflow-hidden">
      <!-- Animated Background Grid -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
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
        <!-- Floating dots -->
        <div
          class="absolute top-48 left-36 w-2 h-2 bg-blue-500/40 rounded-full animate-float-1"
        />
        <div
          class="absolute top-72 right-48 w-2 h-2 bg-purple-500/40 rounded-full animate-float-2"
        />
        <div
          class="absolute bottom-48 left-72 w-2 h-2 bg-indigo-500/40 rounded-full animate-float-3"
        />
        <div
          class="absolute bottom-72 right-36 w-2 h-2 bg-pink-500/40 rounded-full animate-float-4"
        />
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-6">
          <div
            class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#E56F8C] rounded-full mx-auto mb-6"
          />
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="text-gray-900">Our</span>
            <span
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
            >
              Blog</span
            >
          </h1>
          <p
            class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Stay updated with the latest trends, insights, and best practices in
            web development, mobile apps, and digital transformation. Learn from
            our experience and expertise.
          </p>
        </div>

        <!-- Stats Row -->
        <div class="flex flex-wrap justify-center gap-8 mt-12">
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">
              <span
                v-if="pending"
                class="inline-block w-12 h-8 bg-gray-200 rounded animate-pulse"
              />
              <span v-else>{{ blogs.length }}+</span>
            </div>
            <div class="text-sm text-gray-500 mt-1">Articles</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"/>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">
              <span
                v-if="pending"
                class="inline-block w-10 h-8 bg-gray-200 rounded animate-pulse"
              />
              <span v-else>{{ categories.length }}+</span>
            </div>
            <div class="text-sm text-gray-500 mt-1">Categories</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"/>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">5K+</div>
            <div class="text-sm text-gray-500 mt-1">Monthly Readers</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"/>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">Weekly</div>
            <div class="text-sm text-gray-500 mt-1">New Posts</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section
      class="py-6 bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div v-if="pending" class="flex justify-center">
          <div
            class="animate-spin rounded-full h-6 w-6 border-b-2 border-[#3533cd]"
          />
        </div>
        <div v-else class="flex flex-wrap justify-center gap-3">
          <button
            :class="[
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
              selectedCategory === null
                ? 'bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ]"
            @click="selectedCategory = null"
          >
            All Posts
          </button>
          <button
            v-for="category in categories"
            :key="category"
            :class="[
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
              selectedCategory === category
                ? 'bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ]"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Loading State -->
        <div
          v-if="pending"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div v-for="i in 6" :key="i" class="animate-pulse">
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div class="h-48 bg-gray-300"/>
              <div class="p-6">
                <div class="h-4 bg-gray-300 rounded mb-2"/>
                <div class="h-4 bg-gray-300 rounded w-3/4 mb-4"/>
                <div class="h-3 bg-gray-300 rounded w-1/2"/>
              </div>
            </div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-20">
          <div class="text-red-500 text-lg mb-4">{{ error }}</div>
          <button
            class="px-6 py-3 bg-[#3533cd] text-white rounded-lg hover:bg-[#1e1b69] transition-colors"
            @click="refresh()"
          >
            Try Again
          </button>
        </div>

        <!-- No Posts -->
        <div v-else-if="filteredBlogs.length === 0" class="text-center py-20">
          <div class="text-gray-500 text-lg">No blog posts found.</div>
        </div>

        <!-- Blog Posts -->
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <article
            v-for="(blog, index) in filteredBlogs"
            :key="blog.id"
            class="group animate-fade-in-up bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-[1.02]"
            :style="`animation-delay: ${index * 0.1}s`"
            @click="navigateTo(`/blog/${blog.slug}`)"
          >
            <!-- Featured Badge -->
            <div v-if="blog.is_featured" class="absolute top-4 left-4 z-10">
              <span
                class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full"
              >
                Featured
              </span>
            </div>

            <!-- Blog Image -->
            <div class="relative h-48 overflow-hidden">
              <img
                :src="
                  blog.featured_image ||
                  blog.featuredImage ||
                  `/images/blogs/${((blog.id ?? index + 1) % 3) + 1}.webp`
                "
                :alt="blog.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                @error="
                  $event.target.src = `/images/blogs/${((blog.id ?? index + 1) % 3) + 1}.webp`
                "
              >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <!-- Blog Content -->
            <div class="p-6">
              <!-- Category & Date -->
              <div class="flex items-center justify-between mb-3">
                <div
                  class="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#3533cd] bg-[#eeeeff] rounded-full"
                >
                  <!-- Category Icon -->
                  <svg
                    v-if="
                      blog.categories &&
                      blog.categories[0] &&
                      blog.categories[0].icon
                    "
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <!-- Code Bracket Icon -->
                    <path
                      v-if="blog.categories[0].icon === 'code-bracket'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                    <!-- Design Icon -->
                    <path
                      v-else-if="blog.categories[0].icon === 'paint-brush'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                    <!-- Mobile Development Icon -->
                    <path
                      v-else-if="
                        blog.categories[0].icon === 'device-phone-mobile'
                      "
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                    <!-- Analytics/Data Icon -->
                    <path
                      v-else-if="blog.categories[0].icon === 'chart-bar'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                    <!-- Technology Icon -->
                    <path
                      v-else-if="blog.categories[0].icon === 'cpu-chip'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a3 3 0 003-3V6.75a3 3 0 00-3-3H6.75a3 3 0 00-3 3v10.5a3 3 0 003 3z"
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
                  <!-- Default icon if no category icon -->
                  <svg
                    v-else
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
                  {{
                    (blog.categories &&
                      blog.categories[0] &&
                      blog.categories[0].name) ||
                    blog.category
                  }}
                </div>
                <time class="text-sm text-gray-500">
                  {{ formatDate(blog.published_at) }}
                </time>
              </div>

              <!-- Title -->
              <h3
                class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#3533cd] transition-colors duration-300"
              >
                {{ blog.title }}
              </h3>

              <!-- Excerpt -->
              <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                {{ blog.excerpt }}
              </p>

              <!-- Author & Read More -->
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-8 h-8 bg-gradient-to-r from-[#3533cd] to-[#6675F7] rounded-full flex items-center justify-center"
                  >
                    <span class="text-white text-sm font-semibold">
                      {{
                        (
                          blog.authorName ||
                          blog.author ||
                          "ByteStackLab"
                        ).charAt(0)
                      }}
                    </span>
                  </div>
                  <span class="text-sm text-gray-700 font-medium">
                    {{ blog.authorName || blog.author || "ByteStackLab" }}
                  </span>
                </div>

                <div
                  class="flex items-center text-[#3533cd] font-semibold text-sm group"
                >
                  Read More
                  <svg
                    class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div
          v-if="blogs.length > 0 && blogs.length >= 9"
          class="text-center mt-16"
        >
          <button
            class="px-8 py-4 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white font-semibold rounded-lg hover:from-[#2b29b0] hover:to-[#17155a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Load More Posts
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-24 bg-gradient-to-r from-[#3533cd] via-[#2d2a7a] to-[#1e1b69]"
    >
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Want These Insights Applied to Your Business?
        </h2>
        <p class="text-xl text-white/90 mb-8 leading-relaxed">
          Explore real implementation paths and discuss how our team can turn
          these ideas into measurable product and growth outcomes.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/case-studies"
            class="bg-white text-[#3533cd] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            View Case Studies
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#3533cd] transition-all duration-300"
          >
            Talk to Our Team
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags for SEO
useSeoMeta({
  title: "Blog - ByteStackLab | Latest Web Development Insights",
  description:
    "Stay updated with the latest trends, insights, and best practices in web development, mobile apps, and digital transformation. Learn from our experience and expertise.",
  ogTitle: "Blog - ByteStackLab",
  ogDescription:
    "Stay updated with the latest trends, insights, and best practices in web development, mobile apps, and digital transformation.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

// Reactive filter state
const selectedCategory = ref(null);

// Server-side data fetching for SSR/SEO — blogs + categories fetched together
const {
  data: pageData,
  pending,
  refresh,
} = await useLazyAsyncData(
  "blog-index",
  async () => {
    const { getBlogs, getBlogCategories } = useApi();

    try {
      const blogsData = await getBlogs();

      let categoriesData = [];
      try {
        const catData = await getBlogCategories();
        // Filter categories that have at least one blog
        categoriesData = catData
          .filter((cat) => cat.count > 0)
          .map((cat) => cat.name);
      } catch (catErr) {
        console.error("Error fetching categories:", catErr);
        // Fallback to extracting categories from blogs
        categoriesData = [
          ...new Set(
            blogsData.flatMap((blog) =>
              blog.categories && Array.isArray(blog.categories)
                ? blog.categories.map((cat) => cat.name || cat)
                : blog.category
                  ? [blog.category]
                  : [],
            ),
          ),
        ].filter(Boolean);
      }

      return { blogs: blogsData, categories: categoriesData, error: null };
    } catch (err) {
      console.error("Error fetching blogs:", err);
      return {
        blogs: [],
        categories: [],
        error: "Failed to load blog posts. Please try again.",
      };
    }
  },
  { default: () => ({ blogs: [], categories: [], error: null }) },
);

const blogs = computed(() => pageData.value?.blogs || []);
const categories = computed(() => pageData.value?.categories || []);
const error = computed(() => pageData.value?.error || null);

// Computed property for filtered blogs
const filteredBlogs = computed(() => {
  if (!selectedCategory.value) return blogs.value;

  // Filter by category name
  return blogs.value.filter((blog) => {
    // Check if blog has categories array
    if (blog.categories && Array.isArray(blog.categories)) {
      return blog.categories.some((cat) => {
        // Handle category object format
        if (typeof cat === "object" && cat !== null) {
          return cat.name === selectedCategory.value;
        }
        // Handle string format as fallback
        return cat === selectedCategory.value;
      });
    }
    // Fallback to single category field
    return blog.category === selectedCategory.value;
  });
});

// Format date helper
const formatDate = (dateString) => {
  if (!dateString) return "";

  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
};
</script>

<style scoped>
/* Custom animations for data flow */
@keyframes data-flow-1 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0.5;
  }
  25% {
    transform: translate(100px, -50px);
    opacity: 1;
  }
  50% {
    transform: translate(200px, 0);
    opacity: 0.7;
  }
  75% {
    transform: translate(100px, 50px);
    opacity: 1;
  }
}

@keyframes data-flow-2 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0.4;
  }
  33% {
    transform: translate(-80px, 60px);
    opacity: 1;
  }
  66% {
    transform: translate(-160px, 20px);
    opacity: 0.6;
  }
}

@keyframes data-flow-3 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0.6;
  }
  40% {
    transform: translate(120px, -40px);
    opacity: 1;
  }
  80% {
    transform: translate(60px, -80px);
    opacity: 0.4;
  }
}

@keyframes data-flow-4 {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0.3;
  }
  30% {
    transform: translate(-90px, -30px);
    opacity: 1;
  }
  60% {
    transform: translate(-45px, -60px);
    opacity: 0.7;
  }
}

.animate-pulse-slow {
  animation: pulse 4s ease-in-out infinite;
}

.animate-pulse-medium {
  animation: pulse 3s ease-in-out infinite;
}

.animate-data-flow-1 {
  animation: data-flow-1 8s ease-in-out infinite;
}

.animate-data-flow-2 {
  animation: data-flow-2 10s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-data-flow-3 {
  animation: data-flow-3 9s ease-in-out infinite;
  animation-delay: 4s;
}

.animate-data-flow-4 {
  animation: data-flow-4 7s ease-in-out infinite;
  animation-delay: 6s;
}

/* Staggered animation for blog posts */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button hover effects */
button {
  transition: all 0.3s ease;
}

.group:hover svg {
  transform: translateX(2px);
}

/* Image hover effects */
img {
  transition: transform 0.5s ease;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2.5rem;
  }
}
</style>
