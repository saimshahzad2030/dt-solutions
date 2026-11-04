import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";
import { motionProps } from "@/components/motion";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  title?: string;
  description?: string;
}

export function Breadcrumb({ items, title, description }: BreadcrumbProps) {
  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://dtsolutions.pk",
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.label,
      item: item.href ? `https://dtsolutions.pk${item.href}` : undefined,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <div className="relative bg-[#07132b] text-white pt-36 pb-20 overflow-hidden border-b border-primary/20">
      {/* Authentic Editech Breadcrumb Background Image */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/editech/bg-breadcrumb.jpg"
          alt="Breadcrumb Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center" {...motionProps({ preset: "fade-up", delay: 100 })}>
        {title && (
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            {title}
          </h1>
        )}

        {description && (
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            {description}
          </p>
        )}

        <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center">
          <ol className="inline-flex items-center space-x-2 text-xs font-heading font-semibold uppercase tracking-wider text-slate-300 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200"
              >
                <Home className="w-3.5 h-3.5 text-[#ee6196]" />
                <span>Home</span>
              </Link>
            </li>

            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={index} className="inline-flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 mx-1 flex-shrink-0" />
                  {isLast || !item.href ? (
                    <span className="font-bold text-[#ee6196] truncate max-w-[200px] sm:max-w-none">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
