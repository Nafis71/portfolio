// import React from "react";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  Globe,
  Menu,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Github as GithubIcon,
} from "lucide-react";

import Hero from "./hero";
import ProjectShowcase from "./ProjectShowcase";

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      <a href="#" className="text-2xl font-black italic tracking-tighter text-white">
        <span className="bg-accent px-2 py-0.5 rounded">Tonmoy.</span>
      </a>
      
      <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-text-gray">
        <a href="#" className="hover:text-accent transition-colors">Home</a>
        <a href="#about" className="hover:text-accent transition-colors">About</a>
        <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
        <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="mailto:nhtonmoy2@gmail.com" 
          className="hidden sm:block px-4 py-2 rounded border border-accent/30 text-[10px] font-black uppercase tracking-widest text-accent hover:bg-accent hover:text-white transition-all"
        >
          Hire Me
        </a>
        <div className="md:hidden p-2">
          <Menu className="w-5 h-5 text-text-gray" />
        </div>
      </div>
    </nav>
  </header>
);

const TechStack = () => (
  <section className="border-y border-foreground/5 bg-secondary-bg/30 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-wrap justify-center md:justify-between gap-8 text-text-gray font-medium uppercase tracking-widest text-sm">
        <span>Flutter</span>
        <span>Dart</span>
        <span>Firebase</span>
        <span>REST API</span>
        <span>GetX</span>
        <span>Provider</span>
        <span>Hive</span>
        <span>Sqflite</span>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="px-6 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start border-b border-white/5">
    <div className="space-y-12">
      <div className="flex gap-6 items-start">
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="p-3 bg-secondary-bg rounded-lg">
            <Smartphone className="w-6 h-6 text-accent" />
          </div>
          <div className="w-[1px] h-12 bg-accent/30" />
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Cross-Platform App Development</h3>
          <p className="text-text-gray text-sm">Reliable Android & iOS apps using Flutter.</p>
        </div>
      </div>

      <div className="flex gap-6 items-start">
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="p-3 bg-secondary-bg rounded-lg">
            <Globe className="w-6 h-6 text-accent" />
          </div>
          <div className="w-[1px] h-12 bg-accent/30" />
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Backend Integration</h3>
          <p className="text-text-gray text-sm">REST APIs, Firebase, and Cloud Sync.</p>
        </div>
      </div>

      <div className="flex gap-6 items-start">
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="p-3 bg-secondary-bg rounded-lg">
            <Code2 className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Clean Code & Architecture</h3>
          <p className="text-text-gray text-sm">State management with GetX and Provider.</p>
        </div>
      </div>
    </div>

    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold mb-6">About me</h2>
        <p className="text-text-gray leading-relaxed max-w-lg">
          I am a Flutter Developer with 2+ years of experience building reliable cross-platform apps. I specialize in Flutter, Dart, REST APIs, and Firebase, with proven experience managing Play Store and App Store releases for stable, crash-free apps. 
          Currently serving as a Mid-Level Flutter Developer at SaraTech Ltd.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-foreground/5">
        <div>
          <div className="text-3xl font-bold mb-1 text-accent">2+</div>
          <div className="text-xs text-text-gray uppercase tracking-wider">Years of<br/>experience</div>
        </div>
        <div>
          <div className="text-3xl font-bold mb-1 text-accent">100%</div>
          <div className="text-xs text-text-gray uppercase tracking-wider">Crash-free<br/>stability</div>
        </div>
      </div>

      <div className="pt-8 border-t border-foreground/5">
        <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-text-gray">Education</h4>
        <div className="text-sm">
            <p className="font-bold">BSc in Computer Science & Engineering</p>
            <p className="text-text-gray">Bangladesh University of Business and Technology</p>
            <p className="text-xs text-text-gray/60 mt-1">2020 – 2024</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const contacts = [
    { icon: Mail, label: "Email", value: "nhtonmoy2@gmail.com", href: "mailto:nhtonmoy2@gmail.com" },
    { icon: Phone, label: "Phone", value: "+880 1304-951029", href: "tel:+8801304951029" },
    { icon: Linkedin, label: "LinkedIn", value: "/nafishasantonmoy", href: "https://linkedin.com/in/nafishasantonmoy" },
    { icon: GithubIcon, label: "Github", value: "nafis-tonmoy", href: "https://github.com" },
  ];

  return (
    <section id="contact" className="px-6 py-32 max-w-7xl mx-auto">
      <div className="relative rounded-[3rem] bg-secondary-bg/50 border border-white/5 p-8 md:p-16 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] -z-10" />

        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <span className="text-accent italic">extraordinary</span> together.</h2>
          <p className="text-text-gray text-lg mb-12 leading-relaxed">
            Currently available for new opportunities and interesting projects. 
            Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((contact, i) => (
            <a 
              key={i} 
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-background/50 border border-white/5 hover:border-accent/30 hover:bg-background transition-all"
            >
              <contact.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-bold uppercase tracking-widest text-text-gray mb-1">{contact.label}</p>
              <p className="text-sm font-medium truncate">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const projectsData = [
    {
      title: "GINZA XIAOMA",
      tech: "Flutter, Dart, Rest Api, Firebase, GetX",
      desc: "A luxury resale app for Hermès products, enabling users to buy, sell, and consign premium items across Japan and Hong Kong. (Successfully published on App Store & Play Store)",
      images: [
        "/mobilepictures/ginxaxioma/1.png",
        "/mobilepictures/ginxaxioma/2.png",
        "/mobilepictures/ginxaxioma/3.png",
        "/mobilepictures/ginxaxioma/4.png"
      ]
    },
    {
      title: "CamScanify",
      tech: "Flutter, Dart, Rest Api, Sqflite, GetX",
      desc: "A PDF management app for scanning, creating, and organizing PDFs with secure offline access and cloud sync.",
      images: [
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    {
      title: "TailorHive",
      tech: "Flutter, Dart, Firebase, GetX",
      desc: "A tailor discovery app connecting users with verified local tailors via location-based search and real-time chat.",
      images: [
        "https://images.unsplash.com/photo-1484158810333-adeaf385172b?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    {
        title: "TrackaTail",
        tech: "Flutter, Dart, Firebase, Rest Api, GetX",
        desc: "An all-in-one pet care app that helps owners track health data, set reminders, and connect with local pet services.",
        images: [
          "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop"
        ]
      }
];

export default function Home() {
  const works = [
    { title: "Flutter Developer", bg: "blue" },
    { title: "Mobile Specialist", bg: "purple" },
    { title: "Clean Coder", bg: "green" },
    { title: "Problem Solver", bg: "yellow" },
    { title: "Mid-Level Dev", bg: "red" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth pt-24 md:pt-32">
      <Navbar />
      <Hero works={works} />
      <TechStack />
      <About />
      <ProjectShowcase projects={projectsData} />
      <Contact />
      
      <footer className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tight">Tonmoy.</div>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-text-gray">
            <a href="#" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-gray/40">
            &copy; 2026 Crafted with precision
          </div>
        </div>
      </footer>
    </main>
  );
}
