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
            { threshold: 0.1 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    const smoothTransition = { duration: 1, ease: "easeInOut" };

    return (
        <section
            id="about"
            ref={aboutRef}
            className="min-h-screen relative flex items-center justify-center py-20 bg-white"
        >
            {/* Background Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={smoothTransition}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                            transition={{ ...smoothTransition, delay: 0.2 }}
                            className="relative mb-8 mx-auto lg:mx-0"
                        >
                            <div className="w-80 h-80 rounded-full relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1">
                                    <motion.div
                                        className="w-full h-full rounded-full bg-white relative overflow-hidden"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <motion.img
                                            src="/me.png"
                                            alt="Zakaria Alliouate"
                                            className="w-full h-full rounded-full object-cover"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: imageLoaded ? 1 : 0 }}
                                            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                                            onLoad={() => setImageLoaded(true)}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://placehold.co/320x320/ffffff/4b5563?text=Z.A";
                                                setImageLoaded(true);
                                            }}
                                        />
                                        {!imageLoaded && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                                                    className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full"
                                                />
                                            </div>
                                        )}
                                        <motion.div
                                            className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                                            animate={{ scale: [1, 1.08, 1] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ ...smoothTransition, delay: 0.8 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-700">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span className="font-medium">Morocco</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-700">
                                <Calendar className="w-4 h-4 text-purple-600" />
                                <span className="font-medium">3+ Years Experience</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-700">
                                <Code2 className="w-4 h-4 text-cyan-600" />
                                <span className="font-medium">Full Stack Developer</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ ...smoothTransition, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Name & Title */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                                className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-4 border border-gray-200"
                            >
                                <motion.div
                                    className="w-2 h-2 bg-blue-600 rounded-full"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <span className="text-gray-700 text-sm font-medium">About Me</span>
                            </motion.div>

                            {/* Animated Name */}
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : {}}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                                className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight"
                            >
                                {["Z", "A", "K", "A", "R", "I", "A"].map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                                        transition={{ delay: 0.7 + index * 0.08, duration: 0.8, ease: "easeOut" }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                                <motion.span
                                    className="block bg-gradient-to-r from-sky-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-bold"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                                    transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
                                >
                                    ALLIOUATE
                                </motion.span>
                            </motion.h2>

                            {/* Animated Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { y: -5, opacity: 1 } : {}}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                }}
                                className="text-2xl text-gray-600 font-semibold"
                            >
                                Full Stack Developer
                            </motion.p>



                        </div>


                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : {}}
                            transition={{ ...smoothTransition, delay: 1.2 }}
                        >
                            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                {[1, 2, 3].map((i, idx) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ ...smoothTransition, delay: 1.2 + idx * 0.1 }}
                                    >
                                        {idx === 0 && "I am a passionate Full Stack Developer with over 3 years of experience specializing in modern web technologies. My expertise spans across the entire development stack, from creating responsive front-end interfaces with React to building robust back-end systems with Node.js."}
                                        {idx === 1 && "I believe in writing clean, maintainable code and following best practices to deliver high-quality solutions. My approach combines technical excellence with user-centered design, ensuring that every application I build is both powerful and intuitive."}
                                        {idx === 2 && "Throughout my career, I've had the opportunity to work on diverse projects that have honed my skills in problem-solving, architecture design, and performance optimization. I'm constantly learning and adapting to new technologies to stay at the forefront of web development."}
                                    </motion.p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
