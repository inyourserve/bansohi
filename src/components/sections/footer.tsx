"use client"

import React from "react"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-6 gap-8 md:gap-12">
          {/* Company Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <Globe className="w-6 h-6 text-foreground" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">BANSOHI TECHNOLOGY</h3>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              Specialized in app development, MVP creation, backend systems, and growth marketing (SEO/ASO).
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@bansohi.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Chapra, Bihar, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">SERVICES</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Mobile App Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">MVP Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Backend Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">SaaS Platforms</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">SEO & ASO</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">App Maintenance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">COMPANY</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About Us</Link></li>
              <li><Link href="/works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/#testimonials" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Testimonials</Link></li>
              <li><Link href="/consultation" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Get Consultation</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">RESOURCES</h4>
            <ul className="space-y-3">
              <li><Link href="/#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/consultation" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Free Consultation</Link></li>
              <li><Link href="/works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Our Work</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">LEGAL</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Legal</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com/company/bansohi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/bansohi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/bansohi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2025 Bansohi Technology Private Limited. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                CIN: U62013BR2024PTC071453 | Registered Office: C/o Manju Devi Vill, Bansohi, Panchdurgauli, Saran, Chapra, Bihar - 841417
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}