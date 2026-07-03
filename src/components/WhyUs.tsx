import React from 'react';
import { motion } from 'motion/react';
import { Zap, Layers, Users, Headphones, MapPin, Calendar, Hash } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  { icon: Zap,        title: 'Entregas Rápidas',  description: 'Metodologías ágiles para lanzar tu producto en tiempo récord sin sacrificar calidad.' },
  { icon: Layers,     title: 'Stack Moderno',      description: 'Utilizamos las tecnologías más vanguardistas para asegurar escalabilidad y futuro.' },
  { icon: Users,      title: 'Equipo Dedicado',    description: 'Un equipo de expertos comprometidos al 100% con el éxito de tu proyecto.' },
  { icon: Headphones, title: 'Soporte Continuo',   description: 'Acompañamiento post-lanzamiento para que nunca dejes de crecer.' },
];

const legalItems = [
  { icon: Hash,     label: 'Razón Social',  value: 'IDEATEC SAC' },
  { icon: Hash,     label: 'RUC',           value: '20601841038' },
  { icon: Calendar, label: 'Constitución',  value: '12 de mayo, 2016' },
  { icon: MapPin,   label: 'País',          value: 'Perú' },
];

export const WhyUs = () => (
  <>
    {/* ── ¿Por qué elegirnos? ── */}
<section
  id="nosotros"
  className="relative border-b border-gray-100 py-10 bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url(./assets/backgrounds/fondo02.jpg)" }}
>
  {/* Capa blanca */}
  <div className="absolute inset-0 bg-white/60"></div>
      {/* Capa para legibilidad */}
      <div className="absolute inset-0 bg-white/85" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 border-l-4 border-orange-500 pl-3 mb-4">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
              ¿Por qué elegir a <span className="text-orange-600">IDEATEC</span>?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-lg">
              No somos solo programadores, somos tus socios tecnológicos. Entendemos tu negocio y
              construimos herramientas que generan valor real.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-orange-200 transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mascota */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow naranja */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(ellipse at center, rgba(234,88,12,0.30) 0%, rgba(251,146,60,0.15) 45%, transparent 75%)",
                filter: "blur(32px)",
              }}
            />
            <img
              src="./assets/brand/mascota.png"
              alt="Mascota IDEATEC"
              loading="lazy"
              decoding="async"
              className="relative w-full max-w-sm object-contain drop-shadow-xl"
            />
          </motion.div>
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
            className="relative lg:w-2/5 w-full rounded-xl border border-gray-200 overflow-hidden p-7 space-y-4"
            style={{
              backgroundImage: "url(./assets/backgrounds/fondoi.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Capa para legibilidad */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
            <h3 className="relative text-base font-bold text-gray-900 mb-2">Datos de la empresa</h3>
            {legalItems.map((item) => (
              <div key={item.label} className="relative flex items-center gap-4 py-2 border-b border-gray-100 last:border-0">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">{item.label}</p>
                  <p className="font-semibold text-gray-900 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
            <div className="relative pt-2 flex justify-between items-center">
              <span className="text-xs text-gray-400">Empresa 100% peruana</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold">Desde 2016</span>
            </div>
          </Reveal>
        </div>

        {/* Misión / Visión */}
        <Reveal direction="up" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              tag: 'Misión', title: '¿Para qué existimos?',
              text: 'Brindar soluciones tecnológicas integrales de desarrollo web y mobile a medida, con calidad y servicio continuo, según las necesidades reales de cada cliente.',
            },
            {
              tag: 'Visión', title: '¿A dónde vamos?',
              text: 'Ser el socio tecnológico de referencia en Perú, reconocidos por transformar ideas digitales en productos que generan valor real y sostenible para las empresas.',
            },
          ].map((item) => (
            <div key={item.tag} className="pl-6 border-l-4 border-orange-500">
              <p className="text-xs text-orange-600 font-bold tracking-widest uppercase mb-2">{item.tag}</p>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  </>
);
