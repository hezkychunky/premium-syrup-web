import React from "react";

interface RecipeCardProps {
  image: string;
  base: string;
  title: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ image, base, title }) => {
  return (
    <div className="flex flex-col w-72 h-[420px] duration-500 hover:scale-110">
      <div className="h-[340px] m-2 flex justify-center items-center border-4 rounded-4xl border-[theme(--color-primary)] py-6">
        <img src={image} alt="recipe image" className="w-40" />
      </div>
      <div className="flex flex-col justify-center text-xl items-center">
        <h1 className="text-center font-light">{base}</h1>
        <h2 className="text-center font-semibold text-[theme(--color-primary)]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default RecipeCard;
