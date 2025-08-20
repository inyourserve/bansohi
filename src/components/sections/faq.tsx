"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export function FAQ({ id }: { id?: string }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "What types of apps do you develop?",
      answer: "We develop mobile apps (iOS/Android), web applications, SaaS platforms, and MVPs with robust backend systems. Our expertise covers the complete app development lifecycle."
    },
    {
      question: "How do you approach MVP development?",
      answer: "We focus on core features, rapid development, and market validation while building with scalability in mind. Our MVP process typically takes 4-8 weeks to get your app to market quickly."
    },
    {
      question: "Do you handle backend development?",
      answer: "Yes—we build complete backend systems including APIs, databases, authentication, and cloud infrastructure. Our backend expertise ensures your apps are scalable, secure, and performant."
    },
    {
      question: "How do you optimize for app store visibility?",
      answer: "We implement comprehensive ASO strategies including keyword optimization, app store listings, and user acquisition tactics. This helps your app rank higher and get discovered by more users."
    },
    {
      question: "What about SEO for web apps?",
      answer: "We optimize web applications for search engines with technical SEO, content strategy, and performance optimization. This drives organic traffic and improves your app's online visibility."
    },
    {
      question: "How do you ensure app quality?",
      answer: "We use modern frameworks, testing, CI/CD, performance optimization, and thorough quality assurance processes. Our apps are built to handle scale and provide excellent user experiences."
    }
  ]

  return (
    <section id={id} className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 dark-card-bg rounded-full mb-6">
            <span className="text-sm font-medium text-muted-foreground">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Common Questions
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get answers to the most frequently asked questions about our services and process.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="dark-card-bg rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-accent transition-colors"
              >
                <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                {openFAQ === index ? (
                  <Minus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-8 pb-6"
                >
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}