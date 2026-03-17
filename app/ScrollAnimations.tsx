"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Premium scroll-based reveal animations.
 * Fixed: Excluded Hero images from parallax to maintain centering.
 * Fixed: Refined section reveal to avoid conflicts with Framer Motion.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Reveal for elements NOT already handled by Framer Motion's FadeInWhenVisible
    // We target headings and specific content blocks for a premium feel
    const revealElements = document.querySelectorAll("h1, h2, h3, .p-8.rounded-3xl");
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        }
      );
    });

    // 2. Parallax for Content Images (Excluding Hero to keep orbit centered)
    // Only apply to images within project showcases or about sections
    const parallaxImages = document.querySelectorAll("#projects img, #about img");
    parallaxImages.forEach((img) => {
      gsap.fromTo(
        img,
        { y: 20 },
        {
          y: -20,
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });

    // 3. Subtle Hero Parallax (Moving the entire visual container together)
    const heroVisual = document.querySelector("section.relative .relative.w-full.max-w-\\[450px\\]");
    if (heroVisual) {
      gsap.to(heroVisual, {
        y: -40,
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // 4. Staggered reveal for grid items (Timeline, Contacts, etc.)
    const grids = document.querySelectorAll(".grid > div");
    if (grids.length > 0) {
      ScrollTrigger.batch(grids, {
        start: "top 95%",
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 1,
              ease: "power3.out",
              overwrite: true,
            }
          );
        },
        once: true,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
