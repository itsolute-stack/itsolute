'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { services } from '@/lib/content/services'
import { cn } from '@/lib/utils'

/**
 * Desktop "Services" dropdown. Built without a new dependency (the project has
 * no dropdown/navigation-menu primitive), but kept accessible:
 *  - button exposes aria-haspopup / aria-expanded / aria-controls
 *  - opens on hover and on click/Enter/Space
 *  - closes on Escape (returning focus to the button), outside pointerdown,
 *    focus leaving the group, mouse leave, and on navigating
 *  - links stay in DOM order so Tab walks them naturally
 *
 * Contents come from services.ts, so a new service appears here automatically.
 */
export function ServicesDropdown() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    function onPointerDown(e: PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
      >
        Services
        <ChevronDown
          aria-hidden
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
        />
      </button>

      {open ? (
        // pt-3 keeps a hover bridge between the button and the panel
        <div
          id="services-menu"
          className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3"
        >
          <ul
            aria-label="Services"
            className="overflow-hidden rounded-lg border border-white/10 bg-[color:var(--color-ink)]/95 p-2 shadow-xl backdrop-blur-md"
          >
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
