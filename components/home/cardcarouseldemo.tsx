import React from 'react';

import { CardCarousel } from '../ui/card-carousel';

const CardCaroursalDemo = () => {
  const images = [
    { src: '/assets/card-carousel/1.webp', alt: 'Image 1' },
    { src: '/assets/card-carousel/2.webp', alt: 'Image 2' },
    { src: '/assets/card-carousel/3.webp', alt: 'Image 3' },
  ];

  return (
    <div className="w-full">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default CardCaroursalDemo;
