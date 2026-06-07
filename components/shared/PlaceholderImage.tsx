'use client'

import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Wraps next/image with two layers of graceful degradation:
 *
 *   1. If `src` is missing or empty, renders a styled placeholder.
 *   2. If next/image fires onError (CDN 404, network fail), swaps to the same
 *      styled placeholder — a broken image never shows ugly alt text again.
 *
 * In development, every placeholder (real or fallback) gets a yellow TODO chip
 * so you can find unreplaced photos at a glance.
 *
 * REPLACEMENT GUIDE
 * Each usage of <PlaceholderImage> should be replaced with a real photograph
 * matching the `intent` description before launch.
 */
type Props = {
  src?: string
  alt: string
  width: number
  height: number
  className?: string
  intent: string
  priority?: boolean
  sizes?: string
  fill?: boolean
}

export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className,
  intent,
  priority,
  sizes,
  fill,
}: Props) {
  const isDev = process.env.NODE_ENV === 'development'
  const [errored, setErrored] = useState(false)
  const showFallback = !src || errored

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {showFallback ? (
        <FallbackBlock fill={fill} alt={alt} />
      ) : fill ? (
        <Image
          src={src!}
          alt={alt}
          fill
          sizes={sizes ?? '100vw'}
          quality={85}
          className="object-cover"
          priority={priority}
          onError={() => setErrored(true)}
        />
      ) : (
        <Image
          src={src!}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={85}
          className="h-full w-full object-cover"
          priority={priority}
          onError={() => setErrored(true)}
        />
      )}
      {isDev ? (
        <span
          aria-hidden
          className="absolute left-2 top-2 z-10 rounded bg-amber-400/95 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-black"
        >
          {showFallback ? 'TODO: image missing — ' : 'TODO: '}{intent}
        </span>
      ) : null}
    </div>
  )
}

/**
 * Visual placeholder used when no src is provided OR the network image failed.
 * Styled as an intentional design element so it never embarrasses the brand —
 * dashed border, neutral background, centered image icon.
 */
function FallbackBlock({ fill, alt }: { fill?: boolean; alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'flex items-center justify-center',
        'border border-dashed border-slate-300 bg-slate-100',
        fill ? 'absolute inset-0' : 'h-full w-full',
      )}
    >
      <ImageIcon
        aria-hidden
        className="h-10 w-10 text-slate-400"
        strokeWidth={1.5}
      />
    </div>
  )
}
