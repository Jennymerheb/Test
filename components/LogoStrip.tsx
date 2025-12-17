interface LogoStripProps {
  logos: string[]
  label?: string
}

export default function LogoStrip({ logos, label }: LogoStripProps) {
  return (
    <div className="text-center space-y-6 md:space-y-8">
      {label && (
        <p className="text-sm md:text-base text-gray-600 font-medium">
          {label}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="glass-card px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium text-gray-700 hover:scale-105 transition-transform"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
