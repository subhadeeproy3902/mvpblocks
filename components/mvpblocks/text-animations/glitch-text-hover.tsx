import { GlitchText } from '@/components/ui/glitch-text';

export default function GlitchTextHover() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-foreground cursor-pointer text-4xl font-bold md:text-6xl">
        <GlitchText
          text="HOVER GLITCH"
          intensity={8}
          colors={['#ff00ff', '#00ff00']}
          duration={0.2}
          glitchInterval={500}
          trigger="hover"
        />
      </h1>
    </div>
  );
}
