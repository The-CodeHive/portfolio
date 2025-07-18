import './globals.css'
import Providers from './providers'
import GooeyNav from '@/components/interactive-elements/GooeyNav'
import ClientLenisWrapper from './ClientLenisWrapper'

export const metadata = {
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="page-wrapper" cz-shortcut-listen="true">
        <Providers>
          <ClientLenisWrapper>
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
          </ClientLenisWrapper>
        </Providers>
      </body>
    </html>
  )
}
