'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, GraduationCap, Code, Folder, Mail, ArrowUp, Menu, X } from 'lucide-react';

const DockNavbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'education', label: 'Education', icon: GraduationCap, href: '#education' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: Folder, href: '#projects' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsDockVisible(window.scrollY > 20);
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      let currentSection = 'home';
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) currentSection = section;
        }
      }
      setActiveItem(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href, itemId) => {
    setActiveItem(itemId);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-6 right-6 z-[100] lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 rounded-xl bg-neutral-900/80 border border-white/10 text-white backdrop-blur-md"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>



      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-[90] lg:hidden bg-black/50"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-24 right-6 z-[91] lg:hidden"
          >
            <div className="bg-neutral-900/95 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl w-48">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.href, item.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all w-full justify-start text-sm font-medium ${
                      activeItem === item.id 
                        ? 'bg-white/10 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Dock Navigation */}
      <div className="fixed inset-x-0 bottom-8 z-[100] pointer-events-none justify-center hidden lg:flex">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: isDockVisible ? 0 : 20, 
            opacity: isDockVisible ? 1 : 0.8 
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="pointer-events-auto relative px-4 py-3 rounded-full bg-neutral-900/40 border border-white/10 backdrop-blur-xl flex items-center gap-2 shadow-2xl"
        >
          {navItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href, item.id)}
                className="relative p-3 rounded-full transition-all group"
              >
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-800 text-white text-[10px] font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 uppercase tracking-widest whitespace-nowrap">
                  {item.label}
                </span>

                <item.icon 
                  size={19} 
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                  }`} 
                />

                {isActive && (
                  <motion.div
                    layoutId="dock-active"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {isActive && (
                  <motion.div 
                    layoutId="dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full"
                  />
                )}
              </button>
            );
          })}

          <div className="w-[1px] h-6 bg-white/10 mx-2" />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full text-gray-500 hover:text-white transition-colors group"
          >
             <ArrowUp size={19} />
          </button>
        </motion.nav>
      </div>
    </>
  );
};

export default DockNavbar;