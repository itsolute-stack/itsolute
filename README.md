# ITSolute Systems — Marketing Website

The production marketing website for **ITSolute Systems**, the complete IT partner for Kerala businesses.

> Hardware, software, support, and automation — under one roof. One vendor. One number.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + Turbopack |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` config) |
| UI primitives | Radix UI (accordion, dialog, label, select) + custom shadcn-style wrappers |
| Motion | Framer Motion 11 |
| Icons | Lucide |
| Fonts | Geist + Geist Mono via `next/font` |
| Forms | react-hook-form + zod |
| Email | Resend |
| Deploy | Vercel |

---

## Local development

```bash
pnpm install                # one-time
cp .env.example .env.local  # then fill in values (see below)
pnpm dev                    # http://localhost:3000
```

### Scripts

| Script | What it does |
|---|---|
| `pnpm dev` | Dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Run the production build locally |
| `pnpm lint` | ESLint with Next config |
| `pnpm format` | Prettier write across the repo |

---

## Environment variables

All variables live in `.env.example`. Copy to `.env.local` for development and set the same values in Vercel for production.

| Variable | Required | Where to get it |
|---|---|---|
| `RESEND_API_KEY` | Yes (prod) | https://resend.com/api-keys — create a project, generate a key |
| `RESEND_FROM_EMAIL` | Yes (prod) | The verified sender on Resend (e.g. `"ITSolute Systems <hello@itsolute.com>"`). Domain must be verified in Resend before send. |
| `RESEND_TO_EMAIL` | Yes (prod) | The inbox that receives enquiries — default `hello@itsolute.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | Digits only with country code: `919207640404` |
| `NEXT_PUBLIC_PHONE_NUMBER` | Yes | With `+`: `+919207640404` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 measurement ID. Leave blank to skip. |
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Canonical URL — used for metadata, sitemap, schema. e.g. `https://itsolute.com` |

> The contact form will return a graceful error if `RESEND_API_KEY` is missing — visitors still see a WhatsApp fallback link.

---

## Project structure

```
app/
├── (marketing)/              # Route group — shares Navbar/Footer/WhatsApp float
│   ├── layout.tsx
│   ├── page.tsx              # Home
│   ├── amc/page.tsx
│   ├── hardware/page.tsx
│   ├── software/page.tsx
│   ├── automation/page.tsx
│   ├── laptop-care/page.tsx
│   ├── networking/page.tsx
│   ├── about/page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   ├── clean-warks/page.tsx
│   │   ├── cctvpros/page.tsx
│   │   └── senza-aura/page.tsx
│   └── contact/page.tsx
├── api/contact/route.ts      # Resend handler
├── layout.tsx                # Root: fonts, metadata, Organization schema
├── globals.css               # Tailwind v4 @theme tokens + custom utilities
├── sitemap.ts
└── robots.ts

components/
├── layout/                   # Navbar, Footer, Container, Section
├── home/                     # Page-section blocks (Hero, ProblemSection, etc.)
├── shared/                   # SectionHeader, Eyebrow, Metric, ArrowLink, etc.
├── case-studies/             # CaseStudyDetail reusable layout
├── forms/                    # ContactForm
└── ui/                       # Button, Input, Textarea, Select, Sheet, Accordion, Label

lib/
├── content/                  # All copy — structured data + page prose
│   ├── site.ts               # Phone, email, address, hours, social
│   ├── nav.ts                # Nav + footer columns
│   ├── services.ts           # 6 services (hardware-first order)
│   ├── industries.ts         # 6 industries
│   ├── caseStudies.ts        # 3 case studies (long-form)
│   ├── testimonials.ts       # Pull-quotes
│   ├── faqs.ts               # Home FAQ + AMC FAQ
│   ├── plans.ts              # AMC tier definitions + includes matrix + checklist
│   ├── process.ts            # 5-step process
│   └── copy/                 # Page-level prose (home, amc, hardware, ...)
├── validation/               # zod schemas
├── utils.ts                  # cn() class merge helper
├── motion.ts                 # Framer Motion variants
├── whatsapp.ts               # wa.me link builder
├── images.ts                 # Image URLs (Unsplash placeholders) + intent labels
└── schema.ts                 # JSON-LD generators (Organization, LocalBusiness, Service, FAQ, Breadcrumb)
```

---

## Content editing guide

**All copy lives in `/lib/content/`. Edits there flow to every page that references them.**

| Want to change… | Edit… |
|---|---|
| Phone, WhatsApp, email, address, hours | `lib/content/site.ts` |
| Header nav or footer columns | `lib/content/nav.ts` |
| Services (titles, taglines, features, icons) | `lib/content/services.ts` |
| Industry tiles | `lib/content/industries.ts` |
| AMC tiers and what's-included matrix | `lib/content/plans.ts` |
| Testimonials | `lib/content/testimonials.ts` |
| FAQ questions and answers | `lib/content/faqs.ts` |
| 5-step process | `lib/content/process.ts` |
| Case study narratives, metrics, stack | `lib/content/caseStudies.ts` |
| Home page prose (headlines, subs, CTAs) | `lib/content/copy/home.ts` |
| AMC page prose | `lib/content/copy/amc.ts` |
| Hardware / Software / Automation page prose | `lib/content/copy/{hardware,software,automation}.ts` |
| Laptop Care page prose + FAQ | `lib/content/copy/laptopCare.ts` |
| Networking page prose + FAQ | `lib/content/copy/networking.ts` |
| About page story, mission, principles | `lib/content/copy/about.ts` |
| Contact page copy + form service dropdown | `lib/content/copy/contact.ts` |
| Case-studies index page hero | `lib/content/copy/work.ts` |

> **No copy is hard-coded in JSX.** If you find any, please move it into `/lib/content/`.

---

## Image replacement guide

Every image on the site is a placeholder from Unsplash, marked with a yellow `TODO:` chip in development.

### Replacement workflow

1. **Pick the image you want** — match the `intent` text shown on the chip and listed in `lib/images.ts`.
2. **Drop the file** in `/public/images/` (recommended `.avif` or `.webp`, max 1600px wide).
3. **Update `lib/images.ts`** — change the `src` field on the relevant key from a `images.unsplash.com` URL to `/images/your-file.avif`.
4. The chip disappears automatically in production builds.

### Every TODO location

| Key in `lib/images.ts` | Where it appears | Ideal photo |
|---|---|---|
| `hero` | Home hero (right column) | Laptop on Kerala office desk, slightly desaturated, electric-blue light leak |
| `amcFeature` | Home — featured AMC row | Office IT setup with documentation on desk, blue color grade |
| `automationFeature` | Home — featured Automation row | Zoho-style dashboard or WhatsApp Business chat flow mockup |
| `hardwareCategory` | Hardware page (any extension) | Business laptop product shot |
| `serverRack` | Hardware page | Server rack with clean cabling |
| `networking` | Hardware section / networking anchor | Network cabling, patch panel |
| `softwareScreen` | Software page (optional extension) | Team using software at desks |
| `automationCode` | Automation page (optional) | Code editor or workflow diagram |
| `aboutOffice` | About page extensions | Modern Kerala office, real team |
| `cleanWarksHero` | `/work/clean-warks` + Automation case study highlight | Operations dashboard or branch network visual |
| `cctvprosHero` | `/work/cctvpros` + Work index | Surveillance catalog or product photography |
| `senzaAuraHero` | `/work/senza-aura` + Automation case study highlight | WhatsApp booking flow mockup or salon interior |
| `industryClinic` / `industrySchool` / `industryRetail` | Industries section / industry pages (future) | Real-world scenes per category |
| `contactMap` | Contact page (optional) | Map of Kerala with service-area pins, or embed Google Maps |

### Logo replacement

1. Drop `logo.svg` (light backgrounds) and `logo-dark.svg` (dark backgrounds) in `/public/`.
2. In `components/shared/Logo.tsx`, set `useFile` to `true` by default.
3. Adjust width/height in the `<img>` tag if your SVG aspect ratio differs from 140×28.

### Team photos

The About page renders placeholder avatar cards with initials. To replace:
1. Add real photos to `/public/team/`.
2. Edit `lib/content/copy/about.ts` → `aboutCopy.team.members` and add a `src` field per member.
3. Update the rendering in `app/(marketing)/about/page.tsx` to show `<img>` when `src` exists.

### Testimonial verification

Every testimonial in `lib/content/testimonials.ts` has a `todo` field marking it as placeholder. **Replace with real, attributed quotes before launch** and remove the `todo` field — it surfaces on the homepage in amber when present.

### Case study metric verification

Each metric in `lib/content/caseStudies.ts` carries a `note: 'TODO: verify'` field. Confirm or replace the numbers, then remove the note.

---

## SEO

- **Per-page metadata** is exported from each `page.tsx` using Next's `Metadata` type. Title template (`'%s · ITSolute Systems'`) lives in the root layout.
- **`/sitemap.xml`** and **`/robots.txt`** are generated by `app/sitemap.ts` and `app/robots.ts`.
- **JSON-LD schema** is injected per-page via `next/script`:
  - `Organization` schema is on the root layout (every page)
  - `LocalBusiness` on Home and Contact
  - `Service` on AMC, Hardware, Software, Automation pages
  - `FAQPage` on Home and AMC
  - `BreadcrumbList` on each case study detail page

### Adding new schema

Use the helpers in `lib/schema.ts`:

```tsx
import { serviceSchema } from '@/lib/schema'
import Script from 'next/script'

<Script
  id="my-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ ... })) }}
/>
```

---

## Adding new content

### Add a new case study

1. Append a new entry to the `caseStudies` array in `lib/content/caseStudies.ts` (full schema: slug, index, client, category, tagline, problem[], solution[], outcome[], metrics[], stack[], imageHint).
2. Add an image entry in `lib/images.ts` (key matches the slug, e.g. `myProjectHero`).
3. Update the `csImages` map in **two places** to include the new key:
   - `app/(marketing)/work/page.tsx`
   - `components/case-studies/CaseStudyDetail.tsx`
4. Create the route file: `app/(marketing)/work/<slug>/page.tsx`:
   ```tsx
   import { notFound } from 'next/navigation'
   import { CaseStudyDetail } from '@/components/case-studies/CaseStudyDetail'
   import { getCaseStudy } from '@/lib/content/caseStudies'

   export const metadata = { title: 'My Project', description: '…' }

   export default function Page() {
     const cs = getCaseStudy('my-project')
     if (!cs) notFound()
     return <CaseStudyDetail caseStudy={cs} />
   }
   ```
5. The sitemap regenerates automatically — no extra step.

### Add a new service

1. Add an entry to `services` in `lib/content/services.ts` (icon comes from `lucide-react`).
2. If it deserves its own page, create `app/(marketing)/<slug>/page.tsx` modeled on `software/page.tsx`. Add a `Service` schema script using `serviceSchema(…)`.
3. Add a footer entry in `lib/content/nav.ts` if you want it linked from the footer.
4. Update `app/sitemap.ts` to include the new static route.

### Add a new industry

1. Append an entry to `industries` in `lib/content/industries.ts`.
2. The home grid picks it up automatically.
3. If you want a dedicated page, create `app/(marketing)/industries/<slug>/page.tsx`.

---

## Deployment

### Vercel (recommended)

1. Push to a Git remote (GitHub, GitLab, Bitbucket).
2. Import the repo in Vercel — framework auto-detects as Next.js.
3. Set environment variables in Vercel project settings (copy from `.env.example`):
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_PHONE_NUMBER`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy. Vercel handles build, image optimization, edge caching automatically.
5. Add custom domain (`itsolute.com`) in Vercel → Domains. Update `NEXT_PUBLIC_SITE_URL` to match, then redeploy.

### Domain verification for Resend

Before the contact form can send from `hello@itsolute.com`:
1. In Resend, add the domain `itsolute.com`.
2. Add the SPF, DKIM, and DMARC records to your DNS.
3. Wait for verification (usually <1 hour).
4. Then `RESEND_FROM_EMAIL=ITSolute Systems <hello@itsolute.com>` will work.

---

## Performance notes

- Single font family (Geist) loaded with `display: 'swap'` via `next/font/google`. No external CSS requests.
- Images use `next/image` with AVIF/WebP via `next.config.ts`. Quality 85.
- Hero image is `priority` loaded; others lazy-load.
- Radix primitives are tree-shaken (only what's imported).
- `framer-motion` and `lucide-react` are in `experimental.optimizePackageImports`.

### Lighthouse targets

The brief specifies 95+ on Performance, Accessibility, Best Practices, and SEO. To verify locally:

```bash
pnpm build && pnpm start
# Open Chrome DevTools → Lighthouse → run on http://localhost:3000
```

If LCP misses, check that the hero placeholder image has been replaced with a properly sized AVIF/WebP.

---

## Accessibility

- Skip-to-content link in root layout.
- All interactive elements have visible focus rings (`focus-visible:ring-2 ring-electric ring-offset-2`).
- Icon-only buttons have `aria-label`.
- Single `<h1>` per page (the page hero owns it; `SectionHeader` renders `<h2>`).
- `prefers-reduced-motion` honored globally via `globals.css`.
- Color contrast passes WCAG 2.1 AA at all surface combinations.

### Pre-launch a11y checklist

- [ ] Replace placeholder Unsplash images with real photographs that have meaningful `alt` text reflecting actual content
- [ ] Verify form error messages are announced by screen readers (they are tied to fields via Label)
- [ ] Test keyboard navigation end-to-end on Home and Contact
- [ ] Run axe-core or Lighthouse a11y audit

---

## Known notes & quirks

- **React Compiler warning on `ContactForm`** — react-hook-form's `watch()` API can't be memoized by React Compiler. Harmless; the form's state is local. ESLint reports this as a warning, not an error.
- **Tailwind v4 (not v3)** — the brief was written against v3 syntax with `tailwind.config.ts`. Tailwind v4 uses a CSS-first `@theme` block in `globals.css`. All brand tokens (colors, fonts, scale) are defined there. No `tailwind.config.ts` file exists.
- **Next 16 (not 15)** — the brief specified Next 15, but `create-next-app` shipped 16. App Router behavior is unchanged for what we use; `searchParams` is now a Promise (correctly awaited in `contact/page.tsx`).
- **Primary blue** is `#1E40AF` (deeper than the brief's `#2563EB`) — change once in `app/globals.css` under `@theme inline → --color-electric` to switch.

---

## Strategic positioning

The site is hardware-first. AMC is positioned as the natural upsell after a
client's first project — not as the cold-visitor pitch. If you ever want to
revert to AMC-first messaging:

1. Reorder `lib/content/services.ts` to put `amc` first
2. Swap the bento cells in `components/home/ServicesBento.tsx`
3. Replace the Hardware feature row in `app/(marketing)/page.tsx` with AMC
4. Drop the "AMC closing" Section block from `page.tsx`
5. Re-run `pnpm build`

All copy lives in `lib/content/copy/home.ts` — no JSX changes needed for tone.

---

## Local SEO setup (off-site, do this before launch)

The website is only one half of local discoverability. Do these too:

### Google Business Profile

1. Claim a Business Profile at `business.google.com`
2. **Business name:** `ITSolute Systems`
3. **Address:** `Parthas Lane, Kottayam, Kerala – 686001` — must be character-for-character identical to what's in `lib/content/site.ts` and the LocalBusiness schema
4. **Phone:** `+91 92076 40404` — same number as everywhere on site
5. **Primary category:** Computer Store
6. **Secondary categories:** Computer repair service, Software company, Computer networking center
7. **Hours:** Mon–Sat, 9:00 – 19:00
8. **Services:** add each one — Hardware, Laptop Repair, Software Licensing, Networking, Automation, AMC
9. Add photos of: storefront, workshop, team, product/repair work
10. **Note for sister brand:** Google allows multiple businesses at one address with different categories. CCTVPROS can be listed separately if it operates from the same Parthas Lane address.

### Directory listings (NAP consistency)

Use the **exact** string `Parthas Lane, Kottayam, Kerala – 686001` and phone
`+91 92076 40404` everywhere — search engines cross-reference these for trust.

- Justdial (Kottayam, Kochi listings)
- Sulekha (Kerala IT services)
- IndiaMART (B2B procurement leads)
- LinkedIn Company Page
- Bing Places (yes, still used)

### Track this

Set up Google Search Console for `itsolute.com` once the domain is live:
1. Verify ownership via DNS TXT or HTML file
2. Submit `https://itsolute.com/sitemap.xml`
3. Check Mobile Usability, Core Web Vitals, and Coverage weekly for the first month

### Canonical URL caveat

While `itsolute.com` is not yet pointed at the Vercel deployment, set
`NEXT_PUBLIC_SITE_URL` in Vercel to the live `*.vercel.app` URL — that prevents
search engines from seeing a canonical pointing to a 404. Flip back to
`https://itsolute.com` once DNS is configured.

Every page emits its own canonical via `metadata.alternates.canonical`,
built from `SITE_URL`. Changing the env var rewrites them all.

---

## Post-deployment checklist (do this after pointing DNS at Vercel)

- [ ] **Vercel** → Domains: add `itsolute.com` and `www.itsolute.com`. Pick one
      as canonical and configure the other to redirect.
- [ ] **Vercel** → Environment Variables → Production: set
      `NEXT_PUBLIC_SITE_URL=https://itsolute.com`. Trigger a redeploy so it
      flows into metadata, canonical, sitemap, robots, JSON-LD.
- [ ] **DNS**: add A/CNAME records as Vercel instructs.
- [ ] **Resend**: verify the `itsolute.com` domain so `hello@itsolute.com`
      can send. Add SPF, DKIM, and DMARC records to DNS.
- [ ] **Google Search Console**: add and verify `itsolute.com` (DNS TXT or
      HTML file). Submit `https://itsolute.com/sitemap.xml`. Request indexing
      of home + all 7 service pages.
- [ ] **Bing Webmaster Tools**: add property, submit sitemap.
- [ ] **Google Business Profile**: update business URL to `https://itsolute.com`.
- [ ] **OG image**: create the actual `/public/og-image.png` (1200×630)
      with the ITSolute wordmark + tagline. Until this exists, link previews
      will look broken.
- [ ] **Rich Results Test**: run `https://itsolute.com` through
      `https://search.google.com/test/rich-results` — should show
      Organization, LocalBusiness, FAQPage with no errors.

---

## Pre-launch checklist

Walk through this before flipping the DNS:

- [ ] Google Business Profile claimed at the Parthas Lane address (see Local SEO Setup above)
- [ ] Justdial / Sulekha / IndiaMART listings created with identical NAP
- [ ] `NEXT_PUBLIC_SITE_URL` in Vercel matches the actually-live URL (not 404 itsolute.com)
- [ ] All `TODO:` chips on images replaced with real photographs
- [ ] All `TODO: Replace with real testimonial` markers resolved
- [ ] All `TODO: verify` notes on case-study metrics confirmed or corrected
- [ ] Logo SVG dropped in `/public/` and `useFile` set to `true` in `components/shared/Logo.tsx`
- [ ] Favicon and apple-touch-icon updated in `/public/`
- [ ] OG image (`/public/og-image.png`, 1200×630) created
- [ ] Resend domain verified
- [ ] Live phone, WhatsApp, email confirmed in `lib/content/site.ts`
- [ ] `NEXT_PUBLIC_SITE_URL` set to production URL in Vercel
- [ ] All 8 pages reviewed for copy accuracy
- [ ] Lighthouse run on every page — 95+ across the board
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Test the contact form end-to-end (form → email lands in inbox → reply-to works)
- [ ] Test WhatsApp floating button on a real mobile device

---

## Maintenance

To swap a fact across the entire site (phone number, hours, address), edit `lib/content/site.ts`. Every component reads from it.

To swap a piece of copy (a headline, a paragraph), find the relevant file under `lib/content/copy/`. Each page has its own.

To add a new page, create `app/(marketing)/<slug>/page.tsx`, add an entry to the sitemap, and link from `lib/content/nav.ts` if it should appear in nav or footer.

---

## License

© ITSolute Systems. All rights reserved.

Sister brand: [CCTVPROS](https://cctvpros.in) — Surveillance & Security.
