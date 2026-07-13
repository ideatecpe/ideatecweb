import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Servicios',         href: '#servicios',       id: 'servicios' },
  { name: 'Nosotros',          href: '#nosotros',         id: 'nosotros' },
  { name: 'Portafolio',        href: '#portafolio',       id: 'portafolio' },
  { name: '¿Cómo lo hacemos?', href: '#como-lo-hacemos',  id: 'como-lo-hacemos' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // El header mantiene ALTURA CONSTANTE en ambos estados (no cambia de alto al
    // scrollear), por lo que no hay reflujo que reintroduzca el cruce de umbral.
    // Eso elimina por completo el parpadeo, y permite activar con scroll mínimo.
    // rAF para coalescer múltiples eventos de scroll en un solo update por frame.
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setScrolled((prev) => (prev ? y > 4 : y > 8));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const setHeaderVar = () => {
      const h = headerRef.current?.offsetHeight ?? 104;
      document.documentElement.style.setProperty('--header-h', `${h}px`);
    };
    setHeaderVar();
    window.addEventListener('resize', setHeaderVar);
    return () => window.removeEventListener('resize', setHeaderVar);
  }, []);

  useEffect(() => {
    const ids = ['inicio', 'servicios', 'nosotros', 'portafolio', 'como-lo-hacemos', 'contacto'];
    const observed = new Set<string>();
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.35 }
    );
    // Observa las secciones ya presentes y las que aún faltan (las secciones
    // bajo el pliegue se montan de forma diferida vía React.lazy, por lo que
    // no existen en el DOM al montar el navbar).
    const observePending = () => {
      ids.forEach((id) => {
        if (observed.has(id)) return;
        const el = document.getElementById(id);
        if (el) { obs.observe(el); observed.add(id); }
      });
    };
    observePending();
    // MutationObserver: reintenta observar cuando aparecen nuevas secciones.
    const mo = new MutationObserver(observePending);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { obs.disconnect(); mo.disconnect(); };
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerH = headerRef.current?.offsetHeight ?? 104;
      const top = el.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* Main nav */}
      <nav
        className={`relative border-b transition-all duration-300 ${
          scrolled ? 'border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)]' : 'border-white/5'
        }`}
        style={{
          backgroundColor: scrolled ? '#ffffff' : 'transparent',
        }}
      >
        {/* Línea naranja inferior visible al scrollear */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-orange-600 via-orange-400 to-orange-600 opacity-60" />
        )}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[55px]">

            {/* Logo */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5 shrink-0"
            >
              <img src="./assets/brand/logo.webp" alt="IDEATEC" width="36" height="36" className="w-9 h-9" />
              <span
                className="text-[22px] font-black leading-none tracking-tight"
              >
                <span className="text-orange-500">IDEA</span>
                <span className={scrolled ? 'text-gray-900' : 'text-white'}>TEC</span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => go(e, link.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    active === link.id
                      ? scrolled ? 'text-orange-600 bg-orange-50' : 'text-orange-400 bg-white/10'
                      : scrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* WhatsApp con borde animado */}
              <div className="wa-btn-wrap">
                <div className="wa-ray" />
                <a
                  href="https://wa.me/51912903330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-btn-inner flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
              <style>{`
                .wa-btn-wrap {
                  position: relative;
                  border-radius: 8px;
                  padding: 1.5px;
                  overflow: hidden;
                  background: transparent;
                }
                .wa-ray {
                  position: absolute;
                  inset: -60%;
                  background: conic-gradient(from 0deg, transparent 0deg, #00d757 25deg, #22c55e 40deg, transparent 60deg);
                  animation: wa-spin 5s linear infinite;
                  border-radius: 50%;
                }
                .wa-btn-inner {
                  position: relative;
                  z-index: 1;
                  background: rgba(18,20,26,0.85);
                  backdrop-filter: blur(8px);
                  border-radius: 6.5px;
                  display: flex;
                }
                @keyframes wa-spin {
                  from { transform: rotate(0deg); }
                  to   { transform: rotate(360deg); }
                }
              `}</style>
              <a
                href="#contacto"
                onClick={(e) => go(e, 'contacto')}
                className="px-5 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
              >
                Iniciar proyecto
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setOpen(!open)}
              aria-label="Menú"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => go(e, link.id)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="https://wa.me/51912903330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-center text-sm font-medium text-gray-700 border border-gray-200 rounded-lg"
                >
                  WhatsApp
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => go(e, 'contacto')}
                  className="px-4 py-3 text-center text-sm font-semibold text-white bg-orange-600 rounded-lg"
                >
                  Iniciar proyecto
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
