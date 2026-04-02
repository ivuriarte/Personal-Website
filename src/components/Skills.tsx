"use client";

import { useRef } from "react";
import type { Variants } from "framer-motion";
import { motion, useInView } from "framer-motion";

interface SkillCategory {
  label: string;
  color: string;
  bgColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Business & Agile",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10 border-amber-500/20",
    skills: [
      "Business Analysis",
      "Agile / Scrum",
      "Stakeholder Management",
      "Requirements Gathering",
      "Process Optimization",
      "JIRA / Confluence",
      "User Story Mapping",
    ],
  },
  {
    label: "UX & Design Thinking",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10 border-rose-500/20",
    skills: [
      "Design Thinking",
      "User Empathy",
      "Wireframing",
      "Prototyping",
      "Figma (Enthusiast)",
      "User Story Mapping",
    ],
  },
  {
    label: "AI & Emerging",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10 border-purple-500/20",
    skills: [
      "AI-Assisted Development",
      "Prompt Engineering",
      "GitHub Copilot",
      "LLM Integration",
      "Procedural Audio",
      "Location-Based Services",
    ],
  },
  {
    label: "Frontend & 3D",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10 border-orange-500/20",
    skills: [
      "React",
      "Next.js",
      "Three.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    label: "Backend & Data",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10 border-emerald-500/20",
    skills: [
      "Node.js",
      "REST APIs",
      "SQL",
      "Supabase",
      "Firebase",
      "PostgreSQL",
    ],
  },
  {
    label: "Tools & DevOps",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10 border-cyan-500/20",
    skills: [
      "Git & GitHub",
      "Vercel",
      "VS Code",
      "Postman",
      "Notion",
      "Vite",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" ref={ref} className="section-padding bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base">
            Five years across business analysis, project management, UX design,
            and AI-powered development — across every phase of the product lifecycle.
          </p>
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={itemVariants}
              className={`rounded-2xl glass border p-5 ${cat.bgColor} hover:border-opacity-40 transition-all duration-300 gradient-border`}
            >
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${cat.color}`}>
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium glass border border-zinc-700/40 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600/50 cursor-default transition-all duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
