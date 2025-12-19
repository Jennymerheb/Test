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
  className?: string
  /**
   * Effect intensity (0-100)
   */
  intensity?: number
  /**
   * Enable mouse hover reactivity
   */
  hoverReactive?: boolean
}

/**
 * LiquidGlassNavBackground
 *
 * WebGL2-based liquid glass effect using multi-pass rendering:
 * - Pass 1: Renders soft gradient background
 * - Pass 2: Vertical Gaussian blur
 * - Pass 3: Horizontal Gaussian blur
 * - Pass 4: Refraction + chromatic dispersion + Fresnel glare
 */
export default function LiquidGlassNavBackground({
  className = '',
  intensity = 80,
  hoverReactive = true,
}: LiquidGlassNavBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rendererRef = useRef<MultiPassRenderer | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const springRef = useRef({ x: 0, y: 0, vx: 0, vy: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    // Initialize WebGL2 context
    const gl = canvas.getContext('webgl2', {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    })

    if (!gl) {
      console.warn('WebGL2 not supported')
      return
    }

    // Check for required extension
    const ext = gl.getExtension('EXT_color_buffer_float')
    if (!ext) {
      console.warn('EXT_color_buffer_float not supported')
      return
    }

    // Blur configuration
    const blurRadius = Math.round((intensity / 100) * 16)
    const blurWeights = computeGaussianKernelByRadius(blurRadius)
    const paddedWeights = new Array(32).fill(0)
    blurWeights.forEach((w, i) => {
      paddedWeights[i] = w
    })

    // Resize handler - sizes canvas to match container
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      const rect = container.getBoundingClientRect()

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
        {
          name: 'bgPass',
          shader: { vertex: vertexShader, fragment: fragmentBgShader },
        },
        {
          name: 'vBlurPass',
          shader: { vertex: vertexShader, fragment: fragmentBgVblurShader },
          inputs: { u_prevPassTexture: 'bgPass' },
        },
        {
          name: 'hBlurPass',
          shader: { vertex: vertexShader, fragment: fragmentBgHblurShader },
          inputs: { u_prevPassTexture: 'vBlurPass' },
        },
        {
          name: 'mainPass',
          shader: { vertex: vertexShader, fragment: fragmentMainShader },
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

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!hoverReactive) return
      const rect = container.getBoundingClientRect()
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

      // Spring physics for smooth cursor following
      const stiffness = 0.15
      const damping = 0.8

      springRef.current.vx += (mouseRef.current.x - springRef.current.x) * stiffness
      springRef.current.vy += (mouseRef.current.y - springRef.current.y) * stiffness
      springRef.current.vx *= damping
      springRef.current.vy *= damping
      springRef.current.x += springRef.current.vx
      springRef.current.y += springRef.current.vy

      const dpr = Math.min(window.devicePixelRatio, 2)

      // Common uniforms for all passes
      const commonUniforms = {
        u_resolution: [canvas.width, canvas.height],
        u_dpr: dpr,
        u_mouseSpring: [springRef.current.x, springRef.current.y],
        u_shapeWidth: canvas.width / dpr,
        u_shapeHeight: canvas.height / dpr,
        u_shapeRadius: 32 * dpr,
        u_shapeRoundness: 2.5,
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
          u_tint: [0.95, 0.96, 0.97, 1.0],
          u_refThickness: 0.08 * (intensity / 100),
          u_refFactor: 0.15 * (intensity / 100),
          u_refDispersion: 0.21 * (intensity / 100),
          u_glareAngle: Math.PI * 0.25,
          u_glareFactor: 0.3 * (intensity / 100),
        },
      }

      rendererRef.current.render(passUniforms)
      rafRef.current = requestAnimationFrame(render)
    }

    // Start rendering
    rafRef.current = requestAnimationFrame(render)

    // Event listeners
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      rendererRef.current?.dispose()
      rendererRef.current = null
    }
  }, [intensity, hoverReactive])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
    </div>
  )
}
