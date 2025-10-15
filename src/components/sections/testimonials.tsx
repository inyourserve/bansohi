"use client"

import React from "react"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export function Testimonials({ id }: { id?: string }) {
  const testimonials = [
    {
      quote: "Bansohi delivered our MVP in record time—the app was stable, scalable, and ready for our Series A pitch. Their backend expertise was invaluable.",
      name: "Rahul Sharma",
      title: "Founder, Mobile App Startup",
      avatar: "R"
    },
    {
      quote: "They built our SaaS platform from scratch with perfect SEO implementation. Our organic traffic increased by 300% in 6 months.",
      name: "Priya Patel",
      title: "CEO, SaaS Company", 
      avatar: "P"
    },
    {
      quote: "The app development quality was outstanding, and their ASO strategy helped us reach #1 in our category within 3 months.",
      name: "Amit Kumar",
      title: "Product Manager, E-commerce App",
      avatar: "A"
    },
    {
      quote: "From MVP to production, their backend development was rock-solid. The app handles 10x more users than expected.",
      name: "Neha Singh",
      title: "CTO, Fintech Startup",
      avatar: "N"
    },
    {
      quote: "Their SEO and ASO strategies transformed our app's visibility. We're now getting organic users without paid marketing.",
      name: "Vikram Mehta",
      title: "Marketing Director, Tech Company", 
      avatar: "V"
    },
    {
      quote: "The complete development cycle was seamless—from concept to app store success. Highly recommended for app development.",
      name: "Sneha Reddy",
      title: "Product Lead, Health Tech",
      avatar: "S"
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Testimonials
          </h2>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * testimonials.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-6 mb-8"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-80 group"
              >
                <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-6 relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 icon-consistent text-white rounded-full flex items-center justify-center font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                      <div className="ml-auto">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
                          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}