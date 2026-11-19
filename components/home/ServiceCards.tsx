import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Landmark,
  CreditCard,
  Code2,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { motionProps, staggerProps } from "@/components/motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  CreditCard,
  Code2,
  Smartphone,
  ShieldCheck,
};

export function ServiceCards() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fc] relative overflow-hidden" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-3" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
              Our Solutions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              Five Core Technology &amp; <br className="hidden sm:block" />
              Transformation Verticals
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 lg:text-right" {...motionProps({ preset: "fade-up", delay: 150 })}>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              We focus on public-sector digitalisation, payment infrastructure, enterprise software, scalable digital platforms, and security engineering.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-[#5e6fb5] hover:text-[#ee6196] transition-colors group"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 5 Business Verticals Cards — preserving exact Editech card design & images */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          {...staggerProps({ delay: 60, step: 90 })}
        >
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Code2;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(94,111,181,0.14)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                {...motionProps({ preset: "fade-up" })}
              >
                <div>
                  {/* Top Image with Icon Overlay — preserved exact paths & styling */}
                  <div className="relative h-56 w-full">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Floating Icon Badge */}
                    <div className="absolute -bottom-6 right-6 z-10 w-14 h-14 rounded-2xl bg-[#5e6fb5] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:bg-[#ee6196] group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 pt-9">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#ee6196] block mb-2 font-heading">
                      {service.badge}
                    </span>

                    <h3 className="font-heading text-xl font-bold text-[#121c32] group-hover:text-[#5e6fb5] transition-colors mb-3 leading-snug">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <li key={cap} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5e6fb5] flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Read More */}
                <div className="p-7 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#5e6fb5] group-hover:text-[#ee6196] transition-colors pt-4"
                  >
                    <span>Explore Vertical</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <span className="text-xs font-mono text-slate-300 pt-4">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
