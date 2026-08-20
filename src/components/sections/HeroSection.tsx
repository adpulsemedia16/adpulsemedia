"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ArrowRight, CheckCircle2, TrendingUp, Play, Zap, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 bg-brand-dark-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-plum/40 via-brand-magenta/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition & Conversion Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-semibold mb-6 shadow-inner animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-ping" />
              <span>Hyderabad’s Dedicated Digital Growth & Lead Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Grow Your Business with{" "}
              <span className="bg-gradient-to-r from-white via-brand-pink to-brand-magenta bg-clip-text text-transparent">
                AdPulse Media
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Digital Marketing, Lead Generation, Website Development, Content Creation & Branding Solutions for Businesses, Real Estate & Construction Companies.
            </p>

            {/* Value Checkpoints */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-pink" />
                <span>Verified Buyer Leads</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-pink" />
                <span>4K Drone & Video Shoots</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-pink" />
                <span>High-Speed Next.js Websites</span>
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                onClick={() => trackEvent("consultation_cta_click", { source: "hero_primary" })}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white font-bold text-base shadow-brand-md hover:shadow-brand-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/portfolio"
                onClick={() => trackEvent("portfolio_view", { source: "hero_secondary" })}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <span>View Portfolio</span>
              </Link>
            </div>

            {/* Trust Quote / Guarantee */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center lg:justify-start gap-3 text-xs text-gray-400">
              <ShieldCheck className="w-5 h-5 text-brand-pink shrink-0" />
              <span>Tailored campaign strategies with zero lock-in contracts & transparent weekly metrics.</span>
            </div>
          </div>

          {/* Right Column: Dynamic Agency Interactive Showcase Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card with Glassmorphism */}
              <div className="relative rounded-3xl bg-gradient-to-b from-white/15 to-white/5 p-6 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                
                {/* Header of Mock Dashboard */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-400 uppercase tracking-wider">
                    Live Performance Feed
                  </span>
                </div>

                {/* Dashboard Metric Highlights */}
                <div className="mt-5 space-y-4">
                  {/* Lead Generation Card */}
                  <div className="p-4 rounded-2xl bg-brand-navy/80 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Meta & Google Ad Leads</div>
                      <div className="text-2xl font-black text-white mt-0.5">1,420+ <span className="text-xs text-green-400 font-semibold font-mono">↑ 48%</span></div>
                      <div className="text-[11px] text-gray-400">Real Estate & B2B Campaigns</div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-brand-magenta/20 flex items-center justify-center border border-brand-magenta/40">
                      <TrendingUp className="w-6 h-6 text-brand-pink" />
                    </div>
                  </div>

                  {/* Drone Production Highlight */}
                  <div className="p-4 rounded-2xl bg-brand-navy/80 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Content & Video Engine</div>
                      <div className="text-lg font-bold text-white mt-0.5">4K Drone Walkthroughs</div>
                      <div className="text-[11px] text-gray-400">Cinematic property reels & shoots</div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-brand-purpleDeep flex items-center justify-center border border-brand-pink/30">
                      <Play className="w-5 h-5 text-brand-pink fill-brand-pink" />
                    </div>
                  </div>

                  {/* Web Performance & Conversion */}
                  <div className="p-4 rounded-2xl bg-brand-navy/80 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Next.js Web Speed</div>
                      <div className="text-lg font-bold text-white mt-0.5">0.8s Mobile Load Time</div>
                      <div className="text-[11px] text-gray-400">100/100 Core Web Vitals</div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/30">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="mt-5 p-3 rounded-xl bg-gradient-to-r from-brand-magenta/20 to-brand-plum/40 border border-brand-magenta/30 text-center">
                  <span className="text-xs font-semibold text-brand-pink">
                    ✨ Serving Builders, Pharma, Education & Startups in Hyderabad
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
