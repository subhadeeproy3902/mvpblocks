'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

export interface MagicTrailProps {
  className?: string;
  colors?: string[];
  particleCount?: number;
  trailLength?: number;
  decay?: number;
  smoothing?: number;
  containerRef?: React.RefObject<HTMLElement | null>;
}

export function MagicTrail({
  className,
  colors = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981'],
  particleCount = 50,
  trailLength = 35,
  decay = 0.03,
  smoothing = 0.65,
  containerRef,
}: MagicTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<
    Array<{ x: number; y: number; age: number; color: string }>
  >([]);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const colorIndex = useRef(0);
  const lastAddTime = useRef(0);
  const isPointerInBounds = useRef(true);

  const createParticle = (x: number, y: number, color: string) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      color,
      size: Math.random() * 3 + 1,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef?.current || canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if the pointer is within bounds
      isPointerInBounds.current =
        x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      if (isPointerInBounds.current) {
        targetPos.current = { x, y };
      }
    };

    const handleMouseLeave = () => {
      isPointerInBounds.current = false;
    };

    const addPoint = () => {
      if (!isPointerInBounds.current) {
        return;
      }

      const now = performance.now();
      const timeDiff = now - lastAddTime.current;

      mousePos.current.x +=
        (targetPos.current.x - mousePos.current.x) * smoothing;
      mousePos.current.y +=
        (targetPos.current.y - mousePos.current.y) * smoothing;

      const lastPoint = points.current[points.current.length - 1];
      const distance = lastPoint
        ? Math.hypot(
            mousePos.current.x - lastPoint.x,
            mousePos.current.y - lastPoint.y,
          )
        : Infinity;

      if (distance > 2 || timeDiff > 16) {
        const currentColor = colors[colorIndex.current];

        points.current.push({
          x: mousePos.current.x,
          y: mousePos.current.y,
          age: 0,
          color: currentColor,
        });

        // Add particles at the current point
        for (let i = 0; i < 3; i++) {
          particles.current.push(
            createParticle(
              mousePos.current.x,
              mousePos.current.y,
              currentColor,
            ),
          );
        }

        if (distance > 10) {
          colorIndex.current = (colorIndex.current + 1) % colors.length;
        }

        lastAddTime.current = now;

        if (points.current.length > trailLength) {
          points.current.shift();
        }

        // Limit total particles
        if (particles.current.length > particleCount) {
          particles.current = particles.current.slice(-particleCount);
        }
      }
    };

    const drawSparkle = (x: number, y: number, size: number, color: string) => {
      const opacity = Math.random() * 0.5 + 0.5;
      ctx.strokeStyle = `${color}${Math.floor(opacity * 255)
        .toString(16)
        .padStart(2, '0')}`;
      ctx.lineWidth = size * 0.5;

      // Draw a star shape
      for (let i = 0; i < 4; i++) {
        const angle = (Math.PI / 2) * i;
        ctx.beginPath();
        ctx.moveTo(x - Math.cos(angle) * size, y - Math.sin(angle) * size);
        ctx.lineTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      addPoint();

      // Draw main trail with glow
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 15;

      for (let i = 1; i < points.current.length; i++) {
        const point = points.current[i];
        const prevPoint = points.current[i - 1];
        const opacity = Math.max(1 - point.age, 0);
        const size = Math.max(4 * (1 - point.age), 0);

        ctx.shadowColor = point.color;
        const gradient = ctx.createLinearGradient(
          prevPoint.x,
          prevPoint.y,
          point.x,
          point.y,
        );

        const prevOpacity = Math.max(1 - prevPoint.age, 0);
        gradient.addColorStop(
          0,
          `${prevPoint.color}${Math.floor(prevOpacity * 255)
            .toString(16)
            .padStart(2, '0')}`,
        );
        gradient.addColorStop(
          1,
          `${point.color}${Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, '0')}`,
        );

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = size;
        ctx.moveTo(prevPoint.x, prevPoint.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
      }

      // Update and draw particles
      ctx.shadowBlur = 0;
      particles.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.05; // Gravity effect
        particle.life -= 0.02;

        if (particle.life > 0) {
          const opacity = particle.life;
          drawSparkle(
            particle.x,
            particle.y,
            particle.size * opacity,
            particle.color,
          );
        }
      });

      // Remove dead particles
      particles.current = particles.current.filter((p) => p.life > 0);

      // Age points
      points.current.forEach((point) => {
        point.age += decay;
      });
      points.current = points.current.filter((point) => point.age < 1);

      animationFrameId.current = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [colors, trailLength, decay, smoothing, particleCount, containerRef]);

  return (
    <div
      className={cn('pointer-events-none absolute inset-0', className)}
      style={{ width: '100%', height: '100%' }}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  );
}
