'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Beam = () => {
  return (
    <>
      <svg
        width="300"
        height="150"
        viewBox="0 0 300 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-16 left-24 mt-8 ml-24 hidden xl:block"
      >
        <path
          d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
          stroke="url(#grad1)"
          strokeWidth={1.5}
        />
        <defs>
          <motion.linearGradient
            variants={{
              initial: {
                x1: '40%',
                x2: '50%',
                y1: '160%',
                y2: '180%',
              },
              animate: {
                x1: '0%',
                x2: '10%',
                y1: '-40%',
                y2: '-20%',
              },
            }}
            animate="animate"
            initial="initial"
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              repeatDelay: 2,
            }}
            id="grad1"
          >
            <stop stopColor="#e60a64" stopOpacity="0" />
            <stop stopColor="#e60a64" />
            <stop offset="0.325" stopColor="#e60a64" />
            <stop offset="1" stopColor="#e60a64" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
      <svg
        width="300"
        height="150"
        viewBox="0 0 300 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-16 right-24 mt-8 mr-24 hidden -scale-x-100 xl:block"
      >
        <path
          d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
          stroke="url(#grad1)"
          strokeWidth={1.5}
        />
        <defs>
          <motion.linearGradient
            variants={{
              initial: {
                x1: '40%',
                x2: '50%',
                y1: '160%',
                y2: '180%',
              },
              animate: {
                x1: '0%',
                x2: '10%',
                y1: '-40%',
                y2: '-20%',
              },
            }}
            animate="animate"
            initial="initial"
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              repeatDelay: 2,
            }}
            id="grad1"
          >
            <stop stopColor="#e60a64" stopOpacity="0" />
            <stop stopColor="#e60a64" />
            <stop offset="0.325" stopColor="#e60a64" />
            <stop offset="1" stopColor="#e60a64" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    </>
  );
};
