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
  title: 'Bansohi Technology Pvt Ltd - Web Development & SaaS Solutions',
  description: 'Leading technology company specializing in web development, SaaS solutions, AI automation, and SEO services. Transform your business with cutting-edge technology.',
  keywords: 'web development, SaaS, AI automation, SEO, technology solutions, software development',
  icons: {
    icon: '/globe-favicon.svg',
    shortcut: '/globe-favicon.svg',
    apple: '/globe-favicon.svg',
  },
  openGraph: {
    title: 'Bansohi Technology Pvt Ltd - Web Development & SaaS Solutions',
    description: 'Leading technology company specializing in web development, SaaS solutions, AI automation, and SEO services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bansohi Technology Pvt Ltd - Web Development & SaaS Solutions',
    description: 'Leading technology company specializing in web development, SaaS solutions, AI automation, and SEO services.',
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
