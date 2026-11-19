import React from "react";
import { Landmark, CreditCard, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motionProps, staggerProps } from "@/components/motion";

export function WhyChooseUs() {
  const pillars = [
    {
      num: "01",
      icon: Landmark,
      title: "Government Technology",
      desc: "Digital challan, tax, and fee collection platforms paired with citizen self-service portals and departmental reporting consoles.",
    },
    {
      num: "02",
      icon: CreditCard,
      title: "FinTech Infrastructure",
      desc: "Payment gateway integrations, provincial payment switches, Raast, 1LINK, and 1BILL connectivity, and structured reconciliation.",
    },
    {
      num: "03",
      icon: Layers,
      title: "Enterprise Solutions",
      desc: "Role-based ERP and CRM systems, business intelligence dashboards, workflow automation, and scalable web and mobile platforms.",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Security & Infrastructure",
      desc: "Encryption, access control, audit logging, secure API design, cloud resilience, and PCI DSS readiness engineering.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fc] relative overflow-hidden" id="why-us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" {...motionProps({ preset: "fade-up", delay: 50 })}>
          <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
            CORE FOCUS AREAS
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
            Where DT Solutions Delivers <br />
            Measurable Institutional Value
          </h2>
        </div>

        {/* 4 Focus Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" {...staggerProps({ delay: 60, step: 80 })}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 border border-slate-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(94,111,181,0.12)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                {...motionProps({ preset: "fade-up" })}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center group-hover:bg-[#ee6196] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold text-slate-200 group-hover:text-[#ee6196]/20 transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#121c32] group-hover:text-[#5e6fb5] transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Focus {pillar.num}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#5e6fb5]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
