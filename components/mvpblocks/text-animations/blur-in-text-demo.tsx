import { BlurInText } from '@/components/ui/blur-in-text';

export default function BlurInTextDemo() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl md:text-6xl">
        <BlurInText
          text="Clarity Emerges"
          blurAmount={12}
          duration={1}
          stagger={0.08}
          split="letter"
          trigger="mount"
        />
      </h1>
    </div>
  );
}
