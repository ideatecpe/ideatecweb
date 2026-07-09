import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollStackProps {
  children: React.ReactNode;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="relative w-full flex flex-col items-center gap-12 pb-32">
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          return (
            <ScrollStackItemWrapper 
              key={index} 
              index={index} 
              total={childrenArray.length}
            >
              {child}
            </ScrollStackItemWrapper>
          );
        }
        return child;
      })}
    </div>
  );
};

interface ScrollStackItemWrapperProps {
  children: React.ReactNode;
  index: number;
  total: number;
}

const ScrollStackItemWrapper: React.FC<ScrollStackItemWrapperProps> = ({ children, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the wrapper relative to the viewport
  // offset ["start start", "end start"] tracks the element after it hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale down the card as we scroll past its sticky point
  // Earlier cards in the stack scale down slightly more
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95 - (total - 1 - index) * 0.01]);

  // Cascade sticky offset (e.g. 100px, 132px, 164px...)
  const topOffset = 100 + index * 32; 

  return (
    <div 
      ref={containerRef} 
      className="sticky w-full" 
      style={{ 
        top: `${topOffset}px`,
        zIndex: index + 1,
        paddingBottom: `${(total - 1 - index) * 8}px`
      }}
    >
      <motion.div 
        style={{ scale }} 
        className="w-full origin-top"
      >
        {children}
      </motion.div>
    </div>
  );
};

interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, className = '', style }) => {
  return (
    <div 
      className={`w-full bg-white rounded-[32px] p-8 md:p-12 border border-gray-200/80 shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 ${className}`}
      style={{
        minHeight: '280px',
        ...style
      }}
    >
      <div className="flex flex-col justify-between h-full gap-4">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
