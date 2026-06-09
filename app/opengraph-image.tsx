import { ImageResponse } from 'next/og'

export const alt = 'ITSolute Systems — IT services in Kerala'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Default OG card rendered at build/request time. Dark navy background,
 * orange eyebrow, big wordmark with brand-blue "IT", icon mark in the
 * bottom-right corner. No static asset to maintain — always in sync with
 * the palette.
 */
export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0b1f3a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            color: '#ec8f34',
            fontSize: 24,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 600,
            display: 'flex',
          }}
        >
          IT services · Kerala
        </div>

        <div
          style={{
            fontSize: 156,
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: 'white',
            display: 'flex',
          }}
        >
          <span style={{ color: '#1e4ed8' }}>IT</span>Solute
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 32,
          }}
        >
          <div
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 28,
              lineHeight: 1.3,
              maxWidth: 760,
              display: 'flex',
            }}
          >
            Hardware · Software · Networking · Automation. Parthas Lane,
            Kottayam.
          </div>
          <svg viewBox="0 0 64 64" width="120" height="120">
            <rect width="64" height="64" rx="12" fill="#1e4ed8" />
            <path
              d="M 64 12 A 12 12 0 0 0 52 0 L 42 0 L 42 16 Q 42 24 50 24 L 64 24 Z"
              fill="#ec8f34"
            />
          </svg>
        </div>
      </div>
    ),
    size,
  )
}
