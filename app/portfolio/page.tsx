import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PortfolioShowcase } from "@/components/home/PortfolioShowcase";
import { FlagshipShowcase } from "@/components/home/FlagshipShowcase";
import { BrandLogos } from "@/components/home/BrandLogos";
import { ConsultationCta } from "@/components/home/ConsultationCta";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | DT Solutions",
  description:
    "Explore DT Solutions' enterprise case studies, including the flagship B-Pay Balochistan platform, government digitization, multi-bank switches, and workflow automations.",
  alternates: {
    canonical: "https://dtsolutions.pk/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Portfolio" }]}
        title="Case studies presented with clarity, business context, and visible outcomes"
        description="We keep our presentation clean and grounded, highlighting the technical architecture, business constraints, and measurable outcomes behind each system."
      />

      {/* Flagship Initiative Highlight */}
      <FlagshipShowcase />

      {/* Complete Filterable Projects Grid */}
      <PortfolioShowcase />

      {/* Partner Logos Bar */}
      <BrandLogos />

      {/* Consultation Banner */}
      <ConsultationCta />
    </>
  );
}
