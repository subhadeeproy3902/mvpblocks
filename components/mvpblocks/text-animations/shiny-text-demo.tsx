import { ShinyText } from '@/components/ui/shiny-text';

export default function ShinyTextDemo() {
  return (
    <div className="flex items-center justify-center bg-black p-8 rounded-lg">
      <h1 className="text-4xl font-bold md:text-6xl">
        <ShinyText
          text="Premium Quality"
          shineColor="rgba(255, 255, 255, 1)"
          duration={3}
          shimmerWidth={200}
          trigger="loop"
        />
      </h1>
    </div>
  );
}
