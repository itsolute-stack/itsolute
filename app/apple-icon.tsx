import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/**
 * iOS home-screen icon. Notched-cube mark scaled to 180×180. Generated
 * dynamically by Next's edge image renderer — no static PNG to maintain.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#1e4ed8',
          position: 'relative',
          borderRadius: 36,
          display: 'flex',
        }}
      >
        {/* Notched corner — accent triangle */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 68,
            height: 68,
            background: '#ec8f34',
            borderTopRightRadius: 36,
            borderBottomLeftRadius: 24,
          }}
        />
      </div>
    ),
    size,
  )
}
