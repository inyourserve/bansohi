"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { projects } from "@/assets"
import { ProjectCard } from "@/components/ui/project-card"

export function Projects({ id }: { id?: string }) {
  const projectList = [
    {
      title: "ShagunPe",
      description: "Built a complete payment processing app with secure backend, real-time analytics, and ASO optimization—resulting in 40% increase in app store visibility.",
      image: projects.shagunpe.logo,
      technologies: ["Flutter", "FastAPI", "Python", "PostgreSQL", "Redis"],
      category: "Payment App"
    },
    {
      title: "Workerlly",
      description: "Developed a worker management SaaS platform with mobile apps, backend APIs, and SEO-optimized web dashboard for better discoverability.",
      image: projects.workerlly.logo, 
      technologies: ["Flutter", "FastAPI", "Python", "MongoDB", "Redis"],
      category: "SaaS Platform"
    },
    {
      title: "Nearmind",
      description: "Built a social networking app to connect people with similar skills in nearby locations. Features discover, connect, and chat functionality with location-based matching.",
      image: projects.nearmind.logo,
      technologies: ["Flutter", "Firebase"],
      category: "Social Networking"
    }
  ]

  return (
    <section id={id} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 dark-card-bg rounded-full mb-6">
            <span className="text-sm font-medium text-muted-foreground">Results That Speak for Themselves</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Selected Work
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Want to see something specific? We&apos;ll walk you through relevant work.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectList.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/works">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border text-foreground hover:bg-accent dark-card-bg"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}