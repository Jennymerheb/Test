'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll for visual feedback
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 transition-all duration-300 ${
      isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-5'
    }`}>
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 lg:gap-6">
        {/* LEFT LIQUID GLASS PILL - Logo + Nav Links */}
        <div className={`
          relative overflow-hidden rounded-full
          h-14 md:h-16
          transition-all duration-300
          ${isScrolled ? 'md:h-14' : ''}
        `}>
          {/* Liquid Glass Effect Layers */}
          {/* Layer 1: Base blur + tint */}
          <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-2xl" />

          {/* Layer 2: Gradient overlay for depth */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/20 to-white/10" />

          {/* Layer 3: Top specular highlight */}
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/50 to-transparent" />

          {/* Layer 4: Edge refraction glow */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.5),inset_0_2px_4px_rgba(255,255,255,0.8)]" />

          {/* Layer 5: Border for definition */}
          <div className="absolute inset-0 rounded-full border border-white/40" />

          {/* Layer 6: Outer shadow for floating effect */}
          <div className="absolute inset-0 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]" />

          {/* Content */}
          <div className="relative z-10 flex items-center h-full px-5 md:px-6 gap-4 md:gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/polypo-logo.svg"
                alt="Polypo"
                width={140}
                height={32}
                className="h-6 md:h-7 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/platform"
                className={`flex items-center gap-1.5 px-4 py-2 text-sm lg:text-base font-medium rounded-full transition-all duration-200 ${
                  isActive('/platform')
                    ? 'text-zinc-950 bg-white/30'
                    : 'text-zinc-800 hover:text-zinc-950 hover:bg-white/20'
                }`}
              >
                Our Platform
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <Link
                href="/resources"
                className={`flex items-center gap-1.5 px-4 py-2 text-sm lg:text-base font-medium rounded-full transition-all duration-200 ${
                  isActive('/resources')
                    ? 'text-zinc-950 bg-white/30'
                    : 'text-zinc-800 hover:text-zinc-950 hover:bg-white/20'
                }`}
              >
                Resources
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 text-sm lg:text-base font-medium rounded-full transition-all duration-200 ${
                  isActive('/about')
                    ? 'text-zinc-950 bg-white/30'
                    : 'text-zinc-800 hover:text-zinc-950 hover:bg-white/20'
                }`}
              >
                About
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Log in + Book a Demo */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          <Link
            href="#login"
            className="text-sm lg:text-base font-medium text-zinc-800 hover:text-zinc-950 transition-colors"
          >
            Log in
          </Link>

          {/* Book a Demo - Liquid Glass CTA Button */}
          <Link href="/#book-demo" className="relative overflow-hidden rounded-full h-12 md:h-14 group">
            {/* Liquid Glass Layers */}
            <div className="absolute inset-0 rounded-full bg-white/25 backdrop-blur-2xl transition-all duration-300 group-hover:bg-white/35" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-white/25 to-white/15" />
            <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/60 to-transparent" />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.6),inset_0_2px_4px_rgba(255,255,255,0.9)]" />
            <div className="absolute inset-0 rounded-full border border-white/50 transition-colors group-hover:border-white/60" />
            <div className="absolute inset-0 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] transition-shadow group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.1)]" />

            <span className="relative z-10 flex items-center justify-center h-full px-7 lg:px-8 text-sm lg:text-base font-semibold text-zinc-800 whitespace-nowrap group-hover:text-zinc-950 transition-colors">
              Book a Demo
            </span>
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Link href="/#book-demo" className="relative overflow-hidden rounded-full h-12 block">
            <div className="absolute inset-0 rounded-full bg-white/25 backdrop-blur-2xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-white/25 to-white/15" />
            <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/60 to-transparent" />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.6),inset_0_2px_4px_rgba(255,255,255,0.9)]" />
            <div className="absolute inset-0 rounded-full border border-white/50" />
            <div className="absolute inset-0 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)]" />

            <span className="relative z-10 flex items-center justify-center h-full px-5 text-sm font-semibold text-zinc-800 whitespace-nowrap">
              Book Demo
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden mt-4 max-w-[1400px] mx-auto transition-all duration-300 ${
        isMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="relative overflow-hidden rounded-3xl">
          {/* Liquid Glass Layers */}
          <div className="absolute inset-0 rounded-3xl bg-white/25 backdrop-blur-2xl" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-white/20 to-white/10" />
          <div className="absolute inset-x-0 top-0 h-24 rounded-t-3xl bg-gradient-to-b from-white/50 to-transparent" />
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(255,255,255,0.5),inset_0_2px_4px_rgba(255,255,255,0.8)]" />
          <div className="absolute inset-0 rounded-3xl border border-white/40" />
          <div className="absolute inset-0 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.15)]" />

          {/* Menu content */}
          <div className="relative z-10 py-4 px-2 space-y-1">
            <Link
              href="/platform"
              className="flex items-center justify-between px-4 py-3 text-base font-medium text-zinc-800 hover:text-zinc-950 hover:bg-white/20 rounded-2xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Platform
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="/resources"
              className="flex items-center justify-between px-4 py-3 text-base font-medium text-zinc-800 hover:text-zinc-950 hover:bg-white/20 rounded-2xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-base font-medium text-zinc-800 hover:text-zinc-950 hover:bg-white/20 rounded-2xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="h-px bg-white/40 my-2 mx-4" />
            <Link
              href="#login"
              className="block px-4 py-3 text-base font-medium text-zinc-800 hover:text-zinc-950 hover:bg-white/20 rounded-2xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
