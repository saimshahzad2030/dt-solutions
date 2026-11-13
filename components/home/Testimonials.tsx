"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { motionProps, staggerProps } from "@/components/motion";

export function Testimonials() {
  const currentTestimonial = testimonialsData[0];

  const techProgress = [
    { title: "Web Design & Conversion Architecture", percent: 90 },
    { title: "Custom Software & Role-Based Portals", percent: 95 },
    { title: "Financial Switches & 1-Link Integrations", percent: 98 },
    { title: "Workflow Automation & AI Pipelines", percent: 88 },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Testimonial */}
          <div className="lg:col-span-6 space-y-6" {...motionProps({ preset: "fade-up", delay: 100 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
              OUR CLIENT&apos;S
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              Trusted by many Enterprises &amp; Leaders
            </h2>

            {/* Testimonial Box */}
            <div className="bg-[#f8f9fc] rounded-3xl p-8 border border-slate-200/80 shadow-sm relative">
              <Quote className="w-10 h-10 text-[#5e6fb5]/20 mb-4" />

              <p className="text-[#212529] text-base sm:text-lg leading-relaxed italic mb-6">
                &ldquo;DT Solutions understood our workflow quickly and built something practical instead of overcomplicating it. Communication stayed clear from start to finish, and our team adopted the platform without disruption.&rdquo;
              </p>

              {/* Author & Avatar */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#5e6fb5] flex-shrink-0">
                  <Image
                    src="/editech/h1-tes1.jpg"
                    alt="Faraz Ahmed"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#121c32] leading-tight">
                    Faraz Ahmed
                  </h4>
                  <span className="text-xs text-muted block mt-0.5">
                    Operations Lead, Provincial Logistics
                  </span>
                  <div className="flex items-center space-x-1 text-amber-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technology Index Progress Bars */}
          <div className="lg:col-span-6 space-y-6" {...motionProps({ preset: "fade-up", delay: 150 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
              TECHNOLOGY INDEX
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              We Deliver Solutions with the Goal of Trusting Relationships
            </h2>

            <p className="text-muted text-base leading-relaxed">
              Our engineering depth spans frontends, resilient microservices, and auditable financial switches. Here is our delivery proficiency across key domains:
            </p>

            {/* Progress Bars */}
            <div className="space-y-5 pt-2" {...staggerProps({ delay: 80, step: 80 })}>
              {techProgress.map((item, i) => (
                <div key={i} className="space-y-2" {...motionProps({ preset: "fade-up" })}>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-heading font-bold text-[#121c32]">
                    <span>{item.title}</span>
                    <span className="text-[#5e6fb5]">{item.percent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#5e6fb5] to-[#ee6196] h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
