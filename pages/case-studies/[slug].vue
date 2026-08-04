<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#3533cd]"></div>
        <p class="mt-4 text-gray-600">Loading case study details...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
        <p class="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
        <NuxtLink 
          to="/case-studies" 
          class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          View All Case Studies
        </NuxtLink>
      </div>
    </div>

    <!-- Case Study Content -->
    <div v-else-if="caseStudy" class="pb-24">
      <!-- Hero Section -->
      <section class="relative pt-28 pb-20 overflow-hidden" :style="{ backgroundColor: caseStudy.bgColor || '#f7f7fa' }">
        <!-- Animated Background -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse-slow"></div>
          <div class="absolute right-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/15 to-transparent animate-pulse-medium"></div>
          <div class="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse-slow"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <!-- Breadcrumb -->
          <nav class="mb-8">
            <ol class="flex items-center space-x-2 text-sm">
              <li><NuxtLink to="/" class="text-gray-500 hover:text-[#3533cd] transition-colors">Home</NuxtLink></li>
              <li><span class="text-gray-400">/</span></li>
              <li><NuxtLink to="/case-studies" class="text-gray-500 hover:text-[#3533cd] transition-colors">Case Studies</NuxtLink></li>
              <li><span class="text-gray-400">/</span></li>
              <li><span class="text-gray-900 font-medium">{{ caseStudy.title }}</span></li>
            </ol>
          </nav>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Case Study Info -->
            <div>
              <!-- Category Badge -->
              <div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" :class="caseStudy.categoryClass || 'bg-gray-100 text-gray-800'">
                {{ caseStudy.category || 'Case Study' }}
              </div>
              
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {{ caseStudy.title }}
              </h1>
              
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                {{ caseStudy.description }}
              </p>

              <!-- Project Info -->
              <div class="grid grid-cols-2 gap-6 mb-8">
                <div class="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">Client</h3>
                  <p class="text-gray-900 font-medium">{{ caseStudy.clientName || 'Confidential' }}</p>
                </div>
                <div class="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">Duration</h3>
                  <p class="text-gray-900 font-medium">{{ caseStudy.projectDuration || 'N/A' }}</p>
                </div>
                <div class="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">Type</h3>
                  <p class="text-gray-900 font-medium">{{ caseStudy.type?.toUpperCase() || 'WEB' }}</p>
                </div>
                <div class="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">Status</h3>
                  <p class="text-green-600 font-medium">Completed</p>
                </div>
              </div>
              
              <!-- Key Metrics -->
              <div v-if="caseStudy.metrics && caseStudy.metrics.length > 0" class="grid grid-cols-2 gap-4 mb-8">
                <div 
                  v-for="metric in caseStudy.metrics" 
                  :key="metric.label"
                  class="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div class="text-3xl font-bold text-[#3533cd] mb-2">{{ metric.value }}</div>
                  <div class="text-sm text-gray-600 font-medium">{{ metric.label }}</div>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink 
                  to="/contact" 
                  class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center group"
                >
                  Start Similar Project
                  <svg class="w-5 h-5 ml-2 inline transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NuxtLink>
                <NuxtLink 
                  to="/case-studies" 
                  class="border-2 border-[#3533cd] text-[#3533cd] px-8 py-4 rounded-lg font-semibold hover:bg-[#3533cd] hover:text-white transition-all duration-300 text-center"
                >
                  View More Cases
                </NuxtLink>
              </div>
            </div>
            
            <!-- Case Study Image -->
            <div class="relative">
              <div v-if="caseStudy.image" class="relative group">
                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    :src="caseStudy.image" 
                    :alt="caseStudy.title" 
                    class="w-full h-96 object-cover"
                    @error="handleImageError"
                  />
                </div>
                <!-- Decorative elements -->
                <div class="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#3533cd]/20 to-[#1e1b69]/20 rounded-full blur-2xl"></div>
                <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
              </div>
              
              <!-- Fallback Visual -->
              <div v-else class="bg-white rounded-2xl shadow-2xl p-12">
                <div class="w-32 h-32 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center mx-auto">
                  <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Overview -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"></div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p class="text-gray-600">Detailed insights into the project development and implementation</p>
          </div>
          
          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <!-- Left Column - Project Description -->
            <div class="prose prose-lg max-w-none">
              <div class="text-gray-600 leading-relaxed text-lg" v-html="caseStudy.detailedDescription || caseStudy.description"></div>
            </div>
            
            <!-- Right Column - Gallery Images Slider -->
            <div class="space-y-6">
              <div v-if="caseStudy.galleryImages && caseStudy.galleryImages.length > 0">
                <div class="text-center lg:text-left mb-6">
                  <h3 class="text-2xl font-bold text-gray-900">Project Gallery</h3>
                </div>
                
                <!-- Gallery Slider -->
                <div class="relative">
                  <!-- Main Image Display -->
                  <div 
                    class="relative overflow-hidden rounded-xl shadow-lg mb-4"
                    @touchstart="handleTouchStart"
                    @touchend="handleTouchEnd"
                    @mouseenter="stopAutoPlay"
                    @mouseleave="startAutoPlay"
                  >
                    <img 
                      :src="caseStudy.galleryImages[currentImageIndex]" 
                      :alt="`${caseStudy.title} - Gallery Image ${currentImageIndex + 1}`"
                      class="w-full h-80 object-cover transition-all duration-500 gallery-main-image"
                      @error="handleImageError"
                    />
                    
                    <!-- Image Counter -->
                    <div class="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {{ currentImageIndex + 1 }} / {{ caseStudy.galleryImages.length }}
                    </div>
                    
                    <!-- Navigation Arrows -->
                    <button 
                      v-if="caseStudy.galleryImages.length > 1"
                      @click="prevImage"
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    
                    <button 
                      v-if="caseStudy.galleryImages.length > 1"
                      @click="nextImage"
                      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                  
                  <!-- Thumbnail Navigation -->
                  <div v-if="caseStudy.galleryImages.length > 1" class="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                    <button
                      v-for="(image, index) in caseStudy.galleryImages"
                      :key="index"
                      @click="currentImageIndex = index"
                      class="flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-300 gallery-thumbnail"
                      :class="[
                        currentImageIndex === index 
                          ? 'ring-2 ring-[#3533cd] ring-offset-2 opacity-100 active' 
                          : 'opacity-60 hover:opacity-80'
                      ]"
                    >
                      <img 
                        :src="image" 
                        :alt="`Thumbnail ${index + 1}`"
                        class="w-20 h-16 object-cover"
                        @error="handleImageError"
                      />
                      <!-- Active overlay -->
                      <div 
                        v-if="currentImageIndex === index"
                        class="absolute inset-0 bg-[#3533cd]/20 flex items-center justify-center"
                      >
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </button>
                  </div>
                  
                  <!-- Auto-play indicator dots (optional) -->
                  <div v-if="caseStudy.galleryImages.length > 1" class="flex justify-center space-x-2 mt-4">
                    <button
                      v-for="(image, index) in caseStudy.galleryImages"
                      :key="index"
                      @click="currentImageIndex = index"
                      class="w-2 h-2 rounded-full transition-all duration-300"
                      :class="[
                        currentImageIndex === index 
                          ? 'bg-[#3533cd]' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      ]"
                    ></button>
                  </div>
                </div>
              </div>
              
              <!-- Fallback when no gallery images -->
              <div v-else class="text-center lg:text-left">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Project Highlights</h3>
                <div class="bg-gradient-to-br from-[#3533cd]/5 to-[#1e1b69]/5 rounded-xl p-8 border border-[#3533cd]/10">
                  <div class="w-16 h-16 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <p class="text-gray-600 text-center lg:text-left">Gallery images will be available soon. This project showcases cutting-edge technology and innovative solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies Used -->
      <section v-if="caseStudy.technologies && caseStudy.technologies.length > 0" class="py-20" style="background-color: #f7f7fa;">
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Technologies Used</h2>
            <p class="text-gray-600">The technology stack that powered this project</p>
          </div>
          
          <div class="flex flex-wrap justify-center gap-4">
            <span 
              v-for="tech in caseStudy.technologies" 
              :key="tech"
              class="px-6 py-3 bg-white text-gray-700 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </section>

      <!-- Challenges, Solutions, Results -->
      <section class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Challenges -->
            <div v-if="caseStudy.challenges && caseStudy.challenges.length > 0" class="space-y-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Challenges</h3>
              </div>
              
              <div class="space-y-4">
                <div 
                  v-for="challenge in caseStudy.challenges" 
                  :key="challenge.title"
                  class="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg"
                >
                  <h4 class="font-semibold text-gray-900 mb-2">{{ challenge.title }}</h4>
                  <p class="text-gray-600">{{ challenge.description }}</p>
                </div>
              </div>
            </div>

            <!-- Solutions -->
            <div v-if="caseStudy.solutions && caseStudy.solutions.length > 0" class="space-y-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Solutions</h3>
              </div>
              
              <div class="space-y-4">
                <div 
                  v-for="solution in caseStudy.solutions" 
                  :key="solution.title"
                  class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg"
                >
                  <h4 class="font-semibold text-gray-900 mb-2">{{ solution.title }}</h4>
                  <p class="text-gray-600">{{ solution.description }}</p>
                </div>
              </div>
            </div>

            <!-- Results -->
            <div v-if="caseStudy.results && caseStudy.results.length > 0" class="space-y-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Results</h3>
              </div>
              
              <div class="space-y-4">
                <div 
                  v-for="result in caseStudy.results" 
                  :key="result.title"
                  class="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg"
                >
                  <h4 class="font-semibold text-gray-900 mb-2">{{ result.title }}</h4>
                  <p class="text-gray-600">{{ result.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Case Studies -->
      <section v-if="relatedCaseStudies && relatedCaseStudies.length > 0" class="py-20" style="background-color: #f7f7fa;">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"></div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Related Case Studies</h2>
            <p class="text-gray-600">Explore more of our successful projects</p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="relatedCase in relatedCaseStudies.slice(0, 3)" 
              :key="relatedCase.id"
              class="group bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div v-if="relatedCase.image" class="mb-4 overflow-hidden rounded-lg">
                <img 
                  :src="relatedCase.image" 
                  :alt="relatedCase.title"
                  class="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div v-else class="w-12 h-12 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              
              <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3" :class="relatedCase.categoryClass || 'bg-gray-100 text-gray-800'">
                {{ relatedCase.category }}
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3533cd] transition-colors duration-300">
                {{ relatedCase.title }}
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                {{ relatedCase.description }}
              </p>
              
              <NuxtLink 
                :to="`/case-studies/${relatedCase.slug}`"
                class="inline-flex items-center text-[#3533cd] hover:text-[#1e1b69] font-semibold text-sm group"
              >
                Read Case Study
                <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-24 bg-gradient-to-r from-[#3533cd] via-[#2d2a7a] to-[#1e1b69]">
        <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Own Success Story?
          </h2>
          <p class="text-xl text-white/90 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/contact"
              class="bg-white text-[#3533cd] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Project
            </NuxtLink>
            <NuxtLink 
              to="/case-studies"
              class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3533cd] transition-all duration-300"
            >
              View All Case Studies
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Get route parameters
const route = useRoute()
const slug = route.params.slug

const currentImageIndex = ref(0)

// Server-side data fetching for SSR/SEO
const {
  data: caseStudy,
  pending,
  error,
} = await useLazyAsyncData(`case-study-${slug}`, () => {
  const { getCaseStudy } = useApi()
  return getCaseStudy(slug)
})

// Correct HTTP status for crawlers/SEO, while keeping this page's own
// "Case Study Not Found" UI (below) instead of redirecting to a generic error page
if (import.meta.server && (!caseStudy.value || error.value)) {
  setResponseStatus(404)
}

// Related case studies (exclude current), fetched separately
const { data: relatedCaseStudies } = await useLazyAsyncData(
  `case-study-${slug}-related`,
  async () => {
    const { getCaseStudies } = useApi()
    try {
      const allCaseStudies = await getCaseStudies()
      return allCaseStudies.filter((cs) => cs.slug !== slug)
    } catch (relatedError) {
      console.warn('Failed to fetch related case studies:', relatedError)
      return []
    }
  },
  { default: () => [] },
)

// Dynamic SEO meta tags
useHead(() => ({
  title: caseStudy.value
    ? `${caseStudy.value.title} - Case Study | ByteStackLab`
    : 'Case Study | ByteStackLab',
  meta: [
    { name: 'description', content: caseStudy.value?.description || '' },
    {
      property: 'og:title',
      content: caseStudy.value
        ? `${caseStudy.value.title} - Case Study | ByteStackLab`
        : 'Case Study | ByteStackLab',
    },
    { property: 'og:description', content: caseStudy.value?.description || '' },
    { property: 'og:image', content: caseStudy.value?.image || '' },
    { property: 'og:type', content: 'article' },
  ],
}))

// Gallery navigation functions
const nextImage = () => {
  if (caseStudy.value?.galleryImages) {
    currentImageIndex.value = (currentImageIndex.value + 1) % caseStudy.value.galleryImages.length
  }
}

const prevImage = () => {
  if (caseStudy.value?.galleryImages) {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? caseStudy.value.galleryImages.length - 1 
      : currentImageIndex.value - 1
  }
}

// Auto-play functionality (optional)
let autoPlayInterval = null
const startAutoPlay = () => {
  if (caseStudy.value?.galleryImages && caseStudy.value.galleryImages.length > 1) {
    autoPlayInterval = setInterval(() => {
      nextImage()
    }, 5000) // Change image every 5 seconds
  }
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (caseStudy.value?.galleryImages && caseStudy.value.galleryImages.length > 1) {
    if (event.key === 'ArrowLeft') {
      prevImage()
    } else if (event.key === 'ArrowRight') {
      nextImage()
    }
  }
}

// Touch/Swipe functionality for mobile
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (event) => {
  touchStartX = event.changedTouches[0].screenX
}

const handleTouchEnd = (event) => {
  touchEndX = event.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50 // Minimum distance for a swipe
  const difference = touchStartX - touchEndX
  
  if (Math.abs(difference) > swipeThreshold) {
    if (difference > 0) {
      // Swiped left - show next image
      nextImage()
    } else {
      // Swiped right - show previous image
      prevImage()
    }
  }
}

// Image error handler
const handleImageError = (event) => {
  console.warn('Failed to load image:', event.target.src)
  // Hide the failed image
  event.target.style.display = 'none'
  // Alternatively, you could set a placeholder image:
  // event.target.src = '/images/placeholder.png'
}

// Start gallery auto-play + keyboard navigation (client-only)
onMounted(() => {
  setTimeout(() => {
    startAutoPlay()
  }, 2000)

  window.addEventListener('keydown', handleKeydown)
})

// Cleanup on unmount
onUnmounted(() => {
  stopAutoPlay()
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Animation styles */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

@keyframes pulse-medium {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.6; }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-medium {
  animation: pulse-medium 3s ease-in-out infinite;
}

/* Content styles */
.prose {
  max-width: none;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.prose ul, .prose ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Group hover effects */
.group:hover svg {
  transform: translateX(4px);
}

/* Image hover effects */
img {
  transition: transform 0.3s ease;
}

/* Button hover effects */
button, a {
  transition: all 0.3s ease;
}

/* Gallery Slider Styles */
.gallery-slider {
  position: relative;
}

.gallery-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 10;
}

.gallery-navigation:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.gallery-navigation.prev {
  left: 16px;
}

.gallery-navigation.next {
  right: 16px;
}

.gallery-thumbnail {
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.gallery-thumbnail:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.gallery-thumbnail.active {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(53, 51, 205, 0.3);
}

.gallery-indicator {
  transition: all 0.3s ease;
  cursor: pointer;
}

.gallery-indicator:hover {
  transform: scale(1.2);
}

/* Smooth image transitions */
.gallery-main-image {
  transition: opacity 0.5s ease-in-out;
}

/* Auto-play animation */
@keyframes gallery-pulse {
  0%, 100% { 
    opacity: 0.6; 
  }
  50% { 
    opacity: 1; 
  }
}

.gallery-auto-play .gallery-indicator.active {
  animation: gallery-pulse 2s ease-in-out infinite;
}

/* Hide scrollbar for thumbnails */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Responsive gallery adjustments */
@media (max-width: 768px) {
  .gallery-navigation {
    width: 40px;
    height: 40px;
  }
  
  .gallery-navigation.prev {
    left: 8px;
  }
  
  .gallery-navigation.next {
    right: 8px;
  }
  
  .gallery-thumbnail {
    min-width: 60px;
  }
  
  .gallery-thumbnail img {
    width: 60px;
    height: 48px;
  }
}

/* Loading state for images */
.gallery-main-image {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.gallery-main-image img {
  position: relative;
  z-index: 1;
}
</style>
