import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import FlowingMenu from './FlowingMenu';
import SplashCursor from './SplashCursor';

const demoItems = [
  { link: '#', text: 'IDEATEC SAC', image: '/assets/datos/ideatecsac.webp' },
  { link: '#', text: 'RUC 20601841038', image: '/assets/datos/ruc.webp' },
  { link: '#', text: 'Desde el 2016', image: '/assets/datos/fecha.webp' },
  { link: '#', text: 'Hecho en Perú', image: '/assets/datos/peru.webp' }
];

export default function Pruebas() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-orange-500 selection:text-white pb-32">
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
      {/* Top Banner / Navigation */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-white">I</div>
          <span className="font-bold text-lg tracking-tight">IDEATEC Tests</span>
        </div>
        <a 
          href="/" 
          className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
        >
          Volver a la Página Principal
        </a>
      </header>

      {/* ScrollStack Component Test Container */}
      <div className="max-w-4xl mx-auto px-6 pt-24">
        <ScrollStack>
          {/* Card 1: ¿Por qué elegir a IDEATEC? */}
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

      {/* Flowing Menu Test Area */}
      <div className="mt-32 border-t border-gray-800/50 pt-12">
        <h3 className="text-center text-gray-400 text-sm mb-8 font-semibold tracking-wide uppercase">
          Fin de la prueba del ScrollStack · IDEATEC
        </h3>
        <div style={{ height: '600px', position: 'relative' }} className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
          <FlowingMenu 
            items={demoItems}
            speed={15}
            textColor="#ffffff"
            bgColor="#120F17"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#120F17"
            borderColor="#ffffff"
          />
        </div>
      </div>
    </div>
  );
}
