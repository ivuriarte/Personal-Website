"use client";

import { useRef } from "react";
import type { Variants } from "framer-motion";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  Lock,
  CheckCircle2,
  Eye,
} from "lucide-react";

function GithubIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080808 0%, #0d0808 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base">
            A selection of applications I&apos;ve designed and built —
            from immersive 3D games to real-world problem-solving platforms.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl glass border border-zinc-800/60 hover:border-zinc-700/60 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/30 gradient-border"
            >
              {/* Card top banner */}
              <div
                className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 dot-pattern opacity-30" />
                {/* Shimmer */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Project number */}
                <div className="relative z-10 text-white/10 font-black text-8xl select-none leading-none">
                  0{project.id}
                </div>

                {/* Private badge */}
                {project.isPrivate && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
                    <Lock size={11} />
                    Private
                  </div>
                )}

                {/* Deployed badge */}
                {!project.isPrivate && project.liveUrl && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-emerald-300 text-xs font-medium">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    Live
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <div>
                  <h3 className="text-zinc-100 font-bold text-lg leading-snug mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-zinc-400 text-xs">
                      <CheckCircle2
                        size={13}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: project.accentColor }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-zinc-800/70 border border-zinc-700/50 text-zinc-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-auto pt-3 flex items-center gap-2 flex-wrap border-t border-zinc-800/50">
                  {project.isPrivate ? (
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                      <Eye size={13} />
                      <span>UI preview available upon request</span>
                    </div>
                  ) : (
                    <>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-all duration-200 hover:opacity-90 btn-glow"
                          style={{ backgroundColor: project.accentColor }}
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-zinc-100 glass border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-200"
                        >
                          <GithubIcon size={12} />
                          Source
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ivuriarte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-zinc-700/50 hover:border-orange-500/40 text-zinc-300 hover:text-amber-300 text-sm font-medium transition-all duration-200"
          >
            <GithubIcon size={16} />
            View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
