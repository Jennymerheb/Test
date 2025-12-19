import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-[#f8f7f6] px-6 md:px-8 pt-24 md:pt-28 pb-16 md:pb-20">
      {/* Hero Stage - Large Rounded Container */}
      <div className="relative max-w-7xl mx-auto rounded-[56px] overflow-hidden min-h-[560px] md:min-h-[680px] shadow-2xl">
        {/* Background Image - Crisp, Full Coverage */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800"
            alt="Fashion mannequin in architectural space"
            fill
            className="object-cover object-[center_right]"
            priority
            unoptimized
          />
        </div>

        {/* Left Side Readability Overlay - Subtle Glass Panel */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-white/30 via-white/15 to-transparent backdrop-blur-[2px]" />

        {/* Hero Content - Left Column (z-10) */}
        <div className="relative z-10 min-h-[560px] md:min-h-[680px] flex items-center">
          <div className="grid md:grid-cols-2 gap-8 w-full px-8 md:px-12 lg:px-16 py-12 md:py-16">
            {/* Left: Text Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-zinc-900 leading-[1.05] tracking-tight">
                Know the size.
                <br />
                See the fit.
              </h1>

              {/* Body Copy */}
              <p className="text-lg md:text-xl text-zinc-800 leading-relaxed max-w-lg">
                Polypo is the AI sizing and fit-intelligence platform that shows every shopper
                their best size and style before they buy.
              </p>

              {/* CTA Button - Subtle Glass */}
              <div className="pt-2">
                <Link
                  href="/#book-demo"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/30 backdrop-blur-sm border border-zinc-900/15 text-zinc-900 font-semibold text-base hover:bg-white/40 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Right: Empty (Image Shows Through) */}
            <div />
          </div>
        </div>
      </div>
    </section>
  )
}
