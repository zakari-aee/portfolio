'use client';

import { useState, useEffect, useRef } from 'react';
import { Home, User, GraduationCap, Code, Folder, Mail, ChevronsUp, Menu, X } from 'lucide-react';

const DockNavbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, width: 0 });
  const [isDockVisible, setIsDockVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dockRef = useRef(null);
  const triggerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'education', label: 'Education', icon: GraduationCap, href: '#education' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: Folder, href: '#projects' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
    { id: 'top', label: 'Go to Top', icon: ChevronsUp, href: '#home' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolling = scrollY > 50;
      setIsScrolled(isScrolling);

      if (isScrolling) {
        setIsDockVisible(true);
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          if (!dockRef.current?.matches(':hover') && !triggerRef.current?.matches(':hover')) {
            setIsDockVisible(false);
          }
        }, 1000);
      }

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      let currentSection = 'home';
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) currentSection = section;
        }
      }
      setActiveItem(currentSection);
      // Update URL hash without scrolling
      window.history.replaceState(null, '', `#${currentSection}`);
    };

    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!dockRef.current) return;
    const dockRect = dockRef.current.getBoundingClientRect();
    const x = e.clientX - dockRect.left;
    const width = dockRect.width;
    setMousePosition({ x, width });
  };

  const scrollToSection = (href, itemId) => {
    setActiveItem(itemId);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', href);
    }
  };

  const calculateItemScale = (index, totalItems) => {
    if (!mousePosition.width || !isDockVisible) return 1;
    const itemWidth = mousePosition.width / totalItems;
    const itemCenter = (index * itemWidth) + (itemWidth / 2);
    const distance = Math.abs(mousePosition.x - itemCenter);
    const maxDistance = mousePosition.width / 2;
    const scale = 1 + (0.3 * (1 - Math.min(distance / maxDistance, 1)));
    return Math.max(1, scale);
  };

  const handleDockInteraction = () => {
    setIsDockVisible(true);
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      if (!dockRef.current?.matches(':hover') && !triggerRef.current?.matches(':hover')) {
        setIsDockVisible(false);
      }
    }, 1000);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const DockItem = ({ item, index, isActive, scale }) => {
    const Icon = item.icon;
    return (
      <button
        onClick={() => scrollToSection(item.href, item.id)}
        style={{ transform: `scale(${scale})` }}
        className={`relative group flex flex-col items-center p-3 rounded-xl transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.6)]' 
            : 'text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-600/30 hover:to-blue-600/30 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]'
        }`}
      >
        {isActive && (
          <>
            <div className="absolute inset-0 rounded-xl animate-pulse bg-purple-600/20" />
            <div className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-purple-400" />
          </>
        )}

        <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
          <Icon size={20} className="relative z-10" />
        </div>

        <div className={`absolute -top-12 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none backdrop-blur-lg bg-black/60 text-purple-300 shadow-lg`}>
          {item.label}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-black/60" />
        </div>

        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </button>
    );
  };

  const MobileMenuItem = ({ item, isActive }) => {
    const Icon = item.icon;
    return (
      <button
        onClick={() => scrollToSection(item.href, item.id)}
        className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]' 
            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
        }`}
      >
        <Icon size={20} className="flex-shrink-0" />
        <span className="font-medium">{item.label}</span>
      </button>
    );
  };

  return (
    <>
      {/* Hidden Trigger */}
      <div
        ref={triggerRef}
        className="fixed bottom-0 left-0 right-0 h-12 z-40 cursor-pointer hidden lg:block"
        onMouseEnter={handleDockInteraction}
        onMouseLeave={(e) => {
          if (!dockRef.current?.contains(e.relatedTarget)) setIsDockVisible(false);
        }}
      />

      {/* Animated Background Blob */}
      <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 hidden lg:block ${
        isDockVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="w-80 h-20 bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-2xl rounded-full" />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed bottom-6 right-6 z-50 lg:hidden p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 backdrop-blur-2xl border border-purple-500/30 transition-all duration-300 hover:scale-110"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-x-4 bottom-20 z-50 lg:hidden transition-all duration-300 transform ${
          isMobileMenuOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-black/60 backdrop-blur-2xl rounded-2xl border border-gray-800 shadow-2xl shadow-black/30 p-4">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <MobileMenuItem key={item.id} item={item} isActive={activeItem === item.id} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Dock */}
      <div
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleDockInteraction}
        onMouseLeave={(e) => {
          if (!triggerRef.current?.contains(e.relatedTarget)) setIsDockVisible(false);
        }}
        className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out hidden lg:flex ${
          isDockVisible ? 'bottom-6 opacity-100 scale-100' : 'bottom-0 opacity-0 scale-95 -translate-y-4'
        }`}
      >
        <div className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-3xl border border-white/10 backdrop-blur-2xl bg-black/40 transition-all duration-500 shadow-[0_0_25px_rgba(124,58,237,0.25)]`}>
          {navItems.map((item, index) => {
            const isActive = activeItem === item.id;
            const scale = calculateItemScale(index, navItems.length);
            return <DockItem key={item.id} item={item} index={index} isActive={isActive} scale={scale} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DockNavbar;
