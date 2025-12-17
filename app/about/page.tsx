'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Section from '@/components/Section'
import GlassCard from '@/components/GlassCard'
import BentoGrid from '@/components/BentoGrid'

// Note: Metadata export is removed since this is now a client component
// You can add metadata through layout.tsx or use next/head if needed

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    platform: '',
    goals: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (placeholder)
    console.log('Form submitted:', formData)
    alert('Thank you! We will be in touch soon.')
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="text-center space-y-8 md:space-y-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
            Fit should be predictable
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're building the fit layer that makes online shopping feel certain.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Why we exist
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Size uncertainty drives returns, waste, and lost trust
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Generic tools ignore how brands actually design clothes
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Polypo exists to make fit clarity standard—not optional
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Built at the intersection of fashion and systems
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Experience across fashion, product, and technology
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-900 mt-2.5"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Focused on practical deployment and measurable impact
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Partner Program */}
      <Section>
        <div className="space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text text-center">
            Partner with Polypo
          </h2>
          <BentoGrid>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                For agencies, platforms, and retail tech partners
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Add fit intelligence to your offering
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Clear collaboration and rollout models
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Work with us to bring Polypo to your clients
              </p>
            </GlassCard>
            <GlassCard hover>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Our ecosystem
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fashion & beauty brands, ecommerce agencies, retail and omnichannel partners
              </p>
            </GlassCard>
          </BentoGrid>
        </div>
      </Section>

      {/* Contact Form */}
      <Section>
        <div className="glass-card-strong p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                Let's build fit confidence
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Tell us what you sell and what you're optimizing for.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="brand" className="block text-sm font-semibold text-gray-900 mb-2">
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  placeholder="Your brand name"
                />
              </div>

              <div>
                <label htmlFor="platform" className="block text-sm font-semibold text-gray-900 mb-2">
                  Platform
                </label>
                <input
                  type="text"
                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  placeholder="e.g., Shopify, Custom, Headless"
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-semibold text-gray-900 mb-2">
                  Goals
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 glass-card focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all resize-none"
                  placeholder="e.g., conversion, returns, bracketing, fit data"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gray-900 text-white text-base md:text-lg rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
              >
                Talk to us
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}
