import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Smartphone, Palette, ShoppingCart, Cpu, Bot, X, Check, ArrowRight } from 'lucide-react';
import { Modal } from './Modal';
import { ProjectModal } from './ProjectModal';

const servicesData = [
  {
    icon: Code2,
    image: './assets/cards/web.png',
    imgClass: 'w-42',
    imgPos: 'bottom-0 right-0',
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
  },
  {
    icon: Smartphone,
    image: './assets/cards/mobile.png',
    imgClass: 'w-32',
    imgPos: 'bottom-0 right-0',
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
  },
  {
    icon: Palette,
    image: './assets/cards/uiux.png',
    imgClass: 'w-32',
    imgPos: 'bottom-[-70px]  right-0',
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
  },
  {
    icon: ShoppingCart,
    image: './assets/cards/e-commerce.png',
    imgClass: 'w-52',
    imgPos: 'bottom-0 right-0',
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
  },
  {
    icon: Cpu,
    image: './assets/cards/softwaremedida.png',
    imgClass: 'w-35',
    imgPos: 'bottom-0 right-3',
    title: 'Software a Medida',
    description: 'Soluciones de software personalizadas para resolver problemas específicos de tu flujo de trabajo.',
    fullDescription: 'Cuando las soluciones genéricas no son suficientes, creamos software personalizado exactamente para lo que necesitas. ERPs, CRMs, sistemas de gestión, automatizaciones y más.',
    features: [
      'ERPs y CRMs personalizados',
      'Automatización de procesos empresariales',
      'Integraciones entre sistemas',
      'Dashboards y reportes en tiempo real',
      'APIs y microservicios',
      'Migración y modernización de sistemas legacy',
    ],
    stack: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'Redis', 'AWS'],
    time: '6 – 24 semanas',
  },
  {
    icon: Bot,
    image: './assets/cards/ia.png',
    imgClass: 'w-32',
    imgPos: 'bottom-[-30px] right-0',
    title: 'Automatización e IA',
    description: 'Integramos de IA y automatización para optimizar tus procesos y liberar a tu equipo de tareas repetitivas.',
    fullDescription: 'Llevamos la inteligencia artificial a tu operación diaria. Desde chatbots y asistentes virtuales hasta automatización de procesos y modelos a medida, construimos soluciones que ahorran tiempo, reducen errores y escalan con tu negocio.',
    features: [
      'Chatbots y asistentes virtuales con IA',
      'Automatización de procesos (RPA y workflows)',
      'Integración de modelos de lenguaje (LLMs)',
      'Análisis predictivo y procesamiento de datos',
      'Agentes inteligentes a medida',
      'Integración con tus herramientas actuales',
    ],
    stack: ['Python', 'OpenAI', 'LangChain', 'n8n', 'TensorFlow', 'APIs'],
    time: '2 – 12 semanas',
  },
];

const ServiceModal = ({ service, onClose, onRequest }: {
  service: typeof servicesData[0] | null;
  onClose: () => void;
  onRequest: (title: string) => void;
}) => {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <Modal isOpen={!!service} onClose={onClose} size="lg">
      <div className="bg-white">
        <div className="px-8 py-8 border-b border-gray-100 flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-orange-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h2>
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest">
              Tiempo estimado: {service.time}
            </span>
          </div>
        </div>

        <div className="px-8 py-8">
          <p className="text-gray-500 leading-relaxed mb-8">{service.fullDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">¿Qué incluye?</h4>
              <div className="space-y-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-orange-600 shrink-0" />
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {service.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => onRequest(service.title)}
            className="w-full py-4 rounded-lg bg-orange-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-orange-700 transition-colors"
          >
            Solicitar este servicio <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Modal>
  );
};

const ServiceCard = ({ icon: Icon, image, imgClass = 'w-32', imgPos = 'bottom-0 right-0', title, description, index, onClick }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.07, duration: 0.5 }}
    onClick={onClick}
    className="group relative overflow-hidden bg-white border border-gray-200 rounded-xl p-5 cursor-pointer flex flex-col h-full min-h-[300px] transition-[border-color,box-shadow] duration-500 hover:border-orange-600 hover:shadow-[0_20px_50px_-12px_rgba(234,88,12,0.45)]"
  >
    {/* Capa de gradiente naranja (hover) */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Ondas concéntricas en perspectiva (piso) */}
    <div
      className="absolute bottom-2 right-6 pointer-events-none"
      style={{ perspective: "500px" }}
    >
      {[230, 175, 125, 80].map((s) => (
        <span
          key={s}
          className="absolute rounded-full border border-orange-200/70 group-hover:border-white/30 transition-colors duration-500"
          style={{
            width: s,
            height: s,
            right: -s / 2,
            bottom: -s / 2,
            transform: "rotateX(62deg)",
          }}
        />
      ))}
    </div>

    {/* Imagen en la esquina */}
    <img
      src={image}
      alt=""
      loading="lazy"
      decoding="async"
      width="168"
      height="168"
      className={`absolute ${imgPos} ${imgClass} object-contain pointer-events-none drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1`}
    />

    {/* Contenido */}
    <div className="relative z-10 flex flex-col h-full">
      <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 transition-colors duration-500 group-hover:bg-white/15 group-hover:border-white/25">
        <Icon className="w-6 h-6 text-orange-600 transition-colors duration-500 group-hover:text-white" />
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight transition-colors duration-500 group-hover:text-white">{title}</h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-6 grow max-w-[78%] transition-colors duration-500 group-hover:text-white/85">{description}</p>

      <div className="flex items-center gap-1.5 text-orange-600 text-sm font-semibold transition-all duration-300 group-hover:gap-3 group-hover:text-white">
        Ver detalles
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </motion.div>
);

export const Services = () => {
  const [selected, setSelected] = useState<typeof servicesData[0] | null>(null);
  const [projectOpen, setProjectOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('');

  const handleRequest = (title: string) => {
    setSelected(null);
    setTimeout(() => { setDefaultService(title); setProjectOpen(true); }, 150);
  };

  return (
    <section id="servicios" className="bg-gray-50 border-b border-gray-100 py-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 border-l-4 border-orange-500 pl-3 mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
            Nuestros <span className="text-orange-600">Servicios</span>
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-lg">
            Combinamos estrategia, diseño y tecnología para crear productos digitales que realmente funcionan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((s, i) => (
            <ServiceCard
              key={s.title}
              icon={s.icon}
              image={s.image}
              imgClass={s.imgClass}
              imgPos={s.imgPos}
              title={s.title}
              description={s.description}
              index={i}
              onClick={() => setSelected(s)}
            />
          ))}
        </div>
      </div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} onRequest={handleRequest} />
      <ProjectModal isOpen={projectOpen} onClose={() => setProjectOpen(false)} defaultPlan={defaultService} />
    </section>
  );
};
