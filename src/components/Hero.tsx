import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Zap, Code2 } from "lucide-react";
import { TechIllustration } from "./TechIllustration";
import { ProjectModal } from "./ProjectModal";

const HeroVisual = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated Lines */}

      {/* Floating Particles */}

      {/* Glow Orbs */}
    </div>
  );
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-5 h-5 shrink-0 ${className ?? ""}`}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Hero = () => {
  const [projectOpen, setProjectOpen] = useState(false);
  const whatsappNumber = "51912903330";
  const whatsappMessage = encodeURIComponent(
    "Hola IDEATEC, me interesa desarrollar un proyecto con ustedes. ¿Podemos hablar?",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-primary">
      <HeroVisual />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-0 rounded text-accent text-[12px] font-sans tracking-[0.2em] uppercase mb-6 font-bold"
            >
              Desarrollo Web & Mobile
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl md:text-5xl xl:text-7xl leading-[0.95] mb-8 font-sans tracking-tight">
              <span className="text-text-primary block mb-2">
                Hacemos realidad
              </span>
              <span className="text-gradient ">tu idea digital.</span>
            </h1>

            <p className="text-lg md:text-xl text-text-primary/60 max-w-xl mb-10 leading-relaxed font-medium">
              Desarrollamos plataformas web y aplicaciones móviles a medida para
              empresas que quieren crecer en serio. Desde el diseño hasta el
              lanzamiento, somos tu equipo técnico.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* CTA principal */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setProjectOpen(true)}
                id="btn-empezar-proyecto"
                className="group relative w-full sm:w-auto px-10 py-4 rounded-full bg-accent text-bg-primary font-black text-lg overflow-hidden transition-all duration-300 hover:glow-orange-hover"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Empezar proyecto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              {/* CTA WhatsApp — llamativo con fondo verde */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366]/40 dark:bg-[#25D366]/15 text-[#075E54] dark:text-[#25D366] font-bold text-base hover:bg-[#25D366]/50 dark:hover:bg-[#25D366]/25 transition-all duration-200"
              >
                <WhatsAppIcon />
                Escríbenos
              </motion.a>

              
            </div>

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-text-primary/5 flex flex-wrap gap-10">
              {[
                { value: "Diseño", label: "que enamora" },
                { value: "Código", label: "limpio y escalable" },
                { value: "Entrega", label: "sin demoras" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl font-black text-accent">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-text-primary/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Mascota */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative items-center justify-center"
          >
            {/* Orbe de luz detrás */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-80 h-80 rounded-full bg-accent/20 blur-[80px]"
            />

            {/* Anillo giratorio exterior */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-105 h-105 rounded-full border border-accent/10 border-dashed"
            />

            {/* Anillo giratorio interior */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-80 rounded-full border border-accent/20"
            />

            {/* Partículas orbitando */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-90 h-90"
                style={{ transformOrigin: "center" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-2 h-2 bg-accent rounded-full"
                  style={{
                    top: "0%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateY(-180px)`,
                  }}
                />
              </motion.div>
            ))}

            {/* Sombra del suelo */}
            <motion.div
              animate={{ scaleX: [1, 0.85, 1], opacity: [0.3, 0.15, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 w-64 h-6 bg-accent/30 rounded-full blur-xl"
            />

            {/* Mascota flotando */}
            <motion.img
              src="./assets/mascota.png"
              alt="Mascota Ideatec"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-md mx-auto"
              style={{
                filter:
                  "drop-shadow(0 0 15px rgba(249,115,22,0.25)) drop-shadow(0 10px 20px rgba(0,0,0,0.25))",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-bg-primary to-transparent z-10" />

      <ProjectModal
        isOpen={projectOpen}
        onClose={() => setProjectOpen(false)}
      />
    </section>
  );
};
