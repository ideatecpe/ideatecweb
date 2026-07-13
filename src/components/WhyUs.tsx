import React, { useRef, useEffect } from 'react';
import { MapPin, Calendar, Hash } from 'lucide-react';
import { Reveal } from './Reveal';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { motion, useMotionValue, useTransform } from 'motion/react';

import FlowingMenu, { MenuItemProp } from './FlowingMenu';

const demoItems: MenuItemProp[] = [
  { link: '#', text: 'IDEATEC SAC', image: '/assets/datos/ideatecsac.webp', label: 'Razón Social', icon: 'Hash' },
  { link: '#', text: '20601841038', image: '/assets/datos/ruc.webp', label: 'RUC', icon: 'Hash' },
  { link: '#', text: '12 de mayo, 2016', image: '/assets/datos/fecha.webp', label: 'Constitución', icon: 'Calendar' },
  { link: '#', text: 'Perú', image: '/assets/datos/peru.webp', label: 'País', icon: 'MapPin' }
];

const MissionVision3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Start position (element top reaches bottom of viewport)
      const start = rect.top - viewHeight;
      // End position (element bottom reaches top of viewport)
      const totalDist = rect.height + viewHeight;
      
      const current = -start;
      const pct = Math.max(0, Math.min(1, current / totalDist));
      
      scrollYProgress.set(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Defer initial calculation to avoid forced reflows on mount
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const mY = useTransform(scrollYProgress, [0.35, 0.52], [0, -40]);
  const mRotateX = useTransform(scrollYProgress, [0.35, 0.52], [0, -45]);
  const mOpacity = useTransform(scrollYProgress, [0.35, 0.52], [1, 0]);
  const mScale = useTransform(scrollYProgress, [0.35, 0.52], [1, 0.9]);
  const mPointerEvents = useTransform(mOpacity, (o) => o > 0.1 ? 'auto' : 'none');

  const vY = useTransform(scrollYProgress, [0.42, 0.58], [40, 0]);
  const vRotateX = useTransform(scrollYProgress, [0.42, 0.58], [45, 0]);
  const vOpacity = useTransform(scrollYProgress, [0.42, 0.58], [0, 1]);
  const vScale = useTransform(scrollYProgress, [0.42, 0.58], [0.9, 1]);
  const vPointerEvents = useTransform(vOpacity, (o) => o > 0.1 ? 'auto' : 'none');

  return (
    <div ref={containerRef} className="relative w-full min-h-[130vh] flex flex-col items-center justify-start py-10">
      <div className="sticky top-[20vh] w-full max-w-3xl h-[340px] md:h-[360px] flex items-center justify-center" style={{ perspective: 1200 }}>
        
        {/* Card 1: Misión */}
        <motion.div 
          style={{
            y: mY,
            rotateX: mRotateX,
            opacity: mOpacity,
            scale: mScale,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            pointerEvents: mPointerEvents,
            zIndex: 10,
            backgroundImage: "linear-gradient(to bottom, rgba(234, 88, 12, 0.45), rgba(10, 12, 18, 0.95)), url(/assets/cards/vision.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="absolute w-full h-full rounded-[32px] p-8 md:p-12 border border-orange-500/30 shadow-2xl hover:shadow-[0_0_40px_rgba(234,88,12,0.25)] transition-shadow duration-300 flex flex-col justify-between overflow-hidden will-change-[opacity,transform]"
        >
          <div>
            <span className="inline-block text-xl md:text-3xl font-black text-orange-200 uppercase tracking-[0.2em] mb-2">
              Misión
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
              ¿Para qué existimos?
            </h3>
            <p className="text-orange-100 leading-relaxed text-sm md:text-base max-w-2xl">
              Brindar soluciones tecnológicas integrales de desarrollo web y mobile a medida, con calidad y servicio continuo, según las necesidades reales de cada cliente.
            </p>
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-orange-200 font-bold uppercase tracking-wider">
            <span>IDEATEC · Misión</span>
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          </div>
        </motion.div>

        {/* Card 2: Visión */}
        <motion.div 
          style={{
            y: vY,
            rotateX: vRotateX,
            opacity: vOpacity,
            scale: vScale,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            pointerEvents: vPointerEvents,
            zIndex: 5,
            backgroundImage: "linear-gradient(to bottom, rgba(234, 88, 12, 0.45), rgba(10, 12, 18, 0.95)), url(/assets/cards/mision.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="absolute w-full h-full rounded-[32px] p-8 md:p-12 border border-orange-500/30 shadow-2xl hover:shadow-[0_0_40px_rgba(234,88,12,0.25)] transition-shadow duration-300 flex flex-col justify-between overflow-hidden will-change-[opacity,transform]"
        >
          <div>
            <span className="inline-block text-xl md:text-3xl font-black text-orange-200 uppercase tracking-[0.2em] mb-2">
              Visión
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
              ¿A dónde vamos?
            </h3>
            <p className="text-orange-100 leading-relaxed text-sm md:text-base max-w-2xl">
              Ser el socio tecnológico de referencia en Perú, reconocidos por transformar ideas digitales en productos que generan valor real y sostenible para las empresas.
            </p>
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-orange-200 font-bold uppercase tracking-wider">
            <span>IDEATEC · Visión</span>
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export const WhyUs = () => (
  <>
    {/* ── ¿Por qué elegirnos? ── */}
    <section
      id="nosotros"
      className="relative border-b border-gray-100 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url(./assets/backgrounds/fondo02.webp)" }}
    >
      {/* Capas para legibilidad */}
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="absolute inset-0 bg-white/85" />
      
      <div className="relative max-w-5xl mx-auto px-6 pt-16">
        {/* Cards - Centered & Full Width underneath */}
        <div className="w-full">
          <ScrollStack>
            {/* Tarjeta de Introducción */}
            <ScrollStackItem 
              className="!text-white relative overflow-visible mt-16 !border-orange-500/30 !shadow-[0_0_50px_rgba(234,88,12,0.2)] hover:!shadow-[0_0_60px_rgba(234,88,12,0.35)] hover:!border-orange-500/50 transition-all duration-300"
              style={{ 
                backgroundImage: "linear-gradient(to bottom, rgba(234, 88, 12, 0.35), rgba(10, 12, 18, 0.95)), url(/assets/flowcard/porqueideatec.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              {/* Logo superpuesto */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-md" />
                <div className="relative w-24 h-24 rounded-full bg-[#0a0c12] border-4 border-orange-500/50 flex items-center justify-center shadow-2xl overflow-hidden">
                  <img
                    src="/assets/brand/mascota.webp"
                    alt="Mascota IDEATEC"
                    width="96"
                    height="96"
                    className="w-full h-full object-contain p-2 rounded-full"
                  />
                </div>
              </div>

              {/* Contenido de la Card */}
              <div className="flex flex-col items-center text-center pt-10 pb-6">
                <div className="flex items-center justify-center gap-3 w-full mb-4">
                  <div className="h-[1px] w-8 md:w-16 bg-white/40" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white font-bold">VENTAJAS</span>
                  <div className="h-[1px] w-8 md:w-16 bg-white/40" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-white tracking-tight leading-tight drop-shadow-sm">
                  ¿Por qué elegir a IDEATEC?
                </h2>
                <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                  No somos solo programadores, somos tus socios tecnológicos. Entendemos tu negocio y construimos herramientas que generan valor real.
                </p>
              </div>
            </ScrollStackItem>

            {/* Card 2: Entregas Rápidas */}
            <ScrollStackItem 
              className="!text-white !border-orange-500/30 !shadow-2xl hover:!shadow-[0_0_40px_rgba(234,88,12,0.25)] transition-all duration-300"
              style={{ 
                backgroundImage: "linear-gradient(to bottom, rgba(234, 88, 12, 0.45), rgba(10, 12, 18, 0.95)), url(/assets/flowcard/rapido.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col justify-between h-full min-h-[300px] p-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-orange-200 font-bold">Tarjeta 01</span>
                  <h2 className="text-3xl md:text-5xl font-black mt-2 leading-tight text-white">Entregas Rápidas</h2>
                </div>
                <p className="text-orange-100 text-base md:text-lg max-w-md">
                  Metodologías ágiles para lanzar tu producto en tiempo récord sin sacrificar calidad.
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-orange-200 font-bold uppercase tracking-wider">
                  <span>Scrum · Entregas en 4-6 semanas</span>
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                </div>
              </div>
            </ScrollStackItem>

            {/* Card 3: Stack Moderno */}
            <ScrollStackItem 
              className="!text-white !border-orange-500/30 !shadow-2xl hover:!shadow-[0_0_40px_rgba(234,88,12,0.25)] transition-all duration-300"
              style={{ 
                backgroundImage: "linear-gradient(to bottom, rgba(234, 88, 12, 0.45), rgba(10, 12, 18, 0.95)), url(/assets/flowcard/stack.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col justify-between h-full min-h-[300px] p-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-orange-200 font-bold">Tarjeta 02</span>
                  <h2 className="text-3xl md:text-5xl font-black mt-2 leading-tight text-white">Stack Moderno</h2>
                </div>
                <p className="text-orange-100 text-base md:text-lg max-w-md">
                  Utilizamos las tecnologías más vanguardistas para asegurar escalabilidad y futuro.
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-orange-200 font-bold uppercase tracking-wider">
                  <span>React · Tailwind · TypeScript · Vite</span>
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                </div>
              </div>
            </ScrollStackItem>

            {/* Card 4: Equipo Dedicado */}
            <ScrollStackItem 
              className="!text-white !border-orange-500/30 !shadow-2xl hover:!shadow-[0_0_40px_rgba(234,88,12,0.25)] transition-all duration-300"
              style={{ 
                backgroundImage: "linear-gradient(to bottom, rgba(234, 88, 12, 0.45), rgba(10, 12, 18, 0.95)), url(/assets/flowcard/equipo.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col justify-between h-full min-h-[300px] p-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-orange-200 font-bold">Tarjeta 03</span>
                  <h2 className="text-3xl md:text-5xl font-black mt-2 leading-tight text-white">Equipo Dedicado</h2>
                </div>
                <p className="text-orange-100 text-base md:text-lg max-w-md">
                  Un equipo de expertos comprometidos al 100% con el éxito de tu proyecto.
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-orange-200 font-bold uppercase tracking-wider">
                  <span>PM · UX/UI Designers · Senior Devs</span>
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                </div>
              </div>
            </ScrollStackItem>

            {/* Card 5: Soporte Continuo */}
            <ScrollStackItem 
              className="!text-white !border-orange-500/30 !shadow-2xl hover:!shadow-[0_0_40px_rgba(234,88,12,0.25)] transition-all duration-300"
              style={{ 
                backgroundImage: "linear-gradient(to bottom, rgba(234, 88, 12, 0.45), rgba(10, 12, 18, 0.95)), url(/assets/flowcard/soporte.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col justify-between h-full min-h-[300px] p-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-orange-200 font-bold">Tarjeta 04</span>
                  <h2 className="text-3xl md:text-5xl font-black mt-2 leading-tight text-white">Soporte Continuo</h2>
                </div>
                <p className="text-orange-100 text-base md:text-lg max-w-md">
                  Acompañamiento post-lanzamiento para que nunca dejes de crecer.
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-orange-200 font-bold uppercase tracking-wider">
                  <span>SLA 99.9% · Soporte Continuo 24/7</span>
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </section>

    {/* ── ¿Quiénes somos? ── */}
    <section className="bg-gray-50 border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal direction="up" className="mb-12 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 border-l-4 border-orange-500 pl-3 mb-4">
            Nuestra empresa
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            ¿Quiénes <span className="text-orange-600">somos?</span>
          </h2>
        </Reveal>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-14">

          {/* Description */}
          <Reveal direction="right" className="lg:w-3/5 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Somos <span className="text-gray-900 font-semibold">IDEATEC SAC</span>, una empresa de capitales 100% peruanos con más de 8 años en el mercado,
              especializada en el desarrollo de soluciones digitales a medida: plataformas web, aplicaciones móviles y
              sistemas de gestión que potencian las operaciones de nuestros clientes.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Desde el diseño hasta el lanzamiento y soporte continuo, somos tu equipo técnico de confianza. Contamos con
              una central de atención disponible todo el año para acompañar a nuestros clientes en cada etapa de su
              crecimiento digital.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Creemos en la tecnología como motor de transformación empresarial. Por eso, cada proyecto lo abordamos con un
              enfoque estratégico, combinando innovación, buenas prácticas de desarrollo y un profundo entendimiento de las
              necesidades de cada cliente.
            </p>
          </Reveal>

          {/* Legal card */}
          <Reveal
            direction="left"
            delay={0.1}
            className="relative lg:w-2/5 w-full rounded-2xl border border-gray-800 overflow-hidden shadow-lg flex flex-col h-[260px] bg-[#120F17]"
          >
            <div className="px-5 pt-4 pb-2 border-b border-gray-800 bg-[#0d0a12]/30 flex items-center justify-between">
              <h3 className="text-[12px] font-bold text-gray-300 uppercase">
                Datos de la empresa
              </h3>
            </div>
            <div className="flex-grow">
              <FlowingMenu 
                items={demoItems}
                speed={15}
                textColor="#ffffff"
                bgColor="transparent"
                marqueeBgColor="#ffffff"
                marqueeTextColor="#120F17"
                borderColor="rgba(255,255,255,0.06)"
              />
            </div>
          </Reveal>
        </div>

        {/* Misión / Visión */}
        <MissionVision3D />
      </div>
    </section>
  </>
);
