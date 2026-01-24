import { ShuffleText } from '@/components/ui/shuffle-text';

export default function ShuffleTextDemo() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl md:text-6xl">
        <ShuffleText
          text="Decode the Future"
          scrambleSpeed={50}
          revealDelay={150}
          trigger="mount"
        />
      </h1>
    </div>
  );
}
