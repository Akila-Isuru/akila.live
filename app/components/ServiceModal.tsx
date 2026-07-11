"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle,
  Monitor,
  Code2,
  Smartphone,
  Brain,
  Palette,
} from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    longDescription: string;
    icon: any;
    color: string;
    skills: string[];
    projects?: string[];
    features?: string[];
  };
}

export default function ServiceModal({
  isOpen,
  onClose,
  service,
}: ServiceModalProps) {
  if (!isOpen || !service) return null;

  const getIconColor = (title: string) => {
    switch (title) {
      case "Web Development":
        return "#61DAFB";
      case "Standalone Applications":
        return "#6DB33F";
      case "Mobile Development":
        return "#02569B";
      case "AI & ML Engineering":
        return "#EE4C2C";
      case "UI/UX Design":
        return "#F24E1E";
      default:
        return "#ff004f";
    }
  };

  const getIcon = (title: string) => {
    switch (title) {
      case "Web Development":
        return <Code2 size={32} style={{ color: "#61DAFB" }} />;
      case "Standalone Applications":
        return <Monitor size={32} style={{ color: "#6DB33F" }} />;
      case "Mobile Development":
        return <Smartphone size={32} style={{ color: "#02569B" }} />;
      case "AI & ML Engineering":
        return <Brain size={32} style={{ color: "#EE4C2C" }} />;
      case "UI/UX Design":
        return <Palette size={32} style={{ color: "#F24E1E" }} />;
      default:
        return <Code2 size={32} style={{ color: "#ff004f" }} />;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative bg-[#0e0e0e] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>

          {/* Icon */}
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${getIconColor(service.title)}15` }}
          >
            {getIcon(service.title)}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            {service.longDescription}
          </p>

          {/* Features */}
          {service.features && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <CheckCircle
                      size={16}
                      className="text-[#ff004f] flex-shrink-0 mt-1"
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects / Related Work */}
          {service.projects && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Related Projects
              </h4>
              <div className="flex flex-wrap gap-3">
                {service.projects.map((project) => (
                  <span
                    key={project}
                    className="px-3 py-1 text-sm bg-[#ff004f]/10 border border-[#ff004f]/20 rounded-lg text-[#ff004f]"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-[#ff004f] text-white rounded-lg font-medium hover:bg-[#e60045] transition-colors"
              onClick={onClose}
            >
              Let's Work Together
            </a>
            <a
              href="#portfolio"
              className="px-6 py-2.5 border border-white/20 text-white rounded-lg font-medium hover:border-[#ff004f] hover:text-[#ff004f] transition-colors"
              onClick={onClose}
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
