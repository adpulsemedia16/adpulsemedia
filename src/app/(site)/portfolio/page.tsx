import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Selected Real Estate, Web & Marketing Campaigns",
  description:
    "Explore AdPulse Media’s campaign showcase across real estate lead generation, construction portals, 4K drone shoots, and custom websites in Hyderabad.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 bg-brand-navy min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs items={[{ label: "Portfolio" }]} />
      </div>

      {/* Header */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-magenta/15 text-brand-pink text-xs font-bold uppercase tracking-wider mb-4 border border-brand-magenta/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Agency Execution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Selected Work &{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
                Campaign Case Studies
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Browse our portfolio of high-converting Meta lead ads, 4K drone property walkthroughs, and custom Next.js web applications across Hyderabad and South India.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-gray-300">
              <ShieldCheck className="w-5 h-5 text-brand-pink shrink-0" />
              <span>
                Note: Client case studies and showcase projects are displayed for demonstration and review. Genuine client approvals and NDA-cleared metrics are updated regularly.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Portfolio Grid */}
      <PortfolioGrid showFilters={true} showHeading={false} />

      {/* CTA */}
      <CTASection
        title="Have a Project You’d Like to Launch?"
        subtitle="Talk to our Hyderabad team about creating high-converting creative assets and paid lead funnels."
      />
    </div>
  );
}
