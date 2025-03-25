import React from "react";
import Earth from "@/components/ui/globe";

export default function Globe2() {
  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-hidden bg-background">
        <article className="relative mx-auto mb-8 mt-8 h-[500px] min-h-60 max-w-[500px] overflow-hidden rounded-3xl border bg-gradient-to-b from-[#A8E524] to-[#A8E524]/5 p-6 text-3xl tracking-tight text-black md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl">
          Presenting you with the best UI possible.
          <div className="absolute -bottom-24 -right-20 z-10 mx-auto flex w-full max-w-[200px] items-center justify-center transition-all duration-700 hover:scale-105 md:max-w-[450px]">
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
