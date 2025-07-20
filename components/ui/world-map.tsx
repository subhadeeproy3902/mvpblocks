'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import DottedMap from 'dotted-map';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from 'next-themes';

interface MapProps {
  dots?: Array<{
    start: {
      lat: number;
      lng: number;
      label?: string;
      avatar?: string;
      fallback?: string;
    };
    end: {
      lat: number;
      lng: number;
      label?: string;
      avatar?: string;
      fallback?: string;
    };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = '#0ea5e9',
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: 'diagonal' });

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === 'dark' ? '#FFFFFF40' : '#00000040',
    shape: 'circle',
    backgroundColor: theme === 'dark' ? 'bg-[#0B0A09]' : 'white',
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="relative aspect-[2/1] w-full rounded-lg font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="pointer-events-none h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 0.3 * i,
                  ease: 'easeInOut',
                  times: [0, 0.4, 0.6, 1],
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
              <foreignObject
                x={projectPoint(dot.start.lat, dot.start.lng).x - 12}
                y={projectPoint(dot.start.lat, dot.start.lng).y - 12}
                width="24"
                height="24"
              >
                <div className="h-6 w-6">
                  <Avatar className="h-6 w-6 border-2 border-white shadow-md dark:border-gray-800">
                    <AvatarImage
                      src={dot.start.avatar || '/placeholder.svg'}
                      alt="Avatar"
                    />
                    <AvatarFallback className="bg-rose-100 text-[8px] text-rose-800 dark:bg-rose-900 dark:text-rose-200"></AvatarFallback>
                  </Avatar>
                </div>
              </foreignObject>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
              <foreignObject
                x={projectPoint(dot.end.lat, dot.end.lng).x - 12}
                y={projectPoint(dot.end.lat, dot.end.lng).y - 12}
                width="24"
                height="24"
              >
                <div className="h-6 w-6">
                  <Avatar className="h-6 w-6 border-2 border-white shadow-md dark:border-gray-800">
                    <AvatarImage
                      src={dot.end.avatar || '/placeholder.svg'}
                      alt="Avatar"
                    />
                    <AvatarFallback className="bg-rose-100 text-[8px] text-rose-800 dark:bg-rose-900 dark:text-rose-200"></AvatarFallback>
                  </Avatar>
                </div>
              </foreignObject>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
