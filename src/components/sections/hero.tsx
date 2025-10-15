"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { CurveTimeline } from "@/components/ui/curve-timeline"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-20 pb-20 bg-background px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Centered Hero Content */}
        <div className="text-center mb-16">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              Build Apps That Scale
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We specialize in mobile app development, MVP creation, and backend systems—turning ideas into scalable SaaS platforms.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/consultation">
              <Button 
                size="lg" 
                className="h-12 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/works">
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 text-lg font-semibold border-border text-foreground hover:bg-accent"
              >
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Curve Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <CurveTimeline />
        </motion.div>

      </div>
    </section>
  )
}
