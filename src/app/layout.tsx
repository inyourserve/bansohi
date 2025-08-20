import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['Inter Fallback', 'sans-serif']
})

export const metadata: Metadata = {
  title: 'Mobile App Development & MVP Company | Bansohi Technology',
  description: 'We build mobile apps, MVPs, and SaaS platforms with robust backend development and SEO/ASO optimization. Book a free consultation.',
  keywords: 'mobile app development, MVP development, backend development, SaaS platforms, SEO optimization, ASO, app store optimization, React Native, Node.js',
  icons: {
    icon: '/globe-favicon.svg',
    shortcut: '/globe-favicon.svg',
    apple: '/globe-favicon.svg',
  },
  openGraph: {
    title: 'Mobile App Development & MVP Company | Bansohi Technology',
    description: 'We build mobile apps, MVPs, and SaaS platforms with robust backend development and SEO/ASO optimization. Book a free consultation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development & MVP Company | Bansohi Technology',
    description: 'We build mobile apps, MVPs, and SaaS platforms with robust backend development and SEO/ASO optimization. Book a free consultation.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-inter antialiased dark bg-background text-foreground">{children}</body>
    </html>
  )
}
