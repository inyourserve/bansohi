export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bansohi Technology Pvt Ltd",
    "alternateName": "Bansohi Technology",
    "url": "https://bansohi.com",
    "logo": "https://bansohi.com/logo.png",
    "description": "Specialized in app development, MVP creation, backend systems, and growth marketing (SEO/ASO). We build mobile apps, SaaS platforms, and scalable solutions that drive business growth.",
    "foundingDate": "2024-09-17",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C/o Manju Devi Vill, Bansohi, Panchdurgauli, Bansohi, Saran",
      "addressLocality": "Chapra",
      "addressRegion": "Bihar",
      "postalCode": "841417",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+916204349329",
      "contactType": "customer service",
      "email": "hello@bansohi.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://linkedin.com/company/bansohi",
      "https://twitter.com/bansohi",
      "https://github.com/bansohi"
    ],
    "taxID": "U62013BR2024PTC071453",
    "leiCode": "071453",
    "services": [
      "Mobile App Development",
      "MVP Development",
      "Backend Development", 
      "SaaS Platform Development",
      "SEO & ASO Optimization",
      "App Maintenance & Support"
    ]
  }
}

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bansohi Technology",
    "alternateName": "Bansohi",
    "url": "https://bansohi.com",
    "description": "Build apps that scale from MVP to enterprise. We specialize in mobile app development, MVP creation, and backend systems with proven SEO and ASO strategies.",
    "publisher": {
      "@type": "Organization",
      "name": "Bansohi Technology Pvt Ltd"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bansohi.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": faq.answer
      }
    }))
  }
}

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "App Development & Growth Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Bansohi Technology Pvt Ltd"
    },
    "areaServed": "IN",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "App Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile apps with intuitive UX and scalable architecture"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Rapid MVP creation to validate ideas and test market fit with scalability in mind"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backend Development",
            "description": "High-performance APIs, databases, and server infrastructure for scalable apps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS Platform Development",
            "description": "Complete SaaS solutions with user management, billing, and multi-tenant architecture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & ASO Optimization",
            "description": "Technical SEO for web apps and App Store Optimization for mobile apps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Maintenance & Support",
            "description": "Ongoing maintenance, updates, and 24/7 support for smooth app operations"
          }
        }
      ]
    }
  }
}
