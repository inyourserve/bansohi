"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Globe, 
  Database, 
  Brain, 
  Shield, 
  Search, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Users,
  Code,
  Smartphone,
  Rocket,
  Target,
  BarChart3,
  Lightbulb,
  Palette,
  Wrench,
  TrendingUp,
  Heart,
  CreditCard,
  Cpu,
  Star,
  Clock,
  Award,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Briefcase,
  Gamepad2
} from "lucide-react";
import Link from "next/link";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";


// Core Services for Mobile App Development Agency
const coreServices = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android apps built with Flutter, React Native, and native technologies. We create high-performance, scalable mobile applications that deliver exceptional user experiences.",
    features: [
      "Cross-platform Flutter & React Native",
      "Native iOS (Swift) & Android (Kotlin)",
      "App Store & Play Store deployment",
      "Performance optimization",
      "Offline functionality",
      "Push notifications & analytics"
    ],
    timeline: "8-16 weeks",
    price: "Starting from $15,000"
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Launch your app idea in 40-45 days with our proven MVP development process. Validate your concept, attract early users, and secure funding with a market-ready minimum viable product.",
    features: [
      "Rapid prototyping & validation",
      "Core feature development",
      "User testing & feedback",
      "Market-ready deployment",
      "Investor presentation materials",
      "Post-launch support"
    ],
    timeline: "40-45 days",
    price: "Starting from $8,000"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable, secure backend systems built with FastAPI, Python, and modern databases. We create robust APIs, authentication systems, and cloud infrastructure that power your mobile apps.",
    features: [
      "FastAPI & Python development",
      "RESTful & GraphQL APIs",
      "Authentication & authorization",
      "Database design & optimization",
      "Cloud deployment (AWS, GCP)",
      "Real-time data processing"
    ],
    timeline: "4-12 weeks",
    price: "Starting from $10,000"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive mobile app designs that users love. Our design team creates pixel-perfect interfaces, user flows, and design systems that drive engagement and conversions.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Design system creation",
      "Usability testing",
      "App store assets"
    ],
    timeline: "2-6 weeks",
    price: "Starting from $5,000"
  },
  {
    icon: Shield,
    title: "App Maintenance & Support",
    description: "Keep your app running smoothly with our comprehensive maintenance and support services. We handle updates, bug fixes, performance monitoring, and feature enhancements.",
    features: [
      "24/7 monitoring & support",
      "Regular updates & patches",
      "Bug fixes & optimization",
      "Security updates",
      "Performance monitoring",
      "Feature enhancements"
    ],
    timeline: "Ongoing",
    price: "Starting from $2,000/month"
  },
  {
    icon: TrendingUp,
    title: "App Store Optimization",
    description: "Maximize your app's visibility and downloads with our ASO services. We optimize your app store listings, keywords, and conversion rates to drive organic growth.",
    features: [
      "Keyword research & optimization",
      "App store listing optimization",
      "Screenshot & video creation",
      "Review management",
      "Conversion rate optimization",
      "Performance tracking"
    ],
    timeline: "2-4 weeks",
    price: "Starting from $3,000"
  }
];

// Why Choose Us
const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "50+ successful mobile apps delivered with 99% client satisfaction rate. Our apps have been downloaded over 1M+ times across app stores."
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "MVP in 40-45 days, full apps in 8-16 weeks. We use agile methodologies and proven development processes to deliver on time, every time."
  },
  {
    icon: Code,
    title: "Modern Tech Stack",
    description: "Flutter, React Native, FastAPI, Python, PostgreSQL, MongoDB. We use cutting-edge technologies to build scalable, maintainable applications."
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Full-stack developers, UI/UX designers, and project managers working exclusively on your project. No freelancers, no outsourcing to third parties."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Comprehensive testing, code reviews, and quality processes ensure your app is bug-free and performs flawlessly across all devices."
  },
  {
    icon: Zap,
    title: "Post-Launch Support",
    description: "Ongoing maintenance, updates, and feature enhancements. We're your long-term technology partner, not just a development vendor."
  }
];

// Development Process
const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, conduct market research, and create a detailed project roadmap with timelines and milestones.",
    duration: "1-2 weeks",
    deliverables: ["Project roadmap", "Technical architecture", "UI/UX wireframes", "Cost estimation"]
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Our design team creates beautiful, user-friendly interfaces and interactive prototypes for your approval.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX designs", "Interactive prototypes", "Design system", "App store assets"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your app using modern technologies, with continuous testing and quality assurance throughout the development process.",
    duration: "6-12 weeks",
    deliverables: ["Fully functional app", "Backend APIs", "Admin panel", "Testing reports"]
  },
  {
    step: "04",
    title: "Launch & Deployment",
    description: "We handle app store submissions, deployment, and go-live activities to ensure a smooth launch experience.",
    duration: "1-2 weeks",
    deliverables: ["App store listings", "Deployed application", "Launch support", "Analytics setup"]
  },
  {
    step: "05",
    title: "Support & Growth",
    description: "Ongoing maintenance, updates, and feature enhancements to keep your app competitive and growing.",
    duration: "Ongoing",
    deliverables: ["Bug fixes", "Feature updates", "Performance monitoring", "Growth optimization"]
  }
];

// Industries We Serve
const industries = [
  {
    icon: CreditCard,
    title: "Fintech",
    description: "Secure payment apps, digital banking solutions, and financial management platforms with enterprise-grade security.",
    apps: ["Payment Processing", "Digital Banking", "Investment Apps", "Cryptocurrency"]
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant telemedicine platforms, patient management systems, and health monitoring applications.",
    apps: ["Telemedicine", "Patient Management", "Health Tracking", "Medical Records"]
  },
  {
    icon: Users,
    title: "Social & Networking",
    description: "Social media platforms, networking apps, and community-driven applications with real-time features.",
    apps: ["Social Media", "Professional Networking", "Dating Apps", "Community Platforms"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Mobile shopping apps, marketplace platforms, and retail solutions with seamless payment integration.",
    apps: ["Online Shopping", "Marketplace", "Retail Apps", "Food Delivery"]
  },
  {
    icon: Briefcase,
    title: "Business & Productivity",
    description: "Enterprise apps, productivity tools, and business management solutions for modern workplaces.",
    apps: ["CRM Systems", "Project Management", "Team Collaboration", "Business Analytics"]
  },
  {
    icon: Gamepad2,
    title: "Gaming & Entertainment",
    description: "Mobile games, entertainment apps, and interactive media applications with engaging user experiences.",
    apps: ["Mobile Games", "Streaming Apps", "Entertainment", "AR/VR Applications"]
  }
];


// Tech Stack
const techStack = {
  mobile: ["Flutter", "React Native", "Swift", "Kotlin", "Dart", "JavaScript"],
  backend: ["FastAPI", "Python", "Node.js", "PostgreSQL", "MongoDB", "Redis"],
  cloud: ["AWS", "Google Cloud", "Firebase", "Docker", "Kubernetes"],
  tools: ["Git", "Figma", "Jira", "Slack", "VS Code", "Xcode"]
};


// Tech Stack Component
function TechStackSection() {
  const [activeTab, setActiveTab] = useState("mobile");

  const techCategories = [
    { 
      id: "mobile", 
      label: "Mobile", 
      technologies: [
        { name: "Flutter", icon: "🦋" },
        { name: "React Native", icon: "⚛️" },
        { name: "Swift", icon: "🍎" },
        { name: "Kotlin", icon: "🟣" },
        { name: "Dart", icon: "🎯" },
        { name: "JavaScript", icon: "🟨" }
      ]
    },
    { 
      id: "frontend", 
      label: "Frontend", 
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Vue.js", icon: "💚" },
        { name: "Angular", icon: "🅰️" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Tailwind CSS", icon: "🎨" }
      ]
    },
    { 
      id: "backend", 
      label: "Backend", 
      technologies: [
        { name: "FastAPI", icon: "⚡" },
        { name: "Python", icon: "🐍" },
        { name: "Node.js", icon: "🟢" },
        { name: "Nest.js", icon: "🪺" },
        { name: "Express.js", icon: "🚀" },
        { name: "Django", icon: "🎸" }
      ]
    },
    { 
      id: "databases", 
      label: "Databases", 
      technologies: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "MySQL", icon: "🐬" },
        { name: "Firebase", icon: "🔥" },
        { name: "Supabase", icon: "⚡" }
      ]
    }
  ];

  const activeCategory = techCategories.find(cat => cat.id === activeTab) || techCategories[0];

  return (
    <div className="bg-background/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Category Tabs */}
        <div className="lg:col-span-1">
          <div className="space-y-2">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
                onClick={() => setActiveTab(category.id)}
              >
                <div className={`p-4 rounded-lg transition-colors duration-300 ${
                  activeTab === category.id 
                    ? 'bg-primary/20 border border-primary/30' 
                    : 'hover:bg-primary/10'
                }`}>
                  <h3 className={`text-lg font-semibold transition-colors ${
                    activeTab === category.id 
                      ? 'text-primary' 
                      : 'text-foreground group-hover:text-primary'
                  }`}>
                    {category.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Cards */}
        <div className="lg:col-span-3">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {activeCategory.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section - Following Homepage Design */}
        <section className="pt-20 pb-20 dark-gradient-bg flex items-center justify-center px-4 relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-background/40" />
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Simple Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 md:px-4 py-2 dark-card-bg rounded-full mb-6 md:mb-8"
            >
              <span className="text-xs md:text-sm font-medium text-muted-foreground text-center">India's Top Mobile App Development Agency</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 px-2">
                Your Mobile App launched. <br className="hidden sm:block" />
                <span className="gradient-text">On point, on budget, on time</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                From MVP to enterprise-scale applications, we deliver end-to-end mobile app development with backend systems, SEO, and ASO optimization.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <div className="group relative">
                <div className="absolute -inset-1 brand-gradient rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <Link href="/consultation">
                  <Button 
                    size="lg" 
                    className="relative h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Start Your App Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <Link href="/services/mvp-development">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 text-lg font-semibold border-border text-foreground hover:bg-accent dark-card-bg"
                >
                  MVP Development
                </Button>
              </Link>
            </motion.div>

            {/* Simple Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-border"
            >
              {[
                { number: "50+", label: "Apps Delivered" },
                { number: "99%", label: "Client Satisfaction" },
                { number: "5+", label: "Years Shipping Production Software" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* Core Services - Following Homepage Design */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 dark-card-bg rounded-full mb-6">
                <span className="text-sm font-medium text-muted-foreground">What we offer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                We offer full-cycle software development services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ideate, build, grow, scale — we're here every step of the way, fast-tracking your journey to the top.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="group h-full"
                >
                  <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-4 md:p-6 relative">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 icon-consistent rounded-lg flex items-center justify-center mb-6">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      
                      <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Pricing & Timeline */}
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex justify-between items-center text-sm">
                      <div>
                            <div className="text-muted-foreground">Timeline</div>
                            <div className="font-semibold text-foreground">{service.timeline}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-muted-foreground">Starting from</div>
                            <div className="font-bold text-primary">{service.price}</div>
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

        {/* 3 Steps Process - Visual Timeline */}
        <section className="py-20 bg-muted/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 dark-card-bg rounded-full mb-6">
                <span className="text-sm font-medium text-muted-foreground">3 Steps</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                This is how we work
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
              
              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    title: "Test your business idea",
                    description: "Validate your idea's feasibility to reduce development costs, avoid flops, and build a data-backed digital product. We pay special attention to market research and concept analysis to lay a solid foundation for your software development project.",
                    services: ["Product Discovery", "UX/UI Design", "MVP App Development"],
                    image: "👨‍💼"
                  },
                  {
                    step: "02", 
                    title: "Build your digital product",
                    description: "Transform your idea into a software product that attracts early users and moves your company closer toward product market fit. We finish your product development on time and on budget, so you don't have to worry.",
                    services: ["Mobile App Development", "Web App Development", "Quality Assurance"],
                    image: "👨‍💻"
                  },
                  {
                    step: "03",
                    title: "Grow your product",
                    description: "We help you take your product to the next level by providing the skills you need to rapidly expand the team and accelerate growth. Win larger markets and capture more customers — we will be here, adjusting your product to the growing user base.",
                    services: ["Product Management", "Team Extension", "Technology Consulting"],
                    image: "👥"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                    
                    <div className={`md:ml-20 ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-20'}`}>
                      <div className="bg-background/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <span className="text-lg font-bold text-primary">{step.step}</span>
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                {step.title}
                              </h3>
                            </div>
                            
                            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                              {step.description}
                            </p>
                            
                            <div className="space-y-2">
                              {step.services.map((service, serviceIndex) => (
                                <div key={serviceIndex} className="flex items-center gap-2 text-muted-foreground">
                                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span className="text-sm">{service}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Visual Element */}
                          <div className="lg:w-48 flex-shrink-0">
                            <div className="w-full h-48 bg-primary/10 rounded-2xl flex items-center justify-center text-6xl">
                              {step.image}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Tech Stack - Interactive Side Tabbed Design */}
        <section className="py-20 bg-muted/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 dark-card-bg rounded-full mb-6">
                <span className="text-sm font-medium text-muted-foreground">Tech Stack</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tech stack that stacks up
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We are well-versed in most programming languages, tools, and frameworks.
              </p>
            </motion.div>

            <TechStackSection />
          </div>
        </section>

        {/* CTA Banner - India's Top App Development Agency */}
        <section className="py-20 bg-background">
          <div className="px-4 md:px-6">
            <div className="relative overflow-hidden my-12 md:my-20 w-full dark-card-bg max-w-screen-lg mx-auto rounded-2xl py-8 md:py-16 px-6 md:px-14">
              <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                className={cn(
                  "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
                  "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
              />
              <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                className={cn(
                  "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
                  "inset-x-0 inset-y-0 h-[200%] skew-y-12"
                )}
              />
            <div className="relative z-0 flex flex-col gap-3">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground text-center">
                  India's Top App Development Agency
              </h3>
              <p className="mt-3 md:mt-2 text-sm md:text-base lg:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                  Join 50+ successful startups and enterprises who chose Bansohi for their mobile app development needs
              </p>
            </div>
            <div className="relative z-0 mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="group relative">
                <div className="absolute -inset-1 brand-gradient rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <Link href="/consultation">
                  <Button size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
                      Book a Free Consultation <ArrowRight className="!h-5 !w-5" />
                  </Button>
                </Link>
              </div>
              <Link href="/works">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
                    See Our Work <ArrowRight className="!h-5 !w-5" />
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
