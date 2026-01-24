import { ShuffleText } from '@/components/ui/shuffle-text';

export default function ShuffleTextHover() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground cursor-pointer text-4xl md:text-6xl">
        <ShuffleText
          text="Hover to Decode"
          scrambleSpeed={40}
          revealDelay={120}
          trigger="hover"
        />
      </h1>
    </div>
  );
}
