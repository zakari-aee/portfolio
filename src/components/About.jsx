import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Code2, ArrowRight, Heart, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={aboutRef} className="min-h-screen bg-black py-20 px-4 flex items-center justify-center">
            <div className="max-w-4xl w-full">
                {/* Header */}
                <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                {/* Main Content */}
                <motion.div className="w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-800 backdrop-blur-sm">
                        {/* Photo */}
                        <div className="flex justify-center mb-8">
                            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 p-1.5">
                                <img
                                    src="/me.png"
                                    alt="Zakariae Alliouate - Full Stack Developer"
                                    className="w-full h-full rounded-full object-cover border-2 border-white/20 shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="text-center space-y-6">
                            <h3 className="text-3xl font-bold text-white">
                                Hello, I'm <span className="text-cyan-400">Zakariae Alliouate</span>
                            </h3>
                            
                            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                                <p>
                                    A passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span> from the beautiful city of Meknes, Morocco. 
                                    I fell in love with coding during my early college years and have been on an incredible journey of learning and growth ever since.
                                </p>
                                
                                <p>
                                    What drives me is the ability to <span className="text-cyan-400 font-semibold">transform ideas into digital reality</span>. 
                                    There's something magical about writing code that can solve real problems and make people's lives easier. 
                                    I believe that great software should not only work flawlessly but also provide an exceptional user experience.
                                </p>

                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                                    or enjoying a good cup of Moroccan tea while planning my next big project. I'm a firm believer in 
                                    <span className="text-purple-400 font-semibold"> continuous learning</span> and the power of collaboration.
                                </p>

                                <p>
                                    My expertise spans across modern web technologies including <span className="text-green-400 font-semibold">React</span>, 
                                    <span className="text-green-400 font-semibold"> Node.js</span>, and <span className="text-green-400 font-semibold">Python</span>, 
                                    with a strong focus on creating scalable, maintainable, and user-friendly applications that stand the test of time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Education Button */}
                    <motion.div className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
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