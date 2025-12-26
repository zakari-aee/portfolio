'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Terminal, Calendar } from 'lucide-react';

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const educationData = [
        {
            school: "1337 UM6P",
            location: "Rabat, Morocco",
            duration: "2025 — Present",
            degree: "Software Engineering",
            desc: "Immersive, project-based curriculum focusing on low-level system architecture, Unix kernel, and algorithmic complexity. Learning through the peer-to-peer model.",
            side: "left"
        },
        {
            school: "OFPPT Meknes",
            location: "Meknes, Morocco",
            duration: "2023 — 2025",
            degree: "Full-Stack Development",
            desc: "Advanced training in modern web infrastructures. Specializing in React ecosystems, robust Laravel backends, and relational database management.",
            side: "right"
        }
    ];

    return (
        <section
            id="education"
            ref={sectionRef}
            className="min-h-screen py-20 bg-[#050505] text-white flex flex-col justify-center border-t border-white/5 overflow-hidden"
        >
            {/* Ambient Background - adds air without being dark */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
            </div>

            <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
                
                {/* Clean Left Title - Fixed Width */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    <motion.div 
                        className="lg:col-span-3 lg:sticky lg:top-32 h-fit"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[1px] bg-blue-500" />
                            <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-blue-500">Log // 02</span>
                        </div>
                        <h2 className="text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">
                            Edu<br />cation.
                        </h2>
                        <p className="text-neutral-500 text-sm leading-relaxed max-w-xs font-light">
                            Academic path focusing on software engineering and low-level system development.
                        </p>
                    </motion.div>

                    {/* RIGHT: Full-Width Timeline */}
                    <div className="lg:col-span-9 relative">
                        
                        {/* THE MIDDLE LINE - Now bolder and glowing */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent transform md:-translate-x-1/2" />

                        <div className="space-y-16"> 
                            {educationData.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                                    className={`relative flex items-center justify-between md:justify-normal w-full group ${
                                        edu.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
                                    }`}
                                >
                                    {/* LARGE GLASS CARD - Fills the space */}
                                    <div className="w-full md:w-[46%] pl-16 md:pl-0">
                                        <div className="relative p-8 md:p-10 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[2.5rem] group-hover:bg-white/[0.05] group-hover:border-blue-500/30 transition-all duration-700 shadow-2xl overflow-hidden">
                                            
                                            {/* Subtle internal light effect */}
                                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center gap-2 text-blue-400">
                                                    <Calendar size={14} />
                                                    <span className="text-[11px] font-black tracking-widest uppercase italic">
                                                        {edu.duration}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                                                    <MapPin size={12} /> {edu.location}
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-blue-200 transition-colors uppercase">
                                                {edu.school}
                                            </h3>
                                            <div className="flex items-center gap-2 mb-6">
                                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                                <p className="text-[13px] font-bold text-neutral-400 uppercase tracking-widest">
                                                    {edu.degree}
                                                </p>
                                            </div>
                                            
                                            <p className="text-neutral-400 text-base leading-relaxed font-light">
                                                {edu.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* MIDDLE POINT - Responsive and glowing */}
                                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-blue-500 transition-all duration-500 z-10">
                                        <div className="absolute inset-0 rounded-full bg-blue-500 scale-0 group-hover:scale-50 transition-transform duration-500" />
                                    </div>

                                    <div className="hidden md:block w-[46%]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;