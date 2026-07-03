import React, { useState } from 'react';
import {
  Gauge, SearchCheck, TrendingUp, MousePointerClick,
  ArrowRight, Mail, MessageCircle, FileText, Globe,
  Server, Code2, ShieldCheck, Rocket,
} from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectModal } from './ProjectModal';

const processSteps = [
  { icon: FileText,   step: '01', title: 'Recopilación de contenido',  desc: 'Contenido en Word o PDF. Imágenes, logos y gráficas en JPG, PNG, PSD, Illustrator o CorelDraw.',                          time: 'Día 1',       accent: '#ea580c' },
  { icon: Globe,      step: '02', title: 'Dominio y privacidad',        desc: 'Registro de dominio .com con gestión completa de DNS, protección de privacidad y seguridad.',                                time: 'Día 2–3',     accent: '#ea580c' },
  { icon: Server,     step: '03', title: 'Hosting y configuración',     desc: 'Plan de hosting con cPanel: correos corporativos, FTP, bases de datos y más.',                                                time: 'Día 3–4',     accent: '#ea580c' },
  { icon: Code2,      step: '04', title: 'Diseño y maquetación',        desc: 'Código válido y estructurado, optimizado para SEO desde el primer día.',                                                     time: 'Día 5–12',    accent: '#ea580c' },
  { icon: ShieldCheck,step: '05', title: 'Garantía de programación',    desc: 'Código estructurado que admite mejoras y nuevas funcionalidades sin límite.',                                                 time: 'Permanente',  accent: '#ea580c' },
  { icon: Rocket,     step: '06', title: 'Entrega y lanzamiento',       desc: 'Sitio publicado, revisado y con accesos completos. Acompañamiento post-lanzamiento.',                                        time: 'Día 14–21',   accent: '#ea580c' },
];

const seoFeatures = [
  { icon: Gauge,            title: 'Velocidad optimizada',     desc: 'Puntuación 90+ en Google PageSpeed Insights garantizada en cada proyecto.',                   accent: '#ea580c' },
  { icon: SearchCheck,      title: 'SEO técnico completo',     desc: 'Meta tags, estructura semántica, sitemap XML y robots.txt desde el inicio.',                   accent: '#ea580c' },
  { icon: TrendingUp,       title: 'Mejor posición en Google', desc: 'Google premia las páginas rápidas con mejores rankings en buscadores.',                        accent: '#ea580c' },
  { icon: MousePointerClick, title: 'Más ventas, menos rebote', desc: 'Cada segundo de retraso reduce conversiones un 7%. Un sitio rápido convierte más.',           accent: '#ea580c' },
];

const SpeedometerVisual = () => (
  <svg viewBox="0 0 200 130" className="w-full max-w-[160px]" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="#e5e7eb" strokeWidth="14" strokeLinecap="round" />
    <path d="M 20 110 A 80 80 0 0 1 80 35"  fill="none" stroke="#10B981" strokeWidth="14" strokeLinecap="round" opacity="0.85" />
    <path d="M 80 35 A 80 80 0 0 1 145 42"  fill="none" stroke="#ea580c" strokeWidth="14" strokeLinecap="round" opacity="0.7" />
    <path d="M 145 42 A 80 80 0 0 1 180 110" fill="none" stroke="#EF4444" strokeWidth="14" strokeLinecap="round" opacity="0.6" />
    <line x1="100" y1="110" x2="48" y2="48" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
    <circle cx="100" cy="110" r="8" fill="#f3f4f6" />
    <circle cx="100" cy="110" r="4" fill="#111827" />
    <text x="100" y="82" textAnchor="middle" fill="#111827" fontSize="22" fontWeight="bold">95</text>
    <text x="100" y="97" textAnchor="middle" fill="#6b7280" fontSize="9">Performance</text>
    <circle cx="74" cy="120" r="3" fill="#4285F4" />
    <circle cx="84" cy="120" r="3" fill="#EA4335" />
    <circle cx="94" cy="120" r="3" fill="#FBBC05" />
    <circle cx="104" cy="120" r="3" fill="#4285F4" />
    <circle cx="114" cy="120" r="3" fill="#34A853" />
    <circle cx="124" cy="120" r="3" fill="#EA4335" />
    <text x="100" y="130" textAnchor="middle" fill="#9ca3af" fontSize="8">Google PageSpeed</text>
  </svg>
);

export const Pricing = () => {
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <>
      {/* ═══ PROCESO ═══ */}
      <section id="como-lo-hacemos" className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 border-l-4 border-orange-500 pl-3 mb-4">
              Proceso de trabajo
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight max-w-xl mb-3">
              ¿Cómo diseñamos <span className="text-orange-600">tu sitio web?</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
              Desde que nos envías tu contenido hasta el lanzamiento. El plazo exacto lo definimos juntos.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-px top-4 bottom-4 w-px bg-gray-200" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-4">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`relative flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-orange-200 transition-colors duration-300 ${
                      isLeft ? 'lg:pr-10' : 'lg:pl-10'
                    }`}
                  >
                    <div
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 bg-white z-10 ${
                        isLeft ? '-right-[29px]' : '-left-[29px]'
                      }`}
                      style={{ borderColor: step.accent }}
                    />
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${step.accent}12` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-bold text-sm text-gray-900">{step.title}</h4>
                        <span
                          className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                          style={{ backgroundColor: `${step.accent}12`, color: step.accent }}
                        >
                          {step.time}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-xl border border-gray-200 bg-white px-7 py-5"
          >
            <div>
              <p className="font-bold text-sm text-gray-900 mb-1">¿Cuánto tiempo toma tu proyecto?</p>
              <p className="text-gray-500 text-sm">Proyectos simples listos en 7 días. Los más complejos en 4–6 semanas.</p>
            </div>
            <button
              onClick={() => setProjectOpen(true)}
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-600 text-white font-semibold text-sm hover:bg-orange-700 transition-colors"
            >
              Consultar mi proyecto <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══ SEO / PAGESPEED ═══ */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 border-l-4 border-orange-500 pl-3 mb-4">
              Incluido en todos los planes
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight mt-2">
              Tu web, <span className="text-orange-600">veloz</span> y visible en Google
            </h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
              SEO técnico y rendimiento optimizado no son extras — son el estándar en cada proyecto.
            </p>
          </motion.div>

          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 bg-white overflow-hidden mb-5"
          >
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="flex-1 p-8 md:p-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                  Optimizada para <span className="text-orange-600">Google PageSpeed</span> desde el día uno
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-7 max-w-md">
                  Cada página supera los 90 puntos en PageSpeed Insights — carga rápida, mejor posicionamiento y mayor conversión.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
                  {[
                    { value: '90+',  label: 'PageSpeed Score' },
                    { value: '<2s',  label: 'Tiempo de carga' },
                    { value: '40%',  label: 'Más conversiones' },
                    { value: '100%', label: 'Mobile friendly' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg border border-gray-200 bg-gray-50 p-3.5 text-center">
                      <p className="text-lg font-extrabold text-gray-900">{s.value}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:info@ideatec.com.pe"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-600 text-white font-semibold text-sm hover:bg-orange-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Envíanos un mensaje
                  </a>
                  <a
                    href="https://wa.me/51912903330"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-green-500" /> Chat WhatsApp
                  </a>
                </div>
              </div>

              <div className="lg:w-52 w-full flex flex-col items-center justify-center p-8 gap-3 border-t lg:border-t-0 lg:border-l border-gray-100 bg-gray-50">
                <SpeedometerVisual />
                <p className="text-gray-400 text-xs text-center leading-relaxed">
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
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="p-6 rounded-xl border border-gray-200 bg-white hover:border-orange-200 transition-colors duration-300 cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.accent}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.accent }} />
                  </div>
                  <h4 className="font-bold text-sm text-gray-900 mb-2 leading-snug">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectModal isOpen={projectOpen} onClose={() => setProjectOpen(false)} defaultPlan="" />
    </>
  );
};
