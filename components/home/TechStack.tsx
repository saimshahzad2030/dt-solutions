import React from "react";
import { Cpu, Server, Database, Globe, Layers, ShieldCheck, Terminal, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function TechStack() {
  const technologies = [
    {
      name: "Next.js App Router",
      category: "Frontend Architecture",
      desc: "Server-side rendering, static generation, and sub-second page delivery.",
      icon: Globe,
    },
    {
      name: "TypeScript & React",
      category: "Type-Safe Client",
      desc: "Strict type safety preventing runtime bugs across mission-critical portals.",
      icon: Terminal,
    },
    {
      name: "Node.js & Python",
      category: "Backend Services",
      desc: "High-concurrency microservices, data pipelines, and automation handlers.",
      icon: Server,
    },
    {
      name: "PostgreSQL & ClickHouse",
      category: "Data Integrity",
      desc: "ACID compliance for financial transactions and analytical aggregations.",
      icon: Database,
    },
    {
      name: "1-Link Switch & Banks",
      category: "Financial Switches",
      desc: "Direct integration with national payment switches and banking networks.",
      icon: ShieldCheck,
    },
    {
      name: "Docker & AWS Cloud",
      category: "Cloud Infrastructure",
      desc: "Containerized deployments, automated backups, and 99.9% uptime SLAs.",
      icon: Layers,
    },
    {
      name: "LLM & Automation Tools",
      category: "Applied AI",
      desc: "Intelligent document parsing, structured triage, and workflow routing.",
      icon: Workflow,
    },
    {
      name: "Tailwind CSS & Motion",
      category: "Design System",
      desc: "Centralized design tokens and responsive micro-interactions.",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="technologies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Engineering Foundation"
          title="Battle-tested technologies engineered for"
          titleAccent="enterprise scale"
          description="We avoid fleeting trends and build on stable, proven technologies that ensure high performance, security, and effortless long-term maintainability."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-surface-muted border border-slate-200/80 hover:bg-white hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
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

