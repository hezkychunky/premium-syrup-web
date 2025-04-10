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
    <div className="flex flex-1 flex-col md:flex-row md:items-stretch lg:max-w-5xl rounded-2xl mb-8 lg:mb-4">
      <img
        src={image ?? ''}
        alt="recipe category image"
        className="h-full self-center max-w-72 md:mr-2 rounded-3xl overflow-hidden"
      />
      <div className="flex flex-col justify-center text-xl items-center md:w-4/6 md:items-start lg:py-2">
        <h1 className="font-semibold mt-4 md:mt-0">{title}</h1>
        <p className="text-sm line-clamp-2 lg:line-clamp-3 lg:mt-4 lg:max-w-120">
          {content.substring(0, 150)}...
        </p>
        <Link
          viewTransition
          to={`/news/${slug}`}
          className="rounded-md border-1 font-semibold mb-1 md:text-sm lg:text-base py-1 px-4 shadow-md shadow-gray-400 mt-4 md:mt-auto"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
