"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Grow Your Business?",
  subtitle = "Let’s Build Your Digital Presence Together. Connect with our growth team in Hyderabad today.",
}) => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden text-center" aria-label="Call to Action">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,11,128,0.18),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-magenta to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-brand-pink text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
          <Sparkles className="w-4 h-4 text-brand-magenta" />
          <span>Transform Your Digital Pipeline</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            onClick={() => trackEvent("consultation_cta_click", { source: "final_cta_primary" })}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white font-bold text-base shadow-brand-md hover:shadow-brand-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              siteConfig.contact.whatsappDefaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { source: "final_cta_whatsapp" })}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-semibold text-base transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
