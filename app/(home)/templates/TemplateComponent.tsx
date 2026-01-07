'use client';

import { Spotlight } from '@/components/ui/spotlight';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { geist } from '@/lib/fonts';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { products } from '@/constants/templates';
import Link from "next/link";

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
            Premium Web {' '}
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
            Explore our collection of professionally designed templates to kickstart your next project. Crafted with care and attention to detail, our templates are ready to use and easy to customize.
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
    <div className="space-y-8 z-50">
      <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.a
            href={`/templates/${product.id}`}
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (i * 0.3) + 0.8 }}
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

function ProductCard({ image, name, price, delay = "" }: ProductCardProps) {
  return (
    <Card
      className={`group overflow-hidden cursor-pointer pt-0 gap-2! animate-fade-in-up bg-transparent! border-0 ${delay}`}
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
        <p className="text-sm font-semibold absolute bottom-2 right-2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-white transition-all duration-300">
          {
            price > 0 ? (
              <>
                <del className="px-2 line-through text-muted-foreground group-hover:text-red-300/60">
                  ${price * 2}
                </del>{" "}
                <span className="group-hover:text-emerald-300">${price}</span>
              </>
            ) : (
              <span className="group-hover:text-emerald-300">FREE</span>
            )
          }
        </p>
      </div>
      <CardContent className="p-0!">
        <div className="space-y-2">
          <h3 className="text-lg text-foreground group-hover:font-bold transition-all duration-500 ease-in-out">
            {name}
          </h3>
          <div className="flex items-center gap-10">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">
              {
                price > 0 ? (
                  <>PREMIUM</>
                ) : (
                  <>FREE</>
                )
              }
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}