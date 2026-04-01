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
      // Add small delay for smooth transition
      setTimeout(() => {
        isPageLoading.value = false
      }, 300)
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
