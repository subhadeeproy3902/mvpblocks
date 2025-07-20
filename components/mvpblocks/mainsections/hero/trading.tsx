import { ArrowRight, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import TextGenerateEffect from '@/components/ui/typewriter';
import { BorderBeam } from '@/components/ui/border-beam';

export default function Trading() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative container mx-auto max-w-6xl px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-4 inline-block w-fit rounded-full border bg-white/5 px-4 py-1.5 backdrop-blur-lg"
        style={{ boxShadow: '0 0 10px 0 #e60a6430 inset' }}
      >
        <span className="text-sm font-medium">
          <Command className="mr-2 inline-block h-4 w-4" />
          Next-gen crypto trading platform
        </span>
      </motion.div>

      <div className="relative z-10 mt-6">
        <h1 className="mb-4 text-left text-5xl font-normal tracking-tight md:text-7xl">
          <span className="text-foreground">
            <TextGenerateEffect words="Trade crypto with" />
          </span>
          <br />
          <span className="text-foreground font-medium">
            <TextGenerateEffect words="confidence & security" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-foreground/50 mb-8 max-w-2xl text-left text-lg md:text-xl"
        >
          Experience seamless cryptocurrency trading with advanced features,
          real-time analytics, and institutional-grade security.{' '}
          <span className="text-foreground/50">Start trading in minutes.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-start gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-b from-rose-500 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
          >
            Start Trading Now
          </Button>
          <Button size="lg" variant="link">
            View Markets <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative mx-auto mt-20 max-w-5xl overflow-hidden rounded-xl"
      >
        <div className="overflow-hidden rounded-xl">
          <img
            src="https://blocks.mvp-subha.me/assets/trading-hero/db.jpg"
            alt="CryptoTrade Dashboard"
            className="h-auto w-full"
          />
        </div>
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          className="from-transparent via-blue-500 to-transparent"
        />
      </motion.div>
    </motion.section>
  );
}
