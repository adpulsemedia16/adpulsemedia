import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { faqsData } from "@/content/faqs";
import {
  Building2,
  Sparkles,
  Target,
  Video,
  Layers,
  MessageCircle,
  TrendingUp,
  Compass,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Marketing Agency in Hyderabad — Gated Communities, Villas & Plots",
  description:
    "AdPulse Media specializes in real estate lead generation in Hyderabad. 4K drone walkthroughs, high-converting Meta ads, WhatsApp CRM funnels, and verified buyer leads.",
  alternates: {
    canonical: "/real-estate-marketing",
  },
};

const developerPainPoints = [
  {
    pain: "Unqualified Leads & Junk Enquiries",
    solution: "We implement custom 3-stage qualifying questions in Meta Instant Forms to weed out window shoppers before leads hit your CRM.",
  },
  {
    pain: "High Cost Per Qualified Site Visit",
    solution: "Laser geographic and NRI demographic targeting combined with compelling 4K drone video hooks brings down cost per site visit.",
  },
  {
    pain: "Slow Sales Response Time (Speed-to-Lead)",
    solution: "Instant automated WhatsApp routing sends new leads to your sales agents within 10 seconds of form submission.",
  },
  {
    pain: "Lack of High-Impact Visual Content",
    solution: "In-house licensed drone cinematographers capture project road connectivity, elevation, and clubhouse luxuries in stunning 4K HDR.",
  },
];

const realEstateServices = [
  {
    title: "Project Branding & Identity",
    description: "Distinct project naming, logo marks, sales gallery signage, and luxury physical brochures that command premium per-sqft pricing.",
    icon: <Layers className="w-6 h-6 text-brand-pink" />,
  },
  {
    title: "Meta Lead Generation Funnels",
    description: "Hyper-targeted Facebook & Instagram campaigns targeting local HNIs and NRI investors across the USA, Gulf, and Europe.",
    icon: <Target className="w-6 h-6 text-brand-pink" />,
  },
  {
    title: "4K Drone Shoots & Walkthroughs",
    description: "Cinematic aerial coverage showcasing surrounding infrastructure, approach roads, green buffers, and interior walkthroughs.",
    icon: <Compass className="w-6 h-6 text-brand-pink" />,
  },
  {
    title: "Project Landing Pages",
    description: "Ultra-fast Next.js landing pages with interactive master layouts, unit plans, amenity galleries, and instant brochure downloads.",
    icon: <Zap className="w-6 h-6 text-brand-pink" />,
  },
  {
    title: "WhatsApp Lead Routing & CRM",
    description: "Direct webhook integration with LeadSquared, Salesforce, Sell.Do, or custom WhatsApp broadcast pipelines.",
    icon: <MessageCircle className="w-6 h-6 text-brand-pink" />,
  },
  {
    title: "Follow-up & Retargeting Strategy",
    description: "Multi-touch retargeting ads displaying customer testimonials and project construction milestones to re-engage warm prospects.",
    icon: <TrendingUp className="w-6 h-6 text-brand-pink" />,
  },
];

const realEstateProcess = [
  {
    step: "01",
    title: "Project Analysis & Pricing Strategy",
    description: "Deep dive into your project USP, unit configurations (2BHK, 3BHK, Villas, Plots), competitive price band, and target buyer persona.",
  },
  {
    step: "02",
    title: "4K Drone & Creative Asset Production",
    description: "On-site aerial drone shoots, elevation filming, 3D render animations, and high-CTR social media ad creatives.",
  },
  {
    step: "03",
    title: "Campaign Architecture & Instant Forms",
    description: "Launch Meta & Google campaigns with strict geographic targeting (e.g. IT corridor, ORR, airport highway) and custom qualification forms.",
  },
  {
    step: "04",
    title: "Lead Generation & Speed-to-Lead Routing",
    description: "Enquiries flow directly into sales managers' phones with instant WhatsApp notification for sub-5-minute contact turnaround.",
  },
  {
    step: "05",
    title: "Follow-up Optimisation & Retargeting",
    description: "Automated WhatsApp nurture sequences and custom audience retargeting to convert enquiries into verified site visits.",
  },
  {
    step: "06",
    title: "Site Visit & Booking Support",
    description: "Weekly audit of lead feedback with your on-site sales team to refine ad messaging and maximize unit booking closures.",
  },
];

export default function RealEstateMarketingPage() {
  const realEstateFaqs = faqsData.filter(
    (f) => f.category === "real-estate" || f.id === "do-you-manage-meta-ads" || f.id === "can-you-create-content"
  );

  return (
    <div className="pt-28 bg-brand-navy min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs items={[{ label: "Real Estate Marketing" }]} />
      </div>

      {/* Hero Section */}
      <section className="pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-magenta/20 text-brand-pink text-xs font-bold uppercase tracking-wider border border-brand-magenta/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>Hyderabad Real Estate Growth Specialist</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Fill Your Site Visits with{" "}
                <span className="bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
                  Verified Real Estate Buyer Leads
                </span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                We help builders, villa developers, and plotted venture promoters across Hyderabad generate high-intent buyer enquiries, reduce CPL, and drive confirmed site visits through 4K drone films and targeted Meta & Google Ads.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/contact?service=real-estate-funnel"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white font-bold text-base shadow-brand-md hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Real Estate Strategy Call</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
                >
                  <span>View Property Campaigns</span>
                </Link>
              </div>
            </div>

            {/* Right Card / Metric Highlight */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-brand-purpleDark/80 border border-brand-magenta/30 shadow-2xl backdrop-blur-xl space-y-6">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-pink" />
                  <span>Real Estate Lead Funnel Metrics</span>
                </h2>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-brand-navy border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">Targeting Micro-Markets</div>
                      <div className="text-base font-bold text-white mt-0.5">Tellapur • Kokapet • Mokila • Shadnagar</div>
                    </div>
                    <Building2 className="w-6 h-6 text-brand-pink shrink-0" />
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-navy border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">Audience Segmentation</div>
                      <div className="text-base font-bold text-white mt-0.5">Local Techies + US / Gulf NRI Investors</div>
                    </div>
                    <Target className="w-6 h-6 text-brand-pink shrink-0" />
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-navy border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">Turnaround to First Lead</div>
                      <div className="text-base font-bold text-white mt-0.5">48–72 Hours Post Video Production</div>
                    </div>
                    <Zap className="w-6 h-6 text-brand-pink shrink-0" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pain Points vs Solutions */}
      <section className="py-20 bg-brand-purpleDark/40 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Challenges Solved"
            title="Why Most Real Estate Campaigns Fail (And How We Fix It)"
            subtitle="Generic marketing agencies don’t understand real estate sales cycles. Here is how AdPulse delivers higher quality."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developerPainPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-navy/80 border border-white/10 hover:border-brand-magenta/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-red-400 font-bold text-sm mb-3">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>The Problem: {item.pain}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-gray-200 text-sm sm:text-base leading-relaxed mt-2 pt-3 border-t border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">AdPulse Solution: </strong>
                      {item.solution}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Services */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Complete Real Estate Suite"
            title="End-to-End Property Marketing Solutions"
            subtitle="From the moment land is acquired to the final unit registry, we power every stage of your sales pipeline."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateServices.map((svc, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-purpleDark/40 border border-white/10 hover:border-brand-magenta/40 transition-all hover:shadow-brand-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-pink transition-colors">
                  {svc.title}
                </h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Stage Real Estate Process */}
      <section className="py-20 bg-brand-purpleDark/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The 6-Step Real Estate Funnel"
            title="How We Take Your Project from Launch to Sold Out"
            subtitle="A structured, high-accountability growth sequence designed specifically for Hyderabad developers."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateProcess.map((step, idx) => (
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

      {/* Real Estate Specific FAQs */}
      <FAQAccordion items={realEstateFaqs} />

      {/* Final CTA */}
      <CTASection
        title="Launching a New Property Venture in Hyderabad?"
        subtitle="Talk to our real estate growth strategists today to craft a high-impact launch campaign."
      />
    </div>
  );
}
