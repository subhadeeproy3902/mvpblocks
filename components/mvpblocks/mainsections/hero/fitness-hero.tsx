import { Button } from '@/components/ui/button';

export default function FitnessHero() {
  return (
    <div className="relative z-10">
      <div className="pt-28 pb-20 md:pt-16 lg:pt-20">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-[122px]">
            <div className="mx-auto max-w-[500px] lg:mx-0 lg:max-w-none">
              <div className="flex flex-col items-center justify-center text-center lg:items-start lg:justify-normal lg:text-left">
                <h1 className="xxl:text-[90px] mb-6 text-4xl leading-[1.11] font-extrabold -tracking-[1px] md:text-5xl lg:text-6xl xl:text-7xl">
                  Fitness app for your good health
                </h1>
                <p className="mb-10 xl:mb-[50px]">
                  Snaga is a health &amp; fitness tracker app that helps you set
                  out realistic goals that you can accomplish without many
                  hurdles. Sometimes, we keep bigger goals but end up and
                  workout sessions and exercises to help you keep fit.
                </p>
                <div className="mb-8 flex flex-wrap items-center gap-[10px] lg:mb-[50px]">
                  <div className="flex">
                    <img
                      src="https://blocks.mvp-subha.me/assets/fitness-hero/1.webp"
                      alt="hero-avatar-img-1"
                      width="58"
                      height="58"
                      className="-ml-[15px] h-[58px] w-[58px] rounded-[50%] first:-ml-0"
                    />
                    <img
                      src="https://blocks.mvp-subha.me/assets/fitness-hero/2.webp"
                      alt="hero-avatar-img-2"
                      width="58"
                      height="58"
                      className="-ml-[15px] h-[58px] w-[58px] rounded-[50%] first:-ml-0"
                    />
                    <img
                      src="https://blocks.mvp-subha.me/assets/fitness-hero/3.webp"
                      alt="hero-avatar-img-2"
                      width="58"
                      height="58"
                      className="-ml-[15px] h-[58px] w-[58px] rounded-[50%] first:-ml-0"
                    />
                  </div>
                  <ul className="flex gap-12">
                    <li className="relative after:absolute after:top-1/2 after:left-[calc(100%+_24px)] after:h-10 after:w-0.5 after:-translate-y-1/2 after:bg-black/20 last:after:hidden dark:after:bg-white/20">
                      <div className="text-[30px] leading-[1.4] font-bold -tracking-[1px]">
                        64,739
                      </div>
                      <div className="flex gap-[5px] text-base">
                        Happy Customers
                      </div>
                    </li>
                    <li className="after:bg-ColorBlack/10 relative after:absolute after:top-1/2 after:left-[calc(100%+_24px)] after:h-10 after:w-0.5 after:-translate-y-1/2 last:after:hidden">
                      <div className="text-[30px] leading-[1.4] font-bold -tracking-[1px]">
                        4.8/5
                      </div>
                      <div className="flex gap-[5px] text-base">
                        <div className="flex gap-1">
                          <img
                            src="https://blocks.mvp-subha.me/assets/fitness-hero/icon.svg"
                            alt="icon-green-star"
                            width="17"
                            height="17"
                          />
                          <img
                            src="https://blocks.mvp-subha.me/assets/fitness-hero/icon.svg"
                            alt="icon-green-star"
                            width="17"
                            height="17"
                          />
                          <img
                            src="https://blocks.mvp-subha.me/assets/fitness-hero/icon.svg"
                            alt="icon-green-star"
                            width="17"
                            height="17"
                          />
                          <img
                            src="https://blocks.mvp-subha.me/assets/fitness-hero/icon.svg"
                            alt="icon-green-star"
                            width="17"
                            height="17"
                          />
                          <img
                            src="https://blocks.mvp-subha.me/assets/fitness-hero/icon.svg"
                            alt="icon-green-star"
                            width="17"
                            height="17"
                          />
                        </div>
                        Rating
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap justify-center gap-5 sm:justify-normal">
                  <a href="#" className="group relative z-10 inline-block">
                    <Button
                      className="shadow-foreground/30 rounded-full shadow-md"
                      size="lg"
                    >
                      Start a 10-day free trial
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="relative z-10 mx-auto h-auto max-w-[280px] sm:max-w-[500px] lg:mr-0 lg:ml-auto">
                <img
                  src="https://blocks.mvp-subha.me/assets/fitness-hero/image.webp"
                  alt="hero-mobille"
                  width="612"
                  height="1272"
                  className="z-10 mx-auto h-[635px] w-[306px]"
                />
                <img
                  src="https://blocks.mvp-subha.me/assets/fitness-hero/shape1.svg"
                  alt="hero-2-shape-1"
                  width="110"
                  height="191"
                  className="xxl:left-[6%] absolute bottom-[18%] -left-[12%] -z-10 xl:-left-[2%]"
                />
                <img
                  src="https://blocks.mvp-subha.me/assets/fitness-hero/shape2.svg"
                  alt="hero-2-shape-1"
                  width="292"
                  height="299"
                  className="absolute top-[15%] -right-[18%] -z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
