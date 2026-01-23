import { BlurInText } from '@/components/ui/blur-in-text';

export default function BlurInTextWord() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl font-bold md:text-6xl">
        <BlurInText
          text="Word by Word Reveal"
          blurAmount={15}
          duration={0.8}
          stagger={0.15}
          split="word"
          trigger="mount"
          yOffset={30}
        />
      </h1>
    </div>
  );
}
