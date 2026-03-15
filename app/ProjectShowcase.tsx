"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  tech: string;
  desc: string;
  images: string[];
}

const ProjectShowcase = ({ projects }: { projects: Project[] }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-slide to next project every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const handleNext = () => setActiveIdx((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);

  const activeProj = projects[activeIdx];

  // Get 3 screenshots from the SAME active project for the showcase
  const getVisibleScreenshots = () => {
    const imgs = activeProj.images;
    return [
      { src: imgs[1 % imgs.length], type: 'side' },
      { src: imgs[0 % imgs.length], type: 'active' },
      { src: imgs[2 % imgs.length], type: 'side' }
    ];
  };

  const visibleScreens = getVisibleScreenshots();

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden border-b border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 text-white uppercase">
          <span className="bg-accent px-4 py-1 rounded text-white not-italic">Selected</span> Projects
        </h2>
        <div className="w-1 h-16 bg-accent mx-auto mt-4 rounded-full opacity-40 animate-pulse" />
      </div>

      <div className="relative flex flex-col items-center gap-16">
        {/* Project Carousel - Sliding Mobile Screens (All showing same app) */}
        <div className="relative w-full flex items-center justify-center min-h-[450px] md:min-h-[650px]">
          <div className="flex items-center justify-center gap-4 md:gap-12 w-full">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleScreens.map((screen, i) => (
                <motion.div
                  key={`${activeProj.title}-${i}`} // Keyed by project title so all 3 slide on change
                  initial={{ x: 200, opacity: 0, scale: 0.8 }}
                  animate={{ 
                    x: 0, 
                    opacity: i === 1 ? 1 : 0.35, 
                    scale: i === 1 ? 1 : 0.8,
                    rotate: i === 0 ? -10 : i === 2 ? 10 : 0,
                    zIndex: i === 1 ? 20 : 10,
                    filter: i === 1 ? "blur(0px)" : "blur(2px)"
                  }}
                  exit={{ x: -200, opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  className={`relative aspect-[9/19.5] ${
                    i === 1 ? 'w-[220px] md:w-[320px]' : 'w-[180px] md:w-[260px] hidden md:block'
                  }`}
                >
                  <IPhoneFrame src={screen.src} isMain={i === 1} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Active Project Info & Controls */}
        <motion.div 
          key={activeIdx}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center max-w-2xl bg-secondary-bg/30 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-md"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-accent" />
            <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">{activeProj.tech}</p>
            <span className="h-[1px] w-6 bg-accent" />
          </div>
          <h3 className="text-3xl md:text-5xl font-black italic mb-4 text-white uppercase tracking-tighter">
            {activeProj.title}
          </h3>
          <p className="text-text-gray mb-10 leading-relaxed text-base md:text-lg max-w-xl mx-auto">{activeProj.desc}</p>
          
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={handlePrev}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent transition-all group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <div className="flex gap-3">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-700 ${idx === activeIdx ? 'w-12 bg-accent' : 'w-2 bg-white/10'}`} 
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent transition-all group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const IPhoneFrame = ({ src, isMain }: { src: string; isMain?: boolean }) => {
  return (
    <div className={`relative w-full h-full bg-[#111] rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] md:border-[10px] border-[#1a1a1a] overflow-hidden shadow-2xl transition-all duration-500 ${isMain ? 'ring-2 ring-accent/20' : ''}`}>
      {/* App Screenshot */}
      <img 
        src={src} 
        alt="App Screen" 
        className="absolute inset-0 w-full h-full object-cover rounded-[1.8rem] md:rounded-[2.8rem]" 
      />
      
      {/* Inner Shadow overlay */}
      <div className="absolute inset-0 rounded-[1.8rem] md:rounded-[2.8rem] shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none" />

      {/* Dynamic Island */}
      <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-16 md:w-24 h-5 md:h-7 bg-black rounded-full z-20 flex items-center justify-center">
        <div className="w-1 h-1 bg-white/5 rounded-full ml-auto mr-4" />
      </div>

      {/* Gloss Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-white/5 z-30" />
    </div>
  );
};

export default ProjectShowcase;
