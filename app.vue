<template>
  <div class="overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <GlobalNotification />
  </div>
</template>

<script setup>
// App-level setup

// Canonical URL for every route — points crawlers at the single preferred
// URL for each page (no query string), avoiding duplicate-content signals.
const route = useRoute()
const siteConfig = useSiteConfig()
useHead({
  link: [
    {
      rel: 'canonical',
      href: () => `${siteConfig.url.replace(/\/$/, '')}${route.path}`,
    },
  ],
})

useHead({
      titleTemplate: '%s - ByteStackLab',
  meta: [
    { name: 'description', content: 'Professional software development services for modern businesses' },
    // Site-wide OG/Twitter fallbacks — any page-level useHead()/useSeoMeta()
    // that sets the same property (e.g. blog/case-study detail pages using
    // the article's own image) overrides these automatically.
    { property: 'og:site_name', content: 'ByteStackLab' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://bytestacklab.com/images/hero-image.png' },
    { property: 'og:image:width', content: '1000' },
    { property: 'og:image:height', content: '720' },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://bytestacklab.com/images/hero-image.png' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ByteStackLab',
        url: 'https://bytestacklab.com',
        logo: 'https://bytestacklab.com/images/bytestacklab360x96.png',
        sameAs: [
          'https://www.linkedin.com/company/bytestacklab',
          'https://www.facebook.com/ByteStackLab',
        ],
      }),
    },
  ],
})
</script>

<style>
/* Global styles are imported via Tailwind CSS in main.css */
body {
  overflow-x: hidden;
}
</style>
