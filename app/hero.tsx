"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = ({ works }: { works: { title: string; bg?: string }[] }) => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => (prev + 1) % works.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [works.length]);

  const colorMap: Record<string, string> = {
    blue: "bg-blue-500/20 border-blue-500/40 text-blue-400",
    purple: "bg-purple-500/20 border-purple-500/40 text-purple-400",
    green: "bg-emerald-500/20 border-emerald-500/40 text-emerald-400",
    yellow: "bg-yellow-500/20 border-yellow-500/40 text-yellow-400",
    red: "bg-red-500/20 border-red-500/40 text-red-400",
    pink: "bg-pink-500/20 border-pink-500/40 text-pink-400",
    amber: "bg-amber-500/20 border-amber-500/40 text-amber-400",
  };

  const currentColorClass = works[i]?.bg
    ? colorMap[works[i].bg as keyof typeof colorMap]
    : "bg-accent/20 border-accent/40 text-accent";

  return (
    <section className="relative px-6 pt-12 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="z-10">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-3xl font-bold">Hello</h2>
          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-[2px] bg-accent" />
            <h1 className="text-4xl md:text-5xl font-bold italic">
              I'm <span className="text-accent text-6xl">Nafis Hasan</span>
            </h1>
          </div>

          <div className="h-[70px] md:h-[90px] overflow-hidden relative flex items-center">
            <div key={i} className="animate-rotate-up">
              <h2
                className={`text-4xl md:text-6xl font-bold px-4 py-1 rounded-lg border transition-all duration-500 ${currentColorClass}`}
              >
                {works[i]?.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-12">
          <button className="px-8 py-3.5 bg-accent text-white font-bold rounded shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all">
            Got a project?
          </button>
          <a
            href="/md nafis hasan tonmoy_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-foreground/30 text-foreground font-bold rounded hover:bg-foreground/5 transition-all"
          >
            My resume
          </a>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="relative w-full max-w-[600px] flex justify-center items-center">
          <Image
            src="/image.png"
            height={1200}
            width={1000}
            alt="Nafis Hasan Portrait"
            className="w-full h-auto z-10"
            priority
          />
          {/* Bird GIF on shoulder */}
          <div className="absolute top-[38%] right-[15%] w-[120px] md:w-[140px] z-20 pointer-events-none animate-bounce-slow">
            <Image
              src="/bird.gif"
              alt="Flying Bird"
              height={100}
              width={100}
              className="w-full h-auto scale-x-[1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
