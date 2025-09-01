import React from 'react';

import { CardCarousel } from '../ui/card-carousel';

const CardCaroursalDemo = () => {
  const images = [
    { src: 'https://i.postimg.cc/gkjNcTTr/1.webp', alt: 'Image 1' },
    { src: 'https://i.postimg.cc/hGL03WfZ/2.webp', alt: 'Image 2' },
    { src: 'https://i.postimg.cc/KjH7gmHj/3.webp', alt: 'Image 3' },
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
