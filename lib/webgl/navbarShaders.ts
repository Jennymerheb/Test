/**
 * Navbar Liquid Glass Shaders
 * Extracted and simplified from liquid-glass-studio
 * https://github.com/iyinchao/liquid-glass-studio
 *
 * Inlined as strings to avoid Next.js GLSL loader complexity
 */

// ===== Vertex Shader (shared by all passes) =====
export const vertexShader = `#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

// ===== Background Pass (renders base background) =====
export const fragmentBgShader = `#version 300 es
precision highp float;

in vec2 v_uv;
uniform vec2 u_resolution;
uniform float u_dpr;
uniform vec2 u_mouseSpring;
uniform float u_shapeWidth;
uniform float u_shapeHeight;
uniform float u_shapeRadius;
uniform float u_shapeRoundness;
uniform int u_bgType;

out vec4 fragColor;

#define PI 3.14159265359

float superellipseCornerSDF(vec2 p, float r, float n) {
  p = abs(p);
  float v = pow(pow(p.x, n) + pow(p.y, n), 1.0 / n);
  return v - r;
}

float roundedRectSDF(vec2 p, vec2 center, float width, float height, float cornerRadius, float n) {
  p -= center;
  float cr = cornerRadius * u_dpr;
  vec2 d = abs(p) - vec2(width * u_dpr, height * u_dpr) * 0.5;
  float dist;

  if (d.x > -cr && d.y > -cr) {
    vec2 cornerCenter = sign(p) * (vec2(width * u_dpr, height * u_dpr) * 0.5 - vec2(cr));
    vec2 cornerP = p - cornerCenter;
    dist = superellipseCornerSDF(cornerP, cr, n);
  } else {
    dist = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
  }

  return dist;
}

void main() {
  vec2 p = (gl_FragCoord.xy - u_resolution * 0.5);
  vec2 p2 = u_mouseSpring;

  // Simple gradient background for navbar
  vec3 bgColor = mix(
    vec3(0.95, 0.96, 0.97),
    vec3(0.92, 0.93, 0.95),
    v_uv.y
  );

  fragColor = vec4(bgColor, 1.0);
}
`

// ===== Vertical Blur Pass =====
export const fragmentBgVblurShader = `#version 300 es
precision highp float;

in vec2 v_uv;
uniform sampler2D u_prevPassTexture;
uniform vec2 u_resolution;
uniform float u_blurRadius;
uniform float u_blurWeights[32];

out vec4 fragColor;

void main() {
  vec4 color = vec4(0.0);
  float totalWeight = 0.0;
  int radius = int(u_blurRadius);

  for (int i = -radius; i <= radius; i++) {
    float offset = float(i) / u_resolution.y;
    float weight = u_blurWeights[abs(i)];
    color += texture(u_prevPassTexture, v_uv + vec2(0.0, offset)) * weight;
    totalWeight += weight;
  }

  fragColor = color / totalWeight;
}
`

// ===== Horizontal Blur Pass =====
export const fragmentBgHblurShader = `#version 300 es
precision highp float;

in vec2 v_uv;
uniform sampler2D u_prevPassTexture;
uniform vec2 u_resolution;
uniform float u_blurRadius;
uniform float u_blurWeights[32];

out vec4 fragColor;

void main() {
  vec4 color = vec4(0.0);
  float totalWeight = 0.0;
  int radius = int(u_blurRadius);

  for (int i = -radius; i <= radius; i++) {
    float offset = float(i) / u_resolution.x;
    float weight = u_blurWeights[abs(i)];
    color += texture(u_prevPassTexture, v_uv + vec2(offset, 0.0)) * weight;
    totalWeight += weight;
  }

  fragColor = color / totalWeight;
}
`

// ===== Main Pass (refraction, dispersion, glare) =====
export const fragmentMainShader = `#version 300 es
precision highp float;

#define PI 3.14159265359

// Chromatic dispersion constants
const float N_R = 1.0 - 0.02;
const float N_G = 1.0;
const float N_B = 1.0 + 0.02;

in vec2 v_uv;
uniform sampler2D u_blurredBg;
uniform sampler2D u_bg;
uniform vec2 u_resolution;
uniform float u_dpr;
uniform vec2 u_mouseSpring;
uniform float u_shapeWidth;
uniform float u_shapeHeight;
uniform float u_shapeRadius;
uniform float u_shapeRoundness;
uniform vec4 u_tint;
uniform float u_refThickness;
uniform float u_refFactor;
uniform float u_refDispersion;
uniform float u_glareAngle;
uniform float u_glareFactor;

out vec4 fragColor;

float superellipseCornerSDF(vec2 p, float r, float n) {
  p = abs(p);
  float v = pow(pow(p.x, n) + pow(p.y, n), 1.0 / n);
  return v - r;
}

float roundedRectSDF(vec2 p, vec2 center, float width, float height, float cornerRadius, float n) {
  p -= center;
  float cr = cornerRadius * u_dpr;
  vec2 d = abs(p) - vec2(width * u_dpr, height * u_dpr) * 0.5;
  float dist;

  if (d.x > -cr && d.y > -cr) {
    vec2 cornerCenter = sign(p) * (vec2(width * u_dpr, height * u_dpr) * 0.5 - vec2(cr));
    vec2 cornerP = p - cornerCenter;
    dist = superellipseCornerSDF(cornerP, cr, n);
  } else {
    dist = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
  }

  return dist;
}

float mainSDF(vec2 p2, vec2 p) {
  vec2 p2n = p2 + p / u_resolution.y;

  float d2 = roundedRectSDF(
    p2n,
    vec2(0.0),
    u_shapeWidth / u_resolution.y,
    u_shapeHeight / u_resolution.y,
    u_shapeRadius / u_resolution.y,
    u_shapeRoundness
  );

  return d2;
}

vec2 getNormal(vec2 p2, vec2 p) {
  vec2 h = vec2(max(abs(dFdx(p.x)), 0.0001), max(abs(dFdy(p.y)), 0.0001));

  vec2 grad =
    vec2(
      mainSDF(p2, p + vec2(h.x, 0.0)) - mainSDF(p2, p - vec2(h.x, 0.0)),
      mainSDF(p2, p + vec2(0.0, h.y)) - mainSDF(p2, p - vec2(0.0, h.y))
    ) /
    (2.0 * h);

  return grad * 1.414213562 * 1000.0;
}

void main() {
  vec2 p = gl_FragCoord.xy - u_resolution * 0.5;
  vec2 p2 = u_mouseSpring;

  float sdf = mainSDF(p2, p);
  vec3 baseColor = texture(u_bg, v_uv).rgb;

  // Inside the shape - apply refraction
  if (sdf < 0.0) {
    vec2 normal = getNormal(p2, p);

    // Chromatic dispersion (RGB offset)
    vec2 uvR = v_uv - normal * u_refFactor * u_refThickness * N_R * u_refDispersion;
    vec2 uvG = v_uv - normal * u_refFactor * u_refThickness * N_G * u_refDispersion;
    vec2 uvB = v_uv - normal * u_refFactor * u_refThickness * N_B * u_refDispersion;

    vec3 refractedColor = vec3(
      texture(u_blurredBg, uvR).r,
      texture(u_blurredBg, uvG).g,
      texture(u_blurredBg, uvB).b
    );

    // Glare effect
    vec2 glareDir = vec2(cos(u_glareAngle), sin(u_glareAngle));
    float glare = max(0.0, dot(normalize(normal), glareDir));
    glare = pow(glare, 3.0) * u_glareFactor;

    vec3 finalColor = mix(refractedColor, vec3(1.0), glare);
    finalColor = mix(finalColor, u_tint.rgb, u_tint.a * 0.15);

    fragColor = vec4(finalColor, 1.0);
  } else {
    // Outside shape - regular background
    fragColor = vec4(baseColor, 1.0);
  }
}
`

// ===== Utility: Compute Gaussian blur weights =====
export function computeGaussianKernelByRadius(radius: number): number[] {
  const sigma = radius / 2
  const twoSigmaSquare = 2.0 * sigma * sigma
  const weights: number[] = []

  for (let i = 0; i <= radius; i++) {
    const weight = Math.exp(-(i * i) / twoSigmaSquare)
    weights.push(weight)
  }

  return weights
}
