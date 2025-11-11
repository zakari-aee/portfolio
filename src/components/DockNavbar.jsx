import { useState, useEffect, useRef } from 'react';
import {
    Home,
    User,
    Code,
    Folder,
    Mail,
    ChevronsUp
} from 'lucide-react';

const DockNavbar = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, width: 0 });
    const [isDockVisible, setIsDockVisible] = useState(false);
    const [showScrollHint, setShowScrollHint] = useState(true);
    const dockRef = useRef(null);
    const triggerRef = useRef(null);
    const scrollTimeoutRef = useRef(null);

    const navItems = [
        { id: 'home', label: 'Home', icon: Home, href: '#home' },
        { id: 'about', label: 'About', icon: User, href: '#about' },
        { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
        { id: 'projects', label: 'Projects', icon: Folder, href: '#projects' },
        { id: 'contact', label: 'Go to the top', icon: ChevronsUp, href: '#home' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const isScrolling = scrollY > 50;
            setIsScrolled(isScrolling);

            // Show dock when user scrolls
            if (isScrolling) {
                setIsDockVisible(true);
                setShowScrollHint(false);

                // Auto-hide after 3 seconds of no scrolling
                clearTimeout(scrollTimeoutRef.current);
                scrollTimeoutRef.current = setTimeout(() => {
                    if (!dockRef.current?.matches(':hover') && !triggerRef.current?.matches(':hover')) {
                        setIsDockVisible(false);
                    }
                }, 1000);
            }

            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) setActiveItem(current);
        };

        // Hide scroll hint after 5 seconds
        const hintTimeout = setTimeout(() => {
            setShowScrollHint(false);
        }, 5000);

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(hintTimeout);
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
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
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
        setShowScrollHint(false);

        // Reset auto-hide timer
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
            if (!dockRef.current?.matches(':hover') && !triggerRef.current?.matches(':hover')) {
                setIsDockVisible(false);
            }
        }, 1000);
    };

    return (
        <>
            {/* Hidden Trigger Area - Bottom 50px of screen */}
            <div
                ref={triggerRef}
                className="fixed bottom-0 left-0 right-0 h-12 z-40 cursor-pointer"
                onMouseEnter={handleDockInteraction}
                onMouseLeave={(e) => {
                    if (!dockRef.current?.contains(e.relatedTarget)) {
                        setIsDockVisible(false);
                    }
                }}
            />



            {/* Animated Background Blob */}
            <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${isDockVisible
                ? 'opacity-40 scale-100'
                : 'opacity-0 scale-95'
                } ${isScrolled ? 'opacity-20' : 'opacity-40'}`}>
                <div className="w-64 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl rounded-full" />
            </div>

            {/* Main Dock */}
            <div
                ref={dockRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleDockInteraction}
                onMouseLeave={(e) => {
                    if (!triggerRef.current?.contains(e.relatedTarget)) {
                        setIsDockVisible(false);
                    }
                }}
                className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${isDockVisible
                    ? 'bottom-6 opacity-100 scale-100'
                    : 'bottom-0 opacity-0 scale-95 -translate-y-4'
                    }`}
            >
                <div className={`flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl border backdrop-blur-2xl transition-all duration-500 ${isScrolled
                    ? 'bg-white/95 border-gray-200/60 shadow-2xl shadow-black/10'
                    : 'bg-black/50 border-white/25 shadow-2xl shadow-black/30'
                    }`}>

                    {/* Navigation Items with Magnetic Effect */}
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.id;
                        const scale = calculateItemScale(index, navItems.length);

                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.href, item.id)}
                                style={{ transform: `scale(${scale})` }}
                                className={`relative group flex flex-col items-center p-3 rounded-xl transition-all duration-300 ${isActive
                                    ? isScrolled
                                        ? 'bg-blue-50 text-blue-600 shadow-md shadow-blue-500/20'
                                        : 'bg-white/25 text-white shadow-md shadow-white/20'
                                    : isScrolled
                                        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                                        : 'text-white/80 hover:text-white hover:bg-white/15'
                                    }`}
                            >
                                {/* Active Pulse Effect */}
                                {isActive && (
                                    <>
                                        <div className={`absolute inset-0 rounded-xl animate-pulse ${isScrolled ? 'bg-blue-100' : 'bg-white/20'
                                            }`} />
                                        <div className={`absolute -top-1 w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-blue-600' : 'bg-white'
                                            }`} />
                                    </>
                                )}

                                {/* Icon with Bounce Animation */}
                                <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'
                                    }`}>
                                    <Icon size={22} className="relative z-10" />
                                </div>

                                {/* Enhanced Tooltip */}
                                <div className={`absolute -top-12 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none backdrop-blur-lg ${isScrolled
                                    ? 'bg-gray-900/95 text-white shadow-lg'
                                    : 'bg-white/95 text-gray-900 shadow-lg'
                                    }`}>
                                    {item.label}
                                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${isScrolled ? 'bg-gray-900/95' : 'bg-white/95'
                                        }`} />
                                </div>

                                {/* Hover Background Effect */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default DockNavbar;