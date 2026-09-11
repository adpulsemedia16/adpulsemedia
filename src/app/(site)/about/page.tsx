import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";
import {
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Flame,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us — Full-Service Digital Marketing Agency in Hyderabad",
  description:
    "Learn about AdPulse Media’s mission, vision, core values, and Hyderabad growth team. We engineer high-converting paid ads, 4K video shoots, and custom websites.",
  alternates: {
    canonical: "/about",
  },
};

const coreValues = [
  {
    title: "Radical Transparency",
    description: "Real-time dashboard access, honest CPL benchmarks, and weekly transparent reporting with zero obfuscated agency fees.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-pink" />,
  },
  {
    title: "Uncompromising Creativity",
    description: "We don't settle for generic social media templates. We shoot bespoke 4K drone footage, write bold ad hooks, and craft distinct visual identities.",
    icon: <Sparkles className="w-6 h-6 text-brand-pink" />,
  },
  {
    title: "Relentless Innovation",
    description: "Staying ahead of algorithm updates across Meta, Google AI Overviews, and modern Next.js web architectures.",
    icon: <Zap className="w-6 h-6 text-brand-pink" />,
  },
  {
    title: "Client Commitment",
    description: "We act as an integrated extension of your leadership team, dedicated to driving pipeline growth and measurable return on ad spend.",
    icon: <Target className="w-6 h-6 text-brand-pink" />,
  },
  {
    title: "Revenue & Growth Focus",
    description: "Vanity metrics don't pay bills. Every graphic, video reel, and landing page is engineered for qualified conversions.",
    icon: <Flame className="w-6 h-6 text-brand-pink" />,
  },
];

const growthSteps = [
  {
    step: "01",
    title: "Discovery & Micro-Market Analysis",
    description: "We evaluate your ideal buyer profile, competitor positioning in Hyderabad, and unit economics.",
  },
  {
    step: "02",
    title: "Content Production & Creative Studio",
    description: "Our in-house crew executes 4K drone shoots, interior walkthroughs, and custom landing page designs.",
  },
  {
    step: "03",
    title: "Precision Campaign Architecture",
    description: "Launch laser-targeted Meta Instant Forms and Google Search campaigns with multi-step qualification filters.",
  },
  {
    step: "04",
    title: "Speed-to-Lead CRM Integration",
    description: "Leads route directly to your sales team’s WhatsApp within seconds to maximize site visit conversion rates.",
  },
  {
    step: "05",
    title: "Continuous A/B Split Testing",
    description: "We constantly test fresh ad hooks, visual angles, and landing page layouts to decrease Cost Per Lead.",
  },
  {
    step: "06",
    title: "Scale & Revenue Acceleration",
    description: "Double down on winning ad sets, expand into YouTube/retargeting, and scale monthly lead volume profitably.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 bg-brand-navy min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs items={[{ label: "About Us" }]} />
      </div>

      {/* Hero Header */}
      <section className="pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-magenta/15 text-brand-pink text-xs font-bold uppercase tracking-wider mb-4 border border-brand-magenta/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About AdPulse Media</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {pages.about.hero.heading}
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              {pages.about.hero.subheading}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-brand-purpleDark/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-navy border border-white/10 hover:border-brand-magenta/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-magenta/20 flex items-center justify-center border border-brand-magenta/40 mb-6">
                <Target className="w-6 h-6 text-brand-pink" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{pages.about.mission.heading}</h2>
              <p className="text-gray-300 leading-relaxed">
                {pages.about.mission.text}
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-navy border border-white/10 hover:border-brand-pink/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-pink/20 flex items-center justify-center border border-brand-pink/40 mb-6">
                <Eye className="w-6 h-6 text-brand-pink" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become the most trusted and results-driven digital growth partner for businesses, real estate developers, and enterprises across Hyderabad and India.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Verified Stats */}
      <StatsSection />

      {/* Core Values */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Stand For"
            title="Our Core Values"
            subtitle="The foundational principles guiding every campaign strategy, creative asset, and client relationship we build."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-purpleDark/40 border border-white/10 hover:border-brand-magenta/40 transition-all hover:shadow-brand-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-pink transition-colors">
                  {val.title}
                </h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Growth Process */}
      <section className="py-20 bg-brand-purpleDark/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Proven Methodology"
            title="How We Deliver Predictable Growth"
            subtitle="A systematic, battle-tested framework engineered to launch, optimize, and scale campaigns efficiently."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-navy/80 border border-white/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-brand-pink/40 font-mono mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Partner with Hyderabad’s Leading Growth Agency?"
        subtitle="Schedule a free 30-minute discovery call to map out your digital marketing blueprint."
      />
    </div>
  );
}
