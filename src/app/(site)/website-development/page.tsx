import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { faqsData } from "@/content/faqs";
import {
  Layout,
  Sparkles,
  Zap,
  Smartphone,
  Search,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Code2,
  Server,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Design & Development in Hyderabad — Next.js & High Speed",
  description:
    "We create fast, modern, and mobile-friendly websites that generate leads and grow businesses. Next.js App Router, Tailwind CSS, and WhatsApp lead integration.",
  alternates: {
    canonical: "/website-development",
  },
};

const websiteTypes = [
  {
    title: "Real Estate Project Websites",
    description: "High-impact single-property landing pages with interactive floor plans, 3D video embeds, amenity highlights, and instant brochure downloads.",
    tech: "Next.js + Instant WhatsApp Lead Funnel",
  },
  {
    title: "Corporate & Agency Websites",
    description: "Multi-page portals for B2B enterprises, EPC contractors, and healthcare brands that command immediate credibility and attract tenders.",
    tech: "Custom Responsive Architecture + SEO",
  },
  {
    title: "Construction & Infrastructure Portals",
    description: "Heavy-duty showcase sites for construction equipment fleets, completed infrastructure developments, and tender enquiry forms.",
    tech: "Portfolio CMS + Speed Optimized",
  },
  {
    title: "E-Commerce & Digital Catalogs",
    description: "Lightning-fast product catalog storefronts with direct WhatsApp ordering, payment gateways, and zero inventory lag.",
    tech: "Secure Checkout + Mobile First",
  },
  {
    title: "Paid Ad Conversion Landing Pages",
    description: "Dedicated high-converting squeeze pages built specifically to maximize Google Search and Meta Ad campaign ROAS.",
    tech: "Sub-second Load Times + A/B Ready",
  },
];

const webFeatures = [
  {
    icon: <Smartphone className="w-6 h-6 text-brand-pink" />,
    title: "100% Mobile Responsive",
    description: "Pixel-perfect rendering across every screen size from budget Android phones (360px) to 4K ultra-wide monitors.",
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-pink" />,
    title: "Sub-Second Loading Speed",
    description: "Pre-rendered static HTML and modern image formats (AVIF/WebP) ensuring Lighthouse scores above 95.",
  },
  {
    icon: <Search className="w-6 h-6 text-brand-pink" />,
    title: "Built-In SEO Architecture",
    description: "Semantic HTML5 tags, route-level JSON-LD structured data, dynamic XML sitemaps, and optimized open-graph previews.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-brand-pink" />,
    title: "WhatsApp & Form Integration",
    description: "Direct lead routing into sales reps' WhatsApp, custom instant capture forms, and CRM webhook connectivity.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-pink" />,
    title: "Bank-Grade SSL Security",
    description: "HTTPS encryption, security headers (CSP, X-Frame-Options), and honeypot spam protection out of the box.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-brand-pink" />,
    title: "Clean Next.js Stack",
    description: "Built on modern React and Tailwind CSS—free of bloated plugins, WordPress vulnerabilities, or unnecessary bloatware.",
  },
];

const webDevWorkflow = [
  {
    step: "01",
    title: "Discovery & Wireframing",
    description: "We map your user flow, conversion goals, page hierarchy, and required call-to-actions.",
  },
  {
    step: "02",
    title: "UI/UX Visual Design",
    description: "Craft bespoke high-fidelity designs adhering to brand typography, color palettes, and modern glassmorphic aesthetics.",
  },
  {
    step: "03",
    title: "Next.js Front-End Engineering",
    description: "Write clean, type-safe TypeScript components with smooth micro-interactions and strict performance budgets.",
  },
  {
    step: "04",
    title: "Cross-Browser & Mobile QA",
    description: "Test across Chrome, Safari, Firefox, iOS, and Android to guarantee zero layout shifts or horizontal overflow.",
  },
  {
    step: "05",
    title: "Domain, SSL & Live Launch",
    description: "Deploy to high-speed global edge networks (Vercel / Cloudflare), connect custom domains, and configure Google Search Console.",
  },
  {
    step: "06",
    title: "Maintenance & Support",
    description: "Provide ongoing security patches, content updates, speed monitoring, and conversion tracking audits.",
  },
];

export default function WebsiteDevelopmentPage() {
  const webFaqs = faqsData.filter((f) => f.category === "web-dev" || f.id === "how-do-we-get-started");

  return (
    <div className="pt-28 bg-brand-navy min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs items={[{ label: "Website Development" }]} />
      </div>

      {/* Hero Header */}
      <section className="pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-magenta/15 text-brand-pink text-xs font-bold uppercase tracking-wider mb-4 border border-brand-magenta/30">
              <Code2 className="w-3.5 h-3.5" />
              <span>Modern Web Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Website Design &{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
                High-Speed Development
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              We create fast, modern and mobile-friendly websites that generate leads and grow businesses. Powered by Next.js, Tailwind CSS, and built-in WhatsApp lead capture.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact?service=website-development"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white font-bold text-base shadow-brand-md hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Get Instant Website Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <span>View Web Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-20 bg-brand-purpleDark/40 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Customized For Your Sector"
            title="Website Types We Architect"
            subtitle="Engineered for high conversion rates, seamless mobile interaction, and superior Google search rankings."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTypes.map((type, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-navy/80 border border-white/10 hover:border-brand-magenta/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-magenta/20 flex items-center justify-center border border-brand-magenta/30 mb-4">
                    <Layout className="w-5 h-5 text-brand-pink" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {type.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-xs font-mono font-medium text-brand-pink">
                    {type.tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Technology Features"
            title="Built for Speed, Conversions & Security"
            subtitle="Every website we build is crafted without bloated themes or slow CMS backends."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-purpleDark/40 border border-white/10 hover:border-brand-magenta/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-pink transition-colors">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Stage Web Dev Workflow */}
      <section className="py-20 bg-brand-purpleDark/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Development Sequence"
            title="From Concept to Live Launch in 6 Stages"
            subtitle="A transparent, agile workflow with clear milestones and continuous client feedback loops."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webDevWorkflow.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-navy/80 border border-white/10 relative overflow-hidden"
              >
                <div className="text-3xl font-black text-brand-pink/40 font-mono mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion items={webFaqs} />

      {/* Final CTA */}
      <CTASection
        title="Ready for a Faster, Higher-Converting Website?"
        subtitle="Contact our web engineering team in Hyderabad today for a tailored development roadmap."
      />
    </div>
  );
}
