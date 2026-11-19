import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Landmark,
  CreditCard,
  Layers,
} from "lucide-react";
import { motionProps, staggerProps } from "@/components/motion";

export function FlagshipShowcase() {
  const dtResponsibilities = [
    "Technology development and platform management",
    "Citizen-facing mobile application",
    "Government department integrations",
    "Digital tax and fee collection modules",
    "Administrative dashboards and reporting",
    "Transaction tracking and reconciliation capabilities",
  ];

  const payFastResponsibilities = [
    "Payment gateway infrastructure",
    "Banking and payment channel connectivity",
    "Payment processing through supported channels",
    "Gateway transaction processing and related services",
  ];

  return (
    <section
      className="py-20 lg:py-28 bg-[#07132b] text-white relative overflow-hidden"
      id="flagship-bpay"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center max-w-3xl mx-auto mb-14"
          {...motionProps({ preset: "fade-up", delay: 50 })}
        >
          <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
            FLAGSHIP GOVERNMENT INITIATIVE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight">
            B-Pay – Government of Balochistan
          </h2>
          <p className="font-heading text-base sm:text-lg font-semibold text-[#f78da7] mt-2">
            Provincial Digital Payment &amp; Revenue Collection Platform
          </p>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            DT Solutions, in collaboration with PayFast, is delivering B-Pay, a digital payment platform designed to transform the collection of government taxes, fees, levies, challans and other public-sector payments across Balochistan.
          </p>
        </div>

        {/* Highlight Architecture & Consortium Banner */}
        <div
          className="bg-[#0c1b3d] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl space-y-10"
          {...motionProps({ preset: "fade-up", delay: 150 })}
        >
          {/* Top Overview Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-[#ee6196]/20 text-[#f78da7] border border-[#ee6196]/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ee6196] animate-ping" />
                  Active Delivery
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300">
                  Provincial Public Sector
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300">
                  In Collaboration with PayFast
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Transforming Public-Sector Tax, Fee, Levy &amp; Challan Collection
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Designed around a structured separation between platform software engineering and regulated payment gateway processing, B-Pay enables phased onboarding of provincial departments, digital challan workflows, and consolidated revenue visibility.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <Link
                href="/portfolio/B-Pay-balochistan"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] hover:from-[#e34682] hover:to-[#ee6196] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore B-Pay Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-slate-200 hover:text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>View Collaboration Model</span>
              </Link>
            </div>
          </div>

          {/* Consortium Responsibilities Split */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            {...staggerProps({ delay: 60, step: 90 })}
          >
            {/* DT Solutions */}
            <div
              className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 space-y-4"
              {...motionProps({ preset: "fade-up" })}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5e6fb5]/25 border border-[#5e6fb5]/40 flex items-center justify-center text-[#f78da7]">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#f78da7] block">
                    Technology &amp; Platform Lead
                  </span>
                  <h4 className="font-heading text-lg font-bold text-white">
                    DT Solutions Responsibilities
                  </h4>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                {dtResponsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ee6196] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PayFast */}
            <div
              className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-5"
              {...motionProps({ preset: "fade-up" })}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ee6196]/20 border border-[#ee6196]/40 flex items-center justify-center text-[#f78da7]">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#f78da7] block">
                      Payment Gateway Partner
                    </span>
                    <h4 className="font-heading text-lg font-bold text-white">
                      PayFast Responsibilities
                    </h4>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  {payFastResponsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5e6fb5] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <Layers className="w-4 h-4 text-[#f78da7] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Phased Rollout Scope:</strong> Core platform modules and gateway integration are in active delivery, with additional provincial departments and payment categories scheduled for phased onboarding subject to operational agreements.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
