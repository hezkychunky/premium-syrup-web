import React from "react";

interface TastesCardProps {
  color: string;
  preTitle: string;
  boldTitle: string;
  postTitle: string;
  image: string;
  heading: string;
  description: string;
}

const TastesCard: React.FC<TastesCardProps> = ({
  color,
  preTitle,
  boldTitle,
  postTitle,
  image,
  heading,
  description,
}) => {
  return (
    <div className="flex flex-col w-80 items-center">
      <h1
        className={`z-30 flex justify-center items-center w-full h-12 shadow-gray-500 shadow-lg rounded-xl text-xl text-white ${color}`}
      >
        {preTitle} <b className="mx-2">{boldTitle}</b> {postTitle}
      </h1>
      <div className="rounded-b-3xl w-full pt-8 -mt-6 mb-4 overflow-hidden bg-gray-200 flex justify-center">
        <img src={image} alt="taste category image" className="h-80" />
      </div>
      <h2 className="text-lg font-semibold">{heading}</h2>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default TastesCard;
