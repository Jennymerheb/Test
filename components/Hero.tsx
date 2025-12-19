import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative px-4 md:px-6 lg:px-8 pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Hero Card Container - Large Rounded Corners */}
      <div className="relative max-w-[1400px] mx-auto rounded-[48px] md:rounded-[64px] overflow-hidden min-h-[650px] md:min-h-[700px]">
        {/* Background Image Layer - Full Container with Rounded Corners */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600"
            alt="Fashion mannequin showcasing fit technology"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>

        {/* Gradient Overlays for Readability */}
        <div className="absolute inset-0">
          {/* Soft pastel gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0ed]/75 via-[#ebe5e8]/65 to-[#ddd5e0]/55" />

          {/* Vertical glass panels */}
          <div className="absolute top-0 bottom-0 left-[10%] w-[100px] md:w-[160px] bg-white/8 backdrop-blur-sm transform -skew-y-6" />
          <div className="absolute top-0 bottom-0 left-[25%] w-[120px] md:w-[180px] bg-white/6 backdrop-blur-sm transform -skew-y-6" />
          <div className="absolute top-0 bottom-0 left-[42%] w-[90px] md:w-[140px] bg-white/5 backdrop-blur-sm transform -skew-y-6" />

          {/* Diagonal light beam - Top Right to Bottom Left */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[800px] md:w-[900px] md:h-[1100px] bg-gradient-to-br from-white/60 via-white/30 to-transparent transform rotate-[-35deg] blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-between min-h-[650px] md:min-h-[700px] px-8 md:px-12 lg:px-16 py-12 md:py-16">
          {/* Main Content - Left Aligned, Bottom Section */}
          <div className="flex items-end min-h-full">
            <div className="max-w-2xl space-y-6 md:space-y-8 pb-8 md:pb-12">
              {/* Headline */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-[1.05] tracking-tight mb-6 md:mb-8">
                  Know the size.
                  <br />
                  See the fit.
                </h1>
              </div>

              {/* Body Copy */}
              <div>
                <p className="text-lg md:text-xl text-zinc-800 leading-relaxed max-w-lg font-medium">
                  Polypo is the AI sizing and fit-intelligence platform that shows every shopper
                  their best size and style before they buy.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/#book-demo"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/90 backdrop-blur-sm text-zinc-900 font-semibold text-base md:text-lg hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl border border-zinc-900/10"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
