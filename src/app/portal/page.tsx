"use client";

import React from "react";
import Link from "next/link";
import {
  Settings,
  Briefcase,
  FileText,
  FolderGit2,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Users,
  BarChart3,
} from "lucide-react";

const adminCards = [
  {
    href: "/portal/settings",
    icon: Settings,
    title: "Site Settings",
    description: "Manage contact info, business metrics, and global config.",
    color: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    href: "/portal/services",
    icon: Briefcase,
    title: "Services",
    description: "Add, edit, or remove service offerings and capabilities.",
    color: "from-brand-magenta/20 to-brand-pink/10 border-brand-magenta/30",
    iconColor: "text-brand-pink",
  },
  {
    href: "/portal/portfolio",
    icon: FolderGit2,
    title: "Portfolio",
    description: "Manage case studies, project thumbnails, and results.",
    color: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    href: "/portal/blog",
    icon: FileText,
    title: "Blog Posts",
    description: "Write, publish, and manage SEO-optimised articles.",
    color: "from-green-500/20 to-green-600/10 border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    href: "/portal/faqs",
    icon: MessageSquare,
    title: "FAQs",
    description: "Edit frequently asked questions and their answers.",
    color: "from-orange-500/20 to-orange-600/10 border-orange-500/30",
    iconColor: "text-orange-400",
  },
];

const stats = [
  { label: "Total Pages", value: "9+", icon: BarChart3 },
  { label: "Content Sections", value: "5", icon: FolderGit2 },
  { label: "Database", value: "Supabase", icon: Users },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Manage your website content, services, portfolio and blog directly from this panel.
        </p>
      </div>

      {/* Status Banner */}
      <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-sm text-green-300">Supabase Connected</p>
          <p className="text-xs mt-1 text-green-400/70">
            All changes are saved to your Supabase cloud database. Static JSON cache is updated
            automatically on each save.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3"
          >
            <stat.icon className="w-5 h-5 text-brand-magenta shrink-0" />
            <div>
              <p className="text-lg font-black text-white">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content Management Cards */}
      <div>
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
          Content Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {adminCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group p-6 rounded-2xl bg-gradient-to-br border transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${card.color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-150">
                  <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-150" />
              </div>
              <h3 className="text-base font-bold text-white">{card.title}</h3>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="p-5 rounded-2xl bg-brand-purpleDark/40 border border-white/10">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            target="_blank"
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            ↗ View Live Site
          </Link>
          <Link
            href="/api/cms/content?resource=site"
            target="_blank"
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            🔌 API Health Check
          </Link>
        </div>
      </div>
    </div>
  );
}
