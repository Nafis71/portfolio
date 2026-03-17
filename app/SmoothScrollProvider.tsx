"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis for Ultra-Smooth Scroll
    const lenis = new Lenis({
      duration: 1.5, // Slightly longer for more cinematic feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1, // Subtle boost
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // 3. Connect Lenis to ScrollTrigger
    lenis.on("scroll", (e: any) => {
      // Keep ScrollTrigger synced with Lenis
      ScrollTrigger.update();

      // Also broadcast Lenis scroll so UI (e.g. navbar) can react reliably
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", {
          detail: {
            scroll: typeof e?.scroll === "number" ? e.scroll : window.scrollY,
            direction: typeof e?.direction === "number" ? e.direction : 0, // 1 down, -1 up
          },
        })
      );
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 4. Global anchor scrolling support
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const el = document.querySelector(href);
          if (el instanceof HTMLElement) {
            e.preventDefault();
            lenis.scrollTo(el, { offset: -80 });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
