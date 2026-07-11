"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiMysql,
  SiMongodb,
  SiCloudinary,
  SiFirebase,
  SiPython,
  SiPytorch,
  SiFlutter,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { ShieldCheck, Database, Webhook } from "lucide-react";

const techs = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss, name: "CSS3", color: "#1572B6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { icon: SiVite, name: "Vite", color: "#B073FF" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express", color: "#FFFFFF" },
  { icon: FaJava, name: "Java", color: "#EA2D2E" },
  { icon: SiSpring, name: "Spring Boot", color: "#6DB33F" },
  { icon: ShieldCheck, name: "Spring Security", color: "#6DB33F" },
  { icon: Database, name: "Spring Data JPA", color: "#6DB33F" },
  { icon: Webhook, name: "RESTful APIs", color: "#FF004F" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiMongodb, name: "MongoDB Atlas", color: "#47A248" },
  { icon: SiCloudinary, name: "Cloudinary", color: "#3448C5" },
  { icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

const RADIUS = 620; // 3D circle radius - bigger now
const ANGLE_STEP = 360 / techs.length;

export default function TechMarquee() {
  return (
    <section className="bg-[#050505] pt-4 pb-20 overflow-hidden border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white mb-8"
        >
          Tech I Work With
        </motion.h2>
      </div>

      <div
        className="relative w-full h-64 flex items-center justify-center"
        style={{ perspective: "2200px" }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {techs.map((tech, i) => {
            const angle = ANGLE_STEP * i;
            return (
              <div
                key={tech.name}
                className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center w-32"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#0e0e0e] border border-white/10 flex items-center justify-center shadow-lg">
                  <tech.icon size={52} color={tech.color} />
                </div>
                <span className="text-gray-400 text-sm mt-3 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
