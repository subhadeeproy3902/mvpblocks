import { FadeInUpText } from '@/components/ui/fade-in-up-text';

export default function FadeInUpLeft() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl font-bold md:text-6xl">
        <FadeInUpText
          text="Slide from Right"
          duration={0.5}
          stagger={0.1}
          distance={50}
          direction="left"
          split="word"
          trigger="mount"
        />
      </h1>
    </div>
  );
}
