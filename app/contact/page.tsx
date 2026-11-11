import React from "react";
import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Linkedin,
  Phone,
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { companyData } from "@/data/company";
import { motionProps } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact Us | Start a Conversation | DT Solutions",
  description:
    "Get in touch with DT Solutions engineering leads. Tell us about your website, custom software, or automation requirements for a clear, practical roadmap.",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <Breadcrumb
        items={[{ label: "Contact Us" }]}
        title="Looking to improve a process, website, or internal system?"
        description="Tell us what you need, which tools you use today, and where your team gets stuck. We will reply with a clear, practical next step."
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Form */}
            <div className="lg:col-span-7 space-y-6" {...motionProps({ preset: "fade-up", delay: 100 })}>
              <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block">
                Project Enquiry
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Start with a clear, practical conversation
              </h2>

              <p className="text-muted text-base leading-relaxed">
                Use the structured inquiry form below to outline your project goals. This helps our technical leads review your requirements and prepare a grounded, thoughtful initial scope discussion.
              </p>

              <ContactForm />
            </div>

            {/* Right Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8 lg:pl-6" {...motionProps({ preset: "fade-up", delay: 200 })}>
              <div className="p-8 rounded-3xl bg-surface-muted border border-slate-200/80 space-y-6 shadow-card-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full inline-block">
                  Direct Contact
                </span>

                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Connect with Engineering Leads
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted block font-semibold">Direct Email</span>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="font-bold text-slate-900 hover:text-primary transition-colors text-base"
                      >
                        {companyData.email}
                      </a>
                    </div>
                  </div>

                  {/* <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-accent flex-shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted block font-semibold">Location</span>
                      <span className="font-medium text-slate-800">
                        {companyData.location}
                      </span>
                    </div>
                  </div> */}

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

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted block font-semibold">Response Commitment</span>
                      <span className="font-bold text-emerald-700">
                        We reply within 24 hours
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Follow &amp; Verify Us
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

              {/* Security and Privacy Assurance */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Enterprise Confidentiality &amp; NDA</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Every technical discovery conversation and shared document is protected by default enterprise confidentiality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

