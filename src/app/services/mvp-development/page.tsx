"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Rocket, 
  Shield, 
  Users, 
  Zap,
  Star,
  Play,
  Download,
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  Target,
  TrendingUp,
  Code,
  Smartphone,
  Database,
  Cloud,
  Globe,
  FileText,
  Palette,
  ImageIcon,
  BookOpen,
  Upload as UploadIcon
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { projects } from "@/assets"

const benefits = [
  {
    icon: Target,
    title: "Validate Your Idea",
    description: "Build a minimum viable product to check idea viability with potential users, substantiate market demand, and decide which concepts to keep and which to toss."
  },
  {
    icon: Clock,
    title: "Hit the Market Early",
    description: "Release faster with just enough features to attract early adopters, gather valuable customer feedback, and claim your place in the market."
  },
  {
    icon: DollarSign,
    title: "Generate Early Revenue",
    description: "Ship your product sooner to test your business model and generate early revenue by pulling in lighthouse users."
  },
  {
    icon: Rocket,
    title: "Launch Your Product Smarter",
    description: "Use an MVP for a fast and cost-efficient product launch without spending time and money on building the entire product at once."
  },
  {
    icon: TrendingUp,
    title: "Get Investors On Board",
    description: "Showcase your app's functionality, prove your product commitment, and demonstrate the potential of your idea to picky investors."
  },
  {
    icon: Users,
    title: "Develop Data-Driven Strategy",
    description: "Minimize guesswork in your product roadmap by analyzing actual user behavior and preferences to prioritize future feature development."
  }
]

const process = [
  {
    step: "01",
    title: "Product Discovery",
    description: "Deep dive into your product idea, target audience, and competitors to determine unique selling proposition and select optimal monetization strategy.",
    duration: "5-7 days",
    people: ["Business Analyst", "Software Architect", "Product Manager", "UI/UX Designer"],
    deliverables: ["Product Specifications", "Wireframes & Prototype", "Business Model"]
  },
  {
    step: "02", 
    title: "Development Planning",
    description: "Scope your project, develop system architecture, select tech stack, and prepare estimations, timelines, and team composition.",
    duration: "3-5 days",
    people: ["Software Architect", "Project Manager", "Business Analyst", "Development Team"],
    deliverables: ["Tech Stack Definition", "Timeline & Team", "Solution Architecture"]
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Build high-value features to validate the idea and collect feedback. Each deliverable is thoroughly tested to ensure everything works as intended.",
    duration: "25-30 days",
    people: ["Product Manager", "UI/UX Designer", "Business Analyst", "Development Team", "QA Team"],
    deliverables: ["Feature Implementation", "Code & Documentation", "Product Functionality"]
  },
  {
    step: "04",
    title: "Launch & Analyze",
    description: "Launch your MVP, collect user feedback, and see how the product performs against predefined metrics. Iteratively refine to move closer to product-market fit.",
    duration: "5-7 days",
    people: ["Project Manager", "Product Manager", "Development Team", "QA Team"],
    deliverables: ["Product Metrics Analysis", "Bug Fixes", "Updated App Versions"]
  }
]


const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechStart India",
    role: "Founder & CEO",
    content: "Bansohi delivered our MVP in just 5 weeks. The quality exceeded our expectations and helped us secure our first round of funding.",
    rating: 5,
    avatar: "RK"
  },
  {
    name: "Priya Sharma",
    company: "InnovateLab",
    role: "Product Manager", 
    content: "Their MVP development process is incredibly efficient. We went from idea to app store in 6 weeks with a professional, scalable product.",
    rating: 5,
    avatar: "PS"
  },
  {
    name: "Amit Patel",
    company: "StartupHub",
    role: "Co-Founder",
    content: "The team understood our vision perfectly. Our MVP validated our business model and attracted our first 1000 users within a month.",
    rating: 5,
    avatar: "AP"
  }
]

const deliverables = [
  {
    icon: Code,
    title: "Source Code",
    description: "A complete repository with the source code transferred to your account with full ownership rights."
  },
  {
    icon: Play,
    title: "Clickable Prototype",
    description: "Figma prototype with configured screen links and animations for user testing and stakeholder approval."
  },
  {
    icon: Smartphone,
    title: "Builds for Publishing",
    description: "Ready-to-be-published app builds for App Store and Google Play with all store requirements met."
  },
  {
    icon: FileText,
    title: "Requirement Specification",
    description: "Comprehensive documentation of all requirements and functionality of your MVP application."
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "User-centered, clean, and intuitive interface designs for web and mobile applications in Figma."
  },
  {
    icon: ImageIcon,
    title: "Graphics Materials",
    description: "Mobile app icons, screenshots, and responsive graphics compliant with app stores' guidelines."
  },
  {
    icon: BookOpen,
    title: "Technical Documentation",
    description: "Detailed documentation describing the architecture, modules, and components of your application."
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    description: "All assets created during MVP development belong to you with complete ownership and rights."
  }
]

const technologies = [
  { name: "Flutter", icon: Smartphone, description: "Cross-platform mobile development" },
  { name: "FastAPI", icon: Code, description: "High-performance Python backend" },
  { name: "Firebase", icon: Cloud, description: "Backend-as-a-Service platform" },
  { name: "PostgreSQL", icon: Database, description: "Reliable database solution" },
  { name: "MongoDB", icon: Database, description: "Flexible NoSQL database" },
  { name: "Redis", icon: Zap, description: "High-speed caching layer" }
]

export default function MVPDevelopmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "mvp",
    idea: "",
    budget: "",
    timeline: ""
  })

  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
          formType: 'mvp_consultation',
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
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            projectType: "mvp",
            idea: "",
            budget: "",
            timeline: ""
          })
          setUploadedFile(null)
        }, 3000)
      } else {
        console.error('Form submission error:', result.error)
        alert('Failed to submit form. Please try again.')
      }
    } catch (error) {
      console.error('Network error:', error)
      alert('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-0 h-full"
          )}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
            >
              <span className="text-sm font-medium text-primary">MVP DEVELOPMENT SPECIALISTS</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            >
              MVP App Development
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Get the minimum viable version of your product up and running with Bansohi — fast, on budget, and with the features you really need.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-muted/20 border border-border/50 rounded-2xl p-6 max-w-4xl mx-auto mb-8"
            >
              <p className="text-lg text-foreground font-medium mb-2">
                Over 70% of app projects fail, but yours doesn't have to.
              </p>
              <p className="text-muted-foreground">
                Tap into our MVP development services to de-risk your project, test core assumptions, and establish a working definition of what product and market fit would look like.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center mb-12"
            >
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/70 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <Button 
                  size="lg" 
                  className="relative h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free MVP Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                <span>50+ MVPs Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                <span>40-45 Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                <span>99% Client Satisfaction</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Innovative Startups
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've helped these companies launch their MVPs and scale their businesses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16"
          >
            {/* ShagunPe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="w-24 h-24 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Image
                    src={projects.shagunpe.logo}
                    alt="ShagunPe Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center mb-2 group-hover:text-primary transition-colors">ShagunPe</h3>
                <p className="text-sm text-muted-foreground text-center">Payment Processing App</p>
              </div>
            </motion.div>

            {/* Workerlly */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="w-24 h-24 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Image
                    src={projects.workerlly.logo}
                    alt="Workerlly Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center mb-2 group-hover:text-primary transition-colors">Workerlly</h3>
                <p className="text-sm text-muted-foreground text-center">Workforce Management SaaS</p>
              </div>
            </motion.div>

            {/* Nearmind */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="w-24 h-24 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Image
                    src={projects.nearmind.logo}
                    alt="Nearmind Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center mb-2 group-hover:text-primary transition-colors">Nearmind</h3>
                <p className="text-sm text-muted-foreground text-center">Social Networking App</p>
              </div>
            </motion.div>
          </motion.div>

          {/* More Details Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/works">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-8 text-base font-semibold border-border text-foreground hover:bg-accent bg-background/50 backdrop-blur-sm"
              >
                More Details About These Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose MVP Development?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Launch faster, spend less, and validate your idea before investing in full-scale development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Proven MVP Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From idea to app store in 40-45 days with our streamlined development process.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-1">
                    <div className="group h-full">
                      <div className="h-full bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-3 p-10 relative">
                        {/* Premium gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
                        </div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl shadow-primary/10 border border-white/20">
                              <span className={`font-bold text-foreground tracking-tight ${step.step === "03" ? "text-xl" : "text-2xl"}`}>{step.step}</span>
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 mb-3">
                                {step.title}
                              </h3>
                              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                                <Clock className="w-5 h-5 text-primary" />
                                <span className="text-base font-semibold text-primary">{step.duration}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                            {step.description}
                          </p>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                Key Deliverables
                              </h4>
                              <div className="grid grid-cols-1 gap-3">
                                {step.deliverables.slice(0, 3).map((deliverable, deliverableIndex) => (
                                  <div key={deliverableIndex} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0"></div>
                                    <span className="text-muted-foreground font-medium">{deliverable}</span>
                                  </div>
                                ))}
                                {step.deliverables.length > 3 && (
                                  <div className="text-sm text-muted-foreground/70 italic">
                                    +{step.deliverables.length - 3} more deliverables
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex-shrink-0 shadow-lg border-4 border-background"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MVP Deliverables Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our MVP Deliverables
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All assets created by our team belong to you and only you. Complete ownership and intellectual property rights included.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={deliverable.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <deliverable.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {deliverable.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {deliverable.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Modern Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We use cutting-edge technologies to build fast, scalable, and maintainable MVPs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <tech.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what entrepreneurs and startups say about our MVP development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Questions You Might Have
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about MVP development and our process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Is outsourcing MVP development a good decision for startups?",
                answer: "Outsourcing MVP development allows companies to reduce the cost of development, accelerate delivery thanks to fast hiring and onboarding, and get access to rare or niche expertise. Outsourcing also allows startups to scale their development team based on project requirements and evolving needs."
              },
              {
                question: "How much does MVP app development cost?",
                answer: "The average cost of MVP software development services depends on a wide range of factors, including application complexity, a set of core features, the number of platforms, integrations, and other aspects. Our packages start from ₹2,50,000 for a Starter MVP to ₹7,50,000 for an Enterprise MVP. Contact us to get a detailed estimation for your project."
              },
              {
                question: "How long does it take to develop an MVP application?",
                answer: "Timing can vary based on the product you're aiming to build. Our typical timeline ranges from 4-8 weeks for most MVPs. We perform comprehensive groundwork, including concept ideation, competitor analysis, and audience research, to build a high-quality version of your product that lays the ground for a successful full-fledged product."
              },
              {
                question: "When is it the right time to build an MVP?",
                answer: "Whenever you have a solid product vision and a clear understanding of your target audience and their needs. MVP development is the right strategy when you want to attract investors or partners and when you need to test your assumptions about the market, user behavior, and product-market fit."
              },
              {
                question: "What makes Bansohi the best MVP development company?",
                answer: "We are a reliable tech partner with firsthand experience in developing MVPs for various domains. Our experienced team has delivered 50+ successful projects with 99% client satisfaction. We adopt a product-focused approach to ensure your solution's market success, demonstrate flexibility to adjust to evolving business needs, and provide complete ownership of all deliverables."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation-form" className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Launch Your MVP?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a free consultation and detailed project estimate. Let's turn your idea into a market-ready MVP.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your request and will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                      <label htmlFor="idea" className="block text-sm font-medium text-foreground mb-2">
                        Project Description *
                      </label>
                      <textarea
                        id="idea"
                        name="idea"
                        required
                        rows={4}
                        value={formData.idea}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell us about your MVP idea, key features, target audience, and any specific requirements..."
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
                            <UploadIcon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
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
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        'Get Free MVP Consultation'
                      )}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
