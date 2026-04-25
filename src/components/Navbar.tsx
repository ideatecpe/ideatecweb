import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(() => typeof window !== 'undefined' ? window.scrollY > 50 : false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['servicios', 'nosotros', 'portafolio', 'como-lo-hacemos', 'contacto'];
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
    { name: 'Servicios', href: '/servicios', id: 'servicios' },
    { name: 'Nosotros', href: '/nosotros', id: 'nosotros' },
    { name: 'Portafolio', href: '/portafolio', id: 'portafolio' },
    { name: '¿Cómo lo hacemos?', href: '/como-lo-hacemos', id: 'como-lo-hacemos' },
    { name: 'Contacto', href: '/contacto', id: 'contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    window.history.pushState(null, '', link.href);
    const element = document.getElementById(link.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-bg-primary/80 backdrop-blur-lg border-bg-secondary py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, '', '/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group"
        >
          <img src="./assets/logo.png" alt="IDEATEC Logo" className="w-12 h-12 " />
          
          <span className="text-2xl tracking-tight leading-none -ml-6">
            <span
              className="font-black text-accent"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
            >
              DEA
            </span>
            <span
              className="font-black text-text-primary"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
            >
              TEC
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-accent font-bold'
                  : 'text-text-primary/70 hover:text-accent'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+51912903330"
            className="flex items-center gap-2 bg-accent text-bg-primary font-bold px-6 py-2.5 rounded-full hover:glow-orange transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            <Phone className="w-4 h-4" />
            912 903 330
          </a>
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-secondary border-b border-bg-secondary overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.id ? 'text-accent' : 'text-text-primary'
                  }`}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+51912903330"
                className="flex items-center justify-center gap-2 bg-accent text-bg-primary font-bold px-6 py-3 rounded-xl mt-2"
              >
                <Phone className="w-4 h-4" />
                912 903 330
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
