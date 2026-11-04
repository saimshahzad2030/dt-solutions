import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-editech-dots opacity-20 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-lg mx-auto relative z-10 space-y-6">
        <span className="font-display text-8xl sm:text-9xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block leading-none">
          404
        </span>

        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
          Page Not Found
        </h1>

        <p className="text-muted text-sm sm:text-base leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let us help you find what you need.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/"
            variant="brand"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Return Home
          </Button>

          <Button
            href="/services"
            variant="outline"
            size="md"
          >
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
}

