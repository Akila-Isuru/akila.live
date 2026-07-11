"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Brain,
  Palette,
  ArrowRight,
  Monitor,
} from "lucide-react";
import ServiceModal from "./ServiceModal";

const servicesData = [
  {
    icon: Code2,
    title: "Web Development",
    color: "#61DAFB",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Spring Boot"],
    description:
      "Building scalable full-stack web applications using modern technologies with clean architecture.",
    longDescription:
      "I specialize in building production-grade web applications using cutting-edge technologies. From responsive frontends with React/Next.js to robust backends with Node.js/Spring Boot, I deliver complete solutions that are scalable, secure, and performant. My experience includes implementing authentication, payment integration, and complex business logic.",
    features: [
      "Responsive & Mobile-First Design",
      "Secure Authentication (JWT, OAuth)",
      "RESTful API Development",
      "Database Design & Management",
      "Performance Optimization",
      "Payment Gateway Integration",
    ],
    projects: ["LankaTravel", "SkillSwap Hub", "Driving School Platform"],
  },
  {
    icon: Monitor,
    title: "Standalone Applications",
    color: "#6DB33F",
    skills: ["Java", "Spring Boot", "JavaFX", "MySQL", "Desktop Apps"],
    description:
      "Enterprise-grade desktop applications with robust architectures and modern JavaFX interfaces.",
    longDescription:
      "I develop standalone desktop applications for enterprise solutions using Java Spring Boot and JavaFX. These applications feature modern UI/UX with real-time data handling, complex business logic, and seamless database integration. My experience includes building POS systems, inventory management, and business process automation tools that are reliable and scalable.",
    features: [
      "Enterprise POS Systems",
      "Inventory Management",
      "Real-time Stock Tracking",
      "Order Management",
      "Daily Sales Reporting",
      "Layered Architecture",
      "MySQL Database Integration",
      "Modern JavaFX UI/UX",
    ],
    projects: ["Enterprise POS System", "Inventory Management System"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    color: "#02569B",
    skills: ["React Native", "Flutter", "Dart", "Expo", "Firebase"],
    description:
      "Cross-platform mobile apps using React Native and Flutter for iOS and Android.",
    longDescription:
      "Creating native-like mobile experiences across platforms using React Native (Expo) and Flutter. I build apps that are performant, visually appealing, and deliver seamless user experiences. From social apps to business applications, I ensure smooth performance and beautiful interfaces.",
    features: [
      "Cross-Platform Development",
      "Native-Like Performance",
      "Push Notifications",
      "Offline Support",
      "App Store Deployment",
      "Firebase Integration",
    ],
    projects: ["Cross-Platform Mobile Apps"],
  },
  {
    icon: Brain,
    title: "AI & ML Engineering",
    color: "#EE4C2C",
    skills: ["Python", "PyTorch", "LLMs", "RAG", "Gemini API"],
    description:
      "Integrating cutting-edge AI/ML capabilities using PyTorch and modern LLMs.",
    longDescription:
      "Bringing artificial intelligence to real-world applications. I work with deep learning frameworks (PyTorch), large language models (LLMs), and RAG pipelines to build intelligent solutions. My expertise includes model fine-tuning, bias mitigation, and deploying AI-powered features into production applications.",
    features: [
      "LLM Integration (Gemini, OpenAI)",
      "RAG Pipeline Development",
      "Deep Learning (PyTorch)",
      "Data Analysis & Visualization",
      "Model Fine-Tuning",
      "Ethical AI Implementation",
    ],
    projects: ["FairAge", "AI Trip Planner"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    color: "#F24E1E",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
    description:
      "Creating intuitive and visually appealing interfaces with modern design principles.",
    longDescription:
      "Designing user-centric interfaces that are not only beautiful but also functional. I use Figma for prototyping and design systems, ensuring seamless user experiences across platforms. My approach combines user research with modern design trends to create engaging digital experiences.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Design Systems",
      "User Testing",
      "Responsive Design",
      "Brand Identity",
    ],
    projects: ["UI/UX for LankaTravel", "Mobile App Prototypes"],
  },
];

export default function Services() {
  type ServiceType = (typeof servicesData)[number];
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service: ServiceType) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="services" className="bg-[#050505] py-24 px-6 md:px-10">
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
              02 — SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What I <span className="text-[#ff004f]">Offer</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Transforming ideas into powerful digital solutions with modern
              technologies and innovative approaches.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 hover:border-[#ff004f]/30 transition-all duration-300"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff004f]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <Icon size={28} style={{ color: service.color }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {service.skills.length > 4 && (
                        <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-500">
                          +{service.skills.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Learn More Link */}
                    <button
                      onClick={() => handleLearnMore(service)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#ff004f] hover:gap-3 transition-all duration-300 cursor-pointer"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService!}
      />
    </>
  );
}
