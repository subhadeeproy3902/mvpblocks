"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const users = [
  {
    imgUrl: "https://avatars.githubusercontent.com/u/71373838",
  },
  {
    imgUrl: "https://avatars.githubusercontent.com/u/111780029",
  },
  {
    imgUrl: "https://avatars.githubusercontent.com/u/115650165",
  },
];

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else if (response.status === 409) {
        setError("This email is already registered!");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError("Error submitting email. Please try again.");
    } finally {
      setEmail("");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto max-w-xl px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute -top-[45%] left-1/2 -z-10 h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-emerald-400/20 bg-background bg-[radial-gradient(closest-side,#0A100F_85%,#10b981)] blur transition-all duration-500 hover:blur-none sm:h-[768px] sm:w-[1536px] lg:-top-[205%] lg:h-[1200px] lg:w-[2400px]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute -bottom-[55%] left-1/2 -z-10 h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-emerald-400/20 bg-background bg-[radial-gradient(closest-side,#0A100F_85%,#10b981)] blur-sm transition-all duration-500 hover:blur-none sm:h-[768px] sm:w-[1536px] lg:-bottom-[210%] lg:h-[1200px] lg:w-[2400px]"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-gradient-to-r from-emerald-600/15 to-emerald-700/5 px-4 py-2 backdrop-blur-sm"
        >
          <span className="text-sm">TeraCodes</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-glow-white mb-4 cursor-crosshair bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl"
        >
          The Future of <br /> Code{" "}
          <span className="text-4xl text-primary opacity-90 sm:text-6xl">{`</>`}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 mt-2 text-muted-foreground sm:text-lg"
        >
          Be first in line to access our revolutionary platform. Join our
          exclusive waitlist today.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="mx-auto flex flex-col gap-4 sm:flex-row"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <>
                <div className="relative flex-1">
                  <motion.input
                    key="email-input"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-border bg-white/5 px-6 py-4 text-white backdrop-blur-sm transition-all placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-xl border border-destructive/40 bg-red-900/25 px-4 py-1 text-sm capitalize text-red-600 sm:absolute"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="rounded-xl bg-gradient-to-r from-primary to-emerald-600 px-8 py-4 font-semibold text-black transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </>
            ) : (
              <motion.div
                key="thank-you-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-glow flex-1 cursor-pointer rounded-xl border border-border bg-gradient-to-r from-primary/5 via-transparent to-primary/5 px-6 py-4 font-medium text-primary backdrop-blur-sm transition-all duration-300 hover:saturate-150 active:brightness-125"
              >
                Thanks for joining!! 🎉
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-1"
        >
          <div className="flex -space-x-2">
            {users.map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: -10 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
                className="size-8 rounded-full border-2 border-background bg-gradient-to-r from-emerald-400 to-emerald-700"
              >
                <Image
                  src={users[i].imgUrl}
                  alt="Avatar"
                  className="rounded-full transition-all duration-300 hover:rotate-12 active:rotate-0 active:scale-110"
                  width={40}
                  height={40}
                />
              </motion.div>
            ))}
          </div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="ml-2 text-muted-foreground"
          >
            +100 already joined ✨
          </motion.span>
        </motion.div>
      </div>
    </main>
  );
}
