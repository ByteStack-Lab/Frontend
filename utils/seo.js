/**
 * Site-wide SEO fallbacks.
 *
 * `ogImage()` exists because a page that sets `og:image` to an empty string
 * doesn't just fail to set its own image — unhead treats it as an override and
 * drops the site-wide fallback declared in app.vue too. Every blog post
 * currently has `featuredImage: null` in the CMS, so `content: post.image || ''`
 * shipped detail pages with no og:image at all and a stale
 * og:image:width/height pair pointing at nothing; share cards on
 * Facebook/LinkedIn/WhatsApp rendered blank. Always route a possibly-missing
 * image through this helper rather than `|| ''`.
 */
export const SITE_OG_IMAGE = 'https://bytestacklab.com/images/hero-image.png'

export const ogImage = (url) => url || SITE_OG_IMAGE
