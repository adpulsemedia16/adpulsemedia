import React from "react";
import { industriesData } from "@/content/industries";
import { SectionHeading } from "./SectionHeading";
import {
  Building2,
  HardHat,
  HeartPulse,
  GraduationCap,
  Store,
  Rocket,
} from "lucide-react";

const industryIcons: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-brand-pink" />,
  HardHat: <HardHat className="w-6 h-6 text-brand-pink" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-brand-pink" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-brand-pink" />,
  Store: <Store className="w-6 h-6 text-brand-pink" />,
  Rocket: <Rocket className="w-6 h-6 text-brand-pink" />,
};

export const IndustryGrid: React.FC = () => {
  return (
    <section className="py-20 bg-brand-navy relative" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialized Expertise"
          title="Industries We Accelerate in Hyderabad"
          subtitle="We tailor our ad angles, visual assets, and funnel architectures to match the unique buying triggers of your specific industry."
          alignment="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((industry) => (
            <div
              key={industry.id}
              className="p-6 rounded-2xl bg-brand-purpleDark/50 border border-white/10 hover:border-brand-magenta/40 transition-all duration-300 hover:shadow-brand-sm group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-navy to-brand-plum flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 transition-transform">
                  {industryIcons[industry.iconName] || <Building2 className="w-6 h-6 text-brand-pink" />}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-pink transition-colors">
                  {industry.name}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {industry.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {industry.commonServices.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
