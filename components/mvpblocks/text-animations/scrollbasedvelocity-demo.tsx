import { VelocityScroll } from "@/components/ui/scrollbasedvelocity";

export default function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      className="text-center text-4xl tracking-tight font-bold md:text-7xl md:leading-[5rem] px-6"
      text="Welcome to Mvpblocks"
      default_velocity={5}
    />
  );
}
