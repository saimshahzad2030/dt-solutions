import React from "react";
import Image from "next/image";
import { motionProps, staggerProps } from "@/components/motion";

export function BrandLogos() {
  const brands = [
    "/editech/brand-1.svg",
    "/editech/brand-2.svg",
    "/editech/brand-3.svg",
    "/editech/brand-4.svg",
    "/editech/brand-5.svg",
    "/editech/brand-6.svg",
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100" {...motionProps({ preset: "fade", delay: 50 })}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-wrap items-center justify-center lg:justify-between gap-8 sm:gap-12 opacity-65 hover:opacity-100 transition-opacity"
          {...staggerProps({ delay: 50, step: 60 })}
        >
          {brands.map((src, idx) => (
            <div
              key={idx}
              className="relative h-10 w-28 sm:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              {...motionProps({ preset: "fade" })}
            >
              <Image
                src={src}
                alt={`Partner Brand ${idx + 1}`}
                width={120}
                height={40}
                className="max-h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

