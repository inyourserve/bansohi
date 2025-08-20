"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Users, Zap, Shield } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { value: "50+", label: "Apps Delivered", icon: Target },
    { value: "99%", label: "Client Satisfaction", icon: Users },
    { value: "1+", label: "Years Experience", icon: Zap },
    { value: "24/7", label: "Support Available", icon: Shield }
  ]

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 dark-card-bg rounded-full mb-6">
            <span className="text-sm font-medium text-muted-foreground">ABOUT BANSOHI TECHNOLOGY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            From MVP to Market Leader <br />
            Your App Development Partner
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bansohi Technology Pvt Ltd is your end-to-end app development partner. We excel at building MVPs that validate ideas, 
            robust backend systems that scale, and SaaS platforms that drive growth. Our expertise spans mobile apps, 
            web applications, backend development, and digital marketing strategies including SEO and ASO.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="text-center p-4 md:p-6 dark-card-bg rounded-lg card-hover group"
            >
              <div className="w-12 h-12 mx-auto mb-4 icon-consistent rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Core Strengths
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We specialize in rapid MVP development, robust backend architecture, and scalable SaaS platforms. 
              Our expertise in SEO and ASO ensures your apps not only work perfectly but also reach your target audience effectively.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From initial concept to app store success, we handle the complete development lifecycle with 
              a focus on quality, performance, and growth-driven results.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Mobile App Development",
              "MVP Development", 
              "Backend Development",
              "SaaS Platform Development",
              "SEO Optimization",
              "ASO (App Store Optimization)"
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-white/60 rounded-full" />
                <span className="text-foreground font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}