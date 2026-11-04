import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motionProps } from "@/components/motion";

export function CtaStrip() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#5e6fb5] to-[#ee6196] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-white/80 font-bold block mb-2">
              Transform Your Systems
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white leading-tight">
              Ready to Upgrade Your Digital Infrastructure &amp; Workflows?
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4" {...motionProps({ preset: "fade-up", delay: 150 })}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#5e6fb5] hover:bg-slate-50 font-heading font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/40 hover:border-white text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

