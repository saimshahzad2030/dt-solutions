"use client";

import React from "react";
import Link from "next/link";
import {
  CreditCard,
  Users,
  BarChart3,
  Network,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { motionProps, staggerProps } from "@/components/motion";

export function FlagshipShowcase() {
  const pillars = [
    {
      icon: CreditCard,
      title: "Electronic Tax & Fee Collection",
      desc: "Building digital channels for provincial taxes, vehicle tokens, and government fees, replacing manual cash counters with online and mobile options.",
    },
    {
      icon: Users,
      title: "Citizen Self-Service Portal",
      desc: "A web and mobile portal so citizens can pay, track, and manage government transactions without visiting a physical office.",
    },
    {
      icon: BarChart3,
      title: "Revenue Dashboards & Reconciliation",
      desc: "Real-time dashboards for department heads to track collections and reconciliation, replacing manual end-of-day tallies.",
    },
    {
      icon: Network,
      title: "Secure Multi-Bank Integrations",
      desc: "Integrating with 1-Link and commercial banking partners for reliable, auditable transaction processing at provincial scale.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#07132b] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" {...motionProps({ preset: "fade-up", delay: 50 })}>
          <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
            FLAGSHIP GOVERNMENT INITIATIVE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight">
            Active System Engagements: <br />
            Building the bpay Balochistan Platform
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            A government-commissioned initiative to replace manual cash-based systems with a modern, scalable electronic payment infrastructure for the entire province.
          </p>
        </div>

        {/* Highlight Architecture Banner */}
        <div
          className="bg-[#0c1b3d] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl"
          {...motionProps({ preset: "fade-up", delay: 150 })}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-[#ee6196]/20 text-[#f78da7] border border-[#ee6196]/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ee6196] animate-ping" />
                  Active Development
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300">
                  Client: Government Provincial Dept
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300">
                  Coverage: Multi-Dept Provincial
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Provincial-scale financial switch replacing manual cash collection
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                DT Solutions is architecting the end-to-end digital payment platform connecting tax authorities, transport departments, excise, and banking switches into a singular, high-throughput digital pipeline.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                  <span className="font-heading text-2xl font-black text-white block">8+</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Departments</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                  <span className="font-heading text-2xl font-black text-[#ee6196] block">&lt;400ms</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Callback Speed</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                  <span className="font-heading text-2xl font-black text-emerald-400 block">100%</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Automated Recon</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                  <span className="font-heading text-2xl font-black text-[#5e6fb5] block">1-Link</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">National Switch</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/portfolio/bpay-balochistan"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] hover:from-[#e34682] hover:to-[#ee6196] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Platform Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Pillars List */}
            <div className="lg:col-span-5 space-y-4" {...staggerProps({ delay: 80, step: 80 })}>
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ee6196]/40 transition-all flex items-start gap-4 group"
                    {...motionProps({ preset: "fade-up" })}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#5e6fb5]/20 border border-[#5e6fb5]/30 flex items-center justify-center text-[#f78da7] flex-shrink-0 group-hover:bg-[#ee6196] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-white group-hover:text-[#f78da7] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
