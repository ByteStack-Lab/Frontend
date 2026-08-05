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
          Frequently Asked Questions
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Answers to the questions we hear most often about working with
          ByteStackLab — process, technology, pricing, and support.
        </p>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="pb-20">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="space-y-3">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              class="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center gap-4"
              :aria-expanded="faq.isOpen"
              @click="toggleFaq(index)"
            >
              <h2 class="font-semibold text-gray-900">
                {{ faq.question }}
              </h2>
              <svg
                class="w-5 h-5 text-[#3533cd] transform transition-transform duration-200 flex-shrink-0"
                :class="{ 'rotate-180': faq.isOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-96 opacity-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="max-h-96 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-show="faq.isOpen" class="overflow-hidden border-t border-gray-100">
                <p class="px-6 py-4 text-gray-600 leading-relaxed text-sm">
                  {{ faq.answer }}
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-[#3533cd] via-[#2d2a7a] to-[#1e1b69]">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Still Have Questions?
        </h2>
        <p class="text-xl text-white/90 mb-8 leading-relaxed">
          Can't find the answer you're looking for? Our team is happy to walk
          through your project and answer anything specific to your needs.
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
            to="/pricing"
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#3533cd] transition-all duration-300 flex items-center justify-center"
          >
            View Pricing
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const faqs = ref([
  {
    question: "How quickly can you start my project?",
    answer:
      "We can typically start within 1-2 weeks after project agreement and requirements finalization. However, for urgent projects, we may be able to begin sooner depending on our current workload.",
    isOpen: false,
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages for all our projects. This includes bug fixes, security updates, performance optimization, and feature enhancements as needed.",
    isOpen: false,
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern technologies including React, Vue.js, Node.js, Python, Django, Laravel, React Native, Flutter, AWS, Docker, and many more. We choose the best technology stack based on your project requirements.",
    isOpen: false,
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development methodology with regular client communication, sprint planning, daily stand-ups, and continuous delivery. You'll have full visibility into the development progress through our project management tools.",
    isOpen: false,
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! We work with clients from around the world. We're experienced in remote collaboration and can adjust our working hours to accommodate different time zones for effective communication.",
    isOpen: false,
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow strict quality assurance processes including code reviews, automated testing, manual testing, performance optimization, and security audits. Every project goes through multiple quality checkpoints before delivery.",
    isOpen: false,
  },
  {
    question: "What are your payment terms?",
    answer:
      "We typically work with milestone-based payments. Usually 30% upfront, 40% at mid-project completion, and 30% upon final delivery. For larger projects, we can discuss customized payment schedules.",
    isOpen: false,
  },
  {
    question: "Do you provide project documentation?",
    answer:
      "Yes, we provide comprehensive project documentation including technical specifications, API documentation, user guides, deployment instructions, and maintenance guidelines.",
    isOpen: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};

const breadcrumbSchema = useBreadcrumbSchema();

useHead({
  title: "FAQ - ByteStackLab | Frequently Asked Questions",
  meta: [
    {
      name: "description",
      content:
        "Answers to common questions about ByteStackLab's software development process, technology stack, pricing, support, and working with international clients.",
    },
    { property: "og:title", content: "FAQ - ByteStackLab" },
    {
      property: "og:description",
      content:
        "Answers to common questions about ByteStackLab's software development process, technology, pricing, and support.",
    },
    { property: "og:type", content: "website" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.value.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }),
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faq" },
    ]),
  ],
});
</script>
