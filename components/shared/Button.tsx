import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "brand" | "primary" | "accent" | "outline" | "white" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  pill?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "brand",
  size = "md",
  pill = true,
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const roundedStyles = pill ? "rounded-full" : "rounded-xl";

  const variantStyles = {
    brand:
      "bg-gradient-to-r from-primary to-accent text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-accent/30 hover:brightness-105",
    primary:
      "bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35",
    accent:
      "bg-accent hover:bg-accent-hover text-white shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/35",
    outline:
      "border-2 border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary shadow-sm",
    white:
      "bg-white text-primary hover:bg-slate-50 hover:text-primary-dark shadow-md shadow-slate-200/50",
    ghost:
      "bg-transparent text-primary hover:bg-primary/10",
    dark:
      "bg-dark-900 hover:bg-dark-950 text-white border border-white/10 hover:border-white/20 shadow-md",
  };

  const classes = twMerge(
    clsx(
      baseStyles,
      sizeStyles[size],
      roundedStyles,
      variantStyles[variant],
      className
    )
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="transition-transform duration-200 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx("group", classes)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={clsx("group", classes)} {...props}>
      {content}
    </button>
  );
}

