<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-[#eef0ff]">
    <!-- Hero -->
    <section class="relative overflow-hidden pt-28 pb-14">
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#6675F7]/25 to-transparent"
        />
        <div
          class="absolute right-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3533cd]/20 to-transparent"
        />
        <div
          class="absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6675F7]/20 to-transparent"
        />
      </div>

      <div class="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div
          class="w-16 h-1 bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] rounded-full mx-auto mb-6"
        />
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5">
          Terms &amp; Conditions
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          By engaging with ByteStackLab — whether through our website, services, or
          communications — you agree to the terms outlined below. Please read them
          carefully before proceeding.
        </p>
      </div>
    </section>

    <!-- Highlights -->
    <section class="pb-10">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-5">
          <div class="bg-white border border-[#dfe3ff] rounded-2xl p-6 shadow-sm flex gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#eef0ff] flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-[#3533cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 class="text-base font-semibold text-[#3533cd] mb-1">Fair & Responsible Use</h2>
              <p class="text-gray-600 text-sm leading-relaxed">
                Use our services lawfully. Do not attempt to misuse, reverse-engineer,
                or disrupt any part of our platform or deliverables.
              </p>
            </div>
          </div>
          <div class="bg-white border border-[#dfe3ff] rounded-2xl p-6 shadow-sm flex gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#eef0ff] flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-[#3533cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h2 class="text-base font-semibold text-[#3533cd] mb-1">Data Safety</h2>
              <p class="text-gray-600 text-sm leading-relaxed">
                We apply industry-standard security controls to protect client data,
                submitted materials, and platform integrity at all times.
              </p>
            </div>
          </div>
          <div class="bg-white border border-[#dfe3ff] rounded-2xl p-6 shadow-sm flex gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#eef0ff] flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-[#3533cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h2 class="text-base font-semibold text-[#3533cd] mb-1">Clear Agreements</h2>
              <p class="text-gray-600 text-sm leading-relaxed">
                Project scope, deliverables, billing, and ownership are documented in
                your signed proposal or written project agreement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="pb-20">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 lg:p-10 space-y-8"
        >
          <article
            v-for="section in sections"
            :key="section.title"
            class="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ section.title }}</h3>
            <p class="text-gray-600 leading-relaxed mb-4">{{ section.description }}</p>
            <ul class="space-y-2">
              <li
                v-for="point in section.points"
                :key="point"
                class="flex items-start gap-3 text-gray-700 text-sm"
              >
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-[#3533cd] flex-shrink-0"/>
                <span>{{ point }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-[#3533cd] via-[#2d2a7a] to-[#1e1b69]">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Have Questions About These Terms?
        </h2>
        <p class="text-xl text-white/90 mb-8 leading-relaxed">
          We believe in transparency. If any section is unclear or you want to
          discuss how these terms apply to your project, our team is here to help
          before you proceed.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-[#3533cd] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
          >
            Contact Our Team
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/privacy-policy"
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#3533cd] transition-all duration-300 flex items-center justify-center"
          >
            Read Privacy Policy
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Terms & Conditions - ByteStackLab",
  meta: [
    {
      name: "description",
      content:
        "Read ByteStackLab's Terms & Conditions to understand your rights, responsibilities, and the guidelines governing use of our software development services.",
    },
    { property: "og:title", content: "Terms & Conditions - ByteStackLab" },
    {
      property: "og:description",
      content:
        "Read ByteStackLab's Terms & Conditions to understand your rights, responsibilities, and the guidelines governing use of our software development services.",
    },
    { property: "og:type", content: "website" },
  ],
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    description:
      "By accessing our website, requesting a quote, or using any service provided by ByteStackLab, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.",
    points: [
      "You must be at least 18 years old or have legal authority to enter a binding agreement.",
      "If you are acting on behalf of a business or organization, you confirm that you have the authority to bind them to these terms.",
      "If you do not agree with any part of these terms, please discontinue use of our website and services.",
    ],
  },
  {
    title: "2. Services Provided",
    description:
      "ByteStackLab is a software development company based in Dhaka, Bangladesh, offering custom digital solutions to local and international clients since 2020.",
    points: [
      "We provide services including custom web applications, mobile apps, SaaS development, ERP systems, and AI-powered solutions.",
      "All service details, timelines, and deliverables are defined in a written proposal or signed service agreement before work begins.",
      "ByteStackLab reserves the right to decline, pause, or discontinue services at its discretion with appropriate notice.",
    ],
  },
  {
    title: "3. Acceptable Use",
    description:
      "You agree to interact with our website, services, and team in a lawful, respectful, and responsible manner.",
    points: [
      "Do not attempt unauthorized access to our systems, abuse APIs, or disrupt any part of our infrastructure.",
      "Do not submit or request development of content that is illegal, harmful, defamatory, or violates third-party rights.",
      "You are solely responsible for the accuracy and legality of content, data, and materials you provide to us.",
    ],
  },
  {
    title: "4. Intellectual Property",
    description:
      "ByteStackLab retains ownership of its brand, internal tools, and proprietary frameworks. Client deliverable ownership follows the signed agreement.",
    points: [
      "The ByteStackLab name, logo, and brand assets may not be reproduced or reused without written permission.",
      "Custom code, designs, and deliverables built specifically for your project are transferred to you upon full payment as per the agreement.",
      "Third-party libraries, plugins, and open-source tools used in your project remain subject to their original licenses.",
    ],
  },
  {
    title: "5. Payments & Project Terms",
    description:
      "Commercial terms, milestones, and payment schedules are documented in individual project agreements and proposals.",
    points: [
      "A deposit or milestone payment may be required to begin work, as defined in the project agreement.",
      "Late or withheld payments may result in paused delivery or suspension of project timelines.",
      "Refund and cancellation policies are outlined in the signed service agreement and vary by project scope.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    description:
      "ByteStackLab delivers professional services with care, but certain limitations apply in accordance with applicable law.",
    points: [
      "We are not liable for indirect, consequential, or incidental losses arising from the use of our services or deliverables.",
      "Our total liability is limited to the amount paid for the specific service in question.",
      "We are not responsible for third-party service outages, hosting downtime, or external platform changes beyond our control.",
    ],
  },
  {
    title: "7. Updates to These Terms",
    description:
      "ByteStackLab may revise these terms to reflect operational, legal, or service-related changes at any time.",
    points: [
      "Updated terms are published on this page with a revised effective date and take effect immediately.",
      "Continued use of our website or services after any update constitutes your acceptance of the revised terms.",
      "For significant changes, we may provide additional notice via email or website announcement where practical.",
    ],
  },
];
</script>
