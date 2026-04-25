import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-syne font-bold mb-8 leading-tight">
              ¿Listo para <span className="text-accent">innovar</span>?
            </h2>
            <p className="text-lg text-text-primary/60 mb-12">
              Cuéntanos sobre tu proyecto. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas para agendar una consultoría gratuita.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-primary/40 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-lg font-medium">hola@ideatec.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-primary/40 uppercase font-bold tracking-widest">LinkedIn</p>
                  <p className="text-lg font-medium">/company/ideatec-dev</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-primary/60 ml-1">Nombre</label>
                  <input type="text" className="w-full bg-bg-primary border border-bg-secondary rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-primary/60 ml-1">Email</label>
                  <input type="email" className="w-full bg-bg-primary border border-bg-secondary rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-primary/60 ml-1">Mensaje</label>
                <textarea rows={5} className="w-full bg-bg-primary border border-bg-secondary rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Cuéntanos sobre tu idea..."></textarea>
              </div>
              <button className="w-full bg-accent text-bg-primary font-bold py-5 rounded-2xl text-lg hover:glow-orange-hover transition-all duration-300 transform active:scale-95">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
