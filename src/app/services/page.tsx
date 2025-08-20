"use client";

import { motion } from "framer-motion";
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
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";


const services = [
  {
    icon: Globe,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps with intuitive UX, robust backend integration, and scalable architecture for iOS and Android.",
    features: [
      "Native iOS & Android Development",
      "Cross-platform (React Native, Flutter)",
      "UI/UX Design & Prototyping",
      "App Store Optimization (ASO)",
      "Push Notifications & Analytics",
      "Offline Functionality & Sync"
    ],
    benefits: [
      "Faster time to market",
      "Cross-platform compatibility",
      "Scalable architecture",
      "Enhanced user experience"
    ]
  },
  {
    icon: Database,
    title: "MVP Development",
    description: "Rapid MVP creation to validate ideas, test market fit, and secure funding—built with scalability in mind from day one.",
    features: [
      "Rapid Prototyping",
      "Core Feature Development",
      "User Testing & Feedback",
      "Market Validation",
      "Investor-Ready Demo",
      "Scalable Foundation"
    ],
    benefits: [
      "Validate ideas quickly",
      "Reduce development costs",
      "Attract investors",
      "Test market demand"
    ]
  },
  {
    icon: Brain,
    title: "Backend Development",
    description: "High-performance APIs, databases, and server infrastructure that power your apps with security, scalability, and reliability.",
    features: [
      "RESTful & GraphQL APIs",
      "Database Design & Optimization",
      "Cloud Infrastructure (AWS, Azure, GCP)",
      "Authentication & Authorization",
      "Real-time Data Processing",
      "Security & Compliance"
    ],
    benefits: [
      "High performance & reliability",
      "Scalable architecture",
      "Secure data handling",
      "Cost-effective infrastructure"
    ]
  },
  {
    icon: Shield,
    title: "SaaS Platform Development",
    description: "Complete SaaS solutions with user management, billing systems, analytics dashboards, and multi-tenant architecture.",
    features: [
      "Multi-tenant Architecture",
      "User Management & Roles",
      "Subscription & Billing Systems",
      "Analytics & Reporting",
      "API Integration",
      "White-label Solutions"
    ],
    benefits: [
      "Recurring revenue model",
      "Scalable business growth",
      "Automated operations",
      "Multiple revenue streams"
    ]
  },
  {
    icon: Search,
    title: "SEO & ASO Optimization",
    description: "Technical SEO for web apps and App Store Optimization for mobile apps—driving organic growth and user acquisition.",
    features: [
      "Technical SEO Audit",
      "Keyword Research & Strategy",
      "App Store Optimization",
      "Content Optimization",
      "Performance Optimization",
      "Analytics & Reporting"
    ],
    benefits: [
      "Increased organic traffic",
      "Higher app store rankings",
      "Better user acquisition",
      "Long-term growth strategy"
    ]
  },
  {
    icon: Zap,
    title: "App Maintenance & Support",
    description: "Ongoing maintenance, updates, bug fixes, and 24/7 support to keep your apps running smoothly and securely.",
    features: [
      "24/7 Monitoring & Support",
      "Regular Updates & Patches",
      "Bug Fixes & Optimization",
      "Security Updates",
      "Performance Monitoring",
      "Backup & Recovery"
    ],
    benefits: [
      "Reduced downtime",
      "Enhanced security",
      "Improved performance",
      "Peace of mind"
    ]
  }
];

const stats = [
  { icon: Users, label: "Happy Clients", value: "50+" },
  { icon: Code, label: "Projects Delivered", value: "100+" },
  { icon: Smartphone, label: "Apps Developed", value: "75+" },
  { icon: Rocket, label: "MVPs Launched", value: "25+" }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Full-Stack App Development & 
                <span className="gradient-text"> Growth Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From concept to launch, we provide comprehensive app development services that scale from MVP to enterprise. 
                Our expertise covers mobile apps, backend systems, SaaS platforms, and growth marketing with proven SEO and ASO strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation">
                  <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold border-border text-foreground hover:bg-accent">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer end-to-end solutions for every stage of your app development journey, 
                from initial concept to ongoing maintenance and growth marketing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="dark-card-bg p-8 h-full card-hover">
                    <div className="icon-consistent w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-primary" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden w-full dark-card-bg max-w-screen-lg mx-auto rounded-2xl py-8 md:py-16 px-6 md:px-14">
            <AnimatedGridPattern numSquares={30} maxOpacity={0.1} duration={3} className={cn("[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]", "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12")} />
            <AnimatedGridPattern numSquares={30} maxOpacity={0.1} duration={3} className={cn("[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]", "inset-x-0 inset-y-0 h-[200%] skew-y-12")} />
            <div className="relative z-0 flex flex-col gap-3">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground text-center">
                Ready to Build Something Amazing?
              </h3>
              <p className="mt-3 md:mt-2 text-sm md:text-base lg:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                Let&apos;s discuss your project requirements and create a custom solution that perfectly fits your business needs.
              </p>
            </div>
            <div className="relative z-0 mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="group relative">
                <div className="absolute -inset-1 brand-gradient rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <Link href="/consultation">
                  <Button size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Free Consultation <ArrowRight className="!h-5 !w-5" />
                  </Button>
                </Link>
              </div>
              <Link href="/work">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
                  View Case Studies <ArrowRight className="!h-5 !w-5" />
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
