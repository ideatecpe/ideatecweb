import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Code2, Smartphone, Cpu, Palette, ShoppingCart, BarChart3 } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

const WhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const BG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";

const stats = [
  { value: "+8",   suffix: " años", label: "en el mercado" },
  { value: "+100", suffix: "",      label: "proyectos entregados" },
  { value: "100",  suffix: "%",     label: "capital peruano" },
];

const tags = [
  { label: "Desarrollo Web",    icon: Code2 },
  { label: "Apps Móviles",      icon: Smartphone },
  { label: "Software a Medida", icon: Cpu },
  { label: "UI/UX Design",      icon: Palette },
  { label: "E-commerce",        icon: ShoppingCart },
  { label: "Consultoría TI",    icon: BarChart3 },
];

export const Hero = () => {
  const [open, setOpen] = useState(false);
  const waUrl = `https://wa.me/51912903330?text=${encodeURIComponent(
    "Hola IDEATEC, me interesa desarrollar un proyecto con ustedes. ¿Podemos hablar?"
  )}`;

  const scrollDown = () => {
    const el = document.getElementById("servicios");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden"
      style={{
        height: "100vh",
        marginTop: "calc(-1 * var(--header-h, 104px))",
        paddingTop: "var(--header-h, 104px)",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ── Overlay principal ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(5,7,15,0.95) 0%, rgba(5,7,15,0.85) 45%, rgba(5,7,15,0.50) 100%)",
        }}
      />

      {/* ── Trama de puntos sobre el lado derecho ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to left, black 0%, transparent 55%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 55%)",
        }}
      />

      {/* ── Línea naranja superior con glow ── */}
      <div
        className="absolute top-0 left-0 w-full h-0.75"
        style={{
          background: "linear-gradient(90deg, #ea580c 0%, #fb923c 50%, #ea580c 100%)",
          boxShadow: "0 0 18px 2px rgba(234,88,12,0.6)",
        }}
      />

      {/* ── Resplandor naranja lateral izquierdo ── */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ── Contenido ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 lg:py-10" style={{ marginBottom: '52px' }}>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge animado */}
            <div className="inline-flex items-center gap-2.5 mb-5 py-2 rounded-full ">
         
              <span className="text-xs font-semibold text-orange-300 tracking-widest uppercase">
                Empresa 100% Peruana 
              </span>
            </div>

            {/* Título */}
            <h1
              className="font-black leading-[1.04] tracking-[-0.04em] mb-4 text-white"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
            >
              Soluciones digitales<br />
              para empresas<br />
              <span className="relative inline-block">
                <span className="text-orange-500">que crecen.</span>
                <span
                  className="absolute left-0 -bottom-2 h-0.75 w-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #ea580c, #fb923c, transparent)",
                  }}
                />
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-white/60 text-base leading-relaxed max-w-lg mb-5">
              En{" "}
              <strong className="text-white font-semibold">IDEATEC</strong>{" "}
              diseñamos y construimos software a medida, plataformas web, apps
              móviles y sistemas de gestión que impulsan el crecimiento real de tu empresa.
            </p>

            {/* Tags de servicios */}
            <div className="flex flex-wrap gap-2 mb-5">
              {tags.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/6 text-xs text-white/65 backdrop-blur-sm hover:border-orange-500/40 hover:text-white/90 transition-colors cursor-default"
                >
                  <Icon className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={() => setOpen(true)}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white text-sm font-bold rounded-xl hover:bg-orange-500 transition-all duration-300"
                style={{ boxShadow: "0 4px 24px rgba(234,88,12,0.40)" }}
              >
                Iniciar mi proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 text-white text-sm font-semibold rounded-xl border border-white/20 bg-white/8 hover:bg-white/15 hover:border-white/35 transition-all duration-300 backdrop-blur-sm"
              >
                <WhatsApp />
                Escríbenos por WhatsApp
              </a>
            </div>

            {/* Stats cards */}
            <div className="flex gap-4 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex-1 px-5 py-4 rounded-xl border border-white/10 bg-white/6 backdrop-blur-sm"
                >
                  <p className="text-xl font-black text-white leading-none mb-1">
                    {s.value}
                    <span className="text-orange-400">{s.suffix}</span>
                  </p>
                  <p className="text-[11px] text-white/45 font-medium leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: mascot */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            {/* Glow detrás de la mascota */}
            <div
              className="absolute w-80 h-80 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 65%)",
              }}
            />
            <motion.img
              src="./assets/mascota.png"
              alt="IDEATEC"
              className="relative z-10 w-full max-w-100 h-auto select-none"
              style={{ filter: "drop-shadow(0 20px 50px rgba(234,88,12,0.25))" }}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              draggable={false}
            />
          </div>
        </div>
      </div>


      {/* ── Sponsors bar ── */}
      <div
        className="absolute bottom-0 left-0 w-full z-10 py-4 border-t border-white/5"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex w-max items-center hero-marquee">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0" aria-hidden={group === 1}>
                {Array(4).fill([
                  "./assets/sponsors/sponsor01.png",
                  "./assets/sponsors/sponsor02.png",
                  "./assets/sponsors/sponsor03.png",
                ]).flat().map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="sponsor"
                    className="h-7 w-auto object-contain shrink-0 mr-16"
                    draggable={false}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes hero-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .hero-marquee {
            animation: hero-marquee 55s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
            transform: translateZ(0);
          }
        `}</style>
      </div>

      <ProjectModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};
