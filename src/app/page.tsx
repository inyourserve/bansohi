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

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-background">
        <Hero />
        <About />
        <Services id="features" />
        <Projects id="projects" />
        <Testimonials id="testimonials" />
        <FAQ id="faq" />
        <CTABanner />
        <Footer />
      </main>
    </>
  )
}
