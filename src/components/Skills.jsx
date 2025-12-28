import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiC,
  SiDocker,
  SiLeetcode,
} from "react-icons/si";
import {
  Brain,
  MessageCircle,
  Users,
  Clock,
  RefreshCw,
  Lightbulb,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

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

  // Added 'color' property with official brand hex codes
  const technicalSkills = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaReact />, name: "React Native", color: "#61DAFB" },
    { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiTailwindcss />, name: "TailwindCSS", color: "#06B6D4" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" }, // White for dark mode
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <FaLaravel />, name: "Laravel", color: "#FF2D20" },
    { icon: <FaPhp />, name: "PHP", color: "#777BB4" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <SiC />, name: "C", color: "#A8B9CC" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
    { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <FaLinux />, name: "Linux", color: "#FCC624" },
  ];

  const softSkills = [
    { icon: <Brain />, name: "Problem Solving" },
    { icon: <MessageCircle />, name: "Communication" },
    { icon: <Users />, name: "Team Work" },
    { icon: <Clock />, name: "Time Mgmt" },
    { icon: <RefreshCw />, name: "Adaptability" },
    { icon: <Lightbulb />, name: "Critical Thinking" },
  ];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="min-h-screen py-20 bg-[#050505] text-white flex flex-col justify-center border-t border-white/5"
    >
      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Title */}
          <motion.div
            className="col-span-1 lg:col-span-3 order-first lg:order-last lg:sticky lg:top-32 h-fit"
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-blue-500">
                Skills // 03
              </span>
              <div className="w-8 h-[1px] bg-blue-500" />
            </div>
            <h2 className="text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">
              <span className="text-neutral-700 italic">Skill</span>
              <br />
              Set.
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs font-light">
              Still on track and learning new things every day. Continuously
              improving my skills and exploring new technologies to stay ahead.
            </p>
          </motion.div>

          {/* Skills Content */}
          <div className="col-span-1 lg:col-span-9 order-last lg:order-first">
            {/* Technical Skills */}
            <div className="mb-12">
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-neutral-500 mb-6">
                Technical
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {technicalSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    // 1. We pass the color as a CSS variable here
                    style={{ "--skill-color": skill.color }}
                    className="group p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all flex flex-col items-center justify-center cursor-default"
                  >
                    {/* 2. We use text-[var(--skill-color)] on group-hover */}
                    <div className="text-3xl md:text-4xl mb-3 text-neutral-400 transition-colors duration-300 group-hover:text-[var(--skill-color)]">
                      {skill.icon}
                    </div>
                    {/* Optional: Also color the text on hover? If so, add the group-hover class here too */}
                    <span className="text-[10px] font-bold text-neutral-500 text-center transition-colors duration-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-12">
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-neutral-500 mb-6">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {softSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all flex flex-col items-center justify-center"
                  >
                    {/* Soft skills default to white or blue on hover since they don't have brand colors */}
                    <div className="text-3xl md:text-4xl mb-3 text-neutral-400 transition-colors duration-300 group-hover:text-white">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-bold text-neutral-500 text-center transition-colors duration-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-blue-500 transition-colors group"
              >
                View Projects{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;