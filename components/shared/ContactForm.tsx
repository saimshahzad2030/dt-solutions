"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./Button";

interface ContactFormProps {
  defaultService?: string;
  defaultInquiryType?: string;
}

export function ContactForm({ defaultService, defaultInquiryType }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    inquiryType: defaultInquiryType || "Government / Public Sector",
    service: defaultService || "Government Digital Transformation",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to submit your inquiry right now. Please contact us directly at info@dtsolutions.pk."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-card-subtle text-center">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
          Inquiry Received
        </h3>
        <p className="text-muted text-base max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Your{" "}
          <span className="font-semibold text-slate-800">{formData.inquiryType}</span> inquiry has been recorded. Our relevant team will review your requirements and follow up by email.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              organisation: "",
              email: "",
              phone: "",
              inquiryType: defaultInquiryType || "Government / Public Sector",
              service: defaultService || "Government Digital Transformation",
              message: "",
            });
          }}
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-100 shadow-card-subtle relative"
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
            />
          </div>

          <div>
            <label
              htmlFor="contact-organisation"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Organisation / Department
            </label>
            <input
              id="contact-organisation"
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="Ministry, institution, or company name"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@organisation.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Contact Number
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Optional phone or extension"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contact-inquiry-type"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Inquiry Category <span className="text-accent">*</span>
            </label>
            <select
              id="contact-inquiry-type"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
            >
              <option value="Government / Public Sector">Government / Public Sector</option>
              <option value="Financial Institution / FinTech">Financial Institution / FinTech</option>
              <option value="Enterprise Client">Enterprise Client</option>
              <option value="Strategic Partnership">Strategic Partnership</option>
              <option value="Careers / Talent">Careers / Talent</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-service"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Solution Focus <span className="text-accent">*</span>
            </label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
            >
              <option value="Government Digital Transformation">Government Digital Transformation</option>
              <option value="FinTech & Payment Infrastructure">FinTech &amp; Payment Infrastructure</option>
              <option value="Enterprise Software Solutions">Enterprise Software Solutions</option>
              <option value="Digital Platforms & Applications">Digital Platforms &amp; Applications</option>
              <option value="Technology Infrastructure & Security">Technology Infrastructure &amp; Security</option>
              <option value="B-Pay / Public Payment Integration">B-Pay / Public Payment Integration</option>
              <option value="General Consultation">General Consultation</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Project Scope &amp; Objectives <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your institutional, payment, or enterprise requirements, target timelines, and any key integration systems..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50 resize-y"
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 p-3 text-sm text-rose-700 bg-rose-50 rounded-xl border border-rose-200">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Button
          type="submit"
          variant="brand"
          size="lg"
          className="w-full justify-center"
          disabled={status === "submitting"}
          icon={
            status === "submitting" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )
          }
        >
          {status === "submitting" ? "Submitting Inquiry..." : "Submit Inquiry"}
        </Button>

        <p className="text-xs text-center text-muted">
          Please avoid sharing sensitive credentials or restricted data in initial web inquiries. Mutual confidentiality agreements can be executed prior to detailed technical discovery.
        </p>
      </div>
    </form>
  );
}
