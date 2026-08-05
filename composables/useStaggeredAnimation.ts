import { ref, onMounted, onUnmounted } from 'vue'

interface StaggeredAnimationOptions extends IntersectionObserverInit {
  staggerDelay?: number
}

export const useStaggeredAnimation = (options: StaggeredAnimationOptions = {}) => {
  const isVisible = ref(false)
  const containerRef = ref<Element | null>(null)
  let observer: IntersectionObserver | null = null

  const defaultOptions: StaggeredAnimationOptions & { staggerDelay: number } = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    staggerDelay: 100, // Delay between each item animation (ms)
    ...options
  }

  const animateChildren = () => {
    if (!containerRef.value) return

    const children = containerRef.value.querySelectorAll('[data-animate]')
    children.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('animate-fade-in-up')
        child.classList.remove('opacity-0', 'translate-y-8')
      }, index * defaultOptions.staggerDelay)
    })
  }

  onMounted(() => {
    if (!containerRef.value) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          animateChildren()
          observer!.unobserve(entry.target)
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
    isVisible,
    containerRef
  }
}
