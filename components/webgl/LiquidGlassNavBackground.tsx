'use client'

import { useEffect, useRef } from 'react'
import { MultiPassRenderer } from '@/lib/webgl/GLUtils'
import {
  vertexShader,
  fragmentBgShader,
  fragmentBgVblurShader,
  fragmentBgHblurShader,
  fragmentMainShader,
  computeGaussianKernelByRadius,
} from '@/lib/webgl/navbarShaders'

interface LiquidGlassNavBackgroundProps {
  /**
   * Effect intensity (0-100)
   */
  intensity?: number
  /**
   * Tint color [r, g, b, alpha]
   */
  tint?: [number, number, number, number]
  /**
   * Enable mouse hover reactivity
   */
  hoverReactive?: boolean
}

/**
 * LiquidGlassNavBackground
 *
 * WebGL2-based liquid glass effect for navbar background
 * Inspired by liquid-glass-studio with refraction, dispersion, and glare
 *
 * Architecture:
 * - Pass 1 (bgPass): Renders base background gradient
 * - Pass 2 (vBlurPass): Vertical Gaussian blur
 * - Pass 3 (hBlurPass): Horizontal Gaussian blur
 * - Pass 4 (mainPass): Final refraction + chromatic dispersion + glare
 */
export default function LiquidGlassNavBackground({
  intensity = 80,
  tint = [0.95, 0.96, 0.97, 1.0],
  hoverReactive = true,
}: LiquidGlassNavBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rendererRef = useRef<MultiPassRenderer | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const springRef = useRef({ x: 0, y: 0, vx: 0, vy: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Initialize WebGL2 context
    const gl = canvas.getContext('webgl2', {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    })

    if (!gl) {
      console.warn('WebGL2 not supported, falling back to CSS')
      return
    }

    // Check for required extension
    const ext = gl.getExtension('EXT_color_buffer_float')
    if (!ext) {
      console.warn('EXT_color_buffer_float not supported')
      return
    }

    // Configure blur parameters
    const blurRadius = Math.round((intensity / 100) * 16)
    const blurWeights = computeGaussianKernelByRadius(blurRadius)
    const paddedWeights = new Array(32).fill(0)
    blurWeights.forEach((w, i) => {
      paddedWeights[i] = w
    })

    // Setup resize handler
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      if (rendererRef.current) {
        rendererRef.current.resize(canvas.width, canvas.height)
      }
    }

    // Initialize renderer with 4-pass pipeline
    try {
      rendererRef.current = new MultiPassRenderer(canvas, [
        // Pass 1: Background
        {
          name: 'bgPass',
          shader: {
            vertex: vertexShader,
            fragment: fragmentBgShader,
          },
        },
        // Pass 2: Vertical blur
        {
          name: 'vBlurPass',
          shader: {
            vertex: vertexShader,
            fragment: fragmentBgVblurShader,
          },
          inputs: { u_prevPassTexture: 'bgPass' },
        },
        // Pass 3: Horizontal blur
        {
          name: 'hBlurPass',
          shader: {
            vertex: vertexShader,
            fragment: fragmentBgHblurShader,
          },
          inputs: { u_prevPassTexture: 'vBlurPass' },
        },
        // Pass 4: Main refraction pass
        {
          name: 'mainPass',
          shader: {
            vertex: vertexShader,
            fragment: fragmentMainShader,
          },
          inputs: {
            u_blurredBg: 'hBlurPass',
            u_bg: 'bgPass',
          },
          outputToScreen: true,
        },
      ])

      handleResize()
    } catch (error) {
      console.error('Failed to initialize WebGL renderer:', error)
      return
    }

    // Mouse tracking with spring physics
    const handleMouseMove = (e: MouseEvent) => {
      if (!hoverReactive) return
      const rect = canvas.getBoundingClientRect()
      // Normalize to -1 to 1 range, centered
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * -2
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = 0
      mouseRef.current.y = 0
    }

    // Animation loop
    const render = () => {
      if (!rendererRef.current) return

      // Spring physics for smooth mouse following
      const stiffness = 0.15
      const damping = 0.8
      const targetX = mouseRef.current.x
      const targetY = mouseRef.current.y

      springRef.current.vx += (targetX - springRef.current.x) * stiffness
      springRef.current.vy += (targetY - springRef.current.y) * stiffness
      springRef.current.vx *= damping
      springRef.current.vy *= damping
      springRef.current.x += springRef.current.vx
      springRef.current.y += springRef.current.vy

      const dpr = Math.min(window.devicePixelRatio, 2)

      // Shared uniforms for all passes
      const commonUniforms = {
        u_resolution: [canvas.width, canvas.height],
        u_dpr: dpr,
        u_mouseSpring: [springRef.current.x, springRef.current.y],
        u_shapeWidth: canvas.width / dpr,
        u_shapeHeight: canvas.height / dpr,
        u_shapeRadius: 32 * dpr, // Pill shape radius
        u_shapeRoundness: 2.5, // Superellipse parameter
        u_bgType: 0,
      }

      // Pass-specific uniforms
      const passUniforms = {
        bgPass: commonUniforms,
        vBlurPass: {
          ...commonUniforms,
          u_blurRadius: blurRadius,
          u_blurWeights: paddedWeights,
        },
        hBlurPass: {
          ...commonUniforms,
          u_blurRadius: blurRadius,
          u_blurWeights: paddedWeights,
        },
        mainPass: {
          ...commonUniforms,
          u_tint: tint,
          u_refThickness: 0.08 * (intensity / 100),
          u_refFactor: 0.15 * (intensity / 100),
          u_refDispersion: 0.21 * (intensity / 100),
          u_glareAngle: Math.PI * 0.25, // 45 degrees
          u_glareFactor: 0.3 * (intensity / 100),
        },
      }

      rendererRef.current.render(passUniforms)
      rafRef.current = requestAnimationFrame(render)
    }

    // Start animation
    rafRef.current = requestAnimationFrame(render)

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      rendererRef.current?.dispose()
      rendererRef.current = null
    }
  }, [intensity, tint, hoverReactive])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
