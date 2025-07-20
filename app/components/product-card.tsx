import React from "react";

interface ProductCardProps {
  title: string;
  image: string;
  color: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, color }) => {
  return (
    <div className="relative flex w-56 h-96 hover:scale-110 duration-1000 mb-10">
      {/* Text container on the left side, absolute positioning */}
      <div className="absolute left-3 bottom-0 transform -translate-y-1/2 items-start w-1/5">
        <h1
          className="-rotate-90 text-4xl font-bold whitespace-nowrap"
          style={{ color: color }}
        >
          {title.toUpperCase()}
        </h1>
      </div>
      {/* Image container */}
      <div className="overflow-hidden flex justify-center w-full">
        <img
          src={image}
          alt="taste category image"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProductCard;
