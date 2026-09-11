import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Get Free Digital Marketing Consultation in Hyderabad",
  description:
    "Connect with AdPulse Media. Request a free digital marketing audit, discuss your real estate launch, or get instant support on WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="pt-28 bg-brand-navy min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs items={[{ label: "Contact & Consultation" }]} />
      </div>

      {/* Main Header & Form Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Info & Instant WhatsApp Card */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-magenta/15 text-brand-pink text-xs font-bold uppercase tracking-wider mb-4 border border-brand-magenta/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Let’s Connect</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Get in Touch with{" "}
                  <span className="bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
                    Our Growth Team
                  </span>
                </h1>

                <p className="mt-4 text-base text-gray-300 leading-relaxed">
                  Have a new property launch, website redesign, or video shoot in mind? Fill out the form or reach us directly on WhatsApp for an immediate response.
                </p>
              </div>

              {/* Instant WhatsApp Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#25D366]/20 to-brand-purpleDark border border-[#25D366]/40 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Instant WhatsApp Chat</h2>
                    <p className="text-xs text-green-300">Fastest response (under 15 mins)</p>
                  </div>
                </div>

                <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                  Skip the form and chat directly with our Hyderabad campaign strategists about your project scope.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>

              {/* Contact Information List */}
              <div className="p-6 rounded-3xl bg-brand-purpleDark/40 border border-white/10 space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-brand-pink">
                  Direct Office Contact
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-brand-magenta shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Agency Location</span>
                      <span className="text-xs text-gray-400">{siteConfig.location.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-brand-magenta shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Call Us</span>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-xs text-brand-pink hover:text-white transition-colors"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-brand-magenta shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Email Enquiry</span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-xs text-brand-pink hover:text-white transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Business Hours</span>
                      <span className="text-xs text-gray-400">{siteConfig.contact.workingHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signal */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
                <ShieldCheck className="w-5 h-5 text-green-400 shrink-0" />
                <span>NDA & Confidentiality protected. We respect your business privacy.</span>
              </div>
            </div>

            {/* Right Column: Interactive Consultation & Lead Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
