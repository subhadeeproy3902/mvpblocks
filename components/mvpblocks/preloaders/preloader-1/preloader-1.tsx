"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Welcome",
  "Bienvenido",
  "Willkommen",
  "Benvenuto",
  "ようこそ",
];

export default function Preloader1({ onFinish }: { onFinish?: () => void }) {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (index < words.length - 1) {
      const t = setTimeout(() => setIndex(i => i + 1), 450);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setExiting(true);
        onFinish?.();
      }, 700);
      return () => clearTimeout(t);
    }
  }, [index, onFinish]);

  return (
    <motion.div
      className="relative w-full h-64 flex items-center justify-center bg-black"
      initial={{ y: 0, opacity: 1 }}
      animate={exiting ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="text-3xl md:text-5xl font-semibold text-white tracking-wide select-none"
      >
        {words[index]}
      </motion.div>
    </motion.div>
  );
}
