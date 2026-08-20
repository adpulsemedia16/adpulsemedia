"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-brand-navy border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white">
                Ad<span className="text-brand-magenta">Pulse</span>{" "}
                <span className="text-xs font-semibold text-brand-pink block -mt-1 tracking-widest">
                  MEDIA
                </span>
              </span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-magenta"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-brand-magenta text-white font-semibold"
                      : "text-gray-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "opacity-100" : "opacity-40"}`} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTAs */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <Link
            href="/contact"
            onClick={() => {
              trackEvent("consultation_cta_click", { source: "mobile_drawer" });
              onClose();
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white font-bold text-center block shadow-brand-md active:scale-98 transition-transform"
          >
            Get Free Consultation
          </Link>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.contact.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { source: "mobile_drawer" })}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 text-sm font-medium hover:bg-[#25D366]/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              onClick={() => trackEvent("phone_click", { source: "mobile_drawer" })}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/10 text-white border border-white/10 text-sm font-medium hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
