"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Mvpblocks exactly?",
    answer:
      "Mvpblocks is a collection of plug-and-play UI sections built with Tailwind and Framer Motion, ready to be copy-pasted into your next MVP, landing page, or SaaS project.",
  },
  {
    question: "Do I need to know Tailwind to use it?",
    answer:
      "Not necessarily! The blocks come with clean, readable code. If you’ve used HTML before, you can easily customize styles even without deep Tailwind knowledge.",
  },
  {
    question: "Can I use these blocks commercially?",
    answer:
      "Absolutely. All components are free to use for personal and commercial projects. No attribution needed—just build and launch.",
  },
  {
    question: "Are the blocks responsive and accessible?",
    answer:
      "Yes! All blocks are designed to be fully responsive and follow accessibility best practices out of the box.",
  },
  {
    question: "How do I integrate a block into my project?",
    answer:
      "Just copy the code snippet, paste it into your project (e.g., Next.js, Vite, or plain HTML), and you’re good to go. Smooth and instant.",
  },
];


export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="pb-24 relative overflow-hidden">
      <div className="absolute h-64 rounded-full w-64 blur-3xl select-none bg-primary/20 top-1/2 -right-20 opacity-80"></div>
      <div className="absolute h-64 rounded-full w-64 blur-3xl select-none bg-primary/20 top-1/2 -left-20 opacity-80"></div>
      <div className="container">
        <div className="flex justify-center">
        <div className="inline-flex border border-primary/40 gap-2 text-primary px-3 py-1 rounded-full uppercase items-center">
            <span>✶</span>
            <span className="text-sm">Faqs</span>
        </div>
        </div>
        <h2 className="mx-auto mt-6 max-w-xl text-center text-6xl font-medium">
          Questions? We&apos;ve got{" "}
          <span className="bg-primary text-transparent dark:bg-gradient-to-b from-foreground via-rose-200 to-primary bg-clip-text">answers</span>
        </h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() => setSelectedIndex(faqIndex)}
              className="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-secondary/40 to-secondary/10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]"
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium">{faq.question}</h3>
                <Plus
                  size={30}
                  className={cn(
                    "flex-shrink-0 text-primary transition duration-300",
                    selectedIndex === faqIndex && "rotate-45",
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-500">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
