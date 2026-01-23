import { FadeInUpText } from '@/components/ui/fade-in-up-text';

export default function FadeInUpDemo() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl font-bold md:text-6xl">
        <FadeInUpText
          text="Rise and Shine"
          duration={0.6}
          stagger={0.08}
          distance={40}
          direction="up"
          split="word"
          trigger="mount"
        />
      </h1>
    </div>
  );
}
