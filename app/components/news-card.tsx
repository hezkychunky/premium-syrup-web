import React from "react";
import { Link } from "react-router";

interface NewsCardProps {
  image: string;
  title: string;
  content: string;
  source: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  source,
  content,
}) => {
  return (
    <div className="flex flex-1 flex-col md:flex-row md:items-stretch lg:max-w-[1500px] gap-4 mb-8">
      <section className="flex items-center justify-center h-40 w-72 rounded-3xl overflow-hidden">
        <img src={image} alt="recipe category image" className="object-cover" />
      </section>
      <section className="flex flex-col justify-between text-xl items-center md:w-4/6 md:items-start">
        <h1 className="font-semibold mt-4 md:mt-0">{title}</h1>
        <p className="text-sm line-clamp-2 lg:line-clamp-3 lg:mt-4 lg:max-w-150">
          {content.substring(0, 150)}...
        </p>
        <Link
          viewTransition
          to={source}
          target="_blank"
          className="rounded-md border-1 font-semibold mb-1 md:text-sm lg:text-base py-1 px-4 shadow-md shadow-gray-400 mt-4 md:mt-auto"
        >
          READ MORE
        </Link>
      </section>
    </div>
  );
};

export default NewsCard;
