"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Terminal,
  Layout,
  Cpu,
  Globe,
  Monitor,
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
      title: "El Hilali - E-Commerce System",
      category: "Full Stack",
      description: "Full-stack luxury e-commerce platform with advanced filtering, WhatsApp integration, multilingual support, and real-time product management with bulk pricing.",
      tags: ["React", "Tailwind CSS", "express.js", "Stripe API", "MongoDB"],
      image: "/image.png",
      color: "from-cyan-500/20",
      github: "https://github.com/zakari-aee/store",
      live: "https://el-hilali.vercel.app/",
    },
    {
      id: "02",
      title: "Bricol - Home Services Marketplace",
      category: "Full Stack",
      description:
        "A comprehensive home services marketplace connecting skilled workers with customers. Features AI-powered chatbot, real-time job matching, integrated payment system, and multi-language support for seamless service discovery and booking.",
      tags: ["Laravel", "React", "Python"],
      image: "/image2.png",
      color: "from-blue-500/20",
      github: "https://github.com/zakari-aee/bricol",
      live: "https://bricol.vercel.app",
    },
    {
      id: "03",
      title: "Oussama Barbershop",
      category: "Full Stack",
      description:
        "A premium barber shop website featuring interactive before/after gallery, smooth animations, and responsive design for seamless client booking experience.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Lucide React"],
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
      className="min-h-screen py-24 bg-[#050505] text-white overflow-hidden border-t border-white/5"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT SIDEBAR: Sticky Title */}
          <motion.div
            className="lg:col-span-3 lg:sticky lg:top-32 h-fit"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
          >
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={14} className="text-blue-500" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-500">
                Works // 03
              </span>
            </div>
            <h2 className="text-6xl font-bold tracking-tighter uppercase mb-8 leading-[0.85]">
              Select
              <br />
              Project.
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-[220px] font-light">
              Showcasing technical architecture and specialized software
              deployments.
            </p>
          </motion.div>

          {/* RIGHT: Large Visual Cards */}
          <div className="lg:col-span-9 space-y-10">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-700"
              >
                <div className="grid grid-cols-1 xl:grid-cols-2">
                  {/* CONTENT AREA */}
                  <div className="p-10 md:p-14 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-mono text-neutral-600">
                          {project.id}
                        </span>
                        <div className="w-8 h-[1px] bg-neutral-800" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-4xl font-bold tracking-tighter text-white mb-4 uppercase group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-neutral-400 text-base leading-relaxed mb-8 font-light">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold text-neutral-500 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-white text-neutral-500 transition-colors group/link"
                      >
                        <Github size={14} /> Repository
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-white text-neutral-500 transition-colors group/link"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    </div>
                  </div>

                  {/* IMAGE AREA - The Mockup */}
                  <div className="relative h-[300px] xl:h-auto overflow-hidden bg-neutral-900 border-l border-white/5">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700`}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Floating Window Decoration */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10">
                        <Monitor size={16} className="text-white/50" />
                      </div>
                    </div>
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
