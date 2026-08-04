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
