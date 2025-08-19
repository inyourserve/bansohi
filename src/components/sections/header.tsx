"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" }
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-1">
              <Globe className="w-6 h-6 text-foreground" />
              <div className="text-xl md:text-2xl font-bold text-foreground">
                Bansohi Technology
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-semibold text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <div className="group relative">
              <div className="absolute -inset-0.5 brand-gradient rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300" />
              <Button className="relative bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-2 rounded-xl">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col pt-4">
                <Button className="justify-start bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
