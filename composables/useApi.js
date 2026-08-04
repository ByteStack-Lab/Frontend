export const useApi = () => {
  // API configuration - moved inside the composable
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase || 'http://127.0.0.1:8000/api'

  const withHeaders = (headers = {}, isFormData = false) => {
    const mergedHeaders = { ...headers }

    if (!isFormData && !mergedHeaders['Content-Type']) {
      mergedHeaders['Content-Type'] = 'application/json'
    }

    return mergedHeaders
  }
  
  // Generic API client
  const $api = {
    async get(endpoint, params = {}, options = {}) {
      try {
        const { headers, ...restOptions } = options
        const response = await $fetch(`${baseURL}${endpoint}`, {
          method: 'GET',
          params,
          headers: withHeaders(headers, false),
          ...restOptions
        })
        return response
      } catch (error) {
        console.error('API GET error:', error)
        throw error
      }
    },

    async post(endpoint, data = {}, options = {}) {
      try {
        const { headers, ...restOptions } = options
        const isFormData = data instanceof FormData
        const defaultOptions = {
          method: 'POST',
          body: data,
          headers: withHeaders(headers, isFormData),
          ...restOptions,
        }

        const response = await $fetch(`${baseURL}${endpoint}`, defaultOptions)
        return response
      } catch (error) {
        console.error('API POST error:', error)
        throw error
      }
    },

    async put(endpoint, data = {}, options = {}) {
      try {
        const { headers, ...restOptions } = options
        const isFormData = data instanceof FormData
        const response = await $fetch(`${baseURL}${endpoint}`, {
          method: 'PUT',
          body: data,
          headers: withHeaders(headers, isFormData),
          ...restOptions
        })
        return response
      } catch (error) {
        console.error('API PUT error:', error)
        throw error
      }
    },

    async delete(endpoint, options = {}) {
      try {
        const { headers, ...restOptions } = options
        const response = await $fetch(`${baseURL}${endpoint}`, {
          method: 'DELETE',
          headers: withHeaders(headers, false),
          ...restOptions
        })
        return response
      } catch (error) {
        console.error('API DELETE error:', error)
        throw error
      }
    }
  }

  return {
    $api,

    // Get all services
    async getServices(params = {}) {
      try {
        const { data } = await $fetch(`${baseURL}/services`, {
          params
        })
        return data
      } catch (error) {
        console.error('Error fetching services:', error)
        throw error
      }
    },

    // Get single service by slug
    async getService(slug) {
      try {
        const { data } = await $fetch(`${baseURL}/services/${slug}`)
        return data
      } catch (error) {
        console.error('Error fetching service:', error)
        throw error
      }
    },

    // Get featured services
    async getFeaturedServices() {
      try {
        const { data } = await $fetch(`${baseURL}/services/featured`)
        return data
      } catch (error) {
        console.error('Error fetching featured services:', error)
        throw error
      }
    },

    // Get navbar services
    async getNavbarServices() {
      try {
        const { data } = await $fetch(`${baseURL}/services/navbar`)
        return data
      } catch (error) {
        console.error('Error fetching navbar services:', error)
        throw error
      }
    },

    // Get service categories
    async getServiceCategories() {
      try {
        const { data } = await $fetch(`${baseURL}/services/categories`)
        return data
      } catch (error) {
        console.error('Error fetching categories:', error)
        throw error
      }
    },

    // ==== CASE STUDIES API METHODS ====

    // Get all case studies
    async getCaseStudies(params = {}) {
      try {
        const { data } = await $fetch(`${baseURL}/case-studies`, {
          params
        })
        return data
      } catch (error) {
        console.error('Error fetching case studies:', error)
        throw error
      }
    },

    // Get single case study by slug
    async getCaseStudy(slug) {
      try {
        const { data } = await $fetch(`${baseURL}/case-studies/${slug}`)
        return data
      } catch (error) {
        console.error('Error fetching case study:', error)
        throw error
      }
    },

    // Get featured case studies
    async getFeaturedCaseStudies() {
      try {
        const { data } = await $fetch(`${baseURL}/case-studies/featured`)
        return data
      } catch (error) {
        console.error('Error fetching featured case studies:', error)
        throw error
      }
    },

    // Get case study filters
    async getCaseStudyFilters() {
      try {
        const { data } = await $fetch(`${baseURL}/case-studies/filters`)
        // Return categories array directly
        return data.categories || []
      } catch (error) {
        console.error('Error fetching case study filters:', error)
        throw error
      }
    },

    // ===== BLOG API METHODS =====

    // Get all blogs
    async getBlogs(params = {}) {
      try {
        const { data } = await $fetch(`${baseURL}/blogs`, {
          params
        })
        return data
      } catch (error) {
        console.error('Error fetching blogs:', error)
        throw error
      }
    },

    // Get single blog by slug
    async getBlog(slug) {
      try {
        const { data } = await $fetch(`${baseURL}/blogs/${slug}`)
        return data
      } catch (error) {
        console.error('Error fetching blog:', error)
        throw error
      }
    },

    // Get featured blogs
    async getFeaturedBlogs() {
      try {
        const { data } = await $fetch(`${baseURL}/blogs/featured`)
        return data
      } catch (error) {
        console.error('Error fetching featured blogs:', error)
        throw error
      }
    },

    // Get recent blogs
    async getRecentBlogs(limit = 5) {
      try {
        const { data } = await $fetch(`${baseURL}/blogs/recent`, {
          params: { limit }
        })
        return data
      } catch (error) {
        console.error('Error fetching recent blogs:', error)
        throw error
      }
    },

    // Get popular blogs
    async getPopularBlogs(limit = 5) {
      try {
        const { data } = await $fetch(`${baseURL}/blogs/popular`, {
          params: { limit }
        })
        return data
      } catch (error) {
        console.error('Error fetching popular blogs:', error)
        throw error
      }
    },

    // Get blog filters
    async getBlogFilters() {
      try {
        const { data } = await $fetch(`${baseURL}/blogs/filters`)
        return data
      } catch (error) {
        console.error('Error fetching blog filters:', error)
        throw error
      }
    },

    // Get related blogs
    async getRelatedBlogs(slug) {
      try {
        const { data } = await $fetch(`${baseURL}/blogs/${slug}/related`)
        return data
      } catch (error) {
        console.error('Error fetching related blogs:', error)
        throw error
      }
    },

    // Get blog categories
    async getBlogCategories() {
      try {
        const { data } = await $fetch(`${baseURL}/blogs/categories`)
        return data
      } catch (error) {
        console.error('Error fetching blog categories:', error)
        throw error
      }
    },

    // ===== PARTNER API METHODS =====

    // Get all partners
    async getPartners(params = {}) {
      try {
        const { data } = await $fetch(`${baseURL}/partners`, {
          params
        })
        return data
      } catch (error) {
        console.error('Error fetching partners:', error)
        throw error
      }
    },

    // Get featured partners
    async getFeaturedPartners() {
      try {
        const { data } = await $fetch(`${baseURL}/partners/featured`)
        return data
      } catch (error) {
        console.error('Error fetching featured partners:', error)
        throw error
      }
    },

    // Get partners by type
    async getPartnersByType(type) {
      try {
        const { data } = await $fetch(`${baseURL}/partners/type/${type}`)
        return data
      } catch (error) {
        console.error('Error fetching partners by type:', error)
        throw error
      }
    },

    // Get partner types
    async getPartnerTypes() {
      try {
        const { data } = await $fetch(`${baseURL}/partners/types`)
        return data
      } catch (error) {
        console.error('Error fetching partner types:', error)
        throw error
      }
    },

    // Get all testimonials
    async getTestimonials(params = {}) {
      try {
        const { data } = await $fetch(`${baseURL}/testimonials`, {
          params
        })
        return data
      } catch (error) {
        console.error('Error fetching testimonials:', error)
        throw error
      }
    },

    // Get all active testimonials for frontend display
    async getAllTestimonials() {
      try {
        const { data } = await $fetch(`${baseURL}/testimonials/all`)
        return data
      } catch (error) {
        console.error('Error fetching all testimonials:', error)
        throw error
      }
    },

    // Get featured testimonials
    async getFeaturedTestimonials() {
      try {
        const { data } = await $fetch(`${baseURL}/testimonials/featured`)
        return data
      } catch (error) {
        console.error('Error fetching featured testimonials:', error)
        throw error
      }
    },

    // Get testimonials by rating
    async getTestimonialsByRating(rating) {
      try {
        const { data } = await $fetch(`${baseURL}/testimonials/rating/${rating}`)
        return data
      } catch (error) {
        console.error('Error fetching testimonials by rating:', error)
        throw error
      }
    },

    // Get testimonial statistics
    async getTestimonialStats() {
      try {
        const { data } = await $fetch(`${baseURL}/testimonials/stats`)
        return data
      } catch (error) {
        console.error('Error fetching testimonial stats:', error)
        throw error
      }
    },

    // ===== NEWSLETTER API METHODS =====

    // Subscribe to newsletter
    async subscribeNewsletter(email, name = null, website = '') {
      try {
        const response = await $fetch(`${baseURL}/newsletter/subscribe`, {
          method: 'POST',
          body: { email, name, website }
        })
        return response
      } catch (error) {
        console.error('Error subscribing to newsletter:', error)
        throw error
      }
    },

    // Unsubscribe from newsletter
    async unsubscribeNewsletter(email) {
      try {
        const response = await $fetch(`${baseURL}/newsletter/unsubscribe`, {
          method: 'POST',
          body: { email }
        })
        return response
      } catch (error) {
        console.error('Error unsubscribing from newsletter:', error)
        throw error
      }
    },

    // Get newsletter statistics
    async getNewsletterStats() {
      try {
        const response = await $fetch(`${baseURL}/newsletter/stats`)
        return response
      } catch (error) {
        console.error('Error fetching newsletter stats:', error)
        throw error
      }
    },

  }
}
