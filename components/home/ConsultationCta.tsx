"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";
import { companyData } from "@/data/company";
import { motionProps } from "@/components/motion";

export function ConsultationCta() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="contact-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#07132b] text-white">
          {/* Authentic Editech Footer Background Image */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/editech/h1-footer01.jpg"
              alt="Contact Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7 space-y-6" {...motionProps({ preset: "fade-up", delay: 50 })}>
                <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ee6196] uppercase block">
                  Contact us
                </span>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight">
                  We Are Always Here To Help You
                </h2>

                <p className="text-slate-300 text-base leading-relaxed max-w-xl">
                  Tell us what you need, current bottlenecks, and any relevant tools your team uses today. We will reply with a clear, practical next step within 24 hours.
                </p>

                <div className="pt-2">
                  <ContactForm />
                </div>
              </div>

              {/* Right Column: Contact Details Cards */}
              <div className="lg:col-span-5 space-y-6" {...motionProps({ preset: "fade-up", delay: 150 })}>
                <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-6">
                  <h3 className="font-heading text-xl font-bold text-white border-b border-white/10 pb-4">
                    Direct Contact
                  </h3>

                  <div className="space-y-5 text-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#5e6fb5] flex items-center justify-center text-white flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-heading uppercase tracking-wider">
                          Email Us Directly
                        </span>
                        <a
                          href={`mailto:${companyData.email}`}
                          className="font-bold text-white hover:text-[#ee6196] transition-colors text-base"
                        >
                          {companyData.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#ee6196] flex items-center justify-center text-white flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-heading uppercase tracking-wider">
                          Office Location
                        </span>
                        <span className="font-medium text-slate-200">
                          {companyData.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#5e6fb5] flex items-center justify-center text-white flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-heading uppercase tracking-wider">
                          Office Hours
                        </span>
                        <span className="font-medium text-slate-200">
                          {companyData.operatingHours}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-slate-300">
                    We reply within 24 hours to all enterprise inquiries with a concrete scoping proposal.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
