'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Magnet } from 'lucide-react';
import { motion, useAnimation } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

interface AttractButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly particleCount?: number;
  readonly attractRadius?: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function AttractButton({
  className,
  particleCount = 12,
  attractRadius = 50,
  ...props
}: AttractButtonProps) {
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesControl = useAnimation();

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = attractRadius * (0.7 + Math.random() * 0.3);
      return {
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });
    setParticles(newParticles);
  }, [particleCount, attractRadius]);

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true);
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
      },
    });
  }, [particlesControl]);

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false);
    await particlesControl.start((i) => ({
      x: particles[i].x,
      y: particles[i].y,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    }));
  }, [particlesControl, particles]);

  return (
    <Button
      className={cn(
        'min-w-40 relative touch-none',
        'bg-primary/10 hover:bg-primary/20',
        'text-primary border border-primary/30',
        'transition-all duration-300',
        className,
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          custom={particle.id}
          initial={{ x: particle.x, y: particle.y }}
          animate={particlesControl}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          className={cn(
            'absolute w-1.5 h-1.5 rounded-full',
            'bg-primary',
            'transition-opacity duration-300',
            isAttracting ? 'opacity-100' : 'opacity-40',
          )}
        />
      ))}
      <span className="relative w-full flex items-center justify-center gap-2">
        <Magnet
          className={cn(
            'w-4 h-4 transition-transform duration-300',
            isAttracting && 'scale-110',
          )}
        />
        {isAttracting ? 'Attracting' : 'Hover me'}
      </span>
    </Button>
  );
}

