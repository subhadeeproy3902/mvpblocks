export default function GlassCard() {
  return (
    <article className="flex w-full max-w-sm flex-col items-start justify-between rounded-lg border border-gray-300 bg-white/20 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:bg-white/30 hover:shadow-xl">
      <div className="mb-2 flex items-center gap-x-2 text-xs">
        <div className="rounded-md border border-gray-200 bg-blue-500 px-3 py-1 font-bold text-white">
          June 6, 2025
        </div>
        <a
          href="#"
          className="relative z-10 rounded-md border border-gray-200 bg-blue-500 px-3 py-1 font-bold text-white transition-colors duration-300 hover:bg-blue-700"
        >
          UI/UX Trends
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-2xl font-extrabold uppercase leading-6 text-white">
          <a href="#" className="hover:text-blue-400">
            <span className="absolute inset-0 max-w-xs"></span>Embrace Glassmorphism in Design
          </a>
        </h3>
        <p className="mt-5 border-l-4 border-blue-500 pl-4 text-sm leading-6 text-white/80">
          Discover the latest UI trend—Glassmorphism. Learn how to implement transparent backgrounds with blurred effects for a futuristic look.
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-2">
        <div className="text-sm leading-6">
          <p className="font-extrabold text-white">
            <a href="#" className="hover:underline">
              <span className="absolute inset-0"></span>Supriyo Malakar
            </a>
          </p>
          <p className="font-bold text-white/80">Senior Product Designer</p>
        </div>
      </div>
    </article>
  );
}
