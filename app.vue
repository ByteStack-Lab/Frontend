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
    { name: 'description', content: 'Professional software development services for modern businesses' }
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
