"use client";

import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedWrapper = ({ children, className, delay = 0 }: AnimatedWrapperProps) => {
  const [containerRef, isVisible] = useAnimateOnScroll({
    threshold: 0.1,
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        'transition-all duration-500 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;