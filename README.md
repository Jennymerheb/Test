# Polypo - AI Size & Fit Intelligence

A premium fashion-tech SaaS marketing website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, premium design with glassmorphism effects
- 📱 Fully responsive (mobile-first approach)
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- ♿ Accessible components (keyboard navigation, ARIA labels)
- 🎭 Subtle animations and micro-interactions

## Pages

- **Home (/)** - Hero, features, outcomes, platform overview, FAQ
- **Platform (/platform)** - Detailed platform modules and features
- **Resources (/resources)** - Case studies, articles, and technical documentation
- **About (/about)** - Company story, team, partner program, and contact form

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── platform/
│   │   └── page.tsx
│   ├── resources/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BentoGrid.tsx
│   ├── CTASection.tsx
│   ├── FAQAccordion.tsx
│   ├── Footer.tsx
│   ├── GlassCard.tsx
│   ├── LogoStrip.tsx
│   ├── Navbar.tsx
│   └── Section.tsx
└── public/
```

## Components

### Reusable Components

- **Navbar** - Sticky navigation with active state
- **Footer** - Site footer with links and social media
- **Section** - Consistent section spacing wrapper
- **GlassCard** - Glassmorphism card component
- **BentoGrid** - Responsive grid layout (2, 3, or 4 columns)
- **FAQAccordion** - Accessible accordion component
- **LogoStrip** - Logo/brand showcase
- **CTASection** - Call-to-action sections

## Design System

### Colors

- Primary background: Soft gradient (`#f8fafc` to `#f1f5f9`)
- Glass cards: `bg-white/60` with backdrop blur
- Text: Gray scale (900, 700, 600)

### Typography

- Headings: Bold, large scale (4xl to 7xl)
- Body: Relaxed leading, responsive sizing
- Font: System font stack

### Spacing

- Section padding: 80-120px vertical on desktop
- Generous spacing between elements
- Responsive scaling for mobile/tablet

## Build

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Technologies

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [PostCSS](https://postcss.org/) - CSS processing

## License

© 2025 Polypo. All rights reserved.
