<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-[#1e1b69]/10" />

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
            <li><span class="text-gray-900">AI &amp; Automation</span></li>
          </ol>
        </nav>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Service Info -->
          <div>
            <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-700 mb-4">
              AI &amp; AUTOMATION
            </div>

            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Software that <span class="text-violet-600">works while you sleep</span>
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              We build AI-powered automation that removes repetitive work from your
              team's day — chatbots that actually answer questions, workflows that run
              themselves, and integrations that connect the tools you already use.
            </p>

            <div class="flex flex-wrap gap-4 mb-8">
              <div class="flex items-center text-violet-600">
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
                <span>Typical build: 4-8 weeks</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink
                to="/contact"
                class="bg-gradient-to-r from-violet-600 to-[#3533cd] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
              >
                Get a Free Quote
              </NuxtLink>
              <NuxtLink
                to="/case-studies"
                class="border-2 border-violet-600 text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 text-center"
              >
                See Our Work
              </NuxtLink>
            </div>
          </div>

          <!-- Service Visual -->
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div class="w-24 h-24 bg-gradient-to-r from-violet-600 to-[#3533cd] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg aria-hidden="true" class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">AI &amp; Automation</h3>
              <p class="text-gray-600">
                AI chatbots, process automation, and LLM integrations that remove
                repetitive work from your team's day.
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
            Every engagement starts with your actual bottleneck, not a generic AI checklist.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="offering in offerings"
            :key="offering.title"
            class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
          >
            <div class="w-14 h-14 bg-gradient-to-r from-violet-600 to-[#3533cd] rounded-full flex items-center justify-center mb-6">
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

    <!-- How it works -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            From first call to a system running in production.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(step, index) in process" :key="step.title" class="relative text-center">
              <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-600 to-[#3533cd] text-white font-bold flex items-center justify-center">
                {{ index + 1 }}
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">{{ step.title }}</h4>
              <p class="text-sm text-gray-600 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
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
            No two automation projects are the same, so we don't sell fixed packages.
            We scope every engagement around your tools, workflows, and budget in a
            free consultation.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="w-14 h-14 bg-gradient-to-r from-violet-600 to-[#3533cd] rounded-full flex items-center justify-center mb-6">
              <svg aria-hidden="true" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6M9 8h6M17 16h6" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Scoped to Your Needs</h3>
            <p class="text-gray-600 leading-relaxed">
              Your quote reflects the exact tools, integrations, and AI/LLM usage your
              workflow needs — nothing bundled in that you won't use.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <div class="w-14 h-14 bg-gradient-to-r from-violet-600 to-[#3533cd] rounded-full flex items-center justify-center mb-6">
              <svg aria-hidden="true" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Flexible Engagement</h3>
            <p class="text-gray-600 leading-relaxed">
              Fixed-price for a well-defined workflow, or a dedicated team for ongoing
              AI work — structured around how you want to build.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <div class="w-14 h-14 bg-gradient-to-r from-violet-600 to-[#3533cd] rounded-full flex items-center justify-center mb-6">
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
            Everything you need to know about our AI &amp; automation service
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
              <svg
                aria-hidden="true"
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
        <div class="bg-gradient-to-r from-violet-600 to-[#1e1b69] rounded-3xl p-10 md:p-16 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a process that eats too many hours?
          </h2>
          <p class="text-lg text-violet-100 mb-8 max-w-2xl mx-auto">
            Tell us what's slow. We'll tell you honestly whether AI/automation is
            the right fix — and what it would take to build it.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-block bg-white text-violet-700 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
          >
            Book a Discovery Call
          </NuxtLink>
          <p class="text-sm text-violet-100/80 mt-4">
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
// launch — swap in real positioning, capability details, and process copy
// once the business has finalized them.

const siteUrl = useSiteConfig().url.replace(/\/$/, "");
const breadcrumbSchema = useBreadcrumbSchema();

useHead({
  title: "AI Automation & Integration Services",
  meta: [
    {
      name: "description",
      content:
        "AI chatbots, process automation, and LLM integrations built by ByteStackLab. We help businesses automate repetitive work and integrate AI into existing systems.",
    },
    { property: "og:title", content: "AI Automation & Integration Services" },
    {
      property: "og:description",
      content:
        "AI chatbots, process automation, and LLM integrations built by ByteStackLab. We help businesses automate repetitive work and integrate AI into existing systems.",
    },
    { property: "og:type", content: "website" },
  ],
  script: [
    // These two service landing pages are static files, so they shadow the
    // API-driven /services/[slug] route — which means they don't inherit the
    // Service/BreadcrumbList JSON-LD that page emits from Filament's
    // schema_markup column. Declared here so they aren't the only two service
    // pages on the site with no structured data.
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Automation & Integration",
        serviceType: "AI automation and LLM integration",
        description: "AI chatbots, process automation, and LLM integrations built by ByteStackLab. We help businesses automate repetitive work and integrate AI into existing systems.",
        url: `${siteUrl}/services/ai-automation`,
        provider: {
          "@type": "Organization",
          name: "ByteStackLab",
          url: siteUrl,
        },
        areaServed: "Worldwide",
      }),
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "AI Automation & Integration", path: "/services/ai-automation" },
    ]),
  ],
});

const offerings = [
  {
    title: "AI Chatbot Development",
    description: "Support and sales assistants trained on your own content — not a generic FAQ bot.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Process Automation",
    description: "Connect your tools with n8n, Make, or Zapier so approvals, reports, and handoffs run themselves.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "LLM Integration",
    description: "Bring OpenAI, Claude, or Gemini into your existing product — search, summarization, drafting, and more.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Computer Vision / OCR",
    description: "Pull structured data out of scanned documents, invoices, and images automatically.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Predictive Analytics",
    description: "Forecast demand, flag churn risk, or catch anomalies before they become expensive problems.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "AI-Powered CRM / ERP",
    description: "Add smart summaries, lead scoring, and auto-drafted follow-ups to the systems you already run on.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

const process = [
  {
    title: "Discovery Call",
    description: "A free, no-pressure conversation about what's actually slow or manual today.",
  },
  {
    title: "Scoped Proposal",
    description: "A concrete plan — what gets built, what tools it touches, and a realistic timeline.",
  },
  {
    title: "Build & Iterate",
    description: "Working software in front of you early, refined with your feedback as we go.",
  },
  {
    title: "Launch & Support",
    description: "We ship it, monitor it, and stay on for maintenance if you want us to.",
  },
];

const faqs = [
  {
    id: 1,
    question: "How is AI automation pricing determined?",
    answer:
      "Every automation project is scoped individually based on the tools you use, workflow complexity, and how much AI/LLM work is involved. Book a free consultation and we'll walk you through a clear, itemized estimate before any work begins.",
  },
  {
    id: 2,
    question: "Do I need my own OpenAI/Claude API keys?",
    answer:
      "We can set things up under your own provider account so you keep full ownership and control of usage and costs, or advise on the most cost-effective provider for your use case.",
  },
  {
    id: 3,
    question: "Will this replace my team, or support them?",
    answer:
      "Our automations remove repetitive manual work, not judgment calls — your team stays in control and reviews anything that matters.",
  },
  {
    id: 4,
    question: "How long does a typical project take?",
    answer:
      "Most automation and chatbot projects take 4-8 weeks from kickoff to launch, depending on how many systems we're integrating with.",
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
