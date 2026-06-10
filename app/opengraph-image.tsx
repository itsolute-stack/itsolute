import { ImageResponse } from 'next/og'

export const alt = 'ITSolute Systems — IT services in Kerala'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Default OG card rendered at request time. Mirrors the brand wordmark from
 * /public/logo.svg — brand-blue "IT", cream "Solute", orange circle accent.
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

        {/* Wordmark — IT in brand blue, Solute in surface cream, orange dot */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            fontSize: 168,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          <span style={{ color: '#1e4ed8' }}>IT</span>
          <span style={{ color: '#f7f3f5' }}>Solute</span>
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: '#ec8f34',
              alignSelf: 'flex-end',
              marginBottom: 18,
              display: 'flex',
            }}
          />
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
              maxWidth: 820,
              display: 'flex',
            }}
          >
            Hardware · Software · Networking · Automation. Parthas Lane,
            Kottayam.
          </div>

          {/* Icon mark — navy square with orange circle */}
          <svg viewBox="0 0 64 64" width="120" height="120">
            <rect width="64" height="64" rx="12" fill="#1e4ed8" />
            <circle cx="32" cy="32" r="11.5" fill="#ec8f34" />
          </svg>
        </div>
      </div>
    ),
    size,
  )
}
