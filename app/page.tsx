import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section'
import GlassCard from '@/components/GlassCard'
import BentoGrid from '@/components/BentoGrid'
import FAQAccordion from '@/components/FAQAccordion'
import LogoStrip from '@/components/LogoStrip'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Polypo - Know the size. See the fit.',
  description: 'AI sizing and fit-intelligence platform that shows every shopper their best size—and what to expect—before they buy.',
}

export default function Home() {
  const faqItems = [
    {
      question: 'Do shoppers need measurements?',
      answer: 'Polypo is designed for low-friction input on PDP.',
    },
    {
      question: 'Can we customize the experience?',
      answer: 'Yes—UI, tone, logic, and modules are configurable.',
    },
    {
      question: 'Does it work across different fits and fabrics?',
      answer: 'Yes, Polypo adapts by category, silhouette, and fabric behavior.',
    },
    {
      question: 'How does it integrate?',
      answer: 'Shopify, headless, and custom setups are supported.',
    },
    {
      question: 'What data do we get?',
      answer: 'Size selection, fit confidence signals, and product-level insights.',
    },
    {
      question: 'Is it privacy-safe?',
      answer: 'Built with security and privacy controls suitable for commerce.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <Section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="text-center space-y-8 md:space-y-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight animate-fade-in">
            Know the size. See the fit.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slide-up">
            Polypo is an AI sizing and fit-intelligence platform that shows every shopper their best size—and what to expect—before they buy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up">
            <Link
              href="#book-demo"
              className="px-8 py-4 bg-gray-900 text-white text-base md:text-lg rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Book a demo
            </Link>
            <Link
              href="/platform"
              className="px-8 py-4 glass-card text-gray-900 text-base md:text-lg rounded-full hover:scale-105 transition-all w-full sm:w-auto"
            >
              Explore the platform →
            </Link>
          </div>
        </div>
      </Section>

      {/* Credibility Strip */}
      <Section className="py-12 md:py-16">
        <LogoStrip
          label="Trusted by fashion & beauty teams"
          logos={['L'Oréal', 'NYX', 'Schwarzkopf', 'Clara Strehle', 'LETOIT']}
        />
      </Section>

      {/* Why Polypo */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Fit intelligence, not size charts
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
            Polypo replaces generic size charts with fit intelligence built around your brand. We deliver consistent sizing across every style—because inconsistent fit is fashion's biggest and most expensive problem.
          </p>
        </div>
      </Section>

      {/* Outcomes */}
      <Section>
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Clear fit. Better performance.
          </h2>
          <BentoGrid columns={2}>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Boost conversion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shoppers move forward when fit feels certain.
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Reduce returns
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fewer size mistakes, fewer costly returns.
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Reduce bracketing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Less "just in case" ordering, lower shipping and inventory lock-up.
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Improve fit data
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learn how your products actually fit, at scale.
              </p>
            </GlassCard>
          </BentoGrid>
        </div>
      </Section>

      {/* The Problem */}
      <Section>
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Fashion's most expensive challenge
          </h2>
          <BentoGrid>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                High size-related returns
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Around 70% of fashion returns are due to size and fit—each costing $15–25 to process.
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Low shopper confidence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Unclear fit leads to hesitation, abandoned carts, and lost trust.
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Margin erosion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bracketing inflates shipping costs and ties up inventory.
              </p>
            </GlassCard>
          </BentoGrid>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            From PDP to purchase confidence
          </h2>
          <div className="glass-card-strong p-8 md:p-12 space-y-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-0.5">
                  Shoppers create a profile in seconds, directly on the product page
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-0.5">
                  Polypo recommends the best size for that specific item
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed pt-0.5">
                  Brands learn from fit analytics to improve sizing consistency over time
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed italic">
                <strong>Note:</strong> The experience is fully customizable—from UI and tone to inputs and fit logic. Polypo can be configured to match what your customers need, and expanded as your platform grows.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Platform Overview */}
      <Section>
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Build your fit stack
          </h2>
          <BentoGrid>
            <GlassCard hover>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Core engine
              </h3>
              <p className="text-gray-600">
                AI size recommendations per SKU
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Fit visualization
              </h3>
              <p className="text-gray-600">
                2D & 3D fit context
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Interactive layer
              </h3>
              <p className="text-gray-600">
                3D viewers and AR
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Guidance
              </h3>
              <p className="text-gray-600">
                AI stylist and fit explanations
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Omnichannel
              </h3>
              <p className="text-gray-600">
                AR mirrors for retail and events
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Dashboard
              </h3>
              <p className="text-gray-600">
                Fit data and performance insights
              </p>
            </GlassCard>
          </BentoGrid>
        </div>
      </Section>

      {/* Who It's For */}
      <Section>
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Built for fit-driven fashion teams
          </h2>
          <BentoGrid columns={2}>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Brands (SME → premium & luxury)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Increase conversion while protecting brand trust.
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Designers & made-to-order
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Translate a unique fit philosophy into digital guidance.
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Marketplaces & multi-brand retailers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Standardize fit confidence across brands to reduce returns.
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Internal teams
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ecommerce · Merchandising · Omnichannel · Tech — One fit layer that supports growth, decisions, and clean integrations.
              </p>
            </GlassCard>
          </BentoGrid>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Quick answers
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <CTASection
          id="book-demo"
          headline="See Polypo on your products"
          body="Book a demo to explore sizing, modules, and rollout options."
          primaryCTA={{ text: 'Book a demo', href: '#' }}
          secondaryCTA={{ text: 'Talk to us', href: 'mailto:hello@polypo.com' }}
        />
      </Section>
    </>
  )
}
