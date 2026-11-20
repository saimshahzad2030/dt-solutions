import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motionProps } from "@/components/motion";

const brands = [
  { id: "brand-1", src: "/editech/brand-1.png", alt: "Ecosystem logo 1" },
  { id: "brand-2", src: "/editech/brand-2.jpg", alt: "Ecosystem logo 2" },
  { id: "brand-3", src: "/editech/brand-3.jpeg", alt: "Ecosystem logo 3" },
  { id: "brand-4", src: "/editech/brand-4.jpeg", alt: "Ecosystem logo 4" },
  { id: "brand-5", src: "/editech/brand-5.jpeg", alt: "Ecosystem logo 5" },
] as const;

export function BrandLogos() {
  return (
    <section
      className="py-12 bg-white border-y border-slate-100"
      {...motionProps({ preset: "fade", delay: 50 })}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-6">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Technology &amp; Ecosystem Collaborations
          </span>
          <Link
            href="/partners"
            className="font-heading text-xs font-semibold uppercase tracking-wider text-[#5e6fb5] hover:text-[#ee6196] transition-colors"
          >
            Our Partners →
          </Link>
        </div>

        {/* Seamless infinite horizontal logo marquee */}
        <div
          className="brand-marquee"
          role="region"
          aria-label="Technology and ecosystem partner logos"
        >
          <div className="brand-marquee-track">
            {/* Track Group 1 (contains two sequences to stay wider than wide viewports; second sequence hidden in reduced-motion) */}
            <div className="brand-marquee-group">
              {brands.map((brand) => (
                <div
                  key={`primary-${brand.id}`}
                  className="relative h-10 w-28 sm:w-32 flex-shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
              {brands.map((brand) => (
                <div
                  key={`primary-repeat-${brand.id}`}
                  aria-hidden="true"
                  className="brand-marquee-duplicate relative h-10 w-28 sm:w-32 flex-shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={brand.src}
                    alt=""
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Track Group 2 (exact mirror of Group 1 for seamless -50% loop) */}
            <div className="brand-marquee-group brand-marquee-duplicate" aria-hidden="true">
              {brands.map((brand) => (
                <div
                  key={`clone-a-${brand.id}`}
                  className="relative h-10 w-28 sm:w-32 flex-shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={brand.src}
                    alt=""
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
              {brands.map((brand) => (
                <div
                  key={`clone-b-${brand.id}`}
                  className="relative h-10 w-28 sm:w-32 flex-shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={brand.src}
                    alt=""
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
