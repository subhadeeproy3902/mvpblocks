import React from 'react';

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
        <div className={`p-2 flex flex-col w-[calc(50%-8px)] md:w-[calc(33.33%-12px)] lg:w-[calc(25%)] ${className}`}>
            <div aria-hidden="true" className={`relative h-40 md:h-40 lg:h-56 bg-gray-500 animate-pulse ${imageShimmerClassName}`} ></div>
            <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                    <div className="h-4 md:h-5 w-8/12 bg-gray-500 animate-pulse rounded" ></div>
                    <div className={`h-4 md:h-5 w-2/12 bg-gray-500 animate-pulse rounded ${rating ? 'block' : 'hidden'}`} ></div>
                </div>
                <div className="h-3 md:h-4 w-1/2 bg-gray-500 animate-pulse rounded" ></div>
                {Array.from({ length: descriptionLineCount }).map((_, index) => (
                    <div key={index} className="h-2 md:h-3 w-full bg-gray-500 animate-pulse rounded" ></div>
                ))}
            </div>
        </div>
    );
}
