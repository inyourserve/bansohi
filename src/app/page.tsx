import React from "react"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Projects } from "@/components/sections/projects"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import CTABanner from "@/components/sections/cta-banner"
import { Footer } from "@/components/sections/footer"
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo"
import { homeMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...homeMetadata,
  alternates: {
    canonical: "https://bansohi.com",
  },
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Header />
      <main className="min-h-screen pt-20 bg-background" role="main">
        <Hero />
        <About />
        <Services id="features" />
        <Projects id="projects" />
        <Testimonials id="testimonials" />
        <FAQ id="faq" />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
