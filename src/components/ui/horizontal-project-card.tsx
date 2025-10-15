"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface HorizontalProjectCardProps {
  project: {
    title: string
    description: string
    category: string
    technologies: string[]
    results: string[]
    image: string
    link: string
  }
  index: number
}

export function HorizontalProjectCard({ project, index }: HorizontalProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="bg-background border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-10 hover:border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          
          {/* Enhanced Project Icon/Image Container */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* White border container */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-black rounded-xl flex items-center justify-center shadow-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 group-hover:scale-105">
                {project.title === "Nearmind" || project.title === "ShagunPe" || project.title === "Workerlly" ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} logo`}
                    width={60}
                    height={60}
                    className="object-contain md:w-20 md:h-20"
                  />
                ) : (
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Project Information */}
          <div className="flex-1 min-w-0 w-full">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1 text-center md:text-left">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                  {project.description}
                </p>
                
                {/* Category Badge */}
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm font-medium shadow-lg">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Single Action Button */}
              <div className="flex justify-center md:justify-end md:ml-6 md:items-start">
                <Button 
                  size="sm" 
                  className="h-10 px-6 text-sm bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 w-full md:w-auto"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
