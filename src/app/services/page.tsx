import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FreeAuditSection } from "@/components/sections/FreeAuditSection";
import { servicesData } from "@/content/services";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Layout,
  Video,
  Layers,
  Phone,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Digital Marketing, Web Development & Video Production in Hyderabad",
  description:
    "Explore AdPulse Media’s full service suite: Meta & Google Lead Ads, Next.js Web Development, 4K Drone Videography, and Brand Identity in Hyderabad.",
  alternates: {
    canonical: "/services",
  },
};

const serviceIcons: Record<string, React.ReactNode> = {
  "digital-marketing": <TrendingUp className="w-8 h-8 text-brand-pink" />,
  "website-development": <Layout className="w-8 h-8 text-brand-pink" />,
  "content-production": <Video className="w-8 h-8 text-brand-pink" />,
  "branding": <Layers className="w-8 h-8 text-brand-pink" />,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 bg-brand-navy min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs items={[{ label: "Our Services" }]} />
      </div>

      {/* Hero Header */}
      <section className="pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-magenta/15 text-brand-pink text-xs font-bold uppercase tracking-wider mb-4 border border-brand-magenta/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Digital Growth</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              High-Impact Services Designed to{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
                Drive Revenue
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              We eliminate disjointed marketing silos by pairing performance ad targeting with cinematic 4K video production, high-speed custom web engineering, and memorable branding.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Groups */}
      <div className="space-y-24 pb-20">
        {servicesData.map((group, index) => {
          const isEven = index % 2 === 1;

          return (
            <section
              key={group.id}
              id={group.slug}
              className="py-16 bg-brand-purpleDark/30 border-y border-white/10 relative scroll-mt-28"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header for Service Group */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 border-b border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-plum flex items-center justify-center border border-white/15 shrink-0 shadow-brand-sm">
                      {serviceIcons[group.id] || <Sparkles className="w-8 h-8 text-brand-pink" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-pink">
                        Pillar 0{index + 1}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {group.title}
                      </h2>
                      <p className="text-base text-gray-300 mt-1 max-w-2xl">
                        {group.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Contextual Enquiry Button */}
                  <div className="shrink-0">
                    <Link
                      href={`/contact?service=${group.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white font-bold text-sm shadow-brand-sm hover:scale-105 transition-all"
                    >
                      <span>Enquire for {group.title.split(" ")[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Sub-services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  {group.subServices.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-6 rounded-2xl bg-brand-navy/80 border border-white/10 hover:border-brand-magenta/30 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-pink" />
                          <span>{sub.title}</span>
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {sub.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Benefits / Deliverables List */}
                <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-pink mb-4">
                    What You Get with AdPulse:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {group.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Free Audit */}
      <FreeAuditSection />

      {/* Final CTA */}
      <CTASection
        title="Ready to Elevate Your Brand Presence in Hyderabad?"
        subtitle="Contact our strategy team today for an itemized digital marketing or website quotation."
      />
    </div>
  );
}
