'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    Mail, MapPin, Clock, Github, Linkedin, ArrowRight, ExternalLink, Send 
} from 'lucide-react';

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

    const socialLinks = [
        { 
            name: 'LinkedIn', 
            icon: <Linkedin className="w-5 h-5" />, 
            link: 'https://linkedin.com/in/zakariae-alliouate',
            color: 'hover:text-blue-400'
        },
        { 
            name: 'GitHub', 
            icon: <Github className="w-5 h-5" />, 
            link: 'https://github.com/zakari-aee',
            color: 'hover:text-purple-400'
        },
    ];

    return (
        <section
            id="contact"
            ref={contactRef}
            className="min-h-screen py-24 bg-neutral-950 relative overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center md:text-left"
                >
                    <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                        <span className="w-12 h-[1px] bg-blue-500"></span>
                        <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Get in touch</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Let's build something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            exceptional together.
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left: Direct Contact Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-8">Drop me a message</h3>
                                
                                <div className="space-y-8">
                                    <a href="mailto:zakariaealliouate@gmail.com" className="group block">
                                        <div className="flex items-center gap-6 p-4 -m-4 rounded-2xl transition-colors hover:bg-white/5">
                                            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                                <Mail className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                                                <p className="text-xl text-white font-medium group-hover:text-blue-400 transition-colors">zakariaealliouate@gmail.com</p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 ml-auto text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-6 p-4 -m-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
                                            <p className="text-xl text-white font-medium">Meknes, Morocco</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8">
                                {socialLinks.map((social) => (
                                    <a 
                                        key={social.name}
                                        href={social.link}
                                        target="_blank"
                                        className={`flex items-center gap-2 text-gray-400 ${social.color} transition-colors font-medium`}
                                    >
                                        {social.icon}
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Availability & Status */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Status Card */}
                        <div className="p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-3xl backdrop-blur-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-green-400 font-semibold text-sm tracking-wide uppercase">Available for hire</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                I'm currently looking for new opportunities as a Full-Stack developer or Software Engineer. If you have a project in mind, let's talk.
                            </p>
                            <button 
                                onClick={() => window.location.href = 'mailto:zakariaealliouate@gmail.com'}
                                className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </div>

                        {/* Info Snippet */}
                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-5 h-5 text-blue-400" />
                                <h4 className="text-white font-semibold tracking-tight">Working Hours</h4>
                            </div>
                            <p className="text-sm text-gray-400">
                                Active from <span className="text-white">09:00 — 18:00 (GMT+1)</span>. 
                                I usually respond within a few hours.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Footer simple copy */}
                <div className="mt-24 text-center">
                    <p className="text-gray-600 text-xs tracking-widest uppercase">
                        &copy; 2025 Zakariae Alliouate • Designed with precision
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;