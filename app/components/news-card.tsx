import React from "react";
import { Link } from "react-router";

interface NewsCardProps {
  image: string | null;
  title: string;
  slug: string;
  content: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, title, slug, content }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:max-w-5xl rounded-2xl mb-10">
      <div className="flex justify-center lg:justify-start h-44 w-full lg:w-2/6 m-2 rounded-2xl overflow-hidden">
        <img
          src={image ? image : ""}
          alt="recipe category image"
          className="rounded-2xl lg:w-full"
        />
      </div>
      <div className="flex flex-col justify-center text-xl items-center lg:w-4/6 lg:items-start">
        <h1 className=" font-semibold mb-4">{title}</h1>
        <p className="text-sm lg:mr-12">{content.substring(0, 150)}...</p>
        <Link
          viewTransition
          to={`/news/${slug}`}
          className="rounded-md border-2 font-semibold mb-1 text-lg py-1 px-4 shadow-md shadow-gray-400 mt-14 lg:mt-auto"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
