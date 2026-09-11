"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  theme?: "dark" | "light";
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  alignment = "center",
  theme = "dark",
}) => {
  const isCentered = alignment === "center";
  const isLight = theme === "light";

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`max-w-3xl mb-12 sm:mb-16 ${isCentered ? "mx-auto text-center" : "text-left"}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
          isLight
            ? "bg-brand-magenta/10 text-brand-magenta border border-brand-magenta/20"
            : "bg-white/10 text-brand-pink border border-white/15 backdrop-blur-sm"
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-brand-magenta" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
        isLight ? "text-brand-dark" : "text-white"
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          isLight ? "text-gray-600" : "text-gray-300"
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
