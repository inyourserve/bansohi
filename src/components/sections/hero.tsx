"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen dark-gradient-bg flex items-center justify-center px-4 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-background/40" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Simple Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 md:px-4 py-2 dark-card-bg rounded-full mb-6 md:mb-8"
        >
          <span className="text-xs md:text-sm font-medium text-muted-foreground text-center">Trusted by startups and enterprises across India and beyond</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 px-2">
            Build Software That <br className="hidden sm:block" />
            <span className="gradient-text">Moves Business Forward</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We design, architect, and ship world-class web apps, SaaS platforms, and AI-powered systems—purpose-built for scale, speed, and outcomes.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <div className="group relative">
            <div className="absolute -inset-1 brand-gradient rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
            <Button 
              size="lg" 
              className="relative h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="h-14 px-8 text-lg font-semibold border-border text-foreground hover:bg-accent dark-card-bg"
          >
            View Case Studies
          </Button>
        </motion.div>

        {/* Simple Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-border"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "5+", label: "Years Shipping Production Software" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
