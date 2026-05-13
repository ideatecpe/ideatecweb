import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Zap, Code2, Globe, Cpu, Smartphone } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

const HeroVisual = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background Mesh/Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-secondary/10 blur-[150px] rounded-full" />
      
      {/* Grid Pattern with Fade */}
      <div className="absolute inset-0 dot-pattern opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

      {/* Floating Glass Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] w-32 h-32 glass rounded-2xl hidden lg:block opacity-20"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[10%] w-24 h-24 glass rounded-full hidden lg:block opacity-10"
      />
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
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-bg-primary">
      <HeroVisual />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-wider uppercase mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Estudio de Desarrollo Digital
            </motion.div>

            {/* Heading */}
            <h1 className="mb-8">
              <span className="text-text-primary block mb-2 font-light">Transformamos ideas en</span>
              <span className="text-gradient font-black">Experiencias Increíbles.</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary max-w-xl mb-12 leading-relaxed">
              En <span className="text-text-primary font-semibold">IDEATEC</span> diseñamos y construimos productos digitales de alto impacto. 
              Software a medida que impulsa el crecimiento de tu negocio.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setProjectOpen(true)}
                id="btn-empezar-proyecto"
                className="group relative w-full sm:w-auto px-10 py-4 rounded-full bg-accent text-bg-primary font-black text-lg overflow-hidden transition-all duration-300 glow-accent-hover"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Empezar proyecto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-bg-secondary border border-white/5 text-text-primary font-bold text-base hover:bg-white/10 transition-all duration-200"
              >
                <WhatsAppIcon className="text-[#25D366]" />
                Escríbenos
              </motion.a>
            </div>

            {/* Features/Stats Mini */}
            <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap gap-12">
              {[
                { icon: <Globe className="w-5 h-5" />, label: "Web Apps" },
                { icon: <Smartphone className="w-5 h-5" />, label: "Mobile" },
                { icon: <Cpu className="w-5 h-5" />, label: "Cloud" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text-secondary">
                  <div className="p-2 rounded-lg bg-white/5 text-accent">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold tracking-wide uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Mascota & Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex relative items-center justify-center"
          >
            {/* Main Mascota Image with Floating Effect */}
            <div className="relative z-20 w-full max-w-lg">
              <motion.img
                src="./assets/mascota.png"
                alt="Mascota Ideatec"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(249,115,22,0.3)]"
              />
              
              {/* Decorative Floating Cards */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-10 -right-10 glass p-5 rounded-2xl border-white/10 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Zap className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] text-text-secondary uppercase font-bold tracking-widest">Performance</div>
                  <div className="text-lg font-black text-text-primary leading-none">100%</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-10 glass p-5 rounded-2xl border-white/10 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] text-text-secondary uppercase font-bold tracking-widest">Tech Stack</div>
                  <div className="text-lg font-black text-text-primary leading-none">Modern</div>
                </div>
              </motion.div>
            </div>

            {/* Circular Orbits in Background */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[120%] aspect-square border border-white/5 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[140%] aspect-square border border-white/5 rounded-full border-dashed"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
};

