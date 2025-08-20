"use client"

import React from "react"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-6 gap-8 md:gap-12">
          {/* Company Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <Globe className="w-6 h-6 text-foreground" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Bansohi Technology</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">
              Specialized in app development, MVP creation, backend systems, and growth marketing (SEO/ASO).
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">SERVICES</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Mobile App Development</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">MVP Development</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Backend Development</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">SaaS Platforms</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">COMPANY</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About Us</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Case Studies</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Testimonials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">RESOURCES</h4>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">LEGAL</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Bansohi Technology Private Limited. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            CIN: U62013BR2024PTC071453 | Registered Office: C/o Manju Devi Vill, Bansohi, Panchdurgauli, Saran, Chapra, Bihar - 841417
          </p>
        </div>
      </div>
    </footer>
  )
}