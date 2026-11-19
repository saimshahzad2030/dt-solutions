import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Clock,
  ShieldCheck,
  Linkedin,
  Building2,
  Landmark,
  CreditCard,
  Handshake,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ContactForm } from "@/components/shared/ContactForm";
import { companyData } from "@/data/company";
import { motionProps } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact Us | Start a Conversation",
  description:
    "Connect with DT Solutions regarding government digital transformation, FinTech payment infrastructure, enterprise software, partnerships, or general inquiries.",
  alternates: {
    canonical: "https://dtsolutions.pk/contact",
  },
};

export default function ContactPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyData.legalName,
    url: "https://dtsolutions.pk",
    logo: "https://dtsolutions.pk/dt-solutions-logo.png",
    email: companyData.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: companyData.country,
      addressLocality: "Pakistan",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };

  const inquiryTracks = [
    {
      icon: Landmark,
      title: "Government & Public Sector",
      desc: "Provincial tax, fee, challan, and e-government digitalisation initiatives.",
    },
    {
      icon: CreditCard,
      title: "Financial Institutions & FinTech",
      desc: "Payment gateways, provincial switches, Raast, 1LINK, 1BILL, and reconciliation.",
    },
    {
      icon: Building2,
      title: "Enterprise Clients",
      desc: "ERP/CRM platforms, BI dashboards, mobile/web apps, and security engineering.",
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      desc: "Consortium delivery, payment rail connectivity, and technology alliances.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <Breadcrumb
        items={[{ label: "Contact Us" }]}
        title="Connect With DT Solutions"
        description="Reach out for government digital transformation, FinTech payment infrastructure, enterprise software projects, strategic partnerships, or general inquiries."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Form */}
            <div className="lg:col-span-7 space-y-6" {...motionProps({ preset: "fade-up", delay: 100 })}>
              <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block">
                Structured Inquiry
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Tell Us About Your Programme or Technical Requirements
              </h2>

              <p className="text-muted text-base leading-relaxed">
                Select your stakeholder category and target solution vertical below so your inquiry is routed to the appropriate DT Solutions engineering or partnerships lead.
              </p>

              <ContactForm />
            </div>

            {/* Right Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8 lg:pl-6" {...motionProps({ preset: "fade-up", delay: 200 })}>
              <div className="p-8 rounded-3xl bg-surface-muted border border-slate-200/80 space-y-6 shadow-card-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full inline-block">
                  Direct Channels
                </span>

                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Contact Information
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted block font-semibold">Email</span>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="font-bold text-slate-900 hover:text-primary transition-colors text-base"
                      >
                        {companyData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary-light flex-shrink-0 shadow-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted block font-semibold">Operating Hours</span>
                      <span className="font-medium text-slate-800">
                        {companyData.operatingHours}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Official Profile
                  </span>
                  <a
                    href={companyData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>DT Solutions on LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Stakeholder Tracks */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h4 className="font-display text-base font-bold text-slate-900">
                  Inquiry Tracks We Support
                </h4>
                <div className="space-y-3">
                  {inquiryTracks.map((track) => {
                    const Icon = track.icon;
                    return (
                      <div key={track.title} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#f8f9fc] border border-slate-200 flex items-center justify-center text-[#5e6fb5] flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">
                            {track.title}
                          </span>
                          <span className="text-xs text-muted leading-relaxed">
                            {track.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Confidentiality Guidance (no unsupported blanket NDA claim) */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#5e6fb5]" />
                  <span>Information Handling &amp; Privacy</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Please share high-level project context in your initial message. Formal mutual confidentiality agreements can be executed prior to detailed technical documentation exchange. See our{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline font-semibold">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
