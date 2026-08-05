import { describe, it, expect, beforeEach, vi } from 'vitest'
import { usePageLoader } from '~/composables/usePageLoader'

describe('usePageLoader', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    // `isPageLoading` / `loadingQueue` are module-level shared state.
    const { resetLoading } = usePageLoader()
    resetLoading()
  })

  it('starts not loading', () => {
    const { isPageLoading } = usePageLoader()
    expect(isPageLoading.value).toBe(false)
  })

  it('is loading while at least one request is in flight', () => {
    const { startLoading, isPageLoading } = usePageLoader()

    startLoading()
    expect(isPageLoading.value).toBe(true)
  })

  it('stays loading until every concurrent request finishes', () => {
    const { startLoading, stopLoading, isPageLoading } = usePageLoader()

    startLoading()
    startLoading()
    stopLoading()
    // One of two started requests is still in flight.
    expect(isPageLoading.value).toBe(true)

    stopLoading()
    vi.advanceTimersByTime(300)
    expect(isPageLoading.value).toBe(false)
  })

  it('does not go negative when stopLoading is called more than startLoading', () => {
    const { startLoading, stopLoading, isPageLoading } = usePageLoader()

    startLoading()
    stopLoading()
    stopLoading()
    stopLoading()

    vi.advanceTimersByTime(300)
    expect(isPageLoading.value).toBe(false)
  })

  it('resetLoading immediately clears the queue and loading state', () => {
    const { startLoading, resetLoading, isPageLoading } = usePageLoader()

    startLoading()
    startLoading()
    expect(isPageLoading.value).toBe(true)

    resetLoading()
    expect(isPageLoading.value).toBe(false)
  })
})
