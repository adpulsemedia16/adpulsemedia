import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { servicesData } from "@/content/services";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Shield, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-white/10 text-gray-300 relative overflow-hidden" role="contentinfo">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-magenta/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Agency Identity & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-navy via-brand-plum to-brand-magenta flex items-center justify-center border border-white/20 shadow-brand-sm">
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
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white leading-none">
                  Ad<span className="text-brand-magenta">Pulse</span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.25em] text-brand-pink uppercase leading-none mt-1">
                  Media
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Hyderabad’s premier growth marketing agency. We partner with businesses, real estate developers, and construction companies to deliver high-converting paid ads, viral content, and cutting-edge web platforms.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-magenta/15 border border-brand-magenta/30 text-xs font-semibold text-brand-pink">
                <Sparkles className="w-3.5 h-3.5" />
                Hyderabad, India
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                <Shield className="w-3.5 h-3.5 text-green-400" />
                Verified Agency
              </span>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-gray-400 hover:text-brand-pink transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/real-estate-marketing"
                  className="text-brand-pink hover:text-white font-medium transition-colors flex items-center justify-between group"
                >
                  <span>Real Estate Growth Funnel</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/website-development"
                  className="text-gray-400 hover:text-brand-pink transition-colors flex items-center justify-between group"
                >
                  <span>Website Development</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-pink transition-colors">
                  About AdPulse Media
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-brand-pink transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-brand-pink transition-colors">
                  Marketing Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-pink transition-colors">
                  Free Marketing Consultation
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-brand-pink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-brand-pink transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-gray-400">
                <MapPin className="w-4 h-4 text-brand-magenta shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-magenta shrink-0" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-magenta shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-xs pt-1">
                <Clock className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                <span>{siteConfig.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
