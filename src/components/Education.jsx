'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText } from 'lucide-react';

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);
    const educationRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) setIsVisible(true);
            },
            { threshold: 0 } // Trigger immediately when any part is visible
        );

        if (educationRef.current) observer.observe(educationRef.current);
        return () => educationRef.current && observer.unobserve(educationRef.current);
    }, [isVisible]);

    const titleVariant = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const cardVariant = (direction = 'left') => ({
        hidden: { opacity: 0, x: direction === 'left' ? -30 : 30 }, // smaller offset
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    });

    const educationData = [
        {
            school: "OFPPT Meknes",
            location: "Meknes, Morocco",
            duration: "2023 - 2025",
            degree: "Full-Stack Web Development",
            grade: "Learned all Full-Stack languages",
            image: "/ofppt.png",
            coursework: ["Python", "POO", "JavaScript", "React", "Node.js", "PHP", "MySQL", "Laravel"],
            description: "Studied for 2 years at OFPPT Meknes, acquiring solid skills in full-stack web development."
        },
        {
            school: "1337 UM6P",
            location: "Rabat, Morocco",
            duration: "2025 - Present",
            degree: "Software Engineering & Problem Solving",
            grade: "Learned C, Git, Vim, and advanced problem solving",
            image: "/1337.png",
            coursework: ["Problem Solving", "C Programming", "Algorithms", "Git", "Vim"],
            description: "Enhanced problem-solving skills and deepened knowledge of C programming and Git."
        }
    ];

    return (
        <section
            id="education"
            ref={educationRef}
            className="min-h-screen flex flex-col items-center py-24 bg-black px-4 lg:px-20 text-white"
        >
            {/* Section Title */}
            <motion.div
                variants={titleVariant}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Education
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
            </motion.div>

            <div className="flex flex-col gap-10 w-full max-w-6xl">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={edu.school}
                        variants={cardVariant(index % 2 === 0 ? 'left' : 'right')}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        transition={{ delay: 0.1 + index * 0.15 }} // shorter delay
                        className="relative flex flex-col md:flex-row bg-gray-900/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:bg-gray-900/70 transition-all duration-500 border border-gray-800 backdrop-blur-sm"
                    >
                        <div className="relative w-full md:w-96 h-48 md:h-auto flex-shrink-0">
                            <img src={edu.image} alt={edu.school} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5">
                                <h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                                    <MapPin className="w-4 h-4 text-purple-400" />
                                    <span>{edu.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300 text-sm">
                                    <Calendar className="w-4 h-4 text-blue-400" />
                                    <span>{edu.duration}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col p-6 gap-4 w-full">
                            <div className="flex items-center gap-3">
                                <BookOpen className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                            </div>
                            <div className="flex items-start gap-3 text-gray-300">
                                <Award className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                <p className="text-base leading-relaxed">{edu.grade}</p>
                            </div>
                            <div className="flex items-start gap-3 text-gray-400">
                                <FileText className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                                <p className="text-sm md:text-base leading-relaxed">{edu.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {edu.coursework.map(course => (
                                    <span
                                        key={course}
                                        className="px-3 py-1 bg-gradient-to-br from-purple-600/20 to-blue-600/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                                    >
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;