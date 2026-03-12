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

  // Indices for the 3 visible phones
  const getIndices = () => {
    const prev = (activeIdx - 1 + projects.length) % projects.length;
    const next = (activeIdx + 1) % projects.length;
    return [prev, activeIdx, next];
  };

  const [leftIdx, centerIdx, rightIdx] = getIndices();

  const handleNext = () => setActiveIdx((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);

  const activeProj = projects[centerIdx];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4">
          <span className="bg-accent px-4 py-1 rounded">Selected</span> Projects
        </h2>
        <div className="w-1 h-16 bg-accent mx-auto mt-4 rounded-full opacity-40" />
      </div>

      <div className="relative flex flex-col items-center gap-12">
        {/* iPhone Carousel */}
        <div className="relative flex items-center justify-center w-full min-h-[450px] md:min-h-[650px]">
          <AnimatePresence mode="popLayout">
            {/* Left Phone */}
            <motion.div
              key={`left-${leftIdx}`}
              initial={{ x: -100, opacity: 0, scale: 0.6 }}
              animate={{ x: '-80%', opacity: 0.4, scale: 0.75, rotate: -5, zIndex: 0 }}
              exit={{ x: -200, opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-[180px] md:w-[250px] aspect-[9/19.5] blur-[1px]"
            >
              <IPhoneFrame images={projects[leftIdx].images} />
            </motion.div>

            {/* Center Phone */}
            <motion.div
              key={`center-${centerIdx}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1, rotate: 0, zIndex: 20 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-[220px] md:w-[320px] aspect-[9/19.5] shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
            >
              <IPhoneFrame images={projects[centerIdx].images} isMain />
            </motion.div>

            {/* Right Phone */}
            <motion.div
              key={`right-${rightIdx}`}
              initial={{ x: 100, opacity: 0, scale: 0.6 }}
              animate={{ x: '80%', opacity: 0.4, scale: 0.75, rotate: 5, zIndex: 0 }}
              exit={{ x: 200, opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-[180px] md:w-[250px] aspect-[9/19.5] blur-[1px]"
            >
              <IPhoneFrame images={projects[rightIdx].images} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Info & Navigation */}
        <motion.div 
          key={centerIdx}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center max-w-2xl bg-secondary-bg/30 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-md"
        >
          <p className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">{activeProj.tech}</p>
          <h3 className="text-3xl font-black italic mb-4">{activeProj.title}</h3>
          <p className="text-text-gray mb-8 leading-relaxed text-sm md:text-base">{activeProj.desc}</p>
          
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent transition-all group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeIdx ? 'w-8 bg-accent' : 'w-2 bg-white/20'}`} 
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent transition-all group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const IPhoneFrame = ({ images, isMain }: { images: string[]; isMain?: boolean }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % images.length);
    }, 3000 + Math.random() * 1000); // Slight offset for more natural feel
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={`relative w-full h-full bg-black rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[10px] border-[#1f1f1f] overflow-hidden shadow-2xl`}>
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImgIdx}
            src={images[currentImgIdx]} 
            alt="App Screen" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover" 
          />
        </AnimatePresence>
      </div>
      
      {/* Island */}
      <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-16 md:w-24 h-5 md:h-7 bg-black rounded-full z-20" />

      {/* Reflections */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-white/5 z-30" />
    </div>
  );
};

export default ProjectShowcase;
