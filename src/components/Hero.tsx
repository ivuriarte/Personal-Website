"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const ROLES = [
  "Business Analyst II",
  "Agile Project Manager",
  "UI/UX Enthusiast",
  "AI Application Developer",
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.substring(0, displayText.length + 1));
          if (displayText.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setDisplayText(current.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, speed, pause]);

  return displayText;
}

// Floating particle
function Particle({
  x,
  y,
  delay,
  size,
}: {
  x: string;
  y: string;
  delay: number;
  size: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-orange-500/20 blur-sm pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

const PARTICLES = [
  { x: "10%", y: "20%", delay: 0, size: 6 },
  { x: "85%", y: "15%", delay: 1.2, size: 10 },
  { x: "70%", y: "60%", delay: 0.5, size: 7 },
  { x: "25%", y: "75%", delay: 2, size: 5 },
  { x: "55%", y: "30%", delay: 1.8, size: 8 },
  { x: "40%", y: "85%", delay: 0.8, size: 6 },
  { x: "90%", y: "80%", delay: 1.5, size: 9 },
  { x: "5%", y: "55%", delay: 2.5, size: 5 },
];

export default function Hero() {
  const roleText = useTypewriter(ROLES);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-rose-700/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-amber-600/8 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 text-sm text-amber-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <Sparkles size={14} className="text-amber-400" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-none"
        >
          <span className="text-zinc-100">Ian Vince</span>
          <br />
          <span className="gradient-text">Uriarte</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl font-medium text-zinc-300 mb-4 h-10 flex items-center justify-center gap-2"
        >
          <span className="text-orange-400 font-mono">&gt;</span>
          <span>{roleText}</span>
          <span className="cursor-blink text-orange-400 font-thin">|</span>
        </motion.div>

        {/* Static role pills — always visible */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.58 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {[
            { label: "Business Analyst II", color: "border-amber-500/40 text-amber-300 bg-amber-500/8" },
            { label: "Agile Project Manager", color: "border-orange-500/40 text-orange-300 bg-orange-500/8" },
            { label: "UI/UX Enthusiast", color: "border-rose-500/40 text-rose-300 bg-rose-500/8" },
            { label: "AI Application Developer", color: "border-zinc-600/60 text-zinc-300 bg-zinc-700/20" },
          ].map((role) => (
            <span
              key={role.label}
              className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${role.color}`}
            >
              {role.label}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A{" "}
          <span className="text-amber-300 font-medium">Business Analyst&apos;s precision</span>{" "}
          applied across the full project lifecycle — defining what matters,
          aligning stakeholders, and{" "}
          <span className="text-amber-300 font-medium">delivering high-value outcomes</span>{" "}
          from requirements through to shipped product.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm tracking-wide btn-glow transition-all duration-200 w-full sm:w-auto"
          >
            View My Work
          </button>
          <button
            onClick={scrollToAbout}
            className="px-8 py-3.5 rounded-xl glass border border-zinc-700/50 hover:border-orange-500/50 text-zinc-200 hover:text-white font-semibold text-sm tracking-wide transition-all duration-200 w-full sm:w-auto"
          >
            About Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          {[
            {
              href: "https://github.com/ivuriarte",
              icon: GithubIcon,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/ian-vince-uriarte-98887919b",
              icon: LinkedinIcon,
              label: "LinkedIn",
            },
            {
              href: "mailto:ivvuriarte@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="p-2.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 border border-transparent hover:border-zinc-700/50 transition-all duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-xs text-zinc-600 mb-8 tracking-widest uppercase"
        >
          📍 Davao City, Philippines
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 hover:text-zinc-400 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
