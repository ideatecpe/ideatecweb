import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Github, X, Calendar, Tag } from 'lucide-react';
import { Modal } from './Modal';
import { ProjectModal } from './ProjectModal';

const projects = [
  {
    title: 'Nexus E-commerce',
    category: 'Web / React',
    image: 'https://picsum.photos/seed/nexus/600/400',
    description: 'Plataforma de comercio electrónico completa para una marca de moda con catálogo avanzado, filtros dinámicos, carrito de compras y checkout con múltiples métodos de pago.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    year: '2024',
    result: '+320% en conversión respecto a su sitio anterior',
    challenge: 'El cliente necesitaba migrar de una plataforma antigua a una solución moderna que soportara miles de productos simultáneos.',
  },
  {
    title: 'HealthSync App',
    category: 'Mobile / Flutter',
    image: 'https://picsum.photos/seed/health/600/400',
    description: 'App de salud y bienestar con seguimiento de actividad física, dieta, sueño y métricas vitales. Integra con dispositivos wearable mediante Bluetooth LE.',
    tags: ['Flutter', 'Firebase', 'HealthKit', 'Bluetooth LE', 'Charts'],
    year: '2024',
    result: '+15,000 usuarios activos en los primeros 3 meses',
    challenge: 'Sincronización en tiempo real con múltiples tipos de dispositivos y plataformas de salud.',
  },
  {
    title: 'Fintech Dashboard',
    category: 'Web / Next.js',
    image: 'https://picsum.photos/seed/fintech/600/400',
    description: 'Dashboard financiero empresarial con análisis en tiempo real, gestión de portfolios de inversión, reportes automáticos y alertas inteligentes.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'WebSockets', 'D3.js'],
    year: '2025',
    result: 'Reducción del 60% en tiempo de reporte financiero',
    challenge: 'Manejar grandes volúmenes de datos financieros en tiempo real con visualizaciones complejas.',
  },
  {
    title: 'EcoTravel Platform',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/travel/600/400',
    description: 'Rediseño completo de plataforma de turismo sostenible. Investigación de usuarios, arquitectura de información, sistema de diseño y prototipado interactivo.',
    tags: ['Figma', 'Protopie', 'Design System', 'User Research', 'Usability'],
    year: '2025',
    result: '+45% en tasa de reserva tras el rediseño',
    challenge: 'Simplificar un proceso de búsqueda y reserva muy complejo para usuarios no técnicos.',
  },
  {
    title: 'SmartHome Control',
    category: 'Mobile / React Native',
    image: 'https://picsum.photos/seed/home/600/400',
    description: 'App de domótica para control centralizado de dispositivos IoT del hogar. Control de luces, temperatura, seguridad y consumo energético en tiempo real.',
    tags: ['React Native', 'MQTT', 'IoT', 'AWS IoT Core', 'Redux'],
    year: '2025',
    result: '30% de ahorro energético reportado por los usuarios',
    challenge: 'Comunicación confiable y de baja latencia con cientos de dispositivos IoT heterogéneos.',
  },
  {
    title: 'Logistics AI',
    category: 'Software / Node.js',
    image: 'https://picsum.photos/seed/ai/600/400',
    description: 'Sistema de optimización logística con IA para una empresa de delivery. Optimización de rutas, predicción de demanda y gestión de flota en tiempo real.',
    tags: ['Node.js', 'Python', 'TensorFlow', 'Google Maps API', 'PostgreSQL'],
    year: '2026',
    result: '25% reducción en costos de combustible y 2h menos por ruta',
    challenge: 'Entrenar modelos de ML con datos históricos de rutas para predicción de tráfico y demanda.',
  },
];

const ProjectDetailModal = ({ project, onClose, onContact }: {
  project: typeof projects[0] | null;
  onClose: () => void;
  onContact: () => void;
}) => {
  if (!project) return null;

  return (
    <Modal isOpen={!!project} onClose={onClose} size="lg">
      <div>
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1120] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        <div className="px-8 py-6">
          {/* Title + meta */}
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-syne font-bold text-text-primary">{project.title}</h2>
            <div className="flex items-center gap-1.5 text-text-primary/40 text-xs mt-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </div>
          </div>

          <p className="text-text-primary/60 text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Challenge */}
          <div className="mb-6 p-4 rounded-2xl bg-bg-secondary/30 border border-bg-secondary">
            <h4 className="text-xs font-black uppercase tracking-widest text-text-primary/40 mb-2">🎯 Desafío</h4>
            <p className="text-sm text-text-primary/60">{project.challenge}</p>
          </div>

          {/* Result */}
          <div className="mb-6 p-4 rounded-2xl bg-accent/5 border border-accent/20">
            <h4 className="text-xs font-black uppercase tracking-widest text-accent/60 mb-2">✅ Resultado</h4>
            <p className="text-sm text-accent font-semibold">{project.result}</p>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-text-primary/40 mb-3 flex items-center gap-2">
              <Tag className="w-3 h-3" /> Stack tecnológico
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-bg-secondary text-text-primary/60 border border-bg-secondary/80 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContact}
            className="w-full py-4 rounded-xl bg-accent text-bg-primary font-bold flex items-center justify-center gap-2 hover:glow-orange-hover transition-all"
          >
            Quiero un proyecto similar <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </Modal>
  );
};

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const handleContact = () => {
    setSelectedProject(null);
    setTimeout(() => setProjectModalOpen(true), 150);
  };

  return (
    <section id="portafolio" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">Portafolio</h2>
            <p className="text-text-primary/60 max-w-xl">Una muestra de los productos digitales que hemos construido con pasión y precisión.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setProjectModalOpen(true)}
            className="text-accent font-bold flex items-center gap-2 group px-6 py-3 rounded-xl border border-accent/20 hover:bg-accent/5 transition-all"
          >
            Ver todos los proyectos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-3xl bg-bg-secondary aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2">{project.category}</span>
                <h4 className="text-2xl font-syne font-bold text-text-primary mb-2">{project.title}</h4>
                <span className="text-text-primary/50 text-xs flex items-center gap-1">
                  Click para ver detalles <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContact={handleContact}
      />

      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
    </section>
  );
};
