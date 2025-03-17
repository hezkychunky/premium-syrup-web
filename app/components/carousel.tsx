import React, { useState } from "react";

interface CarouselItem {
  image: string;
  alt: string;
  title: string;
  ctaText: string;
  ctaLink: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Loop to the first slide after the last one
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    ); // Loop to the last slide when going backward
  };

  return (
    <div className="relative w-full h-96 max-w-4xl mx-auto overflow-hidden">
      <div className="relative">
        {/* Display the current image */}
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].alt}
          className="min-w-full h-96 object-cover rounded-lg"
        />

        {/* Overlay text and CTA button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-700">
          <h2 className="text-3xl font-bold mb-4 bg-transparant backdrop-blur-xs">
            {items[currentIndex].title}
          </h2>
          <a
            href={items[currentIndex].ctaLink}
            className="bg-[theme(--color-secondary)] hover:brightness-95 text-gray-800 px-6 py-3 rounded-lg text-xl"
          >
            {items[currentIndex].ctaText}
          </a>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700"
        >
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
