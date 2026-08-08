<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
    <!-- Case Studies Hero Section -->
    <section class="relative pt-28 pb-20 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Matrix-style Grid Lines -->
        <div class="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse-slow"/>
        <div class="absolute left-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/15 to-transparent animate-pulse-medium"/>
        <div class="absolute right-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent animate-pulse-slow"/>
        <div class="absolute right-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-400/15 to-transparent animate-pulse-medium"/>
        <div class="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse-slow"/>
        <div class="absolute top-64 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse-medium"/>
        <!-- Floating dots -->
        <div class="absolute top-48 left-36 w-2 h-2 bg-blue-500/40 rounded-full animate-float-1"/>
        <div class="absolute top-72 right-48 w-2 h-2 bg-purple-500/40 rounded-full animate-float-2"/>
        <div class="absolute bottom-48 left-72 w-2 h-2 bg-indigo-500/40 rounded-full animate-float-3"/>
        <div class="absolute bottom-72 right-36 w-2 h-2 bg-pink-500/40 rounded-full animate-float-4"/>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-6">
          <div class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"/>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="text-gray-900">Our</span>
            <span class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"> Case Studies</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real projects, real results. Explore our portfolio of software solutions built for businesses locally and internationally — across different industries and use cases.
          </p>
        </div>

        <!-- Stats Row -->
        <div class="flex flex-wrap justify-center gap-8 mt-12">
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">
              {{ pending ? '...' : caseStudies.length + '+' }}
            </div>
            <div class="text-sm text-gray-500 mt-1">Case Studies</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"/>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">100+</div>
            <div class="text-sm text-gray-500 mt-1">Happy Clients</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"/>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">10+</div>
            <div class="text-sm text-gray-500 mt-1">Industries</div>
          </div>
          <div class="w-px h-12 bg-gray-200 self-center hidden sm:block"/>
          <div class="text-center">
            <div class="text-3xl font-bold text-[#3533cd]">5+</div>
            <div class="text-sm text-gray-500 mt-1">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="py-6 bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            :class="[
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
              selectedFilter === ''
                ? 'bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
            @click="selectedFilter = ''"
          >
            All Case Studies
          </button>
          <button
            v-for="filter in filters"
            :key="filter"
            :class="[
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
              selectedFilter === filter
                ? 'bg-gradient-to-r from-[#3533cd] to-[#6675F7] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
            @click="selectedFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="py-16" style="background-color: #f7f7fa;">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <!-- Loading State -->
        <div v-if="pending" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3533cd]"/>
          <p class="mt-4 text-gray-600">Loading case studies...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <p class="text-red-600">Failed to load case studies. Please try again later.</p>
          <button class="mt-4 px-6 py-2 bg-[#3533cd] text-white rounded-lg hover:bg-[#1e1b69] transition-colors" @click="retryLoading">
            Retry
          </button>
        </div>

        <!-- Content Area -->
        <div v-if="!pending && !error">
          <!-- Debug Information (Remove in production) 
          <div class="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 class="font-semibold text-yellow-800 mb-2">Debug Info:</h4>
            <p class="text-sm text-yellow-700">Total Case Studies: {{ caseStudies.length }}</p>
            <p class="text-sm text-yellow-700">Filtered Case Studies: {{ filteredCaseStudies.length }}</p>
            <p class="text-sm text-yellow-700">Available Categories: {{ filters.length }}</p>
            <p class="text-sm text-yellow-700">Selected Filter: "{{ selectedFilter || 'None' }}"</p>
            <details class="mt-2">
              <summary class="text-sm text-yellow-700 cursor-pointer">View Sample Case Study</summary>
              <pre class="mt-2 text-xs bg-yellow-100 p-2 rounded overflow-auto max-h-40">{{ JSON.stringify(caseStudies[0], null, 2) }}</pre>
            </details>
          </div>
          -->

          <!-- Case Studies List - Matching Home Page Design -->
          <div v-if="filteredCaseStudies && filteredCaseStudies.length > 0" class="space-y-12">
            <div 
              v-for="(caseStudy, index) in filteredCaseStudies" 
              :key="caseStudy.id || index"
              class="rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300" 
              :style="{ backgroundColor: getCaseStudyBgColor(index) }"
            >
            <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <!-- Image Column -->
              <div :class="index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'">
                <div class="relative">
                  <!-- Dynamic Image with Fallback -->
                  <div v-if="getImageUrl(caseStudy)" class="relative group">
                    <NuxtImg
                      :src="getImageUrl(caseStudy)"
                      :alt="caseStudy.title || 'Case Study'"
                      class="w-full h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="100vw lg:50vw"
                      @error="handleImageError"
                    />
                    <!-- Hidden fallback that shows on error -->
                    <div class="absolute inset-0 w-full h-64 bg-gradient-to-br from-[#3533cd]/10 to-[#1e1b69]/10 rounded-2xl shadow-lg items-center justify-center border border-gray-200 hidden">
                      <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                          </svg>
                        </div>
                        <p class="text-gray-500 text-sm">{{ caseStudy.title || 'Case Study' }}</p>
                        <p class="text-gray-400 text-xs mt-1">Image unavailable</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Fallback Design when no image -->
                  <div v-else class="w-full h-64 bg-gradient-to-br from-[#3533cd]/10 to-[#1e1b69]/10 rounded-2xl shadow-lg flex items-center justify-center border border-gray-200">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                        </svg>
                      </div>
                      <p class="text-gray-500 text-sm">{{ caseStudy.title || 'Case Study' }}</p>
                      <p class="text-gray-400 text-xs mt-1">No image available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Content Column -->
              <div :class="index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'" class="space-y-6">
                <!-- Category Badge -->
                <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" :class="getCategoryClass(caseStudy.category)">
                  {{ caseStudy.category || 'Case Study' }}
                </div>
                
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">
                  {{ caseStudy.title }}
                </h3>
                
                <p class="text-gray-600 leading-relaxed text-lg">
                  {{ caseStudy.description }}
                </p>
                
                <!-- Technologies Used -->
                <div v-if="caseStudy.technologies && caseStudy.technologies.length > 0" class="space-y-3">
                  <h4 class="text-sm font-semibold text-gray-800 uppercase tracking-wide">Technologies Used</h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in caseStudy.technologies" 
                      :key="tech"
                      class="px-3 py-1 bg-white/70 text-gray-700 text-sm rounded-full border border-gray-200"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <!-- Metrics -->
                <div v-if="caseStudy.metrics && caseStudy.metrics.length > 0" class="grid grid-cols-2 gap-4">
                  <div 
                    v-for="metric in caseStudy.metrics.slice(0, 2)" 
                    :key="metric.label || metric.metric || metric"
                    class="text-center p-4 bg-white/50 rounded-lg border border-white/30"
                  >
                    <div class="text-2xl font-bold text-gray-900">{{ metric.value || metric.percentage || metric }}</div>
                    <div class="text-sm text-gray-600">{{ metric.label || metric.metric || 'Result' }}</div>
                  </div>
                </div>
                
                <div 
                  class="pt-4 flex"
                  :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
                >
                  <NuxtLink 
                    :to="`/case-studies/${caseStudy.slug}`"
                    class="inline-flex items-center px-6 py-3 text-[#3533cd] font-medium hover:text-[#1e1b69] transition-colors group"
                  >
                    Read More
                    <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

          <!-- No Case Studies State -->
          <div v-else class="text-center py-12">
            <p class="text-gray-600 text-lg">No case studies found for the selected filter.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-[#3533cd] via-[#2d2a7a] to-[#1e1b69]">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Create Your Success Story?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Let's discuss your project and build something amazing together.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/contact"
            class="bg-white text-[#3533cd] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Start Your Project
          </NuxtLink>
          <NuxtLink 
            to="/services"
            class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3533cd] transition-all duration-300"
          >
            View Our Services
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page meta for SEO
useHead({
  title: 'Case Studies - ByteStackLab | Our Portfolio of Successful Projects',
  meta: [
    {
      name: 'description',
      content: 'Explore ByteStackLab\'s portfolio of successful web development, mobile app, and digital transformation projects. See how we\'ve helped businesses achieve their goals.'
    },
    {
      property: 'og:title',
      content: 'Case Studies - ByteStackLab | Our Portfolio of Successful Projects'
    },
    {
      property: 'og:description',
      content: 'Explore ByteStackLab\'s portfolio of successful web development, mobile app, and digital transformation projects. See how we\'ve helped businesses achieve their goals.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

// Reactive data
const selectedFilter = ref('')

// Server-side data fetching for SSR/SEO — case studies + filters fetched together
const {
  data: pageData,
  pending,
  error,
  refresh: retryLoading,
} = await useLazyAsyncData(
  'case-studies-page',
  async () => {
    const { getCaseStudies, getCaseStudyFilters } = useApi()
    const [caseStudies, filters] = await Promise.all([
      getCaseStudies(),
      getCaseStudyFilters(),
    ])
    return { caseStudies, filters }
  },
  { default: () => ({ caseStudies: [], filters: [] }) },
)

const caseStudies = computed(() => pageData.value?.caseStudies || [])
const filters = computed(() => pageData.value?.filters || [])

// Computed property for filtered case studies
const filteredCaseStudies = computed(() => {
  if (!selectedFilter.value) {
    return caseStudies.value
  }
  return caseStudies.value.filter(caseStudy => caseStudy.category === selectedFilter.value)
})

// Helper function to get background color for case studies
const getCaseStudyBgColor = (index) => {
  const colors = [
    '#FFF9E6', // Light yellow
    '#F0F9FF', // Light blue
    '#F5F3FF', // Light purple
    '#F0FDF4', // Light green
    '#FEF2F2', // Light red
    '#F8FAFC'  // Light gray
  ]
  return colors[index % colors.length]
}

// Helper function to get image URL
const getImageUrl = (caseStudy) => {
  // Check if case study has an image property
  if (!caseStudy) return null
  
  // If the image is already a full URL (from backend transformation)
  if (caseStudy.image && typeof caseStudy.image === 'string') {
    // Check if it's already a full URL
    if (caseStudy.image.startsWith('http')) {
      return caseStudy.image
    }
    // If it's a relative path, construct the full URL
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase || 'http://127.0.0.1:8000/api'
    const serverBase = baseURL.replace('/api', '')
    return `${serverBase}/storage/${caseStudy.image}`
  }
  
  return null
}

// Helper function to handle image loading errors
const handleImageError = (event) => {
  console.warn('Failed to load case study image:', event.target.src)
  // Hide the image on error
  event.target.style.display = 'none'
  // Show fallback
  const fallback = event.target.nextElementSibling
  if (fallback && fallback.classList.contains('hidden')) {
    fallback.classList.remove('hidden')
    fallback.classList.add('flex')
  }
}

// Helper function to get category class styling
const getCategoryClass = (category) => {
  // Match the backend category format
  const categoryClasses = {
    'Web Development': 'bg-blue-100 text-blue-800',
    'Mobile Development': 'bg-green-100 text-green-800',
    'E-commerce': 'bg-purple-100 text-purple-800',
    'Enterprise Solution': 'bg-orange-100 text-orange-800',
    'Healthcare': 'bg-teal-100 text-teal-800',
    'Fintech': 'bg-pink-100 text-pink-800',
    'UI/UX Design': 'bg-indigo-100 text-indigo-800',
    'Digital Marketing': 'bg-yellow-100 text-yellow-800'
  }
  
  return categoryClasses[category] || 'bg-gray-100 text-gray-800'
}
</script>

<style scoped>
/* Animation styles matching home page */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

@keyframes pulse-medium {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.6; }
}

@keyframes data-flow-1 {
  0% { transform: translate(0, 0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(300px, -200px); opacity: 0; }
}

@keyframes data-flow-2 {
  0% { transform: translate(0, 0); opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { transform: translate(-400px, 250px); opacity: 0; }
}

@keyframes data-flow-3 {
  0% { transform: translate(0, 0); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translate(200px, -300px); opacity: 0; }
}

@keyframes data-flow-4 {
  0% { transform: translate(0, 0); opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 1; }
  100% { transform: translate(-350px, -150px); opacity: 0; }
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

/* Component-specific styles matching home page */
.group:hover svg {
  transform: translateX(4px);
}

/* Image hover effects */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.02);
}

/* Button hover effects */
button {
  transition: all 0.3s ease;
}
</style>
