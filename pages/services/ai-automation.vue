<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
    <!-- Hero -->
    <section class="relative overflow-hidden pt-28 pb-20">
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-400/25 to-transparent" />
        <div class="absolute right-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3533cd]/20 to-transparent" />
        <div class="absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
      </div>

      <div class="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <nav class="mb-8 flex justify-center">
          <ol class="flex items-center space-x-2 text-sm">
            <li><NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink></li>
            <li><span class="text-gray-400">/</span></li>
            <li><NuxtLink to="/services" class="text-gray-500 hover:text-gray-700">Services</NuxtLink></li>
            <li><span class="text-gray-400">/</span></li>
            <li><span class="text-gray-900">AI &amp; Automation</span></li>
          </ol>
        </nav>

        <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-700 mb-6">
          AI &amp; AUTOMATION
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Software that <span class="text-violet-600">works while you sleep</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
          We build AI-powered automation that removes repetitive work from your team's day —
          chatbots that actually answer questions, workflows that run themselves, and
          integrations that connect the tools you already use.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-gradient-to-r from-violet-600 to-[#3533cd] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start a Project
          </NuxtLink>
          <NuxtLink
            to="/pricing"
            class="border-2 border-violet-600 text-violet-700 px-8 py-4 rounded-xl font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300"
          >
            See Pricing
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
            Every engagement starts with your actual bottleneck, not a generic AI checklist.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="offering in offerings"
            :key="offering.title"
            class="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-violet-200 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="offering.icon" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ offering.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ offering.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="py-20 bg-gradient-to-br from-violet-50 to-[#eef0ff]">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            From first call to a system running in production.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="(step, index) in process" :key="step.title" class="relative">
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-[#3533cd] text-white flex items-center justify-center font-bold mb-4">
                {{ index + 1 }}
              </div>
              <h3 class="font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20">
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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// NOTE: page copy below is placeholder content for the initial Phase 3
// launch — swap in real positioning, capability details, and process copy
// once the business has finalized them.

useHead({
  title: "AI & Automation Solutions - ByteStackLab",
  meta: [
    {
      name: "description",
      content:
        "AI chatbots, process automation, and LLM integrations built by ByteStackLab. We help businesses automate repetitive work and integrate AI into existing systems.",
    },
    { property: "og:title", content: "AI & Automation Solutions - ByteStackLab" },
    {
      property: "og:description",
      content:
        "AI chatbots, process automation, and LLM integrations built by ByteStackLab. We help businesses automate repetitive work and integrate AI into existing systems.",
    },
    { property: "og:type", content: "website" },
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
</script>
