import { TextReveal } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: "400",
});

export default function TextRevealLetters(){
  return (
    <TextReveal
      className={cn(`font-bold text-6xl bg-primary from-foreground to-primary via-rose-200 bg-clip-text dark:bg-gradient-to-b text-transparent`, geist.className)}
      from="bottom"
      split="letter"
    >
      Welcome to Mvpblocks!
    </TextReveal>
  );
};