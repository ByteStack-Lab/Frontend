# ByteStackLab Frontend — CLAUDE.md

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
composables/
  useApi.js         → All API calls (services, blogs, case studies, etc.)
  useScrollAnimation.js
  useStaggeredAnimation.js
  useNotification.js
  usePageLoader.js
assets/css/main.css → Global styles
public/images/      → All static assets, tech stack SVGs, favicons
nuxt.config.ts      → App config, Google Fonts, runtimeConfig
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

### Homepage Sections (order)
1. HeroSection — animated grid bg, video modal (YouTube embed)
2. ServicesSection — API carousel, drag support, auto-slide
3. AboutSection
4. CounterSection — animated counters (5+, 100+, 15+, 100+)
5. PartnerSection — 6 partner logos
6. TestimonialsSection — avatar carousel, API + fallback
7. CaseStudiesSection — API-driven, alternating layout
8. WayOfBuildingSection
9. DevelopmentApproachSection
10. TechStackSection — categorized (Frontend/Backend/Mobile/DB/CMS/Cloud/DevOps)
11. HowDevelopmentSection
12. BlogSection — API slider
13. NewsletterSection

### API Coverage (useApi.js)
- Services (all, featured, navbar, categories, single)
- Case Studies (all, featured, filters, single)
- Blogs (all, featured, recent, popular, related, categories, single)
- Partners (all, featured, by type)
- Testimonials (all, featured, by rating, stats)
- Newsletter (subscribe, unsubscribe, stats)
- Contact form (POST)

### UI/UX
- Custom cursor (`CustomCursor.vue`)
- Page preloader (`PagePreloader.vue`)
- Contact floating widget (`ContactWidget.vue`)
- Global notification system
- Mobile bottom tab navigation (4 tabs: Home, Services, Products, Contact)
- Responsive: mobile-first, 3 breakpoints
- Scroll-triggered animations (IntersectionObserver)

---

## Known Issues / Missing (Fix ❌)

_Last audited: 2026-07-23 — see [Codebase Health Analysis](#codebase-health-analysis-2026-07-23) below for the full findings and rating. Items below marked ✅ were fixed directly in this pass._

### Critical
- ✅ **Per-page SEO** — all 15 pages now have `useHead()` or `useSeoMeta()`. `pages/index.vue` was the last gap; `useHead()` added.
- ✅ **Broken testimonial fallback images** — `TestimonialsSection.vue` fallback array referenced `sarah.svg`, `michael.svg`, `emily.svg` which never existed in `public/images/testimonials/`. Repointed to existing generic avatar SVGs (`romeena-2/3/4.svg`).
- **Leader images are NOT placeholders — correction to prior note**: `HalAbelson.jpg`, `Mark_Zuckerberg.jpg`, `SteveJobs.png` in `WayOfBuildingSection.vue` are intentionally used as photo+attribution for real quotes from these tech figures (not ByteStackLab team photos). Nothing to fix here; leave as-is unless legal/licensing wants them swapped for illustrations.
- **Counter data is hardcoded** — `targetExperience=5`, `targetProjects=100`, `targetTeam=15`, `targetClients=100` in `CounterSection.vue:144-147`. Still not API-driven — confirmed the Laravel backend (`../ByteStackLab-Backend`) has no dedicated stats/settings endpoint for these; would need a new backend endpoint to fix properly.
- **Partner logo "bootstrap.svg"** — still present in `public/images/partners/`. Content decision (needs a real partner logo), not a code fix.

### SEO/Performance
- No `sitemap.xml` generation — `@nuxtjs/sitemap` not installed.
- `robots.txt` exists but is minimal (`User-Agent: *` / `Disallow:` — allows everything, no sitemap reference).
- No structured data (JSON-LD for Organization, Service, BlogPosting) — no schema-org module installed.
- Hero section GIF has already been replaced with an animated `HeroTerminal.vue` component (in progress, uncommitted) — resolves the old "GIF may be large" concern once merged.
- No analytics script (GA4, Plausible, etc.) — confirmed absent from the codebase.

### TypeScript
- Only `nuxt.config.ts` is TypeScript. All composables (`useApi.js`, `useScrollAnimation.js`, `useStaggeredAnimation.js`, etc.) are still plain `.js`.
- No type definitions for API response shapes.

### Content
- Blog posts: depends entirely on backend data — if API empty, empty state shows
- Products page: no products visible without API data
- Careers page: no jobs visible without API data

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

## 2026 Strategy — AI Automation, SaaS, Complex Apps

### Vision
Position ByteStackLab as **AI-first software development company** for 2026.
Not just "we build apps" → "we build intelligent, scalable software that automates your business."

---

## Phase 1 — Content & SEO Fix (Immediate — Week 1-2)

### 1.1 Per-Page SEO
Every page add `useHead()`:
```js
useHead({
  title: 'AI Software Development | ByteStackLab',
  meta: [
    { name: 'description', content: '...' },
    { property: 'og:title', content: '...' },
    { property: 'og:description', content: '...' },
    { property: 'og:image', content: 'https://bytestacklab.com/images/og-home.png' },
    { property: 'og:type', content: 'website' },
  ]
})
```

### 1.2 Hero Section Messaging Update
Current: "Transform Business Through Innovation"
Proposed 2026: **"Build Intelligent Software That Runs Your Business"**
Sub-copy focus: AI Automation + SaaS + Enterprise Apps

### 1.3 Counter Values — Update to Real Numbers
- Years: 5+ (ok if accurate)
- Projects: verify actual count
- Team: verify actual count  
- Clients: verify actual count
Also add from API so admin can update without code change.

### 1.4 Fix Missing Images
- Add `sarah.svg`, `michael.svg`, `emily.svg` OR remove those fallback entries
- Replace leader/placeholder images with real team photos
- Replace `bootstrap.svg` partner logo with actual partner

### 1.5 Add sitemap
Install `@nuxtjs/sitemap` module:
```bash
npm install @nuxtjs/sitemap
```
Config in `nuxt.config.ts` to auto-generate sitemap from routes.

---

## Phase 2 — New Sections & Pages (Month 1)

### 2.1 NEW: AI & Automation Service Page `/services/ai-automation`
Dedicated page showing:
- AI Chatbot Development
- Process Automation (n8n, Make, Zapier)
- LLM Integration (OpenAI, Claude, Gemini)
- Computer Vision / OCR
- Predictive Analytics
- AI-powered CRM/ERP

Visual: Interactive AI demo widget or animated workflow diagram

### 2.2 NEW: SaaS Development Service Page `/services/saas-development`
- Multi-tenant architecture
- Subscription billing (Stripe)
- API-first design
- White-label solutions
- SaaS security best practices

### 2.3 NEW: Pricing Page `/pricing`
Transparent pricing builds trust. Options:
- Discovery Call (Free)
- MVP Package ($X)
- Full Product ($X)
- Maintenance ($X/month)
Or: "Custom project pricing — let's talk" CTA with estimator form

### 2.4 ENHANCE: Hero Section
Add tagline badges showing specialties:
```
[AI Automation] [SaaS Products] [Enterprise Apps] [Mobile Apps]
```
Replace generic hero animation with something showing AI/automation workflow.

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

### 3.1 Structured Data (JSON-LD)
Add to layout:
```js
useSchemaOrg([
  defineOrganization({
    name: 'ByteStackLab',
    url: 'https://bytestacklab.com',
    logo: 'https://bytestacklab.com/images/logo.svg',
    sameAs: [
      'https://www.linkedin.com/company/bytestacklab',
      'https://www.facebook.com/ByteStackLab',
    ]
  })
])
```
Use `nuxt-schema-org` module.

### 3.2 Analytics
Add Google Analytics 4 or Plausible (privacy-first):
```ts
// nuxt.config.ts
modules: ['@nuxtjs/google-analytics'] // or plausible-tracker
```

### 3.3 Live Chat / AI Widget
Add Crisp, Tawk.to, or custom AI chat widget.
In 2026, AI-powered chat widget shows you practice what you preach.

### 3.4 Performance Optimization
- Replace `hero-animation.gif` with Lottie animation or WebP video
- Add `loading="lazy"` to below-fold images
- Enable Nuxt image optimization module `@nuxt/image`
- Add preconnect for API domain in head

### 3.5 Newsletter Value Proposition
Current: just "subscribe" form
2026: Add lead magnet — "Get our free AI Implementation Checklist" or "Free SaaS Launch Guide"

### 3.6 TypeScript Migration
Migrate `composables/*.js` to `.ts` with proper types:
```ts
interface Service {
  id: number
  title: string
  slug: string
  short_description: string
  description: string
  category: string
  icon?: string
  tags?: string[]
  featured?: boolean
}
```

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

## Priority Task List (Next Steps)

| Priority | Task | Effort |
|----------|------|--------|
| ✅ DONE | ~~Remove leftover `console.log` debug statements~~ | — |
| ✅ DONE | ~~Add `useHead()` to `pages/index.vue`~~ (`blog/index.vue` already had `useSeoMeta()`) | — |
| ✅ DONE | ~~Fix missing testimonial fallback images~~ | — |
| ✅ DONE | ~~Delete unused `composables/useStaggerAnimation.js`~~ | — |
| ✅ DONE | ~~Add ESLint + `lint` script~~ (`@nuxt/eslint`) and fix the 13 real errors it surfaced (v-if/v-for, useless try/catch, ternary-as-statement, `process.client`) | — |
| 🔴 CRITICAL | Review/clean remaining ~21 `no-unused-vars` lint errors (see Codebase Health Analysis) | 1hr |
| 🔴 CRITICAL | Run `npm run lint:fix` for the ~520 style warnings and spot-check the diff | 1hr |
| 🟠 HIGH | Commit/finish `HeroTerminal.vue` + hero messaging update for AI-first 2026 | 1hr |
| 🟠 HIGH | Add AI Automation service page | 4hr |
| 🟠 HIGH | Add SaaS Development service page | 4hr |
| 🟠 HIGH | Add sitemap module | 1hr |
| 🟠 HIGH | Add Google Analytics 4 | 30min |
| 🟡 MEDIUM | Add Pricing page | 3hr |
| 🟡 MEDIUM | Add structured data JSON-LD | 2hr |
| 🟡 MEDIUM | Add lead magnet to newsletter | 2hr |
| 🟡 MEDIUM | Add @nuxt/image for optimization | 1hr |
| 🟢 FUTURE | AI chatbot widget | 1 week |
| 🟢 FUTURE | Project estimator tool | 3 days |
| 🟢 FUTURE | TypeScript migration (start with `useApi.js`) | 1 week |
| 🟢 FUTURE | Add Vitest + component tests | 1 week |
| 🟢 FUTURE | Blog content 12-month plan | Ongoing |

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
