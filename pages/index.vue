<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Trust Strip — compact logo row, above-the-fold proof of real clients -->
    <TrustStripSection />

    <!-- Services Section -->
    <section id="services">
      <ServicesSection />
    </section>

    <!-- About Section -->
    <section id="about">
      <AboutSection />
    </section>

    <!-- Counter Section -->
    <CounterSection />

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Case Studies Section -->
    <section id="case-studies">
      <CaseStudiesSection />
    </section>

    <!-- Featured Products Section — our own SaaS products, not client work -->
    <FeaturedProductsSection />

    <!--
      Capability / trust ("why us") followed by process ("how we work").
      WayOfBuildingSection used to sit above these two, but all three covered
      the same ground — agile, architecture, code quality — so the homepage
      said the same thing three times before ever asking for the lead. The
      component still exists for reuse on /about; it is deliberately not
      rendered here.
    -->
    <DevelopmentApproachSection />

    <section id="how-it-works">
      <HowDevelopmentSection />
    </section>

    <!-- Tech Stack Section -->
    <TechStackSection />

    <!-- Blog Section -->
    <section id="blog">
      <BlogSection />
    </section>

    <!--
      Closing CTA. The last thing a visitor who scrolled this far should see
      is a way to talk to us, not a newsletter box — newsletter is the softer
      ask and now sits below it.
    -->
    <section id="hire">
      <CTASection />
    </section>

    <!-- Newsletter Section -->
    <NewsletterSection />
  </div>
</template>

<script setup>
// Explicit component imports
import HeroSection from '~/components/sections/HeroSection.vue'
import TrustStripSection from '~/components/sections/TrustStripSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import CounterSection from '~/components/sections/CounterSection.vue'
import CaseStudiesSection from '~/components/sections/CaseStudiesSection.vue'
import FeaturedProductsSection from '~/components/sections/FeaturedProductsSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import DevelopmentApproachSection from '~/components/sections/DevelopmentApproachSection.vue'
import TechStackSection from '~/components/sections/TechStackSection.vue'
import HowDevelopmentSection from '~/components/sections/HowDevelopmentSection.vue'
import BlogSection from '~/components/sections/BlogSection.vue'
import CTASection from '~/components/sections/CTASection.vue'
import NewsletterSection from '~/components/sections/NewsletterSection.vue'

// Page setup
definePageMeta({
  title: 'Home'
})

// SEO
useHead({
  title: 'ByteStackLab | AI-Powered Software Development Company',
  meta: [
    {
      name: 'description',
      content: 'ByteStackLab builds AI-powered, scalable software — intelligent automation systems, SaaS platforms, and complex enterprise web and mobile applications for businesses worldwide.'
    },
    { property: 'og:title', content: 'ByteStackLab | AI-Powered Software Development Company' },
    {
      property: 'og:description',
      content: 'AI automation, SaaS products, and enterprise web/mobile apps built by ByteStackLab.'
    },
    { property: 'og:image', content: 'https://bytestacklab.com/images/hero-image.png' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<style scoped>
/* Page-specific styles */
</style>
