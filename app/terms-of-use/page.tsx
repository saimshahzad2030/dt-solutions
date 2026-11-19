import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "General terms governing access to and use of the DT SOLUTIONS (PRIVATE) LIMITED website.",
  alternates: {
    canonical: "https://dtsolutions.pk/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Terms of Use" }]}
        title="Terms of Use"
        description="General terms governing use of the DT Solutions informational website."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="p-5 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 text-xs text-muted">
            <strong>Legal Notice:</strong> These general terms govern informational use of this website for{" "}
            {companyData.legalName} and remain subject to formal corporate legal review.
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-[#121c32]">
              1. Informational Purpose
            </h2>
            <p>
              Content published on this website—including solution descriptions, project summaries, and technical insights—is provided for general corporate information only. Specific project scopes, service levels, timelines, and deliverables are governed exclusively by executed written agreements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-[#121c32]">
              2. Intellectual Property
            </h2>
            <p>
              All original text, branding, and site design elements are the property of {companyData.legalName} unless otherwise attributed. Third-party partner names and trademarks referenced on this website remain the property of their respective owners.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-[#121c32]">
              3. Project &amp; Collaboration Statements
            </h2>
            <p>
              Descriptions of collaborative initiatives—including platform delivery frameworks and planned rollout capabilities—are subject to applicable consortium, institutional, and operational agreements and may evolve over time.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-[#121c32]">
              4. Contact
            </h2>
            <p>
              Questions concerning these terms may be directed to{" "}
              <a href={`mailto:${companyData.email}`} className="text-[#5e6fb5] font-semibold hover:underline">
                {companyData.email}
              </a>{" "}
              or submitted via our{" "}
              <Link href="/contact" className="text-[#5e6fb5] font-semibold hover:underline">
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
