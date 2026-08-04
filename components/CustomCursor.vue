<template>
  <div 
    ref="cursor" 
    class="custom-cursor"
    :class="{ 'cursor-hover': isHovering }"
  >
    <div class="cursor-dot"/>
    <div class="cursor-outline"/>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)
const isHovering = ref(false)

let mouseX = 0
let mouseY = 0
let outlineX = 0
let outlineY = 0

const updateCursor = () => {
  if (!cursor.value) return
  
  // Smooth cursor movement
  outlineX += (mouseX - outlineX) * 0.2
  outlineY += (mouseY - outlineY) * 0.2
  
  cursor.value.style.transform = `translate(${outlineX}px, ${outlineY}px)`
  
  requestAnimationFrame(updateCursor)
}

const handleMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

const handleMouseEnter = (e) => {
  if (e.target.matches('button, a, .interactive-card, .interactive-button')) {
    isHovering.value = true
  }
}

const handleMouseLeave = (e) => {
  if (e.target.matches('button, a, .interactive-card, .interactive-button')) {
    isHovering.value = false
  }
}

onMounted(() => {
  // Only show custom cursor on non-touch devices
  if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)
    updateCursor()
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseenter', handleMouseEnter, true)
  document.removeEventListener('mouseleave', handleMouseLeave, true)
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}

.cursor-dot {
  width: 8px;
  height: 8px;
  background: #8b5cf6;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  left: -4px;
  transition: all 0.1s ease;
}

.cursor-outline {
  width: 40px;
  height: 40px;
  border: 2px solid #8b5cf6;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: -20px;
  transition: all 0.3s ease;
  opacity: 0.5;
}

.cursor-hover .cursor-dot {
  transform: scale(2);
  background: #ec4899;
}

.cursor-hover .cursor-outline {
  transform: scale(1.5);
  border-color: #ec4899;
  opacity: 0.8;
}

/* Hide default cursor on interactive elements */
:global(button, a, .interactive-card, .interactive-button) {
  cursor: none !important;
}

/* Show cursor only on non-touch devices */
@media (hover: none) {
  .custom-cursor {
    display: none;
  }
  
  :global(button, a, .interactive-card, .interactive-button) {
    cursor: pointer !important;
  }
}
</style>
