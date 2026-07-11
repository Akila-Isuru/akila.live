"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Email send failed:", error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akilaisurukahingala@gmail.com",
      link: "mailto:akilaisurukahingala@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 77 513 2538",
      link: "tel:+94761234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ambalangoda, Sri Lanka",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/Akila-Isuru",
      color: "#ffffff",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/akila-isuru-kahingala-078239341/",
      color: "#0A66C2",
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      url: "https://www.facebook.com/akilaisuru.kahingala",
      color: "#1877F2",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://www.instagram.com/akilaisurukahingala/",
      color: "#E4405F",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      url: "https://www.youtube.com/channel/UCmcJDTzWdvikjoC8r6TFtBw",
      color: "#FF0000",
    },
  ];

  return (
    <section id="contact" className="bg-[#050505] py-24 px-6 md:px-10">
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
            04 — CONTACT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="text-[#ff004f]">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Have a project in mind or want to collaborate? Feel free to reach
            out — I&apos;m always open to new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a <span className="text-[#ff004f]">Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff004f]/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff004f]/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ff004f]/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#ff004f] text-white rounded-lg font-medium hover:bg-[#e60045] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {isError && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact <span className="text-[#ff004f]">Info</span>
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.link}
                      target={item.label === "Location" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#1f1f1f] transition-colors group"
                    >
                      <div className="p-3 bg-[#ff004f]/10 rounded-lg group-hover:bg-[#ff004f]/20 transition-colors">
                        <Icon size={20} className="text-[#ff004f]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With <span className="text-[#ff004f]">Me</span>
              </h3>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl hover:border-[#ff004f]/30 transition-all hover:scale-105 group"
                    >
                      <Icon size={20} style={{ color: item.color }} />
                      <span className="text-white font-medium text-sm">
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-white font-medium">
                  Available for freelance work
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                I&apos;m currently open to new projects and collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
