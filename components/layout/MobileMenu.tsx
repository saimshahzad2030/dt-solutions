"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Mail, Clock, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { Button } from "@/components/shared/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mobileProjectLinks = [
  { label: "B-Pay Balochistan", href: "/portfolio/B-Pay-balochistan" },
  { label: "Payment Gateway & Integrations", href: "/portfolio/multi-bank-fintech-switch" },
  { label: "Government Digitisation", href: "/portfolio/institutional-digitization" },
  { label: "Enterprise Platforms", href: "/portfolio/enterprise-operations-portal" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        data-lenis-prevent
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 overflow-y-auto"
      >
        {/* Header — preserved exact logo */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/70">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src="/dt-solutions-logo.png"
              alt="DT Solutions"
              width={150}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full bg-slate-200/70 flex items-center justify-center text-slate-700 hover:bg-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 px-5 py-6 space-y-1.5">
          <Link
            href="/"
            onClick={onClose}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:text-primary hover:bg-slate-50 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:text-primary hover:bg-slate-50 transition-colors"
          >
            About Us
          </Link>

          {/* Solutions Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setSolutionsExpanded(!solutionsExpanded)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:text-primary hover:bg-slate-50 transition-colors"
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                  solutionsExpanded ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            {solutionsExpanded && (
              <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50/60 rounded-xl my-1 border border-slate-100">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block px-3 py-2 text-sm font-bold text-primary hover:underline"
                >
                  View All Solutions →
                </Link>
                {servicesData.map((svc) => (
                  <Link
                    key={svc.id}
                    href={`/services/${svc.slug}`}
                    onClick={onClose}
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-primary hover:bg-white rounded-lg transition-colors"
                  >
                    {svc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Our Projects Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setProjectsExpanded(!projectsExpanded)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:text-primary hover:bg-slate-50 transition-colors"
            >
              <span>Our Projects</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                  projectsExpanded ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            {projectsExpanded && (
              <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50/60 rounded-xl my-1 border border-slate-100">
                <Link
                  href="/portfolio"
                  onClick={onClose}
                  className="block px-3 py-2 text-sm font-bold text-primary hover:underline"
                >
                  All Projects →
                </Link>
                {mobileProjectLinks.map((proj) => (
                  <Link
                    key={proj.href}
                    href={proj.href}
                    onClick={onClose}
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-primary hover:bg-white rounded-lg transition-colors"
                  >
                    {proj.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/technology-security"
            onClick={onClose}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:text-primary hover:bg-slate-50 transition-colors"
          >
            Technology &amp; Security
          </Link>

          <Link
            href="/partners"
            onClick={onClose}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:text-primary hover:bg-slate-50 transition-colors"
          >
            Our Partners
          </Link>

          <Link
            href="/blog"
            onClick={onClose}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:text-primary hover:bg-slate-50 transition-colors"
          >
            Insights
          </Link>

          <Link
            href="/careers"
            onClick={onClose}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:text-primary hover:bg-slate-50 transition-colors"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:text-primary hover:bg-slate-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Action Button & Contact Info */}
        <div className="p-5 border-t border-slate-100 space-y-4 bg-slate-50/50">
          <Button
            href="/contact"
            variant="brand"
            size="md"
            className="w-full justify-center"
            onClick={onClose}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Conversation
          </Button>

          <div className="space-y-2 text-xs text-muted pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <a href={`mailto:${companyData.email}`} className="hover:text-primary">
                {companyData.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>{companyData.operatingHours}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
