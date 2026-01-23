import { ScrollRevealText } from '@/components/ui/scroll-reveal-text';

export default function ScrollRevealDemo() {
  return (
    <div className="flex min-h-[400px] items-center justify-center p-8">
      <h1 className="text-4xl font-bold md:text-6xl">
        <ScrollRevealText
          text="Scroll to Reveal"
          revealType="blur"
          blurAmount={12}
          scrollOffset={['start 0.9', 'start 0.3']}
        />
      </h1>
    </div>
  );
}
