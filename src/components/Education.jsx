'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

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
            className="min-h-screen py-20 bg-black text-white flex flex-col border-t border-white/5 relative w-full"
        >
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 w-full flex flex-col">
                
                {/* TITLE */}
                <motion.div 
                    className="px-6 md:px-12 lg:px-24 mb-20"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-blue-500" />
                        <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-blue-500">Log // 02</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
                        Edu<br />cation.
                    </h2>
                </motion.div>

                {/* TIMELINE CONTAINER */}
                <div className="relative w-full px-6 md:px-12 lg:px-24">
                    {/* VERTICAL LINE - CENTER ON DESKTOP, LEFT ON MOBILE */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent transform md:-translate-x-1/2" />

                    {/* TIMELINE ITEMS */}
                    <div className="space-y-12 md:space-y-16">
                        {educationData.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className={`relative flex flex-col ${
                                    idx === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } gap-6 md:gap-0`}
                            >
                                {/* CARD */}
                                <div className={`w-full md:w-[calc(50%-20px)] pl-16 md:pl-0 group`}>
                                    <div className="relative p-6 md:p-8 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[2.5rem] group-hover:bg-white/[0.05] group-hover:border-blue-500/30 transition-all duration-700 shadow-2xl overflow-hidden h-full">
                                        
                                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="flex flex-col gap-2 mb-4">
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

                                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-blue-200 transition-colors uppercase">
                                            {edu.school}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                            <p className="text-[13px] font-bold text-neutral-400 uppercase tracking-widest">
                                                {edu.degree}
                                            </p>
                                        </div>
                                        
                                        <p className="text-neutral-400 text-sm leading-relaxed font-light">
                                            {edu.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* TIMELINE DOT */}
                                <div className="absolute left-6 md:left-1/2 top-8 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-blue-500 transition-all duration-500 z-10 transform -translate-x-1/2">
                                    <div className="absolute inset-0 rounded-full bg-blue-500 scale-0 group-hover:scale-50 transition-transform duration-500" />
                                </div>

                                {/* SPACER FOR DESKTOP */}
                                <div className="hidden md:block w-[calc(50%-20px)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;