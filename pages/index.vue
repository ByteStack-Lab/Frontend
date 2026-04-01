<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    
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
    
    <!-- Partner Section -->
    <PartnerSection />

    <!-- Testimonials Section -->
    <TestimonialsSection />
    
    <!-- Case Studies Section -->
    <section id="case-studies">
      <CaseStudiesSection />
    </section>
    
    <!-- Way of Building Section -->
    <WayOfBuildingSection />
    
    <!-- Development Approach Section -->
    <DevelopmentApproachSection />
    
    <!-- Tech Stack Section -->
    <TechStackSection />
    
    <!-- How Development Section -->
    <section id="how-it-works">
      <HowDevelopmentSection />
    </section>
    
    <!-- Blog Section -->
    <section id="blog">
      <BlogSection />
    </section>
    
    <!-- Newsletter Section -->
    <section id="hire">
      <NewsletterSection />
    </section>
  </div>
</template>

<script setup>
// Explicit component imports
import HeroSection from '~/components/sections/HeroSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import CounterSection from '~/components/sections/CounterSection.vue'
import PartnerSection from '~/components/sections/PartnerSection.vue'
import CaseStudiesSection from '~/components/sections/CaseStudiesSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import WayOfBuildingSection from '~/components/sections/WayOfBuildingSection.vue'
import DevelopmentApproachSection from '~/components/sections/DevelopmentApproachSection.vue'
import TechStackSection from '~/components/sections/TechStackSection.vue'
import HowDevelopmentSection from '~/components/sections/HowDevelopmentSection.vue'
import BlogSection from '~/components/sections/BlogSection.vue'
import NewsletterSection from '~/components/sections/NewsletterSection.vue'

// Page setup
definePageMeta({
  title: 'Home'
})
</script>

<style scoped>
/* Page-specific styles */
</style> 