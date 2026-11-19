"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Landmark,
  CreditCard,
  Code2,
  Smartphone,
  ShieldCheck,
  Briefcase,
  Layers,
  Building2,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { MobileMenu } from "./MobileMenu";

const projectNavItems = [
  {
    title: "B-Pay Balochistan",
    badge: "Flagship",
    desc: "Provincial digital payment & revenue collection platform (with PayFast).",
    href: "/portfolio/B-Pay-balochistan",
    icon: Landmark,
    color: "text-[#ee6196]",
  },
  {
    title: "Payment Gateway & Integrations",
    badge: "FinTech",
    desc: "Multi-channel payment rails, verification, and reconciliation middleware.",
    href: "/portfolio/multi-bank-fintech-switch",
    icon: CreditCard,
    color: "text-[#5e6fb5]",
  },
  {
    title: "Government Digitisation",
    badge: "Public Sector",
    desc: "E-filing, role-based approvals, and auditable administrative workflows.",
    href: "/portfolio/institutional-digitization",
    icon: Building2,
    color: "text-[#ee6196]",
  },
  {
    title: "Enterprise Platforms",
    badge: "Enterprise",
    desc: "Operational web portals, BI dashboards, and workflow automation.",
    href: "/portfolio/enterprise-operations-portal",
    icon: Layers,
    color: "text-[#5e6fb5]",
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"solutions" | "projects" | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Landmark":
        return <Landmark className="w-4 h-4 text-[#ee6196]" />;
      case "CreditCard":
        return <CreditCard className="w-4 h-4 text-[#5e6fb5]" />;
      case "Code2":
        return <Code2 className="w-4 h-4 text-[#5e6fb5]" />;
      case "Smartphone":
        return <Smartphone className="w-4 h-4 text-[#ee6196]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-[#5e6fb5]" />;
      default:
        return <Briefcase className="w-4 h-4 text-[#5e6fb5]" />;
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Solutions", href: "/services", dropdown: "solutions" as const },
    { name: "Our Projects", href: "/portfolio", dropdown: "projects" as const },
    { name: "Technology & Security", href: "/technology-security" },
    { name: "Our Partners", href: "/partners" },
    { name: "Insights", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(7,19,43,0.08)] py-3.5"
            : "bg-white py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo — preserved exact image & dimensions */}
            <Link href="/" className="flex items-center group relative z-10 flex-shrink-0">
              <Image
                src="/dt-solutions-logo.png"
                alt="DT Solutions"
                width={175}
                height={46}
                priority
                className="h-9 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.dropdown === "solutions") {
                  const isOpen = openDropdown === "solutions";
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown("solutions")}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={link.href}
                        onFocus={() => setOpenDropdown("solutions")}
                        className={`inline-flex items-center gap-1 px-2 xl:px-2.5 py-2 text-[13px] xl:text-[14px] font-heading font-semibold uppercase tracking-wide whitespace-nowrap transition-colors ${
                          isActive
                            ? "text-[#5e6fb5]"
                            : "text-[#212529] hover:text-[#5e6fb5]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#5e6fb5]" : "text-slate-400"
                          }`}
                        />
                      </Link>

                      {isOpen && (
                        <div className="absolute top-full left-0 w-[440px] pt-3 z-50">
                          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 overflow-hidden">
                            <div className="px-3 py-2 border-b border-slate-100 mb-2 flex items-center justify-between bg-slate-50/70 rounded-xl">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Five Business Verticals
                              </span>
                              <Link
                                href="/services"
                                className="text-xs font-semibold text-[#5e6fb5] hover:underline inline-flex items-center gap-1"
                              >
                                All Solutions <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>

                            <div className="space-y-1">
                              {servicesData.map((svc) => (
                                <Link
                                  key={svc.id}
                                  href={`/services/${svc.slug}`}
                                  onClick={() => setOpenDropdown(null)}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#5e6fb5]/5 transition-all duration-200"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5e6fb5]/10 transition-colors">
                                    {getServiceIcon(svc.iconName)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                      <p className="text-sm font-bold text-slate-800 group-hover:text-[#5e6fb5] transition-colors truncate">
                                        {svc.title}
                                      </p>
                                      <span className="text-[10px] font-semibold text-[#ee6196] bg-[#ee6196]/10 px-2 py-0.5 rounded-full flex-shrink-0">
                                        {svc.badge}
                                      </span>
                                    </div>
                                    <p className="text-xs text-muted line-clamp-1 mt-0.5">
                                      {svc.shortDesc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.dropdown === "projects") {
                  const isOpen = openDropdown === "projects";
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown("projects")}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={link.href}
                        onFocus={() => setOpenDropdown("projects")}
                        className={`inline-flex items-center gap-1 px-2 xl:px-2.5 py-2 text-[13px] xl:text-[14px] font-heading font-semibold uppercase tracking-wide whitespace-nowrap transition-colors ${
                          isActive
                            ? "text-[#5e6fb5]"
                            : "text-[#212529] hover:text-[#5e6fb5]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#5e6fb5]" : "text-slate-400"
                          }`}
                        />
                      </Link>

                      {isOpen && (
                        <div className="absolute top-full left-0 w-[400px] pt-3 z-50">
                          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 overflow-hidden">
                            <div className="px-3 py-2 border-b border-slate-100 mb-2 flex items-center justify-between bg-slate-50/70 rounded-xl">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Featured Projects &amp; Case Studies
                              </span>
                              <Link
                                href="/portfolio"
                                className="text-xs font-semibold text-[#5e6fb5] hover:underline inline-flex items-center gap-1"
                              >
                                View all <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>

                            <div className="space-y-1">
                              {projectNavItems.map((proj) => {
                                const Icon = proj.icon;
                                return (
                                  <Link
                                    key={proj.href}
                                    href={proj.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#5e6fb5]/5 transition-all duration-200"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5e6fb5]/10 transition-colors">
                                      <Icon className={`w-4 h-4 ${proj.color}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-2">
                                        <p className="text-sm font-bold text-slate-800 group-hover:text-[#5e6fb5] transition-colors truncate">
                                          {proj.title}
                                        </p>
                                        <span className="text-[10px] font-semibold text-[#ee6196] bg-[#ee6196]/10 px-2 py-0.5 rounded-full flex-shrink-0">
                                          {proj.badge}
                                        </span>
                                      </div>
                                      <p className="text-xs text-muted line-clamp-1 mt-0.5">
                                        {proj.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-2 xl:px-2.5 py-2 text-[13px] xl:text-[14px] font-heading font-semibold uppercase tracking-wide whitespace-nowrap transition-colors ${
                      isActive
                        ? "text-[#5e6fb5]"
                        : "text-[#212529] hover:text-[#5e6fb5]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right side Contact Us CTA & Mobile trigger */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] hover:from-[#e34682] hover:to-[#ee6196] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-md shadow-[#ee6196]/25 hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile menu trigger */}
              <button
                type="button"
                aria-label="Open mobile menu"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-[#5e6fb5] hover:bg-slate-100 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
