import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Smartphone, Palette, ShoppingCart, Cpu, BarChart3, X, Check, ArrowRight } from 'lucide-react';
import { Modal } from './Modal';
import { ProjectModal } from './ProjectModal';

const servicesData = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y escalables utilizando las últimas tecnologías como React y Next.js.',
    fullDescription: 'Construimos soluciones web de alto rendimiento usando React, Next.js, TypeScript y más. Desde landing pages de alto impacto hasta plataformas web complejas con arquitecturas escalables.',
    features: [
      'Landing pages de alta conversión',
      'Web Apps con React / Next.js',
      'Portales corporativos a medida',
      'Integración con APIs y servicios externos',
      'Optimización SEO y performance',
      'Soporte multidioma e internacionalización',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    time: '2 – 8 semanas',
    color: '#F97316',
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Aplicaciones nativas e híbridas de alto rendimiento para iOS y Android con Flutter y React Native.',
    fullDescription: 'Desarrollamos aplicaciones móviles que tus usuarios amarán. Usamos Flutter y React Native para entregar apps nativas para iOS y Android desde un solo código base, reduciendo costos y tiempos sin sacrificar calidad.',
    features: [
      'Apps iOS y Android desde un solo código',
      'Notificaciones push personalizadas',
      'Integración con sensores del dispositivo',
      'Modo offline y sincronización',
      'Publicación en App Store y Google Play',
      'Analytics y seguimiento de usuarios',
    ],
    stack: ['Flutter', 'React Native', 'Firebase', 'REST APIs', 'SQLite'],
    time: '4 – 12 semanas',
    color: '#F97316',
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas y experiencias de usuario memorables centradas en la conversión y el engagement.',
    fullDescription: 'El diseño no es solo estética, es estrategia. Creamos interfaces que guían al usuario de forma natural, reducen la fricción y aumentan las conversiones. Trabajamos con Design Thinking y metodologías centradas en el usuario.',
    features: [
      'Investigación de usuarios (UX Research)',
      'Wireframes y prototipos interactivos',
      'Diseño de sistemas de diseño (Design System)',
      'Pruebas de usabilidad',
      'Diseño responsive para todos los dispositivos',
      'Handoff de diseño a desarrollo',
    ],
    stack: ['Figma', 'Adobe XD', 'Protopie', 'Principle', 'Maze'],
    time: '1 – 4 semanas',
    color: '#F97316',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Tiendas online robustas con pasarelas de pago seguras y gestión de inventario optimizada.',
    fullDescription: 'Creamos plataformas de comercio electrónico que venden mientras duermes. Desde catálogos de productos hasta checkout optimizados, integramos las pasarelas de pago más populares de Latinoamérica y el mundo.',
    features: [
      'Catálogo de productos ilimitado',
      'Pasarelas de pago (Culqi, Mercado Pago, Stripe)',
      'Panel de administración intuitivo',
      'Gestión de inventario y stock',
      'Módulo de cupones y descuentos',
      'Reportes de ventas y analytics',
    ],
    stack: ['WooCommerce', 'Shopify', 'Next.js Commerce', 'Stripe', 'Culqi'],
    time: '3 – 8 semanas',
    color: '#F97316',
  },
  {
    icon: Cpu,
    title: 'Software a Medida',
    description: 'Soluciones de software personalizadas para resolver problemas específicos de tu flujo de trabajo.',
    fullDescription: 'Cuando las soluciones genéricas no son suficientes, creamos software personalizado exactamente para lo que necesitas. ERPs, CRMs, sistemas de gestión, automatizaciones y más. Tu proceso, digitalizado a la perfección.',
    features: [
      'ERPs y CRMs personalizados',
      'Automatización de procesos empresariales',
      'Integraciones entre sistemas (ERP, contabilidad, etc.)',
      'Dashboards y reportes en tiempo real',
      'APIs y microservicios',
      'Migración y modernización de sistemas legacy',
    ],
    stack: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'Redis', 'AWS'],
    time: '6 – 24 semanas',
    color: '#F97316',
  },
  {
    icon: BarChart3,
    title: 'Consultoría',
    description: 'Asesoramiento estratégico para digitalizar tu empresa y elegir el stack tecnológico adecuado.',
    fullDescription: 'No siempre necesitas construir desde cero. A veces lo más valioso es la dirección correcta. Te asesoramos en estrategia tecnológica, elección de herramientas, arquitectura de sistemas y hoja de ruta de digitalización.',
    features: [
      'Auditoría tecnológica de tu empresa',
      'Definición de arquitectura y stack',
      'Hoja de ruta de transformación digital',
      'Evaluación y selección de proveedores',
      'Capacitación del equipo técnico',
      'Mentoría y acompañamiento continuo',
    ],
    stack: ['Reuniones', 'Talleres', 'Documentación', 'Roadmaps', 'KPIs'],
    time: '1 – 4 semanas',
    color: '#F97316',
  },
];


const ServiceDetailModal = ({ service, onClose, onRequestProject }: {
  service: typeof servicesData[0] | null;
  onClose: () => void;
  onRequestProject: (title: string) => void;
}) => {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <Modal isOpen={!!service} onClose={onClose} size="lg">
      <div className="px-8 py-10 bg-bg-primary">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl"
            style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}40` }}
          >
            <Icon className="w-10 h-10" style={{ color: service.color }} />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-black mb-2 text-text-primary">{service.title}</h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: service.color }} />
              <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">
                Tiempo: {service.time}
              </span>
            </div>
          </div>
        </div>

        <p className="text-lg text-text-secondary leading-relaxed mb-10">{service.fullDescription}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Features */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-text-primary/40 font-black mb-6">¿Qué incluye?</h4>
            <div className="space-y-4">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: service.color }} />
                  <span className="text-sm font-medium text-text-secondary">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-text-primary/40 font-black mb-6">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-text-primary hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onRequestProject(service.title)}
          className="w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl"
          style={{
            backgroundColor: service.color,
            color: '#030712',
          }}
        >
          Solicitar este servicio <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </Modal>
  );
};

const ServiceCard = ({ icon: Icon, title, description, index, color, onClick }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    onClick={onClick}
    className="glass p-10 rounded-[2.5rem] group hover:border-accent/30 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col h-full"
  >
    {/* Decorative Gradient Background */}
    <div 
      className="absolute -top-20 -right-20 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"
      style={{ backgroundColor: color }}
    />

    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 shadow-lg"
      style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
    >
      <Icon className="w-8 h-8 transition-colors duration-500" style={{ color }} />
    </div>
    
    <h3 
      className="text-2xl font-black mb-4 group-hover:text-accent transition-colors duration-300 leading-tight"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {title}
    </h3>
    
    <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    
    <div className="flex items-center gap-2 text-accent font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
      Ver detalles
      <ArrowRight className="w-5 h-5" />
    </div>
  </motion.div>
);

export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('');

  const handleRequestProject = (serviceTitle: string) => {
    setSelectedService(null);
    setTimeout(() => {
      setDefaultService(serviceTitle);
      setProjectModalOpen(true);
    }, 150);
  };

  return (
    <section id="servicios" className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-accent mb-6 px-4 py-2 rounded-full border border-accent/20 bg-accent/5"
          >
            Servicios Expertos
          </motion.span>
          <h2 className="mb-6 font-black leading-tight">
            Elevamos tu negocio con <br />
            <span className="text-gradient">Soluciones de Clase Mundial.</span>
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            Combinamos estrategia, diseño y tecnología para crear productos digitales que realmente funcionan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              index={index}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestProject={handleRequestProject}
      />

      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        defaultPlan={defaultService}
      />
    </section>
  );
};

