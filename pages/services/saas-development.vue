<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
    <!-- Hero -->
    <section class="relative overflow-hidden pt-28 pb-20">
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent" />
        <div class="absolute right-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3533cd]/20 to-transparent" />
        <div class="absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      <div class="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <nav class="mb-8 flex justify-center">
          <ol class="flex items-center space-x-2 text-sm">
            <li><NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink></li>
            <li><span class="text-gray-400">/</span></li>
            <li><NuxtLink to="/services" class="text-gray-500 hover:text-gray-700">Services</NuxtLink></li>
            <li><span class="text-gray-400">/</span></li>
            <li><span class="text-gray-900">SaaS Development</span></li>
          </ol>
        </nav>

        <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-700 mb-6">
          SAAS DEVELOPMENT
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          From idea to <span class="text-cyan-600">paying customers</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
          We design and build multi-tenant SaaS products end to end — architecture,
          billing, and the unglamorous security work — so what you launch can
          actually scale past your first few customers.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-gradient-to-r from-cyan-600 to-[#3533cd] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start a Project
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- What we build -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            The parts of a SaaS product that are easy to skip and expensive to retrofit.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="offering in offerings"
            :key="offering.title"
            class="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-200 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="offering.icon" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ offering.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ offering.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech we use -->
    <section class="py-20 bg-gradient-to-br from-cyan-50 to-[#eef0ff]">
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

    <!-- CTA -->
    <section class="py-20">
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
</script>
