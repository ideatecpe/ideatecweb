import React from 'react';
import { motion } from 'motion/react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up:    { y: 28 },
  down:  { y: -28 },
  left:  { x: 28 },
  right: { x: -28 },
  none:  {},
};

interface RevealProps {
  children: React.ReactNode;
  /** Dirección desde la que entra el contenido */
  direction?: Direction;
  /** Retraso en segundos (útil para escalonar elementos) */
  delay?: number;
  /** Duración en segundos */
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Margen para disparar antes/después de entrar al viewport */
  amount?: number;
}

/**
 * Contenedor reutilizable que revela su contenido con una animación
 * de aparición (fade + desplazamiento) cuando entra en el viewport al
 * hacer scroll. Se anima una sola vez.
 */
export const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  className,
  style,
  amount = 0.2,
}: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, ...offsets[direction] }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, amount }}
    transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);
