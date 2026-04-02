"use client";

import { useRef } from "react";
import type { Variants } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ivvuriarte@gmail.com",
    href: "mailto:ivvuriarte@gmail.com",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20 hover:border-amber-500/40",
    description: "Best for project inquiries",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "ian-vince-uriarte",
    href: "https://www.linkedin.com/in/ian-vince-uriarte-98887919b",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20 hover:border-sky-500/40",
    description: "Professional network",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "ivuriarte",
    href: "https://github.com/ivuriarte",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40",
    description: "Open source projects",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0808 0%, #080808 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            Let&apos;s Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Ready to build{" "}
            <span className="gradient-text">something great?</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base leading-relaxed">
            Whether you have a project in mind, want to discuss an opportunity,
            or just want to say hi — I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={itemVariants}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className={`group flex flex-col gap-3 p-5 rounded-2xl glass border transition-all duration-300 ${link.bg}`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`p-2.5 rounded-xl glass border ${link.bg.split(" ")[1]} ${link.bg.split(" ")[2]}`}
                >
                  <link.icon size={18} className={link.color} />
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
                />
              </div>
              <div>
                <p className="text-zinc-100 font-semibold text-sm">{link.label}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{link.description}</p>
              </div>
              <p className={`text-xs font-mono ${link.color} truncate`}>{link.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:ivvuriarte@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm tracking-wide btn-glow transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <Send size={15} />
            Send me an email
          </a>
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <MapPin size={14} />
            <span>Davao City, Philippines</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
