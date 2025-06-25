import React, { useEffect, useRef, useState } from "react";

interface CarouselItem {
  image: string;
  bgColor?: string; // Optional background color for the slide
  alt: string;
  title: string;
  ctaText: string;
  ctaLink: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [carouselItems, _] = useState<CarouselItem[]>([
    items[items.length - 1], // Start with the last item
    ...items, // Add all items
    items[0], // Add the first item at the end for looping
  ]);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    resetTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []); // Only run the effect once when the component mounts

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1); // Loop to the first slide when going forward
    setIsTransitioning(true);
    resetTimer();
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1); // Loop to the last slide when going backward
    setIsTransitioning(true);
    resetTimer();
  };

  const onEdgeItems = () => {
    if (currentIndex >= carouselItems.length - 1) {
      setCurrentIndex(1); // Reset to first slide if at the end
      setIsTransitioning(false);
    }

    if (currentIndex <= 0) {
      setCurrentIndex(carouselItems.length - 2); // Reset to last slide if at the beginning
      setIsTransitioning(false);
    }
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1); // Loop to the first slide when going forward
      setIsTransitioning(true);
    }, 3000);
  };

  return (
    <div
      className="relative mx-auto overflow-hidden flex items-center justify-center transition-colors duration-700 ease-in-out"
      style={{
        // show background color of the beginning or end item on fast clicks
        backgroundColor: currentIndex <= 0
          ? carouselItems[0]?.bgColor
          : currentIndex >= carouselItems.length - 1
          ? carouselItems[carouselItems.length - 1]?.bgColor
          : carouselItems[currentIndex]?.bgColor, // Use background color of the first or last item
      }}
    >
      {
        items.length > 1
          ?  <div className="carousel-prev pl-2">
              <button
                onClick={goToPrevious}
                className="bg-gray-800/20 text-white p-4 rounded-full shadow-lg hover:bg-gray-700"
              >
                &lt;
              </button>
            </div>
          : null
      }

      <div
        className={`flex ${isTransitioning ? "transition-all duration-700 ease-in-out" : ""}`}
        onTransitionEnd={onEdgeItems}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Slide effect
        }}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="relative w-full flex-shrink-0 my-auto"
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

              {
                item.ctaLink
                ? <a
                    href={item.ctaLink}
                    className="bg-[theme(--color-secondary)] hover:brightness-95 text-gray-800 px-6 py-3 rounded-lg text-xl"
                  >
                    {item.ctaText}
                  </a>
                : null
              }
            </div>
          </div>
        ))}
      </div>

      {
        items.length > 1
          ? <div className="carousel-next pr-2">
              <button
                onClick={goToNext}
                className="bg-gray-800/20 text-white p-4 rounded-full shadow-lg hover:bg-gray-700"
              >
                &gt;
              </button>
            </div>
          : null
      }
    </div>
  );
};

export default Carousel;
