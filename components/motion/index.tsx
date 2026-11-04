import React from "react";
import { type MotionConfig, type StaggerConfig } from "viewmotion";
export { SmoothScrollProvider, useSmoothScroll } from "./SmoothScrollProvider";
export type { ScrollToOptions, SmoothScrollContextValue } from "./SmoothScrollProvider";

export type MotionPresetType =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "slide-left"
  | "slide-right"
  | "scale-in"
  | "zoom-out"
  | "blur-in";

export interface MotionPropsConfig {
  preset?: MotionPresetType;
  delay?: number;
  duration?: number;
  once?: boolean;
}

/**
 * Helper to generate data-motion attribute for JSX spreading.
 * Defaults `once: true` so animations run smoothly once on scroll.
 */
export function motionProps(config: MotionPropsConfig = {}) {
  const payload: MotionConfig = {
    preset: config.preset || "fade-up",
    once: config.once !== undefined ? config.once : true,
    ...(config.delay !== undefined ? { delay: config.delay } : {}),
    ...(config.duration !== undefined ? { duration: config.duration } : {}),
  };

  return {
    "data-motion": JSON.stringify(payload),
  };
}

/**
 * Helper to generate data-stagger attribute for JSX spreading.
 */
export function staggerProps(config: StaggerConfig = { delay: 50, step: 80 }) {
  return {
    "data-stagger": JSON.stringify(config),
  };
}

export interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  preset?: MotionPresetType;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

/**
 * Reusable Reveal component powered by Viewmotion.
 */
export function Reveal({
  preset = "fade-up",
  delay,
  duration,
  once = true,
  as: Component = "div",
  className,
  children,
  ...rest
}: RevealProps) {
  const mProps = motionProps({ preset, delay, duration, once });

  return (
    <Component className={className} {...mProps} {...rest}>
      {children}
    </Component>
  );
}

/**
 * FadeUp shorthand component.
 */
export function FadeUp({
  delay,
  duration,
  once = true,
  as = "div",
  className,
  children,
  ...rest
}: Omit<RevealProps, "preset">) {
  return (
    <Reveal
      preset="fade-up"
      delay={delay}
      duration={duration}
      once={once}
      as={as}
      className={className}
      {...rest}
    >
      {children}
    </Reveal>
  );
}

/**
 * FadeIn shorthand component.
 */
export function FadeIn({
  delay,
  duration,
  once = true,
  as = "div",
  className,
  children,
  ...rest
}: Omit<RevealProps, "preset">) {
  return (
    <Reveal
      preset="fade"
      delay={delay}
      duration={duration}
      once={once}
      as={as}
      className={className}
      {...rest}
    >
      {children}
    </Reveal>
  );
}

/**
 * SlideIn component for left or right entrance.
 */
export interface SlideInProps extends Omit<RevealProps, "preset"> {
  direction?: "left" | "right";
}

export function SlideIn({
  direction = "left",
  delay,
  duration,
  once = true,
  as = "div",
  className,
  children,
  ...rest
}: SlideInProps) {
  const preset: MotionPresetType = direction === "left" ? "slide-left" : "slide-right";

  return (
    <Reveal
      preset={preset}
      delay={delay}
      duration={duration}
      once={once}
      as={as}
      className={className}
      {...rest}
    >
      {children}
    </Reveal>
  );
}

/**
 * ScaleIn component.
 */
export function ScaleIn({
  delay,
  duration,
  once = true,
  as = "div",
  className,
  children,
  ...rest
}: Omit<RevealProps, "preset">) {
  return (
    <Reveal
      preset="scale-in"
      delay={delay}
      duration={duration}
      once={once}
      as={as}
      className={className}
      {...rest}
    >
      {children}
    </Reveal>
  );
}

/**
 * StaggerContainer component.
 * Direct children with `data-motion` or `<StaggerItem>` will animate in sequence.
 */
export interface StaggerContainerProps extends React.HTMLAttributes<HTMLElement> {
  delay?: number;
  step?: number;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export function StaggerContainer({
  delay = 50,
  step = 80,
  as: Component = "div",
  className,
  children,
  ...rest
}: StaggerContainerProps) {
  const sProps = staggerProps({ delay, step });

  return (
    <Component className={className} {...sProps} {...rest}>
      {children}
    </Component>
  );
}

/**
 * StaggerItem component for use inside StaggerContainer.
 */
export interface StaggerItemProps extends Omit<RevealProps, "delay"> {
  preset?: MotionPresetType;
}

export function StaggerItem({
  preset = "fade-up",
  duration,
  once = true,
  as: Component = "div",
  className,
  children,
  ...rest
}: StaggerItemProps) {
  const mProps = motionProps({ preset, duration, once });

  return (
    <Component className={className} {...mProps} {...rest}>
      {children}
    </Component>
  );
}

