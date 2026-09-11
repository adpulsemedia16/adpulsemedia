import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioProject } from "@/types";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <div className="group rounded-3xl bg-brand-purpleDark/50 border border-white/10 overflow-hidden hover:border-brand-magenta/40 transition-all duration-300 hover:shadow-brand-md flex flex-col justify-between">
      <div>
        {/* Image Container */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-brand-navy">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-brand-navy/80 backdrop-blur-md border border-white/15 text-[11px] font-bold uppercase tracking-wider text-brand-pink">
              {project.category.replace("-", " ")}
            </span>
          </div>

          {/* Placeholder tag indicator */}
          {project.isPlaceholder && (
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-medium text-gray-300">
                Sample Showcase
              </span>
            </div>
          )}

          {/* Metric Highlight Overlay */}
          {project.resultMetric && (
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-brand-navy/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-pink shrink-0" />
                <span className="text-xs font-semibold text-white">{project.resultMetric}</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium">{project.resultLabel}</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="text-xs font-semibold text-brand-pink mb-1">
            {project.client}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-brand-pink transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.services.map((svc, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/5"
              >
                {svc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="p-6 pt-0 border-t border-white/5 mt-4">
        <Link
          href="/contact"
          className="w-full mt-4 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-brand-magenta hover:text-white border border-white/10 text-xs font-bold text-gray-200 active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-1.5"
        >
          <span>Enquire Similar Strategy</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
