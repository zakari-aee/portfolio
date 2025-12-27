'use client';

import { motion } from "framer-motion";

const skills = [
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/react.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/nextdotjs.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/python.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/tailwindcss.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/git.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/nodedotjs.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/c.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/javascript.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/mongodb.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/laravel.svg",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center bg-[#050505] px-4 border-b border-white/5"
    >
      <div className="text-center w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mt-20">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-neutral-400 md:text-xl mb-6 select-none font-light"
        >
          Welcome to the{" "}
          <span className="text-blue-400">
            web portfolio
          </span>{" "}
          of
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-6xl xs:text-8xl font-bold leading-none tracking-tight md:text-7xl lg:text-8xl select-none"
        >
          ZAKARIAE
          <span className="text-blue-400">
            {" "}
            ALLIOUATE
          </span>
        </motion.h1>

        <p className="text-xs md:text-sm text-neutral-500 tracking-widest font-light mt-12">
          Scroll down to learn more about my skills & experiences
        </p>

        {/* Marquee with Tailwind fade */}
        <div className="mt-12 overflow-hidden relative w-full before:absolute before:left-0 before:top-0 before:w-20 before:h-full before:bg-gradient-to-r before:from-[#050505] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-[#050505] after:to-transparent after:z-10">

          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap items-center">

            {skills.map((logo, i) => (
              <div key={i} className="mx-6 flex-shrink-0">
                <img
                  src={logo}
                  className="h-12 w-12 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}

            {skills.map((logo, i) => (
              <div key={i + skills.length} className="mx-6 flex-shrink-0">
                <img
                  src={logo}
                  className="h-12 w-12 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}

          </div>
        </div>

        <div className="flex gap-4 sm:gap-8 text-sm justify-center mt-10 flex-wrap items-center">

          {/* Download CV Button */}
          <a
            href="/zakariaeCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center justify-center w-full sm:w-[180px] overflow-hidden rounded-lg px-4 py-3 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300"
          >
            <span className="text-white font-semibold text-sm">
              View CV
            </span>
          </a>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/zakari-aee"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-blue-500/30"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v11/icons/github.svg"
                className="w-6 h-6 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://linkedin.com/in/zakariae-alliouate"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-blue-500/30"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v11/icons/linkedin.svg"
                className="w-6 h-6 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Tailwind Keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}