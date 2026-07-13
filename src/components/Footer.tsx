import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { PrivacyModal } from "./PrivacyModal";
import { TermsModal } from "./TermsModal";
import { Reveal } from "./Reveal";

const navLinks = [
  { label: "Servicios",          href: "#servicios" },
  { label: "Nosotros",           href: "#nosotros" },
  { label: "Portafolio",         href: "#portafolio" },
  { label: "¿Cómo lo hacemos?",  href: "#como-lo-hacemos" },
  { label: "Contacto",           href: "#contacto" },
];

export const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen]   = useState(false);

  return (
    <>
      <footer className="relative overflow-hidden" style={{
        backgroundImage: 'url(./assets/backgrounds/bgfooter.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Overlay de color */}
        <div className="absolute inset-0 bg-gray-900/88 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">

          <Reveal direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 pb-12 border-b border-gray-800">

            {/* Brand */}
            <div>
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="flex items-center gap-2.5 mb-5"
              >
                <img src="./assets/brand/logo.webp" alt="IDEATEC" loading="lazy" decoding="async" width="36" height="36" className="w-9 h-9" />
                <span
                  className="text-[22px] font-black leading-none tracking-tight"
                >
                  <span className="text-orange-500">IDEA</span>
                  <span className="text-white">TEC</span>
                </span>
              </a>
              <p className="text-sm text-gray-200 leading-relaxed mb-4 max-w-xs">
                Transformamos ideas en soluciones digitales de alto impacto para empresas que quieren crecer.
              </p>
              <div className="flex flex-col gap-1 text-xs text-gray-300">
                <span>IDEATEC SAC · RUC 20601841038</span>
                <span>Empresa 100% peruana · Desde 2016</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-200 mb-5">Navegación</p>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm text-gray-300 hover:text-orange-400 transition-colors w-fit">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-200 mb-5">Contacto</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Av. Petit Thouras 1775, Int. 501<br />
                    Lince, Lima — Perú
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <a href="mailto:info@ideatec.com.pe" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                    info@ideatec.com.pe
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <a href="tel:+51912903330" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                    +51 912 903 330
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © 2026 IDEATEC SAC · Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-gray-400 font-semibold uppercase tracking-widest">
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-orange-400 transition-colors cursor-pointer">
                Privacidad
              </button>
              <button onClick={() => setTermsOpen(true)} className="hover:text-orange-400 transition-colors cursor-pointer">
                Términos
              </button>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal   isOpen={termsOpen}   onClose={() => setTermsOpen(false)} />
    </>
  );
};
