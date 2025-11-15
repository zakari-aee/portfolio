import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.2 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={aboutRef}
            className="min-h-screen flex flex-col items-center py-24 bg-gray-950 px-4 lg:px-20 text-white"
        >
            <div className="max-w-6xl w-full">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                {/* Main Row */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="bg-gray-900/50 rounded-3xl p-10 border border-gray-800 backdrop-blur-sm">

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

                            {/* PHOTO */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="flex-shrink-0"
                            >
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 p-1.5"
                                >
                                    <img
                                        src="/me.png"
                                        alt="Zakariae Alliouate - Full Stack Developer"
                                        className="w-full h-full rounded-full object-cover border-2 border-white/20 shadow-xl"
                                    />
                                </motion.div>
                            </motion.div>

                            {/* TEXT */}
                            <motion.div
                                className="flex-1 space-y-5 text-left"
                                initial={{ opacity: 0, x: 40 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <h3 className="text-3xl font-bold text-white">
                                    Hello, I'm <span className="text-blue-400">Zakariae Alliouate</span>
                                </h3>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    A passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span>
                                    from Meknes, Morocco. I started coding in early college and have been on an amazing
                                    journey of growth ever since.
                                </p>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    I love turning ideas into real applications that solve problems and help people.
                                </p>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    When I’m not coding, I explore new tools, contribute to open-source,
                                    and enjoy Moroccan tea while planning new projects.
                                </p>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    I specialize in:
                                    <span className="text-green-400 font-semibold"> React</span>,
                                    <span className="text-green-400 font-semibold"> Node.js</span>,
                                    <span className="text-green-400 font-semibold"> Python</span>.
                                </p>

                                {/* EDUCATION BUTTON INSIDE THE CARD NOW */}
                                <motion.a
                                    href="#education"
                                    className="mt-6 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full 
                                    text-lg font-medium flex items-center gap-3 justify-center hover:bg-white/10 
                                    transition-all duration-300 w-full md:w-fit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <GraduationCap className="w-6 h-6 text-blue-400" />
                                    Discover My Educational Journey
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
