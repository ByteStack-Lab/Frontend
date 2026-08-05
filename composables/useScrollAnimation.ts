import { ref, onMounted, onUnmounted } from 'vue'

export const useScrollAnimation = (options: IntersectionObserverInit = {}) => {
  const isVisible = ref(false)
  const elementRef = ref<Element | null>(null)
  let observer: IntersectionObserver | null = null

  const defaultOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px', // Trigger slightly before element comes into view
    ...options
  }

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // Once animated, stop observing to prevent re-animation
          observer!.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
    }
  })

  return {
    isVisible,
    elementRef
  }
}
