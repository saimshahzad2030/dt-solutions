import React from "react";
import { clsx } from "clsx";
import { motionProps } from "@/components/motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  titleAccent,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div
      {...motionProps({ preset: "fade-up", duration: 550, once: true })}
      className={clsx("flex flex-col mb-12 sm:mb-16", alignClass, className)}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span
            className={clsx(
              "px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-sm",
              dark
                ? "bg-primary/20 text-accent-light border border-primary/30"
                : "bg-primary/10 text-primary border border-primary/20"
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {badge}
          </span>
        </div>
      )}

      <h2
        className={clsx(
          "font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.18]",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}{" "}
        {titleAccent && (
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {titleAccent}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            dark ? "text-slate-300" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
