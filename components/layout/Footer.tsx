"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Send,
  CheckCircle,
} from "lucide-react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { motionProps, staggerProps } from "@/components/motion";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#07132b] text-slate-300 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* 4 Main Footer Columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10"
          {...staggerProps({ delay: 60, step: 80 })}
        >
          {/* Col 1: About — preserved exact logo */}
          <div className="lg:col-span-4 space-y-5" {...motionProps({ preset: "fade-up" })}>
            <Link href="/" className="inline-block bg-white p-2.5 rounded-xl">
              <Image
                src="/dt-solutions-logo.png"
                alt="DT Solutions"
                width={160}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {companyData.description}
            </p>

            {/* Socials */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#5e6fb5] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {companyData.socials.twitter && (
                <a
                  href={companyData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#5e6fb5] transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {companyData.socials.github && (
                <a
                  href={companyData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#5e6fb5] transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4" {...motionProps({ preset: "fade-up" })}>
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#ee6196]" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#ee6196]" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#ee6196]" /> Our Projects
                </Link>
              </li>
              <li>
                <Link href="/technology-security" className="hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#ee6196]" /> Tech &amp; Security
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#ee6196]" /> Our Partners
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#ee6196]" /> Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#ee6196]" /> Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#ee6196]" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions (5 Verticals) */}
          <div className="lg:col-span-3 space-y-4" {...motionProps({ preset: "fade-up" })}>
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider">
              Our Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-white inline-flex items-center gap-1.5 transition-colors text-slate-300"
                  >
                    <ArrowRight className="w-3 h-3 text-[#5e6fb5] flex-shrink-0" />
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Updates & Contact */}
          <div className="lg:col-span-3 space-y-4" {...motionProps({ preset: "fade-up" })}>
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider">
              Updates &amp; Contact
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Receive technical briefings, public-sector platform updates, and engineering insights from DT Solutions.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Thank you for registering your interest.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email"
                    aria-label="Business email for updates"
                    className="w-full px-4 py-3 pr-12 rounded-full bg-white/5 border border-white/15 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#ee6196]"
                  />
                  <button
                    type="submit"
                    aria-label="Submit newsletter"
                    className="absolute right-1.5 top-1.5 w-8 h-8 rounded-full bg-gradient-to-r from-[#ee6196] to-[#f78da7] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 space-y-1 text-xs text-slate-400">
              <div>
                Email:{" "}
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  {companyData.email}
                </a>
              </div>
              <div>Hours: {companyData.operatingHours}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} {companyData.legalName}. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
