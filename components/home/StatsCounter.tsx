"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { companyData } from "@/data/company";
import { motionProps, staggerProps } from "@/components/motion";

export function StatsCounter() {
  const points = [
    "Best Practices From Industry Experts",
    "Automated QA & Sub-Second Latency Architecture",
    "Strict PCI-DSS & 1-Link Banking Compliance",
    "Dedicated Post-Launch SLA & Continuous Monitoring",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fc] relative overflow-hidden" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Counter */}
          <div className="lg:col-span-6 space-y-6" {...motionProps({ preset: "fade-up", delay: 100 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
              OUR EXPERIENCE
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              Experts With Experience &amp; Industry Mastery
            </h2>

            <p className="text-muted text-base leading-relaxed">
              We focus on practical, mission-critical engineering. Every system we build — from provincial tax platforms to custom management software — is built with auditable precision and long-term reliability.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 pt-2">
              {points.map((pt, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Counter Box */}
            <div className="pt-4 flex items-center gap-6" {...motionProps({ preset: "scale-in", delay: 250 })}>
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-5xl sm:text-6xl font-extrabold text-[#5e6fb5]">
                  50+
                </span>
              </div>
              <div className="border-l-2 border-slate-200 pl-6">
                <span className="font-heading text-lg font-bold text-[#121c32] block leading-tight">
                  Satisfied Clients
                </span>
                <span className="text-xs text-muted block mt-1">
                  Across provincial government and commercial enterprises
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic 4-Image Staggered Mosaic */}
          <div className="lg:col-span-6 relative" {...motionProps({ preset: "fade-up", delay: 150 })}>
            <div className="relative grid grid-cols-2 gap-4 max-w-lg mx-auto">
              {/* Image 1 - Top Left */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/editech/h1-banner01.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 2 - Top Right */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md mt-6">
                <Image
                  src="/editech/h1-banner02.jpg"
                  alt="Software architecture"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 3 - Bottom Left */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md -mt-6">
                <Image
                  src="/editech/h1-banner03.jpg"
                  alt="Operations management"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 4 - Bottom Right */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/editech/h1-banner04.jpg"
                  alt="Engineering discussions"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Center Floating Badge */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-[#5e6fb5] to-[#ee6196] text-white flex flex-col items-center justify-center text-center shadow-xl border-4 border-white z-10"
                {...motionProps({ preset: "scale-in", delay: 350 })}
              >
                <span className="font-heading text-xl font-extrabold leading-none">99%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider leading-tight mt-0.5">SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
