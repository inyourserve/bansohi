"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  Globe,
  Users,
  Building
} from "lucide-react";
import Link from "next/link";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";


const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message about your project",
    contact: "hello@bansohi.com",
    action: "Send Email",
    href: "mailto:hello@bansohi.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our development team",
    contact: "+91-98765-43210",
    action: "Call Now",
    href: "tel:+919876543210"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Quick chat for immediate assistance",
    contact: "+91-98765-43210",
    action: "Start Chat",
    href: "https://wa.me/919876543210"
  }
];

const officeInfo = [
  {
    icon: Building,
    title: "Registered Office",
    address: "C/o Manju Devi Vill, Bansohi, Panchdurgauli, Saran, Chapra, Bihar - 841417",
    details: "Our official registered address"
  },
  {
    icon: Globe,
    title: "Development Center",
    address: "Chapra, Bihar, India",
    details: "Where our development team works"
  },
  {
    icon: Users,
    title: "Team Availability",
    address: "Monday - Friday, 9:00 AM - 6:00 PM IST",
    details: "We're available during business hours"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use central form submission
      const response = await fetch('http://localhost:3001/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectName: 'bansohi',
          formType: 'contact',
          submissionData: formData
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            subject: "",
            message: ""
          });
        }, 3000);
      } else {
        // Handle error
        console.error('Form submission error:', result.error);
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Tell Us About Your
                <span className="gradient-text"> App Idea</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Ready to start your app development journey? We&apos;ll review your requirements and reply within 24 hours with a development roadmap. 
                No commitment required.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose your preferred way to reach us. We&apos;re here to help with any questions about your app development project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group h-full"
                >
                  <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-8 relative">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="icon-consistent w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <method.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{method.title}</h3>
                      <p className="text-muted-foreground mb-4">{method.description}</p>
                      <div className="text-lg font-semibold text-foreground mb-6">{method.contact}</div>
                      <Link href={method.href}>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:scale-105 transition-transform duration-300">
                          {method.action}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="dark-card-bg rounded-xl p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
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
                          <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
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
                          <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="What's this about?"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                          placeholder="Tell us about your project, requirements, or any questions you have..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full h-14 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Office Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Office Information</h2>
                    <p className="text-muted-foreground mb-8">
                      Learn more about our company and where you can find us. 
                      We&apos;re always happy to discuss your project requirements.
                    </p>
                  </div>

                  {officeInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group h-full"
                    >
                      <div className="h-full bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 p-6 relative">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10 flex items-start gap-4">
                          <div className="icon-consistent w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{info.title}</h3>
                            <p className="text-foreground mb-1">{info.address}</p>
                            <p className="text-sm text-muted-foreground">{info.details}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}


                </div>
              </motion.div>
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
                Ready to Start Your Project?
              </h3>
              <p className="mt-3 md:mt-2 text-sm md:text-base lg:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                Let&apos;s discuss your app development needs and create a custom solution that perfectly fits your business.
              </p>
            </div>
            <div className="relative z-0 mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="group relative">
                <div className="absolute -inset-1 brand-gradient rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <Link href="/consultation">
                  <Button size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Free Consultation <ArrowRight className="!h-5 !w-5" />
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
