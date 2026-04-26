import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, X, Calendar, Tag, Target, CheckCircle2 } from 'lucide-react';
import { Modal } from './Modal';
import { ProjectModal } from './ProjectModal';

const projects = [
  {
    title: 'FactuNet',
    category: 'Software / Web',
    image: './assets/factunet.png',
    description: 'Sistema integral de facturación electrónica adaptado 100% a las normativas de SUNAT en Perú. Permite la emisión de boletas, facturas, notas de crédito y débito de manera rápida, segura y desde cualquier dispositivo.',
    tags: ['React', 'ASP.NET', 'MySQL', 'SUNAT API', 'Digital Ocean', 'Docker'],
    year: '2024',
    result: '+500 empresas gestionando su facturación con éxito',
    challenge: 'Integración en tiempo real con los servicios de SUNAT y procesamiento masivo de comprobantes electrónicos con validación inmediata.',
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
          <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        <div className="px-8 py-6">
          {/* Title + meta */}
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-sans font-bold text-text-primary">{project.title}</h2>
            <div className="flex items-center gap-1.5 text-text-primary/40 text-xs mt-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </div>
          </div>

          <p className="text-text-primary/60 text-sm leading-relaxed mb-6">{project.description}</p>

          {/* Challenge */}
          <div className="mb-6 p-4 rounded-2xl bg-bg-secondary/50 dark:bg-bg-secondary/30 border border-bg-secondary">
            <h4 className="text-xs font-black uppercase tracking-widest text-text-primary/40 mb-2 flex items-center gap-2">
              <Target className="w-3.5 h-3.5" /> Desafío
            </h4>
            <p className="text-sm text-text-primary/60">{project.challenge}</p>
          </div>

          {/* Result */}
          <div className="mb-6 p-4 rounded-2xl bg-accent/5 border border-accent/20">
            <h4 className="text-xs font-black uppercase tracking-widest text-accent/60 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" /> Resultado
            </h4>
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
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">Portafolio</h2>
            <p className="text-text-primary/60 max-w-2xl">
              Debido a acuerdos de confidencialidad (NDA), la mayoría de nuestros proyectos son privados. 
              Respetamos la propiedad intelectual de nuestros clientes, por lo que aquí solo mostramos 
              nuestros desarrollos de carácter público.
            </p>
          </div>
    
        </div>
        <div className="max-w-3xl ">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-2xl bg-bg-secondary aspect-video cursor-pointer shadow-2xl border border-text-primary/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-3xl h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-primary/95 via-bg-primary/50 to-transparent dark:from-bg-primary dark:via-bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2">{project.category}</span>
                <h4 className="text-3xl md:text-4xl font-sans font-bold text-text-primary mb-4">{project.title}</h4>
                <p className="text-text-primary/90 dark:text-text-primary/70 max-w-lg mb-6 hidden md:block">
                  {project.description}
                </p>
                <span className="text-text-primary/70 dark:text-text-primary/50 text-sm flex items-center gap-2">
                  Click para ver detalles del caso de éxito <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              
              {/* Overlay for mobile that shows title always or similar? No, keep it clean */}
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
