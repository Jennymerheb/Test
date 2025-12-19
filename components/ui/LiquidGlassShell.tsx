'use client'

import React, { type ReactNode, useRef, useEffect, useState } from 'react'

interface LiquidGlassShellProps {
  children: ReactNode
  className?: string
  /**
   * Intensity of the glass effect (0-100)
   * Higher = stronger blur and refraction
   */
  intensity?: number
  /**
   * Enable noise texture overlay for extra realism
   */
  noiseOverlay?: boolean
  /**
   * Enable subtle chromatic aberration / dispersion
   */
  chromaticAberration?: boolean
}

/**
 * LiquidGlassShell Component
 *
 * A reusable glass wrapper inspired by liquid-glass-studio
 * Creates a liquid glass effect using:
 * - Multi-layer backdrop blur (mimics WebGL blur passes)
 * - Gradient overlays (simulates refraction)
 * - Inner shadows + outer glow (depth & dispersion)
 * - Optional noise texture (glass surface imperfections)
 * - Optional chromatic aberration (RGB color separation)
 *
 * From liquid-glass-studio:
 * - Uses backdrop-filter for the blur effect
 * - Gradient simulates the refraction/distortion
 * - Inner shadow mimics the depth/thickness
 * - Noise adds micro-texture realism
 */
export default function LiquidGlassShell({
  children,
  className = '',
  intensity = 80,
  noiseOverlay = true,
  chromaticAberration = false,
}: LiquidGlassShellProps) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Track mouse position for dynamic glare effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setMousePos({ x, y })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Calculate blur strength based on intensity
  const blurStrength = Math.round((intensity / 100) * 24)
  const saturateValue = 100 + intensity / 2

  return (
    <div
      ref={containerRef}
      className={`liquid-glass-shell ${className}`}
      style={
        {
          '--blur-strength': `${blurStrength}px`,
          '--saturate-value': `${saturateValue}%`,
          '--mouse-x': mousePos.x,
          '--mouse-y': mousePos.y,
          '--intensity': intensity / 100,
        } as React.CSSProperties
      }
      data-chromatic={chromaticAberration}
      data-noise={noiseOverlay}
    >
      {/* Base glass layer - simulates main refraction pass */}
      <div className="liquid-glass-base" />

      {/* Refraction gradient layer - simulates dispersion */}
      <div className="liquid-glass-refraction" />

      {/* Glare layer - simulates Fresnel reflection */}
      <div className="liquid-glass-glare" />

      {/* Optional noise overlay - adds surface micro-texture */}
      {noiseOverlay && <div className="liquid-glass-noise" />}

      {/* Optional chromatic aberration - RGB color separation */}
      {chromaticAberration && (
        <>
          <div className="liquid-glass-chromatic liquid-glass-chromatic-r" />
          <div className="liquid-glass-chromatic liquid-glass-chromatic-g" />
          <div className="liquid-glass-chromatic liquid-glass-chromatic-b" />
        </>
      )}

      {/* Content layer */}
      <div className="liquid-glass-content">{children}</div>
    </div>
  )
}
