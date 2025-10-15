// Assets index file for easy imports
// This file exports all your assets for easy importing throughout the app

// Logo exports
export const logos = {
  primary: '/assets/logos/logo-primary.svg',
  white: '/assets/logos/logo-white.svg',
  dark: '/assets/logos/logo-dark.svg',
  icon: '/assets/logos/logo-icon.svg',
  horizontal: '/assets/logos/logo-horizontal.svg',
  vertical: '/assets/logos/logo-vertical.svg',
  favicon: '/assets/logos/favicon.ico',
  appleTouchIcon: '/assets/logos/apple-touch-icon.png',
} as const;

// Project images
export const projects = {
  nearmind: {
    logo: '/assets/projects/nearmind/logo.png',
    hero: '/assets/projects/nearmind/logo.png',
    screenshots: '/assets/projects/nearmind/screenshots/',
    mockups: '/assets/projects/nearmind/mockups/',
  },
  shagunpe: {
    logo: '/assets/projects/shagunpe/logo.png',
    hero: '/assets/projects/shagunpe/logo.png',
    screenshots: '/assets/projects/shagunpe/screenshots/',
    mockups: '/assets/projects/shagunpe/mockups/',
  },
  workerlly: {
    logo: '/assets/projects/workerlly/logo.png',
    hero: '/assets/projects/workerlly/logo.png',
    screenshots: '/assets/projects/workerlly/screenshots/',
    mockups: '/assets/projects/workerlly/mockups/',
  },
  project2: {
    hero: '/assets/projects/project-2/hero-image.jpg',
    screenshots: '/assets/projects/project-2/screenshots/',
    mockups: '/assets/projects/project-2/mockups/',
  },
  project3: {
    hero: '/assets/projects/project-3/hero-image.jpg',
    screenshots: '/assets/projects/project-3/screenshots/',
    mockups: '/assets/projects/project-3/mockups/',
  },
} as const;

// Icons
export const icons = {
  social: {
    facebook: '/assets/icons/social/facebook.svg',
    twitter: '/assets/icons/social/twitter.svg',
    linkedin: '/assets/icons/social/linkedin.svg',
    instagram: '/assets/icons/social/instagram.svg',
    github: '/assets/icons/social/github.svg',
  },
  ui: {
    arrowRight: '/assets/icons/ui/arrow-right.svg',
    check: '/assets/icons/ui/check.svg',
    star: '/assets/icons/ui/star.svg',
    phone: '/assets/icons/ui/phone.svg',
    email: '/assets/icons/ui/email.svg',
  },
  tech: {
    react: '/assets/icons/tech/react.svg',
    nodejs: '/assets/icons/tech/nodejs.svg',
    mongodb: '/assets/icons/tech/mongodb.svg',
    aws: '/assets/icons/tech/aws.svg',
  },
} as const;

// General images
export const images = {
  backgrounds: {
    hero: '/assets/images/backgrounds/hero-bg.jpg',
    section: '/assets/images/backgrounds/section-bg.jpg',
  },
  team: {
    member1: '/assets/images/team/team-member-1.jpg',
    member2: '/assets/images/team/team-member-2.jpg',
  },
  clients: {
    logo1: '/assets/images/clients/client-logo-1.png',
    logo2: '/assets/images/clients/client-logo-2.png',
  },
  testimonials: {
    testimonial1: '/assets/images/testimonials/testimonial-1.jpg',
    testimonial2: '/assets/images/testimonials/testimonial-2.jpg',
  },
} as const;

// Documents
export const documents = {
  brochures: {
    company: '/assets/documents/brochures/company-brochure.pdf',
    service: '/assets/documents/brochures/service-brochure.pdf',
  },
  caseStudies: {
    study1: '/assets/documents/case-studies/case-study-1.pdf',
    study2: '/assets/documents/case-studies/case-study-2.pdf',
  },
  contracts: {
    termsOfService: '/assets/documents/contracts/terms-of-service.pdf',
    privacyPolicy: '/assets/documents/contracts/privacy-policy.pdf',
  },
} as const;

// Type definitions for better TypeScript support
export type LogoKey = keyof typeof logos;
export type ProjectKey = keyof typeof projects;
export type IconKey = keyof typeof icons;
export type ImageKey = keyof typeof images;
export type DocumentKey = keyof typeof documents;
