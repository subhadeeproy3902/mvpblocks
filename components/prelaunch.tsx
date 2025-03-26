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

  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-rose-500/20 blur-[100px]"
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
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-rose-300/20 blur-[100px]"
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-rose-600/20 blur-[100px]"
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
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-rose-500 mb-2">
            Mvpblocks
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent mx-auto my-6"
          />
          <p className="text-rose-100/80 text-lg md:text-xl mt-4">
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
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/10"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold text-rose-50">
              Under Construction
            </h2>
          </div>

          <p className="text-rose-100/80 text-center leading-relaxed">
            We&apos;re working hard to bring you something extraordinary. Our team is
            crafting a seamless experience that will transform the way you
            interact with our platform.
          </p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full blur-md opacity-70" />
              <div className="relative px-6 py-2.5 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full text-white font-medium">
                Launching Soon
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center text-rose-200/60 text-sm"
        >
          © {new Date().getFullYear()} Mvpblocks. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
}
