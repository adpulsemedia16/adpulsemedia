import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service — AdPulse Media",
  description: "Terms of service and engagement standards for AdPulse Media digital agency services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-28 bg-brand-navy min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs items={[{ label: "Terms of Service" }]} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-purpleDark/40 border border-white/10 space-y-6 text-gray-200 text-sm sm:text-base leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-gray-400">Last updated: February 2026</p>

          <section className="space-y-3 pt-4">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing our website and engaging AdPulse Media for digital marketing, video production, branding, or website development services, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Scope of Services</h2>
            <p>
              All agency deliverables, campaign scopes, revision rounds, timeline milestones, and fee schedules are governed by individual client proposals and Service Level Agreements (SLAs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
            <p>
              Upon complete payment of project invoices, clients retain full ownership of custom brand logos, website source code, and custom video footage created on their behalf.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, under the jurisdiction of courts in Hyderabad, Telangana.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Contact Information</h2>
            <p>
              For legal inquiries or agreement notices:
            </p>
            <p className="text-brand-pink font-semibold">
              {siteConfig.contact.email} | {siteConfig.location.address}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
