"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Brain, Smartphone, Database } from "lucide-react";

const stats = [
  { label: "Batch Rank", value: "3rd" },
  { label: "Key Projects", value: "3+" },
  { label: "Tech Stack", value: "15+" },
  { label: "Core Focus", value: "AI/ML" },
];

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React 18", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend",
    items: ["Node.js", "Spring Boot", "Spring Security", "REST APIs"],
  },
  {
    icon: Brain,
    title: "AI & ML",
    items: ["Python", "PyTorch", "Gemini API", "RAG Pipelines"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Design",
    items: ["React Native", "Flutter", "Figma", "Dart"],
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#050505] py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[#ff004f] font-mono text-sm mb-3 tracking-widest">
              01 — ABOUT ME
            </p>
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl text-white">
              Bridging clean architecture with intelligent experiences.
            </h2>
          </div>
        </motion.div>

        {/* Main Grid: Photo + Summary */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-4 relative rounded-2xl overflow-hidden border border-white/10 min-h-[340px] md:min-h-full"
          >
            <Image
              src="/images/about-photo.jpg"
              alt="Akila Isuru Kahingala"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5">
              <p className="text-white font-medium">Akila Isuru</p>
              <p className="text-gray-400 text-sm">Full-Stack Developer</p>
            </div>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-8 bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff004f]/5 blur-3xl rounded-full" />
            <p className="text-gray-300 leading-relaxed text-lg relative z-10">
              Full Stack Developer specialized in building{" "}
              <span className="text-white font-medium">
                scalable enterprise systems
              </span>{" "}
              and integrating advanced machine learning models into modern web
              applications. Recognized as{" "}
              <span className="text-white font-medium">
                Batch Third (1st Semester) at IJSE
              </span>
              , with expertise expanded through a certified AI/ML program
              covering LLMs, RAG pipelines, and deep learning. I&apos;m
              passionate about bridging clean software architecture with secure,
              seamless user experiences.
            </p>
          </motion.div>
        </div>

        {/* Stats Bar - single unified strip instead of separate boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 bg-[#0e0e0e] border border-white/10 rounded-2xl overflow-hidden mb-6"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 md:p-8 text-center ${
                i !== stats.length - 1 ? "md:border-r border-white/10" : ""
              } ${i % 2 === 0 ? "border-r md:border-r-0 border-white/10" : ""}`}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#ff004f]">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-6 hover:border-[#ff004f]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-[#ff004f]/10 flex items-center justify-center mb-4">
                <cat.icon className="text-[#ff004f]" size={22} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">
                {cat.title}
              </h3>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
