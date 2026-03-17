"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollFX() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 40 });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-accent/80"
        style={{ scaleX }}
      />

      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
        initial={false}
        animate={{
          opacity: showTop ? 1 : 0,
          y: showTop ? 0 : 12,
          pointerEvents: showTop ? "auto" : "none",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed bottom-6 left-6 z-[60] rounded-full border border-white/10 bg-secondary-bg/60 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-white backdrop-blur hover:border-accent/30 hover:bg-secondary-bg/80"
      >
        Top
      </motion.button>
    </>
  );
}

