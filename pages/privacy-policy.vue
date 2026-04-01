<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-[#eef0ff]">
    <!-- Hero -->
    <section class="relative overflow-hidden pt-28 pb-14">
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#6675F7]/25 to-transparent"
        ></div>
        <div
          class="absolute right-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3533cd]/20 to-transparent"
        ></div>
        <div
          class="absolute top-28 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6675F7]/20 to-transparent"
        ></div>
      </div>

      <div class="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div
          class="w-16 h-1 bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] rounded-full mx-auto mb-6"
        ></div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5">
          Privacy Policy
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At ByteStackLab, your privacy matters. This policy explains what information
          we collect, how we use it, and the steps we take to keep it safe when you
          interact with our website and services.
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h2 class="text-base font-semibold text-[#3533cd] mb-1">Minimal Collection</h2>
              <p class="text-gray-600 text-sm leading-relaxed">
                We collect only the information necessary to serve you — no surplus
                data gathering, no selling your details to third parties.
              </p>
            </div>
          </div>
          <div class="bg-white border border-[#dfe3ff] rounded-2xl p-6 shadow-sm flex gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#eef0ff] flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-[#3533cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h2 class="text-base font-semibold text-[#3533cd] mb-1">Secured Storage</h2>
              <p class="text-gray-600 text-sm leading-relaxed">
                Your data is stored with access controls and security best practices
                to prevent unauthorized access, loss, or disclosure.
              </p>
            </div>
          </div>
          <div class="bg-white border border-[#dfe3ff] rounded-2xl p-6 shadow-sm flex gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#eef0ff] flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-[#3533cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h2 class="text-base font-semibold text-[#3533cd] mb-1">Your Control</h2>
              <p class="text-gray-600 text-sm leading-relaxed">
                You have the right to access, correct, or request deletion of any
                personal data we hold about you — just reach out to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy Content -->
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
            <h2 class="text-xl font-bold text-gray-900 mb-3">{{ section.title }}</h2>
            <p class="text-gray-600 leading-relaxed mb-4">{{ section.description }}</p>
            <ul class="space-y-2">
              <li
                v-for="point in section.points"
                :key="point"
                class="flex items-start gap-3 text-gray-700 text-sm"
              >
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-[#3533cd] flex-shrink-0"></span>
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
          Need Help With Your Privacy?
        </h2>
        <p class="text-xl text-white/90 mb-8 leading-relaxed">
          If you want to access, update, or delete your personal data — or simply
          have a question about how we handle information — our team is ready to
          assist you promptly.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-[#3533cd] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
          >
            Contact Privacy Team
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/terms-conditions"
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#3533cd] transition-all duration-300 flex items-center justify-center"
          >
            Read Terms & Conditions
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Privacy Policy - ByteStackLab",
  meta: [
    {
      name: "description",
      content:
        "Read ByteStackLab's Privacy Policy to understand what data we collect, how we use it, and how we protect your information when you interact with our services.",
    },
    { property: "og:title", content: "Privacy Policy - ByteStackLab" },
    {
      property: "og:description",
      content:
        "Read ByteStackLab's Privacy Policy to understand what data we collect, how we use it, and how we protect your information when you interact with our services.",
    },
    { property: "og:type", content: "website" },
  ],
});

const sections = [
  {
    title: "1. Who We Are",
    description:
      "ByteStackLab is a software development company based in Dhaka, Bangladesh, operating since 2020. We build custom digital solutions — web apps, mobile apps, SaaS platforms, ERP systems, and AI-powered tools — for businesses locally and internationally.",
    points: [
      "Website: bytestacklab.com",
      "Email: hello@bytestacklab.com",
      "Phone: +880-1812-209019",
      "Address: Dhaka, Bangladesh",
    ],
  },
  {
    title: "2. Information We Collect",
    description:
      "We collect only the information needed to provide our services, respond to inquiries, and improve your experience on our platform.",
    points: [
      "Contact information you submit through forms: name, email address, phone number, and your message.",
      "Project-related details shared to request consultations, quotes, or service estimates.",
      "Basic technical data such as browser type, device, and anonymized usage analytics to improve website performance.",
      "Communication records — emails, messages, and meeting notes — related to project discussions.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    description:
      "Information collected is used strictly to deliver services, communicate with you, and maintain the quality of our platform.",
    points: [
      "Respond to your inquiries, project proposals, and support requests in a timely manner.",
      "Deliver project updates, share files, and fulfill contractual obligations as agreed.",
      "Send service-related communications — we do not send unsolicited marketing emails.",
      "Monitor security, detect misuse, and continuously improve our website experience.",
    ],
  },
  {
    title: "4. Cookies & Analytics",
    description:
      "We may use cookies and analytics tools to understand how visitors interact with our website and to ensure core features work as expected.",
    points: [
      "Essential cookies are required for the site to function properly — these cannot be disabled.",
      "Analytics data (e.g., page views, traffic sources) is collected in aggregated, anonymized form only.",
      "We do not use cookies for targeted advertising or behavioral profiling.",
      "You can manage or disable cookies through your browser settings at any time.",
    ],
  },
  {
    title: "5. Data Sharing",
    description:
      "ByteStackLab does not sell, rent, or trade your personal information. Limited sharing occurs only when necessary and lawful.",
    points: [
      "Trusted infrastructure providers (e.g., hosting, email delivery) may process data on our behalf under strict agreements.",
      "We may disclose information if required by law, court order, or applicable regulatory authority.",
      "Any data shared with third parties is limited strictly to what is required for the specific purpose.",
    ],
  },
  {
    title: "6. Data Security & Retention",
    description:
      "We take reasonable technical and organizational steps to protect your information from unauthorized access or disclosure.",
    points: [
      "Access to personal data is restricted to team members who need it to perform their role.",
      "We retain client data for as long as required by legal obligations, active project records, or contractual requirements.",
      "When data is no longer necessary, it is securely deleted or anonymized.",
    ],
  },
  {
    title: "7. Your Rights",
    description:
      "Depending on your location and applicable law, you may have rights regarding the personal data we hold about you.",
    points: [
      "Request access to the personal information we have collected about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of your personal data where no legal retention obligation applies.",
      "Withdraw consent for non-essential communications at any time by contacting us.",
    ],
  },
  {
    title: "8. Policy Updates",
    description:
      "This Privacy Policy may be updated from time to time to reflect changes in our services, practices, or legal requirements.",
    points: [
      "Revised versions are published on this page with an updated effective date.",
      "Continued use of our website after an update indicates your acceptance of the revised policy.",
      "For significant changes, we may provide additional notice through email or a website announcement.",
    ],
  },
];
</script>
