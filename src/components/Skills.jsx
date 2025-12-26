'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaPython, FaGitAlt, FaLinux, FaLaravel, FaNodeJs, FaJsSquare, FaCode,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiPostgresql, SiMongodb, SiMysql, SiVim, SiArchlinux, SiDocker
} from 'react-icons/si';
import { Brain, Sparkles, Code2, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollingSkills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaJsSquare />, name: 'JS' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaNodeJs />, name: 'Node' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <SiPostgresql />, name: 'Postgres' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <SiVim />, name: 'Vim' },
    { icon: <FaLinux />, name: 'Linux' },
    { icon: <SiDocker />, name: 'Docker' },
  ];

  const focusAreas = [
    {
      title: "Frontend Engineering",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      description: "Crafting immersive, responsive interfaces with React and Tailwind, focusing on performance and user experience.",
      skills: ["React", "Next.js", "Framer Motion"]
    },
    {
      title: "Backend Architecture",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      description: "Building robust server-side logic and scalable databases using Node.js, Python, and relational systems.",
      skills: ["Node.js", "Laravel", "PostgreSQL"]
    },
    {
      title: "System Thinking",
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
      description: "Solving complex problems through algorithmic efficiency and low-level optimization (C, Shell, Unix).",
      skills: ["Algorithms", "C", "Unix"]
    }
  ];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="min-h-screen py-24 bg-neutral-950 relative overflow-hidden flex flex-col justify-center"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-blue-500"></span>
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            The tools I use to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
              bring ideas to life.
            </span>
          </h2>
        </motion.div>

        {/* Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {focusAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15 }}
              className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-500">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.skills.map(s => (
                  <span key={s} className="text-[10px] uppercase tracking-widest text-gray-500 font-bold px-2 py-1 rounded bg-white/5">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Marquee Section */}
        <div className="relative w-full overflow-hidden py-10">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-20" />

          <motion.div 
            className="flex whitespace-nowrap gap-12 items-center"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...scrollingSkills, ...scrollingSkills].map((skill, i) => (
              <div key={i} className="flex items-center gap-4 text-gray-500 hover:text-white transition-colors cursor-default group">
                <span className="text-4xl group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300">
                  {skill.icon}
                </span>
                <span className="text-lg font-medium tracking-tighter uppercase">{skill.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 mx-4" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills Footer */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={isVisible ? { opacity: 1 } : {}}
           className="mt-20 flex flex-wrap justify-center gap-10 opacity-60"
        >
            <div className="flex items-center gap-2 text-gray-400">
              <Brain className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">Problem Solver</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">Adaptive Learner</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Code2 className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">Clean Code</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;