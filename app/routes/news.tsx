import NewsCard from "~/components/news-card";
import type { Route } from "./+types/news";

import newsData from "~/data/news.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const news = newsData; // TODO: replaced with Wordpress API call
  return news;
}

type News = {
  id: number;
  image: string
  title: string;
  slug: string;
  content: string;
  date: string;
};

export default function News({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-grow flex-col items-center news-list text-3xl font-light">
      {
        loaderData.map((news: News) => {
          return (
            <NewsCard
              key={news.id}
              image={news.image}
              title={news.title}
              slug={news.slug}
              content={news.content}
            />
          );
        })
      }
    </div>
  );
}
