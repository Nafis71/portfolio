"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth, natural ease
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    document.documentElement.classList.add("lenis");

    // Allow other components to trigger smooth scrolling (anchors, buttons).
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const el = document.querySelector(href);
      if (!(el instanceof HTMLElement)) return;

      e.preventDefault();
      lenis.scrollTo(el, { offset: -80 });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      document.documentElement.classList.remove("lenis");
      if ((window as unknown as { lenis?: Lenis }).lenis === lenis) {
        delete (window as unknown as { lenis?: Lenis }).lenis;
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
