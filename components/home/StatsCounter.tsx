import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motionProps } from "@/components/motion";

export function StatsCounter() {
  const securityPractices = [
    "Encryption in transit (TLS) and at rest across transactional data stores",
    "Role-based access control (RBAC) and immutable administrative audit trails",
    "Cryptographic API and payment callback verification with idempotent handling",
    "PCI DSS readiness engineering, continuous system monitoring, and disaster recovery",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fc] relative overflow-hidden" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Technology & Security Practices */}
          <div className="lg:col-span-6 space-y-6" {...motionProps({ preset: "fade-up", delay: 100 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
              TECHNOLOGY &amp; SECURITY
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              Security-Engineered Foundations for Critical Systems
            </h2>

            <p className="text-muted text-base leading-relaxed">
              Platforms serving public-sector revenue collection and financial integrations demand strict architectural discipline. We build defence-in-depth engineering controls directly into every API, database, and administrative console.
            </p>

            {/* Security & Engineering Checklist */}
            <ul className="space-y-3 pt-2">
              {securityPractices.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Vertical Focus Callout + CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-6" {...motionProps({ preset: "fade-up", delay: 200 })}>
              <div className="flex items-center gap-4">
                <span className="font-heading text-5xl font-extrabold text-[#5e6fb5] leading-none">
                  05
                </span>
                <div className="border-l-2 border-slate-200 pl-4">
                  <span className="font-heading text-base font-bold text-[#121c32] block leading-tight">
                    Core Business Verticals
                  </span>
                  <span className="text-xs text-muted block mt-0.5">
                    Government, FinTech, Enterprise, Platforms &amp; Security
                  </span>
                </div>
              </div>

              <Link
                href="/technology-security"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#5e6fb5] hover:text-[#ee6196] transition-colors"
              >
                <span>Explore Technology &amp; Security</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Preserved 4-Image Staggered Mosaic */}
          <div className="lg:col-span-6 relative" {...motionProps({ preset: "fade-up", delay: 150 })}>
            <div className="relative grid grid-cols-2 gap-4 max-w-lg mx-auto">
              {/* Image 1 - Top Left */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/editech/4.jpg"
                  alt="Engineering team collaboration"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 2 - Top Right */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md mt-6">
                <Image
                  src="/editech/h1-banner02.jpg"
                  alt="Software systems architecture"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 3 - Bottom Left */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md -mt-6">
                <Image
                  src="/editech/5.png"
                  alt="Operational delivery management"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 4 - Bottom Right */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/editech/6.png"
                  alt="Technical architecture review"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Center Floating Badge — factual, non-fabricated */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-[#5e6fb5] to-[#ee6196] text-white flex flex-col items-center justify-center text-center shadow-xl border-4 border-white z-10 px-2"
                {...motionProps({ preset: "scale-in", delay: 350 })}
              >
                <span className="font-heading text-xs font-extrabold uppercase leading-tight">
                  Secure
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider leading-tight mt-0.5 text-white/90">
                  By Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
