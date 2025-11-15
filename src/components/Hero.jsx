'use client';

import { motion } from "framer-motion";

// Updated to use correct Simple Icons CDN URLs
const skills = [
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/react.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/nextdotjs.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/tailwindcss.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/git.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/nodedotjs.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@develop/icons/vercel.svg",
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

        {/* Logos marquee */}
        <div className="mt-12 overflow-hidden relative w-full">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {skills.map((logo, i) => (
              <div key={i} className="mx-6 flex-shrink-0">
                <img
                  src={logo}
                  className="h-12 w-12 object-contain filter brightness-0 invert" // Makes logos white
                  draggable="false"
                  alt="Skill icon"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {skills.map((logo, i) => (
              <div key={i + skills.length} className="mx-6 flex-shrink-0">
                <img
                  src={logo}
                  className="h-12 w-12 object-contain filter brightness-0 invert"
                  draggable="false"
                  alt="Skill icon"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 sm:gap-8 text-sm justify-center mt-10 flex-wrap">
          <a
            href="mailto:yourmail@gmail.com"
            className="relative group inline-flex items-center justify-center w-full sm:w-[180px] overflow-hidden rounded-xl px-[2px] py-[2px] bg-gradient-to-br from-purple-600/70 to-blue-600/70 shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.9)]"
          >
            <span className="w-full h-full rounded-xl bg-black/60 backdrop-blur-xl text-white font-semibold text-md py-2 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40">
              Contact Me
            </span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="relative group inline-flex items-center justify-center w-full sm:w-[180px] rounded-xl p-[2px] overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 transition-all duration-500 hover:from-pink-500 hover:to-orange-400 shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.9)]"
          >
            <span className="w-full h-full bg-black rounded-xl text-white py-2 font-semibold text-md flex items-center justify-center transition-all duration-500 group-hover:bg-black/40">
              Github
            </span>
          </a>
        </div>
      </div>

      <style>
        {`
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}