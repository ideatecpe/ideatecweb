import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Cpu,
  Palette,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import { ProjectModal } from "./ProjectModal";

const WhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const BG = "./heroIdetec.mp4";

const stats = [
  { value: "+8", suffix: " años", label: "en el mercado" },
  { value: "+100", suffix: "", label: "proyectos entregados" },
  { value: "100", suffix: "%", label: "capital peruano" },
];

const tags = [
  { label: "Desarrollo Web", icon: Code2 },
  { label: "Apps Móviles", icon: Smartphone },
  { label: "Software a Medida", icon: Cpu },
  { label: "UI/UX Design", icon: Palette },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "Consultoría TI", icon: BarChart3 },
];

export const Hero = () => {
  const [open, setOpen] = useState(false);
  const sponsorsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sponsorsH, setSponsorsH] = useState(52);

  useEffect(() => {
    const measure = () => setSponsorsH(sponsorsRef.current?.offsetHeight ?? 52);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial playback rate
    video.playbackRate = 0.7;

    const handleTimeUpdate = () => {
      const time = video.currentTime;
      if (time >= 3 && time < 6) {
        if (video.playbackRate !== 0.5) {
          video.playbackRate = 0.5;
        }
      } else {
        if (video.playbackRate !== 0.7) {
          video.playbackRate = 0.7;
        }
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const waUrl = `https://wa.me/51912903330?text=${encodeURIComponent(
    "Hola IDEATEC, me interesa desarrollar un proyecto con ustedes. ¿Podemos hablar?",
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
        paddingBottom: `${sponsorsH}px`,
        backgroundColor: "#0a0c12",
      }}
    >
      {/* ── Video de fondo ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={BG}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ── Overlay principal ── */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0, 0, 0, 0.85)",
        }}
      />

      {/* ── Capa oscura extra solo en mobile ── */}

      {/* ── Trama de puntos sobre el lado derecho ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to left, black 0%, transparent 55%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 0%, transparent 55%)",
        }}
      />

      {/* ── Contenido ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 lg:py-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* Pill badge */}
            {/* <div className="inline-flex items-center gap-2 mb-2 pl-1.5 pr-4 py-1.5  backdrop-blur-sm">
              <span
                className="relative overflow-hidden inline-flex items-center justify-center rounded-sm ring-1 ring-white/10 shrink-0"
                style={{
                  width: "42px",
                  height: "22px",
                  background:
                    "linear-gradient(to right, #D91023 0%, #D91023 33.33%, #ffffff 33.33%, #ffffff 66.66%, #D91023 66.66%, #D91023 100%)",
                }}
              >
                <span className="absolute inset-0 bg-black/15" />
                <span
                  className="relative text-white text-[10px] font-bold uppercase tracking-wider"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}
                ></span>
              </span>
              <span className="text-xs font-medium text-white/80">
                Empresa 100% Peruana - Desde 2016
              </span>
            </div> */}

            {/* Título */}
            <h1
              className="font-black leading-[1.04] tracking-[-0.04em] mb-5 text-white"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              Software a medida para
              <br />
              <span className="relative inline-block">
                <span className="text-orange-500">
                  empresas que van en serio
                </span>
                <span
                  className="absolute left-0 -bottom-2 h-0.75 w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #ea580c, #fb923c, #ea580c, transparent)",
                  }}
                />
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto mb-7">
              En <strong className="text-white font-semibold">IDEATEC</strong>{" "}
              diseñamos y desarrollamos plataformas web, apps móviles y sistemas
              de gestión que impulsan el crecimiento real de tu empresa.
            </p>

            {/* Tags de servicios */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
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
            <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
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
            <div className="hidden sm:flex gap-4 pt-8 border-t border-white/10 w-full max-w-xl mx-auto">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex-1 px-5 py-4 rounded-xl border border-white/10 bg-white/6 backdrop-blur-sm"
                >
                  <p className="text-xl font-black text-white leading-none mb-1">
                    {s.value}
                    <span className="text-orange-400">{s.suffix}</span>
                  </p>
                  <p className="text-[11px] text-white/45 font-medium leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Sponsors bar ── */}
      <div
        ref={sponsorsRef}
        className="absolute bottom-0 left-0 w-full z-10 py-4 border-t border-white/5"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div className="flex w-max items-center hero-marquee">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0"
                aria-hidden={group === 1}
              >
                {Array(4)
                  .fill([
                    "./assets/sponsors/sponsor01.png",
                    "./assets/sponsors/sponsor02.png",
                    "./assets/sponsors/sponsor03.png",
                    "./assets/sponsors/sponsor04.png",
                    "./assets/sponsors/sponsor05.png",
                  ])
                  .flat()
                  .map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="sponsor"
                      loading="lazy"
                      decoding="async"
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
