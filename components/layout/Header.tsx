"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Phone,
  Layout,
  Code2,
  Bot,
  LineChart,
  Network,
  CreditCard,
  ShieldAlert,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
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

  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Layout":
        return <Layout className="w-4 h-4 text-[#5e6fb5]" />;
      case "Code2":
        return <Code2 className="w-4 h-4 text-[#5e6fb5]" />;
      case "Bot":
        return <Bot className="w-4 h-4 text-[#ee6196]" />;
      case "LineChart":
        return <LineChart className="w-4 h-4 text-[#5e6fb5]" />;
      case "Network":
        return <Network className="w-4 h-4 text-[#ee6196]" />;
      case "CreditCard":
        return <CreditCard className="w-4 h-4 text-[#5e6fb5]" />;
      default:
        return <ShieldAlert className="w-4 h-4 text-[#ee6196]" />;
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
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
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-10 flex-shrink-0">
              <Image
                src="/dt-solutions-logo.png"
                alt="DT Solutions"
                width={175}
                height={46}
                priority
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdown(true)}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-[15px] font-heading font-semibold uppercase tracking-wide transition-colors ${
                          isActive
                            ? "text-[#5e6fb5]"
                            : "text-[#212529] hover:text-[#5e6fb5]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesDropdown ? "rotate-180 text-[#5e6fb5]" : "text-slate-400"
                          }`}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdown && (
                        <div className="absolute top-full left-0 w-[420px] pt-3 z-50">
                          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 overflow-hidden">
                            <div className="px-3 py-2 border-b border-slate-100 mb-2 flex items-center justify-between bg-slate-50/70 rounded-xl">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Specialized IT Services
                              </span>
                              <Link
                                href="/services"
                                className="text-xs font-semibold text-[#5e6fb5] hover:underline inline-flex items-center gap-1"
                              >
                                View all <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>

                            <div className="space-y-1">
                              {servicesData.map((svc) => (
                                <Link
                                  key={svc.id}
                                  href={`/services/${svc.slug}`}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#5e6fb5]/5 transition-all duration-200"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5e6fb5]/10 transition-colors">
                                    {getServiceIcon(svc.iconName)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <p className="text-sm font-bold text-slate-800 group-hover:text-[#5e6fb5] transition-colors">
                                        {svc.title}
                                      </p>
                                      <span className="text-[10px] font-semibold text-[#ee6196] bg-[#ee6196]/10 px-2 py-0.5 rounded-full">
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

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-[15px] font-heading font-semibold uppercase tracking-wide transition-colors ${
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

            {/* Right side Phone Box & CTA Button */}
            <div className="flex items-center space-x-5">
              {/* Editech Phone Widget */}
              <div className="hidden xl:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5e6fb5]/10 text-[#5e6fb5] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#677289] block leading-tight">
                    Have Any Questions?
                  </span>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="font-heading text-sm font-bold text-[#212529] hover:text-[#5e6fb5] transition-colors leading-tight"
                  >
                    {companyData.email}
                  </a>
                </div>
              </div>

              {/* Editech Gradient CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] hover:from-[#e34682] hover:to-[#ee6196] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-md shadow-[#ee6196]/25 hover:shadow-lg transition-all active:scale-95"
              >
                <span>Get a Quote</span>
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
