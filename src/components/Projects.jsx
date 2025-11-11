import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Calendar, Users } from 'lucide-react';
// ...imports and other code remain unchanged

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

  const smoothTransition = { duration: 1, ease: "easeInOut" };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      header: "Future Project 1", // ← Title added
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Full Stack",
      duration: "6 months",
      team: "Solo Project"
    },
    {
      id: 2,
      title: "Task Management App",
      header: "Future Project 2",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Frontend",
      duration: "4 months",
      team: "Team of 3"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      header: "Future Project 3",
      description: "Interactive data visualization dashboard for business analytics with real-time data processing and customizable reports.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Django", "PostgreSQL", "Chart.js", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Backend",
      duration: "5 months",
      team: "Solo Project"
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      header: "Future Project 4",
      description: "Cross-platform mobile application for fitness tracking with workout plans, progress analytics, and social features.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Mobile",
      duration: "7 months",
      team: "Team of 2"
    },
    {
      id: 5,
      title: "AI Content Generator",
      header: "Future Project 5",
      description: "Machine learning powered content generation tool with natural language processing and customizable templates.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "Redis"],
      github: "https://github.com",
      live: "https://example.com",
      category: "AI/ML",
      duration: "8 months",
      team: "Solo Project"
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      header: "Future Project 6",
      description: "Secure cryptocurrency wallet with multi-chain support, transaction history, and real-time market data.",
      image: "/api/placeholder/400/250",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "Ethereum"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Blockchain",
      duration: "6 months",
      team: "Team of 4"
    }
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="min-h-screen relative flex items-center justify-center py-20 bg-white"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Title Section */}
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
            <span className="text-gray-700 text-sm font-medium">My Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ ...smoothTransition, delay: 0.4 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight"
          >
            {["P", "R", "O", "J", "E", "C", "T", "S"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.06, duration: 0.8, ease: "easeOut" }}
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
              SHOWCASE
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { y: -5, opacity: 1 } : {}}
            transition={{ delay: 1.1, duration: 1.5, ease: "easeInOut" }}
            className="text-2xl text-gray-600 font-semibold"
          >
            Recent Work & Case Studies
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ ...smoothTransition, delay: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                ...smoothTransition, 
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden cursor-default hover:shadow-xl transition-all duration-300"
            >
              {/* Project Title (New) */}
              <div className="px-6 pt-6">
                <h4 className="text-gray-400 text-sm font-semibold mb-2">{project.header}</h4>
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-blue-400" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{project.team}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
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
