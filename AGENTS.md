# AdPulse Media — AI Development Master Specification

> **Purpose:** This file is the single source of truth for AI coding agents such as Codex, Claude, Antigravity, Gemini, Cursor, Copilot, or other development agents working on the AdPulse Media website.
>
> **Agent rule:** Read this entire file before changing code. Do not start implementation until the existing project structure has been inspected and a short implementation plan has been produced.

---

## 1. Project Identity

**Brand:** AdPulse Media  
**Business:** Full-service digital marketing agency  
**Primary location:** Hyderabad, India  
**Primary audience:** Businesses, real estate companies, construction companies, pharma, education, healthcare, startups, and local businesses.

### Primary website goals

1. Generate qualified leads.
2. Build trust and credibility.
3. Clearly explain services.
4. Showcase portfolio/work/results.
5. Encourage WhatsApp, phone, and consultation enquiries.
6. Rank well for relevant local and service-based Google searches.
7. Make future content, campaign landing pages, and portfolio updates easy to maintain.

### Primary conversion actions

- Get Free Consultation
- Request Free Marketing Audit
- Contact on WhatsApp
- Call AdPulse Media
- Submit Contact Form
- View Portfolio

---

## 2. Working Rules for the AI Agent

Before writing code:

1. Inspect the repository and existing files.
2. Identify the current framework, package manager, and build tooling.
3. Reuse existing components and conventions wherever sensible.
4. Produce a concise implementation plan before making major changes.
5. Do not delete working code unless replacement is necessary.
6. Do not introduce unnecessary dependencies.
7. Do not hard-code secrets, API keys, phone numbers, email credentials, analytics IDs, or tokens.
8. Store environment-specific values in `.env.local` and provide `.env.example`.
9. Keep components reusable and avoid duplicated markup.
10. Test desktop, tablet, and mobile layouts.
11. Run lint/type-check/build before considering the task complete.
12. Fix errors you introduce.
13. Do not fabricate client testimonials, client logos, portfolio projects, case-study numbers, contact information, or legal claims. Use clearly labelled placeholders until approved content is supplied.
14. Existing supplied business metrics such as `100+ projects`, `10,000+ leads`, and `98% satisfaction` may be displayed only if the client confirms they are genuine. Until confirmation, keep them in an editable content/config file and mark them for verification.

---

## 3. Recommended Production Stack

Unless the existing repository already uses another suitable production stack, use:

- **Framework:** Next.js with App Router
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animation:** Framer Motion, used selectively
- **Forms:** React Hook Form + Zod or native Server Actions with Zod validation
- **Email notifications:** Resend or equivalent provider, configured through environment variables
- **Lead persistence:** Optional Supabase/PostgreSQL only if the client wants CRM-style lead storage
- **Analytics:** Google Analytics 4 + Meta Pixel through configurable IDs
- **Deployment:** Vercel or another Node-compatible platform
- **Image optimisation:** Next.js `<Image>`
- **Fonts:** Google/next font with a clean modern sans-serif such as Inter, Manrope, or Plus Jakarta Sans

Do not add a database merely for static website content. Start with structured content/config files and add CMS/database infrastructure only when required.

---

## 4. Brand & Visual Direction

The supplied AdPulse Media logo is the visual source of truth.

### Brand characteristics

- Modern
- Energetic
- Performance-focused
- Premium but accessible
- Digital-first
- Clean and conversion-oriented

### Colour direction

Use the logo palette as the base:

- **Deep Navy / Purple:** approximately `#100030`
- **Dark Plum:** approximately `#300030`
- **Primary Magenta:** approximately `#EF0B80`
- **Secondary Pink:** approximately `#FB0C85`
- **White:** `#FFFFFF`
- **Soft background:** `#F7F7FA`
- **Body text:** near-black such as `#17131F`

Create CSS variables/design tokens rather than scattering colours across components.

### Recommended gradient

```css
linear-gradient(135deg, #100030 0%, #630044 52%, #EF0B80 100%)
```

### UI style

- Spacious layout with strong visual hierarchy
- Rounded cards, but avoid excessive pill-shaped UI
- Strong headings and concise copy
- Magenta used primarily for calls-to-action, highlights, icons, and active states
- Dark purple sections may be used for hero, CTA, stats, and footer
- Avoid overusing neon/glow effects
- Avoid generic agency-template appearance
- Use real imagery/portfolio work when available
- Use tasteful motion and hover effects, not distracting animation

### Logo assets

Place supplied approved logo variants under a consistent directory such as:

```text
/public/brand/adpulse-logo-square.png
/public/brand/adpulse-logo-horizontal.png
```

Use the horizontal logo in the navbar/footer where appropriate and the square mark for favicon/social/avatar contexts.

---

## 5. Site Architecture

Required public routes:

```text
/
/about
/services
/portfolio
/real-estate-marketing
/website-development
/blog
/contact
/privacy-policy
/terms
```

Recommended optional future routes:

```text
/services/digital-marketing
/services/website-development
/services/content-production
/services/branding
/case-studies/[slug]
/blog/[slug]
```

Use route-level SEO metadata for every indexable page.

---

## 6. Global Layout

### Header / Navigation

Desktop:

- AdPulse Media logo
- Home
- About
- Services
- Portfolio
- Real Estate Marketing
- Website Development
- Blog
- Contact
- Primary CTA: **Get Free Consultation**

Mobile:

- Logo
- Menu trigger
- Accessible slide-down or drawer navigation
- Keep consultation/WhatsApp CTA highly visible

Header should become compact/sticky after scrolling if it improves UX.

### Global conversion tools

- Floating WhatsApp button
- Contextual consultation CTA
- Phone/email links using `tel:` and `mailto:`
- Clear form success/error states

### Footer

Include:

- Logo and short company description
- Quick Links
- Services
- Portfolio
- Contact Details
- Social Media Links
- Privacy Policy
- Terms
- Copyright © AdPulse Media

Do not invent social handles or contact information.

---

## 7. Home Page Specification

### Hero

**Headline:**  
Grow Your Business with AdPulse Media

**Subheading:**  
Digital Marketing, Lead Generation, Website Development, Content Creation & Branding Solutions for Businesses, Real Estate & Construction Companies.

**Primary CTA:** Get Free Consultation  
**Secondary CTA:** View Portfolio

Hero should immediately communicate growth, leads, creative execution, and credibility. Consider a visual treatment involving campaign dashboards, social creatives, web mock-ups, property marketing media, or a refined abstract brand composition.

### About AdPulse Media

> We help businesses generate leads, build brand awareness, and increase sales through strategic digital marketing, creative content, and high-converting websites.

Add a concise supporting paragraph and link to `/about`.

### Our Services

Create four primary service cards/groups:

**Digital Marketing**
- Meta Ads
- Google Ads
- Social Media Marketing
- SEO

**Website Development**
- Business Websites
- Real Estate Websites
- Landing Pages
- E-commerce Websites

**Content Production**
- Professional Videography
- Drone Shoots
- Reel Creation
- Video Editing

**Branding**
- Logo Design
- Brand Identity
- Social Media Design
- Corporate Branding

Each service group should link to a relevant service page/section.

### Why Choose Us

- Industry Experience
- Result-Oriented Strategies
- Affordable Pricing
- Fast Delivery
- Dedicated Support
- Creative Team

Do not rely on six identical generic cards if a more visually compelling layout is possible.

### Client Results

Display editable statistics:

- Projects Completed: 100+
- Leads Generated: 10,000+
- Client Satisfaction: 98%
- Industries Served: Real Estate, Construction, Pharma, Education & Local Businesses

Store stats centrally so they can be changed without editing page markup.

### Industries We Serve

- Real Estate
- Construction
- Pharma
- Education
- Healthcare
- Local Businesses
- Startups

### Selected Portfolio

Show a curated preview with filters/tags such as:

- Real Estate
- Construction
- Websites
- Social Media
- Video
- Branding

Use image/video thumbnails and link to `/portfolio`.

### Testimonials

Create a reusable testimonial component. Until real reviews are supplied, use obvious placeholders or hide the section in production.

### Free Marketing Audit

Conversion-focused section:

**Get a FREE Digital Marketing Consultation**

Include a short benefits statement and CTA.

### FAQ

Include:

- How much does a website cost?
- How long does development take?
- Do you provide hosting?
- Do you manage Meta Ads?
- Can you create content for our business?

Implement accessible accordion behaviour and FAQ structured data where appropriate.

### Final CTA

**Ready to Grow Your Business?**  
**Let’s Build Your Digital Presence Together.**

Primary CTA: Get Free Consultation  
Secondary CTA: WhatsApp Us

---

## 8. About Page

### Company Introduction

AdPulse Media is a full-service digital marketing agency helping businesses grow through innovative marketing, professional content creation, and powerful websites.

### Mission

To help businesses generate quality leads and establish a strong online presence.

### Vision

To become a trusted digital growth partner for businesses across India.

### Core Values

- Transparency
- Creativity
- Innovation
- Commitment
- Growth

Add company story/team content only when genuine information is supplied.

---

## 9. Services Page

Create scannable, conversion-focused service groups.

### Digital Marketing

**Meta Ads**
- Facebook Lead Generation
- Instagram Marketing
- Retargeting Campaigns

**Google Ads**
- Search Ads
- Display Ads
- YouTube Ads

**SEO**
- On-page SEO
- Off-page SEO
- Local SEO

**Social Media Management**
- Content Planning
- Post Designs
- Engagement Management

### Website Development

- Business Websites
- Real Estate Websites
- Construction Websites
- Portfolio Websites
- E-Commerce Websites
- Landing Pages
- Website Maintenance

### Content Creation

- Professional Videography
- Drone Shoots
- Property Walkthrough Videos
- Corporate Videos
- Reel Creation
- Video Editing

### Branding Services

- Logo Design
- Brand Identity
- Marketing Collaterals
- Social Media Branding

Every major group should end with a contextual enquiry CTA.

---

## 10. Portfolio Page

Provide filterable categories without making filtering inaccessible.

### Real Estate Projects

- Apartments
- Villas
- Open Plots

### Construction Companies

- Corporate Videos
- Site Progress Videos

### Website Projects

- Business Websites
- Landing Pages

### Social Media Projects

- Reels
- Posters
- Ad Creatives

Recommended project card fields:

```ts
{
  title,
  client,
  category,
  services,
  thumbnail,
  media,
  shortDescription,
  result,
  slug
}
```

Do not fabricate clients or project performance results.

---

## 11. Real Estate Marketing Page

### Hero

Position AdPulse Media as a specialist real estate growth partner.

### Services

- Project Branding
- Meta Lead Generation
- Property Walkthrough Videos
- Drone Shoots
- Landing Page Development
- WhatsApp Marketing
- CRM Integration

### Process

1. Project Analysis
2. Content Creation
3. Campaign Setup
4. Lead Generation
5. Follow-up Optimisation
6. Sales Support

Present the process visually and show a clear CTA after it.

Recommended additional content:

- Common developer/agent pain points
- Lead-generation funnel explanation
- Example campaign/landing-page visuals
- Optional case studies when approved
- FAQ relevant to real estate marketing

---

## 12. Website Development Page

### Main statement

**Website Design & Development**

We create fast, modern and mobile-friendly websites that generate leads and grow businesses.

### Website Types

- Business Websites
- Real Estate Websites
- Construction Websites
- E-Commerce Websites
- Landing Pages

### Features

- Mobile Responsive
- SEO Friendly
- Fast Loading
- WhatsApp Integration
- Lead Forms
- SSL Security

Add a simple workflow such as Discovery → Design → Development → QA → Launch → Support.

---

## 13. Blog

Blog categories/topics:

- Digital Marketing Tips
- Real Estate Marketing Strategies
- Construction Branding Ideas
- Meta Ads Guides
- Website Development Insights

Requirements:

- SEO-friendly article pages
- Author/date/read time if genuine
- Open Graph metadata
- Article structured data
- Related posts
- Share controls if useful
- Easy migration to MDX or CMS later

Do not create large volumes of filler AI-generated posts just to make the site look populated.

---

## 14. Contact Page

### Contact information

Use approved values from environment/content configuration:

- Phone Number
- Email Address
- Hyderabad
- Social Media Links

### Contact Form

Fields:

- Name
- Mobile Number
- Email
- Service Required
- Message

Recommended optional fields:

- Business/Company
- Budget Range
- Preferred Contact Method

### Form requirements

- Server-side validation
- Client-side validation for UX
- Spam protection/honeypot or Turnstile if required
- Accessible labels
- Sanitised values
- Loading state
- Success state
- Failure/retry state
- Email notification to agency
- Optional lead persistence if configured
- Do not expose private API credentials in client JavaScript

### WhatsApp

Provide a prominent **Get Instant Support on WhatsApp** action using a configurable number and optional pre-filled message.

---

## 15. Content Architecture

Keep frequently edited business content outside page components.

Recommended structure:

```text
src/
  app/
  components/
    layout/
    sections/
    forms/
    ui/
  content/
    site.ts
    services.ts
    portfolio.ts
    testimonials.ts
    faqs.ts
  lib/
    seo.ts
    validation.ts
    analytics.ts
    utils.ts
  types/
public/
  brand/
  images/
  portfolio/
```

Avoid creating giant 500–1000 line page components.

---

## 16. Component Expectations

Create reusable components where appropriate, including:

- `Header`
- `MobileNav`
- `Footer`
- `HeroSection`
- `SectionHeading`
- `ServiceCard`
- `ServiceGrid`
- `StatsSection`
- `IndustryGrid`
- `PortfolioGrid`
- `PortfolioCard`
- `TestimonialCard`
- `FAQAccordion`
- `CTASection`
- `ContactForm`
- `WhatsAppButton`
- `Breadcrumbs`

Do not abstract trivial one-off markup purely for the sake of abstraction.

---

## 17. SEO Requirements

Treat SEO as a core engineering requirement, not a later add-on.

Implement:

- Unique page titles and meta descriptions
- Canonical URLs
- Open Graph metadata
- Twitter/social sharing metadata where relevant
- XML sitemap
- `robots.txt`
- Semantic heading hierarchy
- Descriptive image alt text
- Internal linking
- Breadcrumbs on deeper pages where useful
- Local Business/Professional Service schema when accurate
- Organization schema
- Service schema where suitable
- FAQ schema only for visible FAQ content
- Article schema for blog posts

Target keywords naturally; never keyword-stuff.

Potential themes:

- digital marketing agency Hyderabad
- real estate marketing agency Hyderabad
- lead generation agency Hyderabad
- website development company Hyderabad
- social media marketing Hyderabad
- real estate lead generation
- construction company website development

Do not make ranking guarantees.

---

## 18. Performance Requirements

Target excellent Core Web Vitals.

- Optimise images and videos
- Prefer modern image formats
- Lazy-load below-the-fold media
- Use responsive image sizes
- Avoid huge JS bundles
- Avoid autoplaying heavy background video on mobile unless specifically justified
- Minimise render-blocking assets
- Use server components by default where appropriate
- Keep client components focused
- Preload only critical resources

Desired targets for key pages where reasonably achievable:

- Lighthouse Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## 19. Accessibility Requirements

Minimum standard: WCAG 2.2 AA-minded implementation.

- Keyboard-operable navigation
- Visible focus states
- Sufficient colour contrast
- Correct labels and landmarks
- Accessible mobile menu
- Proper buttons vs links
- No essential information conveyed only by colour
- Respect `prefers-reduced-motion`
- Meaningful alt text
- Skip-to-content link

---

## 20. Security & Privacy

- Validate all form input server-side
- Never expose secrets
- Sanitise and safely handle user data
- Add rate limiting/spam protection if abuse becomes likely
- Use HTTPS in production
- Add basic security headers
- Collect only necessary lead information
- Provide Privacy Policy and Terms pages before collecting production leads
- Do not add tracking scripts until IDs and consent requirements are approved

---

## 21. Analytics & Conversion Tracking

Prepare the architecture for configurable:

- GA4
- Meta Pixel
- Google Ads conversion tracking
- Form submission events
- WhatsApp click events
- Phone click events
- Portfolio CTA clicks
- Consultation CTA clicks

Centralise analytics helpers so tracking is not scattered throughout the codebase.

---

## 22. Responsive Breakpoints & UX

Design mobile-first.

Check at minimum:

- 360 px
- 390/430 px
- 768 px
- 1024 px
- 1280 px
- 1440+ px

Important mobile rules:

- Do not allow horizontal overflow
- Maintain comfortable tap targets
- Keep headings readable without awkward line breaks
- Keep forms single-column unless wider layout clearly improves UX
- Compress/stagger animations
- Ensure floating WhatsApp control does not cover important content

---

## 23. Environment Variables

Use placeholders such as:

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_PHONE_NUMBER=
NEXT_PUBLIC_CONTACT_EMAIL=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

If Supabase is added later:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Never commit real secrets.

---

## 24. Development Sequence

Follow this order unless the repository state requires otherwise:

### Phase 1 — Discovery

- Inspect repo
- Confirm stack
- Confirm assets
- Confirm content gaps/placeholders
- Confirm contact details

### Phase 2 — Foundation

- Project structure
- Theme tokens
- Typography
- Global layout
- Header/footer
- Reusable UI components

### Phase 3 — Core Pages

1. Home
2. Services
3. About
4. Contact
5. Portfolio
6. Real Estate Marketing
7. Website Development
8. Blog

### Phase 4 — Conversion Features

- Contact form
- WhatsApp integration
- Free audit CTA
- Analytics events

### Phase 5 — SEO / Quality

- Metadata
- Structured data
- Sitemap/robots
- Accessibility review
- Performance optimisation
- Responsive QA

### Phase 6 — Release

- Lint
- Type-check
- Production build
- Broken-link review
- Form test
- Analytics test
- Deployment

---

## 25. Definition of Done

A task is not complete merely because the page renders.

Before reporting completion:

- [ ] Required page/feature is implemented
- [ ] Mobile and desktop views have been checked
- [ ] No obvious overflow/layout errors
- [ ] Forms validate correctly
- [ ] Loading/error/success states exist where needed
- [ ] Accessibility basics are covered
- [ ] Metadata is present for new indexable pages
- [ ] Images are optimised
- [ ] No secrets are hard-coded
- [ ] No fake business claims have been invented
- [ ] Lint passes
- [ ] Type-check passes
- [ ] Production build passes
- [ ] Changed files are summarised clearly

---

## 26. Agent Response Protocol

When asked to build or modify the website, respond in this order:

1. **Understanding** — one short paragraph describing the requested outcome.
2. **Plan** — concise implementation steps.
3. **Implementation** — make the changes.
4. **Validation** — run relevant checks/tests/build.
5. **Summary** — list what changed and any unresolved content/configuration needed from the client.

If a requirement is unclear but a safe and reversible assumption can be made, proceed and state the assumption. Ask a question only when the missing information materially blocks implementation or risks destructive work.

---

## 27. Initial Agent Prompt

Use the following whenever handing the repository to a new AI coding agent:

> Read `AGENTS.md` completely before changing anything. Inspect the repository and current implementation first. Treat `AGENTS.md` as the project source of truth for architecture, brand direction, content, routes, SEO, accessibility, performance, security, and definition of done. Then give me a concise implementation plan for the requested task. Reuse existing code where sensible, avoid unnecessary dependencies, do not fabricate business information, and validate your work with lint/type-check/build before reporting completion.

---

## 28. Current Build Priority

For the first production pass, prioritise:

1. Premium, trustworthy homepage
2. Strong services architecture
3. Real estate marketing landing page
4. Contact/WhatsApp conversion flow
5. Portfolio framework
6. SEO foundations
7. Responsive performance

The website should feel like a serious Hyderabad digital growth agency—not a generic template, not an over-animated tech startup, and not a cluttered brochure site.
