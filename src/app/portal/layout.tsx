"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Briefcase,
  FileText,
  FolderGit2,
  MessageSquare,
  LogOut,
  Zap,
} from "lucide-react";

const navItems = [
  { href: "/portal", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/portal/pages", label: "Pages Content", icon: FileText },
  { href: "/portal/settings", label: "Site Settings", icon: Settings },
  { href: "/portal/services", label: "Services", icon: Briefcase },
  { href: "/portal/portfolio", label: "Portfolio", icon: FolderGit2 },
  { href: "/portal/blog", label: "Blog Posts", icon: FileText },
  { href: "/portal/faqs", label: "FAQs", icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#0a0018] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-[#130028] border-r border-white/8 flex flex-col">
        {/* Logo */}
        <div className="p-5 border-b border-white/8">
          <Link href="/portal" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image 
                src="/brand/adpulse-logo-square.png" 
                alt="AdPulse Media Logo" 
                width={40} 
                height={40} 
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-white leading-none">
                AdPulse Admin
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-3 pb-2 pt-2">
            Content
          </p>
          {navItems.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-brand-magenta/20 text-brand-pink border border-brand-magenta/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon
                  className={`w-4 h-4 shrink-0 ${isActive ? "text-brand-pink" : "text-gray-500"}`}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-white/8 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-150"
          >
            <span className="text-gray-500">↗</span>
            View Live Site
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-400/10 transition-all duration-150"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Exit Admin
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-14 border-b border-white/8 bg-[#0e001f] flex items-center px-6 shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Admin</span>
            {pathname !== "/portal" && (
              <>
                <span>/</span>
                <span className="text-gray-300 capitalize">
                  {pathname.split("/portal/")[1]?.split("/")[0] ?? ""}
                </span>
              </>
            )}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-semibold text-green-400">Supabase Live</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
