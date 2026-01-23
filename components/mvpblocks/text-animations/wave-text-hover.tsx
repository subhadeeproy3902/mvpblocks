import { WaveText } from '@/components/ui/wave-text';

export default function WaveTextHover() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground cursor-pointer text-4xl font-bold md:text-6xl">
        <WaveText
          text="Hover to Wave"
          amplitude={25}
          frequency={0.5}
          speed={1.5}
          trigger="hover"
          direction="both"
        />
      </h1>
    </div>
  );
}
