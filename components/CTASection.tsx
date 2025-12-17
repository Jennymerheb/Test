import Link from 'next/link'

interface CTASectionProps {
  headline: string
  body?: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  id?: string
}

export default function CTASection({
  headline,
  body,
  primaryCTA,
  secondaryCTA,
  id
}: CTASectionProps) {
  return (
    <div id={id} className="glass-card-strong p-8 md:p-12 lg:p-16 text-center space-y-6 md:space-y-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
        {headline}
      </h2>
      {body && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {body}
        </p>
      )}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href={primaryCTA.href}
          className="px-8 py-4 bg-gray-900 text-white text-base md:text-lg rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
        >
          {primaryCTA.text}
        </Link>
        {secondaryCTA && (
          <Link
            href={secondaryCTA.href}
            className="px-8 py-4 glass-card text-gray-900 text-base md:text-lg rounded-full hover:scale-105 transition-all w-full sm:w-auto"
          >
            {secondaryCTA.text}
          </Link>
        )}
      </div>
    </div>
  )
}
