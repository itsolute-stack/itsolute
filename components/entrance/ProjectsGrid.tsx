'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import {
  projects,
  projectTypeLabels,
  projectPropertyLabels,
  projectDistrictLabel,
  activeProjectDistricts,
  activeProjectTypes,
  type ProjectDistrictSlug,
  type ProjectType,
} from '@/lib/content/projects'
import { cn } from '@/lib/utils'

/**
 * Project gallery, filterable by district and by product type.
 *
 * The filter bar is built from the districts and types actually present in the
 * data, so it never offers a district or type with nothing behind it. A
 * combination of the two can still match nothing, which is handled explicitly
 * below. While `projects` is empty (see lib/content/projects.ts) this renders
 * the "coming soon" state instead of an empty grid — and switches over on its
 * own the moment real projects are added.
 */

const ALL = 'all' as const
type DistrictFilter = ProjectDistrictSlug | typeof ALL
type TypeFilter = ProjectType | typeof ALL

export function ProjectsGrid({ whatsappMessage }: { whatsappMessage?: string }) {
  const [district, setDistrict] = useState<DistrictFilter>(ALL)
  const [type, setType] = useState<TypeFilter>(ALL)

  const districts = activeProjectDistricts()
  const types = activeProjectTypes()

  const visible = useMemo(
    () =>
      projects.filter(
        (p) =>
          (district === ALL || p.district === district) &&
          (type === ALL || p.type === type),
      ),
    [district, type],
  )

  if (projects.length === 0) {
    return (
      <div className="mx-auto max-w-xl rounded-lg border border-dashed border-slate-300 bg-white px-8 py-14 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[color:var(--color-accent)]">
          Coming soon
        </p>
        <h2 className="mt-4 text-2xl font-medium tracking-tight text-[color:var(--color-ink)] md:text-3xl">
          Recent installations coming soon
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          We&rsquo;re putting this gallery together. In the meantime, WhatsApp us
          and we&rsquo;ll send photos of work we&rsquo;ve completed, and arrange a
          free site survey for yours.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton variant="primary" size="lg" message={whatsappMessage} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col gap-5">
        <FilterRow
          legend="District"
          options={[
            { value: ALL, label: 'All districts' },
            ...districts.map((d) => ({ value: d, label: projectDistrictLabel(d) })),
          ]}
          active={district}
          onSelect={(v) => setDistrict(v as DistrictFilter)}
        />
        <FilterRow
          legend="Type"
          options={[
            { value: ALL, label: 'All types' },
            ...types.map((t) => ({ value: t, label: projectTypeLabels[t] })),
          ]}
          active={type}
          onSelect={(v) => setType(v as TypeFilter)}
        />
      </div>

      <p aria-live="polite" className="mt-8 text-sm text-slate-500">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'}
      </p>

      {visible.length === 0 ? (
        <p className="mt-6 text-base text-slate-600">
          Nothing matches that combination yet.{' '}
          <button
            type="button"
            onClick={() => {
              setDistrict(ALL)
              setType(ALL)
            }}
            className="font-medium text-[color:var(--color-electric)] underline underline-offset-4"
          >
            Clear the filters
          </button>
          .
        </p>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <li
              key={p.id}
              className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-accent)]">
                  {projectTypeLabels[p.type]}
                </p>
                <h3 className="text-xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{p.summary}</p>
                <dl className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-3 text-xs text-slate-500">
                  <div className="flex gap-1.5">
                    <dt className="sr-only">Location</dt>
                    <dd>
                      {p.town}, {projectDistrictLabel(p.district)}
                    </dd>
                  </div>
                  <div className="flex gap-1.5">
                    <dt className="sr-only">Property type</dt>
                    <dd>{projectPropertyLabels[p.propertyType]}</dd>
                  </div>
                  {p.gateSize ? (
                    <div className="flex gap-1.5">
                      <dt className="sr-only">Gate size</dt>
                      <dd>{p.gateSize}</dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function FilterRow({
  legend,
  options,
  active,
  onSelect,
}: {
  legend: string
  options: { value: string; label: string }[]
  active: string
  onSelect: (value: string) => void
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500 sm:w-20">
        {legend}
      </span>
      <div role="group" aria-label={`Filter by ${legend.toLowerCase()}`} className="flex flex-wrap gap-2">
        {options.map((o) => {
          const isActive = active === o.value
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelect(o.value)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-colors',
                isActive
                  ? 'border-[color:var(--color-ink)] bg-[color:var(--color-ink)] text-white'
                  : 'border-slate-300 text-slate-600 hover:border-slate-400 hover:text-[color:var(--color-ink)]',
              )}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
