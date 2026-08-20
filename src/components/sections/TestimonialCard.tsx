import React from "react";
import { testimonialsData } from "@/content/testimonials";
import { Star, Quote, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-purpleDark/50 border-t border-white/10 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Client Voice"
          title="Trusted by Fast-Growing Brands in Hyderabad"
          subtitle="Discover what leaders in real estate, construction, and healthcare value about partnering with AdPulse Media."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-brand-navy/70 border border-white/10 relative flex flex-col justify-between hover:border-brand-magenta/30 transition-all hover:shadow-brand-sm"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  {t.isPlaceholder && (
                    <span className="ml-auto text-[10px] uppercase font-bold text-brand-pink/80 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      Sample Review
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-200 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-plum to-brand-magenta flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
