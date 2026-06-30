import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Calendar, 
  Tag, 
  Target, 
  CheckCircle2, 
  ExternalLink,
  Search,
  FileText,
  ShieldCheck,
  Send,
  FileDown,
  Printer,
  Layers,
  Users
} from 'lucide-react';
import { Modal } from './Modal';
import { ProjectModal } from './ProjectModal';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-4.5 h-4.5" />,
  FileText: <FileText className="w-4.5 h-4.5" />,
  ShieldCheck: <ShieldCheck className="w-4.5 h-4.5" />,
  Send: <Send className="w-4.5 h-4.5" />,
  FileDown: <FileDown className="w-4.5 h-4.5" />,
  Printer: <Printer className="w-4.5 h-4.5" />,
  Layers: <Layers className="w-4.5 h-4.5" />,
  Users: <Users className="w-4.5 h-4.5" />
};

const projects = [
  {
    title: 'FactuFly',
    category: 'Software / Web',
    image: './assets/portfolio/alldispositivos-factufly.png',
    images: [
      {
        url: './assets/portfolio/alldispositivos-factufly.png',
        badge: 'Software / Web Multidispositivo',
        caption: 'Plataforma 100% responsiva y adaptativa, diseñada para funcionar perfectamente en PC, tablet y smartphones.'
      },
      {
        url: './assets/portfolio/ipad-pro-factufly.png',
        badge: 'Software / Web (Emisión en iPad)',
        caption: 'Demostración de la interfaz intuitiva para emitir y gestionar boletas o facturas rápidamente desde una tablet.'
      },
      {
        url: './assets/portfolio/ticketerafactufly.png',
        badge: 'Software / Web (Impresión Física)',
        caption: 'Compatibilidad e impresión optimizada de comprobantes de pago mediante ticketeras térmicas.'
      }
    ],
    link: 'https://factufly.ideatec.com.pe/',
    description: 'Sistema integral de facturación electrónica multisucursal adaptado 100% a las normativas de SUNAT en Perú. Permite la emisión ágil de boletas, facturas, notas de crédito, notas de débito y guías de remisión de manera rápida, segura y desde cualquier dispositivo.',
    tags: ['React', 'ASP.NET', 'MySQL', 'SUNAT API', 'Consulta RUC/DNI', 'Multi-sucursal', 'WhatsApp API'],
    year: '2025',
    result: 'Muchas empresas ya usan este sistema en su día a día y se encuentran totalmente satisfechas.',
    challenge: 'Integración en tiempo real con SUNAT, consulta automatizada de datos por DNI/RUC a través de API y envío masivo automatizado de comprobantes por correo y WhatsApp.',
    features: [
      {
        icon: 'Search',
        title: 'Consulta RUC/DNI',
        description: 'Conexión con API para buscar clientes y autocompletar sus datos automáticamente al instante.'
      },
      {
        icon: 'FileText',
        title: 'Documentos SUNAT',
        description: 'Emisión rápida de boletas, facturas, notas de crédito, notas de débito y guías de remisión.'
      },
      {
        icon: 'ShieldCheck',
        title: 'Estado del Comprobante',
        description: 'Conexión directa con SUNAT para visualizar e informar sobre los estados de cada comprobante.'
      },
      {
        icon: 'Send',
        title: 'Envío por WhatsApp y Email',
        description: 'Envío automático y directo de comprobantes y comprobantes de pago digitales a los clientes.'
      },
      {
        icon: 'FileDown',
        title: 'Reportes en PDF y Excel',
        description: 'Generación avanzada y descarga de reportes contables, ventas y cierres de caja.'
      },
      {
        icon: 'Printer',
        title: 'Impresión en Ticketera',
        description: 'Soporte y formatos optimizados para impresión en ticket, ticketeras térmicas y hojas tradicionales.'
      },
      {
        icon: 'Layers',
        title: 'Soporte Multi-sucursal',
        description: 'Gestión y control unificado de múltiples sucursales y puntos de venta desde un solo panel.'
      },
      {
        icon: 'Users',
        title: 'Clientes y Productos',
        description: 'Módulos dedicados para gestión del catálogo de productos, stock, precios e historial de clientes.'
      }
    ]
  },
];

export const Portfolio = () => {
  const project = projects[0];
  const [activeImage, setActiveImage] = useState(project.images[0]);
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <section id="portafolio" className="bg-white border-b border-gray-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-14 gap-8">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-600 border-l-4 border-orange-500 pl-3 mb-4">
              Casos de Éxito
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">Nuestros Proyectos.</h2>
          </div>
        </div>

        {/* Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Image Viewer (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Main Image View */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center shadow-md">
              <motion.img 
                key={activeImage.url}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={activeImage.url} 
                alt={project.title} 
                className="w-full h-full object-contain md:object-cover" 
              />
            </div>

            {/* Image Description Box (Outside to prevent obstruction) */}
            <div className="p-4.5 bg-gray-50 border border-gray-200/60 rounded-2xl space-y-2">
              <div className="flex items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-700 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-md">
                  {activeImage.badge}
                </span>
              </div>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                {activeImage.caption}
              </p>
            </div>

            {/* Thumbnail Selector */}
            <div className="flex gap-3 overflow-x-auto py-2 custom-scroll">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                    activeImage.url === img.url 
                      ? 'border-orange-500 scale-102 ring-2 ring-orange-500/20 shadow-md' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img.url} alt={`${project.title} vista ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Title, Description, and Actions (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-xs font-bold text-orange-600 uppercase tracking-wide">
                  {project.category}
                </span>
                <span className="text-gray-400 text-sm">|</span>
                <span className="text-gray-500 text-sm font-semibold flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-orange-500" /> Año {project.year}
                </span>
              </div>
              <h3 className="text-4xl font-black text-gray-900 tracking-tight mb-4">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base mb-6">{project.description}</p>
            </div>

            {/* Target and Real Impact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-orange-500" /> El Desafío
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">{project.challenge}</p>
              </div>
              <div className="p-5 rounded-2xl bg-orange-50/50 border border-orange-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" /> Impacto Real
                </h4>
                <p className="text-xs text-gray-800 font-bold leading-relaxed">{project.result}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl border-2 border-orange-600 text-orange-600 font-bold flex items-center justify-center gap-2 hover:bg-orange-50/50 active:bg-orange-50 transition-colors text-sm cursor-pointer shadow-sm hover:shadow"
              >
                Visitar Sitio Web <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setProjectOpen(true)}
                className="flex-1 py-3.5 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-orange-700 active:bg-orange-800 transition-colors text-sm cursor-pointer shadow-md hover:shadow-lg"
              >
                Quiero un proyecto similar <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Section: Features Grid */}
        <div className="border-t border-gray-100 pt-16 mb-16">
          <div className="mb-10 text-center lg:text-left">
            <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center justify-center lg:justify-start gap-2">
              <Layers className="w-5 h-5 text-orange-500" /> Características Principales del Sistema
            </h4>
            <p className="text-gray-500 text-sm max-w-xl">
              Diseñamos e implementamos una plataforma robusta que resuelve de extremo a extremo las necesidades de facturación y comercio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex flex-col gap-3 p-5 rounded-2xl bg-gray-50/50 border border-gray-100 hover:border-orange-200 hover:bg-orange-50/10 transition-all duration-300 hover:shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-orange-100/50 text-orange-600 w-fit">
                  {iconMap[feature.icon] || <CheckCircle2 className="w-5 h-5" />}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-gray-800 mb-1">{feature.title}</h5>
                  <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Technologies used */}
        <div className="border-t border-gray-100 pt-10 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Stack Tecnológico</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

      <ProjectModal isOpen={projectOpen} onClose={() => setProjectOpen(false)} />
    </section>
  );
};
