"use client"

import React from "react"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export function Testimonials({ id }: { id?: string }) {
  const testimonials = [
    {
      quote: "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
      name: "John Doe",
      title: "Software Engineer",
      avatar: "J"
    },
    {
      quote: "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
      name: "Sophia Lee",
      title: "Data Analyst", 
      avatar: "S"
    },
    {
      quote: "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry.",
      name: "Michael Johnson",
      title: "UX Designer",
      avatar: "M"
    },
    {
      quote: "I've seen a significant improvement in our team's productivity since we started using this service.",
      name: "Emily Davis",
      title: "Marketing Specialist",
      avatar: "E"
    },
    {
      quote: "The best investment we've made! The support team is also super responsive and helpful.",
      name: "Daniel Martinez",
      title: "Full-Stack Developer", 
      avatar: "D"
    },
    {
      quote: "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
      name: "Jane Smith",
      title: "Product Manager",
      avatar: "J"
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
                className="flex-shrink-0 w-80 p-6 dark-card-bg rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 icon-consistent text-white rounded-full flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
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
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center pt-12 md:pt-16 border-t border-border"
        >
          {[
            { number: "99%", label: "Client Satisfaction" },
            { number: "50+", label: "Projects Completed" },
            { number: "24/7", label: "Support Available" },
            { number: "5+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}