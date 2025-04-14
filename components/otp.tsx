"use client";

import React, { useState } from "react";
import { CreativeOTPInput } from "./ui/creative-otp-input";
import { motion, AnimatePresence } from "framer-motion";

export function CreativeOTPInputDemo() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleComplete = (otp: string) => {
    console.log("Completed OTP:", otp);
    if (otp === "123456") {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="z-20 flex flex-col items-center gap-y-10 p-8">
      <div className="space-y-2 text-center">
        <motion.h3
          className="text-xl font-semibold dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Enter Verification Code
        </motion.h3>
        <p className="text-sm text-muted-foreground dark:text-muted-foreground/80">
          We&apos;ve sent a code to your email
        </p>
      </div>

      <div className="relative ">
        <CreativeOTPInput
          length={6}
          variant="default"
          status={status}
          onComplete={handleComplete}
        />
        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 -bottom-8 text-center text-sm font-medium text-red-500 dark:text-red-400"
            >
              Invalid code. Please try again.
            </motion.p>
          )}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 -bottom-8 text-center text-sm font-medium text-green-500 dark:text-green-400"
            >
              Verification successful!
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <motion.p
        className="mt-5 text-sm text-muted-foreground dark:text-muted-foreground/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Didn&apos;t receive the code?{" "}
        <motion.button
          className="text-primary hover:underline dark:text-primary/90"
          onClick={() => setStatus("idle")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resend
        </motion.button>
      </motion.p>
      <motion.p
        className="mt-5 text-sm text-muted-foreground dark:text-muted-foreground/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Try to hit 123456 */}
        Try to hit the code {" "}
        <span className="font-semibold text-green-500">
          123456 
        </span>
      </motion.p>
    </div>
  );
}
