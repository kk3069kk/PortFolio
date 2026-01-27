'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'footer'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            setIsOpen(false);
        }
    };

    const navItems = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Experience', id: 'experience' },
        { label: 'Resume', id: 'resume' },
        { label: 'Contact', id: 'footer' },
    ];

    if (!mounted) return null;

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('hero')}
                            className="flex items-center gap-2 group"
                        >
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-sm">KK</span>
                            </div>
                            <span className="hidden sm:inline font-semibold text-foreground group-hover:text-primary transition-colors">
                                Kislay Kumar
                            </span>
                        </motion.button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    whileHover={{ y: -2 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm font-medium transition-colors relative group ${activeSection === item.id ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                                        }`}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.span
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                                        />
                                    )}
                                    {activeSection !== item.id && (
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                                    )}
                                </motion.button>
                            ))}

                            {/* Theme Toggle */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            >
                                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </motion.button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center gap-4">
                            {/* Mobile Theme Toggle */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            >
                                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex flex-col gap-1.5 relative w-6 h-6"
                            >
                                <motion.span
                                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                    className="w-full h-0.5 bg-foreground rounded transition-colors"
                                />
                                <motion.span
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="w-full h-0.5 bg-foreground rounded transition-colors"
                                />
                                <motion.span
                                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    className="w-full h-0.5 bg-foreground rounded transition-colors"
                                />
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <motion.div
                        initial={false}
                        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col gap-2 py-4 border-t border-border">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    whileHover={{ x: 4 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm font-medium transition-colors text-left py-2 px-2 ${activeSection === item.id ? 'text-primary bg-primary/10 rounded-lg' : 'text-foreground/70 hover:text-primary'
                                        }`}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Spacer */}
            <div className="h-16" />
        </>
    );
}
