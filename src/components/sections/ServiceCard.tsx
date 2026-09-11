"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceGroup } from "@/types";
import {
  TrendingUp,
  Layout,
  Video,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceGroup;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-7 h-7 text-brand-pink" />,
  Layout: <Layout className="w-7 h-7 text-brand-pink" />,
  Video: <Video className="w-7 h-7 text-brand-pink" />,
  Sparkles: <Sparkles className="w-7 h-7 text-brand-pink" />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.06,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={index}
      className="group relative rounded-3xl bg-brand-purpleDark/60 border border-white/10 hover:border-brand-magenta/50 p-8 transition-all duration-300 hover:shadow-brand-md flex flex-col justify-between overflow-hidden"
    >
      {/* Background Accent Glow on Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-magenta/10 rounded-full blur-2xl group-hover:bg-brand-magenta/25 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Icon & Category Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-navy via-brand-plum to-brand-magenta flex items-center justify-center border border-white/15 shadow-inner group-hover:scale-110 transition-transform">
            {iconMap[service.iconName] || <Sparkles className="w-7 h-7 text-brand-pink" />}
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
            AdPulse Core
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl font-bold text-white group-hover:text-brand-pink transition-colors">
          {service.title}
        </h3>
        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Deliverables List */}
        <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-pink">
            Key Capabilities:
          </p>
          <ul className="space-y-2">
            {service.deliverables.slice(0, 4).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-brand-magenta shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Link Action */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand-pink transition-colors"
        >
          <span>Explore Service Details</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-brand-magenta" />
        </Link>
      </div>
    </motion.div>
  );
};
