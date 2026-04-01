import { ref } from 'vue'

const notification = ref({
  show: false,
  type: 'success', // 'success' | 'error' | 'warning' | 'info'
  title: '',
  message: '',
  duration: 5000
})

let timeoutId = null

export const useNotification = () => {
  const showNotification = (message, type = 'success', title = '', duration = 5000) => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Set default titles based on type if not provided
    let defaultTitle = title
    if (!title) {
      switch (type) {
        case 'success':
          defaultTitle = '🎉 Success!'
          break
        case 'error':
          defaultTitle = '❌ Error!'
          break
        case 'warning':
          defaultTitle = '⚠️ Warning!'
          break
        case 'info':
          defaultTitle = 'ℹ️ Info'
          break
        default:
          defaultTitle = 'Notification'
      }
    }

    notification.value = {
      show: true,
      type,
      title: defaultTitle,
      message,
      duration,
      autoHide: duration > 0
    }

    // Auto hide after duration
    if (duration > 0) {
      timeoutId = setTimeout(() => {
        hideNotification()
      }, duration)
    }
  }

  const hideNotification = () => {
    notification.value.show = false
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  const showSuccess = (message, title = '🎉 Success!', duration = 5000) => {
    showNotification(message, 'success', title, duration)
  }

  const showError = (message, title = '❌ Error!', duration = 5000) => {
    showNotification(message, 'error', title, duration)
  }

  const showWarning = (message, title = '⚠️ Warning!', duration = 5000) => {
    showNotification(message, 'warning', title, duration)
  }

  const showInfo = (message, title = 'ℹ️ Info', duration = 5000) => {
    showNotification(message, 'info', title, duration)
  }

  return {
    notification: readonly(notification),
    showNotification,
    hideNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }
}
