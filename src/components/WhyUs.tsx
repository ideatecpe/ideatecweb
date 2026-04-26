import React from 'react';
import { Zap, Layers, Users, Headphones, MapPin, Calendar, Hash } from 'lucide-react';

export const WhyUs = () => {
  const features = [
    { icon: Zap, title: 'Entregas Rápidas', description: 'Metodologías ágiles para lanzar tu producto en tiempo récord sin sacrificar calidad.' },
    { icon: Layers, title: 'Stack Moderno', description: 'Utilizamos las tecnologías más vanguardistas para asegurar escalabilidad y futuro.' },
    { icon: Users, title: 'Equipo Dedicado', description: 'Un equipo de expertos comprometidos al 100% con el éxito de tu proyecto.' },
    { icon: Headphones, title: 'Soporte 24/7', description: 'Acompañamiento continuo post-lanzamiento para que nunca dejes de crecer.' },
  ];

  return (
    <>
      {/* ¿Por qué elegirnos? */}
      <section id="nosotros" className="py-24 bg-bg-secondary/40 dark:bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-8 leading-tight">
              ¿Por qué elegir a <span className="text-accent">IDEATEC</span>?
            </h2>
            <p className="text-lg text-text-primary/60 mb-10 leading-relaxed">
              No somos solo programadores, somos tus socios tecnológicos. Entendemos tu negocio y construimos herramientas que generan valor real.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold mb-2">{f.title}</h4>
                    <p className="text-sm text-text-primary/50">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-bg-secondary shadow-2xl">
              <img
                src="./assets/elegir.png"
                alt="¿Por qué elegir a IDEATEC?"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full z-0 blur-3xl opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full z-0 blur-3xl opacity-20" />
          </div>
        </div>
      </section>

      {/* ¿Quiénes somos? */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Nuestra empresa</p>
            <h2 className="text-4xl md:text-5xl font-sans font-bold leading-tight">
              ¿Quiénes <span className="text-accent">somos?</span>
            </h2>
          </div>

          {/* Descripción + Datos legales lado a lado */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">

            {/* Texto */}
<div className="lg:w-3/5 space-y-5">
  <p className="text-[16px] text-text-primary/70 leading-relaxed">
    Somos <span className="text-text-primary font-semibold">IDEATEC SAC</span>, una empresa de capitales 100% peruanos con más de 8 años en el mercado, especializada en el desarrollo de soluciones digitales a medida: plataformas web, aplicaciones móviles y sistemas de gestión que potencian las operaciones de nuestros clientes.
  </p>
  <p className="text-[16px] text-text-primary/55 leading-relaxed">
    Desde el diseño hasta el lanzamiento y soporte continuo, somos tu equipo técnico de confianza. Contamos con una central de atención disponible todo el año para acompañar a nuestros clientes en cada etapa de su crecimiento digital.
  </p>
  <p className="text-[16px] text-text-primary/55 leading-relaxed">
    Creemos en la tecnología como motor de transformación empresarial. Por eso, cada proyecto lo abordamos con un enfoque estratégico, combinando innovación, buenas prácticas de desarrollo y un profundo entendimiento de las necesidades de cada cliente.
  </p>
</div>

            {/* Datos legales */}
            <div className="lg:w-2/5 w-full rounded-2xl border border-bg-secondary bg-bg-secondary/50 dark:bg-bg-secondary/20 p-7 space-y-3">
              <h3 className="text-lg mb-1 font-sans">Datos de la empresa</h3>

              <div className="flex items-center gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <Hash className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-primary/70 uppercase tracking-widest mb-0.5">Razón Social</p>
                  <p className="font-semibold text-text-primary text-sm">IDEATEC SAC</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <Hash className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-primary/70 uppercase tracking-widest mb-0.5">RUC</p>
                  <p className="font-semibold text-text-primary text-sm">20544832019</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-primary/70 uppercase tracking-widest mb-0.5">Constitución</p>
                  <p className="font-semibold text-text-primary text-sm">12 de mayo, 2016</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-primary/70 uppercase tracking-widest mb-0.5">País</p>
                  <p className="font-semibold text-text-primary text-sm">Perú</p>
                </div>
              </div>

              <div className="border-t border-bg-secondary pt-4 flex items-center justify-between">
                <span className="text-xs text-text-primary/70">Empresa 100% peruana</span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">Desde 2016</span>
              </div>
            </div>
          </div>

          {/* Misión / Visión — abajo, ancho completo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="relative pl-7 before:absolute before:left-0 before:top-0 before:h-full before:w-0.75 before:rounded-full before:bg-linear-to-b before:from-accent before:to-accent/10">
              <p className="text-xs text-accent font-semibold tracking-widest uppercase mb-2">Misión</p>
              <h4 className="font-sans font-bold text-xl text-text-primary mb-3">¿Para qué existimos?</h4>
              <p className="text-text-primary/55 leading-relaxed">
                Brindar soluciones tecnológicas integrales de desarrollo web y mobile a medida, con calidad y servicio continuo, según las necesidades reales de cada cliente.
              </p>
            </div>

            <div className="relative pl-7 before:absolute before:left-0 before:top-0 before:h-full before:w-0.75 before:rounded-full before:bg-linear-to-b before:from-accent before:to-accent/10">
              <p className="text-xs text-accent font-semibold tracking-widest uppercase mb-2">Visión</p>
              <h4 className="font-sans font-bold text-xl text-text-primary mb-3">¿A dónde vamos?</h4>
              <p className="text-text-primary/55 leading-relaxed">
                Ser el socio tecnológico de referencia en Perú, reconocidos por transformar ideas digitales en productos que generan valor real y sostenible para las empresas.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};