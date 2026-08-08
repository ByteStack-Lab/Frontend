# ByteStackLab Frontend — CLAUDE.md

> **Status as of 2026-08-09:** most of the "Phase 1" and "Phase 3 technical" items below (SEO fix, sitemap, JSON-LD, GA4, TypeScript migration, `@nuxt/image`, hero messaging/badges) are now **done** — this doc was not fully rewritten, so read the ✅/status notes inline rather than trusting a heading like "Fix ❌" at face value. The full-stack root `CLAUDE.md` (one directory up) has a more current, evidence-checked status table for both repos — check there first if you need an accurate picture fast. **Bilingual frontend is explicitly off the roadmap** — the user confirmed 2026-08-09 the site stays English-only; the backend `bn` support mentioned below will not be consumed.

## Project Overview

**ByteStackLab** software company portfolio + service website.
**Stack:** Nuxt 3 + Vue 3 + Tailwind CSS v4 + TypeScript (partial)
**Deploy:** Vercel → [bytestacklab.com](https://bytestacklab.com)
**API:** Laravel (PHP 8.2, Filament admin) backend at `https://api.bytestacklab.com/api` — source lives one directory up at `../ByteStackLab-Backend` (sibling repo, not Django as previously documented here). Routes defined in `routes/api.php`; models include Service, CaseStudy, Blog, Partner, Testimonial, CareerJob, Product, Team, Newsletter, Contact.
**Brand color:** `#3533cd` (primary indigo/blue), `#1e1b69` (dark)

---

## Architecture

```
pages/              → Nuxt file-based routing
components/
  sections/         → Homepage section components
  NavBar.vue        → Fixed navbar + mobile bottom tab bar
  FooterSection.vue → Global footer
composables/        → All .ts as of 2026-08-09 (was plain .js)
  useApi.ts         → All API calls (services, blogs, case studies, etc.)
  useScrollAnimation.ts
  useStaggeredAnimation.ts
  useNotification.ts
  usePageLoader.ts
  useCookieConsent.ts
  useBreadcrumbSchema.ts
  useInteractiveAnimation.ts
types/api.ts        → API response interfaces
utils/
  sanitizeHtml.js    → Strips <script>/event-handlers/javascript: URLs before any v-html
  motion.js          → prefers-reduced-motion helpers (added 2026-08-09)
assets/css/main.css → Global styles
public/images/      → Static assets — 1.6 MB total as of 2026-08-09 (was 20 MB; see P1/P3 in root CLAUDE.md)
nuxt.config.ts      → App config, Google Fonts, runtimeConfig, image.domains (R2 CDN allowlist), sitemap
```

---

## Completed Features (Done ✅)

### Pages
- `/` — Home (13 sections)
- `/about` — About page with team/vision
- `/contact` — Contact form
- `/services` — Services listing (API-driven)
- `/services/[slug]` — Service detail
- `/blog` — Blog listing (API-driven)
- `/blog/[slug]` — Blog post detail
- `/case-studies` — Case studies listing
- `/case-studies/[slug]` — Case study detail
- `/products` — Products listing
- `/products/[slug]` — Product detail
- `/careers` — Job listings
- `/careers/[slug]` — Job detail
- `/privacy-policy` — Privacy policy
- `/terms-conditions` — Terms of service

### Homepage Sections (order — updated 2026-08-09)
1. HeroSection — mobile-visible `HeroTerminal` now (was desktop-only), specialty chips, "Book a Free Consultation" CTA
2. **TrustStripSection** — new: compact above-the-fold partner-logo row, distinct from PartnerSection's fuller treatment further down
3. ServicesSection — API carousel, drag support, auto-slide
4. AboutSection
5. CounterSection — outcome metrics (weeks-to-release, products shipped, clients served, repeat-client rate) — **values are realistic placeholders pending the user's real figures**, replacing the old vanity metrics (years/projects/team/clients)
6. PartnerSection — "Trusted By" heading, partner logos
7. TestimonialsSection — avatar carousel, API + fallback
8. CaseStudiesSection — API-driven, alternating layout
9. DevelopmentApproachSection — reframed "What You Get When You Build With ByteStackLab" (was "...Process & Methodology")
10. HowDevelopmentSection — reframed "How We Work — From Kickoff To Launch"
11. TechStackSection — categorized (Frontend/Backend/Mobile/DB/CMS/Cloud/DevOps)
12. BlogSection — reframed "From Our Engineering Blog"
13. **CTASection** — new: closing CTA ("Have a project in mind? Let's scope it together"), wired in 2026-08-09 — the component existed in the repo but was never rendered anywhere before this
14. NewsletterSection

`WayOfBuildingSection` was dropped from the homepage (it covered the same ground as items 9/10, so the homepage said the same thing three times) but the file remains for reuse on `/about`.

### API Coverage (useApi.ts)
- Services (all, featured, navbar, categories, single)
- Case Studies (all, featured, filters, single)
- Blogs (all, featured, recent, popular, related, categories, single)
- Partners (all, featured, by type)
- Testimonials (all, featured, by rating, stats)
- Newsletter (subscribe, unsubscribe, stats)
- Contact form (POST)

### UI/UX
- ~~Custom cursor (`CustomCursor.vue`)~~ — **deleted 2026-08-09**, was imported nowhere in the app
- Page preloader (`PagePreloader.vue`) — the artificial ~1.1s delay on every route change was removed 2026-08-09; now driven by Nuxt's real `page:start`/`page:finish` hooks, so it only shows while there's genuinely something to wait for
- Contact floating widget (`ContactWidget.vue`)
- AI chat widget (`AiChatWidget.vue`) — new since original doc, check current implementation before assuming it matches Phase 5.1 below
- Cookie consent banner (`CookieConsentBanner.vue`) — new since original doc
- Global notification system
- Mobile bottom tab navigation (4 tabs: Home, Services, Products, Contact)
- Responsive: mobile-first, 3 breakpoints
- Scroll-triggered animations (IntersectionObserver)
- `prefers-reduced-motion` support (2026-08-09) — CSS media query in `main.css` neutralises decorative animation; JS-driven `scrollTo`/`scrollIntoView` calls route through `utils/motion.js`'s `scrollBehavior()` helper instead of hardcoding `'smooth'`

---

## Known Issues / Missing

_Originally audited 2026-07-23; corrected again 2026-08-09 against the actual current code (grep + build + live server checks, not a full re-read). Most of this section is now ✅ — the few genuinely open items are marked ❌ or ⚠️._

### Critical
- ✅ **Per-page SEO** — done, and SSR is now real (see root `CLAUDE.md` §3 Blocker 1 — was previously "has `useHead()` but it ran client-side only", now fixed for real).
- ✅ **Broken testimonial fallback images** — fixed (unchanged from 2026-07-23 fix).
- **Leader images are NOT placeholders** — unchanged, still correct: `HalAbelson.jpg`, `Mark_Zuckerberg.jpg`, `SteveJobs.png` in `WayOfBuildingSection.vue` are intentional photo+attribution for real quotes, not team photos.
- ⚠️ **Counter data — fixed differently than originally planned.** A `settings` table + `/api/settings` endpoint now exists (backend added it), so counters *are* admin-editable via Filament. But the four metrics themselves were changed 2026-08-08/09 from vanity numbers (years/projects/team/clients) to outcome numbers (weeks-to-release, products shipped, clients served, repeat-client rate) — **the current values are realistic placeholders, not real figures.** Someone needs to put real numbers into Filament → Settings → `homepage_counters` before these are defensible public claims. Also fixed 2026-08-09: the counters used to render as `0` in the server-rendered HTML (a JS-driven count-up animation started from 0 with no server-side initial value) — crawlers and JS-disabled visitors were seeing "0% Return for a second project". Now the SSR output shows the real target value; the count-up animation resets to 0 only after hydration, client-side.
- ❌ **Partner logo "bootstrap.svg"** — still present in the partner rotation as of 2026-08-09 (partner data is API/Filament-driven, not a frontend file — this needs to be removed in Filament admin, not in code).

### SEO/Performance
- ✅ `@nuxtjs/sitemap` installed and generating a real sitemap (static pages auto-detected, API-driven detail pages fetched at build time).
- Not re-checked 2026-08-09: whether `robots.txt` references the sitemap URL.
- ✅ JSON-LD — Organization schema confirmed live in `app.vue`. Per-type schema (Service/BlogPosting/JobPosting) not independently re-checked this pass, despite `schema_markup` DB columns existing for them.
- ✅ `HeroTerminal.vue` is live — both desktop (unchanged) and, as of 2026-08-09, mobile (was `hidden md:flex`; the `hidden` was dropped since the component is already fully responsive and the grid naturally stacks it below the CTAs on small screens).
- ✅ GA4 plugin wired up, gated behind `NUXT_PUBLIC_GA_ID` — no script loads at all if that's unset.
- ✅ `@nuxt/image` — **fixed 2026-08-09.** Was installed in `package.json` with zero component usage; now 32 `<img>` tags across 15 files use `<NuxtImg>`. Deliberately left as plain `<img>`: SVG icons/logos (no raster-optimization benefit), the unused `WayOfBuildingSection.vue`, and a handful of images whose custom DOM-ref error-fallback or hand-tuned retina `srcset` logic made conversion a correctness risk (`AboutSection.vue`, `NavBar.vue`, `FooterSection.vue` logo instances).

### TypeScript
- ✅ **Fixed.** All 8 composables are `.ts`; `types/api.ts` has API response interfaces.

### Content
- Blog posts: depends entirely on backend data — if API empty, empty state shows (unchanged)
- Products page: no products visible without API data (unchanged)
- Careers page: no jobs visible without API data (unchanged)

---

## Codebase Health Analysis (2026-07-23)

### Overall rating: 6.5 / 10 (pre-fix) → improving toward 7.5 as items below land

Solid, functional Nuxt 3 site with consistent visual design and a real API integration layer. Was held back mostly by missing production hygiene (no linting, leftover debug logs, no TS on the data layer) rather than architecture problems. A cleanup pass on 2026-07-23 fixed the mechanical issues (see "Fixed in this pass" below); remaining gaps are the SEO/analytics/TypeScript items tracked above and in the priority list.

**Breakdown:**
| Area | Rating | Notes |
|---|---|---|
| Architecture / structure | 8/10 | Clean Nuxt conventions, sensible `components/sections`, `composables/`, file-based routing. Easy to navigate. |
| Code consistency / style | 7/10 | ESLint (`@nuxt/eslint`) now installed with a `lint` script — was 6/10 with zero tooling. ~520 pre-existing style warnings (self-closing tags, attribute order) remain; not auto-fixed in bulk to avoid a huge low-value diff — run `npm run lint:fix` and review when convenient. |
| SEO readiness | 8/10 | All 15 pages now have page-level SEO meta. Still missing: sitemap, JSON-LD, analytics. |
| TypeScript adoption | 3/10 | Only `nuxt.config.ts` is TS. `useApi.js` (the entire data layer) and all other composables are untyped JS. |
| Bugs / dead code | 8/10 | Real issues found this pass (dead composable, v-if/v-for misuse, useless try/catch, ternary-as-statement) have been fixed. |
| Test coverage | 2/10 | Only `scripts/smoke-check.mjs` exists — no unit/component test framework (Vitest, etc.) at all. |

### Fixed in this pass (2026-07-23)
1. **Deleted dead composable** — `composables/useStaggerAnimation.js` was unused everywhere and ~95% duplicate of `useStaggeredAnimation.js` (which *is* used, in `ServicesSection.vue`), with a naming-collision risk (different `data-animate*` attribute conventions between the two). Removed.
2. **Removed leftover debug `console.log`** in `AboutSection.vue`, `CounterSection.vue` (x4), `pages/case-studies/index.vue`, `pages/case-studies/[slug].vue`.
3. **Fixed broken testimonial fallback images** (see Known Issues above).
4. **Added `useHead()` to `pages/index.vue`** — the one page still missing per-page SEO (`pages/blog/index.vue` turned out to already use `useSeoMeta()`, a prior false alarm).
5. **Installed `@nuxt/eslint`** (via `npx nuxi module add eslint`), added `lint` / `lint:fix` scripts to `package.json`. Lint surfaced 34 real errors (now 21 remaining, all `no-unused-vars`-class, left for a follow-up pass) plus ~520 style warnings (left un-auto-fixed, see above).
6. **Fixed 3 real logic smells surfaced by the new linter**:
   - `pages/blog/[slug].vue:122` — `v-if` and `v-for` were on the same `<span>` (Vue anti-pattern); wrapped the `v-for` in a `<template v-if>`.
   - `pages/services/[slug].vue:678` — a `try { ... } catch (err) { throw err }` that did nothing; removed the pointless wrapper.
   - `pages/products/[slug].vue:1309` — a ternary used for its side effect (`diff > 0 ? galleryNext() : galleryPrev()`) instead of an `if`/`else`; rewritten as `if`/`else`.
7. **Replaced deprecated `process.client` with `import.meta.client`** (Nuxt's recommended form) in 6 files / 10 call sites: `NavBar.vue`, `BlogSection.vue`, `ServicesSection.vue`, `PartnerSection.vue`, `about.vue`.
8. **Corrected this doc**: backend is Laravel/PHP (Filament admin), not Django — confirmed via `../ByteStackLab-Backend/composer.json` and `routes/api.php`. Also corrected the "leader images are placeholders" note (see Known Issues above).

### Still open (not fixed — needs a decision or more time)
- ~520 ESLint style warnings (self-closing tags, attribute ordering) — mostly auto-fixable via `npm run lint:fix`, deliberately not run in bulk since it would touch nearly every template file in one pass.
- ~21 remaining `no-unused-vars` lint errors across `GlobalNotification.vue`, `ServicesSection.vue`, `about.vue`, `careers/[slug].vue`, `contact.vue`, `case-studies/index.vue`, `blog/index.vue`, `useInteractiveAnimation.js` — left alone since each needs a quick per-file check (e.g. confirm not referenced in `<template>`) rather than a blind delete.
- `useApi.js` duplicate response-unwrapping logic (~25 near-identical try/catch blocks) — not a bug, only worth a helper if the file is touched again for other reasons.
- `components/HeroTerminal.vue` (new, uncommitted) — animated terminal replacing the old `hero-animation.gif`, aligns with Phase 2.4/3.4 goals below. Still needs to be committed.

---

## Codebase Health Analysis (2026-08-09 update)

### Overall rating: ~8/10 (was 6.5/10 on 2026-07-23)

The 2026-07-23 breakdown table above is left intact as a historical record. Here's what changed, checked directly against the code on 2026-08-09 (not a full fresh audit — see disclaimer at the top of this document):

| Area | 2026-07-23 | 2026-08-09 | What changed |
|---|---:|---:|---|
| Architecture / structure | 8/10 | 8/10 | Not re-checked; no reason to expect drift |
| Code consistency / style | 7/10 | 7/10 | Lint is clean (0 errors) on every change made this session; the ~520 pre-existing style warnings and ~21 unused-var errors from 2026-07-23 were not re-checked |
| SEO readiness | 8/10 (was wrong — counted `useHead()` without checking it ran client-side) | 8.5/10 | Now genuinely earned: SSR verified live via raw HTML fetch, sitemap + JSON-LD + GA4 all present |
| TypeScript adoption | 3/10 | 9/10 | 8/8 composables now `.ts`, `types/api.ts` exists |
| Bugs / dead code | 8/10 | 8.5/10 | `CustomCursor.vue` (unused) deleted; fake ~1.1s preloader delay on every navigation removed; SSR counter-zero bug fixed |
| Test coverage | 2/10 | 3/10 | Vitest + 3 spec files exist (not independently assessed for depth) |
| Image optimization | *(not scored before)* | — | `@nuxt/image` went from installed-but-unused to actually converting 32 `<img>` tags |
| Accessibility | *(not scored before)* | — | `prefers-reduced-motion` support added 2026-08-09 (was entirely absent — the homepage alone ran ~22 infinite-loop animations with no opt-out) |

**What's still open, honestly:** the ~520 ESLint style warnings and ~21 unused-var errors from the 2026-07-23 pass were not re-verified this session — assume they're still there until someone checks. The `useApi.ts` duplicate try/catch pattern (~25 near-identical blocks) is unchanged. Partner data content issue (`bootstrap.svg` in the logo rotation) needs a Filament admin fix, not code.

---

## 2026 Strategy — AI Automation, SaaS, Complex Apps

### Vision
Position ByteStackLab as **AI-first software development company** for 2026.
Not just "we build apps" → "we build intelligent, scalable software that automates your business."

---

## Phase 1 — Content & SEO Fix (Immediate — Week 1-2)

### 1.1 Per-Page SEO — ✅ Done
All pages have `useHead()`/`useSeoMeta()`, and (the part that actually mattered) it now runs during SSR, not after client mount.

### 1.2 Hero Section Messaging Update — ✅ Done (2026-08-09)
Old: "Transform Business Through Innovation" → New: **"Software That Runs Your Business For You"** (a variant of the proposed line below, landed via the homepage content-strategy pass — see `HOMEPAGE-CONTENT-STRATEGY.md`). Specialty chips (`AI Automation` / `SaaS Platforms` / `Enterprise Apps` / `Mobile Apps`) were added per §2.4 below at the same time.
<details><summary>Original proposal (superseded, kept for reference)</summary>

Proposed 2026: "Build Intelligent Software That Runs Your Business" — Sub-copy focus: AI Automation + SaaS + Enterprise Apps
</details>

### 1.3 Counter Values — ✅ Infrastructure done, ⚠️ values still placeholder
`/api/settings` exists and Filament can edit them without a code change. The four *metrics themselves* were also changed 2026-08-08/09 to outcome-based ones (weeks-to-release, products shipped, clients served, repeat-client rate) instead of years/projects/team/clients. **Current values are realistic placeholders pending the user's real numbers** — see Known Issues above.

### 1.4 Fix Missing Images — ✅ Testimonial fallbacks fixed; ❌ partner logo still open
Testimonial SVG fallbacks fixed (2026-07-23 pass). `bootstrap.svg` is still in the partner logo rotation as of 2026-08-09 — this is Filament content data, not a frontend code fix.

### 1.5 Add sitemap — ✅ Done
`@nuxtjs/sitemap` is installed and configured in `nuxt.config.ts`, generating both static routes and API-driven detail-page URLs at build time.

---

## Phase 2 — New Sections & Pages (Month 1)

### 2.1 AI & Automation Service Page `/services/ai-automation` — ✅ Built
`pages/services/ai-automation.vue` exists (confirmed 2026-08-09). Whether its content matches every bullet originally proposed here (chatbot dev, n8n/Make/Zapier, LLM integration, computer vision, predictive analytics) wasn't checked — read the page directly if the specifics matter.

### 2.2 SaaS Development Service Page `/services/saas-development` — ✅ Built
`pages/services/saas-development.vue` exists (confirmed 2026-08-09). Content specifics not re-checked.

### 2.3 Pricing Page `/pricing` — ❌ Built, then explicitly deleted
Frontend git history: `a2c01d0 feat: Phase 3 — AI Automation, SaaS Development, Pricing pages...` shipped it, then `2c61573 delete pricing page` removed it. **Treat this as a deliberate reversal, not an oversight or a task still to do — do not rebuild it without asking the user first.**

### 2.4 ENHANCE: Hero Section — ✅ Done (2026-08-09)
Specialty chips added: `AI Automation` · `SaaS Platforms` · `Enterprise Apps` · `Mobile Apps` (slightly reworded from the original proposal — "SaaS Products" → "SaaS Platforms"). `HeroTerminal.vue` (an animated fake-terminal, not a literal automation-workflow diagram) replaced the old GIF and is now visible on mobile too, not just desktop.

### 2.5 ENHANCE: Services Section — AI-First Services
Ensure these appear in featured services (via backend):
- AI & Automation Solutions ← NEW
- SaaS Product Development ← NEW
- Complex Web Applications
- Mobile App Development
- UI/UX Design
- DevOps & Cloud

### 2.6 NEW: "Our Products" Showcase Section (Homepage)
Add homepage section showcasing owned SaaS products:
- Product name + screenshot
- "Try Demo" / "Learn More" CTA
- Tech stack used
Pull from `/products` API.

### 2.7 ENHANCE: Case Studies
Add case studies with clear ROI metrics:
- "Reduced manual work by 80% with AI automation"
- "SaaS platform scaled to 10,000 users in 3 months"
- "Mobile app — 4.8★ rating on Play Store"

---

## Phase 3 — Technical Enhancement (Month 2)

### 3.1 Structured Data (JSON-LD) — ✅ Organization schema done
`app.vue` emits an Organization JSON-LD block (name, url, logo, sameAs). Implemented as a plain inline script tag via `useHead()`, not the `nuxt-schema-org` module this section originally proposed — functionally equivalent, one less dependency. Per-type schema (Service/BlogPosting/JobPosting), despite the DB having `schema_markup` columns ready for it, was not independently re-checked this pass.

### 3.2 Analytics — ✅ Done
GA4 via a custom plugin (`plugins/analytics.client.js`), gated behind `NUXT_PUBLIC_GA_ID` — if that env var is unset, no script loads at all. Not Plausible; GA4 was the choice made.

### 3.3 Live Chat / AI Widget — ✅ Built (`AiChatWidget.vue` exists)
Present in `components/` and wired into `layouts/default.vue`. Whether it matches this section's scope (qualifies leads, books calls) or Phase 5.1's fuller vision wasn't checked this pass — read the component before assuming either.

### 3.4 Performance Optimization — ✅ Mostly done
- ✅ Hero GIF replaced with `HeroTerminal.vue` (an animated terminal component, not Lottie/WebP video as originally proposed) — desktop and mobile as of 2026-08-09.
- ✅ `@nuxt/image` enabled and actually used as of 2026-08-09 (32 `<img>` → `<NuxtImg>`, which defaults to lazy loading below-fold images automatically).
- Not checked this pass: explicit `<link rel="preconnect">` for the API domain.

### 3.5 Newsletter Value Proposition — ❌ Still open
Still a plain "Subscribe Now" form. The lead-magnet idea (free checklist/guide) needs an actual asset (a PDF) before the copy change is honest — see `HOMEPAGE-CONTENT-STRATEGY.md` §3.13 for the specific copy proposal once that asset exists.

### 3.6 TypeScript Migration — ✅ Done
All 8 composables are `.ts`. `types/api.ts` holds the response interfaces (not necessarily matching the exact shape proposed here — check the actual file).

---

## Phase 4 — 2026 Content Plan

### Blog Content Roadmap (SEO + Authority)
Publish monthly, targeting these topics:

**AI/Automation (High intent):**
- "How to Automate Your Business Processes in 2026 with AI"
- "Building an AI Chatbot for Your SaaS Product: Complete Guide"
- "n8n vs Make vs Zapier: Which Automation Tool in 2026"
- "LLM Integration in Web Apps: Claude API vs OpenAI"
- "How We Built a RAG System for a Client's Knowledge Base"

**SaaS Development:**
- "Multi-tenant SaaS Architecture: What We Learned Building 5 Products"
- "SaaS Pricing Models That Convert (2026 Guide)"
- "From MVP to $10K MRR: Our Development Process"

**Web/Mobile:**
- "Nuxt 3 vs Next.js in 2026: Which Should You Choose?"
- "React Native vs Flutter: 2026 Comparison for Business Apps"
- "Building Complex Enterprise Web Apps: Our Stack"

**Case Study Format:**
```
Client: [Company Name / Industry]
Challenge: [Problem]
Solution: [What ByteStackLab Built]
Tech: [Stack Used]
Result: [Measurable Outcome — %, $, time saved]
```

---

## Phase 5 — Advanced Features (Month 3+)

### 5.1 AI Chatbot Widget (Own Product Demo)
Build and deploy ByteStackLab AI assistant on website:
- Answers questions about services
- Qualifies leads
- Books discovery calls
- Shows AI capability to prospects

### 5.2 Project Estimator Tool
Interactive form: "Estimate Your Project Cost"
- Type: Web App / Mobile App / SaaS / AI Automation
- Features: select from list
- Timeline: 1mo / 3mo / 6mo+
- Output: rough estimate range + CTA for discovery call

This generates leads and shows technical thinking.

### 5.3 Tech Stack Interactive Demo
Replace static TechStackSection with interactive tabs showing:
- For each tech: "Why we use it" tooltip
- Add new AI/ML stack: LangChain, OpenAI, Claude, Pinecone, n8n

### 5.4 Client Portal Teaser
Show preview of client dashboard/portal as a SaaS product.
Builds credibility — "we don't just build for others, we use it ourselves"

---

## Design System Reference

```
Primary: #3533cd
Dark: #1e1b69
Darkest: #0f0d3d
Background light: #f9f9ff, #f7f7fa
Gradient: from-[#3533cd] to-[#1e1b69]
Font: Inter (400-800), Inspiration (400)
Border radius: rounded-xl (12px), rounded-2xl, rounded-3xl
Shadow: shadow-lg, shadow-xl, shadow-2xl
```

---

## Development Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run generate  # Static site generation
npm run preview   # Preview production build
npm run smoke     # Smoke check (scripts/smoke-check.mjs)
```

## Environment Variables

```env
NUXT_PUBLIC_API_BASE=https://api.bytestacklab.com/api
# Local dev:
NUXT_PUBLIC_API_BASE=http://127.0.0.1:8000/api
```

---

## Priority Task List (Next Steps) — reviewed 2026-08-09

| Priority | Task | Status |
|----------|------|--------|
| ✅ DONE | ~~Remove leftover `console.log` debug statements~~ | Confirmed 2026-08-09: zero `console.log` remain anywhere. The ~29 remaining `console.*` calls are all `console.error`/`console.warn` in `catch` blocks — legitimate error logging, deliberately kept (see root `CLAUDE.md` for why). |
| ✅ DONE | ~~Add `useHead()` to `pages/index.vue`~~ | — |
| ✅ DONE | ~~Fix missing testimonial fallback images~~ | — |
| ✅ DONE | ~~Delete unused `composables/useStaggerAnimation.js`~~ | — |
| ✅ DONE | ~~Add ESLint + `lint` script~~ | — |
| ✅ DONE | ~~Commit/finish `HeroTerminal.vue` + hero messaging update~~ | Done 2026-08-09, plus mobile visibility fix and specialty chips |
| ✅ DONE | ~~Add sitemap module~~ | — |
| ✅ DONE | ~~Add Google Analytics 4~~ | Gated behind `NUXT_PUBLIC_GA_ID` |
| ✅ DONE | ~~Add structured data JSON-LD~~ | Organization schema; per-type schema not re-checked |
| ✅ DONE | ~~Add @nuxt/image for optimization~~ | Done 2026-08-09 — was installed but unused; now 32 `<img>` → `<NuxtImg>` |
| ✅ DONE | ~~TypeScript migration~~ | All 8 composables, done |
| ✅ DONE | ~~Add Vitest~~ | 3 spec files exist; component test *coverage* not assessed |
| 🔴 CRITICAL | Review/clean remaining ~21 `no-unused-vars` lint errors + ~520 style warnings | ⚠️ **Not re-checked 2026-08-09** — assume still open until verified. All new code this session lints clean. |
| ✅ DONE | ~~Add AI Automation service page~~ | Confirmed 2026-08-09: `pages/services/ai-automation.vue` exists |
| ✅ DONE | ~~Add SaaS Development service page~~ | Confirmed 2026-08-09: `pages/services/saas-development.vue` exists |
| 🟡 MEDIUM | Add lead magnet to newsletter | ❌ Still open — blocked on an actual PDF asset, not code |
| 🟢 FUTURE | Project estimator tool | Not started |
| 🟢 FUTURE | Blog content 12-month plan | Ongoing / content, not code |
| ~~🟡 MEDIUM~~ | ~~Add Pricing page~~ | **Explicitly reversed** — git history shows the pricing page was built then deleted (`a2c01d0` then `2c61573 delete pricing page`). Do not rebuild without asking the user first. |
| ~~🟢 FUTURE~~ | ~~Bilingual frontend~~ | **Off the roadmap** — user confirmed 2026-08-09 the site stays English-only. |
| — | *(new, not in original list)* Newsletter double opt-in | ✅ Done on the backend — `NewsletterVerificationMail` now actually sends |
| — | *(new)* CORS `config:cache` footgun | ✅ Fixed 2026-08-09 — see root `CLAUDE.md` §4 S9 |
| — | *(new)* Homepage counters rendering `0` in SSR | ✅ Fixed 2026-08-09 |
| — | *(new)* `prefers-reduced-motion` support | ✅ Added 2026-08-09 — was completely absent |

---

## 2026 Positioning Statement

> ByteStackLab builds **AI-powered, scalable software** — from intelligent automation systems and SaaS platforms to complex enterprise web and mobile applications. We help businesses turn ideas into production-ready products that work smarter.

**Target clients for 2026:**
- Startups building SaaS products
- Enterprises needing process automation
- Businesses that want AI integrated into their existing systems
- Companies needing complex web/mobile apps with AI features

**Differentiation from competitors:**
1. AI-first approach — every project considers AI/automation opportunities
2. Full-stack ownership — design → develop → deploy → maintain
3. Bangladesh-based talent, global-quality delivery
4. Own SaaS products = we eat our own cooking
