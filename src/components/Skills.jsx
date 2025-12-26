'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaPython, FaGitAlt, FaLinux, FaLaravel, FaNodeJs, FaJsSquare, FaWindows, FaPhp
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiPostgresql, SiMongodb, SiDocker, SiNextdotjs, SiTypescript, SiC, SiMysql, SiFramer, SiVim
} from 'react-icons/si';
import { ArrowUpRight, Brain, Users, Target, Zap, Terminal } from 'lucide-react';

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

    const technicalStack = [
        { name: 'React', icon: <FaReact />, color: 'group-hover:text-[#61DAFB]' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'group-hover:text-white' },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'group-hover:text-[#3178C6]' },
        { name: 'JavaScript', icon: <FaJsSquare />, color: 'group-hover:text-[#F7DF1E]' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'group-hover:text-[#06B6D4]' },
        { name: 'Framer', icon: <SiFramer />, color: 'group-hover:text-[#0055FF]' },
        { name: 'Node.js', icon: <FaNodeJs />, color: 'group-hover:text-[#339933]' },
        { name: 'Python', icon: <FaPython />, color: 'group-hover:text-[#3776AB]' },
        { name: 'Laravel', icon: <FaLaravel />, color: 'group-hover:text-[#FF2D20]' },
        { name: 'PHP', icon: <FaPhp />, color: 'group-hover:text-[#777BB4]' },
        { name: 'MySQL', icon: <SiMysql />, color: 'group-hover:text-[#4479A1]' },
        { name: 'Postgres', icon: <SiPostgresql />, color: 'group-hover:text-[#4169E1]' },
        { name: 'C Lang', icon: <SiC />, color: 'group-hover:text-[#A8B9CC]' },
        { name: 'Vim', icon: <SiVim />, color: 'group-hover:text-[#199C4B]' },
        { name: 'Linux', icon: <FaLinux />, color: 'group-hover:text-white' },
        { name: 'Windows', icon: <FaWindows />, color: 'group-hover:text-[#0078D4]' },
        { name: 'Docker', icon: <SiDocker />, color: 'group-hover:text-[#2496ED]' },
        { name: 'Git', icon: <FaGitAlt />, color: 'group-hover:text-[#F05032]' },
    ];

    const softSkills = [
        { name: "Problem Solving", icon: <Brain size={20}/>, desc: "Algorithmic thinking" },
        { name: "Team Work", icon: <Users size={20}/>, desc: "Collaborative dev" },
        { name: "Adaptability", icon: <Zap size={20}/>, desc: "Rapid learning" },
    ];

    return (
        <section
            id="skills"
            ref={skillsRef}
            className="min-h-screen py-20 bg-[#050505] text-white flex flex-col justify-center relative overflow-hidden border-t border-white/5"
        >
            <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* LEFT: Clean Sticky Sidebar */}
                    <motion.div 
                        className="lg:col-span-3 lg:sticky lg:top-32 h-fit"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Terminal size={16} className="text-purple-400" />
                            <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-purple-500">Inventory // 03</span>
                        </div>
                        <h2 className="text-6xl font-bold tracking-tighter uppercase mb-10 leading-[0.9]">
                            Skill<br />
                            <span className="text-neutral-700 italic">Set.</span>
                        </h2>
                        
                        {/* Soft Skills List - Simplified for fit */}
                        <div className="space-y-6 pt-10 border-t border-white/10">
                            {softSkills.map((s, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-500 group-hover:text-purple-400 transition-colors">
                                        {s.icon}
                                    </div>
                                    <div>
                                        <p className="text-[12px] font-bold uppercase tracking-tight text-neutral-300">{s.name}</p>
                                        <p className="text-[9px] uppercase text-neutral-600 tracking-widest">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT: Technical Grid - Optimized for all screens */}
                    <div className="lg:col-span-9">
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                            {technicalStack.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: idx * 0.02 }}
                                    className="group relative flex flex-col items-center justify-center p-4 md:p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 aspect-square"
                                >
                                    <div className={`text-2xl md:text-4xl transition-all duration-500 group-hover:scale-110 ${skill.color}`}>
                                        {skill.icon}
                                    </div>
                                    <span className="mt-4 text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-600 group-hover:text-white transition-colors text-center">
                                        {skill.name}
                                    </span>
                                    
                                    {/* Subtle Glow Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Status Footer */}
                        <motion.div 
                            className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-white/5"
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : {}}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500">Environment Ready</span>
                            </div>
                            <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-white hover:text-purple-400 transition-colors group">
                                Explore Full Stack <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;