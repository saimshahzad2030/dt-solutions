import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Lock,
  ShieldCheck,
  KeyRound,
  FileSearch,
  Server,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { TechStack } from "@/components/home/TechStack";
import { CtaStrip } from "@/components/home/CtaStrip";
import { motionProps, staggerProps } from "@/components/motion";

export const metadata: Metadata = {
  title: "Technology & Security | Architecture & Security Engineering",
  description:
    "Explore DT Solutions' technology stack and security engineering practices: encryption, access control, audit trails, secure APIs, PCI DSS readiness engineering, monitoring, and disaster recovery.",
  alternates: {
    canonical: "https://dtsolutions.pk/technology-security",
  },
};

export default function TechnologySecurityPage() {
  const securityPillars = [
    {
      icon: Lock,
      title: "Data Encryption",
      desc: "TLS encryption for data in transit across web portals, mobile apps, and API boundaries, paired with encryption controls for sensitive records at rest.",
    },
    {
      icon: KeyRound,
      title: "Access Control (RBAC)",
      desc: "Granular role-based access controls enforcing least-privilege separation across departmental officers, finance reviewers, and system administrators.",
    },
    {
      icon: FileSearch,
      title: "Audit Trails & Logging",
      desc: "Structured, tamper-evident logs capturing payment state transitions, administrative actions, and reconciliation events for institutional oversight.",
    },
    {
      icon: ShieldCheck,
      title: "Secure API & Payment Boundaries",
      desc: "Cryptographic signature verification on payment callbacks, strict input validation, rate limiting, and idempotent transaction processing.",
    },
    {
      icon: Activity,
      title: "System Monitoring & Observability",
      desc: "Health checks, structured error tracking, performance telemetry, and proactive alerting to maintain operational visibility across deployed environments.",
    },
    {
      icon: Server,
      title: "Disaster Recovery & Continuity",
      desc: "Automated encrypted backup schedules, environment isolation, and documented recovery procedures aligned with client operational requirements.",
    },
  ];

  const readinessAreas = [
    "Network and service segmentation isolating payment integration layers",
    "Minimisation of sensitive cardholder or financial data storage within application databases",
    "Strict secrets management, key rotation practices, and hardened deployment pipelines",
    "Structured vulnerability reviews, dependency patching, and pre-assessment documentation support",
  ];

  return (
    <>
      <Breadcrumb
        items={[{ label: "Technology & Security" }]}
        title="Security-First Architecture for Public-Sector & Financial Systems"
        description="Engineering practices built around transactional integrity, defence-in-depth security controls, reliable API interoperability, and structured operational governance."
      />

      {/* Core Security Engineering Practices */}
      <section className="py-20 lg:py-28 bg-[#f8f9fc] border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            {...motionProps({ preset: "fade-up", delay: 50 })}
          >
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
              SECURITY ENGINEERING
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              Foundational Security Practices Built Into Every Layer
            </h2>
            <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
              Security is treated as an architectural requirement from discovery through production operations across government, FinTech, and enterprise platforms.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...staggerProps({ delay: 60, step: 80 })}
          >
            {securityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 space-y-4"
                  {...motionProps({ preset: "fade-up" })}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#121c32]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <TechStack />

      {/* PCI DSS Readiness Engineering (transparent, no unverified certification claim) */}
      <section className="py-20 lg:py-24 bg-[#07132b] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-[#0c1b3d] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl max-w-5xl mx-auto"
            {...motionProps({ preset: "fade-up", delay: 80 })}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#ee6196] block">
                  PAYMENT SECURITY READINESS
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  PCI DSS Readiness &amp; Security Engineering
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  For payment-connected platforms, DT Solutions applies security engineering practices aligned with PCI DSS readiness—working alongside regulated payment gateway partners who handle certified payment processing infrastructure.
                </p>
                <p className="text-xs text-slate-400 italic">
                  Note: DT Solutions provides security engineering and readiness implementation; formal third-party compliance certifications are obtained by the relevant operating entities or licensed payment gateway partners where applicable.
                </p>
              </div>

              <div className="lg:col-span-6 space-y-3">
                {readinessAreas.map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#ee6196] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}

                <div className="pt-3">
                  <Link
                    href="/services/technology-infrastructure-security"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#f78da7] hover:text-white transition-colors"
                  >
                    <span>Explore Technology Infrastructure &amp; Security Vertical</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
