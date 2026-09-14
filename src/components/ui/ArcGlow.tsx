import type { CSSProperties } from 'react'

/**
 * ArcGlow
 * Two large circles lit only on their inner edge, forming an "hourglass"
 * effect that meets at a central point of light. Pure CSS (gradients), no
 * image, no blur on the arcs themselves.
 *
 * Recolored from the original warm gold version into TEKMEN's signature
 * blue → violet gradient (#6366F1 Indigo 500 → #7C3AED Violet 600 →
 * #A78BFA Violet 400), matching the TEKMEN Revolution brand palette.
 *
 * ArcGlow has no height of its own — it fills `w-full h-full` and inherits
 * the real height of the title block (Navbar + text) via `absolute inset-0`
 * in Hero.tsx. The circles are anchored at `bottom: 0`, so the junction
 * point always falls exactly at the text/image boundary regardless of
 * screen size.
 */
const ArcGlow = () => {
  const size = 'clamp(760px, 165vw, 2200px)'

  const rim =
    'radial-gradient(circle at center, ' +
    'rgba(124,58,237,0) 55%, ' +
    'rgba(99,102,241,0.10) 82%, ' +
    'rgba(99,102,241,0.45) 92%, ' +
    '#6366F1 96.5%, ' +
    '#7C3AED 98.8%, ' +
    'rgba(167,139,250,0.55) 99.6%, ' +
    'rgba(167,139,250,0) 100%)'

  const circleBase: CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundImage: rim,
    left: '50%',
    bottom: 0,
    position: 'absolute',
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative w-full h-full overflow-hidden"
      style={{ backgroundColor: '#0B0F19' }}
    >
      {/* Top sphere: bottom:0 already pins its bottom edge exactly on the
          text/image boundary; +3px is just an anti-aliasing seam. */}
      <div
        style={{
          ...circleBase,
          transform: 'translate(-50%, 3px)',
        }}
      />

      {/* Bottom sphere: pushed down almost its entire height, leaving only
          a thin slice of its top edge visible just below the boundary. */}
      <div
        style={{
          ...circleBase,
          transform: 'translate(-50%, calc(100% - 3px))',
        }}
      />

      {/* Bright junction point, centered exactly on the boundary */}
      <div
        className="absolute left-1/2 bottom-0 blur-md"
        style={{
          width: 'min(48vw, 480px)',
          height: 'min(11vw, 100px)',
          transform: 'translate(-50%, 50%)',
          background:
            'radial-gradient(ellipse at center, #FFFFFF 0%, #F5F3FF 20%, #C4B5FD 40%, rgba(40,182,255,0.4) 65%, rgba(124,58,237,0.3) 78%, rgba(124,58,237,0) 90%)',
        }}
      />

      {/* Diffuse cold cyan-violet halo around the junction point */}
      <div
        className="absolute left-1/2 bottom-0 blur-3xl"
        style={{
          width: 'min(75vw, 780px)',
          height: 'min(28vw, 260px)',
          transform: 'translate(-50%, 58%)',
          background:
            'radial-gradient(ellipse at center, rgba(40,182,255,0.18) 0%, rgba(99,102,241,0.25) 35%, rgba(124,58,237,0.15) 60%, transparent 80%)',
        }}
      />
    </div>
  )
}

export default ArcGlow
