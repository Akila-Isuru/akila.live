"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <a href="#header" className="text-xl font-bold tracking-wide">
              AKILA<span className="text-[#ff004f]">.</span>
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-sm text-center"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>

          {/* Built with */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-xs text-center"
          >
            Built with ❤️ using Next.js & Tailwind CSS
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 p-3 bg-[#0e0e0e] border border-white/10 rounded-full hover:border-[#ff004f]/40 transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp
              size={18}
              className="text-[#ff004f] group-hover:scale-110 transition-transform"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
