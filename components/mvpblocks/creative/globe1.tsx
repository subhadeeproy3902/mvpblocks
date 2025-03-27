import Earth from "@/components/ui/globe";

export default function Globe1() {
  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-hidden bg-background">
        <article className="relative mx-auto my-8 max-w-[500px] rounded-xl border border-border p-5 text-center">
          <div className="relative z-10">
            <h1 className="text-7xl font-semibold leading-[100%] tracking-tighter">
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
