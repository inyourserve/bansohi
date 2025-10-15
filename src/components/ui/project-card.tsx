"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    category: string
    technologies: string[]
    image: string
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group h-full"
    >
      <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          {/* Project Image Section */}
          <div className="relative overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center p-8 relative">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/20"></div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
              
              {project.title === "Nearmind" || project.title === "ShagunPe" || project.title === "Workerlly" ? (
                <motion.div 
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} logo`}
                    width={120}
                    height={120}
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>
              ) : (
                <div className="relative z-10 text-5xl font-bold text-muted-foreground/20">
                  {project.title.charAt(0)}
                </div>
              )}
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Project Details */}
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              {/* Category Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold text-white mb-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full shadow-lg"></div>
                {project.category}
              </motion.div>
              
              {/* Title */}
              <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h2>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <motion.span 
                      key={tech} 
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-xs font-medium shadow-lg hover:bg-white/20 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-xs font-medium shadow-lg">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
