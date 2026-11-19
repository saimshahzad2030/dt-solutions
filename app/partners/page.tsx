import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  Landmark,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BrandLogos } from "@/components/home/BrandLogos";
import { motionProps, staggerProps } from "@/components/motion";

export const metadata: Metadata = {
  title: "Our Partners | Strategic Technology & Payment Collaborations",
  description:
    "Explore DT Solutions' collaborative delivery model, including our collaboration with PayFast on B-Pay Balochistan, and how we partner with government, FinTech, and enterprise institutions.",
  alternates: {
    canonical: "https://dtsolutions.pk/partners",
  },
};

export default function PartnersPage() {
  const dtRoles = [
    "Technology development and platform management",
    "Citizen-facing mobile application",
    "Government department integrations",
    "Digital tax and fee collection modules",
    "Administrative dashboards and reporting",
    "Transaction tracking and reconciliation capabilities",
  ];

  const payFastRoles = [
    "Payment gateway infrastructure",
    "Banking and payment channel connectivity",
    "Payment processing through supported channels",
    "Gateway transaction processing and related services",
  ];

  const partnershipModels = [
    {
      icon: CreditCard,
      title: "Payment Gateways & Financial Institutions",
      desc: "Joint delivery combining DT Solutions' platform engineering with licensed gateway processing, banking connectivity, and Raast, 1LINK, and 1BILL payment rails.",
    },
    {
      icon: Landmark,
      title: "Public-Sector & Institutional Programmes",
      desc: "Structured technical collaboration with provincial ministries, departments, and public authorities modernising tax, fee, challan, and citizen workflows.",
    },
    {
      icon: Building2,
      title: "Enterprise Systems & Cloud Alliances",
      desc: "Integration partnerships across ERP, CRM, business intelligence, cloud infrastructure, and cybersecurity engineering engagements.",
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[{ label: "Our Partners" }]}
        title="Collaborative Delivery Across Government & Payment Ecosystems"
        description="Complex digital transformation succeeds when specialised platform engineering aligns seamlessly with regulated payment infrastructure and institutional partners."
      />

      {/* Featured Collaboration: PayFast on B-Pay */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center max-w-3xl mx-auto" {...motionProps({ preset: "fade-up", delay: 50 })}>
              <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
                FLAGSHIP COLLABORATION
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121c32] leading-tight">
                Delivering B-Pay Balochistan in Collaboration With PayFast
              </h2>
              <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
                DT Solutions, in collaboration with PayFast, is delivering B-Pay, a digital payment platform designed to transform the collection of government taxes, fees, levies, challans and other public-sector payments across Balochistan.
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              {...staggerProps({ delay: 60, step: 90 })}
            >
              <div
                className="p-8 rounded-3xl bg-[#f8f9fc] border border-slate-200/80 space-y-4"
                {...motionProps({ preset: "fade-up" })}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#ee6196] block">
                      Platform &amp; Integration Lead
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[#121c32]">
                      DT Solutions
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {dtRoles.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5e6fb5] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-8 rounded-3xl bg-[#f8f9fc] border border-slate-200/80 space-y-4"
                {...motionProps({ preset: "fade-up" })}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#ee6196]/10 text-[#ee6196] flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#5e6fb5] block">
                      Payment Gateway Partner
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[#121c32]">
                      PayFast
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {payFastRoles.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ee6196] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[#07132b] text-white">
              <p className="text-xs sm:text-sm text-slate-300">
                Operational responsibilities reflect the collaborative delivery structure and remain subject to formal consortium and operational agreements.
              </p>
              <Link
                href="/portfolio/B-Pay-balochistan"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] text-white font-heading font-bold text-xs uppercase tracking-wider whitespace-nowrap flex-shrink-0"
              >
                <span>View B-Pay Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Preserved Ecosystem Logos */}
      <BrandLogos />

      {/* Partnership Models */}
      <section className="py-20 lg:py-28 bg-[#f8f9fc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
              PARTNER WITH US
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121c32] leading-tight">
              How Organisations Collaborate With DT Solutions
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14"
            {...staggerProps({ delay: 60, step: 80 })}
          >
            {partnershipModels.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm space-y-4"
                  {...motionProps({ preset: "fade-up" })}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#121c32]">
                    {model.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center" {...motionProps({ preset: "fade-up", delay: 100 })}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5e6fb5] to-[#47579a] hover:from-[#47579a] hover:to-[#36437a] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              <Handshake className="w-4 h-4" />
              <span>Discuss a Strategic Partnership</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
