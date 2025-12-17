import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section'
import GlassCard from '@/components/GlassCard'
import BentoGrid from '@/components/BentoGrid'

export const metadata: Metadata = {
  title: 'Resources - Polypo',
  description: 'Practical insights on fit, returns, and conversion.',
}

export default function Resources() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="text-center space-y-8 md:space-y-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
            Resources
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Practical insights on fit, returns, and conversion.
          </p>
        </div>
      </Section>

      {/* Featured Resource */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 max-w-4xl mx-auto space-y-6">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Featured
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Case Study: How Clear Fit Changed Performance
          </h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg leading-relaxed">
                What changed when fit became clearer
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg leading-relaxed">
                Impact on conversion and returns
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg leading-relaxed">
                Lessons for other fashion teams
              </p>
            </div>
          </div>
          <div className="pt-4">
            <Link
              href="#"
              className="inline-block text-gray-900 font-semibold hover:opacity-70 transition-opacity"
            >
              Read the case study →
            </Link>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section>
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Real implementations
          </h2>
          <BentoGrid>
            <GlassCard hover>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Conversion Impact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  How a luxury brand increased add-to-cart by 23% with personalized fit recommendations.
                </p>
                <Link href="#" className="inline-block text-gray-900 font-semibold hover:opacity-70 transition-opacity">
                  Read more →
                </Link>
              </div>
            </GlassCard>
            <GlassCard hover>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Return Reduction
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A premium retailer cut size-related returns by 35% in the first quarter.
                </p>
                <Link href="#" className="inline-block text-gray-900 font-semibold hover:opacity-70 transition-opacity">
                  Read more →
                </Link>
              </div>
            </GlassCard>
            <GlassCard hover>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Fit Data Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Using real-world fit data to improve grading and reduce sizing inconsistencies.
                </p>
                <Link href="#" className="inline-block text-gray-900 font-semibold hover:opacity-70 transition-opacity">
                  Read more →
                </Link>
              </div>
            </GlassCard>
          </BentoGrid>
        </div>
      </Section>

      {/* Articles & Guides */}
      <Section>
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Learn from the field
          </h2>
          <BentoGrid>
            <GlassCard hover>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Why size charts fail online
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Understanding the limitations of static size charts and why shoppers need more context.
                </p>
                <Link href="#" className="inline-block text-gray-900 font-semibold hover:opacity-70 transition-opacity">
                  Read article →
                </Link>
              </div>
            </GlassCard>
            <GlassCard hover>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  The real cost of bracketing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  How ordering multiple sizes impacts logistics, margins, and customer experience.
                </p>
                <Link href="#" className="inline-block text-gray-900 font-semibold hover:opacity-70 transition-opacity">
                  Read article →
                </Link>
              </div>
            </GlassCard>
            <GlassCard hover>
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Using fit data to improve buying decisions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Leveraging real-world fit insights to optimize future collections and reduce returns.
                </p>
                <Link href="#" className="inline-block text-gray-900 font-semibold hover:opacity-70 transition-opacity">
                  Read article →
                </Link>
              </div>
            </GlassCard>
          </BentoGrid>
        </div>
      </Section>

      {/* Implementation & Docs */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">
            For technical teams
          </h2>
          <div className="space-y-4">
            <Link href="#" className="block p-6 glass-card hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Getting started</h3>
              <p className="text-gray-600">Quick start guide for implementation</p>
            </Link>
            <Link href="#" className="block p-6 glass-card hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shopify & headless setup</h3>
              <p className="text-gray-600">Integration guides for common platforms</p>
            </Link>
            <Link href="#" className="block p-6 glass-card hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technical FAQ</h3>
              <p className="text-gray-600">Common questions from dev teams</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* Soft CTA */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Can't find what you need?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Talk to us and we'll point you in the right direction.
          </p>
          <div className="pt-4">
            <Link
              href="mailto:hello@polypo.com"
              className="inline-block px-8 py-4 bg-gray-900 text-white text-base md:text-lg rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
