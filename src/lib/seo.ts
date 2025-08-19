export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bansohi Technology Pvt Ltd",
    "alternateName": "Bansohi Technology",
    "url": "https://bansohi.com",
    "logo": "https://bansohi.com/logo.png",
    "description": "Leading technology company specializing in web development, SaaS solutions, AI automation, and SEO services. Transform your business with cutting-edge technology.",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "hello@bansohi.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://linkedin.com/company/bansohi",
      "https://twitter.com/bansohi",
      "https://github.com/bansohi"
    ],
    "services": [
      "Web Development",
      "SaaS Solutions", 
      "AI & Automation",
      "SEO & Digital Marketing",
      "Mobile Development",
      "Database Solutions"
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
    "description": "Transform your business with cutting-edge web development, SaaS platforms, and AI-powered solutions.",
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
    "serviceType": "Technology Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Bansohi Technology Pvt Ltd"
    },
    "areaServed": "IN",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web applications built with modern frameworks"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS Solutions",
            "description": "Scalable Software-as-a-Service platforms"
          }
        }
      ]
    }
  }
}
