import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, CheckCircle2, ArrowRight } from "lucide-react";
import { deliveryCapabilities, engineeringPerspective } from "@/data/testimonials";
import { motionProps, staggerProps } from "@/components/motion";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Engineering & Delivery Ethos (preserves /editech/8.jpg) */}
          <div className="lg:col-span-6 space-y-6" {...motionProps({ preset: "fade-up", delay: 100 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
              {engineeringPerspective.eyebrow}
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              {engineeringPerspective.heading}
            </h2>

            {/* Perspective Card */}
            <div className="bg-[#f8f9fc] rounded-3xl p-8 border border-slate-200/80 shadow-sm relative">
              <Quote className="w-10 h-10 text-[#5e6fb5]/20 mb-4" />

              <p className="text-[#212529] text-base sm:text-lg leading-relaxed mb-6">
                {engineeringPerspective.statement}
              </p>

              {/* Preserved Avatar Visual & Practice Attribution */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#5e6fb5] flex-shrink-0">
                  <Image
                    src="/editech/8.jpg"
                    alt="DT Solutions Engineering Practice"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#121c32] leading-tight">
                    {engineeringPerspective.attributionTitle}
                  </h4>
                  <span className="text-xs text-muted block mt-0.5">
                    {engineeringPerspective.attributionSubtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Core Capability Domains (replaces arbitrary proficiency percentages) */}
          <div className="lg:col-span-6 space-y-6" {...motionProps({ preset: "fade-up", delay: 150 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
              DOMAIN CAPABILITIES
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              Structured Technical Depth Across Regulated &amp; Enterprise Sectors
            </h2>

            <p className="text-muted text-base leading-relaxed">
              Rather than relying on generic templates, our teams focus on four interconnected engineering domains essential for public-sector and commercial transformation:
            </p>

            {/* Capability Items */}
            <div className="space-y-4 pt-2" {...staggerProps({ delay: 80, step: 80 })}>
              {deliveryCapabilities.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 flex items-start gap-3.5"
                  {...motionProps({ preset: "fade-up" })}
                >
                  <div className="w-6 h-6 rounded-full bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-heading text-sm sm:text-base font-bold text-[#121c32]">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#ee6196] bg-[#ee6196]/10 px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#5e6fb5] hover:text-[#ee6196] transition-colors"
              >
                <span>View Full Solution Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
