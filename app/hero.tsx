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
    <section className="relative px-6 pt-12 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center overflow-visible">
      <div className="z-10">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-3xl font-bold">Hello</h2>
          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-[2px] bg-accent" />
            <h1 className="text-4xl md:text-6xl font-bold italic">
              I'm <span className="text-accent">Nafis Hasan</span>
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
          {/* Background Ring */}
          <div className="relative w-full h-auto">
            <Image
              src="/background.png"
              height={1200}
              width={1000}
              alt="Hero Background"
              className="w-full h-auto opacity-80"
              priority
            />

            {/* Rotating Icons Ring Container - Force square aspect ratio for perfect circular orbit */}
            <div className="absolute inset-0 flex items-center justify-center animate-rotate-full pointer-events-none">
              <div className="relative w-[80%] aspect-square rounded-full flex items-center justify-center">
                {/* Flutter Icon - Top center */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 md:w-20 h-12 md:h-20 p-3 bg-secondary-bg/60 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center shadow-[0_20px_50px_rgba(32,145,242,0.3)] perspective-1000 rotate-x-12">
                  <div className="w-full h-full relative group shadow-inner">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                      alt="Flutter"
                      className="w-full h-full drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
                {/* Android Icon - Right center */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 md:w-20 h-12 md:h-20 p-3 bg-secondary-bg/60 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center -rotate-90 shadow-[50px_0_50px_rgba(32,145,242,0.2)] perspective-1000">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                    alt="Android"
                    className="w-full h-full drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
                    height={100}
                    width={100}
                  />
                </div>
                {/* Dart Icon - Left center */}
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 md:w-20 h-12 md:h-20 p-3 bg-secondary-bg/60 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center rotate-90 shadow-[-50px_0_50px_rgba(32,145,242,0.2)] perspective-1000">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                    alt="Dart"
                    className="w-full h-full drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Developer Image on Top */}
          <div className="absolute inset-0 flex items-center justify-center pt-10">
            <Image
              src="/tonmoy.png"
              height={1200}
              width={1000}
              alt="Nafis Hasan Tonmoy"
              className="w-full h-auto z-10 scale-[1.1]"
              priority
            />
          </div>

          {/* Bird GIF on shoulder */}
          <div className="absolute top-[40%] right-[13%] w-[120px] md:w-[160px] z-20 pointer-events-none animate-bounce-slow">
            <Image
              src="/bird.gif"
              alt="Flying Bird"
              className="w-full h-auto scale-x-[1]"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
