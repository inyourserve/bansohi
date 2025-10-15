"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Database, Brain, Shield, Search, Zap } from "lucide-react"

export function Services({ id }: { id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Globe,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps with intuitive UX, robust backend integration, and scalable architecture for iOS and Android."
    },
    {
      icon: Database,
      title: "MVP Development",
      description: "Rapid MVP creation to validate ideas, test market fit, and secure funding—built with scalability in mind from day one."
    },
    {
      icon: Brain,
      title: "Backend Development",
      description: "High-performance APIs, databases, and server infrastructure that power your apps with security, scalability, and reliability."
    },
    {
      icon: Shield,
      title: "SaaS Platform Development",
      description: "Complete SaaS solutions with user management, billing systems, analytics dashboards, and multi-tenant architecture."
    },
    {
      icon: Search,
      title: "SEO & ASO Optimization",
      description: "Technical SEO for web apps and App Store Optimization for mobile apps—driving organic growth and user acquisition."
    },
    {
      icon: Zap,
      title: "App Maintenance & Support",
      description: "Ongoing maintenance, updates, bug fixes, and 24/7 support to keep your apps running smoothly and securely."
    }
  ]

  return (
    <section ref={ref} id={id} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 dark-card-bg rounded-full mb-6">
            <span className="text-sm font-medium text-muted-foreground">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Full-Stack App Development & Growth Solutions
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group h-full"
            >
              <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-4 md:p-6 relative">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 icon-consistent rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}