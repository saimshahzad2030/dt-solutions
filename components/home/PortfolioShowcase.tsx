"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { portfolioData, portfolioCategories } from "@/data/portfolio";
import { motionProps, staggerProps } from "@/components/motion";

export function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projectImages = [
    { slug: "epay-balochistan", img: "/editech/project-1.jpg" },
    { slug: "government-digitization", img: "/editech/project-2.jpg" },
    { slug: "multi-bank-fintech-switch", img: "/editech/project-3.jpg" },
    { slug: "enterprise-operations-portal", img: "/editech/project-1.jpg" },
    { slug: "ai-intake-automation", img: "/editech/project-2.jpg" },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-3" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
              We make connections
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              Explore Recent Projects
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 lg:text-right" {...motionProps({ preset: "fade-up", delay: 150 })}>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Software development is just a tool to achieve business goals. Here is how we build long-term value through cooperation and trust.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center lg:justify-end gap-2 pt-2">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider transition-all ${selectedCategory === cat
                    ? "bg-[#5e6fb5] text-white shadow-sm"
                    : "bg-[#f8f9fc] text-slate-700 hover:text-[#5e6fb5]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" {...staggerProps({ delay: 60, step: 90 })}>
          {filteredProjects.slice(0, 6).map((project, index) => {
            const projectImg =
              projectImages.find((p) => p.slug === project.slug)?.img ||
              projectImages[index % projectImages.length].img;

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white"
                {...motionProps({ preset: "fade-up" })}
              >
                {/* Image Container */}
                <div className="relative h-[340px] w-full overflow-hidden">
                  <Image
                    src={projectImg}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07132b]/80 via-[#07132b]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-white bg-[#ee6196] px-3 py-1 rounded-full shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-10 text-white transform transition-transform duration-300">
                    <span className="text-xs text-slate-100 block mb-1 font-bold">
                      Client: {project.client}
                    </span>
                    <h3 className="font-heading text-xl text-white sm:text-2xl font-bold leading-snug group-hover:text-[#f78da7] transition-colors mb-3 ">
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-white hover:text-[#f78da7] transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
