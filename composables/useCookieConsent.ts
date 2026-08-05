type ConsentStatus = 'pending' | 'accepted' | 'declined'

const STORAGE_KEY = 'bsl_cookie_consent'

// Shared across every component via useState — one decision, read everywhere
// (banner visibility + the analytics plugin both depend on this).
export const useCookieConsent = () => {
  const consent = useState<ConsentStatus>('cookie-consent', () => 'pending')

  const load = () => {
    if (!import.meta.client) return
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'accepted' || stored === 'declined') {
      consent.value = stored
    }
  }

  const accept = () => {
    consent.value = 'accepted'
    if (import.meta.client) localStorage.setItem(STORAGE_KEY, 'accepted')
  }

  const decline = () => {
    consent.value = 'declined'
    if (import.meta.client) localStorage.setItem(STORAGE_KEY, 'declined')
  }

  return { consent, load, accept, decline }
}
