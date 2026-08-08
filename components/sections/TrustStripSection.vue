<template>
  <!--
    Compact above-the-fold trust signal, sitting right after the hero.
    Deliberately thin and quiet — a small label plus a handful of grayscale
    logos, no heading treatment, no carousel. The full "Trusted By" section
    further down the page (PartnerSection.vue) already owns that richer
    presentation with navigation and all partners; this strip exists only so
    a first-time visitor sees proof of real clients before they've scrolled
    at all, not to repeat that section early.
  -->
  <section v-if="logoPartners.length" class="py-6 md:py-8 border-y border-gray-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <p class="text-xs uppercase tracking-wider text-gray-400 font-medium shrink-0">
          Trusted by teams we've shipped for
        </p>
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4">
          <NuxtImg
            v-for="partner in logoPartners"
            :key="partner.id"
            :src="partner.logo"
            :alt="partner.name"
            :title="partner.name"
            class="h-6 md:h-7 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { getPartners } = useApi()

const { data: partners } = await useLazyAsyncData(
  'trust-strip-partners',
  async () => {
    try {
      return await getPartners()
    } catch (error) {
      console.error('Error loading trust strip partners:', error)
      return []
    }
  },
  { default: () => [] },
)

// Cap at 6 so the strip stays one thin row on desktop and never competes
// with the hero for attention — the full list is one scroll away.
const logoPartners = computed(() => (partners.value || []).slice(0, 6))
</script>
