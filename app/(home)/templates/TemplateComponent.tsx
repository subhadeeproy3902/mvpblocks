'use client';

import { Spotlight } from '@/components/ui/spotlight';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { geist } from '@/lib/fonts';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { products } from '@/constants/templates';

export default function TemplateComponent() {
  return (
    <div className="relative min-h-screen overflow-hidden px-2 py-32 md:px-6">
      <Spotlight />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              'from-foreground via-foreground/90 to-foreground/70 mb-6 bg-gradient-to-b bg-clip-text text-4xl tracking-tight text-transparent sm:text-5xl lg:text-6xl',
              geist.className,
            )}
          >
            Premium Web{' '}
            <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text dark:bg-gradient-to-b">
              Templates
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground mx-auto mb-12 max-w-3xl text-lg sm:text-xl"
          >
            Explore our collection of professionally designed templates to
            kickstart your next project. Crafted with care and attention to
            detail, our templates are ready to use and easy to customize.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="https://aurasites.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/25 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Globe className="h-4 w-4" />
              View More Here
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <ProductSection />
    </div>
  );
}

const ProductSection = () => {
  return (
    <div className="z-50 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((product, i) => (
          <motion.a
            href={product.link}
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.3 + 0.8 }}
          >
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  delay?: string;
}

function ProductCard({ image, name, price, delay = '' }: ProductCardProps) {
  return (
    <Card
      className={`group animate-fade-in-up cursor-pointer gap-2! overflow-hidden border-0 bg-transparent! pt-0 ${delay}`}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-xl">
        <Image
          src={
            image ||
            `https://xvatar.vercel.app/api/avatar/${name}.svg?rounded=0&size=500`
          }
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <p className="absolute right-2 bottom-2 rounded-full bg-black/30 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300">
          {price > 0 ? (
            <>
              <del className="text-muted-foreground px-2 line-through group-hover:text-red-300/60">
                ${price * 2}
              </del>{' '}
              <span className="group-hover:text-emerald-300">${price}</span>
            </>
          ) : (
            <span className="group-hover:text-emerald-300">FREE</span>
          )}
        </p>
      </div>
      <CardContent className="p-0!">
        <div className="space-y-2">
          <h3 className="text-foreground text-lg transition-all duration-500 ease-in-out group-hover:font-bold">
            {name}
          </h3>
          <div className="flex items-center gap-10">
            <p className="text-muted-foreground text-sm tracking-wider uppercase">
              {price > 0 ? <>PREMIUM</> : <>FREE</>}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
