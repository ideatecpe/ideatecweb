import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const SERVICE_ID = "service_2w3uxbc";
    const TEMPLATE_ID = "template_2616ev4";
    const PUBLIC_KEY = "d1v-EfEMSzeF17TP0";

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      emailjs.init(PUBLIC_KEY);
      
      const now = new Date();
      const fullDateTime = now.toLocaleString('es-PE', {
        dateStyle: 'full',
        timeStyle: 'short'
      });

      const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        // Añadimos la fecha al final del mensaje por si el campo FECHA falla
        message: `${formData.get('message')}\n\n(Enviado el: ${fullDateTime})`,
        fecha: fullDateTime,
        date: fullDateTime,
        time: now.toLocaleTimeString('es-PE'),
        FECHA: fullDateTime
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log("EmailJS Success:", result);
      setStatus('success');
      form.reset();
    } catch (error: any) {
      console.error("Error detallado de EmailJS:", error);
      // Si el error es un objeto con texto (ej: "The public key is invalid")
      if (error?.text) console.error("Mensaje de error:", error.text);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-16">
          
          {/* LEFT */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-sans font-bold mb-8 leading-tight">
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
                  <p className="text-lg font-medium text-text-primary">info@ideatec.com.pe</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-primary/40 uppercase font-bold tracking-widest">Teléfono / WhatsApp</p>
                  <p className="text-lg font-medium text-text-primary">912 903 330</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">¡Mensaje recibido!</h3>
                  <p className="text-text-primary/60 mb-8">Gracias por escribirnos. Te contactaremos muy pronto.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 rounded-xl bg-bg-secondary text-text-primary font-semibold hover:bg-bg-secondary/80 transition-all"
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
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text-primary/60 ml-1">
                        Nombre
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full bg-bg-primary border border-bg-secondary rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-text-primary"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-text-primary/60 ml-1">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full bg-bg-primary border border-bg-secondary rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-text-primary"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-primary/60 ml-1">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-bg-primary border border-bg-secondary rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none text-text-primary"
                      placeholder="Cuéntanos sobre tu idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-accent text-bg-primary font-bold py-5 rounded-2xl text-lg hover:glow-orange-hover transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
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