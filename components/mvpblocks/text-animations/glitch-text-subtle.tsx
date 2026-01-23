import { GlitchText } from '@/components/ui/glitch-text';

export default function GlitchTextSubtle() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl font-bold md:text-6xl">
        <GlitchText
          text="Subtle Glitch"
          intensity={3}
          colors={['#6366f1', '#ec4899']}
          duration={0.15}
          glitchInterval={4000}
          trigger="continuous"
        />
      </h1>
    </div>
  );
}
