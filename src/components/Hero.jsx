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
      className="h-screen w-full flex items-center justify-center bg-black px-4 noisy"
    >
      <div className="text-center w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mt-20">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-300 md:text-xl mb-6 select-none"
        >
          Welcome to the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
            web portfolio
          </span>{" "}
          of
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-6xl xs:text-8xl font-extrabold leading-none tracking-tight md:text-7xl lg:text-8xl select-none"
        >
          ZAKARIAE
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
            {" "}
            ALLIOUATE
          </span>
        </motion.h1>

        <p className="text-xs md:text-sm text-gray-400 tracking-widest font-semibold mt-12">
          Scroll down to learn more about my skills & experiences
        </p>

        {/* Marquee with Tailwind fade */}
        <div className="mt-12 overflow-hidden relative w-full before:absolute before:left-0 before:top-0 before:w-20 before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-black after:to-transparent after:z-10">

          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap items-center">

            {skills.map((logo, i) => (
              <div key={i} className="mx-6 flex-shrink-0">
                <img
                  src={logo}
                  className="h-12 w-12 object-contain filter brightness-0 invert"
                />
              </div>
            ))}

            {skills.map((logo, i) => (
              <div key={i + skills.length} className="mx-6 flex-shrink-0">
                <img
                  src={logo}
                  className="h-12 w-12 object-contain filter brightness-0 invert"
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
            className="relative group inline-flex items-center justify-center w-full sm:w-[180px] overflow-hidden rounded-xl px-[2px] py-[2px] bg-gradient-to-br from-purple-600/70 to-blue-600/70 shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.9)]"
          >
            <span className="w-full h-full rounded-xl bg-black/60 backdrop-blur-xl text-white font-semibold text-md py-2 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40">
              View CV
            </span>
          </a>


          {/* Simple Logo Buttons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/zakari-aee"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:bg-purple-600/20 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v11/icons/github.svg"
                className="w-6 h-6 object-contain filter brightness-0 invert transition-all duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://linkedin.com/in/zakariae-alliouate"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:bg-blue-600/20 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v11/icons/linkedin.svg"
                className="w-6 h-6 object-contain filter brightness-0 invert transition-all duration-300 group-hover:scale-110"
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
