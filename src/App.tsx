import React, { useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

// Carga diferida (code-splitting) de las secciones bajo el pliegue:
// solo se descargan cuando el usuario se acerca a ellas al hacer scroll.
const WhyUs     = lazy(() => import('./components/WhyUs').then(m => ({ default: m.WhyUs })));
const Portfolio = lazy(() => import('./components/Portfolio').then(m => ({ default: m.Portfolio })));
const Pricing   = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const Contact   = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer    = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const WhatsAppFloat = lazy(() => import('./components/WhatsAppFloat').then(m => ({ default: m.WhatsAppFloat })));

// Reserva de espacio mientras carga el chunk (evita saltos de layout).
const SectionFallback = () => <div className="min-h-[40vh]" aria-hidden />;

export default function App() {
  useEffect(() => {
    const path = window.location.pathname.substring(1);
    const validSections = ['servicios', 'nosotros', 'portafolio', 'como-lo-hacemos', 'contacto'];
    if (validSections.includes(path)) {
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }, 0);
    }
  }, []);

  return (
    <div className="min-h-screen">
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
