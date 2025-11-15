import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Code2 } from 'lucide-react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.2 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    const transition = { duration: 0.6, ease: 'easeInOut' };

    return (
        <section
            id="about"
            ref={aboutRef}
            className="min-h-screen flex flex-col items-center justify-center py-24 bg-gray-950 px-6 lg:px-20"
        >
            <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-16 items-start">

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={transition}
                    className="flex flex-col items-center lg:items-start gap-6"
                >
                    <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1">
                        <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden relative">
                            <img
                                src="/me.png"
                                alt="Zakaria Alliouate"
                                className="w-full h-full object-cover rounded-full"
                                onLoad={() => setImageLoaded(true)}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://placehold.co/320x320/000000/ffffff?text=Z.A';
                                    setImageLoaded(true);
                                }}
                            />
                            {!imageLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin" />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-3 text-gray-300 text-base lg:text-lg">
                        <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-400" /> Morocco</div>
                        <div className="flex items-center gap-2"><Calendar className="w-5 h-5 text-purple-400" /> 3+ Years Experience</div>
                        <div className="flex items-center gap-2"><Code2 className="w-5 h-5 text-cyan-400" /> Full Stack Developer</div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="flex flex-col gap-6 w-full">

                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...transition, delay: 0.1 }}
                        className="text-left"
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-800 via-purple-400 to-cyan-430 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 mt-2">Zakariae Alliouate</p>
                    </motion.div>

                    {/* Content Paragraphs */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ ...transition, delay: 0.2 }}
                        className="flex flex-col gap-4 text-gray-400 text-lg md:text-xl leading-relaxed"
                    >
                        <p>Hi! I'm a passionate full-stack developer building modern web apps. My journey in tech started during college, where I discovered my love for coding.</p>
                        <p>Currently pursuing B.Tech in Computer Science, I engage in projects and internships combining theory and practice for effective problem-solving.</p>
                        <p>I specialize in React, Node.js, and modern web technologies, focusing on performant and user-friendly applications.</p>
                    </motion.div>

                    {/* Skills Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ ...transition, delay: 0.3 }}
                        className="mt-6"
                    >
                        <a
                            href="#skills"
                            className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-full text-base font-medium hover:bg-white/10 transition-colors flex items-center justify-center"
                        >
                            View My Skills
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
