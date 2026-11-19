import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Landmark,
  CreditCard,
  Code2,
  Smartphone,
  ArrowRight,
  Users2,
  FileText,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BrandLogos } from "@/components/home/BrandLogos";
import { companyData, processSteps } from "@/data/company";
import { motionProps, staggerProps } from "@/components/motion";

export const metadata: Metadata = {
  title: "About Us | Technology & Digital Transformation",
  description:
    "Learn about DT Solutions—a technology and digital transformation company specialising in government digitalisation, FinTech payment infrastructure, and enterprise software.",
  alternates: {
    canonical: "https://dtsolutions.pk/about",
  },
};

export default function AboutPage() {
  const specializations = [
    {
      title: "Government Digital Transformation",
      desc: "Digital tax, fee, levy, and challan collection platforms, e-government applications, and citizen self-service portals.",
      icon: Landmark,
    },
    {
      title: "FinTech & Payment Infrastructure",
      desc: "Payment gateway integration, provincial payment switches, Raast, 1LINK and 1BILL connectivity, and reconciliation systems.",
      icon: CreditCard,
    },
    {
      title: "Enterprise Software Solutions",
      desc: "ERP and CRM systems, workflow automation, business intelligence dashboards, and custom operational portals.",
      icon: Code2,
    },
    {
      title: "Digital Platforms & Security",
      desc: "Mobile and web applications, white-label platforms, API engineering, cloud infrastructure, and PCI DSS readiness engineering.",
      icon: Smartphone,
    },
  ];

  const strategicPillars = [
    {
      period: "Public Sector",
      title: "Modernising Institutional Revenue & Citizen Services",
      desc: "We partner with public-sector institutions to replace manual cash counters and fragmented paper processes with transparent, auditable digital platforms—including B-Pay for the Government of Balochistan in collaboration with PayFast.",
      img: "/editech/4.jpg",
    },
    {
      period: "Payment Rails",
      title: "Engineering Interoperable Financial Infrastructure",
      desc: "Our engineering focus covers structured payment gateway integration, bank and wallet connectivity, Raast, 1LINK and 1BILL integration flows, and accurate settlement reconciliation.",
      img: "/editech/h1-banner02.jpg",
    },
    {
      period: "Enterprise Scale",
      title: "Delivering Secure, Maintainable Core Systems",
      desc: "Across ERP/CRM portals, executive BI dashboards, mobile applications, and cloud infrastructure, we emphasise security-first engineering, clear governance, and long-term operational stewardship.",
      img: "/editech/5.jpg",
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[{ label: "About Us" }]}
        title="Technology & Digital Transformation Built for Institutional Scale"
        description="DT Solutions delivers enterprise technology, digital payment infrastructure and government transformation platforms that simplify complex operations and enable scalable digital services."
      />

      {/* Corporate Profile & Core Focus */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6" {...motionProps({ preset: "fade-up", delay: 100 })}>
              <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
                Corporate Overview
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
                Focused on Government Digitalisation,{" "}
                <span className="text-[#5e6fb5]">
                  FinTech Infrastructure &amp; Enterprise Systems.
                </span>
              </h2>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                {companyData.legalName} is a technology and digital transformation company engineering dependable digital platforms for public-sector authorities, financial ecosystem partners, and commercial enterprises.
              </p>

              <p className="text-muted text-base leading-relaxed">
                Our strategic direction centres on high-accountability systems where operational continuity, transaction integrity, and clear governance matter most: provincial digital payment platforms, multi-channel payment rails, enterprise portals, and secure cloud infrastructure.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] hover:from-[#e34682] hover:to-[#ee6196] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#5e6fb5]/30 hover:border-[#5e6fb5] text-[#5e6fb5] hover:bg-[#5e6fb5] hover:text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>

            {/* Right Specialization Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5" {...staggerProps({ delay: 60, step: 80 })}>
              {specializations.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 hover:bg-white hover:shadow-card-hover transition-all duration-300"
                    {...motionProps({ preset: "fade-up" })}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[#121c32] mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Direction Section — preserving exact h1-banner01..03 images */}
      <section className="py-20 lg:py-28 bg-[#f8f9fc] relative border-y border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
              Strategic Direction
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121c32] leading-tight">
              Built Around Real Operational &amp; Institutional Priorities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" {...staggerProps({ delay: 60, step: 90 })}>
            {strategicPillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col justify-between"
                {...motionProps({ preset: "fade-up" })}
              >
                <div>
                  <div className="relative h-44 w-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-[#ee6196] bg-[#ee6196]/10 px-3 py-1 rounded-full inline-block mb-3">
                      {item.period}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[#121c32] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center text-xs font-heading font-bold text-[#5e6fb5]">
                  <span>Focus Pillar 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Lifecycle */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
              Delivery Discipline
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121c32] leading-tight">
              Structured Engineering From Discovery to Ongoing Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" {...staggerProps({ delay: 60, step: 80 })}>
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 space-y-3"
                {...motionProps({ preset: "fade-up" })}
              >
                <div className="w-10 h-10 rounded-xl bg-[#5e6fb5] text-white flex items-center justify-center font-heading font-extrabold text-base shadow-sm">
                  {step.step}
                </div>
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#ee6196] block">
                  {step.subtitle}
                </span>
                <h3 className="font-heading text-lg font-bold text-[#121c32]">
                  {step.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Corporate Profile (Structured — pending official corporate details) */}
      <section className="py-16 lg:py-24 bg-[#f8f9fc] border-t border-slate-200/80" id="leadership">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4"
              {...motionProps({ preset: "fade-up", delay: 50 })}
            >
              <div className="w-12 h-12 rounded-xl bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center">
                <Users2 className="w-6 h-6" />
              </div>
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ee6196] block">
                Leadership &amp; Governance
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-[#121c32]">
                Executive &amp; Technical Leadership
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                DT Solutions is guided by engineering, public-sector delivery, and financial technology leadership overseeing architecture governance, partner collaborations, and institutional programme delivery.
              </p>
              <p className="text-xs text-slate-500 bg-[#f8f9fc] p-3.5 rounded-xl border border-slate-200/80">
                Approved executive biographies and governance profiles will be published here following corporate confirmation. For institutional briefings, please contact{" "}
                <a href={`mailto:${companyData.email}`} className="text-[#5e6fb5] font-semibold hover:underline">
                  {companyData.email}
                </a>
                .
              </p>
            </div>

            <div
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4"
              id="corporate-profile"
              {...motionProps({ preset: "fade-up", delay: 150 })}
            >
              <div className="w-12 h-12 rounded-xl bg-[#ee6196]/10 text-[#ee6196] flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ee6196] block">
                Corporate Profile &amp; Documentation
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-[#121c32]">
                Capability Briefs &amp; Technical Overviews
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Government agencies, financial institutions, and enterprise procurement teams can request our corporate capability profile, vertical solution briefs, and B-Pay overview documentation.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#5e6fb5] hover:text-[#ee6196] transition-colors"
                >
                  <span>Request Corporate Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preserved Partner / Ecosystem Logos */}
      <BrandLogos />
    </>
  );
}
