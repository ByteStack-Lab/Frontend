import type {
  ApiResponse,
  Blog,
  BlogCard,
  BlogCategoryWithCount,
  BlogDetail,
  BlogFeatured,
  CareerJobCard,
  CareerJobDetail,
  CaseStudy,
  CaseStudyCard,
  CaseStudyDetail,
  CaseStudyFilters,
  ContactSubmitPayload,
  ContactSubmitResponse,
  NewsletterResponse,
  Partner,
  Product,
  ProductCategory,
  ProductDetail,
  Service,
  ServiceFeatured,
  ServiceNavbar,
  Team,
  Testimonial,
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

    // ===== PRODUCT API METHODS =====

    // Get all products
    async getProducts(params: Record<string, unknown> = {}): Promise<Product[]> {
      const { data } = await request<ApiResponse<Product[]>>('/products', { params }, 'Error fetching products:')
      return data
    },

    // Get single product by slug
    async getProduct(slug: string): Promise<ProductDetail> {
      const { data } = await request<ApiResponse<ProductDetail>>(`/products/${slug}`, {}, 'Error fetching product:')
      return data
    },

    // Get featured products
    async getFeaturedProducts(): Promise<Product[]> {
      const { data } = await request<ApiResponse<Product[]>>('/products/featured', {}, 'Error fetching featured products:')
      return data
    },

    // Get product categories
    async getProductCategories(): Promise<ProductCategory[]> {
      const { data } = await request<ApiResponse<ProductCategory[]>>('/products/categories', {}, 'Error fetching product categories:')
      return data
    },

    // Get related products
    async getRelatedProducts(slug: string): Promise<Product[]> {
      const { data } = await request<ApiResponse<Product[]>>(`/products/${slug}/related`, {}, 'Error fetching related products:')
      return data
    },

    // ===== PARTNER API METHODS =====

    // Get all partners
    async getPartners(params: Record<string, unknown> = {}): Promise<Partner[]> {
      const { data } = await request<ApiResponse<Partner[]>>('/partners', { params }, 'Error fetching partners:')
      return data
    },

    // ===== TESTIMONIAL API METHODS =====

    // Get all active testimonials for frontend display
    async getAllTestimonials(): Promise<Testimonial[]> {
      const { data } = await request<ApiResponse<Testimonial[]>>('/testimonials/all', {}, 'Error fetching all testimonials:')
      return data
    },

    // ===== CAREER JOB API METHODS =====

    // Get all career jobs
    async getCareerJobs(params: Record<string, unknown> = {}): Promise<CareerJobCard[]> {
      const { data } = await request<ApiResponse<CareerJobCard[]>>('/career-jobs', { params }, 'Error fetching career jobs:')
      return data
    },

    // Get single career job by slug
    async getCareerJob(slug: string): Promise<CareerJobDetail> {
      const { data } = await request<ApiResponse<CareerJobDetail>>(`/career-jobs/${slug}`, {}, 'Error fetching career job:')
      return data
    },

    // Submit a job application (multipart form data — includes the resume file)
    async applyToJob(slug: string, formData: FormData): Promise<{ success: boolean; message: string }> {
      return request(`/career-jobs/${slug}/apply`, { method: 'POST', body: formData }, 'Error applying to job:')
    },

    // ===== SETTINGS API METHODS =====

    // Get admin-editable settings, optionally scoped to a group
    // (e.g. "homepage_counters")
    async getSettings(group?: string): Promise<Record<string, string | number | boolean>> {
      const { data } = await request<ApiResponse<Record<string, string | number | boolean>>>(
        '/settings',
        { params: group ? { group } : {} },
        'Error fetching settings:',
      )
      return data
    },

    // ===== TEAM API METHODS =====

    // Get all active team members
    async getTeam(): Promise<Team[]> {
      const { data } = await request<ApiResponse<Team[]>>('/team', {}, 'Error fetching team:')
      return data
    },

    // ===== CONTACT API METHODS =====

    // Submit the contact form
    async submitContact(payload: ContactSubmitPayload): Promise<ContactSubmitResponse> {
      return request<ContactSubmitResponse>('/contact/submit', {
        method: 'POST',
        body: payload,
      }, 'Error submitting contact form:')
    },

    // ===== NEWSLETTER API METHODS =====

    // Subscribe to newsletter
    async subscribeNewsletter(email: string, name: string | null = null, website = ''): Promise<NewsletterResponse> {
      return request<NewsletterResponse>('/newsletter/subscribe', {
        method: 'POST',
        body: { email, name, website }
      }, 'Error subscribing to newsletter:')
    },

  }
}
