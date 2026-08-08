import { ref, readonly } from 'vue'

const isPageLoading = ref(false)
const loadingQueue = ref(0)

export const usePageLoader = () => {
  const startLoading = () => {
    loadingQueue.value++
    isPageLoading.value = true
  }

  const stopLoading = () => {
    loadingQueue.value = Math.max(0, loadingQueue.value - 1)
    if (loadingQueue.value === 0) {
      // Hide immediately — PagePreloader already wraps itself in a <Transition>
      // with a 500ms leave animation, so the fade-out is handled there. The
      // extra timer that used to live here just held an opaque overlay over
      // content that was already rendered underneath it.
      isPageLoading.value = false
    }
  }

  const resetLoading = () => {
    loadingQueue.value = 0
    isPageLoading.value = false
  }

  return {
    isPageLoading: readonly(isPageLoading),
    startLoading,
    stopLoading,
    resetLoading
  }
}
