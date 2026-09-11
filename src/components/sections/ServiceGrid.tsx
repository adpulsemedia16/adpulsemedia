import React from "react";
import { servicesData } from "@/content/services";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "./SectionHeading";

interface ServiceGridProps {
  showHeading?: boolean;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ showHeading = true }) => {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeading && (
          <SectionHeading
            badge="What We Do Best"
            title="Strategic Growth Services Engineered for ROI"
            subtitle="We integrate paid customer acquisition, cinematic drone production, custom website engineering, and high-impact brand identity under one roof."
            alignment="center"
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
