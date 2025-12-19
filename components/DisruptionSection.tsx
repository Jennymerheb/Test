'use client'

import React from 'react'
import Image from 'next/image'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { ShoppingBag, RefreshCw, AlertCircle, TrendingUp, Box } from 'lucide-react'

const DisruptionSection: React.FC = () => {
  const chartData = [
    { name: 'Kept', value: 30 },
    { name: 'Returned', value: 70 },
  ]
  const COLORS = ['#e0ccfb', '#9560e6']

  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
          Fashion's most expensive challenge
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-12 relative pb-24">

        {/* Card 1: Returns (Mannequins / Fit) */}
        <div className="sticky top-28 z-10">
          <div className="relative overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-0 h-[360px] md:h-[450px] border-t-4 border-t-purple-500/50">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10 h-full">
              <div className="flex flex-row h-full items-stretch">
                {/* Left Column: Text (45%) */}
                <div className="w-[50%] md:w-[45%] p-6 md:p-10 flex flex-col justify-center bg-white/40 backdrop-blur-sm order-1">
                  <div className="flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-purple-200 text-purple-700 mb-3 shadow-sm">
                      <RefreshCw size={14} />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Returns</span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                      High size-related returns
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-lg mb-6">
                      Around 70% of fashion returns are blamed on size and fit. Each one costs $15–25 to process.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <div className="px-2.5 py-1 bg-white/60 rounded border border-white/50 text-xs font-semibold text-gray-700">
                        70% size related
                      </div>
                      <div className="px-2.5 py-1 bg-white/60 rounded border border-white/50 text-xs font-semibold text-gray-700">
                        $15-25 cost/return
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Image (55%) */}
                <div className="w-[50%] md:w-[55%] relative h-full order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1529139574466-a302d27f60d0?q=80&w=2000&auto=format&fit=crop"
                    alt="Fashion Mannequins and Fit"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-transparent mix-blend-overlay"></div>

                  {/* Decorative Overlay for Tech Feel */}
                  <div className="absolute bottom-4 left-4 p-2 bg-white/10 backdrop-blur-md rounded border border-white/30 text-white text-xs font-mono hidden md:block">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span>Fit Analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Bracketing (Boxes / Inventory) */}
        <div className="sticky top-36 z-20">
          <div className="relative overflow-hidden bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-0 h-[360px] md:h-[450px] border-t-4 border-t-indigo-500/50">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10 h-full">
              <div className="flex flex-row h-full items-stretch">
                {/* Left Column: Text */}
                <div className="w-[50%] md:w-[45%] p-6 md:p-10 flex flex-col justify-center order-1">
                  <div className="flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-indigo-200 text-indigo-700 mb-3 shadow-sm">
                      <Box size={14} />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Bracketing</span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                      Bracketing kills margins
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-lg mb-6">
                      Customers order sizes 'just in case', then send most back. Inflates shipping & ties up inventory.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <div className="px-2.5 py-1 bg-white/60 rounded border border-white/50 text-xs font-semibold text-gray-700">
                        Inventory Lock-up
                      </div>
                      <div className="px-2.5 py-1 bg-white/60 rounded border border-white/50 text-xs font-semibold text-gray-700">
                        3x Shipping Costs
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Image */}
                <div className="w-[50%] md:w-[55%] relative h-full order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1627916607164-7b5267b5b4e7?q=80&w=2000&auto=format&fit=crop"
                    alt="Overwhelmed by boxes"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>

                  {/* Stats Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-white/50">
                      <ResponsiveContainer width={40} height={40}>
                        <PieChart>
                          <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={8}
                            outerRadius={18}
                            fill="#8884d8"
                            paddingAngle={0}
                            dataKey="value"
                            stroke="none"
                          >
                            {chartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Trust (Cart / Laptop) */}
        <div className="sticky top-44 z-30">
          <div className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-0 h-[360px] md:h-[450px] border-t-4 border-t-purple-600/50">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10 h-full">
              <div className="flex flex-row h-full items-stretch">
                {/* Left Column: Text */}
                <div className="w-[50%] md:w-[45%] p-6 md:p-10 flex flex-col justify-center order-1">
                  <div className="flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-purple-200 text-purple-700 mb-3 shadow-sm">
                      <AlertCircle size={14} />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Trust</span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                      Lost revenue & trust
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-lg mb-6">
                      Sizing uncertainty leads to abandoned carts. One bad fit can lose a shopper forever.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <div className="px-2.5 py-1 bg-white/60 rounded border border-white/50 text-xs font-semibold text-gray-700">
                        High Abandonment
                      </div>
                      <div className="px-2.5 py-1 bg-white/60 rounded border border-white/50 text-xs font-semibold text-gray-700">
                        Customer Churn
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Image */}
                <div className="w-[50%] md:w-[55%] relative h-full order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
                    alt="Abstract Shopping Cart and Laptop 3D"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-purple-500/10 mix-blend-multiply"></div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none hidden md:block">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-2 rounded border border-white/60 shadow-lg inline-flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold shrink-0 border border-red-100">
                        <TrendingUp size={14} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Conversion Drop</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default DisruptionSection
