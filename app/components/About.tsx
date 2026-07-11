"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Briefcase } from "lucide-react";

const stats = [
  { label: "Projects Delivered", value: "15+" },
  { label: "Availability", value: "Open" },
];

const education = [
  {
    icon: GraduationCap,
    title: "Graduate Diploma in Software Engineering",
    org: "Institute of Software Engineering (IJSE)",
    period: "Sept 2024 – Present",
    detail: "Major: Software Development | Minor: Machine Learning",
  },
  {
    icon: Award,
    title: "Certified AI & ML Engineer Program",
    org: "Institute of Software Engineering (IJSE)",
    period: "Feb 2024 – Jun 2026",
    detail:
      "Clasical Machine Learning, LLM Fundamentals, RAG Systems, Data Analysis",
  },
  {
    icon: BookOpen,
    title: "G.C.E. Advanced Level — Physical Science Stream",
    org: "G/P.De S. Kularathne College, Ambalangoda",
    period: "2023",
    detail: null,
  },
];

const experience = [
  {
    icon: Briefcase,
    title: "Freelance Full-Stack Developer",
    org: "Self-Employed",
    period: "Ongoing",
    detail:
      "Delivered production-grade web and desktop applications for commercial clients — including a Driving School Management Platform (React, Node.js, JWT + OAuth) and an Enterprise POS Desktop System (Java Spring Boot, JavaFX, MySQL).",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#050505] pt-28 pb-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#ff004f] font-mono text-sm mb-3 tracking-widest">
            01 — ABOUT ME
          </p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-2xl text-white">
            Logic. Craft. Experience.
          </h2>
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
              I&apos;m a{" "}
              <span className="text-white font-medium">
                23 year old Full Stack Developer
              </span>{" "}
              specialized in building scalable enterprise systems and
              integrating advanced machine learning models into modern web
              applications. Recognized as Batch Third (1st Semester) at IJSE ,
              I&apos;m currently studying web and mobile development alongside a
              certified AI/ML program covering LLMs, RAG pipelines, and deep
              learning. I&apos;m passionate about bridging clean software
              architecture with secure, seamless user experiences — and outside
              of code, you&apos;ll find me exploring music, traveling, and
              gaming.
            </p>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 bg-[#0e0e0e] border border-white/10 rounded-2xl overflow-hidden mb-14 max-w-md mx-auto md:mx-0"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 md:p-8 text-center ${
                i === 0 ? "border-r border-white/10" : ""
              }`}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#ff004f] flex items-center justify-center gap-2">
                {stat.value === "Open" && (
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff004f] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff004f]" />
                  </span>
                )}
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Education & Experience - split into two subtle sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 p-5 bg-[#0e0e0e] border border-white/10 rounded-xl hover:border-[#ff004f]/30 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#ff004f] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs mt-1">{item.org}</p>
                      {item.detail && (
                        <p className="text-gray-500 text-xs mt-1">
                          {item.detail}
                        </p>
                      )}
                      <p className="text-[#ff004f] text-xs mt-2 font-mono">
                        {item.period}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-4">
              {experience.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 p-5 bg-[#0e0e0e] border border-white/10 rounded-xl hover:border-[#ff004f]/30 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#ff004f] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs mt-1">{item.org}</p>
                      <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                        {item.detail}
                      </p>
                      <p className="text-[#ff004f] text-xs mt-2 font-mono">
                        {item.period}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
