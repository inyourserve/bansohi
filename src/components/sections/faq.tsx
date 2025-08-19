"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export function FAQ({ id }: { id?: string }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "What services does Bansohi Technology offer?",
      answer: "We offer comprehensive digital solutions including web development, mobile app development, SaaS platform creation, digital marketing, AI integration, and ongoing maintenance & support."
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex SaaS platforms may take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive maintenance and support packages including security updates, performance monitoring, bug fixes, and feature enhancements. Our support is available 24/7."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Next.js, Node.js, Python, React Native, AWS, Google Cloud, PostgreSQL, MongoDB, and many others. We choose the best tech stack for each project's specific needs."
    },
    {
      question: "How do you ensure project quality and deadlines?",
      answer: "We follow agile development methodologies with regular sprints, code reviews, automated testing, and continuous integration. We provide weekly progress updates and maintain transparent communication throughout the project."
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing depends on project scope, complexity, and timeline. We offer both fixed-price and hourly billing options. We provide detailed proposals with transparent pricing after understanding your specific requirements."
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