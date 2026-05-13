import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeContext';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(() => typeof window !== 'undefined' ? window.scrollY > 50 : false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['inicio', 'servicios', 'nosotros', 'portafolio', 'como-lo-hacemos', 'contacto'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { name: 'Portafolio', href: '#portafolio', id: 'portafolio' },
    { name: '¿Cómo lo hacemos?', href: '#como-lo-hacemos', id: 'como-lo-hacemos' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'py-4'
          : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`flex justify-between items-center transition-all duration-700 px-8 py-3 rounded-2xl relative overflow-hidden ${
            isScrolled 
              ? 'glass-nav shadow-2xl shadow-black/40' 
              : 'bg-transparent'
          }`}
        >
          {/* Fondo degradado sutil para el estado scrolled */}
          {isScrolled && (
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/10" />
              <div className="absolute -inset-[100%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,rgba(249,115,22,0.1),transparent)]" />
            </div>
          )}
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <img src="./assets/logo.png" alt="IDEATEC Logo" className="w-10 h-10 transition-transform duration-500 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <span className="text-xl tracking-tight leading-none">
              <span className="font-accent text-accent text-2xl tracking-wider">IDEA</span>
              <span className="font-accent text-text-primary text-2xl tracking-wider">TEC</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-2 mr-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full relative group/link ${
                    activeSection === link.id
                      ? 'bg-accent text-bg-primary'
                      : 'text-text-primary/70 hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-white/10 mx-2" />

            <div className="flex items-center gap-3 ml-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-text-primary/70 hover:text-accent hover:bg-white/5 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, 'contacto')}
                className="flex items-center gap-2 bg-text-primary text-bg-primary font-black px-6 py-2.5 rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105"
              >
                Contacto
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass text-text-primary"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              className="p-2 rounded-full glass text-text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 py-4 md:hidden"
          >
            <div className="glass-nav rounded-3xl p-8 flex flex-col gap-6 shadow-2xl border-none">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xl font-black py-2 border-b border-white/5 ${
                    activeSection === link.id ? 'text-accent' : 'text-text-primary'
                  }`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, 'contacto')}
                className="flex items-center justify-center gap-2 bg-accent text-bg-primary font-black px-6 py-4 rounded-2xl mt-4"
              >
                Contacto
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

