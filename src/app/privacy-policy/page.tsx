import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy — AdPulse Media",
  description: "Privacy policy and data protection practices for AdPulse Media visitors and clients.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 bg-brand-navy min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-purpleDark/40 border border-white/10 space-y-6 text-gray-200 text-sm sm:text-base leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400">Last updated: February 2026</p>

          <section className="space-y-3 pt-4">
            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            <p>
              When you submit a consultation request or contact us via our website, we collect personal information you explicitly provide, including your name, email address, phone number, business name, service preference, and project details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
            <p>We use your information solely to:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Respond to your marketing consultation or quotation requests.</li>
              <li>Provide tailored digital growth proposals and strategy recommendations.</li>
              <li>Communicate via WhatsApp, phone, or email regarding your project enquiry.</li>
              <li>Improve website performance and user experience.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Information Sharing & Third Parties</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to third parties. We may use trusted third-party service providers (such as transactional email delivery and hosting infrastructure) solely for operational purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Data Security</h2>
            <p>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Contacting Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at:
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
