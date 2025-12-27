"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const About = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-24 bg-[#050505] text-white border-t border-white/5 relative"
    >
      {/* SOFT BACKGROUND — SAFE */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* TITLE — CENTER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-blue-500" />
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-blue-500">
                Profile // 01
              </span>
              <div className="w-8 h-[1px] bg-blue-500" />
            </div>

            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter uppercase leading-none mb-6">
              About
              <br />
              Me.
            </h2>

            <p className="text-neutral-500 text-sm leading-relaxed max-w-md font-light mx-auto">
              Full-stack engineer focused on scalable architecture and clean
              system design.
            </p>
          </motion.div>

          {/* BOTTOM — ONE LINE (IMAGE | TEXT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* IMAGE */}
            <motion.div
              className="lg:col-span-5 w-full min-w-0"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/10 w-full">
                <img
                  src="/me.png"
                  alt="Profile"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </motion.div>

            {/* TEXT */}
            <motion.div
              className="lg:col-span-7 w-full min-w-0"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h3 className="text-3xl font-light mb-6 leading-relaxed">
                I build <span className="font-bold">robust & scalable</span>{" "}
                applications that solve real-world problems.
              </h3>

              <p className="text-neutral-400 text-base leading-relaxed mb-6 font-light">
                With 5+ years of full-stack development experience, I design and
                build complete systems across frontend, backend, and database
                layers. My focus is performance, maintainability, and
                scalability.
              </p>

              <p className="text-neutral-500 text-sm leading-relaxed font-light mb-10">
                I work mainly with modern JavaScript ecosystems, Laravel
                backends, and relational databases. Based in Meknes, Morocco, I
                enjoy system architecture, clean code, and building products
                that matter.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                  whileHover={{ x: 6 }}
                >
                  View Selected Projects
                  <ArrowRight size={16} />
                </motion.a>

                <motion.a
                  href="https://leetcode.com/zakari_aee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white hover:text-yellow-500 transition-colors group"
                  whileHover={{ x: 3 }}
                >
                  <SiLeetcode size={18} /> LeetCode{" "}
                  <ExternalLink
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;