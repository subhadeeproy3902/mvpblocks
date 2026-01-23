import { ShuffleText } from '@/components/ui/shuffle-text';

export default function ShuffleTextScroll() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <h1 className="text-foreground text-4xl font-bold md:text-6xl">
        <ShuffleText
          text="Scroll to Reveal"
          scrambleSpeed={50}
          trigger="scroll"
        />
      </h1>
    </div>
  );
}
