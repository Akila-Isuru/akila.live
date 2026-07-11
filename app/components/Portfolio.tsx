"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Globe,
  Smartphone,
  Monitor,
  Brain,
  X,
  CheckCircle,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LankaTravel",
    category: "Web",
    icon: Globe,
    color: "#61DAFB",
    image: "/images/projects/lankatravel.jpg",
    description:
      "Full-featured Sri Lanka tourism platform with AI trip planner, secure authentication, and payment processing.",
    longDescription:
      "Developed a comprehensive tourism platform for Sri Lanka featuring user authentication, destination management, and stay bookings. Integrated Google Gemini API for personalized AI trip planning with fuzzy destination matching. Implemented secure JWT authentication with refresh tokens and role-based access control (User/Admin), along with Google and Facebook OAuth. Configured OSRM-based travel time routing via interactive Leaflet maps and automated payment processing using the PayHere sandbox.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini API",
      "Tailwind CSS",
      "PayHere",
    ],
    features: [
      "AI Trip Planner with Gemini API",
      "JWT Authentication with Refresh Tokens",
      "Google & Facebook OAuth",
      "Interactive Leaflet Maps",
      "PayHere Payment Integration",
      "Role-based Access Control",
    ],
    demo: "https://travel-lanka-fe.vercel.app/login",
    github: "https://github.com/Akila-Isuru/lankatravel",
  },
  {
    id: 2,
    title: "SkillSwap Hub",
    category: "Web",
    icon: Globe,
    color: "#6DB33F",
    image: "/images/projects/skillswap.jpg",
    description:
      "Collaborative platform bridging users to exchange professional skills with a dual-role 'Teach/Learn' architecture.",
    longDescription:
      "Engineered a full-stack platform connecting users to exchange professional skills with a dual-role 'Teach/Learn' architecture. Designed the backend using Spring Boot and Spring Data JPA for efficient user, skill, and swap-request management. Implemented a transparent review and rating system featuring a dynamic contributor leaderboard based on community performance. Secured the platform with Spring Security and JWT.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "JavaScript",
      "HTML/CSS",
    ],
    features: [
      "Dual-role Teach/Learn Architecture",
      "Review & Rating System",
      "Contributor Leaderboard",
      "Spring Security with JWT",
      "Role-based Access Control",
      "Real-time Swap Management",
    ],
    demo: "https://skillswap.vercel.app",
    github: "https://github.com/Akila-Isuru/skillswap-hub",
  },
  {
    id: 3,
    title: "FairAge",
    category: "AI/ML",
    icon: Brain,
    color: "#EE4C2C",
    image: "/images/projects/ai.jpg",
    description:
      "Fairness-aware age estimation using deep learning with bias mitigation strategies.",
    longDescription:
      "Fine-tuned a ResNet-50 model on a dataset of 86,744 images across 9 age categories, achieving over 57% test accuracy. Conducted a comprehensive fairness audit to identify racial accuracy gaps and applied bias-mitigation strategies including WeightedRandomSampler and class-weighted cross-entropy. Deployed the model via a live Streamlit web application featuring real-time prediction and probability visualization.",
    tech: ["Python", "PyTorch", "ResNet-50", "Streamlit", "Pandas", "NumPy"],
    features: [
      "ResNet-50 Fine-tuning",
      "86,744 Image Dataset",
      "9 Age Categories",
      "Bias Mitigation Strategies",
      "Real-time Predictions",
      "Probability Visualization",
    ],
    demo: "https://fairage.streamlit.app",
    github: "https://github.com/Akila-Isuru/fairage",
  },
  {
    id: 4,
    title: "Enterprise POS System",
    category: "Desktop",
    icon: Monitor,
    color: "#6DB33F",
    image: "/images/projects/pos.jpg",
    description:
      "Modern desktop POS system with real-time stock tracking, order management, and sales reporting.",
    longDescription:
      "Developed a production-grade Enterprise Point-of-Sale (POS) Desktop System leveraging a layered Java Spring Boot architecture and MySQL. Designed a modern JavaFX user interface for real-time stock tracking, order management, and daily sales reporting. Implemented end-to-end project lifecycle management with scalable database models.",
    tech: ["Java", "Spring Boot", "JavaFX", "MySQL", "Layered Architecture"],
    features: [
      "Real-time Stock Tracking",
      "Order Management",
      "Daily Sales Reporting",
      "Modern JavaFX UI",
      "Layered Architecture",
      "MySQL Database Integration",
    ],
    demo: "#",
    github: "https://github.com/Akila-Isuru/pos-system",
  },
  {
    id: 5,
    title: "Driving School Platform",
    category: "Web",
    icon: Globe,
    color: "#F24E1E",
    image: "/images/projects/drivingschool.jpg",
    description:
      "Full-stack driving school management platform with secure authentication and SPA routing.",
    longDescription:
      "Co-engineered a full-stack Driving School Management Platform using React, TypeScript, and Node.js/Express. Implemented secure JWT authentication with Google OAuth and resolved complex SPA routing and CORS issues to ship a stable production deployment.",
    tech: ["React", "TypeScript", "Node.js", "Express", "JWT", "Google OAuth"],
    features: [
      "Google OAuth Integration",
      "JWT Authentication",
      "SPA Routing",
      "CORS Management",
      "Production Deployment",
      "Secure Architecture",
    ],
    demo: "#",
    github: "https://github.com/Akila-Isuru/driving-school",
  },
];

const categories = ["All", "Web", "Desktop", "AI/ML"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleProjectClick = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleDemoClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    if (url && url !== "#") {
      setNotification(" Opening LankaTravel...");
      setTimeout(() => setNotification(null), 2000);

      setTimeout(() => {
        window.open(url, "_blank");
      }, 300);
    } else {
      setNotification("Demo coming soon!");
      setTimeout(() => setNotification(null), 2000);
    }
  };

  return (
    <>
      <section id="portfolio" className="bg-[#050505] py-24 px-6 md:px-10">
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
              03 — PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My <span className="text-[#ff004f]">Projects</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Exploring innovative solutions through code — each project
              reflects my dedication to clean architecture and seamless user
              experiences.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#ff004f] text-white shadow-lg shadow-[#ff004f]/25"
                    : "bg-[#0e0e0e] border border-white/10 text-gray-400 hover:border-[#ff004f]/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => handleProjectClick(project)}
                  className="group relative bg-[#0e0e0e] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#ff004f]/30 transition-all duration-300"
                >
                  {/* Project Image - Full width, no icon overlay */}
                  <div className="relative h-56 w-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    {/* Dark gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

                    {/* Category Badge - Top Right */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1 text-xs bg-[#ff004f]/20 border border-[#ff004f]/20 rounded-full text-[#ff004f] backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Title overlay at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050505] to-transparent">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#ff004f] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-500">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-[#0e0e0e] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white z-20"
              >
                <X size={24} />
              </button>

              {/* Project Image in Modal */}
              {selectedProject.image && (
                <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
                </div>
              )}

              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs bg-[#ff004f]/20 border border-[#ff004f]/20 rounded-full text-[#ff004f]">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                {selectedProject.longDescription}
              </p>

              {/* Features */}
              {selectedProject.features && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-[#ff004f] text-lg">•</span>
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
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.demo && selectedProject.demo !== "#" && (
                  <button
                    onClick={(e) => handleDemoClick(e, selectedProject.demo)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#ff004f] text-white rounded-lg font-medium hover:bg-[#e60045] transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </button>
                )}
                {selectedProject.github && selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white rounded-lg font-medium hover:border-[#ff004f] hover:text-[#ff004f] transition-colors"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-[#0e0e0e] border border-[#ff004f]/30 rounded-xl shadow-2xl shadow-[#ff004f]/10 flex items-center gap-3"
          >
            <CheckCircle size={18} className="text-[#ff004f]" />
            <span className="text-white text-sm font-medium">
              {notification}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
