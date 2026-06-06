import type { Variants } from 'framer-motion'

/* ============================================================================
 * Motion vocabulary — ease-out-quart and ease-out-expo only.
 * Use whileInView with viewport={{ once: true, margin: '-100px' }}.
 * Honors prefers-reduced-motion via globals.css.
 * ========================================================================= */

export const easeOutQuart = [0.22, 1, 0.36, 1] as const
export const easeOutExpo = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutQuart },
  },
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutQuart },
  },
}

export const fadeUpSubtle: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutQuart },
  },
}

export const stagger = (delay = 0.08): Variants => ({
  animate: {
    transition: { staggerChildren: delay },
  },
})

/** Standard viewport options for reveal-on-scroll. */
export const inView = { once: true, margin: '-100px' } as const
