import { WaveText } from '@/components/ui/wave-text';

export default function WaveTextSubtle() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl font-bold md:text-6xl">
        <WaveText
          text="Gentle Motion"
          amplitude={8}
          frequency={0.2}
          speed={3}
          trigger="continuous"
          direction="up"
        />
      </h1>
    </div>
  );
}
