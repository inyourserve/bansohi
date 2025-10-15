"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Globe, Database, Users, Zap, Shield, Search, ArrowUpRight, Forward } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { projects } from "@/assets"
import { HorizontalProjectCard } from "@/components/ui/horizontal-project-card"


export default function WorkPage() {
  const caseStudies = [
    {
      title: "ShagunPe",
      description: "Transformed digital payments with a lightning-fast, secure payment processing app. Built with enterprise-grade security and real-time analytics, delivering seamless transactions that users trust and love.",
      category: "Fintech",
      technologies: ["Flutter", "FastAPI", "Python", "PostgreSQL", "Redis"],
      results: [
        "40% increase in app store visibility",
        "Improved payment processing speed by 60%",
        "Enhanced user conversion rates",
        "Secure backend with real-time analytics"
      ],
      image: projects.shagunpe.logo,
      link: "#"
    },
    {
      title: "Workerlly",
      description: "Revolutionized workforce management with an intelligent SaaS platform that connects skilled workers with opportunities. Features AI-powered matching, real-time scheduling, and comprehensive analytics dashboard.",
      category: "SaaS Platform",
      technologies: ["Flutter", "FastAPI", "Python", "MongoDB", "Redis"],
      results: [
        "Streamlined worker management process",
        "Improved scheduling efficiency by 70%",
        "Enhanced admin visibility and control",
        "SEO-optimized web dashboard for better discoverability"
      ],
      image: projects.workerlly.logo,
      link: "#"
    },
    {
      title: "Nearmind",
      description: "Created the future of local networking with an innovative social platform that connects professionals based on skills and proximity. Features smart discovery, instant messaging, and location-based matching.",
      category: "Social Networking",
      technologies: ["Flutter", "Firebase"],
      results: [
        "Location-based skill matching",
        "Real-time chat functionality",
        "Enhanced user engagement",
        "Scalable backend architecture"
      ],
      image: projects.nearmind.logo,
      link: "#"
    }
  ]

  const stats = [
    { number: "50+", label: "Apps Delivered", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Users },
    { number: "40%", label: "Average Performance Boost", icon: Zap },
    { number: "24/7", label: "Dedicated Support", icon: Shield }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
          <div className="inline-block px-4 py-2 dark-card-bg rounded-full mb-6">
            <span className="text-sm font-medium text-muted-foreground">PROVEN RESULTS</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Apps That Transform Businesses
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From fintech innovations to social platforms, we&apos;ve built apps that don&apos;t just work—they excel. 
            Each project showcases our commitment to delivering exceptional user experiences and measurable business results.
          </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group h-full"
            >
              <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-6 relative">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 icon-consistent rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-4">
          {caseStudies.map((project, index) => (
            <HorizontalProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden w-full dark-card-bg max-w-screen-lg mx-auto rounded-2xl py-8 md:py-16 px-6 md:px-14">
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              className={cn(
                "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
              )}
            />
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              className={cn(
                "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
                "inset-x-0 inset-y-0 h-[200%] skew-y-12"
              )}
            />
            <div className="relative z-0 flex flex-col gap-3">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground text-center">
                Ready to Build Your Success Story?
              </h3>
              <p className="mt-3 md:mt-2 text-sm md:text-base lg:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                Join the ranks of successful businesses who&apos;ve transformed their ideas into market-leading apps. 
                Let&apos;s create your next breakthrough together.
              </p>
            </div>
            <div className="relative z-0 mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="group relative">
                <div className="absolute -inset-1 brand-gradient rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <Link href="/consultation">
                  <Button size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
                    Start Your Project <ArrowUpRight className="!h-5 !w-5" />
                  </Button>
                </Link>
              </div>
              <Link href="/">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
                  Explore More <Forward className="!h-5 !w-5" />
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </section>
      </div>
      </main>
      <Footer />
    </div>
  )
}
