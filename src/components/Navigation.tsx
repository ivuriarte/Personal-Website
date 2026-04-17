"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ChevronDown } from "lucide-react";

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHireOpen, setIsHireOpen] = useState(false);
  const hireRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (hireRef.current && !hireRef.current.contains(e.target as Node)) {
        setIsHireOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass border-b border-zinc-800/50 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative group"
            aria-label="Go to top"
          >
            <span className="text-xl font-bold tracking-tight">
              <span className="gradient-text">IVU</span>
              <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                .dev
              </span>
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-rose-500 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div ref={hireRef} className="relative">
              <button
                onClick={() => setIsHireOpen((v) => !v)}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-orange-600 hover:bg-orange-500 text-white transition-all duration-200 btn-glow"
              >
                Hire Me
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isHireOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {isHireOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-52 rounded-xl glass border border-zinc-700/60 shadow-xl shadow-black/40 overflow-hidden z-50"
                  >
                    <a
                      href="mailto:ivvuriarte@gmail.com"
                      onClick={() => setIsHireOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-200 hover:bg-zinc-700/40 hover:text-amber-300 transition-all duration-150"
                    >
                      <Mail size={15} className="text-amber-400" />
                      Send an Email
                    </a>
                    <div className="h-px bg-zinc-700/50" />
                    <a
                      href="https://www.linkedin.com/in/ian-vince-uriarte-98887919b"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsHireOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-200 hover:bg-zinc-700/40 hover:text-sky-300 transition-all duration-150"
                    >
                      <LinkedinIcon size={15} />
                      Message on LinkedIn
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-zinc-800/50 md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-lg text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/60 transition-all text-sm font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 pb-1 flex flex-col gap-2">
                <a
                  href="mailto:ivvuriarte@gmail.com"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition-all btn-glow"
                >
                  <Mail size={15} />
                  Hire Me — Send an Email
                </a>
                <a
                  href="https://www.linkedin.com/in/ian-vince-uriarte-98887919b"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg glass border border-sky-500/40 text-sky-300 hover:text-sky-200 text-sm font-medium transition-all"
                >
                  <LinkedinIcon size={15} />
                  Hire Me — Message on LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
