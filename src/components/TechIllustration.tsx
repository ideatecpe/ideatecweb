import React from 'react';
import { motion } from 'motion/react';

export const TechIllustration = () => {
  return (
    <div className="relative w-full aspect-square max-w-125 mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central Core */}
        <motion.circle 
          cx="200" cy="200" r="40" 
          stroke="#F97316" strokeWidth="2" 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="200" cy="200" r="60" 
          stroke="#F97316" strokeWidth="1" strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbiting Nodes */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const x = 200 + 120 * Math.cos((angle * Math.PI) / 180);
          const y = 200 + 120 * Math.sin((angle * Math.PI) / 180);
          return (
            <g key={i}>
              <motion.line 
                x1="200" y1="200" x2={x} y2={y} 
                stroke="#F97316" strokeWidth="1" opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.2 }}
              />
              <motion.circle 
                cx={x} cy={y} r="8" 
                fill="#F97316"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
              <motion.circle 
                cx={x} cy={y} r="15" 
                stroke="#F97316" strokeWidth="1" opacity="0.3"
                animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
            </g>
          );
        })}

        {/* Outer Tech Ring */}
        <motion.path 
          d="M 200 40 A 160 160 0 0 1 360 200" 
          stroke="#F97316" strokeWidth="2" strokeLinecap="round"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }}
        />
        <motion.path 
          d="M 200 360 A 160 160 0 0 1 40 200" 
          stroke="#F97316" strokeWidth="2" strokeLinecap="round" opacity="0.5"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }}
        />

        {/* Floating Code Bits */}
        {[...Array(8)].map((_, i) => (
          <motion.text
            key={i}
            x={100 + Math.random() * 200}
            y={100 + Math.random() * 200}
            fill="#F97316"
            fontSize="10"
            fontFamily="monospace"
            opacity="0.4"
            animate={{ 
              y: [null, -20], 
              opacity: [0, 0.4, 0],
              x: [null, (Math.random() - 0.5) * 20]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
          >
            {['< />', '{ }', '01', 'JS', 'TS', '=>'][i % 6]}
          </motion.text>
        ))}
      </svg>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full -z-10" />
    </div>
  );
};
