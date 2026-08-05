import { ref, readonly } from 'vue'

export type NotificationType = 'success' | 'error' | 'warning' | 'info'

interface NotificationState {
  show: boolean
  type: NotificationType
  title: string
  message: string
  duration: number
  autoHide?: boolean
}

const notification = ref<NotificationState>({
  show: false,
  type: 'success',
  title: '',
  message: '',
  duration: 5000
})

let timeoutId: ReturnType<typeof setTimeout> | null = null

export const useNotification = () => {
  const showNotification = (message: string, type: NotificationType = 'success', title = '', duration = 5000) => {
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

  const showSuccess = (message: string, title = '🎉 Success!', duration = 5000) => {
    showNotification(message, 'success', title, duration)
  }

  const showError = (message: string, title = '❌ Error!', duration = 5000) => {
    showNotification(message, 'error', title, duration)
  }

  const showWarning = (message: string, title = '⚠️ Warning!', duration = 5000) => {
    showNotification(message, 'warning', title, duration)
  }

  const showInfo = (message: string, title = 'ℹ️ Info', duration = 5000) => {
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
