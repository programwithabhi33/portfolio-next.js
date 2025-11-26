"use client";

import { useState, useEffect } from "react";

import {
  FaLaravel,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaDocker,
  FaYoutube,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiX } from "react-icons/si";
import {
  MdEmail,
  MdDescription,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";

import { FaReact, FaNetworkWired, FaLinux, FaTools } from "react-icons/fa";
import { VscVm, VscTerminalLinux } from "react-icons/vsc";
import { SiNeovim, SiDocker, SiTmux } from "react-icons/si";
import { BsCpu } from "react-icons/bs";
import { MdPublic } from "react-icons/md";

import { motion } from "framer-motion";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  // Save theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const setThemeFn = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  const isDark = theme === "dark";
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen px-6 transition-colors duration-300 ${
        isDark ? "bg-[#1e1e2e] text-[#cdd6f4]" : "bg-[#eff1f5] text-[#4c4f69]"
      }`}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setThemeFn(isDark ? "light" : "dark")}
        className="fixed top-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300
        hover:scale-110 bg-white/10 backdrop-blur-md"
      >
        {isDark ? (
          <MdLightMode className="text-yellow-300 text-2xl" />
        ) : (
          <MdDarkMode className="text-[#1e1e2e] text-2xl" />
        )}
      </button>

      {/* Layout Wrapper */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-28">
        {/* Left Column — Text Content */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className={`heading text-4xl font-bold tracking-tight ${
              isDark ? "text-[#f2cdcd]" : "text-[#dc8a78]"
            }`}
          >
            Abhishek Biranje
          </h1>

          <h2
            className={`text-xl mt-1 font-semibold ${
              isDark ? "text-[#f5e0dc]" : "text-[#d20f39]"
            }`}
          >
            (programwithabhi)
          </h2>

          <p
            className={`text-lg mt-4 mb-6 ${
              isDark ? "text-[#bac2de]" : "text-[#5c5f77]"
            }`}
          >
            Backend Developer · PHP Laravel · Node.js (Express)
          </p>

          <p
            className={`text-md leading-relaxed mb-10 ${
              isDark ? "text-[#a6adc8]" : "text-[#6c6f85]"
            }`}
          >
            I build scalable backend systems with clean APIs, optimized
            databases, and solid DevOps fundamentals. Experienced with Laravel,
            Node.js, MySQL, MongoDB, and Docker — with strong frontend
            understanding using React.
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap gap-5 text-3xl">
            <motion.div
              className="flex flex-wrap gap-5 text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <a href="https://github.com/programwithabhi33" target="_blank">
                <FaGithub className="hover:text-[#a6e3a1] transition-colors" />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-5 text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a href="https://linkedin.com/in/programwithabhi" target="_blank">
                <FaLinkedin className="hover:text-[#89b4fa] transition-colors" />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-5 text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
            >
              <a href="https://x.com/programwithabhi" target="_blank">
                <SiX className="hover:text-[#a6e3a1] transition-colors" />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-5 text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.1 }}
            >
              <a
                href="https://youtube.com/@programwithabhi9206"
                target="_blank"
              >
                <FaYoutube className="hover:text-[#f38ba8] transition-colors" />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-5 text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.11 }}
            >
              <a href="mailto:programwithabhi@gmail.com">
                <MdEmail className="hover:text-[#a6e3a1] transition-colors" />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-5 text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.12 }}
            >
              <a href="/files/my-resume.pdf" target="_blank" title="Resume">
                <MdDescription className="hover:text-[#a6e3a1] transition-colors" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column — Tech Icons */}
        <motion.div
          className={`flex flex-wrap md:w-1/2 justify-center gap-8 py-10 text-5xl ${
            isDark ? "text-[#f2cdcd]" : "text-[#dc8a78]"
          }`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.6 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.2, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaLaravel />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.2, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaNodeJs />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.2, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <SiExpress />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.2, rotate: 2 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <SiMysql />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.2, rotate: 2 }}
            transition={{ type: "spring", stiffness: 600 }}
          >
            <SiMongodb />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.2, rotate: 2 }}
            transition={{ type: "spring", stiffness: 700 }}
          >
            <FaDocker />
          </motion.div>
        </motion.div>
      </div>

      {/* Additional Strengths Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-5xl mx-auto mt-20 mb-20"
      >
        <h2
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-[#f5e0dc]" : "text-[#1e1e2e]"
          }`}
        >
          Additional Strengths
        </h2>

        <div className="flex flex-wrap gap-3">
          {/* Strong Frontend Understanding */}
          <motion.span
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20"
          >
            <FaReact className="text-blue-400" /> Strong frontend understanding
            (React)
          </motion.span>

          {/* Tools */}
          <motion.span
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20"
          >
            <SiNeovim className="text-green-400" /> Neovim user
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20"
          >
            <SiTmux className="text-lime-300" /> tmux workflow
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20"
          >
            <FaLinux className="text-yellow-300" /> Linux
          </motion.span>

          {/* Networking */}
          <motion.span
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20"
          >
            <FaNetworkWired className="text-cyan-300" /> Networking fundamentals
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20"
          >
            <MdPublic className="text-blue-200" /> HTTP / HTTPS / DNS
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20"
          >
            <VscTerminalLinux className="text-orange-300" /> Request–response
            model
          </motion.span>

          {/* Hardware */}
          <motion.span
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20"
          >
            <BsCpu className="text-pink-300" /> PC hardware enthusiast
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20"
          >
            <FaTools className="text-red-300" /> PC building & optimization
          </motion.span>
        </div>
      </motion.div>
    </motion.main>
  );
}
