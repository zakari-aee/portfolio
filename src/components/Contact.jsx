'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);

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
        if (contactRef.current) observer.observe(contactRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="contact"
            ref={contactRef}
            className="min-h-screen py-24 bg-black text-white flex flex-col justify-center border-t border-white/5"
        >
            <div className="container mx-auto px-6 lg:px-20">
                
                {/* Header: Consistent with previous sections */}
                <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-8">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 0.4 } : {}}
                        className="text-[10px] font-bold tracking-[0.5em] uppercase"
                    >
                        Connection // 04
                    </motion.span>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={isVisible ? { scaleX: 1 } : {}}
                        className="h-[1px] flex-1 mx-10 bg-gradient-to-r from-white/20 to-transparent hidden md:block"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* Left Side: Massive Call to Action */}
                    <motion.div 
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-12 transition-all hover:italic cursor-default">
                            START A <br /> 
                            <span className="text-neutral-500">PROJECT.</span>
                        </h2>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-green-500">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Status: Available for 2026</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Clean Link List */}
                    <div className="lg:col-span-5 flex flex-col justify-end space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="text-neutral-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Direct Channels</p>
                            
                            <div className="space-y-6">
                                <a 
                                    href="mailto:zakariaealliouate@gmail.com" 
                                    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white transition-colors"
                                >
                                    <span className="text-xl md:text-2xl font-light group-hover:pl-4 transition-all duration-300">Email</span>
                                    <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors" />
                                </a>
                                <a 
                                    href="https://linkedin.com/in/zakariae-alliouate" 
                                    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white transition-colors"
                                >
                                    <span className="text-xl md:text-2xl font-light group-hover:pl-4 transition-all duration-300">LinkedIn</span>
                                    <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors" />
                                </a>
                                <a 
                                    href="https://github.com/zakari-aee" 
                                    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white transition-colors"
                                >
                                    <span className="text-xl md:text-2xl font-light group-hover:pl-4 transition-all duration-300">GitHub</span>
                                    <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Location / Meta Data */}
                        <div className="pt-8 flex justify-between items-end border-t border-white/5">
                            <div>
                                <p className="text-[8px] text-neutral-600 uppercase tracking-widest mb-1">Local Time</p>
                                <p className="text-xs text-neutral-400 font-mono">
                                    {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-[8px] text-neutral-600 uppercase tracking-widest mb-1">Location</p>
                                <p className="text-xs text-neutral-400 uppercase">Meknes, Morocco</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Minimalist Copyright */}
                <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[9px] text-neutral-700 tracking-[0.3em] uppercase">
                        &copy; 2026 Zakariae Alliouate
                    </p>
                    <p className="text-[9px] text-neutral-700 tracking-[0.3em] uppercase">
                        Architecting digital infrastructure
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;