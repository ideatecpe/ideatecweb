import React from 'react';
import { Modal } from './Modal';
import { Shield, Eye, Lock, Database, Bell, UserCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Section = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
        <Icon className="w-4 h-4 text-orange-600" />
      </div>
      <h3 className="font-sans font-bold text-gray-900 text-base">{title}</h3>
    </div>
    <div className="text-sm text-gray-500 leading-relaxed pl-11 space-y-2">{children}</div>
  </div>
);

export const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Política de Privacidad" size="lg">
      <div className="px-8 py-6 bg-white">
        <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-orange-50/50 border border-orange-100">
          <Shield className="w-5 h-5 text-orange-600 shrink-0" />
          <p className="text-sm text-gray-600">
            En <span className="text-orange-600 font-bold">IDEATEC</span>, tu privacidad es una prioridad. Esta política explica cómo recopilamos, usamos y protegemos tu información.
          </p>
        </div>

        <p className="text-xs text-gray-400 mb-6">Última actualización: Abril 2026</p>

        <Section icon={Eye} title="Información que Recopilamos">
          <p>Recopilamos información que tú nos proporcionas directamente, como:</p>
          <ul className="list-inside list-disc space-y-1 mt-2">
            <li>Nombre completo y datos de contacto (correo, teléfono)</li>
            <li>Información de tu empresa o negocio</li>
            <li>Descripción y requerimientos de los proyectos</li>
            <li>Datos de pago procesados de forma segura por terceros</li>
          </ul>
          <p className="mt-2">También recopilamos datos automáticos como dirección IP, tipo de navegador y páginas visitadas mediante cookies de análisis.</p>
        </Section>

        <Section icon={Database} title="Uso de tu Información">
          <p>Utilizamos tu información exclusivamente para:</p>
          <ul className="list-inside list-disc space-y-1 mt-2">
            <li>Comunicarnos contigo sobre los servicios solicitados</li>
            <li>Elaborar propuestas y presupuestos personalizados</li>
            <li>Gestionar y ejecutar los proyectos contratados</li>
            <li>Enviar actualizaciones del proyecto o novedades relevantes</li>
            <li>Mejorar nuestros servicios y experiencia de usuario</li>
          </ul>
          <p className="mt-2">Nunca vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales.</p>
        </Section>

        <Section icon={Lock} title="Seguridad de los Datos">
          <p>Implementamos medidas técnicas y organizativas para proteger tus datos:</p>
          <ul className="list-inside list-disc space-y-1 mt-2">
            <li>Cifrado SSL/TLS en todas las comunicaciones</li>
            <li>Acceso restringido a la información solo al personal autorizado</li>
            <li>Almacenamiento seguro en servidores certificados</li>
            <li>Revisiones periódicas de seguridad</li>
          </ul>
        </Section>

        <Section icon={Bell} title="Cookies y Tecnologías de Seguimiento">
          <p>Utilizamos cookies para:</p>
          <ul className="list-inside list-disc space-y-1 mt-2">
            <li><span className="font-semibold text-gray-800">Cookies esenciales:</span> Para el funcionamiento básico del sitio</li>
            <li><span className="font-semibold text-gray-800">Cookies analíticas:</span> Para entender cómo se usa el sitio (Google Analytics)</li>
          </ul>
          <p className="mt-2">Puedes desactivar las cookies desde la configuración de tu navegador, aunque esto puede afectar la experiencia.</p>
        </Section>

        <Section icon={UserCheck} title="Tus Derechos">
          <p>Tienes derecho a:</p>
          <ul className="list-inside list-disc space-y-1 mt-2">
            <li>Acceder, corregir o eliminar tus datos personales</li>
            <li>Oponerte al tratamiento de tus datos con fines de marketing</li>
            <li>Solicitar la portabilidad de tus datos</li>
            <li>Retirar tu consentimiento en cualquier momento</li>
          </ul>
          <p className="mt-2">Para ejercer estos derechos, contáctanos en <span className="text-orange-600 font-semibold">info@ideatec.com.pe</span></p>
        </Section>

        <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-400 text-center">
          Esta política puede actualizarse periódicamente. Te notificaremos de cambios importantes por correo electrónico.
        </div>
      </div>
    </Modal>
  );
};
