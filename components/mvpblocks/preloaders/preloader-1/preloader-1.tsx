"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Welcome", "Bienvenido", "Willkommen", "Bienvenue", "Benvenuto", "ようこそ", "환영합니다"];

export default function Preloader1({ onFinish }: { onFinish?: () => void }) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 400);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        setDone(true);
        onFinish?.();
      }, 800);
      return () => clearTimeout(exitTimer);
    }
  }, [index]);

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center bg-black"
      initial={{ y: 0, opacity: 1 }}
      animate={done ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {!done && (
        <div className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-zinc-900 to to-zinc-500 bg-clip-text text-transparent tracking-wide">
          {words[index]}
        </div>
      )}
    </motion.div>
  );
}
