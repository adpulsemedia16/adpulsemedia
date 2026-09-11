"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Global error boundary for the App Router.
 * Catches uncaught client-side errors and renders a branded recovery UI.
 * Logs the error to the console for debugging.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error details for debugging (never expose to the user)
    console.error("[AdPulse Error Boundary]:", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi AdPulse Media, I encountered an error on your website. Can you help?"
  )}`;

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-navy flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Error icon */}
        <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-6 border border-red-500/30">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Something Went Wrong
        </h1>

        <p className="mt-4 text-base text-gray-300 leading-relaxed max-w-md mx-auto">
          We encountered an unexpected error. This has been noted and our team
          will investigate. You can try again or navigate back to safety.
        </p>

        {/* Error digest (non-sensitive, for support reference) */}
        {error.digest && (
          <p className="mt-3 text-xs text-gray-500 font-mono">
            Reference: {error.digest}
          </p>
        )}

        {/* Action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white font-bold text-sm shadow-brand-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
        </div>

        {/* WhatsApp support */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-white font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Report issue on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
