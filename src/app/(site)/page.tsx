import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { TestimonialSection } from "@/components/sections/TestimonialCard";
import { FreeAuditSection } from "@/components/sections/FreeAuditSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { faqsData } from "@/content/faqs";
import { generateFAQSchema } from "@/lib/seo";
import {
  ArrowRight,
  Target,
  Zap,
  DollarSign,
  Clock,
  Headphones,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AdPulse Media — Digital Marketing & Lead Generation Agency Hyderabad",
  description:
    "Grow your business with AdPulse Media. High-performance Meta & Google Ads, high-converting websites, 4K drone videography, and brand identity in Hyderabad.",
  alternates: {
    canonical: "/",
  },
};

const whyChooseUsCards = [
  {
    icon: <Target className="w-6 h-6 text-brand-pink" />,
    title: "Result-Oriented Strategies",
    description: "Every campaign is built around tangible metrics: cost-per-lead (CPL), verified site visits, and direct revenue impact.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-pink" />,
    title: "Hyderabad Industry Depth",
    description: "Deep domain experience in Hyderabad real estate, plotted ventures, healthcare clinics, and construction EPC firms.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-brand-pink" />,
    title: "Transparent & Affordable Pricing",
    description: "No hidden agency fees or bloated retainers. Clean scope deliverables tailored to your growth stage.",
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-pink" />,
    title: "Fast 7-Day Launch",
    description: "Rapid turnaround on ad copy, video scripting, landing pages, and campaign launch so you never lose momentum.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-brand-pink" />,
    title: "Dedicated Account Support",
    description: "Direct WhatsApp access to your campaign strategists and weekly transparent ROI review calls.",
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-pink" />,
    title: "End-to-End Creative Studio",
    description: "In-house 4K drone cinematographers, Next.js web engineers, and copywriters under one unified team.",
  },
];

export default function HomePage() {
  const faqSchema = generateFAQSchema(faqsData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About AdPulse Media Teaser */}
      <section className="py-20 bg-brand-purpleDark/60 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-magenta/15 text-brand-pink text-xs font-bold uppercase tracking-wider border border-brand-magenta/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About AdPulse Media</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Your Strategic Digital Growth Partner in Hyderabad
              </h2>

              <blockquote className="text-lg font-medium text-brand-pink italic border-l-2 border-brand-magenta pl-4">
                &ldquo;We help businesses generate leads, build brand awareness, and increase sales through strategic digital marketing, creative content, and high-converting websites.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                AdPulse Media is a full-service digital agency founded to bridge the gap between creative visual storytelling and quantifiable sales performance. From gated villa launches across Tellapur to B2B manufacturing portals, we create growth systems that convert curiosity into contracts.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-pink transition-colors group"
                >
                  <span>Learn More About Our Team & Mission</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-magenta" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 flex flex-col justify-between">
                  <div className="text-3xl font-black text-brand-pink">100%</div>
                  <div className="mt-2 text-sm font-bold text-white">Digital-First</div>
                  <p className="mt-1 text-xs text-gray-400">Laser-focused on modern Meta, Google, and Web technologies.</p>
                </div>
                <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 flex flex-col justify-between">
                  <div className="text-3xl font-black text-brand-pink">Hyderabad</div>
                  <div className="mt-2 text-sm font-bold text-white">Local Mastery</div>
                  <p className="mt-1 text-xs text-gray-400">On-ground knowledge of micro-markets and buyer demographics.</p>
                </div>
                <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 flex flex-col justify-between">
                  <div className="text-3xl font-black text-brand-pink">4K HDR</div>
                  <div className="mt-2 text-sm font-bold text-white">Cinematic Drone</div>
                  <p className="mt-1 text-xs text-gray-400">In-house aerial filming for plots, villas, and infrastructure.</p>
                </div>
                <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 flex flex-col justify-between">
                  <div className="text-3xl font-black text-brand-pink">&lt;1.0s</div>
                  <div className="mt-2 text-sm font-bold text-white">Next.js Web Speed</div>
                  <p className="mt-1 text-xs text-gray-400">Ultra-fast web platforms that maximize ad conversion rates.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
      <ServiceGrid />

      {/* 4. Why Choose Us Grid */}
      <section className="py-20 bg-brand-navy relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The AdPulse Advantage"
            title="Why Leading Brands Choose AdPulse Media"
            subtitle="We blend creative excellence with rigorous data analysis to build sustainable, scalable customer acquisition channels."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsCards.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-purpleDark/40 border border-white/10 hover:border-brand-magenta/40 transition-all duration-300 hover:shadow-brand-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-pink transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Results Stats */}
      <StatsSection />

      {/* 6. Industries We Serve */}
      <IndustryGrid />

      {/* 7. Selected Portfolio Preview (First 3 Projects) */}
      <PortfolioGrid initialLimit={3} showFilters={false} />

      <div className="text-center pb-16 bg-brand-navy">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all"
        >
          <span>Explore All Case Studies & Projects</span>
          <ArrowRight className="w-4 h-4 text-brand-magenta" />
        </Link>
      </div>

      {/* 8. Testimonials Section */}
      <TestimonialSection />

      {/* 9. Free Marketing Audit Section */}
      <FreeAuditSection />

      {/* 10. FAQ Section */}
      <FAQAccordion />

      {/* 11. Final Call To Action */}
      <CTASection />
    </>
  );
}
