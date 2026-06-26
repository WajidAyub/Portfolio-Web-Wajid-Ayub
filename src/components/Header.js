import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navItems = [
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' }
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <nav className="container-custom">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-2xl font-display font-bold text-white tracking-tighter flex items-center gap-2"
                    >
                        <span className="w-2 h-2 bg-accent-yellow rounded-full" />
                        Wajid
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                className="text-white/60 hover:text-white transition-colors duration-300 font-sans text-sm font-medium"
                            >
                                {item.name}
                            </button>
                        ))}

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-outline !py-2 !px-6 !text-sm"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2"
                        >
                            <div className="w-6 h-0.5 bg-white mb-1.5" />
                            <div className="w-4 h-0.5 bg-white mb-1.5" />
                            <div className="w-6 h-0.5 bg-white" />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-black border-t border-white/10 mt-4"
                        >
                            <div className="py-6 flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-left px-4 py-2 text-white/60 hover:text-white font-sans text-lg"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                                <div className="px-4 pt-4">
                                  <button
                                      onClick={() => scrollToSection('contact')}
                                      className="btn-outline w-full text-center"
                                  >
                                      Contact
                                  </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Header;
