import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Users2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Code2,
  Layers,
  Sparkles,
  Award,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BrandLogos } from "@/components/home/BrandLogos";
import { companyData } from "@/data/company";
import { motionProps, staggerProps } from "@/components/motion";

export const metadata: Metadata = {
  title: "About Us | Enterprise Digital Delivery & Systems",
  description:
    "Learn how DT Solutions combines premium digital execution with business discipline to build software, automation, and web platforms for global enterprises.",
  alternates: {
    canonical: "https://dtsolutions.pk/about",
  },
};

export default function AboutPage() {
  const specializations = [
    {
      title: "Business Websites & Conversion Architecture",
      desc: "Web platforms with strong credibility, high performance, and streamlined lead-generation structures.",
      icon: Layers,
    },
    {
      title: "Internal Operations & Approval Software",
      desc: "Role-based applications replacing email chains and spreadsheets for inventory, approvals, and reporting.",
      icon: Code2,
    },
    {
      title: "Intelligent Automation & AI Pipelines",
      desc: "Sensible workflows that reduce repetitive admin tasks without introducing oversight headaches.",
      icon: Sparkles,
    },
    {
      title: "Executive Dashboards & Secure Portals",
      desc: "Focused views that give leadership live visibility into numbers, revenue, and departmental health.",
      icon: TrendingUp,
    },
  ];

  const milestones = [
    {
      period: "Foundation",
      title: "Built Around Operational Clarity",
      desc: "DT Solutions started with a razor focus on solving day-to-day workflow problems for growing businesses, prioritizing practical business outcomes over superficial digital demos.",
      img: "/editech/h1-banner01.jpg",
    },
    {
      period: "Expansion",
      title: "Scaling Across Software, Portals & Integrations",
      desc: "Client partnerships naturally expanded our scope from enterprise websites to custom operational web applications, multi-bank financial integrations, and automated pipelines.",
      img: "/editech/h1-banner02.jpg",
    },
    {
      period: "Today",
      title: "A Trusted Long-Term Technical Partner",
      desc: "We now architect mission-critical infrastructure — including provincial b-pay platforms and enterprise workflows — serving organizations with strict security and continuous uptime.",
      img: "/editech/h1-banner03.jpg",
    },
  ];

  const teamDisciplines = [
    {
      role: "Strategy & Discovery",
      desc: "Mapping workflows, user constraints, regulatory compliance, and business priorities before writing code.",
    },
    {
      role: "System Architecture & Engineering",
      desc: "Full-stack development using modern type-safe stacks (Next.js, TypeScript, PostgreSQL, Python).",
    },
    {
      role: "UI/UX & Design Systems",
      desc: "Creating polished, responsive interfaces that reduce cognitive friction and encourage team adoption.",
    },
    {
      role: "Post-Launch SLA & Support",
      desc: "Active monitoring, security updates, feature iterations, and direct 24-hour engineering access.",
    },
  ];

  return (
    <>
      <Breadcrumb
        items={[{ label: "About Us" }]}
        title="We build practical digital systems for real business workflows globally"
        description="DT Solutions combines premium digital execution with the kind of business understanding that keeps systems useful, dependable, and ready for long-term adoption."
      />

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6" {...motionProps({ preset: "fade-up", delay: 100 })}>
              <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
                Our Core Mission
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
                Build digital systems that help teams work with{" "}
                <span className="text-[#5e6fb5]">
                  less friction and more confidence.
                </span>
              </h2>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                We believe strong delivery is not only about clean code or good visuals. It is about understanding how decisions get made, how teams communicate, and where manual work quietly slows the business down.
              </p>

              <p className="text-muted text-base leading-relaxed">
                We focus on practical outcomes: websites that build trust, internal tools that cut wasted time, and automations that remove routine work without adding oversight headaches.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] hover:from-[#e34682] hover:to-[#ee6196] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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

      {/* Story & Evolution Section with Images */}
      <section className="py-20 lg:py-28 bg-[#f8f9fc] relative border-y border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
              Company Evolution
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121c32] leading-tight">
              A Company Story Shaped By Business Realities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" {...staggerProps({ delay: 60, step: 90 })}>
            {milestones.map((item, idx) => (
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
                  <span>Milestone 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <BrandLogos />

      {/* Team & Delivery Discipline */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
              Multidisciplinary Talent
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121c32] leading-tight">
              A Lean Team Focused On Clarity &amp; Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" {...staggerProps({ delay: 60, step: 80 })}>
            {teamDisciplines.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 space-y-3"
                {...motionProps({ preset: "fade-up" })}
              >
                <div className="w-10 h-10 rounded-xl bg-[#5e6fb5] text-white flex items-center justify-center font-heading font-extrabold text-base shadow-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-heading text-lg font-bold text-[#121c32]">
                  {item.role}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
