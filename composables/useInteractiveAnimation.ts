import { ref, onMounted, onUnmounted } from 'vue'

export const useInteractiveAnimation = () => {
  const elementRef = ref<HTMLElement | null>(null)
  
  // Mouse position tracking
  const mouseX = ref(0)
  const mouseY = ref(0)
  
  // Hover state
  const isHovered = ref(false)
  
  // Tilt effect for cards
  const useTiltEffect = (intensity = 15) => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.value) return
      
      const rect = elementRef.value.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2)
      const deltaY = (e.clientY - centerY) / (rect.height / 2)
      
      const rotateX = deltaY * intensity
      const rotateY = deltaX * intensity
      
      elementRef.value.style.transform = `
        perspective(1000px) 
        rotateX(${-rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale3d(1.05, 1.05, 1.05)
      `
    }
    
    const handleMouseLeave = () => {
      if (elementRef.value) {
        elementRef.value.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
      }
      isHovered.value = false
    }
    
    const handleMouseEnter = () => {
      isHovered.value = true
    }
    
    onMounted(() => {
      if (elementRef.value) {
        elementRef.value.style.transition = 'transform 0.2s ease-out'
        elementRef.value.addEventListener('mousemove', handleMouseMove)
        elementRef.value.addEventListener('mouseleave', handleMouseLeave)
        elementRef.value.addEventListener('mouseenter', handleMouseEnter)
      }
    })
    
    onUnmounted(() => {
      if (elementRef.value) {
        elementRef.value.removeEventListener('mousemove', handleMouseMove)
        elementRef.value.removeEventListener('mouseleave', handleMouseLeave)
        elementRef.value.removeEventListener('mouseenter', handleMouseEnter)
      }
    })
  }
  
  // Parallax effect
  const useParallaxEffect = (speed = 0.5) => {
    const handleScroll = () => {
      if (!elementRef.value) return
      
      const _rect = elementRef.value.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const parallax = scrolled * speed
      
      elementRef.value.style.transform = `translateY(${parallax}px)`
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }
  
  // Magnetic effect for buttons
  const useMagneticEffect = (strength = 0.3) => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.value) return
      
      const rect = elementRef.value.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength
      
      elementRef.value.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    }
    
    const handleMouseLeave = () => {
      if (elementRef.value) {
        elementRef.value.style.transform = 'translate(0px, 0px)'
      }
    }
    
    onMounted(() => {
      if (elementRef.value) {
        elementRef.value.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        elementRef.value.addEventListener('mousemove', handleMouseMove)
        elementRef.value.addEventListener('mouseleave', handleMouseLeave)
      }
    })
    
    onUnmounted(() => {
      if (elementRef.value) {
        elementRef.value.removeEventListener('mousemove', handleMouseMove)
        elementRef.value.removeEventListener('mouseleave', handleMouseLeave)
      }
    })
  }
  
  return {
    elementRef,
    mouseX,
    mouseY,
    isHovered,
    useTiltEffect,
    useParallaxEffect,
    useMagneticEffect
  }
}
