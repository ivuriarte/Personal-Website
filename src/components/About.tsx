"use client";

import { useRef } from "react";
import type { Variants } from "framer-motion";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin, Briefcase, Calendar, Code2, Award } from "lucide-react";

const LINKEDIN_PHOTO =
  "https://media.licdn.com/dms/image/v2/C5603AQF5xiyH0Y_VqQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1603888380058?e=2147483647&v=beta&t=4R4pRc8mztlF-kiFozWTS1tsKmFUWVjMyG7lXEziWz4";

const highlights = [
  {
    icon: Briefcase,
    value: "5+",
    label: "Years Experience",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: Code2,
    value: "3+",
    label: "Projects Deployed",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Award,
    value: "BA II",
    label: "@ World Vision",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Calendar,
    value: "2026",
    label: "Open to Work",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-padding bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row gap-16 items-start"
        >
          {/* Left: Avatar + quick facts */}
          <motion.div variants={itemVariants} className="lg:w-2/5 flex flex-col items-center lg:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl gradient-border-animated p-0.5">
                <div className="w-full h-full rounded-2xl bg-zinc-900 overflow-hidden relative">
                  <Image
                    src={LINKEDIN_PHOTO}
                    alt="Ian Vince Uriarte"
                    fill
                    className="object-cover"
                    sizes="160px"
                    unoptimized
                  />
                </div>
              </div>
              {/* Active badge */}
              <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-zinc-900 border border-emerald-500/30 flex items-center gap-1.5 text-xs text-emerald-400 font-medium shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available
              </div>
            </div>

            {/* Name + location */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-zinc-100">
                Ian Vince Uriarte
              </h3>
              <p className="text-sm text-amber-400 font-medium mt-0.5">
                Analyst · Manager · UI/UX Enthusiast · Builder
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 mt-2 text-zinc-500 text-xs">
                <MapPin size={12} />
                <span>Davao City, Philippines</span>
              </div>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {highlights.map((h) => (
                <motion.div
                  key={h.label}
                  variants={itemVariants}
                  className={`p-3 rounded-xl border glass flex flex-col gap-1.5 ${h.bg}`}
                >
                  <h.icon size={16} className={h.color} />
                  <p className={`text-lg font-bold ${h.color}`}>{h.value}</p>
                  <p className="text-zinc-400 text-xs leading-tight">{h.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div variants={itemVariants} className="lg:w-3/5">
            {/* Section heading */}
            <div className="mb-8">
              <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 leading-tight">
                Always curious.{" "}
                <span className="gradient-text">Always venturing.</span>
              </h2>
            </div>

            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p>
                My career is grounded in{" "}
                <span className="text-zinc-200 font-medium">Business Analysis</span> — gathering
                and validating requirements, mapping business processes, conducting gap
                analyses, and turning complex stakeholder needs into clear, scoped
                specifications. As{" "}
                <span className="text-zinc-200 font-medium">Business Analyst II at World Vision</span>,
                I drive initiatives spanning system implementations, process improvements,
                and cross-functional projects that create measurable organizational impact.
              </p>
              <p>
                That analytical foundation naturally led me into{" "}
                <span className="text-zinc-200 font-medium">Agile Project Management</span> —
                where being able to trace every deliverable back to a validated business
                requirement means fewer surprises, less rework, and teams that stay aligned
                on outcomes rather than just timelines. Along the way I developed a genuine
                interest in{" "}
                <span className="text-zinc-200 font-medium">user experience</span> — not as a
                designer, but as someone who cares deeply about how people interact with
                the things we build.
              </p>
              <p>
                Most recently, I expanded into{" "}
                <span className="text-zinc-200 font-medium">web development</span> — building
                and shipping the solutions I once only specified. Each role I&apos;ve taken
                on has been an intentional step forward, and{" "}
                <span className="text-amber-300 font-medium">that full-cycle ownership</span>{" "}
                — from business case through to deployed product — is what makes my
                perspective genuinely different.
              </p>
            </div>

            {/* Roles */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Business Analyst II",
                "Requirements Engineering",
                "Agile Project Manager",
                "Stakeholder Management",
                "UI/UX Enthusiast",
                "Web Developer",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium glass border border-zinc-700/50 text-zinc-300 hover:border-orange-500/40 hover:text-amber-300 transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
