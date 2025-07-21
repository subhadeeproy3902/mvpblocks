'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/640/480?random=2',
  'https://picsum.photos/1280/720?random=3',
  'https://picsum.photos/960/540?random=4',
  'https://picsum.photos/900/300?random=5',
  'https://picsum.photos/1200/600?random=6',
  'https://picsum.photos/400/600?random=7',
  'https://picsum.photos/300/450?random=8',
  'https://picsum.photos/600/800?random=9',
  'https://picsum.photos/450/600?random=10',
  'https://picsum.photos/600/600?random=11',
  'https://picsum.photos/500/550?random=12',
  'https://picsum.photos/700/850?random=20',
  'https://picsum.photos/1280/960?random=14',
  'https://picsum.photos/1440/810?random=15',
  'https://picsum.photos/1024/768?random=16',
  'https://picsum.photos/800/800?random=17',
  'https://picsum.photos/1080/720?random=18',
  'https://picsum.photos/1920/1080?random=19',
  'https://picsum.photos/1280/800?random=20',
  'https://picsum.photos/800/400?random=21',
  'https://picsum.photos/1024/576?random=22',
  'https://picsum.photos/640/360?random=23',
];

export default function MasonryGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen px-4 py-20 md:px-6">
      <div className="columns-1 gap-4 space-y-4 transition-all sm:columns-2 md:columns-3 lg:columns-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out"
          >
            <motion.img
              src={src}
              alt={`Random ${index}`}
              className={`w-full rounded-lg object-cover transition-all duration-300 ease-in-out ${
                hovered === null
                  ? 'blur-0 scale-100'
                  : hovered === index
                    ? 'blur-0 scale-105'
                    : 'blur-xs'
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
