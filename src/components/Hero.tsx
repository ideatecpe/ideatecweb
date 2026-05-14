import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from "motion/react";
import { ArrowRight, Zap, Code2, Globe, Cpu, Smartphone, Sparkles, Award } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

// ========== COMPONENTES VISUALES MEJORADOS ==========

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static shapes */}
      <div className="absolute top-[10%] left-[10%] w-24 h-24 border border-accent/10 rounded-full opacity-20 scale-150" />
      <div className="absolute bottom-[20%] right-[15%] w-32 h-32 border border-accent/5 rounded-full opacity-10 scale-125" />
    </div>
  );
};

const AnimatedGradientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[5%] left-[5%] w-[45%] h-[45%] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[0%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[150px]" />
    </div>
  );
};

const GridPattern = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div 
        className="absolute inset-0 origin-center opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ff8c00 1px, transparent 1px),
            linear-gradient(to bottom, #ff8c00 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(circle at 50% 50%, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black, transparent 80%)",
          transform: "rotateX(60deg) translateY(10%)",
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-linear-to-t from-accent/5 to-transparent pointer-events-none" />
    </div>
  );
};

// Tarjeta flotante mejorada: más separada de la mascota y con estilo adaptable a light/dark
const FloatingCard = ({ children, className = "" }: any) => {
  return (
    <div
      className={`absolute glass-card p-3 rounded-xl border shadow-lg backdrop-blur-md transition-transform hover:scale-105 ${className}`}
    >
      {children}
    </div>
  );
};

const SplitText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 shrink-0 ${className ?? ""}`}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ========== COMPONENTE PRINCIPAL HERO ==========

export const Hero = () => {
  const [projectOpen, setProjectOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const whatsappNumber = "51912903330";
  const whatsappMessage = encodeURIComponent(
    "Hola IDEATEC, me interesa desarrollar un proyecto con ustedes. ¿Podemos hablar?"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen lg:min-h-screen flex items-center overflow-hidden px-70"
    >
      <AnimatedGradientOrbs />
      <TechBackground />
      <GridPattern />
      
      {/* Órbitas decorativas gigantes estáticas */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute h-screen aspect-square border border-accent/3 rounded-full" />
        <div className="absolute h-[85vh] aspect-square border border-dashed border-accent/2 rounded-full" />
      </div>

      {/* Contenedor principal estático */}
      <div className="relative z-10 w-full">
        <div className="max-w-400 mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* COLUMNA IZQUIERDA - TEXTO */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full text-accent text-xs font-black tracking-wider uppercase mb-8 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estudio de Desarrollo Digital</span>
              </div>

              {/* Título en una sola línea */}
              <h1 className="mb-8 leading-none tracking-tighter">
                <div className="font-black flex flex-wrap items-baseline gap-x-4">
                  <SplitText 
                    text="Código que" 
                    className="text-gray-800 dark:text-white text-[45px] md:text-[65px] lg:text-[85px]" 
                  />
                  <span className="text-accent text-[40px] md:text-[55px] lg:text-[75px]">
                   mueve negocios
                  </span>
                </div>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-12 leading-relaxed">
                En <span className="text-text-primary dark:text-text-primary font-semibold">IDEATEC</span> diseñamos y construimos productos
                digitales de alto impacto. Software a medida que impulsa el crecimiento de tu negocio.
              </p>

              {/* Botones CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <button
                  onClick={() => setProjectOpen(true)}
                  className="group relative w-full sm:w-auto px-10 py-4 rounded-full bg-accent text-white font-black text-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-orange-500/40"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Empezar proyecto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 dark:bg-bg-secondary/80 backdrop-blur-sm border border-white/20 dark:border-white/10 text-text-primary dark:text-white font-bold text-base transition-all duration-200 hover:border-accent/50"
                >
                  <WhatsAppIcon className="text-[#25D366] group-hover:scale-110 transition-transform" />
                  Escríbenos
                </a>
              </div>

              {/* Features mini */}
              <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8 justify-between max-w-md">
                {[
                  { icon: <Globe className="w-5 h-5" />, label: "Web Apps" },
                  { icon: <Smartphone className="w-5 h-5" />, label: "Mobile" },
                  { icon: <Cpu className="w-5 h-5" />, label: "Cloud" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 group cursor-default"
                  >
                    <div className="p-2 rounded-xl bg-white/10 dark:bg-white/5 text-accent group-hover:bg-accent/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold tracking-wide uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMNA DERECHA - MASCOTA ESTÁTICA */}
            <div
              className="hidden lg:flex relative items-center justify-center"
            >
              <div className="relative z-20 w-full max-w-md mx-auto">
                {/* Imagen principal con glow sutil */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-2xl bg-accent/10 -z-10" />
                  <motion.img
                    src="./assets/mascota.png"
                    alt="Mascota Ideatec"
                    animate={{ 
                      y: [0, -15, 0],
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-full h-auto drop-shadow-2xl relative z-10"
                    style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.3))" }}
                  />
                </div>

                {/* Tarjetas flotantes estáticas */}
                <FloatingCard className="top-[-5%] right-[-10%] light:bg-accent light:border-accent/20 dark:bg-black/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 light:bg-white/20 dark:bg-accent/20 flex items-center justify-center text-accent light:text-white dark:text-accent">
                      <Zap className="w-5 h-5 fill-accent/20 light:fill-white/20 dark:fill-accent/20" />
                    </div>
                    <div>
                      <div className="text-[9px] text-text-secondary light:text-white/80 dark:text-text-secondary uppercase font-bold tracking-wider">Performance</div>
                      <div className="text-xl font-black text-text-primary light:text-white dark:text-text-primary leading-none">+99%</div>
                    </div>
                  </div>
                </FloatingCard>

                <FloatingCard className="bottom-[-10%] left-[-15%] light:bg-accent light:border-accent/20 dark:bg-black/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 light:bg-white/20 dark:bg-accent/20 flex items-center justify-center text-accent light:text-white dark:text-accent">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] text-text-secondary light:text-white/80 dark:text-text-secondary uppercase font-bold tracking-wider">Tech Stack</div>
                      <div className="text-xl font-black text-text-primary light:text-white dark:text-text-primary leading-none">Moderno</div>
                    </div>
                  </div>
                </FloatingCard>

                <FloatingCard className="top-[20%] left-[-25%] hidden xl:flex light:bg-accent light:border-accent/20 dark:bg-black/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 light:bg-white/20 dark:bg-accent/20 flex items-center justify-center text-accent light:text-white dark:text-accent">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] text-text-secondary light:text-white/80 dark:text-text-secondary uppercase font-bold tracking-wider">Experiencia</div>
                      <div className="text-xl font-black text-text-primary light:text-white dark:text-text-primary leading-none">+5 años</div>
                    </div>
                  </div>
                </FloatingCard>
              </div>
            </div>
          </div>
        </div>
      </div>



      <style>{`
        .glass-card {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        /* Modo claro: fondo más claro y borde sutil */
        @media (prefers-color-scheme: light) {
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          }
        }
      `}</style>

      <ProjectModal isOpen={projectOpen} onClose={() => setProjectOpen(false)} />
    </section>
  );
};