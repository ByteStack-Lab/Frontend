<template>
  <!--
    Compact above-the-fold trust signal, sitting right after the hero.
    Deliberately thin and quiet — a small fixed label plus a slow, looping
    logo marquee, no heading treatment, no carousel controls. This is now
    the homepage's only "trusted by" element — the fuller PartnerSection.vue
    treatment (heading + manual carousel) was removed from the homepage;
    the component file still exists if it's ever needed elsewhere.
  -->
  <section v-if="logoPartners.length" class="py-6 md:py-8 border-y border-gray-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center gap-6 md:gap-8">
        <p class="text-xs uppercase tracking-wider text-gray-400 font-medium shrink-0">
          Trusted by teams at
        </p>
        <div class="relative flex-1 overflow-hidden marquee-mask">
          <div class="flex w-max items-center gap-10 marquee-track">
            <NuxtImg
              v-for="(partner, i) in marqueeLogos"
              :key="`${partner.id}-${i}`"
              :src="partner.logo"
              :alt="partner.name"
              :title="partner.name"
              loading="eager"
              width="120"
              height="28"
              class="h-6 md:h-7 shrink-0 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
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

// Cap at 6 so one lap of the marquee stays short and never competes
// with the hero for attention — the full list is one scroll away.
const logoPartners = computed(() => (partners.value || []).slice(0, 6))

// The track is duplicated so the loop can seamlessly wrap: the animation
// slides exactly -50% (one copy's width), so the second copy lands right
// where the first started, with no visible jump or gap.
const marqueeLogos = computed(() => [...logoPartners.value, ...logoPartners.value])
</script>

<style scoped>
.marquee-mask {
  -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
  mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
}

.marquee-track {
  animation: marquee-scroll 35s linear infinite;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
