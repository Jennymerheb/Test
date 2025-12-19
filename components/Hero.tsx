import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image Layer - Full Bleed (z-0) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600"
          alt="Fashion mannequin showcasing fit technology"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
      </div>

      {/* Gradient Overlays for Readability (z-1) */}
      <div className="absolute inset-0">
        {/* Soft pastel gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0ed]/70 via-[#ebe5e8]/60 to-[#ddd5e0]/50" />

        {/* Vertical glass panels */}
        <div className="absolute top-0 bottom-0 left-[10%] w-[120px] md:w-[180px] bg-white/10 backdrop-blur-sm transform -skew-y-6" />
        <div className="absolute top-0 bottom-0 left-[25%] w-[140px] md:w-[200px] bg-white/8 backdrop-blur-sm transform -skew-y-6" />
        <div className="absolute top-0 bottom-0 left-[45%] w-[100px] md:w-[160px] bg-white/6 backdrop-blur-sm transform -skew-y-6" />

        {/* Diagonal light beam - Top Right to Bottom Left */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[800px] md:w-[900px] md:h-[1100px] bg-gradient-to-br from-white/50 via-white/25 to-transparent transform rotate-[-35deg] blur-3xl" />
      </div>

      {/* Hero Content Layer (z-10) */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-24 md:py-32">
          {/* Content - Left Aligned */}
          <div className="max-w-2xl space-y-8">
            {/* Small Glass Pill - Platform Description */}
            <div className="inline-flex">
              <div className="px-6 py-3 rounded-full bg-white/25 backdrop-blur-md border border-white/40 shadow-lg">
                <p className="text-sm md:text-base text-zinc-800 leading-relaxed">
                  Explore Polypo's customizable platform, from AI size recommendations to fit
                  visualization, insights, and omnichannel experiences (AR mirrors).
                </p>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-sm font-medium text-zinc-800 shadow-md">
                Core Size Engine
              </div>
              <div className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-sm font-medium text-zinc-800 shadow-md">
                Platform Building
              </div>
              <div className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-sm font-medium text-zinc-800 shadow-md">
                Intelligent Dashboard
              </div>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] tracking-tight">
                Know the size.
                <br />
                See the fit.
              </h1>
            </div>

            {/* Body Copy */}
            <div>
              <p className="text-lg md:text-xl text-zinc-800 leading-relaxed max-w-lg">
                Polypo is the AI sizing and fit-intelligence platform that shows every shopper
                their best size and style before they buy.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/#book-demo"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold text-base md:text-lg hover:bg-zinc-800 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
