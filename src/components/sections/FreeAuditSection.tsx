"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const FreeAuditSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-purpleDark relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-magenta/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-brand-navy via-brand-plum to-brand-purpleDeep border border-brand-magenta/30 p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-magenta/20 text-brand-pink text-xs font-bold uppercase tracking-wider mb-4 border border-brand-magenta/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary Growth Review</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Get a FREE Digital Marketing & Website Audit
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
              We’ll analyze your current ad accounts, website speed, local SEO visibility in Hyderabad, and competitor benchmarks—completely free of cost.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start text-xs sm:text-sm text-gray-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-pink" />
                <span>Competitor Ad Teardown</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-pink" />
                <span>SEO & Speed Scorecard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-pink" />
                <span>Actionable Growth Plan</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto text-center">
            <Link
              href="/contact"
              onClick={() => trackEvent("free_audit_request", { source: "free_audit_banner" })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white font-bold text-base shadow-brand-md hover:shadow-brand-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span>Claim Free Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-[11px] text-gray-400 mt-2">No commitment required. 24h turnaround.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
