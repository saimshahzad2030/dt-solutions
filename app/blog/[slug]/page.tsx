import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { blogPosts } from "@/data/blog";
import { motionProps } from "@/components/motion";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | DT Solutions Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `https://dtsolutions.pk/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
  };
}

export default function SingleBlogPost({ params }: BlogPostProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const blogImages: Record<string, string> = {
    "when-an-enterprise-actually-needs-custom-software": "/editech/blog-12-410x250.jpg",
    "how-structured-workflows-reduce-response-delays": "/editech/blog-11-410x250.jpg",
    "dashboards-that-owners-actually-keep-checking": "/editech/blog-10-410x250.jpg",
    "ai-for-operations-teams-where-it-helps-and-where-it-doesnt": "/editech/blog-12-410x250.jpg",
    "website-credibility-fixes-that-matter-for-b2b-buyers": "/editech/blog-11-410x250.jpg",
  };

  const blogImg = blogImages[post.slug] || "/editech/blog-12-410x250.jpg";
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "DT SOLUTIONS (PRIVATE) LIMITED",
      logo: {
        "@type": "ImageObject",
        url: "https://dtsolutions.pk/dt-solutions-logo.png",
      },
    },
    datePublished: "2026-10-01",
    mainEntityOfPage: `https://dtsolutions.pk/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        title={post.title}
        description={post.excerpt}
      />

      <article className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            {/* Main Article Body */}
            <div className="lg:col-span-8 space-y-8" {...motionProps({ preset: "fade-up", delay: 100 })}>
              {/* Featured Blog Image */}
              <div className="relative h-[320px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={blogImg}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Meta Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted pb-6 border-b border-slate-200 font-medium">
                <span className="font-heading font-bold uppercase tracking-wider text-white bg-[#ee6196] px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#5e6fb5]" />
                  <span>{post.author.name}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.publishDate}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#5e6fb5]" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              {/* Key Takeaways Box */}
              {post.takeaways && post.takeaways.length > 0 && (
                <div
                  className="p-6 rounded-2xl bg-[#f8f9fc] border-l-4 border-l-[#5e6fb5] border-y border-r border-slate-200/80 space-y-3"
                  {...motionProps({ preset: "fade-up", delay: 150 })}
                >
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-[#121c32] block">
                    Key Executive Takeaways
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {post.takeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Paragraphs */}
              <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Navigation Back */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#5e6fb5] hover:text-[#ee6196] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Insights</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#ee6196] hover:text-[#5e6fb5] transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6 sticky top-28" {...motionProps({ preset: "fade-up", delay: 200 })}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#07132b] text-white border border-white/10 shadow-xl space-y-4">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#ee6196] bg-white/10 px-2.5 py-1 rounded-full inline-block">
                  Have a similar requirement?
                </span>
                <h4 className="font-heading text-xl font-bold">
                  Speak Directly With Lead Engineers
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We will evaluate your current workflow and suggest a concrete, practical roadmap within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] hover:from-[#e34682] hover:to-[#ee6196] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  <span>Start Project Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
