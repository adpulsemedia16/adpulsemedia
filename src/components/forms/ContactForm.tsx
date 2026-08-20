"use client";

import React, { useState } from "react";
import { contactFormSchema, ContactFormSchemaType } from "@/lib/validation";
import { servicesData } from "@/content/services";
import { trackEvent } from "@/lib/analytics";
import { CheckCircle, AlertCircle, Loader2, Send, Sparkles } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormSchemaType>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceRequired: "digital-marketing",
    budgetRange: "₹25,000 - ₹50,000 / month",
    preferredContact: "whatsapp",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus("idle");
    setErrorMessage("");

    // Client-side Zod validation
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        trackEvent("form_submit", {
          service: formData.serviceRequired,
          budget: formData.budgetRange,
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          serviceRequired: "digital-marketing",
          budgetRange: "₹25,000 - ₹50,000 / month",
          preferredContact: "whatsapp",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Unable to send enquiry. Please try again or WhatsApp us directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your internet connection or contact us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-brand-purpleDark/80 border border-green-500/30 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-4 border border-green-500/40">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
        <p className="mt-3 text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
          Your enquiry has been received. An AdPulse Media growth specialist in Hyderabad will review your details and connect with you within 2 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-semibold text-white border border-white/20 transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-brand-purpleDark/60 border border-white/10 backdrop-blur-md shadow-2xl space-y-5"
      noValidate
    >
      <div className="flex items-center gap-2 pb-2 border-b border-white/10">
        <Sparkles className="w-4 h-4 text-brand-pink" />
        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
          Direct Project Enquiry
        </span>
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-500/15 border border-red-500/30 flex items-start gap-3 text-red-300 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot field (hidden from real users, catches bots) */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Row 1: Full Name & Mobile Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-gray-200 mb-1.5">
            Full Name <span className="text-brand-magenta">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full px-4 py-3 rounded-xl bg-brand-navy/80 border text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta transition-all ${
              errors.fullName ? "border-red-500" : "border-white/15"
            }`}
          />
          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-gray-200 mb-1.5">
            Mobile Number (WhatsApp) <span className="text-brand-magenta">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className={`w-full px-4 py-3 rounded-xl bg-brand-navy/80 border text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta transition-all ${
              errors.phone ? "border-red-500" : "border-white/15"
            }`}
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Row 2: Email & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-gray-200 mb-1.5">
            Work Email <span className="text-brand-magenta">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. rahul@company.com"
            className={`w-full px-4 py-3 rounded-xl bg-brand-navy/80 border text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta transition-all ${
              errors.email ? "border-red-500" : "border-white/15"
            }`}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="companyName" className="block text-xs font-bold text-gray-200 mb-1.5">
            Business / Project Name (Optional)
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Vertex Infra / Green Acres"
            className="w-full px-4 py-3 rounded-xl bg-brand-navy/80 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta transition-all"
          />
        </div>
      </div>

      {/* Row 3: Service Required & Estimated Monthly Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="serviceRequired" className="block text-xs font-bold text-gray-200 mb-1.5">
            Service Required <span className="text-brand-magenta">*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta"
          >
            {servicesData.map((svc) => (
              <option key={svc.slug} value={svc.slug} className="bg-brand-navy text-white">
                {svc.title}
              </option>
            ))}
            <option value="real-estate-funnel" className="bg-brand-navy text-white">
              Real Estate Marketing Funnel
            </option>
            <option value="full-growth-package" className="bg-brand-navy text-white">
              Full Turnkey Growth Package
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-xs font-bold text-gray-200 mb-1.5">
            Estimated Budget Range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta"
          >
            <option value="₹25,000 - ₹50,000 / month" className="bg-brand-navy text-white">
              ₹25,000 – ₹50,000
            </option>
            <option value="₹50,000 - ₹1,00,000 / month" className="bg-brand-navy text-white">
              ₹50,000 – ₹1,00,000
            </option>
            <option value="₹1,00,000 - ₹2,50,000+ / month" className="bg-brand-navy text-white">
              ₹1,00,000 – ₹2,50,000+
            </option>
            <option value="One-Time Website / Video Project" className="bg-brand-navy text-white">
              One-Time Project
            </option>
          </select>
        </div>
      </div>

      {/* Message Area */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-gray-200 mb-1.5">
          Project Details & Goals <span className="text-brand-magenta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your venture, target locations in Hyderabad, current lead challenges, or timeline..."
          className={`w-full px-4 py-3 rounded-xl bg-brand-navy/80 border text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-magenta transition-all ${
            errors.message ? "border-red-500" : "border-white/15"
          }`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Preferred Contact Method */}
      <div>
        <span className="block text-xs font-bold text-gray-200 mb-2">
          Preferred Response Channel:
        </span>
        <div className="flex items-center gap-4 text-xs text-gray-300">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="whatsapp"
              checked={formData.preferredContact === "whatsapp"}
              onChange={handleChange}
              className="accent-brand-magenta"
            />
            <span>WhatsApp (Fastest)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              checked={formData.preferredContact === "phone"}
              onChange={handleChange}
              className="accent-brand-magenta"
            />
            <span>Phone Call</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === "email"}
              onChange={handleChange}
              className="accent-brand-magenta"
            />
            <span>Email</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-pink text-white font-bold text-base shadow-brand-md hover:shadow-brand-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Processing Consultation Request...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Request Free Growth Consultation</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-gray-400 text-center">
        🔒 100% Privacy. Your details are never shared with third parties.
      </p>
    </form>
  );
};
