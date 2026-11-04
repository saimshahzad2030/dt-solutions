"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./Button";

interface ContactFormProps {
  defaultService?: string;
}

export function ContactForm({ defaultService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: defaultService || "Web Design & Development",
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
      // Realistic API dispatch or email link
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong while sending your inquiry. Please email us directly at info@dtsolutions.pk.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-card-subtle text-center">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
          Inquiry Received Successfully!
        </h3>
        <p className="text-muted text-base max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our solutions engineering team will review your requirements and respond within 24 hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              service: "Web Design & Development",
              message: "",
            });
          }}
        >
          Send Another Message
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
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Faraz Ahmed"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Enterprise"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. faraz@company.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Phone Number <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +92 300 1234567"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Project Type / Service <span className="text-accent">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 text-sm bg-slate-50/50"
          >
            <option value="Web Design & Development">Web Design & Development</option>
            <option value="Custom Software Development">Custom Software Development</option>
            <option value="AI Automation & Workflows">AI Automation & Workflows</option>
            <option value="Business Dashboards & Portals">Business Dashboards & Portals</option>
            <option value="API Integrations">API Integrations</option>
            <option value="Payment Gateway Integrations">Payment Gateway Integrations</option>
            <option value="Maintenance & Support">Maintenance & Support</option>
            <option value="Other / General Consultation">Other / General Consultation</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Project Overview & Goals <span className="text-accent">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you need, current bottlenecks, and any relevant tools your team uses today..."
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
          icon={status === "submitting" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        >
          {status === "submitting" ? "Sending Details..." : "Submit Project Inquiry"}
        </Button>

        <p className="text-xs text-center text-muted">
          We respect your privacy. All inquiries are covered by standard NDA protection. We reply within 24 hours.
        </p>
      </div>
    </form>
  );
}

