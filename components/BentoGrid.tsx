import { ReactNode } from 'react'

interface BentoGridProps {
  children: ReactNode
  columns?: 2 | 3 | 4
  className?: string
}

export default function BentoGrid({ children, columns = 3, className = '' }: BentoGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  )
}
