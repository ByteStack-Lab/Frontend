import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export const useStaggerAnimation = (options = {}) => {
  const containerRef = ref(null)
  const animatedItems = ref([])
  let observer = null

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    staggerDelay: 100, // milliseconds
    ...options
  }

  const animateItems = () => {
    if (!containerRef.value) return

    const items = containerRef.value.querySelectorAll('[data-animate-item]')
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate-in')
      }, index * defaultOptions.staggerDelay)
    })
  }

  onMounted(() => {
    if (!containerRef.value) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          nextTick(() => {
            animateItems()
          })
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    observer.observe(containerRef.value)
  })

  onUnmounted(() => {
    if (observer && containerRef.value) {
      observer.unobserve(containerRef.value)
    }
  })

  return {
    containerRef,
    animatedItems
  }
}
