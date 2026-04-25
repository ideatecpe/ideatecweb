import React, { useState } from 'react';
import { Modal } from './Modal';
import { Send, User, Mail, Phone, Briefcase, MessageSquare, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

const serviceTypes = [
  'Sitio Web / Landing Page',
  'Aplicación Web (Web App)',
  'App Móvil (iOS / Android)',
  'E-commerce / Tienda Online',
  'Software a Medida / ERP',
  'Diseño UI/UX',
  'Consultoría Tecnológica',
  'Otro',
];

const budgetRanges = [
  'Menos de $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000 – $15,000',
  'Más de $15,000',
  'A evaluar / No sé',
];

export const ProjectModal = ({ isOpen, onClose, defaultPlan }: ProjectModalProps) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultPlan || '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `¡Hola IDEATEC! 👋 Quiero solicitar un proyecto.\n\n` +
      `*Nombre:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      `*Teléfono:* ${form.phone || 'No especificado'}\n` +
      `*Empresa:* ${form.company || 'No especificada'}\n` +
      `*Servicio:* ${form.service || 'Sin especificar'}\n` +
      `*Presupuesto:* ${form.budget || 'Sin especificar'}\n` +
      `*Mensaje:* ${form.message}\n\n` +
      `¿Podemos hablar? 🚀`
    );
    window.open(`https://wa.me/51912903330?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', company: '', service: defaultPlan || '', budget: '', message: '' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Solicitar Proyecto" size="lg">
      <div className="px-8 py-6">
        {!submitted ? (
          <>
            <p className="text-text-primary/60 text-sm mb-6 leading-relaxed">
              Cuéntanos sobre tu idea. Te contactamos en menos de <span className="text-accent font-bold">24 horas</span> con una propuesta personalizada.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/60" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Tu nombre *"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-bg-secondary/40 border border-bg-secondary rounded-xl text-sm text-text-primary placeholder-text-primary/30 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/60" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Correo electrónico *"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-bg-secondary/40 border border-bg-secondary rounded-xl text-sm text-text-primary placeholder-text-primary/30 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/60" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono / WhatsApp"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-bg-secondary/40 border border-bg-secondary rounded-xl text-sm text-text-primary placeholder-text-primary/30 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/60" />
                  <input
                    type="text"
                    name="company"
                    placeholder="Empresa / Negocio"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-bg-secondary/40 border border-bg-secondary rounded-xl text-sm text-text-primary placeholder-text-primary/30 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/60 pointer-events-none" />
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-secondary/40 border border-bg-secondary rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-bg-primary">Tipo de servicio</option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s} className="bg-bg-primary">{s}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/60 pointer-events-none" />
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-secondary/40 border border-bg-secondary rounded-xl text-sm text-text-primary focus:outline-none focus:border-accent/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-bg-primary">Presupuesto estimado</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b} className="bg-bg-primary">{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-accent/60" />
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto... ¿Qué quieres construir? *"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-bg-secondary/40 border border-bg-secondary rounded-xl text-sm text-text-primary placeholder-text-primary/30 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-accent text-bg-primary font-bold text-base flex items-center justify-center gap-2 hover:glow-orange-hover transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Enviar por WhatsApp 🚀
              </motion.button>

              <p className="text-center text-xs text-text-primary/30">
                Al enviar, serás redirigido a WhatsApp para continuar la conversación.
              </p>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-2xl font-syne font-bold mb-3">¡Mensaje enviado!</h3>
            <p className="text-text-primary/60 mb-8">WhatsApp se abrió con tu solicitud. Te respondemos en menos de 24 horas.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClose}
              className="px-8 py-3 rounded-xl bg-bg-secondary text-text-primary font-semibold hover:bg-bg-secondary/80 transition-all"
            >
              Cerrar
            </motion.button>
          </motion.div>
        )}
      </div>
    </Modal>
  );
};
