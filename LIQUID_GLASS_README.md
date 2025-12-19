# Liquid Glass Effect Implementation

This implementation brings the **liquid glass effect** from [liquid-glass-studio](https://github.com/iyinchao/liquid-glass-studio) to your navbar using pure CSS (no WebGL required).

## 🎨 What's Included

### Components
- **`components/ui/LiquidGlassShell.tsx`**: Reusable wrapper component
- **`components/Navbar.tsx`**: Updated navbar using the liquid glass effect
- **`styles/liquid-glass.css`**: All glass effect styles

### Visual Techniques (from liquid-glass-studio)

The original repo uses WebGL shaders with multiple render passes. We've simplified this to CSS while maintaining the visual essence:

| Original (WebGL) | Our Implementation (CSS) |
|------------------|-------------------------|
| Multi-pass blur (bgPass → vBlurPass → hBlurPass) | `backdrop-filter: blur() saturate()` |
| Refraction with thickness/dispersion | Gradient overlays + mix-blend-mode |
| Fresnel-based glare | Radial gradient with mouse tracking |
| Shadow depth effects | `box-shadow` (inner + outer) |
| Noise texture | CSS repeating gradients |
| Chromatic aberration (RGB separation) | Multiple layered gradients (optional) |

## 🚀 Usage

### Basic Example

```tsx
import LiquidGlassShell from '@/components/ui/LiquidGlassShell'

<LiquidGlassShell
  className="h-16 px-6"
  intensity={85}
  noiseOverlay={true}
  chromaticAberration={false}
>
  <YourContent />
</LiquidGlassShell>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | '' | Additional Tailwind classes |
| `intensity` | number (0-100) | 80 | Controls blur strength and overall effect |
| `noiseOverlay` | boolean | true | Adds surface micro-texture (glass imperfections) |
| `chromaticAberration` | boolean | false | Subtle RGB color separation (dispersion) |

## ⚙️ Customization Guide

### Adjust Blur Intensity

The `intensity` prop controls overall effect strength:

```tsx
// Subtle glass (light blur)
<LiquidGlassShell intensity={60}>

// Medium glass (balanced)
<LiquidGlassShell intensity={85}>

// Strong glass (heavy refraction)
<LiquidGlassShell intensity={100}>
```

Internally, this sets CSS variables:
- `--blur-strength`: 12px to 24px
- `--saturate-value`: 120% to 160%

### Adjust Refraction / Dispersion

Edit `styles/liquid-glass.css`:

```css
/* Stronger refraction gradient */
.liquid-glass-refraction {
  background: radial-gradient(
    circle at 50% 50%,
    transparent 0%,
    rgba(0, 0, 0, 0.10) 100%  /* Change from 0.05 to 0.10 */
  );
}
```

### Adjust Inner Shadow Depth

Edit the `.liquid-glass-base` shadow:

```css
/* Deeper shadow (more 3D depth) */
box-shadow:
  inset 0 6px 32px rgba(0, 0, 0, 0.12),  /* Stronger inner */
  0 0 0 1px rgba(255, 255, 255, 0.25),
  0 8px 32px rgba(31, 38, 135, 0.07);
```

### Adjust Glare / Fresnel Effect

The glare follows mouse position. To make it stronger:

```css
.liquid-glass-glare {
  background: radial-gradient(
    600px circle at calc(var(--mouse-x, 0.5) * 100%) ...,
    rgba(255, 255, 255, 0.25) 0%,  /* Brighter (was 0.15) */
    rgba(255, 255, 255, 0.10) 30%, /* Brighter (was 0.05) */
    transparent 60%
  );
}
```

### Enable/Disable Effects

```tsx
// Maximum realism (all effects)
<LiquidGlassShell
  intensity={90}
  noiseOverlay={true}
  chromaticAberration={true}
>

// Clean minimal glass (no extras)
<LiquidGlassShell
  intensity={70}
  noiseOverlay={false}
  chromaticAberration={false}
>
```

## 🎯 Matching Your Figma Design

The current implementation matches these Figma Glass parameters:

```css
/* Corner radius */
border-radius: 9999px; /* fully rounded pill */

/* Base fills */
background:
  linear-gradient(90deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.25) 100%),
  rgba(255,255,255,0.36);

/* Refraction/Depth/Dispersion */
backdrop-filter: blur(18px) saturate(160%);

/* Border */
border: 1px solid rgba(255,255,255,0.6);

/* Inner shadow */
box-shadow: inset 0 4px 24px rgba(0,0,0,0.08);
```

To adjust closer to your exact Figma specs, edit `styles/liquid-glass.css` in the `.liquid-glass-base` section.

## 🎬 Performance Notes

- **No WebGL overhead**: Pure CSS means lightweight and fast
- **Hardware accelerated**: Uses `backdrop-filter` (GPU-accelerated on modern browsers)
- **Reduced motion**: Automatically disables transitions for accessibility

## 📦 File Structure

```
├── components/
│   ├── ui/
│   │   └── LiquidGlassShell.tsx    # Reusable glass wrapper
│   └── Navbar.tsx                   # Updated navbar implementation
├── styles/
│   └── liquid-glass.css             # All glass effect styles
└── app/
    └── globals.css                  # Imports liquid-glass.css
```

## 🔧 Troubleshooting

### Glass effect not visible
- Check that `styles/liquid-glass.css` is imported in `app/globals.css`
- Ensure there's a background behind the navbar (the blur needs something to blur)
- Try increasing `intensity` prop

### Blur looks pixelated
- This is a browser limitation with `backdrop-filter`
- Try reducing `--blur-strength` or test in a different browser

### Performance issues
- Disable `chromaticAberration` (adds extra DOM layers)
- Disable `noiseOverlay` if not needed
- Reduce `intensity` to lower the blur amount

## 📚 Credits

- Original effect: [liquid-glass-studio](https://github.com/iyinchao/liquid-glass-studio) by iyinchao
- Simplified for production use with pure CSS
- Adapted to Next.js + React + TypeScript + Tailwind
