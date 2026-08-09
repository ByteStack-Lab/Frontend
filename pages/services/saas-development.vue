<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-[#1e1b69]/10" />

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm">
            <li>
              <NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink>
            </li>
            <li><span class="text-gray-400">/</span></li>
            <li>
              <NuxtLink to="/services" class="text-gray-500 hover:text-gray-700">Services</NuxtLink>
            </li>
            <li><span class="text-gray-400">/</span></li>
            <li><span class="text-gray-900">SaaS Development</span></li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Service Info -->
          <div>
            <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-700 mb-4">
              SAAS DEVELOPMENT
            </div>

            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From idea to <span class="text-cyan-600">paying customers</span>
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              We design and build multi-tenant SaaS products end to end — architecture,
              billing, and the unglamorous security work — so what you launch can
              actually scale past your first few customers.
            </p>

            <div class="flex flex-wrap gap-4 mb-8">
              <div class="flex items-center text-cyan-600">
                <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="font-semibold">Free project consultation</span>
              </div>

              <div class="flex items-center text-gray-600">
                <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Typical MVP: 8-16 weeks</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink
                to="/contact"
                class="bg-gradient-to-r from-cyan-600 to-[#3533cd] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
              >
                Get a Free Quote
              </NuxtLink>
              <NuxtLink
                to="/case-studies"
                class="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transition-all duration-300 text-center"
              >
                See Our Work
              </NuxtLink>
            </div>
          </div>

          <!-- Service Visual -->
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div class="w-24 h-24 bg-gradient-to-r from-cyan-600 to-[#3533cd] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg aria-hidden="true" class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 001.6-9.75 6 6 0 00-11.3-2.6A4.5 4.5 0 003 15z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">SaaS Development</h3>
              <p class="text-gray-600">
                Multi-tenant architecture, subscription billing, and API-first design
                built to scale past your first few customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Build -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            The parts of a SaaS product that are easy to skip and expensive to retrofit.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="offering in offerings"
            :key="offering.title"
            class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
          >
            <div class="w-14 h-14 bg-gradient-to-r from-cyan-600 to-[#3533cd] rounded-full flex items-center justify-center mb-6">
              <svg aria-hidden="true" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="offering.icon" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ offering.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ offering.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech we use -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built on a Stack That Scales</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          No exotic dependencies — tools your next engineering hire will already know.
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="tech in stack"
            :key="tech"
            class="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- Pricing Philosophy -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#3533cd]/10 text-[#1e1b69] mb-4">
            PRICING
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing Built Around Your Project
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            No two SaaS products are the same, so we don't sell fixed packages. We
            scope every engagement around your feature set, architecture, and budget
            in a free consultation.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="w-14 h-14 bg-gradient-to-r from-cyan-600 to-[#3533cd] rounded-full flex items-center justify-center mb-6">
              <svg aria-hidden="true" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6M9 8h6M17 16h6" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Scoped to Your Needs</h3>
            <p class="text-gray-600 leading-relaxed">
              Your quote reflects the exact features, integrations, and architecture
              complexity your product needs — nothing bundled in that you won't use.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <div class="w-14 h-14 bg-gradient-to-r from-cyan-600 to-[#3533cd] rounded-full flex items-center justify-center mb-6">
              <svg aria-hidden="true" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Flexible Engagement</h3>
            <p class="text-gray-600 leading-relaxed">
              Fixed-price for a well-defined MVP, or a dedicated team for ongoing
              product development — structured around how you want to build.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <div class="w-14 h-14 bg-gradient-to-r from-cyan-600 to-[#3533cd] rounded-full flex items-center justify-center mb-6">
              <svg aria-hidden="true" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">No-Surprise Estimates</h3>
            <p class="text-gray-600 leading-relaxed">
              You'll get a detailed proposal with milestones and cost breakdown before
              any work begins — no hidden fees, no scope creep.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600">
            Everything you need to know about our SaaS development service
          </p>
        </div>

        <div class="space-y-6">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="border border-gray-200 rounded-lg bg-white"
          >
            <button
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              @click="toggleFaq(faq.id)"
            >
              <span class="font-semibold text-gray-900">{{ faq.question }}</span>
              <svg aria-hidden="true"
                :class="['w-5 h-5 text-gray-500 transition-transform', openFaqs.includes(faq.id) ? 'rotate-180' : '']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="openFaqs.includes(faq.id)" class="px-6 pb-4 text-gray-600 leading-relaxed">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="bg-gradient-to-r from-cyan-600 to-[#1e1b69] rounded-3xl p-10 md:p-16 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Building a SaaS product?
          </h2>
          <p class="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's talk through your idea, your timeline, and what an MVP would
            realistically take to ship.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-block bg-white text-cyan-700 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
          >
            Book a Discovery Call
          </NuxtLink>
          <p class="text-sm text-cyan-100/80 mt-4">
            Prefer email? Reach us at
            <a href="mailto:hello@bytestacklab.com" class="text-white font-medium hover:underline">hello@bytestacklab.com</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// NOTE: page copy below is placeholder content for the initial Phase 3
// launch — swap in real positioning, capability details, and stack list
// once the business has finalized them.

useHead({
  title: "SaaS Development - ByteStackLab",
  meta: [
    {
      name: "description",
      content:
        "ByteStackLab designs and builds multi-tenant SaaS products — subscription billing, API-first architecture, and security done right from day one.",
    },
    { property: "og:title", content: "SaaS Development - ByteStackLab" },
    {
      property: "og:description",
      content:
        "ByteStackLab designs and builds multi-tenant SaaS products — subscription billing, API-first architecture, and security done right from day one.",
    },
    { property: "og:type", content: "website" },
  ],
});

const offerings = [
  {
    title: "Multi-Tenant Architecture",
    description: "Data isolation, tenant-aware queries, and infrastructure that doesn't need a rewrite at customer #50.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Subscription Billing",
    description: "Stripe-powered plans, trials, upgrades/downgrades, and usage-based pricing wired up correctly.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
  },
  {
    title: "API-First Design",
    description: "A documented API from day one, so your web app, mobile app, and integrations share one source of truth.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "White-Label Solutions",
    description: "Theming, custom domains, and tenant branding for products you sell to other businesses.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Security Best Practices",
    description: "Auth, role-based access, encrypted secrets, and the checklist most MVPs skip until it's too late.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Admin & Analytics Dashboards",
    description: "Internal tooling so you can actually see usage, churn, and revenue without querying the database by hand.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stack = [
  "Laravel",
  "Nuxt / Vue",
  "React Native / Flutter",
  "PostgreSQL / MySQL",
  "Redis",
  "Stripe",
  "AWS / DigitalOcean",
  "Docker",
];

const faqs = [
  {
    id: 1,
    question: "How is SaaS project pricing determined?",
    answer:
      "Every SaaS build is scoped individually based on your feature set, architecture complexity, and integrations. Book a free consultation and we'll walk you through a clear, itemized estimate before any work begins.",
  },
  {
    id: 2,
    question: "Do you build the MVP or the full product?",
    answer:
      "Either — a lean MVP to validate the idea first, or a full production build if you already have validated demand.",
  },
  {
    id: 3,
    question: "Who owns the code and infrastructure?",
    answer:
      "You do. Everything we build — code, architecture, and deployment — belongs to you from day one.",
  },
  {
    id: 4,
    question: "How long does it take to launch an MVP?",
    answer:
      "A focused MVP typically launches in 8-16 weeks, depending on the number of core features and integrations.",
  },
];

// FAQ toggle functionality
const openFaqs = ref([]);
const toggleFaq = (faqId) => {
  const index = openFaqs.value.indexOf(faqId);
  if (index > -1) {
    openFaqs.value.splice(index, 1);
  } else {
    openFaqs.value.push(faqId);
  }
};
</script>
