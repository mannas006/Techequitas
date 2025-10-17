import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechEquitas - Bridging the Digital Divide',
  description: 'A non-profit organization dedicated to collecting old technology and donating it to those in need. Join us in bridging the digital divide.',
  keywords: ['nonprofit', 'technology', 'digital divide', 'device donation', 'community'],
  authors: [{ name: 'TechEquitas' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=yes, minimum-scale=1, maximum-scale=5',
  openGraph: {
    title: 'TechEquitas - Bridging the Digital Divide',
    description: 'A non-profit organization dedicated to collecting old technology and donating it to those in need.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}