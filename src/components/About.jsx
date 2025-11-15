import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Code2, ArrowRight } from 'lucide-react';

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
        <section id="about" ref={aboutRef} className="min-h-screen flex flex-col items-center py-24 bg-gray-950 px-4 lg:px-20 text-white"
        >
            <div className="max-w-6xl w-full">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                {/* Main Row → Photo Left / Text Right */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-gray-900/50 rounded-3xl p-10 border border-gray-800 backdrop-blur-sm">

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

                            {/* PHOTO - LEFT */}
                            <div className="flex-shrink-0">
                                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 p-1.5">
                                    <img
                                        src="/me.png"
                                        alt="Zakariae Alliouate - Full Stack Developer"
                                        className="w-full h-full rounded-full object-cover border-2 border-white/20 shadow-xl"
                                    />
                                </div>
                            </div>

                            {/* TEXT - RIGHT */}
                            <div className="flex-1 space-y-5 text-left">
                                <h3 className="text-3xl font-bold text-white">
                                    Hello, I'm <span className="text-blue-400">Zakariae Alliouate</span>
                                </h3>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    A passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span>
                                    from the beautiful city of Meknes, Morocco. I fell in love with coding during my early college years
                                    and have been on an incredible journey of learning and growth ever since.
                                </p>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    What drives me is the ability to
                                    <span className="text-blue-400 font-semibold"> transform ideas into digital reality</span>.
                                    There's something magical about writing code that solves real problems
                                    and improves people's lives.
                                </p>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    When I'm not coding, I'm exploring new technologies, contributing to open-source,
                                    or enjoying Moroccan tea while planning new projects. I believe in
                                    <span className="text-blue-400 font-semibold"> continuous learning</span>
                                    and the power of collaboration.
                                </p>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    I specialize in <span className="text-green-400 font-semibold">React</span>,
                                    <span className="text-green-400 font-semibold"> Node.js</span>,
                                    and <span className="text-green-400 font-semibold">Python</span>,
                                    building scalable, maintainable applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Education Button */}
                    <motion.div className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.a href="#education"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/50 text-white rounded-2xl text-lg font-semibold hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Discover My Educational Journey
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
