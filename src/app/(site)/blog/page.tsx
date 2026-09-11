import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { blogPosts } from "@/content/blog";
import { formatDate } from "@/lib/utils";
import { Sparkles, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog & Marketing Insights — AdPulse Media Hyderabad",
  description:
    "Practical growth strategies, real estate lead generation breakdowns, Meta Ads tutorials, and modern web development insights from Hyderabad's premier agency.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="pt-28 bg-brand-navy min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs items={[{ label: "Blog & Insights" }]} />
      </div>

      {/* Header */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-magenta/15 text-brand-pink text-xs font-bold uppercase tracking-wider mb-4 border border-brand-magenta/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Knowledge Base & Growth Guides</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Marketing Strategies &{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-magenta bg-clip-text text-transparent">
                Digital Growth Insights
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Read actionable breakdowns on lowering your real estate CPL, optimizing Google Ads Quality Score, and building high-speed Next.js platforms in Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Post List */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="p-8 rounded-3xl bg-brand-purpleDark/40 border border-white/10 hover:border-brand-magenta/40 transition-all duration-300 hover:shadow-brand-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand-navy border border-white/10 text-xs font-semibold text-brand-pink">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-brand-pink transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm text-gray-300 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <User className="w-3.5 h-3.5 text-brand-pink" />
                    <span>{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-white group-hover:text-brand-pink transition-colors flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want Expert Execution for Your Growth Strategy?"
        subtitle="Schedule a free digital marketing consultation with our Hyderabad campaign team."
      />
    </div>
  );
}
