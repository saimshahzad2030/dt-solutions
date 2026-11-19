import React from "react";
import {
  Cpu,
  Server,
  Database,
  Globe,
  Layers,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { motionProps, staggerProps } from "@/components/motion";

export function TechStack() {
  const technologies = [
    {
      name: "Next.js & React",
      category: "Web & Portal Engineering",
      desc: "Modern server-rendered and static web portals built for clarity, responsiveness, and long-term maintainability.",
      icon: Globe,
    },
    {
      name: "TypeScript",
      category: "Type-Safe Systems",
      desc: "Strict static typing across front-end consoles and backend API contracts to reduce runtime defects.",
      icon: Terminal,
    },
    {
      name: "Node.js & Python",
      category: "Backend & Middleware",
      desc: "Modular service layers for payment integration, departmental workflows, and operational automation.",
      icon: Server,
    },
    {
      name: "PostgreSQL & Redis",
      category: "Transactional Integrity",
      desc: "Relational ACID storage for financial ledgers paired with resilient queuing and caching layers.",
      icon: Database,
    },
    {
      name: "Raast, 1LINK & 1BILL",
      category: "Payment Rail Integration",
      desc: "Structured integration with national payment rails, commercial banks, wallets, and licensed gateways.",
      icon: ShieldCheck,
    },
    {
      name: "Cloud & Containers",
      category: "Infrastructure & DevOps",
      desc: "Containerised deployments, automated backups, monitoring, and tested disaster recovery procedures.",
      icon: Layers,
    },
    {
      name: "Secure API Gateways",
      category: "Interoperability",
      desc: "RESTful API contracts, cryptographic webhook verification, rate controls, and idempotent transaction processing.",
      icon: Workflow,
    },
    {
      name: "Mobile & Cross-Platform",
      category: "Citizen & Customer Apps",
      desc: "Citizen-facing and commercial mobile applications connected cleanly to unified backend platforms.",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="technologies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Engineering Foundation"
          title="Proven Technologies Engineered for"
          titleAccent="Public-Sector & Enterprise Scale"
          description="We build on stable, well-supported technology stacks that prioritise transactional integrity, security hardening, and maintainable long-term operations."
          align="center"
        />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          {...staggerProps({ delay: 60, step: 70 })}
        >
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-surface-muted border border-slate-200/80 hover:bg-white hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                {...motionProps({ preset: "fade-up" })}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 group-hover:bg-gradient-to-tr group-hover:from-primary group-hover:to-accent group-hover:border-transparent flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-accent block mb-1">
                  {tech.category}
                </span>

                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                  {tech.name}
                </h3>

                <p className="text-xs text-muted leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
