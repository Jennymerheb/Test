import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About - Polypo",
  description: "We're building the fit layer that makes online shopping feel certain.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
