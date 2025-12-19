/**
 * WebGL2 Utilities - Extracted from liquid-glass-studio
 * https://github.com/iyinchao/liquid-glass-studio
 *
 * Simplified for navbar use - removed unnecessary features
 * Core classes: ShaderProgram, FrameBuffer, RenderPass, MultiPassRenderer
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

type GL = WebGL2RenderingContext

interface ShaderSource {
  vertex: string
  fragment: string
}

interface RenderPassConfig {
  name: string
  shader: ShaderSource
  inputs?: { [uniformName: string]: string }
  outputToScreen?: boolean
}

// ===== ShaderProgram =====
export class ShaderProgram {
  private gl: GL
  private program: WebGLProgram
  private uniforms: Map<string, WebGLUniformLocation> = new Map()

  constructor(gl: GL, source: ShaderSource) {
    this.gl = gl
    this.program = this.createProgram(source)
    this.detectUniforms()
  }

  private createShader(type: number, source: string): WebGLShader {
    const gl = this.gl
    const shader = gl.createShader(type)
    if (!shader) throw new Error('Failed to create shader')

    gl.shaderSource(shader, source)
    gl.compileShader(shader)

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const info = gl.getShaderInfoLog(shader)
      gl.deleteShader(shader)
      throw new Error(`Shader compile error: ${info}`)
    }

    return shader
  }

  private createProgram(source: ShaderSource): WebGLProgram {
    const gl = this.gl
    const program = gl.createProgram()
    if (!program) throw new Error('Failed to create program')

    const vertexShader = this.createShader(gl.VERTEX_SHADER, source.vertex)
    const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, source.fragment)

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const info = gl.getProgramInfoLog(program)
      gl.deleteProgram(program)
      throw new Error(`Program link error: ${info}`)
    }

    gl.deleteShader(vertexShader)
    gl.deleteShader(fragmentShader)

    return program
  }

  private detectUniforms(): void {
    const gl = this.gl
    const numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS)

    for (let i = 0; i < numUniforms; i++) {
      const info = gl.getActiveUniform(this.program, i)
      if (!info) continue

      const location = gl.getUniformLocation(this.program, info.name)
      if (!location) continue

      // Handle array uniforms
      const arrayRegex = /\[\d+\]$/
      const uniformName = arrayRegex.test(info.name)
        ? info.name.replace(arrayRegex, '')
        : info.name

      this.uniforms.set(uniformName, location)
    }
  }

  public use(): void {
    this.gl.useProgram(this.program)
  }

  public getAttributeLocation(name: string): number {
    return this.gl.getAttribLocation(this.program, name)
  }

  public setUniform(name: string, value: any): void {
    const location = this.uniforms.get(name)
    if (!location) return

    const gl = this.gl

    if (typeof value === 'number') {
      gl.uniform1f(location, value)
    } else if (Array.isArray(value)) {
      if (value.length === 2) {
        gl.uniform2f(location, value[0], value[1])
      } else if (value.length === 3) {
        gl.uniform3f(location, value[0], value[1], value[2])
      } else if (value.length === 4) {
        gl.uniform4f(location, value[0], value[1], value[2], value[3])
      } else if (value.length > 4) {
        gl.uniform1fv(location, value)
      }
    }
  }

  public dispose(): void {
    this.gl.deleteProgram(this.program)
  }
}

// ===== FrameBuffer =====
export class FrameBuffer {
  private gl: GL
  private frameBuffer: WebGLFramebuffer
  private texture: WebGLTexture
  private width: number
  private height: number

  constructor(gl: GL, width: number, height: number) {
    this.gl = gl
    this.width = width
    this.height = height

    const frameBuffer = gl.createFramebuffer()
    if (!frameBuffer) throw new Error('Failed to create framebuffer')
    this.frameBuffer = frameBuffer

    const texture = gl.createTexture()
    if (!texture) throw new Error('Failed to create texture')
    this.texture = texture

    this.setupTexture()
  }

  private setupTexture(): void {
    const gl = this.gl

    gl.bindTexture(gl.TEXTURE_2D, this.texture)
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA16F,
      this.width,
      this.height,
      0,
      gl.RGBA,
      gl.FLOAT,
      null
    )
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      this.texture,
      0
    )

    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      throw new Error('Framebuffer incomplete')
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    gl.bindTexture(gl.TEXTURE_2D, null)
  }

  public bind(): void {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBuffer)
  }

  public unbind(): void {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)
  }

  public getTexture(): WebGLTexture {
    return this.texture
  }

  public resize(width: number, height: number): void {
    this.width = width
    this.height = height
    this.setupTexture()
  }

  public dispose(): void {
    this.gl.deleteTexture(this.texture)
    this.gl.deleteFramebuffer(this.frameBuffer)
  }
}

// ===== RenderPass =====
export class RenderPass {
  private gl: GL
  private program: ShaderProgram
  private frameBuffer: FrameBuffer | null
  private vao: WebGLVertexArrayObject
  public config!: RenderPassConfig

  constructor(gl: GL, shader: ShaderSource, outputToScreen: boolean = false) {
    this.gl = gl
    this.program = new ShaderProgram(gl, shader)

    if (!outputToScreen) {
      this.frameBuffer = new FrameBuffer(gl, gl.canvas.width, gl.canvas.height)
    } else {
      this.frameBuffer = null
    }

    this.vao = this.createVAO()
  }

  private createVAO(): WebGLVertexArrayObject {
    const gl = this.gl

    const vao = gl.createVertexArray()
    if (!vao) throw new Error('Failed to create VAO')
    gl.bindVertexArray(vao)

    const buffer = gl.createBuffer()
    if (!buffer) throw new Error('Failed to create buffer')

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    const positionLoc = this.program.getAttributeLocation('a_position')
    gl.enableVertexAttribArray(positionLoc)
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

    gl.bindVertexArray(null)
    gl.bindBuffer(gl.ARRAY_BUFFER, null)

    return vao
  }

  public setConfig(config: RenderPassConfig): void {
    this.config = config
  }

  public render(uniforms?: Record<string, any>): void {
    const gl = this.gl

    if (this.frameBuffer) {
      this.frameBuffer.bind()
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    }

    this.program.use()

    if (uniforms) {
      let textureCount = 0
      Object.entries(uniforms).forEach(([name, value]) => {
        if (value instanceof WebGLTexture) {
          gl.activeTexture(gl.TEXTURE0 + textureCount)
          gl.bindTexture(gl.TEXTURE_2D, value)
          this.program.setUniform(name, textureCount)
          textureCount += 1
        } else {
          this.program.setUniform(name, value)
        }
      })
    }

    gl.bindVertexArray(this.vao)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    gl.bindVertexArray(null)

    if (this.frameBuffer) {
      this.frameBuffer.unbind()
    }
  }

  public getOutputTexture(): WebGLTexture | null {
    return this.frameBuffer ? this.frameBuffer.getTexture() : null
  }

  public resize(width: number, height: number): void {
    if (this.frameBuffer) {
      this.frameBuffer.resize(width, height)
    }
  }

  public dispose(): void {
    if (this.frameBuffer) {
      this.frameBuffer.dispose()
    }
    this.program.dispose()
    const gl = this.gl
    gl.deleteVertexArray(this.vao)
  }
}

// ===== MultiPassRenderer =====
export class MultiPassRenderer {
  private gl: GL
  private passes: Map<string, RenderPass> = new Map()
  private passesArray: RenderPass[] = []
  private globalUniforms: Record<string, any> = {}

  constructor(canvas: HTMLCanvasElement, configs: RenderPassConfig[]) {
    const gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    })
    if (!gl) throw new Error('WebGL 2 not supported')

    const ext = gl.getExtension('EXT_color_buffer_float')
    if (!ext) throw new Error('EXT_color_buffer_float not supported')

    this.gl = gl

    const passesArray: typeof this.passesArray = []
    for (const [index, cfg] of configs.entries()) {
      const pass = new RenderPass(gl, cfg.shader, cfg.outputToScreen)
      pass.setConfig(cfg)
      this.passes.set(cfg.name, pass)
      passesArray[index] = pass
    }
    this.passesArray = passesArray
  }

  public resize(width: number, height: number): void {
    this.passesArray.forEach((pass) => {
      pass.resize(width, height)
    })
  }

  public setUniform(name: string, value: any): void {
    this.globalUniforms[name] = value
  }

  public setUniforms(uniforms: Record<string, any>): void {
    Object.assign(this.globalUniforms, uniforms)
  }

  public render(
    passUniforms?: Record<string, any>[] | Record<string, Record<string, any>>
  ): void {
    this.passesArray.forEach((pass, index) => {
      const uniforms: Record<string, any> = { ...this.globalUniforms }

      if (passUniforms) {
        if (Array.isArray(passUniforms)) {
          Object.assign(uniforms, passUniforms[index])
        } else {
          Object.assign(uniforms, passUniforms[pass.config.name] ?? {})
        }
      }

      if (pass.config.inputs) {
        Object.entries(pass.config.inputs).forEach(([uniformName, fromPassName]) => {
          const fromPass = this.passes.get(fromPassName)
          uniforms[uniformName] = fromPass?.getOutputTexture()
        })
      }

      pass.render(uniforms)
    })
  }

  public dispose(): void {
    this.passes.forEach((pass) => {
      pass.dispose()
    })
    this.passes.clear()
    this.globalUniforms = {}
  }
}
