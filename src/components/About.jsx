'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, User, MapPin, Coffee, Code, Terminal } from 'lucide-react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

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
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={aboutRef}
            className="min-h-screen bg-[#050505] text-white relative flex items-center justify-center border-t border-white/5 overflow-hidden py-24 md:py-0"
        >
            {/* TOP-LEFT CORNER TITLE */}
            <motion.div 
                className="absolute top-8 left-6 md:top-16 md:left-12 lg:left-24 z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
            >
                <div className="flex items-center gap-3 mb-2">
                    <Terminal size={14} className="text-blue-500" />
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-500">Profile // 01</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                    About<span className="text-neutral-700 italic">Me.</span>
                </h2>
            </motion.div>

            <div className="w-full px-4 md:px-12 lg:px-24 max-w-[1400px] relative z-10">
                
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* THE CENTRAL CARD */}
                    <div className="relative bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
                        
                        <div className="flex flex-col xl:flex-row">
                            
                            {/* FIXED IMAGE AREA - Added h-[350px] for mobile visibility */}
                            <div className="w-full xl:w-[38%] relative bg-neutral-900 border-b xl:border-b-0 xl:border-r border-white/5 overflow-hidden h-[350px] xl:h-auto min-h-[400px]">
                                <img
                                    src="/me.png"
                                    alt="Zakariae Alliouate"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* Bottom blend gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                
                                {/* Static Location Badge */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                    <MapPin size={12} className="text-blue-500" />
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-white">Meknes, MA</span>
                                </div>
                            </div>

                            {/* SLEEK CONTENT AREA */}
                            <div className="w-full xl:w-[62%] p-8 md:p-12 lg:p-14 flex flex-col justify-between">
                                
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3 text-neutral-600">
                                        <Code size={16} />
                                        <span className="text-[9px] font-black uppercase tracking-[0.4em]">System.initialize(biography)</span>
                                    </div>

                                    <div className="space-y-4 md:space-y-6">
                                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                                            Building <span className="text-blue-500 italic">scalable</span> solutions with technical integrity.
                                        </h3>
                                        <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                                            I am a Full-Stack Developer focused on the intersection of system performance and elegant user experiences. Currently honing my low-level skills at 1337 UM6P while architecting high-level web ecosystems.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {['Full-Stack', 'Sys-Architecture', 'Logic Design'].map((tag) => (
                                            <div key={tag} className="px-3 py-1 border border-white/5 bg-white/5 rounded-md text-[8px] font-bold text-neutral-500 uppercase tracking-widest">
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* BOTTOM STATUS BAR */}
                                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-2 text-neutral-600">
                                        <Coffee size={14} />
                                        <span className="text-[9px] font-bold uppercase tracking-widest">Zakariae_Alliouate.v1</span>
                                    </div>
                                    <a href="#education" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-blue-500 transition-all group">
                                        Next Path <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;