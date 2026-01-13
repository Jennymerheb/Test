import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div
      className={`
        glass-card p-6 md:p-8
        ${hover ? 'transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-purple-300/60 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
