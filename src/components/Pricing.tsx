import React, { useState } from 'react';
import {
  Gauge,
  SearchCheck,
  TrendingUp,
  MousePointerClick,
  ArrowRight,
  Mail,
  MessageCircle,
  FileText,
  Globe,
  Server,
  Code2,
  ShieldCheck,
  Rocket,
} from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectModal } from './ProjectModal';

// ─── PROCESS STEPS ────────────────────────────────────────────────────────────
const processSteps = [
  {
    icon: FileText,
    step: '01',
    title: 'Recopilación de contenido',
    desc: 'Contenido en Word o PDF. Imágenes, logos y gráficas en JPG, PNG, PSD, Illustrator o CorelDraw.',
    accent: '#F97316',
    time: 'Día 1',
  },
  {
    icon: Globe,
    step: '02',
    title: 'Dominio y privacidad',
    desc: 'Registro de dominio .com con gestión completa de DNS, protección de privacidad y seguridad.',
    accent: '#8B5CF6',
    time: 'Día 2–3',
  },
  {
    icon: Server,
    step: '03',
    title: 'Hosting y configuración',
    desc: 'Plan de hosting con cPanel: correos corporativos, FTP, bases de datos y más.',
    accent: '#F97316',
    time: 'Día 3–4',
  },
  {
    icon: Code2,
    step: '04',
    title: 'Diseño y maquetación',
    desc: 'Código válido y estructurado, optimizado para SEO desde el primer día.',
    accent: '#8B5CF6',
    time: 'Día 5–12',
  },
  {
    icon: ShieldCheck,
    step: '05',
    title: 'Garantía de programación',
    desc: 'Código estructurado que admite mejoras y nuevas funcionalidades sin límite.',
    accent: '#F97316',
    time: 'Permanente',
  },
  {
    icon: Rocket,
    step: '06',
    title: 'Entrega y lanzamiento',
    desc: 'Sitio publicado, revisado y con accesos completos. Acompañamiento post-lanzamiento.',
    accent: '#8B5CF6',
    time: 'Día 14–21',
  },
];

// ─── SEO FEATURES ─────────────────────────────────────────────────────────────
const seoFeatures = [
  {
    icon: Gauge,
    title: 'Velocidad optimizada',
    desc: 'Puntuación 90+ en Google PageSpeed Insights garantizada en cada proyecto.',
    accent: '#F97316',
  },
  {
    icon: SearchCheck,
    title: 'SEO técnico completo',
    desc: 'Meta tags, estructura semántica, sitemap XML y robots.txt desde el inicio.',
    accent: '#8B5CF6',
  },
  {
    icon: TrendingUp,
    title: 'Mejor posición en Google',
    desc: 'Google premia las páginas rápidas con mejores rankings en buscadores.',
    accent: '#F97316',
  },
  {
    icon: MousePointerClick,
    title: 'Más ventas, menos rebote',
    desc: 'Cada segundo de retraso reduce conversiones un 7%. Un sitio rápido convierte más.',
    accent: '#8B5CF6',
  },
];

// ─── SPEEDOMETER ─────────────────────────────────────────────────────────────
const SpeedometerVisual = () => (
  <svg viewBox="0 0 200 130" className="w-full max-w-[180px]" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" className="text-bg-secondary" />
    <path d="M 20 110 A 80 80 0 0 1 80 35"  fill="none" stroke="#10B981" strokeWidth="14" strokeLinecap="round" opacity="0.85" />
    <path d="M 80 35 A 80 80 0 0 1 145 42"  fill="none" stroke="#F97316" strokeWidth="14" strokeLinecap="round" opacity="0.7" />
    <path d="M 145 42 A 80 80 0 0 1 180 110" fill="none" stroke="#EF4444" strokeWidth="14" strokeLinecap="round" opacity="0.6" />
    <line x1="100" y1="110" x2="48" y2="48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-text-primary" />
    <circle cx="100" cy="110" r="8" fill="currentColor" opacity="0.08" className="text-text-primary" />
    <circle cx="100" cy="110" r="4" fill="currentColor" className="text-text-primary" />
    <text x="100" y="82" textAnchor="middle" fill="currentColor" fontSize="22" fontWeight="bold" className="text-text-primary">95</text>
    <text x="100" y="97" textAnchor="middle" fill="currentColor" fontSize="9" opacity="0.45" className="text-text-primary">Performance</text>
    <circle cx="74" cy="120" r="3" fill="#4285F4" />
    <circle cx="84" cy="120" r="3" fill="#EA4335" />
    <circle cx="94" cy="120" r="3" fill="#FBBC05" />
    <circle cx="104" cy="120" r="3" fill="#4285F4" />
    <circle cx="114" cy="120" r="3" fill="#34A853" />
    <circle cx="124" cy="120" r="3" fill="#EA4335" />
    <text x="100" y="130" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.3" className="text-text-primary">Google PageSpeed</text>
  </svg>
);

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export const Pricing = () => {
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <>
      {/* ═══════════════════ PROCESO ═══════════════════ */}
      <section id="como-lo-hacemos" className="py-20 bg-bg-primary overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
              <Code2 className="w-3.5 h-3.5" />
              Proceso de trabajo
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-lg">
                ¿Cómo diseñamos{' '}
                <span className="text-accent">tu sitio web?</span>
              </h2>
              <p className="text-text-primary/65 text-base max-w-sm md:text-right leading-relaxed">
                Desde que nos envías tu contenido hasta el lanzamiento. El plazo exacto lo definimos juntos.
              </p>
            </div>
          </motion.div>

          {/* Timeline grid — 2 columns on desktop */}
          <div className="relative">
            {/* Center vertical line */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-px top-4 bottom-4 w-px bg-bg-secondary" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className={`group relative flex items-start gap-4 p-5 rounded-2xl border border-bg-secondary bg-bg-secondary/40 dark:bg-bg-secondary/10 hover:bg-bg-secondary/60 dark:hover:bg-bg-secondary/22 transition-all duration-300 ${
                      isLeft ? 'lg:pr-10' : 'lg:pl-10'
                    }`}
                  >
                    {/* Dot connector to center line */}
                    <div
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 bg-bg-primary z-10 ${
                        isLeft ? '-right-[30px]' : '-left-[30px]'
                      }`}
                      style={{ borderColor: step.accent }}
                    />

                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${step.accent}18` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: step.accent }} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <h4 className="font-bold text-base">{step.title}</h4>
                        <span
                          className="text-xs font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full"
                          style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                        >
                          {step.time}
                        </span>
                      </div>
                      <p className="text-text-primary/65 text-sm leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Step watermark */}
                    <span
                      className="absolute bottom-2 right-4 text-4xl font-sans font-black opacity-[0.035] select-none pointer-events-none"
                      style={{ color: step.accent }}
                    >
                      {step.step}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-bg-secondary bg-bg-secondary/40 dark:bg-bg-secondary/10 px-8 py-6"
          >
            <div>
              <p className="font-bold text-base mb-1">¿Cuánto tiempo toma tu proyecto?</p>
              <p className="text-text-primary/60 text-sm leading-relaxed">
                Proyectos simples listos en 7 días. Los más complejos en 4–6 semanas. Lo definimos juntos.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setProjectOpen(true)}
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-bg-primary font-bold text-sm"
            >
              Consultar mi proyecto <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ SEO / PAGESPEED ═══════════════════ */}
      <section className="py-20 bg-bg-primary overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4 px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
              <SearchCheck className="w-3.5 h-3.5" />
              Incluido en todos los planes
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Tu web, <span className="text-accent">veloz</span> y visible en Google
            </h2>
            <p className="text-text-primary/65 max-w-md mx-auto text-base leading-relaxed">
              SEO técnico y rendimiento optimizado no son extras — son el estándar en cada proyecto.
            </p>
          </motion.div>

          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl border border-bg-secondary overflow-hidden mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.06) 0%, transparent 55%)' }}
          >
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full border border-accent/8 pointer-events-none" />
            <div className="absolute -right-6 -top-6 w-36 h-36 rounded-full border border-accent/8 pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Text */}
              <div className="flex-1 p-10 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">
                  Optimizada para{' '}
                  <span className="text-accent">Google PageSpeed</span>{' '}
                  desde el día uno
                </h3>
                <p className="text-text-primary/65 text-base leading-relaxed mb-7 max-w-md">
                  Cada página supera los 90 puntos en PageSpeed Insights — carga rápida,
                  mejor posicionamiento y mayor conversión garantizados.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {[
                    { value: '90+', label: 'PageSpeed Score' },
                    { value: '<2s',  label: 'Tiempo de carga' },
                    { value: '40%', label: 'Más conversiones' },
                    { value: '100%', label: 'Mobile friendly' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-bg-secondary bg-bg-primary/50 dark:bg-bg-primary/30 p-3.5 text-center"
                    >
                      <p className="text-xl font-extrabold text-text-primary">{s.value}</p>
                      <p className="text-xs text-text-primary/60 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="mailto:info@ideatec.com.pe"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-bg-primary font-bold text-sm"
                  >
                    <Mail className="w-4 h-4" /> Envíanos un Mensaje
                  </motion.a>
                  <motion.a
                    href="https://wa.me/51912903330"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-bg-secondary bg-bg-primary/50 dark:bg-bg-primary/30 text-text-primary font-bold text-sm hover:bg-bg-secondary transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-green-400" /> Chat WhatsApp
                  </motion.a>
                </div>
              </div>

              {/* Speedometer */}
              <div className="lg:w-56 w-full flex flex-col items-center justify-center p-8 gap-3 border-t lg:border-t-0 lg:border-l border-bg-secondary bg-bg-secondary/50 dark:bg-bg-secondary/30">
                <SpeedometerVisual />
                <p className="text-text-primary/55 text-xs text-center leading-relaxed">
                  Resultado real en<br />PageSpeed Insights
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seoFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="group p-6 rounded-2xl border border-bg-secondary bg-bg-secondary/40 dark:bg-bg-secondary/10 hover:bg-bg-secondary/60 dark:hover:bg-bg-secondary/25 transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.accent}18` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: item.accent }} />
                  </div>
                  <h4 className="font-bold text-base mb-2 leading-snug">{item.title}</h4>
                  <p className="text-text-primary/65 text-sm leading-relaxed">{item.desc}</p>
                  <div
                    className="mt-4 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: item.accent }}
                  >
                    Incluido en tu plan <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={projectOpen}
        onClose={() => setProjectOpen(false)}
        defaultPlan=""
      />
    </>
  );
};