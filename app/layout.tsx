import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import GooeyNav from '@/components/interactive-elements/GooeyNav'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Jagdeep Singh',
  description: 'All about me is here.. if u want to hire me🤞',
  icons: {
    icon: '/favicon.ico',
  },
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/Projects' },
  { label: 'About', href: '/About' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="page-wrapper">
        <Providers>
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
      </Providers>
      </body>
    </html>
  )
}
