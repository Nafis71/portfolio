"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  Linkedin,
  Github as GithubIcon,
  Briefcase,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./hero";
import ProjectShowcase from "./ProjectShowcase";
import projectsData from "../data/projects.json";
import ChatWidget from "./chat-widget";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <a
          href="#"
          className="text-2xl font-black italic tracking-tighter text-white"
        >
          <span className="bg-accent px-2 py-0.5 rounded">Tonmoy.</span>
        </a>

        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-text-gray">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:block px-4 py-2 rounded border border-accent/30 text-[10px] font-black uppercase tracking-widest text-accent hover:bg-accent hover:text-white transition-all"
          >
            Hire Me
          </a>
          <button
            className="md:hidden p-2 text-text-gray hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary-bg border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-sm font-bold uppercase tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-gray hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full py-4 rounded bg-accent text-white text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const TechStack = () => {
  const skills = [
    "Flutter",
    "Dart",
    "GetX",
    "Provider",
    "Firebase",
    "REST API",
    "WebSockets",
    "Clean Architecture",
    "Repository Pattern",
    "Isolates",
    "Google Maps API",
    "AdMob",
    "WorkManager",
    "Crashlytics",
    "In-App Purchases",
    "SQLite",
    "Hive",
    "Git",
    "Postman",
    "Google Cloud",
  ];

  return (
    <section className="border-y border-white/5 bg-secondary-bg/20 py-8 overflow-hidden">
      <div className="flex flex-col gap-6">
        <div className="flex animate-scroll hover:[animation-play-state:paused] gap-12 whitespace-nowrap">
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <div className="w-1 h-1 rounded-full bg-accent opacity-40 group-hover:scale-150 group-hover:opacity-100 transition-all" />
              <span className="text-text-gray font-black uppercase tracking-[0.3em] text-[10px] md:text-xs group-hover:text-accent transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section
    id="about"
    className="px-6 py-24 max-w-4xl mx-auto border-b border-white/5"
  >
    <div className="flex flex-col items-start text-left space-y-12">
      <div className="space-y-6 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white">About me</h2>
        <div className="w-20 h-1.5 bg-accent rounded-full" />
        <div className="text-text-gray text-base md:text-lg leading-relaxed max-w-4xl space-y-6">
          <p>
            A{" "}
            <span className="text-white font-semibold">
              Mid-Level Flutter Developer
            </span>{" "}
            passionate about building high-performance, scalable, and
            beautifully designed mobile applications.
          </p>
          <p>
            With over 2 years of professional experience, I specialize in
            developing robust cross-platform apps using Flutter and Dart, with a
            strong focus on maintainable architecture, performance optimization,
            and smooth user experiences. I enjoy transforming complex product
            ideas into pixel-perfect interfaces and reliable production systems.
          </p>
          <p>
            In my work, I focus on writing clean and scalable code using Layered
            Architecture, Repository Patterns, and modern state management
            solutions like GetX and Provider. I also have experience integrating
            REST APIs, Firebase services, real-time systems, and background
            processing to build apps that perform efficiently even under heavy
            workloads.
          </p>
          <p>
            Throughout my career, I have contributed to multiple production apps
            including marketplaces, AI-powered platforms, productivity tools,
            and pet care ecosystems, managing everything from feature
            development and architecture design to Play Store and App Store
            releases.
          </p>
          <p>
            Beyond coding, I enjoy continuously improving my craft, learning new
            technologies, and building products that solve real problems. My
            goal is to grow into a senior mobile engineer who builds scalable
            products used by millions of people.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 p-8 md:p-12 rounded-[2.5rem] bg-secondary-bg/30 border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl -z-10" />

        <div className="relative">
          <div className="text-4xl md:text-5xl font-black mb-2 text-accent tracking-tighter italic">
            2+
          </div>
          <div className="text-[10px] md:text-xs text-text-gray uppercase font-black tracking-[0.2em] leading-tight">
            Years
            <br />
            Experience
          </div>
        </div>

        <div className="relative">
          <div className="text-4xl md:text-5xl font-black mb-2 text-accent tracking-tighter italic">
            5+
          </div>
          <div className="text-[10px] md:text-xs text-text-gray uppercase font-black tracking-[0.2em] leading-tight">
            Production
            <br />
            Apps
          </div>
        </div>

        <div className="relative">
          <div className="text-4xl md:text-5xl font-black mb-2 text-accent tracking-tighter italic">
            40%
          </div>
          <div className="text-[10px] md:text-xs text-text-gray uppercase font-black tracking-[0.2em] leading-tight">
            Performance
            <br />
            Improvement
          </div>
        </div>

        <div className="relative">
          <div className="text-4xl md:text-5xl font-black mb-2 text-accent tracking-tighter italic">
            99.9%
          </div>
          <div className="text-[10px] md:text-xs text-text-gray uppercase font-black tracking-[0.2em] leading-tight">
            Crash-Free
            <br />
            Stability
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Timeline = () => {
  const experiences = [
    {
      company: "SaraTech Ltd.",
      role: "Flutter Developer (Mid-Level)",
      period: "Oct 2025 – Present",
      website: "https://saratech.com.bd",
      description:
        "Led development of cross-platform Flutter apps for Android and iOS, implementing advanced features and integrating REST APIs, Firebase, and third-party services. Optimized performance for 100% crash-free stability and maintained scalable codebases.",
    },
    {
      company: "SaraTech Ltd.",
      role: "Junior Flutter Developer",
      period: "Mar 2024 – Oct 2025",
      website: "https://saratech.com.bd",
      description:
        "Assisted in developing cross-platform apps, implementing core features and integrating REST APIs. Converted Figma designs into pixel-perfect UI and collaborated with the team to deliver features on schedule.",
    },
  ];

  const education = [
    {
      institution: "Bangladesh University of Business and Technology",
      degree: "BSc in Computer Science & Engineering",
      period: "Jan 2020 – Mar 2024",
      location: "Dhaka, Bangladesh",
      website: "https://www.bubt.edu.bd/",
    },
    {
      institution: "Ostad",
      degree: "App Development with Flutter",
      period: "Mar 2023 – Sep 2023",
      location: "Coursework",
      website: "https://ostad.app/",
    },
  ];

  return (
    <section
      id="experience"
      className="px-6 py-24 max-w-5xl mx-auto space-y-24 border-b border-white/5"
    >
      {/* Education Section */}
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl font-bold text-white">Education</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-secondary-bg/50 border border-white/5 hover:border-accent/30 transition-all group overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <Link href={item.website}>
                  <p className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> {item.period}
                  </p>
                  <h3 className="text-xl font-bold mb-2 text-white leading-tight">
                    {item.degree}
                  </h3>
                  <p className="text-text-gray font-medium mb-1">
                    {item.institution}
                  </p>
                  <p className="text-text-gray/50 text-xs">{item.location}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Professional Experience
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full" />
        </div>

        <div className="relative space-y-10 before:absolute before:inset-0 before:left-[19px] md:before:left-[23px] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent/50 before:via-accent/20 before:to-transparent">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-12 md:pl-16 group">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-full border border-accent/30 bg-background text-accent shadow-[0_0_20px_rgba(32,145,242,0.2)] z-10 group-hover:scale-110 transition-transform">
                <Briefcase className="w-4 md:w-5 h-4 md:h-5" />
              </div>

              <div className="p-8 rounded-3xl bg-secondary-bg/50 border border-white/5 hover:border-accent/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <Link
                      href={exp.website}
                      className="text-accent font-semibold text-lg flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {exp.company}
                    </Link>
                  </div>
                  <time className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-widest whitespace-nowrap self-start md:self-center">
                    {exp.period}
                  </time>
                </div>
                <p className="text-text-gray text-base leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "nhtonmoy2@gmail.com",
      href: "mailto:nhtonmoy2@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1304-951029",
      href: "tel:+8801304951029",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/nafishasantonmoy",
      href: "https://linkedin.com/in/nafishasantonmoy",
    },
    {
      icon: GithubIcon,
      label: "Github",
      value: "Nafis71",
      href: "https://github.com/Nafis71",
    },
  ];

  return (
    <section id="contact" className="px-6 py-24 max-w-7xl mx-auto">
      <div className="relative rounded-[2rem] md:rounded-[3rem] bg-secondary-bg/50 border border-white/5 p-8 md:p-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-accent/10 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-accent/5 blur-[100px] -z-10" />

        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's build something{" "}
            <span className="text-accent italic">extraordinary</span> together.
          </h2>
          <p className="text-text-gray text-base md:text-lg mb-12 leading-relaxed">
            Currently available for new opportunities and interesting projects.
            Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-background/50 border border-white/5 hover:border-accent/30 hover:bg-background transition-all"
            >
              <contact.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-text-gray mb-1">
                {contact.label}
              </p>
              <p className="text-sm font-medium truncate">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const works = [
    { title: "Software Engineer", bg: "blue" },
    { title: "Problem Solver", bg: "purple" },
    { title: "Fitness Enthusiast", bg: "green" },
    { title: "Disciplined", bg: "yellow" },
    { title: "Perfectionist", bg: "red" },
    { title: "Detail Oriented", bg: "pink" },
    { title: "Curious Learner", bg: "amber" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth pt-20 md:pt-32 overflow-x-hidden">
      <Navbar />
      <Hero works={works} />
      <FadeInWhenVisible>
        <TechStack />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Timeline />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ProjectShowcase projects={projectsData} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>

      <footer className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="text-xl font-bold tracking-tight text-white">
            <span className="bg-accent px-2 rounded">Tonmoy.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-text-gray">
            <a href="#" className="hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-gray/40">
            &copy; 2026 Crafted with precision
          </div>
        </div>
      </footer>
      <ChatWidget />
    </main>
  );
}
