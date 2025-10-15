import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MVP Development Services | Turn Your Idea Into a Market-Ready App | Bansohi Technology",
  description: "Launch your app idea in 40-45 days with our proven MVP development process. Flutter, FastAPI, Python, PostgreSQL, MongoDB. Get free consultation and detailed estimate.",
  keywords: [
    "MVP development",
    "app development",
    "Flutter development",
    "FastAPI development", 
    "Python backend",
    "mobile app MVP",
    "startup app development",
    "app prototype",
    "minimum viable product",
    "app development India",
    "Bansohi Technology"
  ],
  openGraph: {
    title: "MVP Development Services | Bansohi Technology",
    description: "Launch your app idea in 40-45 days with our proven MVP development process. Get free consultation and detailed estimate.",
    type: "website",
    url: "https://bansohi.com/services/mvp-development",
    siteName: "Bansohi Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Development Services | Bansohi Technology",
    description: "Launch your app idea in 40-45 days with our proven MVP development process. Get free consultation and detailed estimate.",
  },
  alternates: {
    canonical: "https://bansohi.com/services/mvp-development",
  },
}

export default function MVPDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
