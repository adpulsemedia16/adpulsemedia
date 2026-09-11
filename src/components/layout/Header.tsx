"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { Menu, Phone, Sparkles } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { trackEvent } from "@/lib/analytics";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-navy/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-magenta rounded-lg"
              aria-label="AdPulse Media - Home"
            >
              {/* Pulse Icon Mark */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-navy via-brand-plum to-brand-magenta flex items-center justify-center border border-white/20 shadow-brand-sm group-hover:scale-105 transition-transform">
                <svg
                  className="w-6 h-6 text-brand-pink"
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

              {/* Wordmark */}
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white leading-none">
                  Ad<span className="text-brand-magenta">Pulse</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-brand-pink uppercase leading-none mt-1">
                  Media
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-white bg-white/10 font-semibold shadow-inner"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => trackEvent("phone_click", { source: "header_desktop" })}
                className="text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors duration-150"
                title="Call AdPulse Media"
              >
                <Phone className="w-3.5 h-3.5 text-brand-magenta" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <Link
                href="/contact"
                onClick={() => trackEvent("consultation_cta_click", { source: "header_button" })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white text-sm font-bold shadow-brand-sm hover:shadow-brand-md active:scale-[0.97] transition-all duration-150"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Consultation</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                onClick={() => trackEvent("consultation_cta_click", { source: "header_mobile_cta" })}
                className="px-3 py-1.5 rounded-lg bg-brand-magenta text-white text-xs font-bold shadow-brand-sm active:scale-[0.97] transition-transform duration-150"
              >
                Consult
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-magenta active:scale-[0.97] transition-all duration-150"
                aria-label="Open main menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
