import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PortfolioShowcase } from "@/components/home/PortfolioShowcase";
import { FlagshipShowcase } from "@/components/home/FlagshipShowcase";
import { BrandLogos } from "@/components/home/BrandLogos";
import { ConsultationCta } from "@/components/home/ConsultationCta";

export const metadata: Metadata = {
  title: "Our Projects | B-Pay Balochistan & Case Studies",
  description:
    "Explore DT Solutions' flagship provincial digital payment platform B-Pay Balochistan (in collaboration with PayFast), government digitisation, payment infrastructure, and enterprise platforms.",
  alternates: {
    canonical: "https://dtsolutions.pk/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Our Projects" }]}
        title="Flagship Provincial Initiatives & Enterprise Case Studies"
        description="A transparent overview of our public-sector digital payment delivery alongside anonymised engagements across government digitisation, payment integration, and enterprise platforms."
      />

      {/* Flagship B-Pay Highlight */}
      <FlagshipShowcase />

      {/* Complete Filterable Projects Grid */}
      <PortfolioShowcase />

      {/* Ecosystem Logos Bar */}
      <BrandLogos />

      {/* Consultation Banner */}
      <ConsultationCta />
    </>
  );
}
