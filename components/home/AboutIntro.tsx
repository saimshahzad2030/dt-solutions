"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Headphones, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motionProps, staggerProps } from "@/components/motion";

export function AboutIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Editech Banner Image & Badge */}
          <div className="lg:col-span-6 relative" {...motionProps({ preset: "fade-up", delay: 100 })}>
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/editech/h1-banner1.jpg"
                  alt="Professional IT Services Team"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#07132b]/40 via-transparent to-transparent" />
              </div>

              {/* Floating Experience Badge */}
              <div
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-gradient-to-r from-[#ee6196] to-[#f78da7] p-6 rounded-3xl text-white shadow-xl max-w-[240px] text-center"
                {...motionProps({ preset: "scale-in", delay: 300 })}
              >
                <span className="font-heading text-4xl sm:text-5xl font-extrabold block leading-none">
                  10+
                </span>
                <span className="font-heading text-xs font-bold uppercase tracking-wider block mt-1">
                  Years of Combined Engineering Mastery
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Feature Boxes */}
          <div className="lg:col-span-6 space-y-6" {...motionProps({ preset: "fade-up", delay: 150 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
              About us
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              We deal With The Aspects Of Professional IT Services
            </h2>

            <p className="text-muted text-base leading-relaxed">
              DT Solutions is the technology partner of choice for leading enterprises, SMEs, and public-sector institutions. We help organizations elevate their operational value through custom software engineering, reliable multi-bank switches, and workflow automations.
            </p>

            {/* Two Side-by-Side Icon Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2" {...staggerProps({ delay: 50, step: 80 })}>
              <div
                className="p-5 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 space-y-3 group hover:border-[#5e6fb5]/30 transition-all"
                {...motionProps({ preset: "fade-up" })}
              >
                <div className="w-12 h-12 rounded-xl bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center group-hover:bg-[#5e6fb5] group-hover:text-white transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#121c32]">
                  Experience
                </h4>
                <p className="text-muted text-xs leading-relaxed">
                  Our engineering leads bring battle-tested experience delivering provincial payment platforms and enterprise software.
                </p>
              </div>

              <div
                className="p-5 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 space-y-3 group hover:border-[#ee6196]/30 transition-all"
                {...motionProps({ preset: "fade-up" })}
              >
                <div className="w-12 h-12 rounded-xl bg-[#ee6196]/10 text-[#ee6196] flex items-center justify-center group-hover:bg-[#ee6196] group-hover:text-white transition-colors">
                  <Headphones className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#121c32]">
                  Quick Support
                </h4>
                <p className="text-muted text-xs leading-relaxed">
                  We guarantee direct communication with lead architects and an active 24-hour response turnaround SLA.
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5e6fb5] to-[#47579a] hover:from-[#47579a] hover:to-[#36437a] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
