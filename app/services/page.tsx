import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Layout,
  Code2,
  Bot,
  LineChart,
  Network,
  CreditCard,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BrandLogos } from "@/components/home/BrandLogos";
import { servicesData } from "@/data/services";
import { motionProps, staggerProps } from "@/components/motion";

export const metadata: Metadata = {
  title: "Services | Specialized IT & Software Engineering",
  description:
    "Explore DT Solutions' service lines: Web Design & Development, Custom Software, AI Automation, Dashboards, API Integrations, and Payment Gateways.",
  alternates: {
    canonical: "https://dtsolutions.pk/services",
  },
};

export default function ServicesPage() {
  const servicePhotos = [
    { slug: "web-design-development", img: "/editech/services-1.jpg", icon: Layout },
    { slug: "custom-software-development", img: "/editech/services-3.jpg", icon: Code2 },
    { slug: "ai-automation-workflows", img: "/editech/services-4.jpg", icon: Bot },
    { slug: "business-dashboards-portals", img: "/editech/services-5.jpg", icon: LineChart },
    { slug: "api-integrations", img: "/editech/services-1.jpg", icon: Network },
    { slug: "payment-gateway-integrations", img: "/editech/services-2.jpg", icon: CreditCard },
    { slug: "maintenance-support", img: "/editech/services-5.jpg", icon: ShieldAlert },
  ];

  return (
    <>
      <Breadcrumb
        items={[{ label: "Services" }]}
        title="Services designed for businesses that want clear digital progress"
        description="Every service is shaped around real workflows, business constraints, and the need for dependable communication from first call to launch."
      />

      {/* Main Services List */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" {...motionProps({ preset: "fade-up", delay: 50 })}>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block mb-3">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#121c32] leading-tight">
              Focused Service Lines with Practical Outcomes
            </h2>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto" {...staggerProps({ delay: 60, step: 90 })}>
            {servicesData.map((service, index) => {
              const photo = servicePhotos[index]?.img || "/editech/services-1.jpg";

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-[#f8f9fc] rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#5e6fb5]/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(94,111,181,0.12)]"
                  {...motionProps({ preset: "fade-up" })}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    {/* Image Column */}
                    <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
                      <Image
                        src={photo}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
                      <div className="absolute top-6 left-6">
                        <span className="font-heading text-xs font-bold uppercase tracking-wider text-white bg-[#ee6196] px-3.5 py-1 rounded-full shadow-md">
                          {service.number} // {service.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#121c32] leading-tight">
                          <Link href={`/services/${service.slug}`} className="hover:text-[#5e6fb5] transition-colors">
                            {service.title}
                          </Link>
                        </h2>

                        <p className="text-muted text-sm leading-relaxed">
                          {service.fullDesc}
                        </p>

                        <div className="p-4 rounded-xl bg-white border border-slate-200/70 text-xs">
                          <span className="font-bold text-slate-800 block mb-1">
                            Who it is for:
                          </span>
                          <p className="text-muted">{service.targetAudience}</p>
                        </div>

                        {/* Deliverables snippet */}
                        <div className="space-y-2 pt-2">
                          <span className="font-heading text-xs font-bold uppercase tracking-wider text-slate-800 block">
                            Typical Deliverables:
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted">
                            {service.deliverables.slice(0, 4).map((item, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#5e6fb5] flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#5e6fb5] hover:text-[#ee6196] transition-colors"
                        >
                          <span>Deep Dive Service Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/contact"
                          className="text-xs text-slate-500 hover:text-slate-800 underline"
                        >
                          Talk about this service
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <BrandLogos />
    </>
  );
}
