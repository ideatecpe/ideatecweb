import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const SERVICE_ID  = 'service_2w3uxbc';
    const TEMPLATE_ID = 'template_2616ev4';
    const PUBLIC_KEY  = 'd1v-EfEMSzeF17TP0';

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      emailjs.init(PUBLIC_KEY);
      const now = new Date();
      const fullDateTime = now.toLocaleString('es-PE', { dateStyle: 'full', timeStyle: 'short' });

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name:    formData.get('name'),
        email:   formData.get('email'),
        message: `${formData.get('message')}\n\n(Enviado el: ${fullDateTime})`,
        fecha:   fullDateTime,
        FECHA:   fullDateTime,
      }, PUBLIC_KEY);

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="bg-gray-50 border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 border-l-4 border-orange-500 pl-3 mb-4">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
              ¿Listo para <span className="text-orange-600">innovar</span>?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-md">
              Cuéntanos sobre tu proyecto. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas
              para agendar una consultoría gratuita.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">Email</p>
                  <a href="mailto:info@ideatec.com.pe" className="text-gray-800 font-medium hover:text-orange-600 transition-colors">
                    info@ideatec.com.pe
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-0.5">Teléfono / WhatsApp</p>
                  <a href="tel:+51912903330" className="text-gray-800 font-medium hover:text-orange-600 transition-colors">
                    +51 912 903 330
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-14"
                >
                  <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje recibido!</h3>
                  <p className="text-gray-500 mb-8 text-sm">Gracias por escribirnos. Te contactaremos muy pronto.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nombre</label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Mensaje</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Cuéntanos sobre tu idea..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-orange-600 text-white font-semibold py-3.5 rounded-lg text-sm hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? 'Enviando...' : <><Send className="w-4 h-4" /> Enviar mensaje</>}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-center">
                      Hubo un error al enviar el mensaje. Por favor intenta de nuevo.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
