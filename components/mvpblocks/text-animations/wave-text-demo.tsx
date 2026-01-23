import { WaveText } from '@/components/ui/wave-text';

export default function WaveTextDemo() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl font-bold md:text-6xl">
        <WaveText
          text="Ride the Wave"
          amplitude={15}
          frequency={0.4}
          speed={2}
          trigger="continuous"
        />
      </h1>
    </div>
  );
}
