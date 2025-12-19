'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import LiquidGlass from '@/components/ui/LiquidGlass'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 py-4 md:py-5">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 lg:gap-6">
        {/* LEFT GLASS PILL - Logo + Nav Links */}
        <LiquidGlass
          className="h-14 md:h-16"
          intensity={85}
          noiseOverlay={true}
          chromaticAberration={false}
          hoverReactive={true}
        >
          <div className="flex items-center h-full px-5 md:px-6 gap-4 md:gap-8">
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
              {/* Our Platform */}
              <Link
                href="/platform"
                className={`flex items-center gap-1.5 px-4 py-2 text-sm lg:text-base font-medium transition-all duration-200 ${
                  isActive('/platform')
                    ? 'text-zinc-950'
                    : 'text-zinc-900 hover:text-zinc-950'
                }`}
              >
                Our Platform
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Resources */}
              <Link
                href="/resources"
                className={`flex items-center gap-1.5 px-4 py-2 text-sm lg:text-base font-medium transition-all duration-200 ${
                  isActive('/resources')
                    ? 'text-zinc-950'
                    : 'text-zinc-900 hover:text-zinc-950'
                }`}
              >
                Resources
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`px-4 py-2 text-sm lg:text-base font-medium transition-all duration-200 ${
                  isActive('/about')
                    ? 'text-zinc-950'
                    : 'text-zinc-900 hover:text-zinc-950'
                }`}
              >
                About
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 -mr-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 text-zinc-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </LiquidGlass>

        {/* RIGHT SIDE - Log in + Book a Demo */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {/* Log in link */}
          <Link
            href="#login"
            className="text-sm lg:text-base font-medium text-zinc-900 hover:text-zinc-950 transition-colors"
          >
            Log in
          </Link>

          {/* Book a Demo - Liquid Glass CTA Button */}
          <LiquidGlass
            className="h-14"
            intensity={90}
            noiseOverlay={true}
            chromaticAberration={false}
            hoverReactive={true}
          >
            <Link
              href="/#book-demo"
              className="h-full px-7 lg:px-8 flex items-center justify-center text-sm lg:text-base font-semibold text-zinc-900 hover:text-zinc-950 transition-colors whitespace-nowrap"
            >
              Book a Demo
            </Link>
          </LiquidGlass>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <LiquidGlass
            className="h-12"
            intensity={90}
            noiseOverlay={true}
            hoverReactive={true}
          >
            <Link
              href="/#book-demo"
              className="h-full px-5 flex items-center justify-center text-sm font-semibold text-zinc-900 whitespace-nowrap"
            >
              Book Demo
            </Link>
          </LiquidGlass>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 max-w-[1400px] mx-auto animate-slide-up">
          <LiquidGlass
            className="rounded-3xl"
            intensity={85}
            noiseOverlay={true}
            hoverReactive={false}
          >
            <div className="py-4 px-2 space-y-1">
              <Link
                href="/platform"
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-zinc-900 hover:text-zinc-950 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-zinc-900 hover:text-zinc-950 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-base font-medium text-zinc-900 hover:text-zinc-950 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="h-px bg-white/40 my-2 mx-4"></div>
              <Link
                href="#login"
                className="block px-4 py-3 text-base font-medium text-zinc-900 hover:text-zinc-950 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
            </div>
          </LiquidGlass>
        </div>
      )}
    </header>
  )
}
