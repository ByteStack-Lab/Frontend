// https://nuxt.com/docs/api/configuration/nuxt-config
import { $fetch } from 'ofetch'

const apiBase = process.env.NUXT_PUBLIC_API_BASE || 'https://api.bytestacklab.com/api'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxtjs/sitemap', '@nuxt/image'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800],
      Inspiration: [400]
    }
  },
  runtimeConfig: {
    public: {
      apiBase,
      // Optional — GA4 measurement ID (e.g. G-XXXXXXX). When unset, no
      // analytics script is injected at all (see plugins/analytics.client.js).
      gaId: process.env.NUXT_PUBLIC_GA_ID || '',
      // Optional — YouTube ID of the company intro video. When unset, the hero
      // simply does not render a play button (rather than shipping a
      // placeholder video). See components/sections/HeroSection.vue.
      introVideoId: process.env.NUXT_PUBLIC_INTRO_VIDEO_ID || ''
    }
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://bytestacklab.com'
  },
  image: {
    // Admin-uploaded media (service icons, blog covers, testimonial photos,
    // partner logos, etc.) is served from these two hosts — the backend's
    // `media_url()` helper resolves every stored file through Storage::url()
    // on whichever disk is active (see ByteStackLab-Backend/app/Support/
    // helpers.php), which today means the R2 CDN, with the API's own
    // /storage path as a fallback for anything still on local disk. IPX
    // (the default @nuxt/image provider) refuses to optimize a remote image
    // unless its host is listed here.
    domains: ['cdn.bytestacklab.com', 'api.bytestacklab.com']
  },
  sitemap: {
    // Static pages (/, /about, /services, etc.) are picked up automatically
    // from pages/. Only the API-driven detail pages need to be supplied here.
    urls: async () => {
      const fetchSlugs = async (endpoint: string): Promise<{ slug: string }[]> => {
        try {
          const response = await $fetch<{ data?: { slug: string }[] }>(`${apiBase}${endpoint}`)
          return response?.data ?? []
        } catch {
          // Sitemap generation shouldn't fail the whole request if the API
          // is briefly unreachable — just omit that section this time.
          return []
        }
      }

      const [services, blogs, caseStudies, products, careerJobs] = await Promise.all([
        fetchSlugs('/services'),
        fetchSlugs('/blogs'),
        fetchSlugs('/case-studies'),
        fetchSlugs('/products'),
        fetchSlugs('/career-jobs')
      ])

      return [
        ...services.map((item: { slug: string }) => ({ loc: `/services/${item.slug}`, changefreq: 'weekly', priority: 0.8 }) as const),
        ...blogs.map((item: { slug: string }) => ({ loc: `/blog/${item.slug}`, changefreq: 'monthly', priority: 0.7 }) as const),
        ...caseStudies.map((item: { slug: string }) => ({ loc: `/case-studies/${item.slug}`, changefreq: 'monthly', priority: 0.7 }) as const),
        ...products.map((item: { slug: string }) => ({ loc: `/products/${item.slug}`, changefreq: 'weekly', priority: 0.7 }) as const),
        ...careerJobs.map((item: { slug: string }) => ({ loc: `/careers/${item.slug}`, changefreq: 'weekly', priority: 0.6 }) as const)
      ]
    }
  },
  routeRules: {
    // Old service slugs, renamed/merged 2026-08-09 — see
    // ByteStackLab-Backend/database/seeders/ServiceSeeder.php and
    // SERVICES-CONTENT-STRATEGY.md §3.5 for the rationale.
    '/services/web-design-development': { redirect: { to: '/services/web-application-development', statusCode: 301 } },
    '/services/ecommerce-development': { redirect: { to: '/services/web-application-development', statusCode: 301 } },
    '/services/software-testing-service': { redirect: { to: '/services/qa-test-automation', statusCode: 301 } },

    // Edge/CDN caching — previously every route rendered fresh on every
    // request (Vercel `x-vercel-cache: MISS` on every hit, ~0.5-1.5s TTFB,
    // 4-6 uncached API calls per homepage render even with the backend's own
    // Redis cache in play, since that only saves DB round-trips, not the
    // Vercel serverless cold-start + network hop). `swr` sets a
    // stale-while-revalidate Cache-Control header that Vercel's CDN honors,
    // so repeat visits within the window are served from the edge with no
    // function invocation at all. Forms on /contact and /careers/[slug]
    // submit client-side straight to the Laravel API (see useApi.ts) — they
    // don't route through the cached Nuxt page handler, so caching the page
    // shell doesn't affect form submission.
    '/': { swr: 300 },
    '/about': { swr: 600 },
    '/services': { swr: 300 },
    '/services/**': { swr: 300 },
    '/blog': { swr: 300 },
    '/blog/**': { swr: 300 },
    '/case-studies': { swr: 300 },
    '/case-studies/**': { swr: 300 },
    '/products': { swr: 300 },
    '/products/**': { swr: 300 },
    '/careers': { swr: 120 },
    '/careers/**': { swr: 300 },
    '/contact': { swr: 600 },

    // Fully static content, zero API dependency — prerendered once at build
    // time and served as static files (fastest possible response, no SSR
    // invocation at all).
    '/privacy-policy': { prerender: true },
    '/terms-conditions': { prerender: true },
    '/faq': { prerender: true }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'ByteStackLab - Software Development Company',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional software development services for modern businesses' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicons/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/favicons/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/favicons/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/favicons/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/favicons/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/favicons/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/favicons/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/favicons/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/favicons/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicons/apple-icon-180x180.png' },
        { rel: 'manifest', href: '/images/favicons/manifest.json' }
      ]
    }
  }
})