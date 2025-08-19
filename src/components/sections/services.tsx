"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Database, Brain, Shield, Search, Users } from "lucide-react"

export function Services({ id }: { id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Globe,
      title: "Web & App Development",
      description: "High-performance web and mobile experiences with clear UX, clean architecture, and maintainable code."
    },
    {
      icon: Database,
      title: "SaaS Platforms",
      description: "Multi-tenant, secure, and scalable platforms with billing, dashboards, and admin tooling built-in."
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Integrations and automations that save hours—LLM features, workflows, data processing, and ops tooling."
    },
    {
      icon: Shield,
      title: "Enterprise Software",
      description: "Mission-critical systems with strong security, observability, and uptime guarantees."
    },
    {
      icon: Search,
      title: "SEO & Technical Performance",
      description: "Technical SEO, Core Web Vitals, and high-speed architecture for growth."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Co-delivery with internal teams or full ownership—whatever works best for your organization."
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
            Full-Stack Product Development—From Idea to Impact
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
              className="p-4 md:p-6 dark-card-bg rounded-lg card-hover group"
            >
              <div className="w-12 h-12 icon-consistent rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}