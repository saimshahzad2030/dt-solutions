import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Zap,
  Landmark,
  CreditCard,
  Clock,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { portfolioData } from "@/data/portfolio";
import { motionProps, staggerProps } from "@/components/motion";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = portfolioData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Our Projects`,
    description: project.shortDesc,
    alternates: {
      canonical: `https://dtsolutions.pk/portfolio/${project.slug}`,
    },
  };
}

export default function SinglePortfolioPage({ params }: ProjectPageProps) {
  const project = portfolioData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectImages: Record<string, string> = {
    "B-Pay-balochistan": "/editech/b-pay-balochistan.jpg",
    "institutional-digitization": "/editech/institutional-digitization.jpg",
    "multi-bank-fintech-switch": "/editech/multi-bank-fintech-switch.jpg",
    "enterprise-operations-portal": "/editech/enterprise-operations-portal.jpg",
    "ai-intake-automation": "/editech/ai-intake-automation.jpg",
  };

  const projectImg = projectImages[project.slug] || "/editech/b-pay-balochistan.jpg";
  const otherProjects = portfolioData.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Our Projects", href: "/portfolio" },
          { label: project.title },
        ]}
        title={project.title}
        description={project.subtitle || project.shortDesc}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-10" {...motionProps({ preset: "fade-up", delay: 100 })}>
              {/* Preserved Featured Project Image */}
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={projectImg}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-white bg-[#ee6196] px-3.5 py-1.5 rounded-full shadow-md">
                    {project.badge}
                  </span>
                  <span className="font-heading text-xs font-semibold text-emerald-300 bg-black/65 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    {project.status}
                  </span>
                  {project.isAnonymised && (
                    <span className="font-heading text-xs font-semibold text-slate-200 bg-black/65 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      Anonymised Case Study
                    </span>
                  )}
                </div>
              </div>

              {/* Overview */}
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121c32] mb-2">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="font-heading text-base font-semibold text-[#5e6fb5] mb-4">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-muted text-base sm:text-lg leading-relaxed">
                  {project.fullDesc}
                </p>
              </div>

              {/* Qualitative Scope Highlights (replaces unverified numeric metrics) */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80"
                {...staggerProps({ delay: 50, step: 60 })}
              >
                {project.highlights.map((h, i) => (
                  <div key={i} className="text-center p-2" {...motionProps({ preset: "fade-up" })}>
                    <span className="text-[11px] font-heading uppercase tracking-wider text-muted font-semibold block">
                      {h.label}
                    </span>
                    <span className="font-heading text-sm sm:text-base font-extrabold text-[#121c32] mt-1 block">
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Consortium Responsibilities (for B-Pay) */}
              {project.consortiumRoles && (
                <div className="space-y-4">
                  <h3 className="font-heading text-2xl font-bold text-[#121c32]">
                    Delivery Responsibilities &amp; Collaboration Framework
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 space-y-4">
                      <div className="flex items-center gap-2.5">
                        <Landmark className="w-5 h-5 text-[#ee6196]" />
                        <h4 className="font-heading text-lg font-bold text-[#121c32]">
                          DT Solutions
                        </h4>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {project.consortiumRoles.dtSolutions.map((role) => (
                          <li key={role} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#5e6fb5] flex-shrink-0 mt-0.5" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 space-y-4">
                      <div className="flex items-center gap-2.5">
                        <CreditCard className="w-5 h-5 text-[#5e6fb5]" />
                        <h4 className="font-heading text-lg font-bold text-[#121c32]">
                          {project.consortiumRoles.partnerName}
                        </h4>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {project.consortiumRoles.partnerRoles.map((role) => (
                          <li key={role} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#ee6196] flex-shrink-0 mt-0.5" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-muted italic">
                    {project.consortiumRoles.verificationNote}
                  </p>
                </div>
              )}

              {/* Challenge & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <h3 className="font-heading text-lg font-bold text-[#121c32] flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#ee6196]" />
                    <span>Operational Context &amp; Challenge</span>
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <h3 className="font-heading text-lg font-bold text-[#121c32] flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#5e6fb5]" />
                    <span>Engineering Approach</span>
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Outcome */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#f8f9fc] border border-[#5e6fb5]/20 space-y-3">
                <h3 className="font-heading text-xl font-bold text-[#121c32] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#5e6fb5]" />
                  <span>Strategic Impact &amp; Delivery Value</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.outcome}
                </p>
              </div>

              {/* Implemented / Core Deliverables */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-[#121c32]">
                  Core Capabilities &amp; Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyDeliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#f8f9fc] border border-slate-200/80 flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#5e6fb5] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Planned / Future Capabilities (clearly separated from implemented deliverables) */}
              {project.plannedCapabilities && project.plannedCapabilities.length > 0 && (
                <div className="space-y-4 pt-2">
                  <h3 className="font-heading text-xl font-bold text-[#121c32] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#ee6196]" />
                    <span>Planned &amp; Phased Expansion Scope</span>
                  </h3>
                  <ul className="space-y-2.5 p-6 rounded-2xl bg-amber-50/50 border border-amber-200/80 text-xs sm:text-sm text-slate-700">
                    {project.plannedCapabilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#ee6196] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Meta Sidebar */}
            <div className="lg:col-span-4 space-y-8 sticky top-28" {...motionProps({ preset: "fade-up", delay: 200 })}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#f8f9fc] border border-slate-200/80 space-y-5">
                <h3 className="font-heading text-lg font-bold text-[#121c32] border-b border-slate-200 pb-3">
                  Project Overview
                </h3>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-muted block font-heading uppercase tracking-wider">
                      Client / Context
                    </span>
                    <span className="font-bold text-slate-800 text-sm">{project.client}</span>
                  </div>

                  <div>
                    <span className="text-muted block font-heading uppercase tracking-wider">
                      Scope &amp; Coverage
                    </span>
                    <span className="font-bold text-slate-800 text-sm">{project.coverage}</span>
                  </div>

                  <div>
                    <span className="text-muted block font-heading uppercase tracking-wider">
                      Delivery Stage
                    </span>
                    <span className="font-bold text-slate-800 text-sm">{project.timeline}</span>
                  </div>

                  <div>
                    <span className="text-muted block font-heading uppercase tracking-wider">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-semibold text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] hover:from-[#e34682] hover:to-[#ee6196] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                  >
                    <span>Discuss a Similar Initiative</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Other Case Studies */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
                <h4 className="font-heading text-sm font-bold text-[#121c32]">
                  Other Projects
                </h4>
                <div className="space-y-3">
                  {otherProjects.map((p) => (
                    <Link
                      key={p.id}
                      href={`/portfolio/${p.slug}`}
                      className="block p-3 rounded-xl bg-[#f8f9fc] hover:bg-slate-100 transition-colors"
                    >
                      <span className="text-[10px] font-heading font-bold uppercase text-[#ee6196] block">
                        {p.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-800 line-clamp-1 mt-0.5 block">
                        {p.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
