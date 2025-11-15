'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    MapPin,
    Clock,
    Github,
    Linkedin,
    Calendar,
    ExternalLink,
    User
} from 'lucide-react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 }
        );
        if (contactRef.current) observer.observe(contactRef.current);
        return () => observer.disconnect();
    }, []);

    const contactInfo = {
        email: 'zakariaealliouate@gmail.com',
        location: 'Meknes, Morocco',
        timeZone: 'WEST (UTC+1) / GMT+1',
        github: 'https://github.com/zakari-aee',
        linkedin: 'https://linkedin.com/in/zakariae-alliouate',
    };

    const officeHours = [
        { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM (WEST)' },
        { days: 'Saturday', hours: '10:00 AM - 2:00 PM (WEST)' },
        { days: 'Sunday', hours: 'Closed' }
    ];

    const IconBox = ({ children, colorClass }) => (
        <div className={`p-3 ${colorClass} rounded-lg transition-colors flex-shrink-0`}>
            {children}
        </div>
    );

    return (
        <section
            id="contact"
            ref={contactRef}
            className="min-h-screen flex flex-col items-center py-24 bg-gray-950 px-4 lg:px-20 text-white"
        >
            <div className="max-w-4xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    className="text-center mb-8 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-800 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                        initial={{ y: 20, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Let's work together to bring your ideas to life. I'm always open to discussing new opportunities.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Card 1 */}
                    <motion.div
                        className="bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-800 shadow-xl shadow-blue-900/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <IconBox colorClass="bg-blue-500/20">
                                <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                            </IconBox>
                            <h2 className="text-lg sm:text-xl font-bold text-white">Contact Information</h2>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2 sm:gap-3 p-3 bg-black/30 rounded-xl hover:bg-gray-900 transition-colors border border-gray-900 hover:border-blue-900">
                                <IconBox colorClass="bg-blue-500/20">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                </IconBox>
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-400 text-xs sm:text-sm mb-0.5">Email</p>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-white font-semibold hover:text-blue-400 transition-colors flex items-center gap-1 sm:gap-2 truncate"
                                    >
                                        {contactInfo.email}
                                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3 p-3 bg-black/30 rounded-xl border border-gray-900">
                                <IconBox colorClass="bg-blue-500/20">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                </IconBox>
                                <div className="flex-1">
                                    <p className="text-gray-400 text-xs sm:text-sm mb-0.5">Location</p>
                                    <p className="text-white font-semibold text-sm sm:text-base truncate">{contactInfo.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3 p-3 bg-black/30 rounded-xl border border-gray-900">
                                <IconBox colorClass="bg-blue-500/20">
                                    <Clock className="w-5 h-5 text-blue-400" />
                                </IconBox>
                                <div className="flex-1">
                                    <p className="text-gray-400 text-xs sm:text-sm mb-0.5">Time Zone</p>
                                    <p className="text-white font-semibold text-sm sm:text-base">{contactInfo.timeZone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-800">
                            <h3 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-2">
                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                                Office Hours
                            </h3>
                            <div className="space-y-1 sm:space-y-2">
                                {officeHours.map((schedule, index) => (
                                    <div key={index} className="flex justify-between items-center py-1 sm:py-2 border-b border-gray-900 last:border-b-0 text-xs sm:text-sm">
                                        <span className="text-gray-300">{schedule.days}</span>
                                        <span className={`font-semibold ${schedule.hours === 'Closed' ? 'text-gray-600' : 'text-blue-400'}`}>
                                            {schedule.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="bg-gray-900 rounded-2xl p-4 sm:p-6 border border-gray-800 shadow-xl shadow-cyan-900/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <IconBox colorClass="bg-cyan-500/20">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                            </IconBox>
                            <h2 className="text-lg sm:text-xl font-bold text-white">Connect with Me</h2>

                        </div>

                        <div className="space-y-3">
                            <motion.a
                                href={contactInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 sm:gap-3 p-3 bg-black/30 rounded-xl hover:bg-gray-800 transition-all group border border-gray-900 hover:border-gray-700 text-xs sm:text-sm"
                                whileHover={{ x: 3 }}
                            >
                                <IconBox colorClass="bg-gray-800">
                                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-400" />
                                </IconBox>
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-400 mb-0.5">GitHub</p>
                                    <p className="text-white font-semibold truncate">View my projects and code</p>
                                </div>
                                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                            </motion.a>

                            <motion.a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 sm:gap-3 p-3 bg-black/30 rounded-xl hover:bg-gray-800 transition-all group border border-gray-900 hover:border-blue-900 text-xs sm:text-sm"
                                whileHover={{ x: 3 }}
                            >
                                <IconBox colorClass="bg-blue-500/20">
                                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                                </IconBox>
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-400 mb-0.5">LinkedIn</p>
                                    <p className="text-white font-semibold truncate">Connect professionally</p>
                                </div>
                                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                            </motion.a>

                            <motion.a
                                href={`mailto:${contactInfo.email}`}
                                className="flex items-center gap-2 sm:gap-3 p-3 bg-black/30 rounded-xl hover:bg-gray-800 transition-all group border border-gray-900 hover:border-cyan-900 text-xs sm:text-sm"
                                whileHover={{ x: 3 }}
                            >
                                <IconBox colorClass="bg-cyan-500/20">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                                </IconBox>
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-400 mb-0.5">Email</p>
                                    <p className="text-white font-semibold truncate">{contactInfo.email}</p>
                                </div>
                                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                            </motion.a>
                        </div>

                        <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-800">
                            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-3 sm:p-4 border border-blue-900/50 text-xs sm:text-sm">
                                <h3 className="font-semibold text-white mb-1 flex items-center gap-1 sm:gap-2">
                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                                    Based in Morocco
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Located in Meknes, Morocco. I work with clients worldwide and adapt to different time zones.
                                </p>
                            </div>

                            <div className="mt-3 flex items-center gap-2 sm:gap-3 text-cyan-400 bg-cyan-900/30 rounded-xl p-3 sm:p-4 border border-cyan-800/50 text-xs sm:text-sm">
                                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                                <div>
                                    <p className="font-semibold">Quick Response Time</p>
                                    <p className="text-cyan-300 mt-0.5">
                                        Typically respond within 24 hours on business days
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
