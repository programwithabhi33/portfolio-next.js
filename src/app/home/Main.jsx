// app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaLaravel,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaDocker,
  FaYoutube,
  FaReact,
  FaNetworkWired,
  FaLinux,
  FaTools,
  FaStar,
  FaQuoteLeft,
  FaMailBulk,
  FaMail,
  FaQuoteRight,
  FaUsersCog,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiX,
  SiTailwindcss,
  SiNeovim,
  SiTmux,
  SiDocker,
  SiNextdotjs,
} from "react-icons/si";

import { VscTerminalLinux } from "react-icons/vsc";
import { BsCpu } from "react-icons/bs";
import {
  MdEmail,
  MdDescription,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";
import { MdPublic } from "react-icons/md";

export default function Page() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);
  const setThemeFn = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  const isDark = theme === "dark";

  // Shared container width (max-w-5xl) to keep sections aligned
  const container = "max-w-5xl mx-auto px-6";

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#1e1e2e] text-[#cdd6f4]" : "bg-[#eff1f5] text-[#2f3340]"
      }`}
    >
      {/* Theme toggle */}
      <div className={`${container} relative`}>
        <button
          onClick={() => setThemeFn(isDark ? "light" : "dark")}
          className="fixed z-20 top-6 right-6 p-3 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 backdrop-blur-md border border-white/6 bg-white/6"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <MdLightMode className="text-yellow-300 text-2xl" />
          ) : (
            <MdDarkMode className="text-[#1e1e2e] text-2xl" />
          )}
        </button>
      </div>

      {/* HERO */}
      <section className={`${container} pt-24`}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className={`text-4xl font-bold mb-1 ${isDark ? "text-[#f2cdcd]" : "text-[#3a2a2a]"}`}
            >
              Hi I&apos;m Abhishek Biranje
            </h1>
            <h2
              className={`text-lg font-medium mb-4 ${isDark ? "text-[#f5e0dc]" : "text-[#6b1b2b]"}`}
            >
              (also known as programwithabhi)
            </h2>

            <p
              className={`text-lg mb-4 ${isDark ? "text-[#bac2de]" : "text-[#5c5f77]"}`}
            >
              Full Stack Developer | Backend-focused | Laravel | Node.js |
              Next.js
            </p>

            <p
              className={`leading-relaxed mb-6 ${isDark ? "text-[#a6adc8]" : "text-[#4b5563]"}`}
            >
              I build and maintain web applications, backend APIs, and
              deployment environments, with a focus on scalable architecture and
              clean API design. Experienced with Laravel, PHP, React, Node.js,
              MySQL, Docker, and Linux administration. I?m also familiar with
              AI-assisted development using Claude Code, prompt design, MCP
              concepts, and LLM fundamentals.
            </p>

            {/* CTA / Links */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.div
                className="flex flex-wrap gap-5 text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <a href="https://github.com/programwithabhi33" target="_blank">
                  <FaGithub className="hover:text-gray-500 transition-colors" />
                </a>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-5 text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <a
                  href="https://linkedin.com/in/programwithabhi"
                  target="_blank"
                >
                  <FaLinkedin className="hover:text-blue transition-colors" />
                </a>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-5 text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
              >
                <a href="https://x.com/programwithabhi" target="_blank">
                  <SiX className="hover:text-gray-500 transition-colors" />
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
              </motion.div>{" "}
              <motion.div
                className="flex flex-wrap gap-5 text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.1 }}
              >
                <a href="mailto:programwithabhi@gmail.com">
                  <MdEmail className="hover:text-[#a6e3a1] transition-colors" />
                </a>
              </motion.div>
              {/* Resume CTA - standout */}
              <motion.a
                href="/files/Abhishek_Biranje_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-shadow ${
                  isDark
                    ? "bg-[#11121a] text-[#f2cdcd] border border-[#89b4fa]/12 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                    : "bg-white/90 text-[#1e1e2e] border border-[#dbe4f3] shadow-sm"
                }`}
              >
                <MdDescription className="text-lg" />
                <span>Check my Resume</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Tech icons block */}
          <motion.div
            className={`flex flex-wrap justify-center gap-8 py-10 text-5xl ${
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
            {[
              { Icon: FaLaravel, stiffness: 200 },
              { Icon: FaNodeJs, stiffness: 250 },
              { Icon: SiExpress, stiffness: 300 },
              { Icon: SiMysql, stiffness: 350 },
              { Icon: SiMongodb, stiffness: 400 },
              { Icon: FaDocker, stiffness: 450 },
              { Icon: FaReact, stiffness: 500 },
              { Icon: SiNextdotjs, stiffness: 500 },
              { Icon: SiTailwindcss, stiffness: 550 },
            ].map(({ Icon, stiffness }, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ type: "spring", stiffness }}
                animate={{
                  color: isDark ? "#f2cdcd" : "#dc8a78",
                }}
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>
        </div>{" "}
        {/* Separator wave */}
        <div className="w-full mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 60"
            className={isDark ? "fill-[#313244]" : "fill-[#e6e9ef]"}
          >
            <path d="M0,32L48,26.7C96,21,192,11,288,10.7C384,11,480,21,576,37.3C672,53,768,75,864,74.7C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64V0H0Z"></path>
          </svg>
        </div>
      </section>

      {/* Skills section */}
      <section className={`${container} mt-8`}>
        <div className="max-w-4xl mx-auto">
          <div>
            <h2
              className={`text-2xl font-bold mb-6 ${isDark ? "text-[#f5e0dc]" : "text-[#1e1e2e]"}`}
            >
              What I&apos;m Good At
            </h2>

            <motion.div
              className="grid sm:grid-cols-2 gap-4"
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
              {/* card 1 */}
              <motion.div
                // whileHover={{ y: -6, scale: 1.02 }}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                animate={{
                  color: isDark ? "#f2cdcd" : "#dc8a78",
                }}
                className={`p-4 rounded-xl transition-shadow border ${isDark ? "backdrop-blur-md bg-white/4 border-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-white/60 border-[#dbe4f3] shadow-md"}`}
              >
                <h4 className="font-semibold text-[#89b4fa]">
                  Backend Engineering
                </h4>
                <p
                  className={`text-sm mt-1 ${isDark ? "text-[#cdd6f4]" : "text-[#2f3440]"}`}
                >
                  API designing, background jobs & caching, database
                  optimization & structuring with git workflows{" "}
                </p>
              </motion.div>

              {/* card 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                animate={{
                  color: isDark ? "#f2cdcd" : "#dc8a78",
                }}
                className={`p-4 rounded-xl transition-shadow border ${isDark ? "backdrop-blur-md bg-white/4 border-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-white/60 border-[#dbe4f3] shadow-md"}`}
              >
                <h4 className="font-semibold text-[#a6e3a1]">Frontend</h4>
                <p
                  className={`text-sm mt-1 ${isDark ? "text-[#cdd6f4]" : "text-[#2f3440]"}`}
                >
                  React + TailwindCSS, auth flows, API integration, browser
                  tools & security
                </p>
              </motion.div>

              {/* card 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ rotate: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                animate={{
                  color: isDark ? "#f2cdcd" : "#dc8a78",
                }}
                className={`p-4 rounded-xl transition-shadow border ${isDark ? "backdrop-blur-md bg-white/4 border-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-white/60 border-[#dbe4f3] shadow-md"}`}
              >
                <h4 className="font-semibold text-[#fab387]">
                  DevOps & Server Mgmt
                </h4>
                <p
                  className={`text-sm mt-1 ${isDark ? "text-[#cdd6f4]" : "text-[#2f3440]"}`}
                >
                  Docker, Linux, deployments & server management with all
                  required computer networking knowledge
                </p>
              </motion.div>

              {/* card 4 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ rotate: 1 }}
                transition={{ type: "spring", stiffness: 600 }}
                animate={{
                  color: isDark ? "#f2cdcd" : "#9e9173",
                }}
                className={`
                  col-span-1 p-5 rounded-xl relative overflow-hidden
                  border backdrop-blur-md
                  ${isDark ? "bg-white/5 border-white/10" : "bg-white/70 border-[#dbe4f3]"}
                `}
                style={{
                  boxShadow: isDark
                    ? "0 0 25px rgba(249,226,175,0.08)"
                    : "0 0 20px rgba(249,226,175,0.15)",
                }}
              >
                {/* Animated glowing border */}
                <motion.div
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    border: "2px solid",
                    borderImageSlice: 1,
                    borderImageSource: isDark
                      ? "linear-gradient(135deg, #f9e2af55, #f2cdcd55, #fab38755)"
                      : "linear-gradient(135deg, #f9e2af88, #d20f3988, #e6455388)",
                    filter: "blur(2px)",
                  }}
                />

                {/* Leadership Badge */}
                <span
                  className={`
                    inline-block px-3 py-1 text-xs font-medium rounded-full
                    ${isDark ? "bg-[#f9e2af]/20 text-[#f9e2af]" : "bg-[#f9e2af]/40 text-[#7c6f4a]"}
                  `}
                >
                  Leadership Skill
                </span>

                {/* Description */}
                <p
                  className={`text-sm mt-2 ${
                    isDark ? "text-[#cdd6f4]" : "text-[#2f3440]"
                  }`}
                >
                  Understand business logic & translate it into technical tasks
                  and ensure execution aligns with business goals.
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ rotate: 1 }}
                transition={{ type: "spring", stiffness: 700 }}
                animate={{ color: isDark ? "#f2cdcd" : "#dc8a78" }}
                className={`p-4 rounded-xl transition-shadow border ${isDark ? "backdrop-blur-md bg-white/4 border-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-white/60 border-[#dbe4f3] shadow-md"}`}
              >
                <h4 className="font-semibold text-[#cba6f7]">
                  AI-Assisted Development
                </h4>
                <p
                  className={`text-sm mt-1 ${isDark ? "text-[#cdd6f4]" : "text-[#2f3440]"}`}
                >
                  Familiar with Claude Code, prompt design, MCP concepts, and
                  LLM fundamentals.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Separator wave */}
        <div className="w-full mt-12">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className={isDark ? "fill-[#313244]" : "fill-[#e6e9ef]"}
            preserveAspectRatio="none"
          >
            <path d="M0,90 C180,60 320,0 540,20 C760,40 900,120 1440,80 L1440,0 L0,0 Z"></path>
          </svg>
        </div>
        {/* Additional Strengths Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto mt-12 mb-12"
        >
          <h2
            className={`text-2xl font-bold mb-6 ${
              isDark ? "text-[#f5e0dc]" : "text-[#1e1e2e]"
            }`}
          >
            Additional Strengths
          </h2>

          <div className="flex flex-wrap gap-3">
            {/* Tools */}
            <motion.span
              whileHover={{ scale: 1.08 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20 ${isDark ? "backdrop-blur-md bg-white/4 border-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-white/60i"} border-[#dbe4f3] shadow-md`}
            >
              <FaLinux className="text-yellow-300" /> Linux User
            </motion.span>

            {/* Networking */}
            <motion.span
              whileHover={{ scale: 1.08 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20 ${isDark ? "backdrop-blur-md bg-white/4 border-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-white/60i"} border-[#dbe4f3] shadow-md`}
            >
              <FaNetworkWired className="text-cyan-300" /> Computer Networking
              Geek
            </motion.span>

            {/* Hardware */}
            <motion.span
              whileHover={{ scale: 1.08 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg bg-white/10 border border-white/20 ${isDark ? "backdrop-blur-md bg-white/4 border-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-white/60i"} border-[#dbe4f3] shadow-md`}
            >
              <BsCpu className="text-pink-300" /> PC hardware enthusiast
            </motion.span>
          </div>
        </motion.div>

        {/* Testimonial */}
        <div className="mt-10">
          <div
            className={`p-6 rounded-2xl shadow-2xl backdrop-blur-lg border ${isDark ? "bg-white/6 border-white/12 text-[#cdd6f4]" : "bg-white/70 border-[#ccd0da] text-[#2f3440]"}`}
            style={{ marginBottom: 28 }}
          >
            <div className="flex items-start gap-4">
              <FaQuoteLeft className="text-3xl text-[#f2cdcd]" />
              <div>
                <p className="text-lg leading-relaxed">
                  “Abhishek consistently demonstrated strong backend ownership,
                  reliable server management skills, and the ability to ship
                  production-ready features. His efforts earned him the{" "}
                  <strong>Employee of the Month</strong> award — a recognition
                  of his impact and professionalism.”
                </p>
                <p className="mt-4 font-semibold text-[#a6e3a1]">
                  — Noitavonne
                </p>
              </div>
              <FaQuoteRight className="text-3xl text-[#f2cdcd]" />
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer
          className={`pt-6 pb-8 ${isDark ? "text-[#7f849c]" : "text-[#6c7486]"}`}
        >
          <div
            className={`${container} flex flex-col md:flex-row items-center justify-between gap-4`}
          >
            <div className="text-sm">
              © {new Date().getFullYear()} Abhishek Biranje — Built with passion
            </div>
          </div>
        </footer>
      </section>
    </motion.main>
  );
}
