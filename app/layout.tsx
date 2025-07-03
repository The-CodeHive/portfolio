import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import GooeyNav from '@/components/interactive-elements/GooeyNav'

export const metadata: Metadata = {
  title: 'Jagdeep Singh',
  description: 'All about me is here.. if u want to hire me🤞',
  icons: {
    icon: '/favicon.ico',
  },
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: '\u0020About', href: '/about' },
  { label: 'Projects', href: '/projects' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="page-wrapper">
        {/* GooeyNav will auto-hide when #hero-section or #footer intersect */}
        <GooeyNav
          items={navItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />

        <main>{children}</main>
      </body>
    </html>
  )
}
