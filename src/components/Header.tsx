
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Educación', href: '#education' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Tecnologías', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-500 ease-in-out border-b',
        scrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-slate-200/50 dark:border-slate-800/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)]' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#home" 
            className="text-2xl font-bold font-montserrat text-slate-900 dark:text-white flex items-center group hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-blue-500 mr-1 font-mono">&lt;</span>
            <span className="font-medium tracking-tight">VF</span>
            <span className="text-blue-500 ml-1 font-mono">/&gt;</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <motion.ul 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/50"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-white dark:hover:bg-slate-800"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col space-y-2 mt-4 pb-4 px-2">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <a
                      href={link.href}
                      className="block px-4 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
