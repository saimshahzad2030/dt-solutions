"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { initMotion, type MotionCleanup } from "viewmotion";
import "viewmotion/styles.css";

interface ViewMotionProviderProps {
  children: React.ReactNode;
}

export function ViewMotionProvider({ children }: ViewMotionProviderProps) {
  const pathname = usePathname();
  const cleanupRef = useRef<MotionCleanup | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Small delay/RAF to allow Next.js DOM rendering to complete
    const timeoutId = setTimeout(async () => {
      if (!isMounted) return;

      // Clean up previous observer if any
      if (cleanupRef.current) {
        cleanupRef.current.destroy();
        cleanupRef.current = null;
      }

      try {
        const handle = await initMotion({
          rootMargin: "0px 0px -50px 0px",
          threshold: 0.1,
          defaultDuration: 600,
          defaultDelay: 0,
          smoothScroll: false,
        });

        if (isMounted) {
          cleanupRef.current = handle;
        } else {
          handle.destroy();
        }
      } catch (err) {
        console.warn("[ViewMotion] Initialization error:", err);
      }
    }, 40);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      if (cleanupRef.current) {
        cleanupRef.current.destroy();
        cleanupRef.current = null;
      }
    };
  }, [pathname]);

  return <>{children}</>;
}

