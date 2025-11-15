import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Code2 } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, []);

  const smoothTransition = { duration: 0.8, ease: "easeInOut" };

  const projects = [
    { id: 1, header: "Future Project 1", title: "E-Commerce Platform for Local Stores", description: "A full-stack e-commerce solution...", image: "/api/placeholder/400/250", technologies: ["React", "Node.js", "MongoDB"], github: "#", live: "#", category: "Full Stack", duration: "6 months", team: "Solo Project" },
    { id: 2, header: "Future Project 2", title: "Online Food Ordering System", description: "Platform connecting restaurants...", image: "/api/placeholder/400/250", technologies: ["React", "Node.js", "PostgreSQL"], github: "#", live: "#", category: "Full Stack", duration: "5 months", team: "Team of 2" },
    { id: 3, header: "Future Project 3", title: "Real Estate Listing App", description: "Web app for real estate agents...", image: "/api/placeholder/400/250", technologies: ["Next.js", "Node.js", "MongoDB"], github: "#", live: "#", category: "Full Stack", duration: "4 months", team: "Solo Project" },
    { id: 4, header: "Future Project 4", title: "Appointment Booking Platform", description: "Booking system for salons/clinics...", image: "/api/placeholder/400/250", technologies: ["Vue.js", "Node.js", "MySQL"], github: "#", live: "#", category: "Full Stack", duration: "3 months", team: "Solo Project" },
    { id: 5, header: "Future Project 5", title: "Freelance Marketplace", description: "Local freelance platform...", image: "/api/placeholder/400/250", technologies: ["React", "Node.js", "PostgreSQL"], github: "#", live: "#", category: "Full Stack", duration: "6 months", team: "Team of 2" },
    { id: 6, header: "Future Project 6", title: "Online Learning Portal", description: "Web app for online courses...", image: "/api/placeholder/400/250", technologies: ["Next.js", "Node.js", "MongoDB"], github: "#", live: "#", category: "Full Stack", duration: "7 months", team: "Solo Project" },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="min-h-screen relative flex flex-col items-center justify-center py-20 bg-black"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Projects Showcase
          </motion.h2>

          {/* Gradient underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6" />

          <motion.p
            className="text-xl text-gray-400 font-semibold"
            initial={{ y: 10, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            Full Stack Projects for Moroccan Market
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={smoothTransition}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group bg-gray-900/50 rounded-2xl shadow-lg border border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:border-purple-500/30"
              whileHover={{ y: -5 }}
            >
              <div className="px-4 pt-4">
                <h4 className="text-gray-400 text-sm font-semibold mb-2">{project.header}</h4>
              </div>

              {/* Placeholder Image */}
              <div className="relative h-40 md:h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                <Code2 className="w-12 h-12 text-purple-400" />
              </div>

              <div className="p-4">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-3">{project.description}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>{project.team}</span>
                  </div>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 text-purple-300 px-2 py-1 rounded-full text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-200 group/github"
                  >
                    <Github className="w-4 h-4 group-hover/github:text-purple-400 transition-colors duration-200" /> 
                    <span className="text-xs">Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    className="relative group inline-flex items-center justify-center overflow-hidden rounded-lg px-[2px] py-[2px] bg-gradient-to-br from-purple-600 to-blue-600 shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.8)]"
                  >
                    <span className="w-full h-full bg-black rounded-lg text-white px-3 py-1 text-xs flex items-center gap-1 transition-all duration-300 group-hover:bg-black/40">
                      <ExternalLink className="w-4 h-4" /> 
                      Live Demo
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;