import { VelocityScroll } from '@/components/ui/scrollbasedvelocity';

export default function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      className="px-6 text-center text-4xl font-bold tracking-tight md:text-7xl md:leading-[5rem]"
      text="Welcome to Mvpblocks"
      default_velocity={5}
    />
  );
}
