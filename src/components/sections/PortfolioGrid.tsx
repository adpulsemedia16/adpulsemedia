"use client";

import React, { useState } from "react";
import { portfolioProjects, portfolioCategories } from "@/content/portfolio";
import { PortfolioCard } from "./PortfolioCard";
import { SectionHeading } from "./SectionHeading";

interface PortfolioGridProps {
  initialLimit?: number;
  showFilters?: boolean;
  showHeading?: boolean;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  initialLimit,
  showFilters = true,
  showHeading = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = portfolioProjects.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  const displayedProjects = initialLimit
    ? filteredProjects.slice(0, initialLimit)
    : filteredProjects;

  return (
    <section className="py-20 bg-brand-navy relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Selected Work & Results"
            title="Engineered for Measurable Business Growth"
            subtitle="Explore our curated portfolio of paid lead funnels, high-performance web platforms, and cinematic production across Hyderabad."
            alignment="center"
          />
        )}

        {/* Filter Pills */}
        {showFilters && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {portfolioCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-brand-magenta text-white shadow-brand-sm"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
