import { FadeInUpText } from '@/components/ui/fade-in-up-text';

export default function FadeInUpLetter() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl font-bold md:text-6xl">
        <FadeInUpText
          text="Letter by Letter"
          duration={0.4}
          stagger={0.04}
          distance={25}
          direction="up"
          split="letter"
          trigger="mount"
        />
      </h1>
    </div>
  );
}
