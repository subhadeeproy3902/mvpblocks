export default function CTA2() {
  return (
    <div className="w-full max-w-4xl rounded-[40px] bg-orange-500 p-6 sm:p-10 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden hidden md:block">
          <div className="absolute top-1/2 right-[-45%] -translate-y-1/2 aspect-square w-[800px] h-[800px]">
            <div className="absolute inset-0 rounded-full bg-orange-400 opacity-30"></div>
            <div className="absolute inset-0 scale-[0.8] rounded-full bg-orange-300 opacity-30"></div>
            <div className="absolute inset-0 scale-[0.6] rounded-full bg-orange-200 opacity-30"></div>
            <div className="absolute inset-0 scale-[0.4] rounded-full bg-orange-100 opacity-30"></div>
            <div className="absolute inset-0 scale-[0.2] rounded-full bg-orange-50 opacity-30"></div>
            <div className="absolute inset-0 scale-[0.1] rounded-full bg-white/50 opacity-30"></div>
          </div>
        </div>

        <div className="relative z-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Let&apos;s Get In Touch.</h1>
          <p className="text-white text-base sm:text-lg max-w-md mb-6 md:mb-8">
            Your laboratory instruments should serve you, not the other way around. We&apos;re happy to help you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="bg-black text-white px-5 py-3 rounded-full flex items-center justify-between w-full sm:w-[240px]">
              <span className="font-medium">Book a discovery call</span>
              <span className="w-5 h-5 bg-white rounded-full flex-shrink-0"></span>
            </button>
            <button className="bg-black text-white px-5 py-3 rounded-full flex items-center justify-between w-full sm:w-[240px]">
              <span className="font-medium">Test Your Samples</span>
              <span className="w-5 h-5 bg-white rounded-full flex-shrink-0"></span>
            </button>
          </div>
        </div>
      </div>
  )
}
