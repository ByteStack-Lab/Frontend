import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useNotification } from '~/composables/useNotification'

describe('useNotification', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    // The underlying `notification` ref is module-level shared state, so
    // reset it to a known baseline before every test.
    const { hideNotification } = useNotification()
    hideNotification()
  })

  it('starts hidden', () => {
    const { notification } = useNotification()
    expect(notification.value.show).toBe(false)
  })

  it('shows a success notification with the default title', () => {
    const { showSuccess, notification } = useNotification()

    showSuccess('It worked')

    expect(notification.value.show).toBe(true)
    expect(notification.value.type).toBe('success')
    expect(notification.value.title).toBe('🎉 Success!')
    expect(notification.value.message).toBe('It worked')
  })

  it('shows an error notification with the default title', () => {
    const { showError, notification } = useNotification()

    showError('It broke')

    expect(notification.value.type).toBe('error')
    expect(notification.value.title).toBe('❌ Error!')
    expect(notification.value.message).toBe('It broke')
  })

  it('respects a custom title when provided', () => {
    const { showWarning, notification } = useNotification()

    showWarning('Careful now', 'Heads up')

    expect(notification.value.title).toBe('Heads up')
  })

  it('hides the notification manually', () => {
    const { showInfo, hideNotification, notification } = useNotification()

    showInfo('Some info')
    expect(notification.value.show).toBe(true)

    hideNotification()
    expect(notification.value.show).toBe(false)
  })

  it('auto-hides after the given duration', () => {
    const { showSuccess, notification } = useNotification()

    showSuccess('Auto hide me', undefined, 1000)
    expect(notification.value.show).toBe(true)

    vi.advanceTimersByTime(1000)
    expect(notification.value.show).toBe(false)
  })

  it('does not auto-hide when duration is 0', () => {
    const { showSuccess, notification } = useNotification()

    showSuccess('Stay visible', undefined, 0)
    expect(notification.value.show).toBe(true)

    vi.advanceTimersByTime(10000)
    expect(notification.value.show).toBe(true)
  })
})
