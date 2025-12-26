'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Layers, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    { 
      id: 1, 
      title: "E-Commerce Ecosystem", 
      category: "Full Stack Architecture",
      description: "A robust digital commerce solution designed for high-concurrency, featuring real-time inventory and Moroccan payment gateway integration.", 
      image: "/project1.jpg", // Replace with your project screenshots
      technologies: ["React", "Node.js", "MongoDB"], 
      github: "#", 
      live: "#", 
      duration: "6 Months", 
      team: "Lead Developer" 
    },
    { 
      id: 2, 
      title: "FoodFlow Platform", 
      category: "Logistics System",
      description: "End-to-end food ordering and delivery management system with specialized dashboards for restaurants and couriers.", 
      image: "/project2.jpg", 
      technologies: ["React", "Laravel", "PostgreSQL"], 
      github: "#", 
      live: "#", 
      duration: "5 Months", 
      team: "Full-Stack Developer" 
    },
    { 
      id: 3, 
      title: "EstateView Pro", 
      category: "Real Estate Tech",
      description: "High-performance listing application featuring advanced geospatial search and automated agent-client matching.", 
      image: "/project3.jpg", 
      technologies: ["Next.js", "Tailwind", "Firebase"], 
      github: "#", 
      live: "#", 
      duration: "4 Months", 
      team: "Solo Project" 
    }
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="min-h-screen py-24 bg-neutral-950 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header (Matching Education/Skills Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-blue-500"></span>
            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Selected <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Engineering Works.
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Project Image/Preview Area */}
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent z-10" />
                {/* Overlay with subtle pattern or your actual image */}
                <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out">
                   <div className="w-full h-full bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:20px_20px] flex items-center justify-center">
                      <Layers className="w-16 h-16 text-white/10" />
                   </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                      <Github size={18} />
                    </a>
                    <a href={project.live} className="p-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all">
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
                  {project.description}
                </p>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <Calendar size={14} className="text-purple-500" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <Users size={14} className="text-blue-500" />
                    {project.team}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-tighter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;