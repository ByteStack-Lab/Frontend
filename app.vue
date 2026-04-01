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
  ]
})
</script>

<style>
/* Global styles are imported via Tailwind CSS in main.css */
body {
  overflow-x: hidden;
}
</style>
