import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { generateArticleSchema } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} — AdPulse Media Blog`,
    description: post.summary,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema(post);
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="pt-28 bg-brand-navy min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title.slice(0, 30) + "..." },
          ]}
        />
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-brand-magenta/20 text-brand-pink text-xs font-bold uppercase tracking-wider border border-brand-magenta/30">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Metadata bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand-pink" />
              <span>{post.author.name} ({post.author.role})</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-pink" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-pink" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-purpleDark/40 border border-white/10 space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Keywords / Tags */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-brand-pink shrink-0" />
            {post.keywords.map((kw, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-md bg-brand-navy text-gray-300 border border-white/10"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-brand-purpleDark/30 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Related Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="p-6 rounded-2xl bg-brand-navy border border-white/10 hover:border-brand-magenta/30 transition-all"
                >
                  <span className="text-xs text-brand-pink font-semibold">{rel.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1 hover:text-brand-pink transition-colors">
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">{rel.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title="Ready to Put These Strategies to Work?"
        subtitle="Connect with our Hyderabad digital growth specialists for an actionable roadmap."
      />
    </article>
  );
}
