export default function RetroCard() {
  return (
    <article className="bg-background flex w-full max-w-sm flex-col items-start justify-between border-4 border-black p-6 shadow-[8px_8px_0_0_#000] transition-shadow duration-300 hover:shadow-[12px_12px_0_0_#000] dark:border-white dark:shadow-[8px_8px_0_0_#fff] dark:hover:shadow-[12px_12px_0_0_#fff]">
      <div className="mb-2 flex items-center gap-x-2 text-xs">
        <div className="text-foreground border-2 border-black bg-red-500 px-3 py-1 font-bold dark:border-white">
          May 12, 2024
        </div>
        <a
          href="#"
          className="border-border text-foreground relative z-10 border-2 bg-red-500 px-3 py-1 font-bold transition-colors duration-300 hover:bg-blue-700"
        >
          Design System
        </a>
      </div>
      <div className="group relative">
        <h3 className="group-hover:text-red-5-0 text-foreground mt-3 text-2xl leading-6 font-black uppercase">
          <a href="#">
            <span className="absolute inset-0 max-w-xs"></span>Master Atomic
            Design in React
          </a>
        </h3>
        <p className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 dark:text-gray-100">
          Learn how to implement atomic design principles in your React
          projects. Boost your component reusability and maintain a consistent
          design system.
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-2">
        <div className="text-sm leading-6">
          <p className="text-foreground font-black">
            <a href="#" className="hover:underline">
              <span className="absolute inset-0"></span>Sarah Parker
            </a>
          </p>
          <p className="font-bold text-gray-700 dark:text-gray-200">
            Senior UI Engineer
          </p>
        </div>
      </div>
    </article>
  );
}
