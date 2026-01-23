import { ScrollRevealText } from '@/components/ui/scroll-reveal-text';

export default function ScrollRevealCharacters() {
  return (
    <div className="flex min-h-[400px] items-center justify-center p-8">
      <h1 className="text-4xl font-bold md:text-6xl">
        <ScrollRevealText
          text="Character by Character"
          revealType="characters"
          staggerDelay={0.02}
          blurAmount={8}
          scrollOffset={['start 0.9', 'start 0.2']}
        />
      </h1>
    </div>
  );
}
