"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

export function Projects({ id }: { id?: string }) {
  const projects = [
    {
      title: "ShagunPe",
      description: "Built a complete payment processing app with secure backend, real-time analytics, and ASO optimization—resulting in 40% increase in app store visibility.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Stripe"],
      category: "Payment App"
    },
    {
      title: "Workerlly",
      description: "Developed a worker management SaaS platform with mobile apps, backend APIs, and SEO-optimized web dashboard for better discoverability.",
      image: "/api/placeholder/400/300", 
      technologies: ["React", "Python", "MongoDB", "AWS"],
      category: "SaaS Platform"
    },
    {
      title: "Nearmind",
      description: "Built a social networking app to connect people with similar skills in nearby locations. Features discover, connect, and chat functionality with location-based matching.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Node.js", "Geolocation APIs"],
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="dark-card-bg rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              <div className="h-48 dark-surface flex items-center justify-center">
                <div className="text-4xl font-bold text-muted-foreground">
                  {project.title.charAt(0)}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 icon-consistent text-white rounded-full text-xs font-medium mb-4">
                  {project.category}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 dark-surface text-muted-foreground rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Read Case Study
                  </Button>
                </div>
              </div>
            </motion.div>
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
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border text-foreground hover:bg-accent dark-card-bg"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}