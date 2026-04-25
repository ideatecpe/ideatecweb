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
    color: '#8B5CF6',
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
    color: '#EC4899',
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
    color: '#10B981',
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
    color: '#F59E0B',
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
    color: '#06B6D4',
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
      <div className="px-8 py-6">
        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${service.color}15` }}
          >
            <Icon className="w-7 h-7" style={{ color: service.color }} />
          </div>
          <div>
            <h2 className="text-2xl font-syne font-bold text-text-primary mb-1">{service.title}</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ color: service.color, backgroundColor: `${service.color}15` }}>
                Tiempo estimado: {service.time}
              </span>
            </div>
          </div>
        </div>

        <p className="text-text-primary/70 leading-relaxed mb-8 text-sm">{service.fullDescription}</p>

        {/* Features */}
        <div className="mb-8">
          <h4 className="text-xs font-black uppercase tracking-widest text-text-primary/40 mb-4">¿Qué incluye?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${service.color}15` }}>
                  <Check className="w-3 h-3" style={{ color: service.color }} />
                </div>
                <span className="text-sm text-text-primary/70">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-black uppercase tracking-widest text-text-primary/40 mb-4">Tecnologías / Herramientas</h4>
          <div className="flex flex-wrap gap-2">
            {service.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full bg-bg-secondary/60 text-text-primary/60 border border-bg-secondary font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onRequestProject(service.title)}
          className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300"
          style={{
            backgroundColor: service.color,
            color: '#0B0D17',
          }}
        >
          Solicitar este servicio <ArrowRight className="w-4 h-4" />
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
    transition={{ delay: index * 0.1 }}
    onClick={onClick}
    className="glass p-8 rounded-3xl group hover:border-accent/30 transition-all duration-500 cursor-pointer"
  >
    <div className="w-14 h-14 bg-bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
      <Icon className="w-7 h-7 text-accent group-hover:text-bg-primary transition-colors duration-500" />
    </div>
    <h3 className="text-2xl font-syne font-bold mb-4 group-hover:text-accent transition-colors">{title}</h3>
    <p className="text-text-primary/60 leading-relaxed mb-4">{description}</p>
    <span className="text-accent text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      Ver más <ArrowRight className="w-4 h-4" />
    </span>
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
    <section id="servicios" className="py-24 bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-text-primary/60 max-w-xl mx-auto">Ofrecemos un abanico completo de soluciones digitales para llevar tu empresa al siguiente nivel.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
