import React from "react";

interface RecipeCardProps {
  image: string;
  base: string;
  title: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ image, base, title }) => {
  return (
    <div className="w-72 h-[420px] container">
      <div className="flex flex-col cards">
        <div className="card-front w-full">
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
        <div className="card-back w-full">
          <div className="h-[340px] m-2 flex justify-center items-center border-4 rounded-4xl border-[theme(--color-primary)] py-6">
            <h1>BACK SIDE</h1>
          </div>
          <div className="flex flex-col justify-center text-xl items-center">
            <h1 className="text-center font-light">{base}</h1>
            <h2 className="text-center font-semibold text-[theme(--color-primary)]">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
