import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative px-4 md:px-6 lg:px-8 pt-8 pb-16 md:pb-20">
      {/* Hero Card Container - Large Rounded Corners */}
      <div className="relative max-w-[1400px] mx-auto rounded-[48px] md:rounded-[64px] overflow-hidden bg-gradient-to-br from-[#f5f0ed] via-[#ebe5e8] to-[#ddd5e0] min-h-[600px] md:min-h-[700px]">
        {/* Background Glass Panels */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Vertical glass panel 1 */}
          <div className="absolute top-0 bottom-0 left-[15%] w-[120px] md:w-[180px] bg-white/10 backdrop-blur-sm transform -skew-y-6" />
          {/* Vertical glass panel 2 */}
          <div className="absolute top-0 bottom-0 left-[30%] w-[140px] md:w-[200px] bg-white/8 backdrop-blur-sm transform -skew-y-6" />
          {/* Vertical glass panel 3 */}
          <div className="absolute top-0 bottom-0 left-[50%] w-[100px] md:w-[160px] bg-white/6 backdrop-blur-sm transform -skew-y-6" />

          {/* Diagonal Light Beam - Top Right to Bottom Left */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[800px] md:w-[800px] md:h-[1000px] bg-gradient-to-br from-white/40 via-white/20 to-transparent transform rotate-[-35deg] blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[600px] md:min-h-[700px] px-8 md:px-12 lg:px-16 py-12 md:py-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Small Glass Pill - Platform Description */}
            <div className="inline-flex self-start">
              <div className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm">
                <p className="text-sm md:text-base text-zinc-800 leading-relaxed max-w-md">
                  Explore Polypo's customizable platform, from AI size recommendations to fit
                  visualization, insights, and omnichannel experiences (AR mirrors).
                </p>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-sm font-medium text-zinc-800">
                Core Size Engine
              </div>
              <div className="px-4 py-2 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-sm font-medium text-zinc-800">
                Platform Building
              </div>
              <div className="px-4 py-2 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-sm font-medium text-zinc-800">
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
              <p className="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-lg">
                Polypo is the AI sizing and fit-intelligence platform that shows every shopper
                their best size and style before they buy.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/#book-demo"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold text-base md:text-lg hover:bg-zinc-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Right Column - 3D Mannequin */}
          <div className="relative flex items-center justify-center md:justify-end h-full">
            <div className="relative w-full max-w-[500px] h-[500px] md:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800"
                alt="Fashion mannequin showcasing fit technology"
                fill
                className="object-contain object-center"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
