import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section'
import GlassCard from '@/components/GlassCard'
import BentoGrid from '@/components/BentoGrid'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Platform - Polypo',
  description: 'A modular fit-intelligence stack for fashion & beauty brands.',
}

export default function Platform() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="text-center space-y-8 md:space-y-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
            The Polypo AI sizing platform
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A modular fit-intelligence stack for fashion & beauty brands.
          </p>
          <div className="pt-4">
            <Link
              href="/#book-demo"
              className="inline-block px-8 py-4 bg-gray-900 text-white text-base md:text-lg rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
            >
              Design your Polypo stack
            </Link>
          </div>
        </div>
      </Section>

      {/* Core AI Sizing Engine */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Your fit logic, scaled
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Recommends the best size per shopper, per item
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Reflects your brand's grading and fit philosophy
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Adapts across categories, fabrics, and silhouettes
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Creates consistent fit guidance across collections
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Simple by design
          </h2>
          <BentoGrid columns={2}>
            <GlassCard>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-0.5">
                  Embed Polypo on PDP and key touchpoints
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-0.5">
                  Shopper completes a fast profile
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-0.5">
                  Size and fit guidance appear instantly
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  4
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-0.5">
                  Data feeds back into fit insights
                </p>
              </div>
            </GlassCard>
          </BentoGrid>
        </div>
      </Section>

      {/* Modules */}
      <Section>
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Add what you need, when you need it
          </h2>
          <BentoGrid>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Fit visualization (2D / 3D)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Set expectations before purchase.
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Guidance (AI stylist & fit notes)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Turn sizing into clear, human language.
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Interactive layer (3D & AR)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Increase engagement and confidence.
              </p>
            </GlassCard>
          </BentoGrid>
        </div>
      </Section>

      {/* Fit Intelligence Dashboard */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Fit data you can act on
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                See how products fit in the real world
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Identify problem SKUs and sizing gaps
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Improve future buys and grading decisions
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Omnichannel */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Fit confidence, everywhere
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                AR mirrors for in-store, vitrine, and pop-ups
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Connect physical interactions to digital insights
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                One fit logic across channels
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Integrations & Deployment */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Built for modern commerce
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Shopify-ready
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Headless and custom environments
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Lightweight deployment with minimal PDP friction
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Security & Privacy */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Privacy-first by design
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Clear data handling and access controls
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Configurable retention policies
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Built for brands with high trust standards
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <CTASection
          headline="Design your Polypo stack"
          body="Start with sizing. Expand into visualization, guidance, and analytics."
          primaryCTA={{ text: 'Design your stack', href: '#' }}
          secondaryCTA={{ text: 'Book a demo', href: '/#book-demo' }}
        />
      </Section>
    </>
  )
}
