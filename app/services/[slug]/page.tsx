import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Cpu,
  HelpCircle,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ContactForm } from "@/components/shared/ContactForm";
import { servicesData } from "@/data/services";
import { motionProps, staggerProps } from "@/components/motion";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | DT Solutions`,
    description: service.shortDesc,
    alternates: {
      canonical: `https://dtsolutions.pk/services/${service.slug}`,
    },
  };
}

export default function SingleServicePage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const servicePhotos: Record<string, string> = {
    "web-design-development": "/editech/services-1.jpg",
    "custom-software-development": "/editech/services-3.jpg",
    "ai-automation-workflows": "/editech/services-4.jpg",
    "business-dashboards-portals": "/editech/services-5.jpg",
    "api-integrations": "/editech/services-1.jpg",
    "payment-gateway-integrations": "/editech/services-2.jpg",
    "maintenance-support": "/editech/services-5.jpg",
  };

  const photo = servicePhotos[service.slug] || "/editech/services-1.jpg";
  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        title={service.title}
        description={service.shortDesc}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-10" {...motionProps({ preset: "fade-up", delay: 100 })}>
              {/* Featured Service Image */}
              <div className="relative h-[340px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={photo}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-white bg-[#ee6196] px-3.5 py-1.5 rounded-full shadow-md">
                    {service.number} // {service.badge}
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121c32] mb-4">
                  {service.title}
                </h2>
                <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                <div className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#121c32] mb-2">
                    Who This Service Is Built For
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.targetAudience}
                  </p>
                </div>
              </div>

              {/* Deliverables & Outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h3 className="font-heading text-lg font-bold text-[#121c32] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#5e6fb5]" />
                    <span>Typical Deliverables</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm text-muted">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#5e6fb5] font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h3 className="font-heading text-lg font-bold text-[#121c32] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Business Outcomes</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm text-muted">
                    {service.outcomes.map((o, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Features */}
              <div className="space-y-4 pt-2">
                <h3 className="font-heading text-2xl font-bold text-[#121c32]">
                  Core Capabilities &amp; Standards
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#f8f9fc] border border-slate-200/80 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <Cpu className="w-4 h-4 text-[#5e6fb5] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <h3 className="font-heading text-2xl font-bold text-[#121c32]">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 space-y-2"
                      >
                        <h4 className="font-heading text-base font-bold text-[#121c32] flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#5e6fb5]" />
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-muted leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-8 sticky top-28" {...motionProps({ preset: "fade-up", delay: 200 })}>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#121c32] mb-3">
                  Inquire About This Service
                </h3>
                <ContactForm defaultService={service.title} />
              </div>

              {/* Related Services */}
              <div className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 space-y-4">
                <h3 className="font-heading text-base font-bold text-[#121c32]">
                  Other Services
                </h3>
                <div className="space-y-2">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="block p-3 rounded-xl bg-white border border-slate-200 hover:border-[#5e6fb5]/40 transition-colors group"
                    >
                      <span className="font-heading text-sm font-bold text-slate-800 group-hover:text-[#5e6fb5] transition-colors block">
                        {rel.title}
                      </span>
                      <span className="text-[11px] text-muted line-clamp-1 mt-0.5 block">
                        {rel.shortDesc}
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
