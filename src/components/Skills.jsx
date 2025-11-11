import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaLaravel,
  FaNodeJs,
  FaJsSquare,
  FaCode,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiVim,
} from 'react-icons/si';
import { 
  Brain, 
  MessageCircle, 
  Users, 
  Clock, 
  RefreshCw, 
  Lightbulb, 
  Crown, 
  Sparkles 
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const smoothTransition = { duration: 1, ease: "easeInOut" };

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' },
    { id: 'languages', label: 'Languages' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  const technicalSkills = {
    frontend: [
      { icon: <FaReact className="text-sky-500" />, name: 'React' },
      { icon: <FaJsSquare className="text-yellow-500" />, name: 'JavaScript' },
      { icon: <SiTailwindcss className="text-cyan-500" />, name: 'Tailwind CSS' },
    ],
    backend: [
      { icon: <FaPython className="text-blue-500" />, name: 'Python' },
      { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
      { icon: <FaLaravel className="text-red-500" />, name: 'Laravel' },
    ],
    database: [
      { icon: <SiPostgresql className="text-blue-600" />, name: 'PostgreSQL' },
      { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
      { icon: <SiMysql className="text-sky-600" />, name: 'MySQL' },
    ],
    tools: [
      { icon: <FaGitAlt className="text-orange-600" />, name: 'Git' },
      { icon: <SiVim className="text-green-500" />, name: 'Vim' },
      { icon: <FaCode className="text-indigo-500" />, name: 'VS Code' },
      { icon: <FaLinux className="text-gray-700" />, name: 'Linux' },
    ],
    languages: [
      { icon: <FaPython className="text-blue-500" />, name: 'Python' },
      { icon: <FaJsSquare className="text-yellow-500" />, name: 'JavaScript' },
      { icon: <FaCode className="text-blue-400" />, name: 'C' },
    ]
  };

  const softSkills = [
    { icon: <Brain className="text-purple-500" />, name: 'Problem Solving' },
    { icon: <MessageCircle className="text-blue-500" />, name: 'Communication' },
    { icon: <Users className="text-green-500" />, name: 'Team Collaboration' },
    { icon: <Clock className="text-orange-500" />, name: 'Time Management' },
    { icon: <RefreshCw className="text-cyan-500" />, name: 'Adaptability' },
    { icon: <Lightbulb className="text-yellow-500" />, name: 'Critical Thinking' },
    { icon: <Crown className="text-red-500" />, name: 'Leadership' },
    { icon: <Sparkles className="text-pink-500" />, name: 'Creativity' },
  ];

  // Combine all skills for the "All" category
  const allSkills = [
    ...technicalSkills.frontend,
    ...technicalSkills.backend,
    ...technicalSkills.database,
    ...technicalSkills.tools,
    ...technicalSkills.languages,
  ];

  const SkillCard = ({ skill, index }) => (
    <motion.div
      key={skill.name}
      className="group relative"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        ...smoothTransition, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
    >
      <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl flex flex-col items-center justify-center p-6 shadow-sm border border-gray-200 cursor-default group-hover:shadow-md transition-all duration-300 h-full">
        <motion.div 
          className="text-5xl mb-4"
          whileHover={{ 
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
        >
          {skill.icon}
        </motion.div>
        <p className="text-base font-medium tracking-wide text-gray-800 text-center">
          {skill.name}
        </p>
      </div>

      {/* Hover border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-blue-500/30 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  const CategorySection = ({ title, skills, columns }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...smoothTransition, delay: 0.2 }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
    >
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h3>
      <div className={`grid ${columns} gap-6`}>
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : activeCategory === 'soft' 
    ? softSkills 
    : technicalSkills[activeCategory];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="min-h-screen relative flex items-center justify-center py-20 bg-white"
    >
      {/* Background Orbs - Same as About section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        {/* Animated Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={smoothTransition}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-6 border border-gray-200"
          >
            <motion.div
              className="w-2 h-2 bg-blue-600 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-gray-700 text-sm font-medium">Technical & Soft Skills</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ ...smoothTransition, delay: 0.4 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight"
          >
            {["S", "K", "I", "L", "L", "S"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.08, duration: 0.8, ease: "easeOut" }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              className="block bg-gradient-to-r from-sky-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            >
              PORTFOLIO
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { y: -5, opacity: 1 } : {}}
            transition={{ delay: 1.1, duration: 1.5, ease: "easeInOut" }}
            className="text-2xl text-gray-600 font-semibold"
          >
            Full Stack Development
          </motion.p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, ...smoothTransition }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-blue-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {activeCategory === 'all' ? (
              <div className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {allSkills.map((skill, index) => (
                    <SkillCard 
                      key={skill.name} 
                      skill={skill} 
                      index={index}
                    />
                  ))}
                </div>
                <CategorySection
                  title="Professional Soft Skills"
                  skills={softSkills}
                  columns="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                />
              </div>
            ) : (
              <CategorySection
                title={
                  activeCategory === 'frontend' ? 'Frontend Development' :
                  activeCategory === 'backend' ? 'Backend Development' :
                  activeCategory === 'database' ? 'Database & Storage' :
                  activeCategory === 'tools' ? 'Development Tools' :
                  activeCategory === 'languages' ? 'Programming Languages' :
                  'Professional Soft Skills'
                }
                skills={filteredSkills}
                columns={
                  activeCategory === 'soft' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
                  activeCategory === 'frontend' ? 'grid-cols-2 md:grid-cols-3' :
                  activeCategory === 'backend' ? 'grid-cols-2 md:grid-cols-3' :
                  activeCategory === 'database' ? 'grid-cols-2 md:grid-cols-3' :
                  activeCategory === 'tools' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
                  'grid-cols-2 md:grid-cols-3'
                }
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;