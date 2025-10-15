"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, MapPin, Globe, Upload } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"


export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  })
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Upload file first if one is selected
      let fileName = null
      let fileUrl = null
      
      if (uploadedFile) {
        const uploadFormData = new FormData()
        uploadFormData.append('file', uploadedFile)
        
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: uploadFormData,
        })
        
        const uploadResult = await uploadResponse.json()
        
        if (uploadResponse.ok) {
          fileName = uploadResult.fileName
          fileUrl = uploadResult.fileUrl
        } else {
          throw new Error(uploadResult.error || 'File upload failed')
        }
      }

      // Submit consultation form to central API
      const response = await fetch('http://localhost:3001/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectName: 'bansohi',
          formType: 'consultation',
          submissionData: formData,
          files: fileName && fileUrl ? [{
            fileName,
            filePath: fileUrl,
            fileSize: uploadedFile?.size || 0,
            mimeType: uploadedFile?.type || 'application/octet-stream'
          }] : []
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            company: "",
            projectType: "",
            budget: "",
            timeline: "",
            description: ""
          })
          setUploadedFile(null)
          setUploadedFileUrl(null)
        }, 3000)
      } else {
        alert(result.error || 'Failed to submit consultation form. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 dark-card-bg rounded-full mb-8">
            <span className="text-sm font-medium text-muted-foreground">FREE CONSULTATION</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Let&apos;s Build Your App and Scale Your Business
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From MVP to market leader—we handle the full development cycle with growth marketing included. 
            Tell us about your app idea and we&apos;ll provide a detailed roadmap, timeline, and budget estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="dark-card-bg rounded-xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Project Details</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Consultation Request Sent!</h3>
                  <p className="text-muted-foreground">Thank you for your interest. We'll review your project details and get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="mvp">MVP Development</option>
                      <option value="backend">Backend Development</option>
                      <option value="saas">SaaS Platform</option>
                      <option value="seo-aso">SEO & ASO Optimization</option>
                      <option value="maintenance">App Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                      <option value="discuss">Let&apos;s discuss</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about your app idea, features, target audience, and any specific requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Upload Requirements Document (Optional)</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt,.md"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center w-full px-4 py-3 bg-background border-2 border-dashed border-border rounded-lg text-foreground hover:border-primary transition-colors cursor-pointer"
                    >
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          {uploadedFile ? (
                            <span className="text-foreground font-medium">{uploadedFile.name}</span>
                          ) : (
                            <>
                              <span className="font-medium text-primary">Click to upload</span> or drag and drop
                              <br />
                              <span className="text-xs">PDF, DOC, DOCX, TXT, MD (Max 10MB)</span>
                            </>
                          )}
                        </p>
                      </div>
                    </label>
                  </div>
                  {uploadedFile && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <span>✓ {uploadedFile.name} uploaded</span>
                      <button
                        type="button"
                        onClick={() => setUploadedFile(null)}
                        className="text-primary hover:text-primary/80 underline"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Project Details'
                  )}
                </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info - Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-5 h-full flex flex-col justify-between"
          >
            <div className="dark-card-bg rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-6">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Initial Review</h4>
                    <p className="text-xs text-muted-foreground mt-1">We&apos;ll review your requirements within 24 hours and provide initial feedback on your project scope and feasibility.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Free Consultation</h4>
                    <p className="text-xs text-muted-foreground mt-1">Schedule a 30-minute call to discuss your project in detail, explore technical solutions, and answer all your questions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Detailed Proposal</h4>
                    <p className="text-xs text-muted-foreground mt-1">Receive a comprehensive project proposal with detailed timeline, budget breakdown, and technical architecture.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-card-bg rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <span className="text-sm text-foreground font-medium">hello@bansohi.com</span>
                    <p className="text-xs text-muted-foreground mt-1">Send us your project details</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <span className="text-sm text-foreground font-medium">+91-98765-43210</span>
                    <p className="text-xs text-muted-foreground mt-1">Call us for immediate support</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <span className="text-sm text-foreground font-medium">Chapra, Bihar, India</span>
                    <p className="text-xs text-muted-foreground mt-1">Our development center</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-card-bg rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-5">Our Expertise</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Mobile App Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">MVP Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Backend Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">SaaS Platforms</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">SEO & ASO Optimization</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
