"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motionProps } from "@/components/motion";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "GROWTH YOUR BUSINESS",
      titlePart1: "From Idea to",
      titlePart2: "Products",
      description:
        "Get professional & reliable research-oriented solutions for Enterprise Software, Provincial Payment Switches, and Business Automation needs.",
      buttonText: "Get Started",
      buttonLink: "/contact",
      secondaryText: "Explore Services",
      secondaryLink: "/services",
      mainImage: "/editech/slider-h1-1.png",
      shapes: [
        { src: "/editech/slider-h1-shape-1.png", className: "absolute -top-6 left-4 w-16 h-16 animate-float-slow opacity-90 z-10" },
        { src: "/editech/slider-h1-shape-2.png", className: "absolute bottom-10 left-0 w-20 h-20 animate-float-slow [animation-delay:1.5s] opacity-90 z-10" },
        { src: "/editech/slider-h1-shape-3.png", className: "absolute top-4 right-10 w-16 h-16 animate-float-slow [animation-delay:3s] opacity-90 z-10" },
      ],
    },
    {
      subtitle: "ENTERPRISE TRANSFORMATION",
      titlePart1: "Digital Systems",
      titlePart2: "Built to Scale",
      description:
        "Architecting robust high-throughput financial switches, executive dashboards, and AI automation for global enterprises with 24/7 dedicated support.",
      buttonText: "Start a Project",
      buttonLink: "/contact",
      secondaryText: "Our Case Studies",
      secondaryLink: "/portfolio",
      mainImage: "/editech/slider-h1-2.png",
      shapes: [
        { src: "/editech/slider-h1-shape-4.png", className: "absolute top-8 left-12 w-20 h-20 animate-float-slow opacity-90 z-10" },
        { src: "/editech/slider-h1-shape-5.png", className: "absolute bottom-12 right-8 w-24 h-24 animate-float-slow [animation-delay:2s] opacity-90 z-10" },
      ],
    },
  ];

  // Auto-play slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center bg-[#fdfdfd]">
      {/* Authentic Editech Slider Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/editech/slider-h1-bg-1.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft light overlay without expensive full-screen backdrop-filter */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Subtitle in Pink Barlow */}
            <div className="inline-flex items-center gap-2" {...motionProps({ preset: "fade-up", delay: 100 })}>
              <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase">
                {slide.subtitle}
              </span>
            </div>

            {/* Massive Heading */}
            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#121c32] leading-[1.12] tracking-tight"
              {...motionProps({ preset: "fade-up", delay: 200 })}
            >
              {slide.titlePart1} <br />
              <span className="text-[#5e6fb5] underline decoration-[#ee6196]/40 underline-offset-8">
                {slide.titlePart2}
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-muted text-base sm:text-lg leading-relaxed max-w-xl font-normal"
              {...motionProps({ preset: "fade-up", delay: 300 })}
            >
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 pt-3"
              {...motionProps({ preset: "fade-up", delay: 400 })}
            >
              <Link
                href={slide.buttonLink}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] hover:from-[#e34682] hover:to-[#ee6196] text-white font-heading font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#ee6196]/30 hover:shadow-xl transition-all active:scale-95 group"
              >
                <span>{slide.buttonText}</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#ee6196] flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                href={slide.secondaryLink}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#5e6fb5]/30 hover:border-[#5e6fb5] text-[#5e6fb5] hover:bg-[#5e6fb5] hover:text-white font-heading font-bold text-sm uppercase tracking-wider transition-all"
              >
                <span>{slide.secondaryText}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Authentic Isometric Illustration & Floating Shapes */}
          <div
            className="lg:col-span-6 relative flex items-center justify-center"
            {...motionProps({ preset: "scale-in", delay: 250 })}
          >
            <div className="relative w-full max-w-[560px] h-[360px] sm:h-[450px] lg:h-[520px]">
              {/* Floating Decorative Shapes */}
              {slide.shapes.map((shape, i) => (
                <div key={i} className={shape.className}>
                  <Image
                    src={shape.src}
                    alt="Floating decorative shape"
                    width={100}
                    height={100}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}

              {/* Main Isometric Illustration */}
              <div className="relative w-full h-full flex items-center justify-center z-10 transition-all duration-700 ease-out transform">
                <Image
                  src={slide.mainImage}
                  alt="Editech Enterprise IT Illustration"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl animate-float-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls (Prev / Next Buttons) */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-[#5e6fb5] shadow-md items-center justify-center transition-all z-20 border border-slate-200"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-[#5e6fb5] shadow-md items-center justify-center transition-all z-20 border border-slate-200"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx
              ? "w-8 bg-[#ee6196]"
              : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
