<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-[#eef0ff]">
    <!-- Hero -->
    <section class="relative overflow-hidden pt-28 pb-14">
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#6675F7]/25 to-transparent" />
        <div class="absolute right-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3533cd]/20 to-transparent" />
        <div class="absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6675F7]/20 to-transparent" />
      </div>

      <div class="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div class="w-16 h-1 bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] rounded-full mx-auto mb-6" />
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5">
          Pricing
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Every project is scoped individually — these are starting points, not
          a menu. Use the estimator below for a rough range, or book a free call
          for an exact quote.
        </p>
      </div>
    </section>

    <!-- Pricing tiers -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="tier in tiers"
            :key="tier.name"
            class="bg-white rounded-2xl border p-8 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300"
            :class="tier.featured ? 'border-[#3533cd] ring-2 ring-[#3533cd]/20' : 'border-gray-100'"
          >
            <div v-if="tier.featured" class="text-xs font-semibold text-[#3533cd] uppercase tracking-wide mb-2">
              Most popular
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-1">{{ tier.name }}</h3>
            <p class="text-gray-500 text-sm mb-6">{{ tier.audience }}</p>
            <div class="mb-6">
              <span class="text-3xl font-bold text-gray-900">{{ tier.price }}</span>
              <span v-if="tier.priceSuffix" class="text-gray-500 text-sm">{{ tier.priceSuffix }}</span>
            </div>
            <ul class="space-y-3 mb-8 flex-1">
              <li v-for="feature in tier.features" :key="feature" class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-[#3533cd] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <NuxtLink
              to="/contact"
              :class="[
                'w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block',
                tier.featured
                  ? 'bg-[#3533cd] text-white hover:bg-[#1e1b69]'
                  : 'border-2 border-[#3533cd] text-[#3533cd] hover:bg-[#3533cd] hover:text-white',
              ]"
            >
              {{ tier.cta }}
            </NuxtLink>
          </div>
        </div>
        <p class="text-center text-gray-500 text-sm mt-8">
          Prices shown are indicative starting points and vary with scope — the estimator
          below and a discovery call will get you a real number.
        </p>
      </div>
    </section>

    <!-- Project Estimator -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Estimate Your Project</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Answer three quick questions for a ballpark range. This is a starting
            point for a conversation, not a quote.
          </p>
        </div>

        <div class="bg-gray-50 rounded-3xl border border-gray-100 p-6 md:p-10">
          <!-- Step 1: project type -->
          <div class="mb-8">
            <h3 class="font-semibold text-gray-900 mb-4">1. What are you building?</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                v-for="type in projectTypes"
                :key="type.id"
                type="button"
                class="p-4 rounded-xl border-2 text-sm font-medium transition-all duration-200"
                :class="
                  selectedType === type.id
                    ? 'border-[#3533cd] bg-[#3533cd]/10 text-[#3533cd]'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                "
                @click="selectedType = type.id"
              >
                {{ type.label }}
              </button>
            </div>
          </div>

          <!-- Step 2: features -->
          <div class="mb-8">
            <h3 class="font-semibold text-gray-900 mb-4">2. Which of these do you need?</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              <button
                v-for="feature in featureOptions"
                :key="feature.id"
                type="button"
                class="p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 text-left"
                :class="
                  selectedFeatures.includes(feature.id)
                    ? 'border-[#3533cd] bg-[#3533cd]/10 text-[#3533cd]'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                "
                @click="toggleFeature(feature.id)"
              >
                {{ feature.label }}
              </button>
            </div>
          </div>

          <!-- Step 3: timeline -->
          <div class="mb-10">
            <h3 class="font-semibold text-gray-900 mb-4">3. What's your timeline?</h3>
            <div class="grid grid-cols-3 gap-3">
              <button
                v-for="timeline in timelineOptions"
                :key="timeline.id"
                type="button"
                class="p-4 rounded-xl border-2 text-sm font-medium transition-all duration-200"
                :class="
                  selectedTimeline === timeline.id
                    ? 'border-[#3533cd] bg-[#3533cd]/10 text-[#3533cd]'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                "
                @click="selectedTimeline = timeline.id"
              >
                {{ timeline.label }}
              </button>
            </div>
          </div>

          <!-- Result -->
          <div class="bg-white rounded-2xl border border-[#3533cd]/20 p-6 md:p-8 text-center">
            <p class="text-sm text-gray-500 mb-2">Estimated range</p>
            <p class="text-4xl md:text-5xl font-bold text-[#3533cd] mb-4">
              {{ estimateRange }}
            </p>
            <p class="text-sm text-gray-500 mb-6">
              Based on typical projects of this shape. Your actual quote depends on
              specifics we'll only know after talking with you.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-block bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get an Exact Quote
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// NOTE: pricing tiers and the estimator's numbers below are placeholders for
// the initial Phase 3 launch — replace with real, business-approved figures
// before this page is considered final.

import { ref, computed } from "vue";

useHead({
  title: "Pricing - ByteStackLab",
  meta: [
    {
      name: "description",
      content:
        "Transparent starting-point pricing for web, mobile, SaaS, and AI automation projects from ByteStackLab, plus an interactive project estimator.",
    },
    { property: "og:title", content: "Pricing - ByteStackLab" },
    {
      property: "og:description",
      content:
        "Transparent starting-point pricing for web, mobile, SaaS, and AI automation projects from ByteStackLab, plus an interactive project estimator.",
    },
    { property: "og:type", content: "website" },
  ],
});

const tiers = [
  {
    name: "Discovery Call",
    audience: "Not sure what you need yet",
    price: "Free",
    priceSuffix: "",
    features: [
      "30-minute conversation about your idea",
      "Honest read on scope and feasibility",
      "No obligation, no pressure",
    ],
    cta: "Book a Call",
    featured: false,
  },
  {
    name: "MVP Package",
    audience: "Validate an idea fast",
    price: "$3,000+",
    priceSuffix: "starting",
    features: [
      "Core features only, shipped fast",
      "Single platform (web or mobile)",
      "4–6 week typical timeline",
      "1 round of post-launch fixes",
    ],
    cta: "Start My MVP",
    featured: true,
  },
  {
    name: "Full Product",
    audience: "Ready to build the real thing",
    price: "$8,000+",
    priceSuffix: "starting",
    features: [
      "Full feature set, production-ready",
      "Web + mobile as needed",
      "Admin dashboard & integrations",
      "QA and launch support included",
    ],
    cta: "Start My Project",
    featured: false,
  },
  {
    name: "Maintenance",
    audience: "Keep what's live, running well",
    price: "$400+",
    priceSuffix: "/month",
    features: [
      "Bug fixes and monitoring",
      "Security & dependency updates",
      "Small feature requests",
      "Monthly check-in call",
    ],
    cta: "Talk to Us",
    featured: false,
  },
];

const projectTypes = [
  { id: "web", label: "Web App", base: 3000 },
  { id: "mobile", label: "Mobile App", base: 5000 },
  { id: "saas", label: "SaaS Product", base: 8000 },
  { id: "ai", label: "AI Automation", base: 4000 },
];

const featureOptions = [
  { id: "auth", label: "User accounts & auth", cost: 800 },
  { id: "payments", label: "Payments / billing", cost: 1500 },
  { id: "admin", label: "Admin dashboard", cost: 1200 },
  { id: "api", label: "Third-party integrations", cost: 1000 },
  { id: "realtime", label: "Real-time features", cost: 1500 },
  { id: "ai-features", label: "AI/LLM features", cost: 2000 },
];

const timelineOptions = [
  { id: "rush", label: "1 month", multiplier: 1.3 },
  { id: "standard", label: "2–3 months", multiplier: 1 },
  { id: "relaxed", label: "3+ months", multiplier: 0.85 },
];

const selectedType = ref("web");
const selectedFeatures = ref([]);
const selectedTimeline = ref("standard");

const toggleFeature = (id) => {
  if (selectedFeatures.value.includes(id)) {
    selectedFeatures.value = selectedFeatures.value.filter((f) => f !== id);
  } else {
    selectedFeatures.value = [...selectedFeatures.value, id];
  }
};

const formatUsd = (value) =>
  `$${Math.round(value / 100) * 100}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const estimateRange = computed(() => {
  const type = projectTypes.find((t) => t.id === selectedType.value);
  const timeline = timelineOptions.find((t) => t.id === selectedTimeline.value);

  const featuresCost = selectedFeatures.value.reduce((sum, id) => {
    const feature = featureOptions.find((f) => f.id === id);
    return sum + (feature ? feature.cost : 0);
  }, 0);

  const base = (type.base + featuresCost) * timeline.multiplier;
  const low = base;
  const high = base * 1.4;

  return `${formatUsd(low)} – ${formatUsd(high)}`;
});
</script>
