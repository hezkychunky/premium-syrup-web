import React from "react";

interface ProductCardProps {
  title: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image }) => {
  return (
    <div className="flex w-60 h-96 hover:scale-110 mb-10">
      <div className="items-center justify-start flex h-full w-2/5">
        <h1 className="-mb-[150px] mr-5 -rotate-90 text-4xl font-bold text-[theme(--color-primary)]">
          {title}
        </h1>
      </div>
      <div className="overflow-hidden flex justify-center w-4/5">
        <img src={image} alt="taste category image" className="" />
      </div>
    </div>
  );
};

export default ProductCard;
