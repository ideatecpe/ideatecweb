import React, { useEffect, useState, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Cargas diferidas (code-splitting)
const Services     = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const SplashCursor = lazy(() => import('./components/SplashCursor'));
const WhyUs     = lazy(() => import('./components/WhyUs').then(m => ({ default: m.WhyUs })));
const Portfolio = lazy(() => import('./components/Portfolio').then(m => ({ default: m.Portfolio })));
const Pricing   = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const Contact   = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer    = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const WhatsAppFloat = lazy(() => import('./components/WhatsAppFloat').then(m => ({ default: m.WhatsAppFloat })));
const Pruebas   = lazy(() => import('./components/Pruebas'));

// Reserva de espacio mientras carga el chunk
const SectionFallback = () => <div className="min-h-[40vh]" aria-hidden />;

export default function App() {
  const isPruebas = window.location.pathname === '/pruebas';
  const [isMobile, setIsMobile] = useState(true); // Default to true to avoid initial layout shifts or flash on mobile

  useEffect(() => {
    // Detect mobile / touch devices
    setIsMobile(
      window.innerWidth < 768 ||
      navigator.maxTouchPoints > 0 ||
      /Mobi|Android|iPhone/i.test(navigator.userAgent)
    );
  }, []);

  useEffect(() => {
    let lenisInstance: Lenis | null = null;
    let rafId: number | null = null;

    const timer = setTimeout(() => {
      // Inicializar Lenis para scroll suave global después de que el layout inicial se asiente
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);

      // Navegar suavemente a la sección correspondiente si la URL contiene una ruta válida
      if (!isPruebas) {
        const path = window.location.pathname.substring(1);
        const validSections = ['servicios', 'nosotros', 'portafolio', 'como-lo-hacemos', 'contacto'];
        if (validSections.includes(path)) {
          setTimeout(() => {
            const element = document.getElementById(path);
            if (element && lenisInstance) {
              lenisInstance.scrollTo(element, { immediate: true });
            }
          }, 100);
        }
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isPruebas]);

  // Reducir opacidad del SplashCursor al pasar el Hero (~100vh)
  useEffect(() => {
    if (isPruebas || isMobile) return;

    const handleScroll = () => {
      const el = document.getElementById('splash-cursor');
      if (!el) return;
      const fadeStart = window.innerHeight * 0.5; // Start fading halfway through hero
      const scrollY = window.scrollY;
      if (scrollY <= fadeStart) {
        el.style.opacity = '1';
      } else {
        const fade = Math.max(0.15, 1 - (scrollY - fadeStart) / 300);
        el.style.opacity = String(fade);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPruebas, isMobile]);

  if (isPruebas) {
    return (
      <Suspense fallback={<SectionFallback />}>
        <Pruebas />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen">
      {!isMobile && (
        <Suspense fallback={null}>
          <SplashCursor
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.2}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
            SHADING={true}
            RAINBOW_MODE={false}
            COLOR="#f97316"
          />
        </Suspense>
      )}
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <WhyUs />
          <Portfolio />
          <Pricing />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppFloat />
      </Suspense>
    </div>
  );
}
