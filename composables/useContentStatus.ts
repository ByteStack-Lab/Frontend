/**
 * Sets the SSR response status for an API-backed detail page.
 *
 * Detail pages previously did `if (!data) setResponseStatus(404)`. That
 * conflates two very different situations: a slug that genuinely does not
 * exist, and the API being unreachable or throwing a 5xx. Verified locally by
 * stopping the Laravel backend — every /blog/*, /services/*, /products/*
 * URL on the site then answered `404`, which tells Google those pages are
 * permanently gone and invites de-indexing during what is really a few
 * minutes of backend downtime.
 *
 * `503` is the correct answer for an upstream failure: crawlers back off and
 * retry instead of dropping the URL, and `Retry-After` tells them roughly when.
 */

/** Digs the upstream HTTP status out of an ofetch FetchError or a NuxtError wrapping one. */
export const upstreamStatus = (error: unknown, depth = 0): number | undefined => {
  if (!error || typeof error !== 'object' || depth > 3) return undefined

  const candidate = error as {
    statusCode?: number
    status?: number
    response?: { status?: number }
    cause?: unknown
  }

  const direct = candidate.statusCode ?? candidate.status ?? candidate.response?.status
  if (typeof direct === 'number' && direct >= 400) return direct

  // useAsyncData re-wraps the original FetchError, keeping it on `cause`.
  return upstreamStatus(candidate.cause, depth + 1)
}

/**
 * @param found  whether the page actually has a record to render
 * @param error  the error the fetch failed with, if any. Pages that catch the
 *               error inside their useAsyncData handler can't put a raw Error
 *               in the payload (it wouldn't survive serialisation), so they
 *               pass the upstream status code as a number instead — `0` for a
 *               failure that never got a status, e.g. a refused connection.
 */
export const useContentStatus = (found: boolean, error?: unknown) => {
  if (!import.meta.server || found) return

  const failed = error !== undefined && error !== null
  const status = typeof error === 'number' ? error : upstreamStatus(error)

  // A 404 from the API means the slug really is gone. Anything else — a 5xx,
  // a timeout, a refused connection (no status at all) — is our outage, not a
  // missing page. No error and no data is a genuine miss too: the API answered
  // fine with nothing in it.
  if (failed && status !== 404) {
    setResponseStatus(503)
    useRequestEvent()?.node?.res?.setHeader?.('Retry-After', '120')
    return
  }

  setResponseStatus(404)
}
