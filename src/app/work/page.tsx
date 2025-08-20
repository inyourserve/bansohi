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


export default function WorkPage() {
  const caseStudies = [
    {
      title: "ShagunPe",
      description: "A complete payment processing app with secure backend, real-time analytics, and ASO optimization. The app resulted in 40% increase in app store visibility and improved user conversion rates.",
      category: "Payment App",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Stripe", "Firebase"],
      results: [
        "40% increase in app store visibility",
        "Improved payment processing speed by 60%",
        "Enhanced user conversion rates",
        "Secure backend with real-time analytics"
      ],
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      title: "Workerlly",
      description: "A comprehensive worker management SaaS platform with mobile apps, backend APIs, and SEO-optimized web dashboard. The platform streamlines worker matching, scheduling, and management at scale.",
      category: "SaaS Platform",
      technologies: ["React", "Python", "MongoDB", "AWS", "React Native"],
      results: [
        "Streamlined worker management process",
        "Improved scheduling efficiency by 70%",
        "Enhanced admin visibility and control",
        "SEO-optimized web dashboard for better discoverability"
      ],
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      title: "Nearmind",
      description: "A social networking app designed to connect people with similar skills in nearby locations. Features include discover, connect, and chat functionality with location-based matching algorithms.",
      category: "Social Networking",
      technologies: ["React Native", "Firebase", "Node.js", "Geolocation APIs", "WebRTC"],
      results: [
        "Location-based skill matching",
        "Real-time chat functionality",
        "Enhanced user engagement",
        "Scalable backend architecture"
      ],
      image: "/api/placeholder/600/400",
      link: "#"
    }
  ]

  const stats = [
    { number: "50+", label: "Apps Delivered", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Users },
    { number: "40%", label: "Average Performance Improvement", icon: Zap },
    { number: "24/7", label: "Support Available", icon: Shield }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 dark-card-bg rounded-full mb-6">
            <span className="text-sm font-medium text-muted-foreground">CASE STUDIES</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Results That Speak for Themselves
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that demonstrate our expertise in app development, 
            MVP creation, and scalable backend solutions. Want to see something specific? We&apos;ll walk you through relevant work.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center p-6 dark-card-bg rounded-lg">
              <div className="w-12 h-12 mx-auto mb-4 icon-consistent rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Project Image */}
              <div className="order-2 lg:order-1">
                <div className="dark-card-bg rounded-lg overflow-hidden">
                  <div className="h-64 dark-surface flex items-center justify-center">
                    <div className="text-6xl font-bold text-muted-foreground">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="order-1 lg:order-2">
                <div className="inline-block px-3 py-1 icon-consistent text-white rounded-full text-xs font-medium mb-4">
                  {project.category}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{project.title}</h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 dark-surface text-muted-foreground rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Case Study
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-border text-foreground hover:bg-accent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </motion.div>
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
                Ready to Build Your App?
              </h3>
              <p className="mt-3 md:mt-2 text-sm md:text-base lg:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                Let&apos;s discuss your project and create something amazing together. 
                Our team is ready to turn your ideas into reality.
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
                  Back to Home <Forward className="!h-5 !w-5" />
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
