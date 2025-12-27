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
  FaWindows,
  FaPhp,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiC,
  SiDocker,
} from 'react-icons/si';
import { Brain, MessageCircle, Users, Clock, RefreshCw, Lightbulb, ArrowRight } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaReact />, name: 'React Native' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    // { icon: <FaCode />, name: 'Express' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiC />, name: 'C' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiDocker />, name: 'Docker' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaLinux />, name: 'Linux' },
  ];

  const softSkills = [
    { icon: <Brain />, name: 'Problem Solving' },
    { icon: <MessageCircle />, name: 'Communication' },
    { icon: <Users />, name: 'Team Work' },
    { icon: <Clock />, name: 'Time Mgmt' },
    { icon: <RefreshCw />, name: 'Adaptability' },
    { icon: <Lightbulb />, name: 'Critical Thinking' },
  ];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="min-h-screen py-20 bg-[#050505] text-white flex flex-col justify-center border-t border-white/5"
    >
      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Title - Show first on mobile, right on desktop */}
          <motion.div 
            className="col-span-1 lg:col-span-3 order-first lg:order-last lg:sticky lg:top-32 h-fit"
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-blue-500">Skills // 03</span>
              <div className="w-8 h-[1px] bg-blue-500" />
            </div>
            <h2 className="text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">
              <span className="text-neutral-700 italic">Skill</span><br />Set.
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs font-light">
              Still on track and learning new things every day. Continuously improving my skills and exploring new technologies to stay ahead.
            </p>
          </motion.div>

          {/* Skills Content */}
          <div className="col-span-1 lg:col-span-9 order-last lg:order-first">
            
            {/* Technical Skills */}
            <div className="mb-12">
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-neutral-500 mb-6">Technical</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {technicalSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all flex flex-col items-center justify-center"
                  >
                    <div className="text-3xl md:text-4xl mb-3 text-neutral-400">{skill.icon}</div>
                    <span className="text-[10px] font-bold text-neutral-500 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-12">
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-neutral-500 mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {softSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all flex flex-col items-center justify-center"
                  >
                    <div className="text-3xl md:text-4xl mb-3 text-neutral-400">{skill.icon}</div>
                    <span className="text-[10px] font-bold text-neutral-500 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-white/5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-blue-500 transition-colors group"
              >
                View Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          
      </div>
      </div>
    </section>
  );
};

export default Skills;