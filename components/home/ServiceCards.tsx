"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Layout, Code2, Bot, LineChart, Network, CreditCard, ShieldAlert } from "lucide-react";
import { servicesData } from "@/data/services";
import { motionProps, staggerProps } from "@/components/motion";

export function ServiceCards() {
  const servicePhotos = [
    { slug: "web-design-development", img: "/editech/services-1.jpg", icon: Layout },
    { slug: "payment-gateway-integrations", img: "/editech/services-2.jpg", icon: CreditCard },
    { slug: "custom-software-development", img: "/editech/services-3.jpg", icon: Code2 },
    { slug: "ai-automation-workflows", img: "/editech/services-4.jpg", icon: Bot },
    { slug: "business-dashboards-portals", img: "/editech/services-5.jpg", icon: LineChart },
    { slug: "api-integrations", img: "/editech/services-1.jpg", icon: Network },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fc] relative overflow-hidden" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 4: Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-3" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
              Our Service
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              We Offer a Wide <br className="hidden sm:block" />
              Variety of IT Services
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 lg:text-right" {...motionProps({ preset: "fade-up", delay: 150 })}>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              We design and engineer enterprise web platforms, custom internal software, and payment integrations built around practical business constraints.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-[#5e6fb5] hover:text-[#ee6196] transition-colors group"
            >
              <span>All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Section 5: Editech Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" {...staggerProps({ delay: 60, step: 90 })}>
          {servicePhotos.map((item, index) => {
            const service = servicesData.find((s) => s.slug === item.slug) || servicesData[index];
            const Icon = item.icon;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(94,111,181,0.14)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                {...motionProps({ preset: "fade-up" })}
              >
                <div>
                  {/* Top Image with Icon Overlay */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Floating Circular Icon Badge */}
                    <div className="absolute -bottom-6 right-6 w-14 h-14 rounded-2xl bg-[#5e6fb5] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:bg-[#ee6196] group-hover:scale-110">
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
                  </div>
                </div>

                {/* Bottom Read More */}
                <div className="p-7 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#5e6fb5] group-hover:text-[#ee6196] transition-colors pt-4"
                  >
                    <span>Read more</span>
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
