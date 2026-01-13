import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Twitter, Facebook, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-20 bg-gradient-to-br from-purple-100/80 via-purple-50/60 to-white/80 backdrop-blur-sm border-t border-purple-200/40">
      {/* Main Footer Content */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side - Brand & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/polypo-logo.svg"
                alt="Polypo"
                width={140}
                height={32}
                className="h-7 w-auto"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              The Future of Fashion is<br />
              Personalized, Interactive,<br />
              and All About You!
            </h3>
            <div className="pt-4">
              <Link
                href="/#book-demo"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/60 backdrop-blur-sm border border-purple-300/40 text-gray-900 font-semibold text-base hover:bg-white/80 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                BOOK A DEMO
              </Link>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-600 font-medium">
                LET'S MAKE FASHION PERSONAL
              </p>
            </div>
          </div>

          {/* Middle - Solutions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 tracking-wide">OUR SOLUTIONS</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/platform" className="text-gray-700 hover:text-purple-700 transition-colors">
                AI Stylist
              </Link>
              <Link href="/platform" className="text-gray-700 hover:text-purple-700 transition-colors">
                VTO Tech
              </Link>
              <Link href="/platform" className="text-gray-700 hover:text-purple-700 transition-colors">
                AR Tech
              </Link>
              <Link href="/platform" className="text-gray-700 hover:text-purple-700 transition-colors">
                Spatial Tech
              </Link>
              <Link href="/platform" className="text-gray-700 hover:text-purple-700 transition-colors">
                Gen AI
              </Link>
            </div>
          </div>

          {/* Right - Blog */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 tracking-wide">OUR BLOG</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/blog" className="text-gray-700 hover:text-purple-700 transition-colors">
                Insights
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-purple-700 transition-colors">
                Features
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-purple-700 transition-colors">
                Collabs
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-purple-700 transition-colors">
                Community
              </Link>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-12 pt-8 border-t border-purple-200/40">
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="Snapchat"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.166 3c.796 0 3.495.223 4.769 3.073.426.959.324 2.589.24 3.898l-.002.047c-.011.146-.018.278-.024.41.387.15.93.385 1.244.502 1.03.387 1.801.044 2.16-.245a.5.5 0 0 1 .677.726c-.22.201-.66.49-1.261.49-.437 0-1.254-.193-2.215-.52-.213-.072-.749-.267-1.104-.4-.077.407-.187.86-.341 1.364a7.862 7.862 0 0 1-.568 1.38c.04.012.08.026.118.04.785.29 1.541.569 2.368 1.026.537.296.859.562 1.04.861.205.34.243.686.243.906a.972.972 0 0 1-.214.63 1.098 1.098 0 0 1-.864.413c-.354 0-.677-.109-1.034-.223-.392-.126-.835-.268-1.428-.268-.354 0-.691.062-1.028.185-.496.181-.883.56-1.23 1.003-.395.504-.82.884-1.332 1.195-1.084.66-2.426.748-3.565.748-.43 0-1.008-.046-1.57-.126-.205-.03-.405-.063-.597-.098a5.29 5.29 0 0 0-.54-.075c-.594 0-1.036.142-1.428.268-.357.114-.68.223-1.035.223a1.098 1.098 0 0 1-.863-.413.972.972 0 0 1-.214-.63c0-.22.038-.566.243-.906.18-.299.503-.565 1.04-.86.826-.458 1.582-.737 2.367-1.027.04-.014.079-.028.12-.04-.254-.436-.43-.884-.568-1.38a9.466 9.466 0 0 1-.341-1.363c-.356.132-.892.327-1.105.4-.96.326-1.777.519-2.214.519-.601 0-1.041-.289-1.261-.49a.5.5 0 0 1 .677-.726c.359.29 1.13.632 2.16.245.314-.117.857-.352 1.244-.502-.006-.132-.013-.264-.024-.41l-.002-.047c-.084-1.31-.186-2.94.24-3.898C8.67 3.223 11.37 3 12.166 3z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="Email"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Purple U Logo - Positioned on the right */}
      <div className="absolute right-8 bottom-8 hidden lg:block">
        <div className="relative w-32 h-32">
          {/* Purple U Shape */}
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* Main U shape with gradient */}
            <defs>
              <linearGradient id="uGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#7e22ce" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Left arm */}
            <rect x="15" y="15" width="20" height="70" rx="10" fill="url(#uGradient)" filter="url(#glow)" />
            {/* Right arm */}
            <rect x="85" y="15" width="20" height="70" rx="10" fill="url(#uGradient)" filter="url(#glow)" />
            {/* Bottom curve */}
            <path d="M 25 75 Q 60 95 95 75" stroke="url(#uGradient)" strokeWidth="20" fill="none" strokeLinecap="round" filter="url(#glow)" />
            {/* Small circle at bottom */}
            <circle cx="60" cy="95" r="12" fill="url(#uGradient)" filter="url(#glow)" />
          </svg>
        </div>
      </div>
    </footer>
  )
}
