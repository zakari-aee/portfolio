import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Globe, Sparkles, ArrowRight } from 'lucide-react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.2 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={aboutRef}
            className="min-h-screen flex items-center py-20 bg-neutral-950 relative overflow-hidden"
        >
            {/* Subtle Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                {/* Header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-12 h-[1px] bg-purple-500"></span>
                        <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Architecting digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            experiences that matter.
                        </span>
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Left Column: Image & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Image Container */}
                        <div className="relative group w-full max-w-md mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 bg-neutral-900">
                                <img
                                    src="/me.png"
                                    alt="Zakariae Alliouate"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Bio & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:pt-4"
                    >
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Hello! I'm <strong className="text-white">Zakariae Alliouate</strong>, a Full-Stack Developer based in Meknes, Morocco. My journey started with a simple curiosity for how things work on the web, which quickly evolved into a career obsession with clean code and user-centric design.
                            </p>
                            
                            <p>
                                I specialize in building robust applications using <span className="text-purple-400 font-medium">React</span>, <span className="text-blue-400 font-medium">Node.js</span>, and <span className="text-yellow-400 font-medium">Python</span>. I believe that great software is a blend of technical excellence and creative problem-solving.
                            </p>

                            <p>
                                When I'm not debugging or deploying, you'll find me contributing to open-source projects, exploring new tech ecosystems, or enjoying a traditional Moroccan tea while brainstorming my next big idea.
                            </p>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {['React', 'TypeScript', 'Node.js', 'Tailwind', 'Python', 'Git'].map((tech) => (
                                <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-purple-500/30 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-10">
                            <motion.a
                                href="#education"
                                className="inline-flex items-center gap-2 text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors group"
                                whileHover={{ x: 5 }}
                            >
                                <span className="font-medium">View Educational Journey</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;