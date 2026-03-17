"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Premium cinematic reveal.
 * A black box in the center scales up to "open" the website window.
 * Enhanced: Wider box and massive scale to ensure 100% screen coverage.
 */
export default function InitialReveal() {
  const revealRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlayEl = revealRef.current;
    const boxEl = boxRef.current;

    // If anything goes wrong, never block the UI forever.
    const forceDismiss = () => {
      if (!overlayEl) return;
      overlayEl.style.opacity = "0";
      overlayEl.style.pointerEvents = "none";
      overlayEl.style.display = "none";
    };

    const fallbackTimer = window.setTimeout(forceDismiss, 6000);

    if (!overlayEl || !boxEl) {
      forceDismiss();
      return () => window.clearTimeout(fallbackTimer);
    }

    let tl: gsap.core.Timeline | null = null;
    try {
      tl = gsap.timeline({
        onComplete: () => {
          window.clearTimeout(fallbackTimer);
          forceDismiss();
        },
      });

      // 2. The Reveal Sequence
      tl.to(boxEl, {
        scale: 250, // Massive scale to ensure even the furthest corners are covered
        duration: 2.2,
        ease: "expo.inOut",
        delay: 0.5,
      }).to(
        overlayEl,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // 3. Subtle content slide-in
      gsap.fromTo(
        "main",
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2.5,
          ease: "expo.out",
          delay: 1.2,
          clearProps: "transform",
        }
      );
    } catch {
      forceDismiss();
    }

    return () => {
      window.clearTimeout(fallbackTimer);
      tl?.kill();
    };
  }, []);

  return (
    <div 
      ref={revealRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      {/* Cinematic wide box: scaled from 150x80 for full coverage */}
      <div 
        ref={boxRef}
        className="w-[150px] h-[80px] bg-accent shadow-[0_0_200px_rgba(32,145,242,0.8)] rounded-sm"
      />
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent/50 animate-pulse">
          Initializing experience...
        </p>
      </div>
    </div>
  );
}
