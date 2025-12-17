'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleItem(index)
    }
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="glass-card overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-expanded={openIndex === index}
            className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 hover:bg-white/20 transition-colors"
          >
            <span className="font-semibold text-base md:text-lg text-gray-900">
              {item.question}
            </span>
            <span
              className={`text-2xl text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
