import React from "react";
import { businessMetrics } from "@/content/site";
import { Award, Users, TrendingUp, Clock } from "lucide-react";

const metricIcons: Record<string, React.ReactNode> = {
  projects: <Award className="w-6 h-6 text-brand-pink" />,
  leads: <TrendingUp className="w-6 h-6 text-brand-pink" />,
  satisfaction: <Users className="w-6 h-6 text-brand-pink" />,
  turnaround: <Clock className="w-6 h-6 text-brand-pink" />,
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-purpleDark border-y border-white/10 relative overflow-hidden" aria-label="Performance Metrics">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,11,128,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {businessMetrics.map((stat) => (
            <div
              key={stat.id}
              className="p-6 rounded-2xl bg-brand-navy/60 border border-white/10 backdrop-blur-sm text-center flex flex-col items-center justify-center group hover:border-brand-magenta/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {metricIcons[stat.id] || <Award className="w-6 h-6 text-brand-pink" />}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-bold text-brand-pink">
                {stat.label}
              </div>
              <p className="mt-2 text-xs text-gray-400 max-w-[220px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
