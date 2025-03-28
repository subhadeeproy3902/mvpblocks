"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/ui/countdown-timer";

export default function Prelaunch() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your backend
      console.log("Email submitted:", email);
      setSubmitted(true);
      setEmail("");

      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  // launch date set to 1st april 2025
  const launchDate = new Date("2025-04-23T00:00:00Z");

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-1/4 top-1/4 h-1/2 w-1/2 rounded-full bg-rose-500/20 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-1/4 h-1/2 w-1/2 rounded-full bg-rose-300/20 blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-2 bg-gradient-to-r from-rose-100 to-rose-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Mvpblocks
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mx-auto my-6 h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"
          />
          <p className="mt-4 text-lg text-rose-100/80 md:text-xl">
            Something amazing is coming your way
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <CountdownTimer targetDate={launchDate} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg md:p-10"
        >
          <div className="mb-6 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-rose-50 md:text-3xl">
              Under Construction
            </h2>
          </div>

          <p className="text-center leading-relaxed text-rose-100/80">
            We&apos;re working hard to bring you something extraordinary. Our
            team is crafting a seamless experience that will transform the way
            you interact with our platform.
          </p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 opacity-70 blur-md" />
              <div className="relative rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-2.5 font-medium text-white">
                23rd April, 2025
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center text-sm text-rose-200/60"
        >
          © {new Date().getFullYear()} Mvpblocks. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
}
