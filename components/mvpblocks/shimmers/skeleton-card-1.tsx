interface ShimmerCardOneInterface {
  descriptionLineCount?: number;
  rating?: boolean;
  className?: string;
  imageShimmerClassName?: string;
}

export default function ShimmerCardOne({
  descriptionLineCount = 1,
  rating = true,
  className = '',
  imageShimmerClassName = 'rounded',
}: ShimmerCardOneInterface) {
  return (
    <div className={`flex w-full max-w-xs flex-col p-2 ${className}`}>
      <div
        aria-hidden="true"
        className={`relative h-40 animate-pulse bg-gray-500 md:h-40 lg:h-56 ${imageShimmerClassName}`}
      ></div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <div className="h-4 w-8/12 animate-pulse rounded bg-gray-500 md:h-5"></div>
          <div
            className={`h-4 w-2/12 animate-pulse rounded bg-gray-500 md:h-5 ${rating ? 'block' : 'hidden'}`}
          ></div>
        </div>
        <div className="h-3 w-1/2 animate-pulse rounded bg-gray-500 md:h-4"></div>
        {Array.from({ length: descriptionLineCount }).map((_, index) => (
          <div
            key={index}
            className="h-2 w-full animate-pulse rounded bg-gray-500 md:h-3"
          ></div>
        ))}
      </div>
    </div>
  );
}
