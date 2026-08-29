import type { NitroConfig } from 'nitropack'

/**
 * Restores the `nitro` key on NuxtConfig for `npm run typecheck`.
 *
 * `npx vue-tsc --noEmit` failed with "'nitro' does not exist in type
 * InputConfig<NuxtConfig, ConfigLayerMeta>" on a perfectly valid Nuxt 3
 * config. Cause: npm hoists @nuxt/schema@4.5.1 to the top of node_modules
 * (required by @nuxt/image@2, @nuxt/test-utils@4 and nuxt-site-config — all
 * Nuxt-4-era packages), while this app runs nuxt@3.18.1 against its own nested
 * @nuxt/schema@3.18.1. Nuxt's generated .nuxt/tsconfig.json maps the
 * "@nuxt/schema" path to the hoisted 4.x copy, and that version's NuxtConfig
 * omits `nitro`, expecting a Nuxt 4 module to declare it back in.
 *
 * Interface merging is used rather than a tsconfig `paths` override because
 * `paths` does not merge across `extends` — redeclaring it wholesale would
 * drop every alias Nuxt generates (`~/*`, `#imports`, …) and break far more
 * than it fixed.
 *
 * Type-only; nothing about the build or the shipped bundle changes. Delete
 * this file once the app is on Nuxt 4 and the two versions line up.
 */
declare module '@nuxt/schema' {
  interface NuxtConfig {
    nitro?: NitroConfig
    routeRules?: NitroConfig['routeRules']
  }
}

export {}
