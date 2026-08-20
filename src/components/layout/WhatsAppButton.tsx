"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { MessageCircle, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show a helpful conversion tooltip after 4 seconds if not dismissed
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Interactive Tooltip Bubble */}
      {showTooltip && (
        <div className="pointer-events-auto max-w-xs bg-white text-brand-dark p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0 animate-ping" />
          <div className="flex-1 text-xs">
            <p className="font-bold text-gray-900">Chat with AdPulse</p>
            <p className="text-gray-600 mt-0.5">Need quick assistance? Message our team directly on WhatsApp.</p>
          </div>
          <button
            onClick={() => {
              setShowTooltip(false);
              setDismissed(true);
            }}
            className="text-gray-400 hover:text-gray-600 p-0.5 rounded focus:outline-none"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { source: "floating_button" })}
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Contact AdPulse Media on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2.2]" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400 border-2 border-white"></span>
        </span>
      </a>
    </aside>
  );
};
