"use client";

import React, { useState } from "react";
import { faqsData } from "@/content/faqs";
import { FAQItem } from "@/types";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface FAQAccordionProps {
  items?: FAQItem[];
  showHeading?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items = faqsData,
  showHeading = true,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-brand-navy relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Everything You Need to Know"
            subtitle="Transparent answers about our digital marketing pricing, web dev turnaround times, drone filming, and lead qualification process."
            alignment="center"
          />
        )}

        <div className="space-y-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-brand-purpleDark/40 border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-magenta transition-colors hover:bg-white/5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-pink shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-magenta shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-pink" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-6 pb-6 pt-2 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
