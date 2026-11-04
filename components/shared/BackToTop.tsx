"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useSmoothScroll } from "@/components/motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isVisible = window.scrollY > 400;
          setVisible((prev) => (prev !== isVisible ? isVisible : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollTo(0);
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-xl hover:shadow-accent/40"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

