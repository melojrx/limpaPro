import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { cn } from '@/lib/utils';
import React from 'react';

type Direction = 'up' | 'left' | 'right' | 'fade';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const hiddenClasses: Record<Direction, string> = {
  up:    'opacity-0 translate-y-8',
  left:  'opacity-0 -translate-x-8',
  right: 'opacity-0 translate-x-8',
  fade:  'opacity-0',
};

const AnimatedWrapper = ({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedWrapperProps) => {
  const [containerRef, isVisible] = useAnimateOnScroll({ threshold: 0.12 });

  return (
    <div
      ref={containerRef}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenClasses[direction],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
