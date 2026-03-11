// import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { Code2, Smartphone, Globe, Menu, ArrowRight } from "lucide-react";
import ChatWidget from "./chat-widget";

import Hero from "./hero";

const Navbar = () => {
  const items: { label: string; href: string }[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contacts", href: "#" },
  ];
  return (
    <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
      <div className="text-xl font-bold tracking-tight">Nafis Hasan Tonmoy</div>
      <ul className="hidden md:flex gap-8 text-sm font-medium text-text-gray">
        {items.map((item, index) => (
          <li
            key={index}
            className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-2xl"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <Menu className="w-6 h-6" />
      </div>
    </nav>
  );
};
const TechStack = () => (
  <section className="border-y border-foreground/5 bg-secondary-bg/30">
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-wrap justify-center md:justify-between gap-8 text-text-gray font-medium uppercase tracking-widest text-sm">
        <span>HTML5</span>
        <span>CSS</span>
        <span>Javascript</span>
        <span>Node.js</span>
        <span>React</span>
        <span>Git</span>
        <span>Github</span>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="px-6 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">
    <div className="space-y-12">
      <div className="flex gap-6 items-start">
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="p-3 bg-secondary-bg rounded-lg">
            <Code2 className="w-6 h-6 text-accent" />
          </div>
          <div className="w-[1px] h-12 bg-accent/30" />
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Website Development</h3>
        </div>
      </div>

      <div className="flex gap-6 items-start">
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="p-3 bg-secondary-bg rounded-lg">
            <Smartphone className="w-6 h-6 text-accent" />
          </div>
          <div className="w-[1px] h-12 bg-accent/30" />
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">App Development</h3>
        </div>
      </div>

      <div className="flex gap-6 items-start">
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="p-3 bg-secondary-bg rounded-lg">
            <Globe className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Website Hosting</h3>
        </div>
      </div>
    </div>

    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold mb-6">About me</h2>
        <p className="text-text-gray leading-relaxed max-w-lg">
          I started my software journey from photography. Through that, I
          learned to love the process of creating from scratch. Since then, this
          has led me to software development as it fulfills my love for learning
          and building things.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-foreground/5">
        <div>
          <div className="text-3xl font-bold mb-1">120 +</div>
          <div className="text-xs text-text-gray uppercase tracking-wider">
            Completed
            <br />
            Projects
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-1">95 %</div>
          <div className="text-xs text-text-gray uppercase tracking-wider">
            Client
            <br />
            satisfaction
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-1">10 +</div>
          <div className="text-xs text-text-gray uppercase tracking-wider">
            Years of
            <br />
            experience
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="px-6 py-24 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="w-1 h-16 bg-accent mx-auto mt-4 rounded-full opacity-40" />
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-xl bg-secondary-bg border border-white/5 aspect-video hover:border-accent/30 transition-all cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-xl font-bold mb-1">Project Name {i}</h3>
            <p className="text-sm text-text-gray">Web Development • 2026</p>
          </div>
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-6 h-6 text-accent" />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <button className="px-8 py-3 border border-accent/50 text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all">
        View all projects
      </button>
    </div>
  </section>
);

export default function Home() {
  const works: { title: string; bg?: string }[] = [
    { title: "Software Engineer", bg: "blue" },
    { title: "Problem Solver", bg: "purple" },
    { title: "Fitness Enthusiast", bg: "green" },
    { title: "Disciplined", bg: "yellow" },
    { title: "Perfectionist", bg: "red" },
    { title: "Detail Oriented", bg: "pink" },
    { title: "Curious Learner", bg: "amber" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero works={works} />
      <TechStack />
      <About />
      <Projects />
      <ChatWidget />
    </main>
  );
}
