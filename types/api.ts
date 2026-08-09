// API response shapes — mirror the Laravel API Resources in
// ByteStackLab-Backend/app/Http/Resources/*.php. Keep these in sync when a
// Resource's field list changes.

export interface ApiResponse<T> {
  success: boolean
  locale?: string
  data: T
  message?: string
  meta?: PaginationMeta
}

export interface PaginationMeta {
  current_page: number
  per_page: number
  total: number
  last_page: number
}

export interface SeoMeta {
  meta_title: string | null
  meta_description: string | null
  meta_keywords: string | null
  og_title: string | null
  og_description: string | null
  og_image: string | null
  twitter_title: string | null
  twitter_description: string | null
  twitter_image: string | null
  schema_markup: Record<string, unknown> | null
}

// ===== SERVICES =====

export interface ServicePackage {
  id: number
  name: string
  description: string
  price: number | string
  formatted_price: string
  delivery_time: string | number | null
  formatted_delivery_time: string
  revisions: number | null
  formatted_revisions: string
  features: string[]
  extra_features: string[]
  is_popular: boolean
}

export interface ServiceFaq {
  id: number
  question: string
  answer: string
}

export interface Service {
  id: number
  title: string
  slug: string
  short_description: string
  description: string
  icon: string | null
  featured_image: string | null
  gallery: string[]
  starting_price: number | string | null
  formatted_price: string
  features: string[]
  technologies: string[]
  category: string
  delivery_time: string | number | null
  revisions: number | null
  is_featured: boolean
  packages: ServicePackage[]
  faqs: ServiceFaq[]
  seo: SeoMeta
}

export interface ServiceFeatured {
  id: number
  title: string
  slug: string
  short_description: string
  icon: string | null
  featured_image: string | null
  starting_price: number | string | null
  formatted_price: string
  features: string[]
  category: string
  delivery_time: string | number | null
}

export interface ServiceNavbar {
  id: number
  title: string
  slug: string
  short_description: string
  icon: string | null
  category: string
}

export interface ServiceCategory {
  slug: string
  name: string
  count: number
}

// ===== CASE STUDIES =====

export interface CaseStudy {
  id: number
  title: string
  slug: string
  category: string
  categoryClass: string | null
  description: string
  summary: string
  detailedDescription: string | null
  image: string | null
  bgColor: string | null
  buttonClass: string | null
  technologies: string[]
  metrics: Record<string, unknown> | unknown[]
  type: string
  clientName: string | null
  projectDuration: string | null
  projectStartDate: string | null
  projectEndDate: string | null
  projectUrl: string | null
  galleryImages: string[]
  challenges: string[] | Record<string, unknown>
  solutions: string[] | Record<string, unknown>
  results: string[] | Record<string, unknown>
  isFeatured: boolean
  isPublished: boolean
  createdAt: string | null
}

export interface CaseStudyDetail extends CaseStudy {
  seo: {
    meta_title: string | null
    meta_description: string | null
  }
}

export interface CaseStudyCard {
  id: number
  title: string
  slug: string
  category: string
  categoryClass: string | null
  description: string
  image: string | null
  bgColor: string | null
  buttonClass: string | null
  technologies: string[]
  metrics: Record<string, unknown> | unknown[]
  type: string
}

export interface CaseStudyFilters {
  categories: string[]
  types: string[]
}

// ===== PRODUCTS =====

export interface Product {
  id: number
  name: string
  slug: string
  tagline: string | null
  short_description: string
  featured_image: string | null
  category: string
  categoryId: string
  badge: string | null
  badge_color: string | null
  badgeClass: string
  price_display: string | null
  price_period: string | null
  price_amount: number | string | null
  features: string[]
  rating: number | null
  reviews_count: number | null
  is_featured: boolean
  bg_gradient: string | null
  icon_path: string | null
  purchase_link: string | null
}

export interface ProductDetail extends Product {
  description: string
  pricing_note: string | null
  gallery: string[]
  gallery_items: unknown[]
  stats: unknown[]
  highlights: unknown[]
  plans: unknown[]
  reviews_list: unknown[]
  seo: SeoMeta
}

export interface ProductCategory {
  slug: string
  name: string
  count: number
}

// ===== PARTNERS =====

export interface Partner {
  id: number
  name: string
  slug: string
  logo: string | null
  website_url: string | null
  description: string | null
  type: string
  is_featured: boolean
  sort_order: number
}

// ===== TESTIMONIALS =====

export interface Testimonial {
  id: number
  name: string
  position: string | null
  company: string | null
  quote: string
  image: string | null
  rating: number
  website_url: string | null
  linkedin_url: string | null
  is_featured: boolean
  created_at: string
}

export interface TestimonialStats {
  total: number
  active: number
  featured: number
  average_rating: number
  rating_distribution: Record<number, number>
}

// ===== CAREER JOBS =====

export interface CareerJobCard {
  id: number
  title: string
  slug: string
  department: string
  location: string
  type: string
  experience_level: string | null
  salary_range: string | null
  salary_period: string | null
  description: string
  requirements: string[]
  is_featured: boolean
  application_deadline: string | null
  created_at: string
}

export interface CareerJobDetail extends CareerJobCard {
  responsibilities: string[]
  benefits: string[]
  meta_title: string | null
  meta_description: string | null
  schemaMarkup: Record<string, unknown> | null
}

// ===== TEAM =====

export interface Team {
  id: number
  name: string
  position: string
  bio: string | null
  avatar_url: string | null
  socials: Record<string, string>
  sort_order: number
}

// ===== BLOG =====

export interface BlogCategory {
  id: number
  name: string
  slug: string
  color: string | null
  icon: string | null
}

export interface BlogCategoryWithCount extends BlogCategory {
  description: string | null
  count: number
}

export interface Blog {
  id: number
  title: string
  slug: string
  excerpt: string
  excerptLimited: string
  category: string | null
  categories: BlogCategory[]
  categoryClass: string | null
  categoriesList: string
  tags: string[]
  authorName: string | null
  authorImage: string | null
  authorBio: string | null
  featuredImage: string | null
  galleryImages: string[]
  readTime: number | null
  readTimeText: string
  views: number
  publishedAt: string | null
  formattedPublishedDate: string
  isFeatured: boolean
  isPublished: boolean
}

export interface BlogFeatured {
  id: number
  title: string
  slug: string
  excerpt: string
  excerptLimited: string
  category: string | null
  categories: BlogCategory[]
  categoryClass: string | null
  authorName: string | null
  authorImage: string | null
  featuredImage: string | null
  readTime: number | null
  readTimeText: string
  views: number
  formattedPublishedDate: string
}

export interface BlogDetail {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string | null
  categories: BlogCategory[]
  categoryClass: string | null
  categoriesList: string
  tags: string[]
  authorName: string | null
  authorImage: string | null
  authorBio: string | null
  featuredImage: string | null
  galleryImages: string[]
  readTime: number | null
  readTimeText: string
  views: number
  publishedAt: string | null
  formattedPublishedDate: string
  isFeatured: boolean
  isPublished: boolean
  metaTitle: string | null
  metaDescription: string | null
  metaKeywords: string | null
  schemaMarkup: Record<string, unknown> | null
}

export interface BlogCard {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string | null
  categoryClass: string | null
  featuredImage: string | null
  readTimeText: string
  formattedPublishedDate: string
}

export interface BlogPopular extends BlogCard {
  views: number
}

export interface BlogFilters {
  categories: BlogCategory[]
  tags: string[]
}

// ===== NEWSLETTER =====

export interface NewsletterResponse {
  success: boolean
  message: string
}

// ===== CONTACT =====

export interface ContactSubmitPayload {
  first_name: string
  last_name: string
  email: string
  phone: string | null
  company: string | null
  service: string | null
  message: string
  subscribe_newsletter: boolean
  bsl_hp: string // honeypot — must stay empty
}

export interface ContactSubmitResponse {
  success: boolean
  message: string
  data?: {
    submission_id: number
  }
}

export interface NewsletterStats {
  total_subscribers: number
  active_subscribers: number
  verified_subscribers: number
  this_month_subscribers: number
  this_week_subscribers: number
}

// ===== AI ASSISTANT (Phase 0 — deterministic keyword/FAQ matching against
// the existing services/jobs/blog/case-study data. No external AI API call
// — see ByteStackLab-Backend/app/Services/AssistantIntentResolver.php) =====

export type AssistantIntent = 'web' | 'mobile' | 'saas' | 'ai' | 'career' | 'contact'

export type AssistantResponseType =
  | 'services'
  | 'packages'
  | 'faq'
  | 'jobs'
  | 'content'
  | 'fallback'
  | 'lead_prompt'

export interface AssistantItem {
  title: string
  url: string
  meta: string
}

export interface AssistantResolveData {
  type: AssistantResponseType
  text: string
  items: AssistantItem[]
  quick_replies: string[]
}

export interface AssistantResolvePayload {
  message?: string
  intent?: AssistantIntent
  conversation_id?: string // groups messages in AssistantConversation for Filament visibility
  bsl_hp?: string // honeypot — must stay empty
}
