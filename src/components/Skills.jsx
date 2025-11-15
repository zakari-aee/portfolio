import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
import { SiTailwindcss, SiPostgresql, SiMongodb, SiMysql, SiVim } from 'react-icons/si';
import { Brain, MessageCircle, Users, Clock, RefreshCw, Lightbulb, Crown, Sparkles } from 'lucide-react';

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
    ],
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

  // Combine all skills, removing duplicates by name
  const allSkills = [
    ...technicalSkills.frontend,
    ...technicalSkills.backend,
    ...technicalSkills.database,
    ...technicalSkills.tools,
    ...technicalSkills.languages,
    ...softSkills,
  ];
  const uniqueAllSkills = Array.from(new Map(allSkills.map(skill => [skill.name, skill])).values());

  // Filter skills based on category
  let filteredSkills;
  if (typeof window !== 'undefined' && window.innerWidth <= 640) {
    // Mobile: show all skills, no categories
    filteredSkills = uniqueAllSkills;
  } else {
    filteredSkills =
      activeCategory === 'all'
        ? uniqueAllSkills
        : activeCategory === 'soft'
          ? softSkills
          : technicalSkills[activeCategory];
  }

  const SkillCard = ({ skill }) => (
    <motion.div
      className="bg-gray-800 rounded-2xl flex flex-col items-center justify-center p-6 shadow-lg border border-gray-700 transition-all hover:bg-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      <div className="text-5xl mb-4">{skill.icon}</div>
      <p className="text-white text-base font-medium text-center">{skill.name}</p>
    </motion.div>
  );

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-950 px-4"
    >
      <div className="max-w-7xl w-full flex flex-col items-center">
        <motion.div
          className="text-center mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-800 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Skills
          </motion.h1>

          {/* 3-line Motivation */}
          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            I love learning and applying new technologies. <br />
            These skills reflect my dedication and growth as a developer.
          </motion.p>
        </motion.div>


        {/* Categories (hidden on mobile) */}
        <div className="hidden sm:flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === category.id
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:border-blue-300'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {filteredSkills.map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
