/**
 * WebGL2 Support Detection Hook
 *
 * Checks if the browser supports WebGL2 and if the device is powerful enough
 * Returns false on mobile/tablet or if WebGL2 is unavailable
 */

'use client'

import { useState, useEffect } from 'react'

export function useSupportsWebGL2(): boolean {
  const [supportsWebGL2, setSupportsWebGL2] = useState(false)

  useEffect(() => {
    // Check if we're on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

    // Don't run WebGL on mobile devices (performance)
    if (isMobile) {
      setSupportsWebGL2(false)
      return
    }

    // Create a temporary canvas to test WebGL2 support
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2')

    if (!gl) {
      setSupportsWebGL2(false)
      return
    }

    // Check for required extensions
    const hasFloatExtension = gl.getExtension('EXT_color_buffer_float')

    setSupportsWebGL2(!!hasFloatExtension)

    // Cleanup
    const loseContext = gl.getExtension('WEBGL_lose_context')
    if (loseContext) {
      loseContext.loseContext()
    }
  }, [])

  return supportsWebGL2
}
