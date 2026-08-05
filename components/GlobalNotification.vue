<template>
  <Transition name="notification" mode="out-in">
    <div 
      v-if="notification.show"
      class="fixed top-6 right-6 z-[9999] max-w-sm w-full"
    >
      <div 
        :class="[
          'rounded-xl shadow-2xl p-5 border backdrop-blur-sm',
          notificationClasses
        ]"
      >
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <!-- Success Icon with animated background -->
            <div 
              v-if="notification.type === 'success'" 
              class="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center shadow-lg animate-pulse-success"
            >
              <svg 
                class="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2.5" 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <!-- Error Icon with animated background -->
            <div 
              v-else-if="notification.type === 'error'" 
              class="w-10 h-10 rounded-full bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center shadow-lg animate-pulse-error"
            >
              <svg 
                class="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2.5" 
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <!-- Warning Icon with animated background -->
            <div 
              v-else-if="notification.type === 'warning'" 
              class="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg animate-pulse-warning"
            >
              <svg 
                class="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2.5" 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            <!-- Info Icon with animated background -->
            <div 
              v-else-if="notification.type === 'info'" 
              class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center shadow-lg animate-pulse-info"
            >
              <svg 
                class="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2.5" 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <!-- Default Icon with animated background -->
            <div 
              v-else 
              class="w-10 h-10 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center shadow-lg animate-pulse-default"
            >
              <svg 
                class="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2.5" 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div class="ml-4 flex-1">
            <div class="flex items-center justify-between">
              <h3 
                :class="[
                  'text-base font-semibold leading-tight',
                  titleClasses
                ]"
              >
                {{ notification.title }}
              </h3>
              <button 
                :class="[
                  'ml-3 inline-flex rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 hover:scale-110',
                  closeButtonClasses
                ]"
                @click="hideNotification"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p 
              v-if="notification.message"
              :class="[
                'mt-1 text-sm leading-relaxed',
                messageClasses
              ]"
            >
              {{ notification.message }}
            </p>
            
            <!-- Progress bar for auto-hide -->
            <div 
              v-if="notification.autoHide !== false"
              class="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden"
            >
              <div 
                :class="[
                  'h-full rounded-full transition-all duration-100 ease-linear progress-bar',
                  progressBarClasses
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'

const { notification, hideNotification } = useNotification()

// Dynamic classes based on notification type
const notificationClasses = computed(() => {
  switch (notification.value.type) {
    case 'success':
      return 'bg-white/95 border-green-200 shadow-green-100/50'
    case 'error':
      return 'bg-white/95 border-red-200 shadow-red-100/50'
    case 'warning':
      return 'bg-white/95 border-yellow-200 shadow-yellow-100/50'
    case 'info':
      return 'bg-white/95 border-blue-200 shadow-blue-100/50'
    default:
      return 'bg-white/95 border-gray-200 shadow-gray-100/50'
  }
})

const titleClasses = computed(() => {
  switch (notification.value.type) {
    case 'success':
      return 'text-green-900'
    case 'error':
      return 'text-red-900'
    case 'warning':
      return 'text-yellow-900'
    case 'info':
      return 'text-blue-900'
    default:
      return 'text-gray-900'
  }
})

const messageClasses = computed(() => {
  switch (notification.value.type) {
    case 'success':
      return 'text-green-700'
    case 'error':
      return 'text-red-700'
    case 'warning':
      return 'text-yellow-700'
    case 'info':
      return 'text-blue-700'
    default:
      return 'text-gray-700'
  }
})

const closeButtonClasses = computed(() => {
  switch (notification.value.type) {
    case 'success':
      return 'text-green-500 hover:bg-green-50 focus:ring-green-500'
    case 'error':
      return 'text-red-500 hover:bg-red-50 focus:ring-red-500'
    case 'warning':
      return 'text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-500'
    case 'info':
      return 'text-blue-500 hover:bg-blue-50 focus:ring-blue-500'
    default:
      return 'text-gray-500 hover:bg-gray-50 focus:ring-gray-500'
  }
})

const progressBarClasses = computed(() => {
  switch (notification.value.type) {
    case 'success':
      return 'bg-gradient-to-r from-green-400 to-green-500'
    case 'error':
      return 'bg-gradient-to-r from-red-400 to-red-500'
    case 'warning':
      return 'bg-gradient-to-r from-yellow-400 to-yellow-500'
    case 'info':
      return 'bg-gradient-to-r from-blue-400 to-blue-500'
    default:
      return 'bg-gradient-to-r from-gray-400 to-gray-500'
  }
})
</script>

<style scoped>
/* Enhanced notification animations */
.notification-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.notification-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%) translateY(-20px) scale(0.9);
  filter: blur(4px);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%) translateY(-10px) scale(0.95);
  filter: blur(2px);
}

/* Icon pulse animations */
@keyframes pulse-success {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
  }
}

@keyframes pulse-error {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
  }
}

@keyframes pulse-warning {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(245, 158, 11, 0);
  }
}

@keyframes pulse-info {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
}

@keyframes pulse-default {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(107, 114, 128, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(107, 114, 128, 0);
  }
}

.animate-pulse-success {
  animation: pulse-success 2s infinite;
}

.animate-pulse-error {
  animation: pulse-error 2s infinite;
}

.animate-pulse-warning {
  animation: pulse-warning 2s infinite;
}

.animate-pulse-info {
  animation: pulse-info 2s infinite;
}

.animate-pulse-default {
  animation: pulse-default 2s infinite;
}

/* Progress bar animation */
.progress-bar {
  animation: progress 5s linear forwards;
  width: 0%;
}

@keyframes progress {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

/* Backdrop blur effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Hover effects */
.notification-enter-active:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Enhanced shadow effects */
.shadow-green-100\/50 {
  box-shadow: 0 10px 25px -5px rgba(34, 197, 94, 0.1), 0 10px 10px -5px rgba(34, 197, 94, 0.04);
}

.shadow-red-100\/50 {
  box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.1), 0 10px 10px -5px rgba(239, 68, 68, 0.04);
}

.shadow-yellow-100\/50 {
  box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.1), 0 10px 10px -5px rgba(245, 158, 11, 0.04);
}

.shadow-blue-100\/50 {
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04);
}

.shadow-gray-100\/50 {
  box-shadow: 0 10px 25px -5px rgba(107, 114, 128, 0.1), 0 10px 10px -5px rgba(107, 114, 128, 0.04);
}
</style>
