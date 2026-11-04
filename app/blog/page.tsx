import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { blogPosts, blogCategories } from "@/data/blog";
import { motionProps, staggerProps } from "@/components/motion";

export const metadata: Metadata = {
  title: "Insights & Articles | DT Solutions",
  description:
    "Practical writing on software engineering, business automation, executive dashboards, and AI workflows for forward-thinking enterprises.",
  alternates: {
    canonical: "https://dtsolutions.pk/blog",
  },
};

export default function BlogListingPage() {
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p.id !== featuredPost.id);

  return (
    <>
      <Breadcrumb
        items={[{ label: "Insights & Blog" }]}
        title="Editorial insights for teams improving systems, operations, and credibility"
        description="Short, grounded engineering perspectives on software architecture, automation pipelines, and enterprise workflows."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post Card */}
          <div className="mb-16" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-4">
              Featured Insight
            </span>

            <div className="bg-gradient-to-br from-dark-950 via-dark-900 to-dark-850 rounded-3xl p-8 sm:p-12 text-white border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-bold uppercase tracking-wider text-accent-light bg-white/10 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary-light" />
                    {featuredPost.readTime}
                  </span>
                  <span className="text-slate-400">
                    {featuredPost.publishDate}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-accent-light transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2">
                  <Button
                    href={`/blog/${featuredPost.slug}`}
                    variant="brand"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Read Complete Insight
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Posts Grid */}
          <SectionHeader
            badge="Articles"
            title="All Latest"
            titleAccent="Publications"
            description="Browse all engineering perspectives and business workflow guides."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" {...staggerProps({ delay: 60, step: 90 })}>
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-surface-muted rounded-2xl border border-slate-200/80 shadow-card-subtle hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
                {...motionProps({ preset: "fade-up" })}
              >
                <div>
                  <div className="relative h-44 bg-gradient-to-br from-dark-950 to-dark-900 p-6 flex flex-col justify-between overflow-hidden">
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-accent-light bg-white/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-slate-300 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3 text-primary-light" />
                        {post.readTime}
                      </span>
                    </div>

                    <div className="relative z-10 text-xs text-slate-400">
                      {post.publishDate}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 mb-3 leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200/60 mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors pt-4"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

