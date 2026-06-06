'use client'

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion'
import { fadeUp, inView } from '@/lib/motion'

type Props = HTMLMotionProps<'div'> & {
  variants?: Variants
  delay?: number
}

/**
 * Reveal-on-scroll wrapper. Default: fadeUp on enter, once.
 */
export function MotionBlock({ children, variants = fadeUp, delay, ...rest }: Props) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={inView}
      variants={variants}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
