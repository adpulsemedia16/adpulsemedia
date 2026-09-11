import React from "react";

/**
 * Global loading skeleton shown during route transitions.
 * Displays a branded pulsing animation that matches the dark navy design.
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing AdPulse logo mark */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-navy via-brand-plum to-brand-magenta flex items-center justify-center border border-white/20 shadow-brand-md animate-pulse">
          <svg
            className="w-9 h-9 text-brand-pink"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-pink animate-bounce [animation-delay:0ms]" />
          <div className="w-2 h-2 rounded-full bg-brand-pink animate-bounce [animation-delay:150ms]" />
          <div className="w-2 h-2 rounded-full bg-brand-pink animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
