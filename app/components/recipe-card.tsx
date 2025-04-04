import React from "react";

interface RecipeCardProps {
  image: string | null;
  base: string;
  title: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ image, base, title }) => {
  return (
    <div className="flex flex-col max-[374px]:w-full max-[374px]:h-auto aspect-3/4 w-72 h-96 rounded-xl border-2 border-gray-400 hover:scale-110">
      <div className="h-4/5 bg-gray-300 m-2 overflow-hidden">
        <img src={image ? image : ""} alt="recipe category image" />
      </div>
      <div className="flex flex-col justify-center text-xl items-center">
        <h1 className="text-center font-light">{base}</h1>
        <h2 className="text-center font-semibold text-[theme(--color-primary)]">{title}</h2>
      </div>
    </div>
  );
};

export default RecipeCard;
