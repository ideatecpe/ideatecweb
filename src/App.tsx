import React, { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import SplashCursor from './components/SplashCursor';

// Cargas diferidas (code-splitting)
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

  useEffect(() => {
    // Inicializar Lenis para scroll suave global
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Navegar suavemente a la sección correspondiente si la URL contiene una ruta válida
    if (!isPruebas) {
      const path = window.location.pathname.substring(1);
      const validSections = ['servicios', 'nosotros', 'portafolio', 'como-lo-hacemos', 'contacto'];
      if (validSections.includes(path)) {
        setTimeout(() => {
          const element = document.getElementById(path);
          if (element) {
            lenis.scrollTo(element, { immediate: true });
          }
        }, 100);
      }
    }

    return () => {
      lenis.destroy();
    };
  }, [isPruebas]);

  if (isPruebas) {
    return (
      <Suspense fallback={<SectionFallback />}>
        <Pruebas />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen">
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
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Suspense fallback={<SectionFallback />}>
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
