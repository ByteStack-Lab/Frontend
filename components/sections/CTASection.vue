<template>
  <!--
    Closing CTA for the homepage. Padding and container width deliberately
    match the other sections (py-14 md:py-20 lg:py-16 / max-w-7xl) rather than
    the older .section-padding + .container-custom utilities, so the vertical
    rhythm of the page stays unbroken.
  -->
  <section
    class="py-14 md:py-20 lg:py-16 bg-gradient-to-br from-[#3533cd] to-[#1e1b69] relative overflow-hidden"
  >
    <!-- Background decorative elements -->
    <div class="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full" />
    <div class="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full" />
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full" />

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Heading -->
        <h2 class="text-4xl lg:text-5xl font-bold text-white leading-tight">
          Have a project in mind?
          <span class="block">Let's scope it together.</span>
        </h2>

        <!-- Subtitle -->
        <p class="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
          Book a free 30-minute consultation. We'll walk through your
          requirements, suggest an approach, and give you a realistic timeline
          and budget range — before you commit to anything.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <NuxtLink
            to="/contact"
            class="w-full sm:w-auto bg-white text-[#3533cd] px-10 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group inline-block"
          >
            Book a Free Consultation
            <svg
              class="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>

          <a
            href="tel:+8801812209019"
            class="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#3533cd] transition-all duration-300 group inline-block"
          >
            <svg
              class="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Talk to Us Now
          </a>
        </div>

        <!-- Reassurance / contact info -->
        <div class="pt-8 border-t border-white/20">
          <div class="grid md:grid-cols-3 gap-6 md:gap-8 text-white/80">
            <!-- Response time -->
            <div class="flex items-center justify-center space-x-3">
              <svg
                class="w-6 h-6 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Reply within 24 hours</span>
            </div>

            <!-- NDA -->
            <div class="flex items-center justify-center space-x-3">
              <svg
                class="w-6 h-6 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>NDA signed on request</span>
            </div>

            <!-- No obligation -->
            <div class="flex items-center justify-center space-x-3">
              <svg
                class="w-6 h-6 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>No obligation, no sales pressure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Static section — no logic required.
</script>
