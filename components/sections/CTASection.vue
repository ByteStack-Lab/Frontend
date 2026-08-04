<template>
  <section class="section-padding bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"/>
    <div class="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"/>
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-bounce"/>
    
    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        <!-- Heading -->
        <h2 class="text-4xl lg:text-6xl font-bold text-white leading-tight">
          Ready to build something
          <span class="block">amazing together?</span>
        </h2>
        
        <!-- Subtitle -->
        <p class="text-xl text-primary-100 leading-relaxed max-w-2xl mx-auto">
          Let's discuss your project and discover how our team can help bring your vision to life with cutting-edge technology and exceptional design.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <NuxtLink to="/contact" class="bg-white text-primary-600 px-10 py-5 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group inline-block">
            Start Your Project
            <svg class="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
          
          <a href="tel:+8801812209019" class="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 group inline-block">
            <svg class="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Schedule a Call
          </a>
        </div>
        
        <!-- Contact Info -->
        <div class="pt-8 border-t border-white/20">
          <div class="grid md:grid-cols-3 gap-8 text-primary-100">
            <!-- Email -->
            <div class="flex items-center justify-center space-x-3">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>hello@bytestacklab.com</span>
            </div>
            
            <!-- Phone -->
            <div class="flex items-center justify-center space-x-3">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>+88 01XXXXXXXXX</span>
            </div>
            
            <!-- Response Time -->
            <div class="flex items-center justify-center space-x-3">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
/* Component-specific styles */
</style> 