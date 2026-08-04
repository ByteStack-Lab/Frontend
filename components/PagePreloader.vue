<template>
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-500 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isLoading" 
      class="fixed inset-0 z-[99999] bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center"
    >
      <!-- Main preloader content -->
      <div class="text-center">
        <!-- Logo/Brand Name with wave reveal effect -->
        <div class="mb-8 relative">
          <h1 class="text-4xl md:text-5xl font-bold relative overflow-hidden">
            <!-- Main text with solid color for better visibility -->
            <span class="relative z-10 inline-block text-[#3533cd] font-extrabold drop-shadow-lg animate-wave-reveal">
              <span class="inline-block animate-letter-1 hover:text-[#1e1b69] transition-colors duration-300">B</span>
              <span class="inline-block animate-letter-2 hover:text-[#1e1b69] transition-colors duration-300">y</span>
              <span class="inline-block animate-letter-3 hover:text-[#1e1b69] transition-colors duration-300">t</span>
              <span class="inline-block animate-letter-4 hover:text-[#1e1b69] transition-colors duration-300">e</span>
              <span class="inline-block animate-letter-5 hover:text-[#1e1b69] transition-colors duration-300">S</span>
              <span class="inline-block animate-letter-6 hover:text-[#1e1b69] transition-colors duration-300">t</span>
              <span class="inline-block animate-letter-7 hover:text-[#1e1b69] transition-colors duration-300">a</span>
              <span class="inline-block animate-letter-8 hover:text-[#1e1b69] transition-colors duration-300">c</span>
              <span class="inline-block animate-letter-9 hover:text-[#1e1b69] transition-colors duration-300">k</span>
              <span class="inline-block animate-letter-10 hover:text-[#1e1b69] transition-colors duration-300">L</span>
              <span class="inline-block animate-letter-11 hover:text-[#1e1b69] transition-colors duration-300">a</span>
              <span class="inline-block animate-letter-12 hover:text-[#1e1b69] transition-colors duration-300">b</span>
            </span>
            
            <!-- Enhanced shimmer overlay for visibility -->
            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 animate-shimmer opacity-80"/>
            
            <!-- Shadow/outline effect for better visibility -->
            <span class="absolute inset-0 text-[#3533cd]/30 font-extrabold transform translate-x-1 translate-y-1 animate-pulse-scale">
              <span class="inline-block animate-letter-1">B</span>
              <span class="inline-block animate-letter-2">y</span>
              <span class="inline-block animate-letter-3">t</span>
              <span class="inline-block animate-letter-4">e</span>
              <span class="inline-block animate-letter-5">S</span>
              <span class="inline-block animate-letter-6">t</span>
              <span class="inline-block animate-letter-7">a</span>
              <span class="inline-block animate-letter-8">c</span>
              <span class="inline-block animate-letter-9">k</span>
              <span class="inline-block animate-letter-10">L</span>
              <span class="inline-block animate-letter-11">a</span>
              <span class="inline-block animate-letter-12">b</span>
            </span>
          </h1>
          
          <!-- Animated particles around text -->
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute w-2 h-2 bg-[#3533cd] rounded-full animate-particle-1 opacity-80"/>
            <div class="absolute w-1.5 h-1.5 bg-[#1e1b69] rounded-full animate-particle-2 opacity-70"/>
            <div class="absolute w-1 h-1 bg-purple-500 rounded-full animate-particle-3 opacity-60"/>
            <div class="absolute w-1.5 h-1.5 bg-blue-500 rounded-full animate-particle-4 opacity-75"/>
          </div>
          
          <!-- Enhanced progress bar with better visibility -->
          <div class="w-full h-1 bg-gray-300 mx-auto mt-6 rounded-full overflow-hidden shadow-inner">
            <div class="h-full bg-gradient-to-r from-[#3533cd] to-[#1e1b69] animate-progress-fill rounded-full shadow-sm"/>
          </div>
        </div>
        
        <!-- Loading dots -->
        <div class="flex justify-center space-x-2 mb-6">
          <div class="w-3 h-3 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full animate-bounce-1"/>
          <div class="w-3 h-3 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full animate-bounce-2"/>
          <div class="w-3 h-3 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full animate-bounce-3"/>
        </div>
        
        <!-- Loading text -->
        <p class="text-gray-600 text-sm font-medium animate-fade-in-out">Loading...</p>
      </div>
      
      <!-- Background animated logo elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Large floating logo -->
        <div class="absolute left-1/4 top-1/4 w-32 h-32 opacity-30 animate-logo-float-1">
          <img 
            src="/images/Bytestack.svg" 
            alt="ByteStackLab Logo" 
            class="w-full h-full object-contain filter blur-[1px]"
          >
        </div>
        
        <!-- Medium floating logo -->
        <div class="absolute right-1/4 bottom-1/4 w-24 h-24 opacity-35 animate-logo-float-2">
          <img 
            src="/images/Bytestack.svg" 
            alt="ByteStackLab Logo" 
            class="w-full h-full object-contain filter blur-[1px]"
          >
        </div>
        
        <!-- Small floating logo -->
        <div class="absolute left-1/3 bottom-1/3 w-16 h-16 opacity-40 animate-logo-float-3">
          <img 
            src="/images/Bytestack.svg" 
            alt="ByteStackLab Logo" 
            class="w-full h-full object-contain filter blur-[0.5px]"
          >
        </div>
        
        <!-- Extra small floating logos -->
        <div class="absolute right-1/3 top-1/3 w-12 h-12 opacity-45 animate-logo-float-4">
          <img 
            src="/images/Bytestack.svg" 
            alt="ByteStackLab Logo" 
            class="w-full h-full object-contain filter blur-[0.5px]"
          >
        </div>
        
        <div class="absolute left-1/5 top-3/4 w-20 h-20 opacity-32 animate-logo-float-5">
          <img 
            src="/images/Bytestack.svg" 
            alt="ByteStackLab Logo" 
            class="w-full h-full object-contain filter blur-[1px]"
          >
        </div>
        
        <div class="absolute right-1/5 top-1/5 w-10 h-10 opacity-50 animate-logo-float-6">
          <img 
            src="/images/Bytestack.svg" 
            alt="ByteStackLab Logo" 
            class="w-full h-full object-contain filter blur-[0.5px]"
          >
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const isLoading = ref(false)

// Watch for show prop changes
watch(() => props.show, (newValue) => {
  isLoading.value = newValue
}, { immediate: true })
</script>

<style scoped>
/* Wave reveal animation for main text */
@keyframes wave-reveal {
  0% {
    transform: translateY(50px) scale(0.8);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.animate-wave-reveal {
  animation: wave-reveal 1s ease-out forwards;
  text-shadow: 2px 2px 4px rgba(53, 51, 205, 0.3);
}

/* Individual letter animations - staggered wave effect */
.animate-letter-1 { 
  animation: wave-reveal 0.6s ease-out 0.1s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-2 { 
  animation: wave-reveal 0.6s ease-out 0.15s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-3 { 
  animation: wave-reveal 0.6s ease-out 0.2s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-4 { 
  animation: wave-reveal 0.6s ease-out 0.25s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-5 { 
  animation: wave-reveal 0.6s ease-out 0.3s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-6 { 
  animation: wave-reveal 0.6s ease-out 0.35s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-7 { 
  animation: wave-reveal 0.6s ease-out 0.4s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-8 { 
  animation: wave-reveal 0.6s ease-out 0.45s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-9 { 
  animation: wave-reveal 0.6s ease-out 0.5s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-10 { 
  animation: wave-reveal 0.6s ease-out 0.55s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-11 { 
  animation: wave-reveal 0.6s ease-out 0.6s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}
.animate-letter-12 { 
  animation: wave-reveal 0.6s ease-out 0.65s both; 
  text-shadow: 1px 1px 3px rgba(53, 51, 205, 0.4);
}

/* Shimmer effect */
@keyframes shimmer {
  0% {
    transform: translateX(-100%) skewX(-12deg);
  }
  100% {
    transform: translateX(200%) skewX(-12deg);
  }
}

.animate-shimmer {
  animation: shimmer 2s ease-in-out infinite;
  animation-delay: 1s;
}

/* Pulse scale effect for background text */
@keyframes pulse-scale {
  0%, 100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.3;
  }
}

.animate-pulse-scale {
  animation: pulse-scale 3s ease-in-out infinite;
}

/* Floating particles around text */
@keyframes particle-1 {
  0%, 100% {
    transform: translate(20px, -10px) rotate(0deg);
    opacity: 0.8;
  }
  50% {
    transform: translate(-15px, -25px) rotate(180deg);
    opacity: 0.3;
  }
}

@keyframes particle-2 {
  0%, 100% {
    transform: translate(-25px, 15px) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translate(30px, -20px) rotate(-180deg);
    opacity: 0.9;
  }
}

@keyframes particle-3 {
  0%, 100% {
    transform: translate(35px, 20px) rotate(0deg);
    opacity: 0.4;
  }
  50% {
    transform: translate(-20px, 30px) rotate(270deg);
    opacity: 0.7;
  }
}

@keyframes particle-4 {
  0%, 100% {
    transform: translate(-30px, -15px) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    transform: translate(25px, 25px) rotate(-270deg);
    opacity: 0.8;
  }
}

.animate-particle-1 {
  animation: particle-1 4s ease-in-out infinite;
  top: 20%;
  right: 10%;
}

.animate-particle-2 {
  animation: particle-2 3.5s ease-in-out infinite;
  bottom: 20%;
  left: 15%;
}

.animate-particle-3 {
  animation: particle-3 4.5s ease-in-out infinite;
  top: 60%;
  right: 20%;
}

.animate-particle-4 {
  animation: particle-4 3.8s ease-in-out infinite;
  top: 30%;
  left: 10%;
}

/* Progress bar animation */
@keyframes progress-fill {
  0% {
    width: 0%;
    transform: translateX(-100%);
  }
  50% {
    width: 70%;
    transform: translateX(0%);
  }
  100% {
    width: 100%;
    transform: translateX(0%);
  }
}

.animate-progress-fill {
  animation: progress-fill 3s ease-in-out infinite;
}

/* Enhanced bounce animations for dots */
@keyframes bounce-dot {
  0%, 80%, 100% {
    transform: translateY(0) scale(1) rotate(0deg);
  }
  40% {
    transform: translateY(-12px) scale(1.2) rotate(180deg);
  }
}

.animate-bounce-1 {
  animation: bounce-dot 1.6s infinite ease-in-out;
  animation-delay: 0s;
}

.animate-bounce-2 {
  animation: bounce-dot 1.6s infinite ease-in-out;
  animation-delay: 0.2s;
}

.animate-bounce-3 {
  animation: bounce-dot 1.6s infinite ease-in-out;
  animation-delay: 0.4s;
}

/* Fade in out animation for loading text */
@keyframes fade-in-out {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.02) rotate(1deg);
  }
}

.animate-fade-in-out {
  animation: fade-in-out 2.5s ease-in-out infinite;
}

/* Enhanced floating background elements - Logo animations */
@keyframes logo-float-1 {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
    opacity: 0.3;
  }
  33% {
    transform: translateY(-30px) translateX(20px) rotate(45deg) scale(1.1);
    opacity: 0.4;
  }
  66% {
    transform: translateY(20px) translateX(-15px) rotate(-30deg) scale(0.9);
    opacity: 0.25;
  }
}

@keyframes logo-float-2 {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
    opacity: 0.35;
  }
  33% {
    transform: translateY(25px) translateX(-20px) rotate(-60deg) scale(1.2);
    opacity: 0.45;
  }
  66% {
    transform: translateY(-15px) translateX(25px) rotate(90deg) scale(0.8);
    opacity: 0.3;
  }
}

@keyframes logo-float-3 {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-20px) translateX(15px) rotate(180deg) scale(1.15);
    opacity: 0.5;
  }
}

@keyframes logo-float-4 {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
    opacity: 0.45;
  }
  25% {
    transform: translateY(-10px) translateX(-12px) rotate(30deg) scale(1.1);
    opacity: 0.55;
  }
  75% {
    transform: translateY(15px) translateX(10px) rotate(-45deg) scale(0.9);
    opacity: 0.4;
  }
}

@keyframes logo-float-5 {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
    opacity: 0.32;
  }
  40% {
    transform: translateY(-25px) translateX(18px) rotate(120deg) scale(1.3);
    opacity: 0.42;
  }
  80% {
    transform: translateY(10px) translateX(-20px) rotate(-90deg) scale(0.7);
    opacity: 0.28;
  }
}

@keyframes logo-float-6 {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-12px) translateX(8px) rotate(270deg) scale(1.4);
    opacity: 0.6;
  }
}

.animate-logo-float-1 {
  animation: logo-float-1 12s ease-in-out infinite;
}

.animate-logo-float-2 {
  animation: logo-float-2 15s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-logo-float-3 {
  animation: logo-float-3 10s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-logo-float-4 {
  animation: logo-float-4 8s ease-in-out infinite;
  animation-delay: 3s;
}

.animate-logo-float-5 {
  animation: logo-float-5 14s ease-in-out infinite;
  animation-delay: 0.5s;
}

.animate-logo-float-6 {
  animation: logo-float-6 6s ease-in-out infinite;
  animation-delay: 4s;
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
    opacity: 0.6;
  }
  33% {
    transform: translateY(-25px) translateX(15px) rotate(120deg) scale(1.2);
    opacity: 0.8;
  }
  66% {
    transform: translateY(15px) translateX(-20px) rotate(240deg) scale(0.8);
    opacity: 0.4;
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
    opacity: 0.5;
  }
  33% {
    transform: translateY(20px) translateX(-25px) rotate(-120deg) scale(1.3);
    opacity: 0.9;
  }
  66% {
    transform: translateY(-15px) translateX(20px) rotate(-240deg) scale(0.7);
    opacity: 0.3;
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) translateX(20px) rotate(180deg) scale(1.15);
    opacity: 0.9;
  }
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 12s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-reverse {
  animation: float-reverse 11s ease-in-out infinite;
  animation-delay: 1s;
}

/* Prevent scrolling when preloader is active */
.preloader-active {
  overflow: hidden;
  height: 100vh;
}
</style>
