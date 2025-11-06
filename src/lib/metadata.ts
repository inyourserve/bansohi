import { Metadata } from "next";

// Base metadata configuration
const baseMetadata: Metadata = {
  metadataBase: new URL('https://bansohi.com'),
  robots: {
    index: true,
    follow: true,
  },
};

// Homepage metadata
export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: 'Mobile App Development & MVP Company | Bansohi Technology',
  description: 'We build mobile apps, MVPs, and SaaS platforms with robust backend development and SEO/ASO optimization. Book a free consultation.',
  keywords: 'mobile app development, MVP development, backend development, SaaS platforms, SEO optimization, ASO, app store optimization, React Native, Node.js',
  openGraph: {
    title: 'Mobile App Development & MVP Company | Bansohi Technology',
    description: 'We build mobile apps, MVPs, and SaaS platforms with robust backend development and SEO/ASO optimization. Book a free consultation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development & MVP Company | Bansohi Technology',
    description: 'We build mobile apps, MVPs, and SaaS platforms with robust backend development and SEO/ASO optimization. Book a free consultation.',
  },
};

// Services page metadata
export const servicesMetadata: Metadata = {
  ...baseMetadata,
  title: 'App Development Services | Mobile Apps, MVP, Backend & SaaS | Bansohi Technology',
  description: 'Comprehensive app development services including mobile apps, MVP development, backend systems, SaaS platforms, and SEO/ASO optimization. Get end-to-end solutions.',
  keywords: 'app development services, mobile app development, MVP development, backend development, SaaS platforms, SEO optimization, ASO, app store optimization',
  openGraph: {
    title: 'App Development Services | Mobile Apps, MVP, Backend & SaaS | Bansohi Technology',
    description: 'Comprehensive app development services including mobile apps, MVP development, backend systems, SaaS platforms, and SEO/ASO optimization.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Development Services | Mobile Apps, MVP, Backend & SaaS | Bansohi Technology',
    description: 'Comprehensive app development services including mobile apps, MVP development, backend systems, SaaS platforms, and SEO/ASO optimization.',
  },
};

// About page metadata
export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: 'About Bansohi Technology | App Development Company | MVP to Enterprise',
  description: 'Bansohi Technology is your end-to-end app development partner specializing in MVP development, backend systems, SaaS platforms, and growth marketing with SEO/ASO.',
  keywords: 'about Bansohi Technology, app development company, MVP development, backend development, SaaS platforms, growth marketing',
  openGraph: {
    title: 'About Bansohi Technology | App Development Company | MVP to Enterprise',
    description: 'Bansohi Technology is your end-to-end app development partner specializing in MVP development, backend systems, SaaS platforms, and growth marketing.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Bansohi Technology | App Development Company | MVP to Enterprise',
    description: 'Bansohi Technology is your end-to-end app development partner specializing in MVP development, backend systems, SaaS platforms, and growth marketing.',
  },
};

// Contact page metadata
export const contactMetadata: Metadata = {
  ...baseMetadata,
  title: 'Contact Bansohi Technology | App Development Consultation | Get Free Quote',
  description: 'Contact Bansohi Technology for app development consultation. Get a free quote for mobile apps, MVP development, backend systems, and SaaS platforms. Reply within 24 hours.',
  keywords: 'contact Bansohi Technology, app development consultation, free quote, mobile app development, MVP development, backend development',
  openGraph: {
    title: 'Contact Bansohi Technology | App Development Consultation | Get Free Quote',
    description: 'Contact Bansohi Technology for app development consultation. Get a free quote for mobile apps, MVP development, backend systems, and SaaS platforms.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Bansohi Technology | App Development Consultation | Get Free Quote',
    description: 'Contact Bansohi Technology for app development consultation. Get a free quote for mobile apps, MVP development, backend systems, and SaaS platforms.',
  },
};

// Work page metadata
export const workMetadata: Metadata = {
  ...baseMetadata,
  title: 'Case Studies & Portfolio | App Development Projects | Bansohi Technology',
  description: 'Explore our portfolio of successful app development projects including mobile apps, MVPs, and SaaS platforms. See real results from our work with startups and enterprises.',
  keywords: 'case studies, portfolio, app development projects, mobile apps, MVP projects, SaaS platforms, Bansohi Technology work',
  openGraph: {
    title: 'Case Studies & Portfolio | App Development Projects | Bansohi Technology',
    description: 'Explore our portfolio of successful app development projects including mobile apps, MVPs, and SaaS platforms.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Portfolio | App Development Projects | Bansohi Technology',
    description: 'Explore our portfolio of successful app development projects including mobile apps, MVPs, and SaaS platforms.',
  },
};

// Consultation page metadata
export const consultationMetadata: Metadata = {
  ...baseMetadata,
  title: 'Free App Development Consultation | Get Project Quote | Bansohi Technology',
  description: 'Get a free app development consultation and project quote. We provide detailed roadmap, timeline, and budget estimate for mobile apps, MVPs, and SaaS platforms. No commitment required.',
  keywords: 'free consultation, app development quote, project estimate, mobile app development, MVP development, SaaS development',
  openGraph: {
    title: 'Free App Development Consultation | Get Project Quote | Bansohi Technology',
    description: 'Get a free app development consultation and project quote. We provide detailed roadmap, timeline, and budget estimate.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free App Development Consultation | Get Project Quote | Bansohi Technology',
    description: 'Get a free app development consultation and project quote. We provide detailed roadmap, timeline, and budget estimate.',
  },
};

// Privacy Policy page metadata
export const privacyMetadata: Metadata = {
  ...baseMetadata,
  title: 'Privacy Policy | Bansohi Technology',
  description: 'Read our privacy policy to understand how Bansohi Technology collects, uses, and protects your personal information when you use our services.',
  keywords: 'privacy policy, data protection, personal information, Bansohi Technology privacy',
  openGraph: {
    title: 'Privacy Policy | Bansohi Technology',
    description: 'Read our privacy policy to understand how Bansohi Technology collects, uses, and protects your personal information.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Bansohi Technology',
    description: 'Read our privacy policy to understand how Bansohi Technology collects, uses, and protects your personal information.',
  },
};

// Terms and Conditions page metadata
export const termsMetadata: Metadata = {
  ...baseMetadata,
  title: 'Terms and Conditions | Bansohi Technology',
  description: 'Read our terms and conditions to understand the legal agreement between you and Bansohi Technology when using our services.',
  keywords: 'terms and conditions, terms of service, legal agreement, Bansohi Technology terms',
  openGraph: {
    title: 'Terms and Conditions | Bansohi Technology',
    description: 'Read our terms and conditions to understand the legal agreement between you and Bansohi Technology.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | Bansohi Technology',
    description: 'Read our terms and conditions to understand the legal agreement between you and Bansohi Technology.',
  },
};

// Cancellation and Refund page metadata
export const cancellationRefundMetadata: Metadata = {
  ...baseMetadata,
  title: 'Cancellation and Refund Policy | Bansohi Technology',
  description: 'Learn about our cancellation and refund policy for app development services, MVP projects, and other services offered by Bansohi Technology.',
  keywords: 'cancellation policy, refund policy, cancellation and refund, Bansohi Technology refund',
  openGraph: {
    title: 'Cancellation and Refund Policy | Bansohi Technology',
    description: 'Learn about our cancellation and refund policy for app development services and projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancellation and Refund Policy | Bansohi Technology',
    description: 'Learn about our cancellation and refund policy for app development services and projects.',
  },
};

// Shipping and Delivery page metadata
export const shippingDeliveryMetadata: Metadata = {
  ...baseMetadata,
  title: 'Shipping and Delivery Policy | Bansohi Technology',
  description: 'Understand our shipping and delivery policy for digital products, app deliverables, and project milestones from Bansohi Technology.',
  keywords: 'shipping policy, delivery policy, shipping and delivery, Bansohi Technology delivery',
  openGraph: {
    title: 'Shipping and Delivery Policy | Bansohi Technology',
    description: 'Understand our shipping and delivery policy for digital products and app deliverables.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shipping and Delivery Policy | Bansohi Technology',
    description: 'Understand our shipping and delivery policy for digital products and app deliverables.',
  },
};
