"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export interface ScrollToOptions {
  offset?: number;
  immediate?: boolean;
  lock?: boolean;
  duration?: number;
  easing?: (t: number) => number;
  onComplete?: () => void;
}

export interface SmoothScrollContextValue {
  lenis: Lenis | null;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: ScrollToOptions
  ) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  scrollTo: () => {},
});

/**
 * Hook to access the Lenis smooth scroll instance and its scrollTo method.
 */
export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

// Global declaration for debugging or external scripts
declare global {
  interface Window {
    __lenis?: Lenis | null;
  }
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Initialize Lenis once on mount
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fixed header offset (TopBar + Sticky Header ~ 85px)
    const headerOffset = -85;

    // Viewmotion / Lenis high-performance configuration
    // Using `lerp: 0.1` ensures instantaneous response on frame 1 without the sluggish
    // dead-zone delay caused by time-based `duration` tweens.
    const lenis = new Lenis({
      lerp: 0.1, // responsive, buttery dampening matching viewmotion.vercel.app
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false, // preserve 100% native touch scrolling on mobile devices
      respectReducedMotion: true, // auto honors prefers-reduced-motion
      autoResize: true,
      autoRaf: true, // Lenis internally manages the single requestAnimationFrame loop
      anchors: false, // handled cleanly via event delegation below to avoid double listeners
      stopInertiaOnNavigate: true,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);
    window.__lenis = lenis;

    // If reduced motion is preferred, disable smoothing immediately
    if (prefersReducedMotion) {
      lenis.stop();
      lenis.start();
    }

    // Intercept internal anchor clicks for smooth scrolling with header offset
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const isCurrentPageAnchor =
        href.startsWith("#") ||
        (href.startsWith("/#") && window.location.pathname === "/");

      if (isCurrentPageAnchor) {
        const hash = href.startsWith("/#") ? href.slice(1) : href;
        if (hash === "#" || hash === "") return;

        const targetEl = document.querySelector(hash);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl as HTMLElement, {
            offset: headerOffset,
          });

          // Update browser address bar without jump
          if (window.history.pushState) {
            window.history.pushState(null, "", hash);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Initial load hash check (e.g., direct navigation to dtsolutions.pk/#services)
    if (window.location.hash) {
      const targetHash = window.location.hash;
      setTimeout(() => {
        const targetEl = document.querySelector(targetHash);
        if (targetEl) {
          lenis.scrollTo(targetEl as HTMLElement, {
            offset: headerOffset,
            immediate: false,
          });
        }
      }, 100);
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.__lenis = null;
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    if (!lenisRef.current) return;

    // Check if there is a hash on route change
    if (window.location.hash) {
      const targetHash = window.location.hash;
      const timer = setTimeout(() => {
        const targetEl = document.querySelector(targetHash);
        if (targetEl) {
          lenisRef.current?.scrollTo(targetEl as HTMLElement, {
            offset: -85,
            immediate: false,
          });
          return;
        }
      }, 60);
      return () => clearTimeout(timer);
    }

    // Scroll to top on standard route change
    lenisRef.current.scrollTo(0, { immediate: true });
  }, [pathname]);

  const scrollTo = useCallback(
    (target: number | string | HTMLElement, options?: ScrollToOptions) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, {
          offset: options?.offset ?? -85,
          immediate: options?.immediate ?? false,
          duration: options?.duration,
          easing: options?.easing,
          lock: options?.lock,
          onComplete: options?.onComplete,
        });
      } else if (typeof window !== "undefined") {
        if (typeof target === "number") {
          window.scrollTo({
            top: target,
            behavior: options?.immediate ? "auto" : "smooth",
          });
        } else if (typeof target === "string") {
          const el = document.querySelector(target);
          el?.scrollIntoView({
            behavior: options?.immediate ? "auto" : "smooth",
          });
        } else if (target instanceof HTMLElement) {
          target.scrollIntoView({
            behavior: options?.immediate ? "auto" : "smooth",
          });
        }
      }
    },
    []
  );

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

