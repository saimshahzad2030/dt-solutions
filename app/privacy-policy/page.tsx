import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DT SOLUTIONS (PRIVATE) LIMITED handles website inquiries and contact information.",
  alternates: {
    canonical: "https://dtsolutions.pk/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Privacy Policy" }]}
        title="Privacy Policy"
        description="Information handling practices for visitors and prospective partners contacting DT Solutions."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="p-5 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 text-xs text-muted">
            <strong>Policy Notice:</strong> This summary outlines general website inquiry handling for{" "}
            {companyData.legalName} and is subject to formal legal review and updates prior to publication of jurisdiction-specific legal disclosures.
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-[#121c32]">
              1. Information You Provide
            </h2>
            <p>
              When you submit an inquiry through our website or send an email to{" "}
              <a href={`mailto:${companyData.email}`} className="text-[#5e6fb5] font-semibold hover:underline">
                {companyData.email}
              </a>
              , you may provide your name, organisation, email address, contact number, inquiry category, and project summary.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-[#121c32]">
              2. How Information Is Used
            </h2>
            <p>
              Submitted contact information is used solely to review your request, route it to the relevant engineering or partnerships team, and respond to your inquiry. We do not sell personal contact details to third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-[#121c32]">
              3. Confidential Information &amp; NDAs
            </h2>
            <p>
              Initial website contact forms are intended for general project scoping and are not automatically governed by a non-disclosure agreement. Please avoid submitting restricted credentials, personal citizen records, or confidential specifications via web forms. Formal mutual confidentiality agreements may be executed upon request before detailed technical discovery.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-bold text-[#121c32]">
              4. Contact Regarding Privacy
            </h2>
            <p>
              If you have questions regarding information submitted to this website or would like us to update or remove your inquiry details, please contact{" "}
              <a href={`mailto:${companyData.email}`} className="text-[#5e6fb5] font-semibold hover:underline">
                {companyData.email}
              </a>{" "}
              or visit our{" "}
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
