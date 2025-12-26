'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);
    const educationRef = useRef(null);

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

        if (educationRef.current) observer.observe(educationRef.current);
        return () => observer.disconnect();
    }, []);

    const educationData = [
        {
            school: "1337 UM6P",
            location: "Rabat, Morocco",
            duration: "2025 - Present",
            degree: "Software Engineering",
            specialization: "Peer-to-Peer Learning Model",
            description: "An immersive, project-based curriculum focused on low-level programming, algorithms, and system architecture. Developing resilience and autonomy through the 'Piscine' and core curriculum.",
            tags: ["C Programming", "Unix/Linux", "Algorithms", "Git", "Shell", "Memory Management"],
            color: "text-purple-400"
        },
        {
            school: "OFPPT Meknes",
            location: "Meknes, Morocco",
            duration: "2023 - 2025",
            degree: "Full-Stack Development",
            specialization: "Specialized Technician Diploma",
            description: "Comprehensive training in modern web technologies. Graduated with a strong foundation in both frontend interfaces and backend database management.",
            tags: ["React", "Laravel", "Python", "MySQL", "JavaScript", "REST APIs"],
            color: "text-blue-400"
        }
    ];

    return (
        <section
            id="education"
            ref={educationRef}
            className="min-h-screen flex flex-col justify-center py-24 bg-neutral-950 relative overflow-hidden"
        >
            {/* Background Decorations (Consistent with About) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-900/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-blue-900/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 max-w-3xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-12 h-[1px] bg-blue-500"></span>
                        <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Academic Path</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Education & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            Certifications.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        My academic journey has been driven by a desire to understand the core machinery of software, 
                        moving from high-level web frameworks down to low-level system architecture.
                    </p>
                </motion.div>

                {/* Timeline Grid */}
                <div className="relative">
                    {/* Vertical Line (Desktop only) */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent hidden md:block" />

                    <div className="space-y-12 md:space-y-0">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 md:gap-0 ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Empty side for timeline alignment */}
                                <div className="hidden md:block w-1/2" />

                                {/* Center Point */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-neutral-950 border border-white/20 z-10 mt-1 md:mt-0">
                                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                                }`}>
                                    <div className="group relative p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                        
                                        {/* Glow effect on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                        <div className="relative z-10">
                                            {/* Top Row: Year & Location */}
                                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
                                                    <Calendar className="w-3 h-3" />
                                                    {edu.duration}
                                                </span>
                                                <span className="flex items-center gap-1 text-gray-400 text-xs uppercase tracking-wider">
                                                    <MapPin className="w-3 h-3" />
                                                    {edu.location}
                                                </span>
                                            </div>

                                            {/* School & Degree */}
                                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                                {edu.school}
                                            </h3>
                                            <div className={`text-sm font-medium mb-4 ${edu.color}`}>
                                                {edu.degree} • {edu.specialization}
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                                {edu.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {edu.tags.map((tag) => (
                                                    <span 
                                                        key={tag} 
                                                        className="px-2.5 py-1 rounded-md bg-black/40 border border-white/5 text-gray-300 text-xs hover:border-white/10 transition-colors"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;