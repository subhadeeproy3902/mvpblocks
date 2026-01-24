import { GlitchText } from '@/components/ui/glitch-text';

export default function GlitchTextDemo() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground text-4xl md:text-6xl">
        <GlitchText
          text="SYSTEM ERROR"
          intensity={6}
          colors={['#ff0040', '#00ffff']}
          duration={0.3}
          glitchInterval={2500}
          trigger="continuous"
        />
      </h1>
    </div>
  );
}
