import { ScrollRevealText } from '@/components/ui/scroll-reveal-text';

export default function ScrollRevealSlide() {
  return (
    <div className="flex min-h-[400px] items-center justify-center p-8">
      <h1 className="text-4xl md:text-6xl">
        <ScrollRevealText
          text="Slide Into View"
          revealType="slide"
          slideDistance={50}
          scrollOffset={['start 0.9', 'start 0.4']}
        />
      </h1>
    </div>
  );
}
