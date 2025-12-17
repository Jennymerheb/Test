'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'
  }

  return (
    <nav className="sticky top-0 z-50 glass-card-strong border-b border-white/40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
            Polypo
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isActive('/')} transition-colors text-sm lg:text-base`}>
              Home
            </Link>
            <Link href="/platform" className={`${isActive('/platform')} transition-colors text-sm lg:text-base`}>
              Platform
            </Link>
            <Link href="/resources" className={`${isActive('/resources')} transition-colors text-sm lg:text-base`}>
              Resources
            </Link>
            <Link href="/about" className={`${isActive('/about')} transition-colors text-sm lg:text-base`}>
              About
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/#book-demo"
            className="px-4 py-2 md:px-6 md:py-2.5 bg-gray-900 text-white text-sm md:text-base rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center justify-center space-x-6 pb-4 text-sm">
          <Link href="/" className={`${isActive('/')} transition-colors`}>
            Home
          </Link>
          <Link href="/platform" className={`${isActive('/platform')} transition-colors`}>
            Platform
          </Link>
          <Link href="/resources" className={`${isActive('/resources')} transition-colors`}>
            Resources
          </Link>
          <Link href="/about" className={`${isActive('/about')} transition-colors`}>
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
