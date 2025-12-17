'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 pt-4 md:pt-6">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 md:gap-6">
        {/* LEFT GLASS PILL - Logo + Nav Links */}
        <div className="relative group">
          {/* Glass pill container */}
          <div className="relative h-14 md:h-16 rounded-full bg-white/20 backdrop-blur-2xl border border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_18px_40px_rgba(15,23,42,0.35)] transition-all duration-300 hover:bg-white/25 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)_inset,0_18px_60px_rgba(15,23,42,0.4)]">
            {/* Gradient overlay for glass effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/10 to-black/25 mix-blend-soft-light opacity-70 pointer-events-none"></div>

            {/* Content */}
            <div className="relative flex items-center h-full px-4 md:px-6 gap-2 md:gap-6">
              {/* Logo */}
              <Link
                href="/"
                className="text-lg md:text-xl font-semibold tracking-tight text-zinc-900 hover:text-zinc-950 transition-colors whitespace-nowrap"
              >
                POLYPO
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-1 lg:gap-2">
                {/* Our Platform */}
                <Link
                  href="/platform"
                  className={`flex items-center gap-1.5 px-3 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-full transition-all duration-200 ${
                    isActive('/platform')
                      ? 'text-zinc-950 bg-white/30'
                      : 'text-zinc-900 hover:text-zinc-950 hover:bg-white/20'
                  }`}
                >
                  Our Platform
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Resources */}
                <Link
                  href="/resources"
                  className={`flex items-center gap-1.5 px-3 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-full transition-all duration-200 ${
                    isActive('/resources')
                      ? 'text-zinc-950 bg-white/30'
                      : 'text-zinc-900 hover:text-zinc-950 hover:bg-white/20'
                  }`}
                >
                  Resources
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-full transition-all duration-200 ${
                    isActive('/about')
                      ? 'text-zinc-950 bg-white/30'
                      : 'text-zinc-900 hover:text-zinc-950 hover:bg-white/20'
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
                <svg
                  className="w-5 h-5 text-zinc-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Log in + Book a Demo */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {/* Log in link */}
          <Link
            href="#login"
            className="text-sm lg:text-base font-medium text-zinc-800 hover:text-zinc-950 transition-colors"
          >
            Log in
          </Link>

          {/* Book a Demo - Glass pill button */}
          <div className="relative group">
            <Link
              href="/#book-demo"
              className="relative block h-12 md:h-14 rounded-full overflow-hidden"
            >
              {/* Glass pill container */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl border border-white/40 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_18px_40px_rgba(15,23,42,0.35)] transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.35)_inset,0_18px_60px_rgba(15,23,42,0.45)]"></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/10 to-black/25 mix-blend-soft-light opacity-70 pointer-events-none"></div>

              {/* Button text */}
              <span className="relative flex items-center justify-center h-full px-6 lg:px-8 text-sm lg:text-base font-semibold text-zinc-900 whitespace-nowrap group-hover:text-zinc-950 transition-colors">
                Book a Demo
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Link
            href="/#book-demo"
            className="relative block h-12 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl border border-white/40 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_18px_40px_rgba(15,23,42,0.35)]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/10 to-black/25 mix-blend-soft-light opacity-70 pointer-events-none"></div>
            <span className="relative flex items-center justify-center h-full px-5 text-sm font-semibold text-zinc-900 whitespace-nowrap">
              Book Demo
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (simple structure) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 max-w-[1400px] mx-auto">
          <div className="relative rounded-3xl bg-white/20 backdrop-blur-2xl border border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_18px_40px_rgba(15,23,42,0.35)] overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-black/10 to-black/25 mix-blend-soft-light opacity-70 pointer-events-none"></div>

            {/* Menu content */}
            <div className="relative py-4 px-2 space-y-1">
              <Link
                href="/platform"
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-zinc-900 hover:text-zinc-950 hover:bg-white/20 rounded-2xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-zinc-900 hover:text-zinc-950 hover:bg-white/20 rounded-2xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-base font-medium text-zinc-900 hover:text-zinc-950 hover:bg-white/20 rounded-2xl transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="h-px bg-white/30 my-2 mx-4"></div>
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
      )}
    </header>
  )
}
