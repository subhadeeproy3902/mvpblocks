import { TextReveal } from '@/components/ui/text-reveal';

export default function TextRevealWords() {
  return (
    <TextReveal
      className="bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-3xl font-medium text-transparent"
      from="top"
      split="word"
      blur={3}
      delay={0.2}
      duration={1.2}
    >
      Check out the recent template we just launched
    </TextReveal>
  );
}
