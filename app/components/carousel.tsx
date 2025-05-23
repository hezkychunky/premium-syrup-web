import React, { useEffect, useState } from "react";

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

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Only run the effect once when the component mounts

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Loop to the first slide when going forward
    console.info("clicked");
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    ); // Loop to the last slide when going backward
  };

  return (
    <div className="w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Slide effect
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-full flex-shrink-0"
            style={{ transition: "transform 0.7s ease-in-out" }}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full max-h-screen object-contain rounded-lg"
            />

            {/* Overlay text and CTA button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-700">
              <h2 className="text-3xl font-bold mb-4 bg-transparent backdrop-blur-xs">
                {item.title}
              </h2>
              <a
                href={item.ctaLink}
                className="bg-[theme(--color-secondary)] hover:brightness-95 text-gray-800 px-6 py-3 rounded-lg text-xl"
              >
                {item.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700"
        >
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
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
