import Earth from '@/components/ui/globe';

export default function Globe1() {
  return (
    <>
      <div className="bg-background flex flex-col items-center justify-center overflow-hidden">
        <article className="border-border relative mx-auto my-8 max-w-[500px] rounded-xl border p-5 text-center">
          <div className="relative z-10">
            <h1 className="text-7xl leading-[100%] font-semibold tracking-tighter">
              Welcome to Mvpblocks
            </h1>
            {/* Normalized RGB values i.e (RGB or color / 255) */}
            <Earth
              baseColor={[1, 0, 0.3]}
              markerColor={[1, 0, 0.33]}
              glowColor={[1, 0, 0.3]}
            />
          </div>
        </article>
      </div>
    </>
  );
}
