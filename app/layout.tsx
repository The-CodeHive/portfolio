import './globals.css'
import Providers from './providers'
import GooeyNav from '@/components/interactive-elements/GooeyNav'
import ClientLenisWrapper from './ClientLenisWrapper'

export const metadata = {
  title: "Jagdeep Singh | Full Stack Developer",
  description: "Official portfolio of Jagdeep Singh – Full Stack Developer building smooth, interactive web experiences with React, Next.js, and modern tech.",
  metadataBase: new URL("https://jagdeepsingh.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
  robots: "index, follow",
  openGraph: {
    title: "Jagdeep Singh | Full Stack Developer",
    description: "Official portfolio of Jagdeep Singh – Full Stack Developer building smooth, interactive web experiences.",
    url: "https://jagdeepsingh.vercel.app",
    siteName: "Jagdeep Singh",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdeep Singh | Full Stack Developer",
    description: "Portfolio of Jagdeep Singh – React and Next.js developer from India.",
  },
  alternates: {
    canonical: "https://jagdeepsingh.vercel.app",
  },
};


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
