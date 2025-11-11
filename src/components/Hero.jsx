import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// FIX: Replaced 'react-icons/fa' imports with 'lucide-react' icons (Github, Linkedin)
import { Code2, Award, Zap, Sparkles, Star, Github, Linkedin } from "lucide-react"; 

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);
    const heroRef = useRef(null);
    const { scrollY } = useScroll();

    // 1. Keep background color transformation (Dark to White) - Range changed to [0, 800]
    const bgColor = useTransform(
        scrollY,
        [0, 800],      // scroll range increased for slower transition
        ["#111827", "#ffffff"]  // dark → white
    );

    // ✨ NEW: Text color transformation (Light to Dark) - Range changed to [0, 800]
    const textColor = useTransform(
        scrollY,
        [0, 800],
        ["#f3f4f6", "#111827"] // Light Gray (for dark bg) -> Dark Blue/Black (for white bg)
    );

    // Parallax effects - Range changed to [0, 800]
    const yParallax = useTransform(scrollY, [0, 800], [0, -80]);
    const opacityFade = useTransform(scrollY, [0, 800], [1, 0]);
    const scale = useTransform(scrollY, [0, 800], [1, 0.95]);

    useEffect(() => {
        setIsVisible(true);
        setMounted(true);
    }, []);

    const fadeIn = (delay = 0) => ({
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.8, 
                delay, 
                ease: [0.25, 0.8, 0.25, 1],
            },
        },
    });

    const floatingAnimation = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseGlow = {
        animate: {
            boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.1)",
                "0 0 40px rgba(59, 130, 246, 0.2)",
                "0 0 20px rgba(59, 130, 246, 0.1)"
            ],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Safe particle positions with useMemo for optimization
    const particles = useMemo(() => 
        Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: mounted ? Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200) : 0,
            y: mounted ? Math.random() * 800 : 0,
            duration: 8 + Math.random() * 6,
            delay: Math.random() * 3,
            size: Math.random() * 3 + 1,
        })), [mounted]
    );

    const wordAnimation = {
        hidden: { opacity: 0, y: 25 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            } 
        },
    };

    return (
        // 2. Change section to motion.section and apply dynamic background color
        <motion.section
            id="home"
            ref={heroRef}
            className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
            style={{ backgroundColor: bgColor }} // Apply bgColor here
        >
            {/* 3. Enhanced Deep Motion Background (Removed static dark gradient classes) */}
            <motion.div
                style={{ y: yParallax, opacity: opacityFade, scale }}
                className="absolute inset-0" // Removed: bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900
            >
                {/* Animated gradient clouds */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 30%, rgba(80,100,255,0.15), transparent 50%), " +
                            "radial-gradient(circle at 80% 70%, rgba(120,180,255,0.15), transparent 50%), " +
                            "radial-gradient(circle at 40% 80%, rgba(100,200,255,0.1), transparent 50%)",
                        backgroundSize: "200% 200%",
                    }}
                />

                {/* Enhanced Floating Orbs with better animation */}
                <motion.div
                    className="absolute top-1/4 left-1/3 w-[35rem] h-[35rem] bg-gradient-to-br from-blue-600/15 to-blue-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.5, 0.2],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ 
                        duration: 12, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/3 w-[32rem] h-[32rem] bg-gradient-to-br from-cyan-500/15 to-blue-700/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.3, 0.9, 1.3],
                        opacity: [0.15, 0.4, 0.15],
                        y: [0, 40, 0],
                        x: [0, -20, 0],
                    }}
                    transition={{ 
                        duration: 14, 
                        repeat: Infinity, 
                        ease: "easeInOut", 
                        delay: 2 
                    }}
                />

                {/* New Orb */}
                <motion.div
                    className="absolute top-1/2 left-1/4 w-[25rem] h-[25rem] bg-gradient-to-br from-violet-500/10 to-purple-700/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ 
                        duration: 18, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1 
                    }}
                />
            </motion.div>

            {/* Enhanced Moving Grid Pattern */}
            <motion.div
                className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
                animate={{
                    backgroundPosition: ["0px 0px", "60px 60px"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Enhanced Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <AnimatePresence>
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute rounded-full bg-gradient-to-r from-blue-300/40 to-cyan-300/40"
                            initial={{
                                x: particle.x,
                                y: particle.y + 800,
                                opacity: 0,
                                scale: 0,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                            }}
                            animate={{
                                y: [particle.y + 800, -200],
                                x: [particle.x, particle.x + (Math.random() - 0.5) * 100],
                                opacity: [0, 0.8, 0],
                                scale: [0, 1, 0.5],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Shining Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-blue-200/30"
                        initial={{
                            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                            y: Math.random() * 800,
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut",
                        }}
                    >
                        <Star size={Math.random() * 3 + 1} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            {/* 4. Content - Apply dynamic text color to the main wrapper */}
            <motion.div
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                style={{ scale, color: textColor }} // Apply textColor here
                className="relative z-10 text-center max-w-6xl mx-auto px-6"
            >
                {/* Enhanced Badge with floating animation */}
                <motion.div
                    variants={fadeIn(0.2)}
                    {...floatingAnimation}
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800/40 to-slate-700/30 backdrop-blur-2xl border border-slate-600/50 rounded-2xl px-6 py-3 mb-12 shadow-2xl relative overflow-hidden"
                    whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(96, 165, 250, 0.4)",
                        transition: { duration: 0.3 },
                    }}
                >
                    {/* Animated background shine */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
                        animate={{
                            x: [-100, 300],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                    <Sparkles className="w-5 h-5 text-blue-300 relative z-10" />
                    {/* 5. Update text color class to inherit dynamic color */}
                    <span className="text-current text-sm font-semibold tracking-wide relative z-10">
                        FULL STACK DEVELOPER
                    </span>
                    <motion.div
                        className="w-1.5 h-1.5 bg-blue-400 rounded-full relative z-10"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.7, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                {/* Enhanced Heading with better animations */}
                <motion.div className="mb-8">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 1.5, 
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.3 
                        }}
                        className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight"
                    >
                        <motion.span
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
                            }}
                            transition={{ 
                                duration: 6, 
                                repeat: Infinity, 
                                ease: "linear" 
                            }}
                            className="bg-gradient-to-r from-gray-100 via-blue-100 to-gray-200 bg-clip-text text-transparent bg-[length:200%_auto] block font-light"
                        >
                            ZAKARIAE
                        </motion.span>
                        <motion.span
                            animate={{
                                letterSpacing: ["-0.02em", "0.03em", "-0.02em"],
                                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
                            }}
                            transition={{ 
                                duration: 5, 
                                repeat: Infinity, 
                                ease: "easeInOut", 
                                delay: 0.5 
                            }}
                            className="bg-gradient-to-r from-slate-300 via-gray-100 to-slate-400 bg-clip-text text-transparent block font-thin mt-2"
                        >
                            ALLIOUATE
                        </motion.span>
                    </motion.h1>
                </motion.div>

                {/* Enhanced Subtitle with staggered animation */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1.2, 
                        ease: "easeOut",
                        delay: 0.8 
                    }}
                    className="relative mt-6 mb-16 text-center"
                >
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { 
                                    staggerChildren: 0.1,
                                    delayChildren: 1.2
                                },
                            },
                        }}
                        className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-3xl md:text-4xl font-semibold leading-snug tracking-wide"
                    >
                        {[
                            "Building",
                            "high-performance",
                            "web",
                            "experiences",
                            "with",
                            "elegant",
                            "design",
                            "&",
                            "modern",
                            "technology",
                        ].map((word, i) => (
                            <motion.span
                                key={i}
                                variants={wordAnimation}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                className={`inline-block cursor-default ${["elegant", "design", "modern", "technology"].includes(word)
                                        ? "bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent font-bold"
                                        : "text-current" // 5. Update text color class to inherit dynamic color
                                    }`}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>
                </motion.div>
                
                {/* 2. ADDED: Social Icons Block */}
                <motion.div
                    variants={fadeIn(1.5)} // Staggered delay after the subtitle
                    className="flex justify-center space-x-8 mb-16 mt-8"
                >
                    {/* GitHub Link */}
                    <motion.a 
                        href="https://github.com/zakari-aee"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        // text-current uses the dynamic textColor set by the scroll transformation
                        className="text-current hover:text-blue-500 transition duration-300 ease-in-out" 
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {/* FIX: Used lucide-react Github icon */}
                        <Github className="w-10 h-10 md:w-12 md:h-12" />
                    </motion.a>

                    {/* LinkedIn Link */}
                    <motion.a 
                        href="https://www.linkedin.com/in/zakariae-alliouate/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="text-current hover:text-blue-500 transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {/* FIX: Used lucide-react Linkedin icon */}
                        <Linkedin className="w-10 h-10 md:w-12 md:h-12" />
                    </motion.a>
                </motion.div>

                {/* Enhanced Tech Stack with pulse animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1, 
                        delay: 1.8, 
                        ease: "easeOut" 
                    }}
                    {...floatingAnimation}
                    className="inline-flex items-center space-x-4 bg-gradient-to-r from-slate-800/50 to-slate-700/40 backdrop-blur-2xl rounded-3xl px-8 py-5 border border-slate-600/60 shadow-2xl relative overflow-hidden"
                    whileHover={{
                        scale: 1.04,
                        borderColor: "rgba(96, 165, 250, 0.6)",
                        transition: { duration: 0.3 },
                    }}
                >
                    {/* Background shine effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
                        animate={{
                            x: [-200, 400],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                    <Code2 className="w-7 h-7 text-blue-300 relative z-10" />
                    <motion.span
                        className="text-current text-xl font-light tracking-wider relative z-10" // 5. Updated class
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            // The text gradient colors will remain light, but the text is still visible
                            // because the main background changes to white.
                            backgroundImage: "linear-gradient(90deg, #e5e7eb, #d1d5db, #e5e7eb)",
                            backgroundSize: "200% auto",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        REACT • C • PYTHON • LARAVEL
                    </motion.span>
                    <Award className="w-6 h-6 text-gray-300 relative z-10" />
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-6 h-10 border-2 border-blue-300/50 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, 16, 0],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-1 h-3 bg-blue-300 rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;