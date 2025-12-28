"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Terminal,
  Folder,
  ArrowUpRight,
} from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "01",
      title: "El Hilali E-Com",
      category: "Full Stack",
      description: "Luxury e-commerce with WhatsApp integration, multilingual support, and bulk pricing management.",
      tags: ["React", "Tailwind", "Express", "Stripe"],
      image: "/image.png",
      color: "from-cyan-500/20",
      github: "https://github.com/zakari-aee/store",
      live: "https://el-hilali.vercel.app/",
    },
    {
      id: "02",
      title: "Bricol Market",
      category: "Full Stack",
      description:
        "Marketplace connecting skilled workers with customers. Features AI chatbot and real-time job matching.",
      tags: ["Laravel", "React", "Python"],
      image: "/image2.png",
      color: "from-blue-500/20",
      github: "https://github.com/zakari-aee/bricol",
      live: "https://bricol.vercel.app",
    },
    {
      id: "03",
      title: "Oussama Barber",
      category: "Frontend",
      description:
        "Premium barber shop site with interactive gallery and smooth booking animations.",
      tags: ["React", "Framer Motion", "Lucide"],
      image: "/oussama.png",
      color: "from-red-500/20",
      github: "https://github.com/zakari-aee/oussama-barbershop",
      live: "https://oussamabarber.vercel.app/",
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 bg-[#050505] text-white overflow-hidden border-t border-white/5"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT SIDEBAR: Compact Sticky Title */}
          <motion.div
            className="lg:col-span-3 lg:sticky lg:top-32 h-fit"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
          >
            <div className="flex items-center gap-2 mb-3">
              <Terminal size={12} className="text-blue-500" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500">
                Selected Works
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 text-white">
              Recent
              <br />
              <span className="text-neutral-500">Projects.</span>
            </h2>
            <p className="text-neutral-500 text-xs leading-relaxed max-w-[200px] font-light">
              A curated selection of technical deployments and full-stack applications.
            </p>
          </motion.div>

          {/* RIGHT: Grid of Compact Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* IMAGE AREA - Compact Height */}
                <div className="relative h-48 overflow-hidden w-full bg-neutral-900 border-b border-white/5">
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Floating ID badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10 flex items-center gap-2">
                       <span className="text-[10px] font-mono text-neutral-400">{project.id}</span>
                    </div>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400 mb-1 block">
                            {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                    </div>
                    
                    {/* Icon links moved to top right of content for cleaner look */}
                    <div className="flex gap-3 pt-1">
                        <a href={project.github} target="_blank" className="text-neutral-500 hover:text-white transition-colors"><Github size={16} /></a>
                        <a href={project.live} target="_blank" className="text-neutral-500 hover:text-white transition-colors"><ExternalLink size={16} /></a>
                    </div>
                  </div>

                  <p className="text-neutral-400 text-xs leading-relaxed mb-6 font-light line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 rounded text-[9px] font-medium text-neutral-400 uppercase tracking-wide border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;