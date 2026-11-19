import React from "react";
import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { FlagshipShowcase } from "@/components/home/FlagshipShowcase";
import { AboutIntro } from "@/components/home/AboutIntro";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CtaStrip } from "@/components/home/CtaStrip";
import { PortfolioShowcase } from "@/components/home/PortfolioShowcase";
import { StatsCounter } from "@/components/home/StatsCounter";
import { Testimonials } from "@/components/home/Testimonials";
import { BrandLogos } from "@/components/home/BrandLogos";
import { LatestBlog } from "@/components/home/LatestBlog";
import { ConsultationCta } from "@/components/home/ConsultationCta";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Slider with Digital Transformation & B-Pay Positioning */}
      <Hero />

      {/* 2. Five Core Business Verticals */}
      <ServiceCards />

      {/* 3. Flagship Project Prominence: B-Pay – Government of Balochistan */}
      <FlagshipShowcase />

      {/* 4. About DT Solutions */}
      <AboutIntro />

      {/* 5. Four Core Focus Areas */}
      <WhyChooseUs />

      {/* 6. Representative & Anonymised Case Studies */}
      <PortfolioShowcase />

      {/* 7. Technology & Security Engineering Foundations */}
      <StatsCounter />

      {/* 8. Delivery Ethos & Core Domain Capabilities */}
      <Testimonials />

      {/* 9. Ecosystem & Collaboration Logos */}
      <BrandLogos />

      {/* 10. Corporate CTA Strip */}
      <CtaStrip />

      {/* 11. Latest Insights */}
      <LatestBlog />

      {/* 12. Consultation & Inquiry Section */}
      <ConsultationCta />
    </>
  );
}
