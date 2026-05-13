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
      <div className="bg-bg-primary">
        {/* Image Header */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
          <div className="absolute bottom-6 left-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </div>

        <div className="px-8 md:px-12 py-10">
          {/* Title + meta */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-4xl font-black text-text-primary leading-tight">{project.title}</h2>
            <div className="flex items-center gap-2 text-text-secondary text-sm font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/5">
              <Calendar className="w-4 h-4 text-accent" />
              Proyecto {project.year}
            </div>
          </div>

          <p className="text-xl text-text-secondary leading-relaxed mb-10">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Challenge */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5 group hover:border-white/10 transition-colors">
              <h4 className="text-xs font-black uppercase tracking-widest text-text-primary/40 mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-accent" /> El Desafío
              </h4>
              <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
            </div>

            {/* Result */}
            <div className="p-6 rounded-3xl bg-accent/5 border border-accent/10 group hover:border-accent/20 transition-colors">
              <h4 className="text-xs font-black uppercase tracking-widest text-accent/60 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Impacto Real
              </h4>
              <p className="text-text-primary font-bold leading-relaxed">{project.result}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h4 className="text-xs font-black uppercase tracking-widest text-text-primary/40 mb-5 flex items-center gap-2">
              <Tag className="w-4 h-4" /> Tecnologías Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-text-primary hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContact}
            className="w-full py-5 rounded-2xl bg-accent text-bg-primary font-black text-lg flex items-center justify-center gap-3 shadow-xl glow-accent-hover transition-all"
          >
            Quiero un proyecto similar <ArrowRight className="w-6 h-6" />
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
    <section id="portafolio" className="py-32 bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 -left-20 w-[40rem] h-[40rem] bg-accent-secondary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-accent mb-6 px-4 py-2 rounded-full border border-accent/20 bg-accent/5"
            >
              Casos de Éxito
            </motion.span>
            <h2 className="mb-6 font-black leading-tight">Nuestros Proyectos.</h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              Debido a acuerdos de confidencialidad (NDA), la mayoría de nuestros desarrollos son privados. 
              Aquí presentamos algunos de nuestros casos de éxito públicos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-[2.5rem] bg-bg-secondary aspect-[16/10] lg:aspect-auto lg:h-[500px] cursor-pointer shadow-2xl border border-white/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
                <span className="text-accent text-xs font-black tracking-[0.2em] uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h4 className="text-4xl md:text-5xl font-black text-text-primary mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h4>
                <p className="text-text-secondary text-lg max-w-lg mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 hidden md:block">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  Ver caso de estudio <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
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

