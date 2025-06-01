import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function AddCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative flex h-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 text-center dark:border-zinc-800"
    >
      <Link
        href="https://github.com/subhadeeproy3902/mvpblocks/discussions/19"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
      >
        <PlusCircle className="mb-4 h-12 w-12 text-primary opacity-70" />
        <h3 className="mb-2 text-xl font-semibold">Add yours</h3>
      </Link>
    </motion.div>
  );
}
