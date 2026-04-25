import React from 'react';
import { Modal } from './Modal';
import { FileText, AlertTriangle, CreditCard, RefreshCw, Scale, MessageCircle } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Section = ({ icon: Icon, title, children, number }: { icon: any; title: string; children: React.ReactNode; number: number }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-accent" />
      </div>
      <h3 className="font-syne font-bold text-text-primary text-base">
        <span className="text-accent/50 text-sm mr-2">0{number}.</span>
        {title}
      </h3>
    </div>
    <div className="text-sm text-text-primary/60 leading-relaxed pl-11 space-y-2">{children}</div>
  </div>
);

export const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Términos y Condiciones" size="lg">
      <div className="px-8 py-6">
        <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-accent/5 border border-accent/10">
          <FileText className="w-5 h-5 text-accent shrink-0" />
          <p className="text-sm text-text-primary/70">
            Al contratar nuestros servicios, aceptas los siguientes términos y condiciones de <span className="text-accent font-bold">IDEATEC</span>.
          </p>
        </div>

        <p className="text-xs text-text-primary/30 mb-6">Vigentes desde: Enero 2025 · Última revisión: Abril 2026</p>

        <Section icon={FileText} title="Descripción del Servicio" number={1}>
          <p>IDEATEC ofrece servicios de desarrollo de software, diseño web, aplicaciones móviles, consultoría tecnológica y servicios digitales relacionados.</p>
          <p>Cada proyecto se rige por un contrato o acuerdo de servicio específico que detalla el alcance, plazos y condiciones particulares. Estos términos generales aplican como marco base para todos los servicios.</p>
        </Section>

        <Section icon={CreditCard} title="Pagos y Facturación" number={2}>
          <p>Nuestros honorarios se establecen por acuerdo previo y pueden variar según la complejidad del proyecto. El esquema general de pago es:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><span className="font-semibold text-text-primary/80">50%</span> al inicio del proyecto (arranque)</li>
            <li><span className="font-semibold text-text-primary/80">30%</span> al completar el 60% del desarrollo</li>
            <li><span className="font-semibold text-text-primary/80">20%</span> al entregar la versión final</li>
          </ul>
          <p className="mt-2">Los pagos pueden realizarse mediante transferencia bancaria, PayPal, Yape o acuerdo específico. Las facturas no pagadas generan intereses del 2% mensual.</p>
        </Section>

        <Section icon={RefreshCw} title="Revisiones y Cambios de Alcance" number={3}>
          <p>Cada proyecto incluye un número acordado de rondas de revisión. Los cambios que excedan el alcance original serán presupuestados y aprobados por el cliente antes de implementarse.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Cambios menores (menos de 2h de trabajo): se gestionan sin costo adicional</li>
            <li>Cambios mayores: requieren cotización aprobada por escrito</li>
            <li>Cambios de alcance significativos pueden afectar los plazos de entrega</li>
          </ul>
        </Section>

        <Section icon={Scale} title="Propiedad Intelectual" number={4}>
          <p>Una vez completado el pago total del proyecto, el cliente recibe todos los derechos de propiedad intelectual sobre el producto desarrollado, incluyendo código fuente, diseños y activos digitales.</p>
          <p className="mt-2">IDEATEC se reserva el derecho de incluir el proyecto en su portafolio de referencia, salvo que el cliente solicite confidencialidad por escrito.</p>
          <p className="mt-2">Las bibliotecas y herramientas de terceros utilizadas mantienen sus licencias originales (open-source, comerciales, etc.).</p>
        </Section>

        <Section icon={AlertTriangle} title="Garantías y Limitaciones" number={5}>
          <p>IDEATEC garantiza que el software entregado funcionará según las especificaciones acordadas. El periodo de garantía post-entrega es de 30 días para bugs directamente relacionados con el desarrollo.</p>
          <p className="mt-2">No nos hacemos responsables por:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Interrupciones de servicio de terceros (hosting, APIs externas)</li>
            <li>Pérdida de datos por mala gestión del cliente</li>
            <li>Problemas de compatibilidad con software no especificado en el alcance</li>
            <li>Daños indirectos o pérdida de ingresos</li>
          </ul>
        </Section>

        <Section icon={MessageCircle} title="Confidencialidad y Comunicación" number={6}>
          <p>Ambas partes acuerdan mantener confidencial cualquier información sensible intercambiada durante la relación comercial. Esto incluye datos de negocio, estrategias, código propietario y cualquier información marcada como confidencial.</p>
          <p className="mt-2">La comunicación oficial del proyecto se realiza mediante:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Correo electrónico: info@ideatec.com.pe</li>
            <li>WhatsApp: +51 912 903 330</li>
            <li>Reuniones virtuales coordinadas previamente</li>
          </ul>
        </Section>

        <div className="mt-6 pt-6 border-t border-bg-secondary/50 space-y-2">
          <p className="text-xs text-text-primary/30 text-center">
            Estos términos se rigen por la legislación de la República del Perú. Cualquier disputa se resolverá en los tribunales de Lima.
          </p>
          <p className="text-xs text-text-primary/30 text-center">
            Para consultas sobre estos términos: <span className="text-accent">info@ideatec.com.pe</span>
          </p>
        </div>
      </div>
    </Modal>
  );
};
