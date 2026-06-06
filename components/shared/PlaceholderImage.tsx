import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Wraps next/image with a TODO marker in development.
 *
 * REPLACEMENT GUIDE:
 *   Each usage of <PlaceholderImage> should be replaced with a real photograph
 *   matching the `intent` description before launch. The `todo` prop is rendered
 *   as a small overlay tag in dev mode only.
 */
type Props = {
  src: string
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

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? '100vw'}
          quality={85}
          className="object-cover"
          priority={priority}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={85}
          className="h-full w-full object-cover"
          priority={priority}
        />
      )}
      {isDev ? (
        <span
          aria-hidden
          className="absolute left-2 top-2 z-10 rounded bg-amber-400/95 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-black"
        >
          TODO: {intent}
        </span>
      ) : null}
    </div>
  )
}
