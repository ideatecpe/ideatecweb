import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from "motion/react";
import { ArrowRight, Zap, Code2, Globe, Cpu, Smartphone, Sparkles, Award } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

// ========== COMPONENTES VISUALES MEJORADOS ==========

const AnimatedGradientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: ["0%", "10%", "-5%", "0%"],
          y: ["0%", "-10%", "15%", "0%"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute top-[5%] left-[5%] w-[45%] h-[45%] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{
          x: ["0%", "-15%", "10%", "0%"],
          y: ["0%", "20%", "-10%", "0%"],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[0%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[150px]"
      />
    </div>
  );
};

const GridPattern = () => {
  return (
    <div
      className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_90%)]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        color: "#ff8c00",
      }}
    />
  );
};

// Tarjeta flotante mejorada: más separada de la mascota y con estilo adaptable a light/dark
const FloatingCard = ({ children, delay = 0, className = "" }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: -3 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.5, delay: delay + 0.2, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.03, rotate: 0, transition: { duration: 0.2 } }}
      className={`absolute glass-card p-3 rounded-xl border shadow-lg backdrop-blur-md ${className}`}
    >
      {children}
    </motion.div>
  );
};

const SplitText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const whatsappNumber = "51912903330";
  const whatsappMessage = encodeURIComponent(
    "Hola IDEATEC, me interesa desarrollar un proyecto con ustedes. ¿Podemos hablar?"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Mouse parallax para la mascota (solo para dar sensación 3D)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateY = useTransform(springX, [-300, 300], [8, -8]);
  const rotateX = useTransform(springY, [-300, 300], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-[100vh] flex items-center pt-24 pb-16 overflow-hidden bg-bg-primary"
    >
      <AnimatedGradientOrbs />
      <GridPattern />

      {/* Contenedor principal con parallax */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* COLUMNA IZQUIERDA - TEXTO */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-accent/10 dark:bg-accent/10 bg-white/20 border border-accent/20 dark:border-accent/30 text-accent text-xs font-black tracking-wider uppercase mb-8 backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estudio de Desarrollo Digital</span>
              </motion.div>

              {/* Título con split text */}
              <h1 className="mb-8 leading-[1.1] tracking-tighter">
                <div className="font-black text-6xl lg:text-7xl xl:text-8xl">
                  <SplitText text="Diseñamos" className="text-black dark:text-white block" />
                  <motion.div
                    className="relative inline-block mt-2 whitespace-nowrap overflow-hidden"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  >
                    <span
                      className="bg-clip-text text-transparent font-black"
                      style={{
                        backgroundImage: "linear-gradient(105deg, #ff6a00, #ffb347, #ff8c00, #ff6a00)",
                        backgroundSize: "300% auto",
                        animation: "gradientFlow 6s linear infinite",
                      }}
                    >
                      el futuro.
                    </span>
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent/80 via-accent to-transparent rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    />
                  </motion.div>
                </div>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg md:text-xl text-text-secondary/90 dark:text-text-secondary/90 text-gray-700 max-w-xl mb-12 leading-relaxed"
              >
                En <span className="text-text-primary dark:text-text-primary font-semibold">IDEATEC</span> diseñamos y construimos productos
                digitales de alto impacto. Software a medida que impulsa el crecimiento de tu negocio.
              </motion.p>

              {/* Botones CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-5"
              >
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(249,115,22,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setProjectOpen(true)}
                  className="group relative w-full sm:w-auto px-10 py-4 rounded-full bg-accent text-white font-black text-lg overflow-hidden transition-all duration-300 shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Empezar proyecto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 dark:bg-bg-secondary/80 backdrop-blur-sm border border-white/20 dark:border-white/10 text-text-primary dark:text-text-primary font-bold text-base transition-all duration-200 hover:border-accent/50"
                >
                  <WhatsAppIcon className="text-[#25D366] group-hover:scale-110 transition-transform" />
                  Escríbenos
                </motion.a>
              </motion.div>

              {/* Features mini */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8 justify-between max-w-md"
              >
                {[
                  { icon: <Globe className="w-5 h-5" />, label: "Web Apps" },
                  { icon: <Smartphone className="w-5 h-5" />, label: "Mobile" },
                  { icon: <Cpu className="w-5 h-5" />, label: "Cloud" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-3 text-text-secondary dark:text-text-secondary text-gray-600 group cursor-default"
                  >
                    <div className="p-2 rounded-xl bg-white/10 dark:bg-white/5 text-accent group-hover:bg-accent/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold tracking-wide uppercase">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* COLUMNA DERECHA - MASCOTA con tarjetas flotantes separadas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="hidden lg:flex relative items-center justify-center perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
                className="relative z-20 w-full max-w-md mx-auto"
              >
                {/* Imagen principal con glow */}
                <div className="relative">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 15px rgba(249,115,22,0.2)",
                        "0 0 35px rgba(249,115,22,0.5)",
                        "0 0 15px rgba(249,115,22,0.2)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-full blur-2xl bg-accent/20 -z-10"
                  />
                  <motion.img
                    src="./assets/mascota.png"
                    alt="Mascota Ideatec"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-auto drop-shadow-xl relative z-10"
                    style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.2))" }}
                  />
                </div>

                {/* Tarjetas flotantes reposicionadas - más alejadas de la imagen */}
                <FloatingCard delay={0.1} className="top-[-10%] right-[-15%] translate-x-0 translate-y-0 light:bg-accent light:border-accent/20 dark:bg-black/40">
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

                <FloatingCard delay={0.4} className="bottom-[-15%] left-[-20%] -translate-x-0 translate-y-0 light:bg-accent light:border-accent/20 dark:bg-black/40">
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

                <FloatingCard delay={0.7} className="top-[20%] left-[-25%] hidden xl:flex light:bg-accent light:border-accent/20 dark:bg-black/40">
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
              </motion.div>

              {/* Órbitas decorativas suaves */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[110%] aspect-square border border-accent/10 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[140%] aspect-square border border-dashed border-accent/5 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent pointer-events-none" />

      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
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
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

      <ProjectModal isOpen={projectOpen} onClose={() => setProjectOpen(false)} />
    </section>
  );
};