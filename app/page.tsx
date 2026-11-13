import React from "react";
import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { AboutIntro } from "@/components/home/AboutIntro";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CtaStrip } from "@/components/home/CtaStrip";
import { PortfolioShowcase } from "@/components/home/PortfolioShowcase";
import { StatsCounter } from "@/components/home/StatsCounter";
import { FlagshipShowcase } from "@/components/home/FlagshipShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { BrandLogos } from "@/components/home/BrandLogos";
import { LatestBlog } from "@/components/home/LatestBlog";
import { ConsultationCta } from "@/components/home/ConsultationCta";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Revolution Slider with Authentic Editech Graphics & Floating Shapes */}
      <Hero />

      {/* 2. Services Header & Authentic Service Cards */}
      <ServiceCards />

      {/* 3. About Us with Authentic Composite Banner & Experience Badge */}
      <AboutIntro />

      {/* 4. Why Choose Us with 4 Core Pillars */}
      <WhyChooseUs />

      {/* 5. Agency Excited Gradient CTA Strip */}
      <CtaStrip />

      {/* 6. Explore Recent Projects Portfolio Showcase */}
      <PortfolioShowcase />

      {/* 7. Experts With Experience Mosaic (4 Authentic Staggered Photos + 50+ Counter) */}
      <StatsCounter />

      {/* 8. Active Engagement: B-Pay Balochistan Platform Showcase */}
      <FlagshipShowcase />

      {/* 9. Testimonial & Technology Index Progress Bars */}
      <Testimonials />

      {/* 10. Partner / Client Brand SVGs Carousel */}
      {/* <BrandLogos /> */}

      {/* 11. Latest Blog Posts Grid */}
      <LatestBlog />

      {/* 12. Contact Consultation Section with Authentic Footer Background */}
      <ConsultationCta />
    </>
  );
}
