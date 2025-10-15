"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Heart,
  CheckCircle,
  Star,
  TrendingUp,
  Code,
  Smartphone,
  Rocket
} from "lucide-react";
import Link from "next/link";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";


const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We stay ahead of technology trends and always explore cutting-edge solutions to deliver exceptional results."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We build long-term relationships with our clients, treating their success as our own and going above and beyond."
  },
  {
    icon: Zap,
    title: "Quality Excellence",
    description: "Every line of code, every design element, and every feature is crafted with precision and attention to detail."
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "We believe in open communication, clear timelines, and honest feedback throughout the development process."
  }
];

const achievements = [
  {
    icon: Users,
    title: "50+ Happy Clients",
    description: "Satisfied clients across various industries"
  },
  {
    icon: Code,
    title: "100+ Projects",
    description: "Successfully delivered projects"
  },
  {
    icon: Smartphone,
    title: "75+ Apps Developed",
    description: "Mobile and web applications"
  },
  {
    icon: Rocket,
    title: "25+ MVPs Launched",
    description: "Rapid prototypes and MVPs"
  }
];

const timeline = [
  {
    year: "2024",
    title: "Company Founded",
    description: "Bansohi Technology was established with a vision to democratize app development and help businesses scale digitally."
  },
  {
    year: "2024",
    title: "First Projects",
    description: "Successfully delivered our first mobile app and MVP projects, establishing our reputation for quality and reliability."
  },
  {
    year: "2024",
    title: "Team Expansion",
    description: "Grew our team of skilled developers, designers, and project managers to handle larger and more complex projects."
  },
  {
    year: "2025",
    title: "Future Vision",
    description: "Expanding our services to include AI-powered solutions and enterprise-grade applications."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  From MVP to Market Leader
                  <span className="gradient-text"> Your App Development Partner</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Bansohi Technology Pvt Ltd is your end-to-end app development partner. We excel at building MVPs that validate ideas, 
                  robust backend systems that scale, and SaaS platforms that drive growth. Our expertise spans mobile apps, 
                  web applications, backend development, and digital marketing strategies including SEO and ASO.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/consultation">
                    <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/works">
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold border-border text-foreground hover:bg-accent">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="dark-card-bg rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={achievement.title} className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <achievement.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-1">{achievement.title}</div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We&apos;re on a mission to democratize app development and help businesses of all sizes 
                leverage technology to achieve their goals and scale their operations with proven growth strategies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="dark-card-bg p-8 h-full">
                  <div className="icon-consistent w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-6">
                    To empower businesses with innovative, scalable, and user-centric mobile applications 
                    that drive growth, enhance user experience, and create lasting value in the digital marketplace.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Deliver high-quality, scalable solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Build long-term client partnerships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Stay ahead of technology trends</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="dark-card-bg p-8 h-full">
                  <div className="icon-consistent w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground mb-6">
                    To become the leading app development partner for businesses worldwide, known for innovation, 
                    reliability, and the ability to transform ideas into successful digital products.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Global recognition for quality and innovation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Expanding to serve clients worldwide</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Pioneering next-generation app solutions</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These values guide everything we do, from how we approach projects to how we interact with our clients and team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group h-full"
                >
                  <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-6 relative">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="icon-consistent w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From our founding to where we are today, here&apos;s the story of Bansohi Technology&apos;s growth and evolution.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={`${item.year}-${index}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="flex-1">
                      <Card className="dark-card-bg p-6">
                        <div className="text-sm text-primary font-semibold mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </Card>
                    </div>
                    <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex-shrink-0 shadow-lg border-4 border-background"></div>
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
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
                Ready to Work With Us?
              </h3>
              <p className="mt-3 md:mt-2 text-sm md:text-base lg:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                Let&apos;s discuss your project and see how we can help bring your vision to life with our expertise and dedication.
              </p>
            </div>
            <div className="relative z-0 mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="group relative">
                <div className="absolute -inset-1 brand-gradient rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <Link href="/consultation">
                  <Button size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
                    Start Your Project <ArrowRight className="!h-5 !w-5" />
                  </Button>
                </Link>
              </div>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
                  Explore Services <ArrowRight className="!h-5 !w-5" />
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
