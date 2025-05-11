import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "What makes MVPBlocks different?",
    content:
      "MVPBlocks is a fully open-source, developer-first component library built using Next.js and TailwindCSS, designed to help you launch your MVPs in record time. No bloated packages, no unnecessary installs—just clean, copyable code to plug right into your next big thing.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "All components are built with Tailwind CSS, making them highly customizable. Simply modify the class names or use our theme variables to match your brand. Components also support both light and dark modes out of the box.",
  },
  {
    id: "3",
    title: "Are MVPBlocks components responsive?",
    content:
      "Absolutely! All components are designed to be fully responsive and work beautifully on all devices, from mobile phones to large desktop screens. We've carefully crafted each component to provide an optimal experience regardless of screen size.",
  },
  {
    id: "4",
    title: "Can I use MVPBlocks for commercial projects?",
    content:
      "Yes, all MVPBlocks components are free to use for both personal and commercial projects. No attribution required—just build and launch your MVP faster than ever before.",
  },
  {
    id: "5",
    title: "How do I get started with MVPBlocks?",
    content:
      "Simply browse our component library, find the components you need, and copy the code into your project. It's that easy! Our documentation provides clear instructions for installation and usage.",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

export default function Faq1() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked <span className="bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">Questions</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about MVPBlocks and how to use our components to build your next project quickly.
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Decorative gradient */}
          <div className="absolute -left-4 -top-4 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-4 -right-4 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <Accordion
            type="single"
            collapsible
            className="w-full rounded-xl border border-border/40 bg-card/30 p-2 backdrop-blur-sm"
            defaultValue="1"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.id}
                  className={cn(
                    "my-1 overflow-hidden rounded-lg border-none bg-card/50 px-2 shadow-sm transition-all",
                    "data-[state=open]:bg-card/80 data-[state=open]:shadow-md"
                  )}
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-medium",
                        "outline-none transition-all duration-300 hover:text-primary",
                        "focus-visible:ring-2 focus-visible:ring-primary/50",
                        "data-[state=open]:text-primary"
                      )}
                    >
                      {item.title}
                      <PlusIcon
                        size={18}
                        className={cn(
                          "text-primary/70 shrink-0 transition-transform duration-300 ease-out",
                          "group-data-[state=open]:rotate-45"
                        )}
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent
                    className={cn(
                      "overflow-hidden pb-4 pt-0 text-muted-foreground",
                      "data-[state=open]:animate-accordion-down",
                      "data-[state=closed]:animate-accordion-up"
                    )}
                  >
                    <div className="border-t border-border/30 pt-3">
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
