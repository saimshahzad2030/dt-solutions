import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  ShieldCheck,
  CreditCard,
  Landmark,
  Mail,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { companyData } from "@/data/company";
import { motionProps, staggerProps } from "@/components/motion";

export const metadata: Metadata = {
  title: "Careers | Engineering & Digital Transformation Talent",
  description:
    "Explore engineering disciplines and career opportunities at DT Solutions across government digital transformation, FinTech payment infrastructure, enterprise software, and security engineering.",
  alternates: {
    canonical: "https://dtsolutions.pk/careers",
  },
};

export default function CareersPage() {
  const disciplines = [
    {
      icon: Landmark,
      title: "Public-Sector & Platform Engineering",
      desc: "Designing scalable citizen portals, departmental integrations, and digital tax and fee collection workflows.",
    },
    {
      icon: CreditCard,
      title: "FinTech & Payment Systems",
      desc: "Building reliable gateway integrations, Raast/1LINK/1BILL connectivity, callback security, and reconciliation engines.",
    },
    {
      icon: Code2,
      title: "Full-Stack & Mobile Applications",
      desc: "Delivering modern Next.js, TypeScript, Node.js, Python, and mobile applications for enterprise and public-sector users.",
    },
    {
      icon: ShieldCheck,
      title: "Cloud Infrastructure & Security",
      desc: "Hardening APIs, containerised infrastructure, access controls, monitoring pipelines, and PCI DSS readiness controls.",
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[{ label: "Careers" }]}
        title="Build High-Impact Digital Infrastructure With DT Solutions"
        description="We work on practical, mission-critical systems across government digitalisation, payment infrastructure, and enterprise software."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
              ENGINEERING DISCIPLINES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121c32] leading-tight">
              Areas Where Our Teams Work
            </h2>
            <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
              We value thoughtful engineers, product designers, QA specialists, and systems architects who take ownership of software quality, security, and institutional reliability.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            {...staggerProps({ delay: 60, step: 80 })}
          >
            {disciplines.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 space-y-3"
                  {...motionProps({ preset: "fade-up" })}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#121c32]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Honest Open Roles / Talent Pool Notice (no fabricated listings) */}
          <div
            className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#07132b] text-white border border-white/10 shadow-xl text-center space-y-5"
            {...motionProps({ preset: "fade-up", delay: 100 })}
          >
            <div className="w-12 h-12 rounded-2xl bg-[#ee6196]/20 border border-[#ee6196]/30 text-[#f78da7] flex items-center justify-center mx-auto">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Current Openings &amp; Talent Inquiries
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Active role openings are published as programme requirements expand. Engineers, architects, mobile developers, and security specialists interested in working with DT Solutions are welcome to share their CV and area of focus directly with our team.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:${companyData.email}?subject=Careers%20Inquiry%20%E2%80%94%20DT%20Solutions`}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] hover:from-[#e34682] hover:to-[#ee6196] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send CV to {companyData.email}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 hover:border-white text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>General Inquiry Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
