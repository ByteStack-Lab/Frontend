import type {
  ApiResponse,
  Blog,
  BlogCard,
  BlogCategoryWithCount,
  BlogDetail,
  BlogFeatured,
  BlogFilters,
  BlogPopular,
  CaseStudy,
  CaseStudyCard,
  CaseStudyDetail,
  CaseStudyFilters,
  NewsletterResponse,
  NewsletterStats,
  Partner,
  Service,
  ServiceCategory,
  ServiceFeatured,
  ServiceNavbar,
  Testimonial,
  TestimonialStats,
} from '~/types/api'

// Loosely-typed pass-through options bag for the generic $api client and the
// request() helper below — both forward arbitrary $fetch options untouched.
type FetchOptions = Record<string, unknown> & { headers?: Record<string, string> }

export const useApi = () => {
  // API configuration - moved inside the composable
  const config = useRuntimeConfig()
  const baseURL = (config.public.apiBase as string) || 'http://127.0.0.1:8000/api'

  const withHeaders = (headers: Record<string, string> = {}, isFormData = false) => {
    const mergedHeaders = { ...headers }

    if (!isFormData && !mergedHeaders['Content-Type']) {
      mergedHeaders['Content-Type'] = 'application/json'
    }

    return mergedHeaders
  }

  // Generic API client
  const $api = {
    async get(endpoint: string, params: Record<string, unknown> = {}, options: FetchOptions = {}) {
      try {
        const { headers, ...restOptions } = options
        const response = await $fetch(`${baseURL}${endpoint}`, {
          method: 'GET',
          params,
          headers: withHeaders(headers, false),
          ...restOptions
        } as FetchOptions)
        return response
      } catch (error) {
        console.error('API GET error:', error)
        throw error
      }
    },

    async post(endpoint: string, data: Record<string, unknown> | FormData = {}, options: FetchOptions = {}) {
      try {
        const { headers, ...restOptions } = options
        const isFormData = data instanceof FormData
        const defaultOptions: FetchOptions = {
          method: 'POST' as const,
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

    async put(endpoint: string, data: Record<string, unknown> | FormData = {}, options: FetchOptions = {}) {
      try {
        const { headers, ...restOptions } = options
        const isFormData = data instanceof FormData
        const response = await $fetch(`${baseURL}${endpoint}`, {
          method: 'PUT' as const,
          body: data,
          headers: withHeaders(headers, isFormData),
          ...restOptions
        } as FetchOptions)
        return response
      } catch (error) {
        console.error('API PUT error:', error)
        throw error
      }
    },

    async delete(endpoint: string, options: FetchOptions = {}) {
      try {
        const { headers, ...restOptions } = options
        const response = await $fetch(`${baseURL}${endpoint}`, {
          method: 'DELETE',
          headers: withHeaders(headers, false),
          ...restOptions
        } as FetchOptions)
        return response
      } catch (error) {
        console.error('API DELETE error:', error)
        throw error
      }
    }
  }

  // Shared request helper for the named endpoint methods below — every one
  // of them was a near-identical $fetch + try/catch(log + rethrow) block.
  const request = async <T>(endpoint: string, options: FetchOptions = {}, errorMessage = 'API error:'): Promise<T> => {
    try {
      return await $fetch<T>(`${baseURL}${endpoint}`, options as FetchOptions)
    } catch (error) {
      console.error(errorMessage, error)
      throw error
    }
  }

  return {
    $api,

    // Get all services
    async getServices(params: Record<string, unknown> = {}): Promise<Service[]> {
      const { data } = await request<ApiResponse<Service[]>>('/services', { params }, 'Error fetching services:')
      return data
    },

    // Get single service by slug
    async getService(slug: string): Promise<Service> {
      const { data } = await request<ApiResponse<Service>>(`/services/${slug}`, {}, 'Error fetching service:')
      return data
    },

    // Get featured services
    async getFeaturedServices(): Promise<ServiceFeatured[]> {
      const { data } = await request<ApiResponse<ServiceFeatured[]>>('/services/featured', {}, 'Error fetching featured services:')
      return data
    },

    // Get navbar services
    async getNavbarServices(): Promise<ServiceNavbar[]> {
      const { data } = await request<ApiResponse<ServiceNavbar[]>>('/services/navbar', {}, 'Error fetching navbar services:')
      return data
    },

    // Get service categories
    async getServiceCategories(): Promise<ServiceCategory[]> {
      const { data } = await request<ApiResponse<ServiceCategory[]>>('/services/categories', {}, 'Error fetching categories:')
      return data
    },

    // ==== CASE STUDIES API METHODS ====

    // Get all case studies
    async getCaseStudies(params: Record<string, unknown> = {}): Promise<CaseStudy[]> {
      const { data } = await request<ApiResponse<CaseStudy[]>>('/case-studies', { params }, 'Error fetching case studies:')
      return data
    },

    // Get single case study by slug
    async getCaseStudy(slug: string): Promise<CaseStudyDetail> {
      const { data } = await request<ApiResponse<CaseStudyDetail>>(`/case-studies/${slug}`, {}, 'Error fetching case study:')
      return data
    },

    // Get featured case studies
    async getFeaturedCaseStudies(): Promise<CaseStudyCard[]> {
      const { data } = await request<ApiResponse<CaseStudyCard[]>>('/case-studies/featured', {}, 'Error fetching featured case studies:')
      return data
    },

    // Get case study filters
    async getCaseStudyFilters(): Promise<string[]> {
      const { data } = await request<ApiResponse<CaseStudyFilters>>('/case-studies/filters', {}, 'Error fetching case study filters:')
      // Return categories array directly
      return data.categories || []
    },

    // ===== BLOG API METHODS =====

    // Get all blogs
    async getBlogs(params: Record<string, unknown> = {}): Promise<Blog[]> {
      const { data } = await request<ApiResponse<Blog[]>>('/blogs', { params }, 'Error fetching blogs:')
      return data
    },

    // Get single blog by slug
    async getBlog(slug: string): Promise<BlogDetail> {
      const { data } = await request<ApiResponse<BlogDetail>>(`/blogs/${slug}`, {}, 'Error fetching blog:')
      return data
    },

    // Get featured blogs
    async getFeaturedBlogs(): Promise<BlogFeatured[]> {
      const { data } = await request<ApiResponse<BlogFeatured[]>>('/blogs/featured', {}, 'Error fetching featured blogs:')
      return data
    },

    // Get recent blogs
    async getRecentBlogs(limit = 5): Promise<BlogCard[]> {
      const { data } = await request<ApiResponse<BlogCard[]>>('/blogs/recent', { params: { limit } }, 'Error fetching recent blogs:')
      return data
    },

    // Get popular blogs
    async getPopularBlogs(limit = 5): Promise<BlogPopular[]> {
      const { data } = await request<ApiResponse<BlogPopular[]>>('/blogs/popular', { params: { limit } }, 'Error fetching popular blogs:')
      return data
    },

    // Get blog filters
    async getBlogFilters(): Promise<BlogFilters> {
      const { data } = await request<ApiResponse<BlogFilters>>('/blogs/filters', {}, 'Error fetching blog filters:')
      return data
    },

    // Get related blogs
    async getRelatedBlogs(slug: string): Promise<BlogCard[]> {
      const { data } = await request<ApiResponse<BlogCard[]>>(`/blogs/${slug}/related`, {}, 'Error fetching related blogs:')
      return data
    },

    // Get blog categories
    async getBlogCategories(): Promise<BlogCategoryWithCount[]> {
      const { data } = await request<ApiResponse<BlogCategoryWithCount[]>>('/blogs/categories', {}, 'Error fetching blog categories:')
      return data
    },

    // ===== PARTNER API METHODS =====

    // Get all partners
    async getPartners(params: Record<string, unknown> = {}): Promise<Partner[]> {
      const { data } = await request<ApiResponse<Partner[]>>('/partners', { params }, 'Error fetching partners:')
      return data
    },

    // Get featured partners
    async getFeaturedPartners(): Promise<Partner[]> {
      const { data } = await request<ApiResponse<Partner[]>>('/partners/featured', {}, 'Error fetching featured partners:')
      return data
    },

    // Get partners by type
    async getPartnersByType(type: string): Promise<Partner[]> {
      const { data } = await request<ApiResponse<Partner[]>>(`/partners/type/${type}`, {}, 'Error fetching partners by type:')
      return data
    },

    // Get partner types
    async getPartnerTypes(): Promise<Record<string, string>> {
      const { data } = await request<ApiResponse<Record<string, string>>>('/partners/types', {}, 'Error fetching partner types:')
      return data
    },

    // Get all testimonials
    async getTestimonials(params: Record<string, unknown> = {}): Promise<Testimonial[]> {
      const { data } = await request<ApiResponse<Testimonial[]>>('/testimonials', { params }, 'Error fetching testimonials:')
      return data
    },

    // Get all active testimonials for frontend display
    async getAllTestimonials(): Promise<Testimonial[]> {
      const { data } = await request<ApiResponse<Testimonial[]>>('/testimonials/all', {}, 'Error fetching all testimonials:')
      return data
    },

    // Get featured testimonials
    async getFeaturedTestimonials(): Promise<Testimonial[]> {
      const { data } = await request<ApiResponse<Testimonial[]>>('/testimonials/featured', {}, 'Error fetching featured testimonials:')
      return data
    },

    // Get testimonials by rating
    async getTestimonialsByRating(rating: number): Promise<Testimonial[]> {
      const { data } = await request<ApiResponse<Testimonial[]>>(`/testimonials/rating/${rating}`, {}, 'Error fetching testimonials by rating:')
      return data
    },

    // Get testimonial statistics
    async getTestimonialStats(): Promise<TestimonialStats> {
      const { data } = await request<ApiResponse<TestimonialStats>>('/testimonials/stats', {}, 'Error fetching testimonial stats:')
      return data
    },

    // ===== NEWSLETTER API METHODS =====

    // Subscribe to newsletter
    async subscribeNewsletter(email: string, name: string | null = null, website = ''): Promise<NewsletterResponse> {
      return request<NewsletterResponse>('/newsletter/subscribe', {
        method: 'POST',
        body: { email, name, website }
      }, 'Error subscribing to newsletter:')
    },

    // Unsubscribe from newsletter
    async unsubscribeNewsletter(email: string): Promise<NewsletterResponse> {
      return request<NewsletterResponse>('/newsletter/unsubscribe', {
        method: 'POST',
        body: { email }
      }, 'Error unsubscribing from newsletter:')
    },

    // Get newsletter statistics
    async getNewsletterStats(): Promise<ApiResponse<NewsletterStats>> {
      return request<ApiResponse<NewsletterStats>>('/newsletter/stats', {}, 'Error fetching newsletter stats:')
    },

  }
}
