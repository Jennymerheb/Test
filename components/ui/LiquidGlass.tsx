'use client'

import { type ReactNode } from 'react'
import { useSupportsWebGL2 } from '@/lib/webgl/useSupportsWebGL2'
import LiquidGlassNavBackground from '@/components/webgl/LiquidGlassNavBackground'
import LiquidGlassShell from '@/components/ui/LiquidGlassShell'

interface LiquidGlassProps {
  children: ReactNode
  className?: string
  /**
   * Intensity of the glass effect (0-100)
   */
  intensity?: number
  /**
   * Enable noise texture overlay (CSS fallback only)
   */
  noiseOverlay?: boolean
  /**
   * Enable chromatic aberration (CSS fallback only)
   */
  chromaticAberration?: boolean
  /**
   * Enable mouse hover reactivity (WebGL only)
   */
  hoverReactive?: boolean
}

/**
 * LiquidGlass - Smart wrapper that chooses WebGL or CSS implementation
 *
 * - On desktop with WebGL2: Uses shader-based liquid glass effect
 * - On mobile or without WebGL2: Falls back to CSS glass effect
 */
export default function LiquidGlass({
  children,
  className = '',
  intensity = 80,
  noiseOverlay = true,
  chromaticAberration = false,
  hoverReactive = true,
}: LiquidGlassProps) {
  const supportsWebGL2 = useSupportsWebGL2()

  // Check if className includes a custom border radius
  const hasCustomRadius = className.includes('rounded-')
  const borderRadiusClass = hasCustomRadius ? '' : 'rounded-full'

  // WebGL2 path - shader-based liquid glass
  if (supportsWebGL2) {
    return (
      <div className={`relative overflow-hidden ${borderRadiusClass} ${className}`}>
        {/* WebGL canvas background - absolutely positioned, fills container */}
        <LiquidGlassNavBackground intensity={intensity} hoverReactive={hoverReactive} />
        {/* Content layer - on top of canvas */}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  // CSS fallback - multi-layer backdrop-filter effect
  return (
    <LiquidGlassShell
      className={className}
      intensity={intensity}
      noiseOverlay={noiseOverlay}
      chromaticAberration={chromaticAberration}
    >
      {children}
    </LiquidGlassShell>
  )
}
