"use client";

import { useTheme } from "next-themes";
import Earth from "../ui/globe";
import ScrambleHover from "../ui/scramble";
import { Suspense, useEffect, useState } from "react";

export default function Features() {
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);

  const [baseColor, setBaseColor] = useState<[number, number, number]>(
    theme === "dark" ? [1, 0, 0.3] : [1, 1, 1],
  );

  const [glowColor, setGlowColor] = useState<[number, number, number]>(
    theme === "dark" ? [1, 0, 0.4] : [1, 0.3, 0.4],
  );

  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0);

  useEffect(() => {
    // Change the color of the globe based on the theme
    if (theme === "dark") {
      setBaseColor([1, 0, 0.3]);
      setDark(1);
      setGlowColor([1, 0, 0.4]);
    } else {
      setBaseColor([1, 1, 1]);
      setDark(0);
      setGlowColor([1, 0.3, 0.4]);
    }
  }, [theme]);

  return (
    <section className="bg-background py-12 text-foreground sm:py-24 md:py-32">
      <div className="container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <div className="grid grid-cols-12 gap-4">
          {/* Pixel */}
          <div className="group relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 border-secondary/40 p-6 text-card-foreground shadow-xl transition-all md:col-span-6 xl:col-span-4">
            <div className="z-10 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                🎨 Pixel-Perfect Styling
              </h3>
              <div className="text-md flex flex-col gap-2 text-sm text-muted-foreground">
                <p>
                  Every block comes perfectly styled and optimized for all
                  screen sizes — so your UI looks great out of the box.
                </p>
              </div>
            </div>
            <div className="pointer-events-none flex grow select-none items-end justify-center">
              <div className="min-h-[300px] w-full py-12">
                <div className="relative h-full w-full">
                  <div className="absolute left-[50%] top-0 z-10 flex w-full max-w-[366px] -translate-x-[50%] translate-y-0 overflow-hidden rounded-[56px] bg-neutral-800/20 p-2 transition-all duration-1000 ease-in-out group-hover:-translate-y-8 dark:bg-white/20">
                    <div className="relative z-10 flex max-w-[350px] overflow-hidden rounded-[48px] border border-border/70 shadow-2xl dark:border-border/5 dark:border-t-border/15">
                      {theme === "light" ? (
                        <img
                          alt=""
                          loading="lazy"
                          width="350"
                          height="765"
                          src="/mobile-light.webp"
                        />
                      ) : (
                        <img
                          alt=""
                          loading="lazy"
                          width="350"
                          height="765"
                          src="/mobile-dark.webp"
                        />
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                    <div className="bg-radial absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] from-primary/50 from-10% to-primary/0 to-60% opacity-20 dark:opacity-100 sm:h-[512px]"></div>
                    <div className="scale-200 bg-radial absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 rounded-[50%] from-primary/30 from-10% to-primary/0 to-60% opacity-20 dark:opacity-100 sm:h-[256px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cli */}
          <div className="group relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 border-secondary/40 p-6 text-card-foreground shadow-xl transition-all md:col-span-6 xl:col-span-4">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                🛠️ CLI & Manual Support
              </h3>
              <div className="text-md flex flex-col gap-2 text-sm text-muted-foreground">
                <p className="max-w-[460px]">
                  Integrate your landing page directly in the product while
                  using your favorite tools.
                </p>
              </div>
            </div>
            <div className="pointer-events-none flex grow select-none items-end justify-center">
              <div className="-ml-40 -mr-32">
                <div className="relative grid h-[318px] w-[534px] grid-flow-col grid-cols-5 grid-rows-6 gap-6">
                  <div className="row-span-2 row-start-2"></div>
                  <div className="fade-left-lg z-1 bg-gradient row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
                  <div className="fade-top-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5" />
                  <div className="glass rose relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 outline-border/30 transition-all duration-1000 ease-in-out group-hover:scale-105 dark:outline-background/30">
                    <div className="after:scale-200 after:bg-radial relative after:absolute after:inset-0 after:rounded-full after:from-primary-foreground/30 after:from-10% after:to-primary-foreground/0 after:to-60% after:content-['']">
                      <div className="text-light relative z-10">
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9997 5C9.93208 5 8.41053 5.82843 7.43594 7.48502C7.15487 7.96278 7.94335 8.41626 8.45604 8.20554C9.04899 7.96182 9.68017 7.93517 10.3497 8.12585C11.1873 8.36282 11.7845 9.0526 12.4469 9.81601C13.5249 11.0599 14.7735 12.5 17.5002 12.5C19.5669 12.5 21.0877 11.6726 22.0622 10.0181C22.3436 9.54035 21.554 9.08597 21.0409 9.29611C20.4488 9.53864 19.8185 9.56489 19.1501 9.37488C18.3138 9.13791 17.7154 8.4474 17.0529 7.68326C15.9749 6.44006 14.7263 5 11.9997 5ZM6.49984 12.5C4.43307 12.5 2.91232 13.3274 1.9378 14.9819C1.65642 15.4597 2.44604 15.914 2.95911 15.7039C3.55123 15.4614 4.18151 15.4351 4.84989 15.6251C5.68617 15.8621 6.28463 16.5526 6.94706 17.3167C8.02506 18.5599 9.27367 20 11.9997 20C14.0676 20 15.5889 19.172 16.5634 17.5163C16.8446 17.0386 16.0556 16.5847 15.5427 16.7952C14.95 17.0386 14.3192 17.0651 13.6503 16.8749C12.8133 16.6372 12.2155 15.9474 11.5531 15.1833C10.4745 13.9401 9.22714 12.5 6.49984 12.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="fade-bottom-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
                  <div className="glass rose relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl outline-4 outline-border/30 transition-all duration-1000 ease-in-out group-hover:scale-90 dark:outline-background/30">
                    <div className="after:scale-200 after:bg-radial relative after:absolute after:inset-0 after:rounded-full after:from-primary-foreground/30 after:from-10% after:to-primary-foreground/0 after:to-60% after:content-['']">
                      <div className="text-light relative z-10 flex h-8 w-8 items-center justify-center">
                        <img src="/tailwind.png" alt="" className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  <div className="glass rose relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 outline-border/30 transition-all duration-1000 ease-in-out dark:outline-background/30">
                    <div className="after:scale-200 after:bg-radial relative after:absolute after:inset-0 after:rounded-full after:from-primary-foreground/30 after:from-10% after:to-primary-foreground/0 after:to-60% after:content-['']">
                      <div className="text-light relative z-10">
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 1C22.1046 1 23 1.89232 23 2.99689C23 8.68454 23 17.1774 23 21.0041C23 22.1086 22.1077 23 21.0031 23C15.3155 23 6.82263 23 2.99595 23C1.89137 23 1.00001 22.108 1.00002 21.0034C1.00007 15.2015 1.00003 6.79323 1.00002 2.99497C1.00001 1.8904 1.89544 1 3.00002 1L21 1ZM13.2297 12.7043V10.9H5.4V12.7043H8.19532V20.7382H10.4206V12.7043H13.2297ZM14.1168 20.5261C14.4757 20.709 14.9001 20.8463 15.39 20.9378C15.8801 21.0292 16.3964 21.075 16.9393 21.075C17.4684 21.075 17.971 21.0247 18.4472 20.924C18.9234 20.8234 19.3409 20.6576 19.6997 20.4266C20.0585 20.1956 20.3427 19.8938 20.552 19.521C20.7613 19.1481 20.866 18.6873 20.866 18.1384C20.866 17.7405 20.8062 17.3918 20.6865 17.0922C20.567 16.7925 20.3944 16.5261 20.169 16.2928C19.9436 16.0595 19.6733 15.8503 19.3581 15.665C19.0429 15.4798 18.6876 15.3048 18.292 15.1402C18.0021 15.0212 17.7421 14.9057 17.5121 14.7937C17.282 14.6816 17.0865 14.5672 16.9255 14.4506C16.7645 14.3339 16.6403 14.2105 16.5529 14.0801C16.4655 13.9498 16.4218 13.8022 16.4218 13.6376C16.4218 13.4866 16.4609 13.3505 16.5391 13.2294C16.6173 13.1081 16.7277 13.004 16.8703 12.9171C17.013 12.8302 17.1877 12.7628 17.3948 12.7147C17.6018 12.6668 17.8319 12.6427 18.0849 12.6427C18.2689 12.6427 18.4633 12.6564 18.668 12.6839C18.8728 12.7114 19.0787 12.7537 19.2856 12.8108C19.4927 12.868 19.694 12.94 19.8895 13.027C20.0851 13.1139 20.2656 13.2145 20.4313 13.3288V11.2774C20.0953 11.1493 19.7285 11.0543 19.3305 10.9927C18.9326 10.9309 18.4759 10.9 17.9606 10.9C17.4362 10.9 16.9393 10.956 16.4701 11.0681C16.0008 11.1802 15.5879 11.3551 15.2313 11.593C14.8748 11.8309 14.593 12.1339 14.386 12.502C14.1789 12.8703 14.0754 13.3105 14.0754 13.8228C14.0754 14.4769 14.2652 15.035 14.6448 15.4969C15.0244 15.9589 15.6005 16.35 16.3734 16.6702C16.6771 16.7937 16.96 16.9149 17.2223 17.0339C17.4845 17.1527 17.7111 17.2763 17.902 17.4043C18.0929 17.5324 18.2436 17.6719 18.354 17.8228C18.4645 17.9738 18.5197 18.1453 18.5197 18.3374C18.5197 18.4793 18.4851 18.6107 18.4161 18.7319C18.3471 18.8532 18.2424 18.9583 18.1021 19.0475C17.9618 19.1367 17.787 19.2065 17.5777 19.2568C17.3684 19.3071 17.1233 19.3323 16.8427 19.3323C16.3642 19.3323 15.8904 19.2488 15.4211 19.0819C14.9519 18.9149 14.5171 18.6645 14.1168 18.3306V20.5261Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="fade-top-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
                  <div className="glass rose relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 outline-border/30 transition-all duration-1000 ease-in-out group-hover:scale-105 dark:outline-background/30">
                    <div className="after:scale-200 after:bg-radial relative after:absolute after:inset-0 after:rounded-full after:from-primary-foreground/30 after:from-10% after:to-primary-foreground/0 after:to-60% after:content-['']">
                      <div className="text-light relative z-10">
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.5 12L12 19.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M18 3.75L3.75 18"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="fade-right-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
                  <div className="glass rose relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl to-transparent outline-4 outline-border/30 transition-all duration-1000 ease-in-out group-hover:scale-[.8] dark:outline-background/30">
                    <div className="after:scale-200 after:bg-radial relative after:absolute after:inset-0 after:rounded-full after:from-primary-foreground/30 after:from-10% after:to-primary-foreground/0 after:to-60% after:content-['']">
                      <div className="text-light relative z-10">
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2.00021V16M12 16V19.5C12 21.4331 10.433 23 8.5 23C6.567 23 5 21.4331 5 19.5C5 17.567 6.567 16 8.5 16M12 16H8.5M8.5 16C6.567 16 5 14.433 5 12.5C5 10.567 6.567 9 8.5 9M8.5 9H12M8.5 9H15.5M8.5 9C6.567 9 5 7.433 5 5.5C5 3.567 6.567 2 8.5 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9M15.5 9C17.433 9 19 10.567 19 12.5C19 14.433 17.433 16 15.5 16C13.567 16 12 14.433 12 12.5C12 10.567 13.567 9 15.5 9Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="fade-right-lg z-1 row-span-2 rounded-xl bg-gradient-to-b from-black/5 to-transparent transition-all duration-1000 ease-in-out dark:from-white/5"></div>
                  <div className="absolute bottom-0 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                    <div className="bg-radial absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] from-primary/50 from-10% to-primary/0 to-60% opacity-20 dark:opacity-100 sm:h-[512px]"></div>
                    <div className="scale-200 bg-radial absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 rounded-[50%] from-primary/30 from-10% to-primary/0 to-60% opacity-20 dark:opacity-100 sm:h-[256px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global */}
          <div
            className="group relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 border-secondary/40 p-6 text-card-foreground shadow-xl transition-all md:col-span-6 xl:col-span-4"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                🌍 Globally Usable
              </h3>
              <div className="text-md flex flex-col gap-2 text-sm text-muted-foreground">
                <p className="max-w-[460px]">
                  Blocks are available everywhere but ours are the best. Use
                  them in your favorite framework or even in plain HTML.
                </p>
              </div>
            </div>
            <div className="flex min-h-[300px] grow select-none items-start justify-center">
              <h1 className="mt-8 text-center text-5xl font-semibold leading-[100%] sm:leading-normal lg:mt-12 lg:text-6xl">
                <span className='relative mt-3 inline-block w-fit rounded-md border bg-background px-1.5 py-0.5 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url("/noise.gif")] before:opacity-[0.09] before:content-[""]'>
                  <ScrambleHover
                    text="Mvpblocks"
                    scrambleSpeed={70}
                    maxIterations={20}
                    useOriginalCharsOnly={false}
                    className="cursor-pointer bg-gradient-to-t from-[#faa2c4] to-[#ec337a] bg-clip-text text-transparent"
                    isHovering={isHovering}
                    setIsHovering={setIsHovering}
                    characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
                  />
                </span>
              </h1>
              <div className="absolute bottom-0 top-48 z-10">
                <Suspense
                  fallback={
                    <div className="h-[300px] w-[300px] animate-pulse rounded-full bg-secondary/20"></div>
                  }
                >
                  <Earth
                    baseColor={baseColor}
                    markerColor={[0, 0, 0]}
                    glowColor={[1, 0.3, 0.4]}
                    dark={dark}
                  />
                </Suspense>
              </div>
              <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                <div className="bg-radial absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] from-primary/50 from-10% to-primary/0 to-60% opacity-20 dark:opacity-100 sm:h-[512px]"></div>
                <div className="scale-200 bg-radial absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 rounded-[50%] from-primary/30 from-10% to-primary/0 to-60% opacity-20 dark:opacity-100 sm:h-[256px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
