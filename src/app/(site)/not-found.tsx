import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function NotFound() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi AdPulse Media, I ended up on a page that doesn't exist. Can you help me?"
  )}`;

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-navy flex items-center justify-center relative overflow-hidden">
      {/* Background decorative glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-magenta/15 text-brand-pink text-xs font-bold uppercase tracking-wider mb-6 border border-brand-magenta/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Page Not Found</span>
        </div>

        {/* Large 404 */}
        <h1 className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent leading-none">
          404
        </h1>

        <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          This page doesn&apos;t exist
        </h2>

        <p className="mt-4 text-base text-gray-300 leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for may have been moved, renamed, or
          doesn&apos;t exist. Let&apos;s get you back on track.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white font-bold text-sm shadow-brand-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* WhatsApp fallback */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-white font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Need help? Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
