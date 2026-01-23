import { ShinyText } from '@/components/ui/shiny-text';

export default function ShinyTextGradient() {
  return (
    <div className="flex items-center justify-center bg-black p-8 rounded-lg">
      <h1 className="text-4xl font-bold md:text-6xl">
        <ShinyText
          text="Apple Vision Pro"
          shineColor="rgba(255, 255, 255, 1)"
          duration={4}
          trigger="loop"
          shimmerWidth={250}
          angle={110}
        />
      </h1>
    </div>
  );
}
