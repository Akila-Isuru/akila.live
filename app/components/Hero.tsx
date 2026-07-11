"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="header"
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpeg"
        alt="Akila Isuru"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay for readability - lighter for more image visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 pt-24"
      >
        <p className="text-lg md:text-xl text-gray-300 mb-2">
          Hello It&apos;s Me
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Akila Isuru
        </h1>
        <div
          className="text-2xl md:text-4xl font-medium text-gray-200"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          And I&apos;m a{" "}
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "AI & ML Engineer",
              2000,
              "Web Developer",
              2000,
              "UI/UX Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
            className="text-[#ff004f]"
            repeat={Infinity}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-10">
          <a
            href="/files/Akila_Isuru_Kahingala_CV.pdf"
            download="Akila_Isuru_Kahingala_CV.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-[#ff004f] text-white rounded-md font-medium hover:bg-[#e60045] transition-colors duration-300"
          >
            <Download size={18} />
            Download CV
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 border border-white/30 text-white rounded-md font-medium hover:border-[#ff004f] hover:text-[#ff004f] transition-colors duration-300"
          >
            View Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
