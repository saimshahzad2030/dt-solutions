import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { motionProps, staggerProps } from "@/components/motion";

export function LatestBlog() {
  const blogImages = [
    { slug: "when-an-enterprise-actually-needs-custom-software", img: "/editech/blog-12-410x250.jpg" },
    { slug: "how-structured-workflows-reduce-response-delays", img: "/editech/blog-11-410x250.jpg" },
    { slug: "dashboards-that-owners-actually-keep-checking", img: "/editech/blog-10-410x250.jpg" },
  ];

  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fc] relative overflow-hidden" id="insights">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16" {...motionProps({ preset: "fade-up", delay: 50 })}>
          <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
            From our blog
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
            Here&apos;s What&apos;s Happening
          </h2>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" {...staggerProps({ delay: 60, step: 90 })}>
          {posts.map((post, index) => {
            const blogImg = blogImages[index]?.img || "/editech/blog-12-410x250.jpg";

            return (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(94,111,181,0.12)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                {...motionProps({ preset: "fade-up" })}
              >
                <div>
                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={blogImg}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-white bg-[#5e6fb5] px-3 py-1 rounded-full shadow-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-7">
                    <div className="flex items-center gap-4 text-xs text-muted mb-3 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#ee6196]" />
                        {post.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#5e6fb5]" />
                        by DT Solutions
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-[#121c32] group-hover:text-[#5e6fb5] transition-colors line-clamp-2 mb-3 leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-muted text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Bottom Read More */}
                <div className="p-7 pt-0 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#5e6fb5] group-hover:text-[#ee6196] transition-colors pt-4"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
