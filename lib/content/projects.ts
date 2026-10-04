import { entranceDistricts } from '@/lib/content/copy/entranceDistricts'

/**
 * Entrance automation project gallery — /entrance-automation/projects.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS PAGE IS DELIBERATELY EMPTY AND DELIBERATELY NOINDEXED.
 *
 * `projects` below is an empty array on purpose. The structure (types, filters,
 * grid, empty state) is built and ready, but no entry may be added here unless
 * it is a REAL completed installation. No placeholder, sample, or illustrative
 * projects — a fabricated gallery is both a trust problem and a search-quality
 * problem.
 *
 * While the array is empty the page:
 *   - renders a "coming soon" state instead of an empty grid
 *   - is noindex (see the route's `robots` metadata)
 *   - is excluded from app/sitemap.ts
 *   - is not linked from anywhere on the site
 *
 * TO GO LIVE — once 3+ genuine projects are in the array:
 *   1. app/(marketing)/entrance-automation/projects/page.tsx
 *      → change `robots` to `{ index: true, follow: true }`
 *   2. app/sitemap.ts
 *      → add the route at priority 0.8
 *   3. Link it from:
 *      → the hub            /entrance-automation
 *      → both product pages /entrance-automation/automatic-gates
 *                          /entrance-automation/boom-barriers
 *      → each district page (the 4 entries in entranceDistricts)
 *   4. Drop each project photo into /public/images/entrance-automation/projects/
 *      at 4:3 (1200×900) and point `image` at it.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Districts we publish project work for — keyed to the district landing pages. */
export type ProjectDistrictSlug = keyof typeof entranceDistricts

/** Product installed, matching the five rows in entranceGateTypes. */
export type ProjectType =
  | 'sliding-gate'
  | 'swing-gate'
  | 'roller-gate'
  | 'boom-barrier'

/** What kind of site it was — used for copy, not as a filter. */
export type ProjectPropertyType =
  | 'home'
  | 'apartment'
  | 'commercial'
  | 'institution'
  | 'industrial'

export type Project = {
  /** Stable kebab-case slug, unique across the array. */
  id: string
  /** Short, factual headline. No superlatives, no brand names. */
  title: string
  district: ProjectDistrictSlug
  /** Town or locality within the district. */
  town: string
  type: ProjectType
  propertyType: ProjectPropertyType
  /** Optional, e.g. "4.5 m single leaf" — only when it is known and accurate. */
  gateSize?: string
  /** Two or three sentences on what the site needed and what was fitted. */
  summary: string
  image: { src: string; alt: string }
  /** Completion date, ISO `YYYY-MM-DD`. */
  date: string
}

/**
 * Real completed installations only. Empty until genuine project data and
 * photographs exist — see the notes at the top of this file.
 */
export const projects: Project[] = []

/** Filter labels for the product type, in the same order as the pricing table. */
export const projectTypeLabels: Record<ProjectType, string> = {
  'sliding-gate': 'Sliding gates',
  'roller-gate': 'Roller gates',
  'swing-gate': 'Swing gates',
  'boom-barrier': 'Boom barriers',
}

export const projectPropertyLabels: Record<ProjectPropertyType, string> = {
  home: 'Home',
  apartment: 'Apartment',
  commercial: 'Commercial',
  institution: 'Institution',
  industrial: 'Industrial',
}

/** District display name, read from the district pages so the two never drift. */
export function projectDistrictLabel(slug: ProjectDistrictSlug): string {
  return entranceDistricts[slug].district
}

/**
 * Only the districts and types actually present in `projects`, so the filter
 * bar never offers a district or type with no work behind it at all.
 *
 * Note this is per-dimension: each list is computed from the whole array, so a
 * *combination* (e.g. Ernakulam + sliding gates) can still match nothing. The
 * grid handles that with an explicit "nothing matches" message and a reset.
 *
 * Both lists are empty while `projects` is empty, which is why the page shows
 * its "coming soon" state instead of a filter bar.
 */
export function activeProjectDistricts(): ProjectDistrictSlug[] {
  const present = new Set(projects.map((p) => p.district))
  return (Object.keys(entranceDistricts) as ProjectDistrictSlug[]).filter((s) =>
    present.has(s),
  )
}

export function activeProjectTypes(): ProjectType[] {
  const present = new Set(projects.map((p) => p.type))
  return (Object.keys(projectTypeLabels) as ProjectType[]).filter((t) =>
    present.has(t),
  )
}
