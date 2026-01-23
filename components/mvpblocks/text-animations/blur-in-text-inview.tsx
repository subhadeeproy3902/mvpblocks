import { BlurInText } from '@/components/ui/blur-in-text';

export default function BlurInTextInView() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl font-bold md:text-6xl">
        <BlurInText
          text="Scroll to Focus"
          blurAmount={10}
          duration={1.2}
          stagger={0.06}
          split="letter"
          trigger="inView"
        />
      </h1>
    </div>
  );
}
