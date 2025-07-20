import Earth from '@/components/ui/globe';

export default function Globe2() {
  return (
    <>
      <div className="bg-background flex flex-col items-center justify-center overflow-hidden">
        <article className="relative mx-auto mt-8 mb-8 h-[350px] min-h-60 max-w-[450px] overflow-hidden rounded-3xl border bg-gradient-to-b from-[#A8E524] to-[#A8E524]/5 p-6 text-3xl tracking-tight text-black md:h-[450px] md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl">
          Presenting you with the best UI possible.
          <div className="absolute -right-20 -bottom-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-right-28 md:-bottom-28 md:max-w-[550px]">
            <Earth
              scale={1.1}
              baseColor={[0.65, 0.898, 0.141]}
              markerColor={[0.65, 0.898, 0.141]}
              glowColor={[0.65, 0.898, 0.141]}
            />
          </div>
        </article>
      </div>
    </>
  );
}
