Perfect 👍 — let’s write a **Project Requirements Document (PRD)** for **Bansohi.com** using the finalized tech stack. I’ll keep it structured so you can hand it directly to Cursor (or your devs) and they can start building without ambiguity.

---

# 📄 PRD: **Bansohi.com** (Company Website + Blog/Listicles + CMS)

## 1. Project Overview

Bansohi.com will be the **official website** of Bansohi Technology Pvt Ltd.
Goals:

* Establish **brand credibility** with a top-class landing page.
* Showcase **projects/services**.
* Publish **SEO-driven content** (blogs + “Best X Companies” listicles).
* Support **ad cards, CTA buttons, FAQs** inside content.
* Be **fast, secure, scalable** (enterprise-ready but free to start).

---

## 2. Objectives

1. **Landing Page** → Highlight company, services, projects, trust markers.
2. **Blog** → Regular posts (SEO-friendly).
3. **Listicles** → Structured content (Best Ruby on Rails Companies, etc.) referencing reusable `company` entries.
4. **CMS for Content Team** → Editors can create posts, listicles, insert ad cards, CTAs, FAQs.
5. **SEO & Performance** → JSON-LD, sitemap, OG images, mobile-first, Core Web Vitals.
6. **Future Proof** → Start free, but scalable to enterprise workloads.

---

## 3. Tech Stack

* **Frontend**: Next.js (App Router, TS), Tailwind CSS, shadcn/ui, Framer Motion
* **CMS**: Sanity (Free plan) – 20 users, unlimited content types
* **Hosting**: Vercel (Free → Pro later)
* **Analytics**: Plausible (or Vercel Analytics)
* **Forms**: Tally/Formspree (Free tier initially)
* **Error Monitoring**: Sentry (free tier)
* **Optional Later**: Neon Postgres, Upstash Redis, Algolia search

---

## 4. Core Features

### 4.1 Landing Page

* Hero section (headline, subheading, CTA buttons)
* About company (short story + values)
* Services grid (cards: Web/App Dev, SaaS, AI/Automation, SEO)
* Projects/Case studies (ShagunPe, Workerlly, SafeFlipper)
* Testimonials (static to start, CMS later)
* FAQ (accordion, schema.org markup)
* Final CTA section (Book a call / Contact us)
* Footer (address, links, socials)

### 4.2 Blog

* `/blog` index page (pagination)
* Categories & tags
* Individual post pages `/blog/[slug]`
* SEO fields: title, description, canonical, OG image
* JSON-LD Article schema
* Draft preview support

### 4.3 Listicles

* Dedicated type: `listiclePost`
* Fields: topic, year, location, criteria\[], disclaimer, companies\[] (refs)
* Individual page `/blog/best-ruby-on-rails-companies-india-2025`
* JSON-LD: `ItemList` + `FAQPage`
* Company cards (logo, services, clients, CTA button)

### 4.4 CMS (Sanity Studio)

Content types:

* `post` → blogs
* `listiclePost` → best-of articles
* `company` → reusable entities
* `ctaButton` block
* `adCard` block (sponsored toggle + disclosure)
* `faq` block
* `siteSettings` (nav, footer, SEO defaults)

Roles:

* Admin (schema + settings)
* Editor (create/edit content)

### 4.5 SEO & Marketing

* Auto-generated sitemap.xml + robots.txt
* `next-sitemap` integration
* OG image generator (`@vercel/og`)
* JSON-LD: Article, ItemList, FAQ
* Fast Lighthouse score (90+)

### 4.6 Infra & Performance

* Deploy on Vercel (Hobby → Pro later)
* ISR (incremental static regeneration) on blog & listicles
* Webhook from Sanity → revalidate affected routes
* Analytics: Plausible (simple dashboard)
* Error tracking: Sentry

---

## 5. Architecture

### 5.1 Frontend

```
/app
  /page.tsx                 // Landing
  /blog/page.tsx            // Blog index
  /blog/[slug]/page.tsx     // Post/Listicle
  /studio/[[...index]]/page.tsx // Sanity Studio
  /api/revalidate/route.ts  // Sanity webhook
/components
  /ui/*                     // shadcn components
  /sections/*               // Landing sections
  /mdx/*                    // CTAButton, AdCard, FAQ, ComparisonTable
/lib
  sanity.client.ts
  queries.ts
  seo.ts (JSON-LD + meta)
  utils.ts
/sanity
  schema.ts                 // post, listiclePost, company, faq, adCard, ctaButton
  deskStructure.ts
```

---

## 6. User Stories

### As a Visitor

* I want to quickly understand what Bansohi does.
* I want to read blog posts & listicles.
* I want to trust the site (fast, secure, professional).
* I want to contact the company easily.

### As an Editor

* I want to create/edit posts in a clean UI.
* I want to insert ad cards, CTA buttons, FAQs in posts.
* I want to preview content before publishing.
* I want to schedule or update posts without asking devs.

---

## 7. Deliverables

1. **Landing page** (responsive, shadcn-based, animated hero).
2. **Sanity CMS** with schemas for posts, listicles, companies, ads/CTAs, FAQs.
3. **Blog system** with draft preview, SEO fields, JSON-LD.
4. **Listicle template** with ItemList schema & reusable companies.
5. **Deployment on Vercel** with webhook revalidation.
6. **Analytics + Error tracking** integrated.

---

## 8. Timeline (MVP)

* Week 1: Setup Next.js, Tailwind, shadcn, Sanity project
* Week 2: Landing page + CMS schemas
* Week 3: Blog + listicle pages + SEO
* Week 4: Integrations (analytics, forms, webhooks, revalidation) → Deploy

---

## 9. Success Metrics

* Lighthouse score ≥ 90 (mobile & desktop)
* < 2s LCP (first fold)
* Blog posts editable & publishable by content team w/o dev help
* JSON-LD validation passes in Google’s Rich Results Test
* First “Best Companies” listicle published & indexed in Google

---
