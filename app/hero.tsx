"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroIcons = [
  { src: "/icons/flutter.png", alt: "Flutter" },
  { src: "/icons/android.png", alt: "Android" },
  { src: "/icons/dart.png", alt: "Dart" },
  { src: "/icons/firebase.png", alt: "Firebase" },
  { src: "/icons/getx.png", alt: "GetX" },
  { src: "/icons/java.png", alt: "Java" },
  { src: "/icons/sqlite.png", alt: "SQLite" },
];

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
    <section className="relative px-6 pt-8 md:pt-12 pb-16 md:pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center overflow-visible">
      <div className="z-10 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Hello</h2>
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-accent" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="hidden md:block w-12 lg:w-16 h-[2px] bg-accent" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter">
              I'm <span className="text-accent">Nafis Hasan</span>
            </h1>
          </div>

          <div className="h-[50px] sm:h-[70px] md:h-[90px] relative flex items-center justify-center lg:justify-start overflow-visible">
            <div className="overflow-hidden h-full w-full flex items-center justify-center lg:justify-start">
              <div key={i} className="animate-rotate-up">
                <h2
                  className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black px-4 py-1 rounded-lg border transition-all duration-500 whitespace-nowrap w-max ${currentColorClass}`}
                >
                  {works[i]?.title}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 md:mt-12">
          <a
            href="#contact"
            className="flex-1 sm:flex-none px-6 md:px-8 py-3.5 bg-accent text-white font-bold rounded shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all text-sm md:text-base"
          >
            Got a project?
          </a>
          <a
            href="/md nafis hasan tonmoy_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-6 md:px-8 py-3.5 border border-foreground/30 text-foreground font-bold rounded hover:bg-foreground/5 transition-all text-sm md:text-base text-center"
          >
            My resume
          </a>
        </div>
      </div>

      <div className="relative flex justify-center items-center mt-12 lg:mt-0">
        <div className="relative w-full max-w-[450px] md:max-w-[600px] flex justify-center items-center">
          {/* Background Ring */}
          <div className="relative w-full h-auto">
            <Image
              src="/background.png"
              height={1200}
              width={1000}
              alt="Hero Background"
              className="w-full h-auto opacity-60 md:opacity-80"
              priority
            />

            {/* Rotating Icons Ring Container */}
            <div className="absolute inset-0 flex items-center justify-center animate-rotate-full pointer-events-none scale-75 sm:scale-90 md:scale-100">
              <div className="relative w-[80%] aspect-square rounded-full flex items-center justify-center">
                {heroIcons.map((icon, index) => {
                  const angle = (index * 360) / heroIcons.length;
                  const radian = (angle - 90) * (Math.PI / 180);
                  const x = 50 + 50 * Math.cos(radian);
                  const y = 50 + 50 * Math.sin(radian);

                  return (
                    <div
                      key={icon.alt}
                      className="absolute w-10 md:w-20 h-10 md:h-20 p-2 md:p-3 bg-secondary-bg/60 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/20 flex items-center justify-center shadow-[0_10px_30px_rgba(32,145,242,0.2)] md:shadow-[0_20px_50px_rgba(32,145,242,0.3)] perspective-1000"
                      style={{
                        top: `${y}%`,
                        left: `${x}%`,
                        transform: `translate(-50%, -50%)`,
                      }}
                    >
                      <div className="w-full h-full relative group">
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          className="w-full h-full object-contain"
                          height={80}
                          width={80}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Developer Image on Top */}
          <div className="absolute inset-0 flex items-center justify-center pt-8 md:pt-10">
            <Image
              src="/tonmoy.png"
              height={1200}
              width={1000}
              alt="Nafis Hasan Tonmoy"
              className="w-full h-auto z-10 scale-[1.05] md:scale-[1.1]"
              priority
            />
          </div>

          {/* Bird GIF */}
          <div className="absolute top-[40%] right-[8%] md:right-[13%] w-[80px] md:w-[160px] z-20 pointer-events-none animate-bounce-slow">
            <Image
              src="/bird.gif"
              alt="Flying Bird"
              className="w-full h-auto"
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
