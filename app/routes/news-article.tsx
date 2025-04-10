import dayjs from "dayjs";
import "dayjs/locale/id";

import type { Route } from "./+types/news";
import newsData from "~/data/news.json";

export async function loader({ params }: Route.LoaderArgs) {
  const news: News | undefined = newsData.find((news) => news.slug === params.slug); // TODO: replaced with Wordpress API call
  return news;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type News = {
  id: number;
  image: string
  title: string;
  slug: string;
  content: string;
  date: string;
};

export default function NewsArticle({ loaderData }: Route.ComponentProps) {
  const news: News = loaderData as any;

  return (
    <main className="px-12 md:px-24 lg:px-48 xl:px-72 2xl:px-96 pt-28 md:pt-36">
      <h1 id="news-title" className="text-[22px] md:text-[36px]">{news.title}</h1>
      <p id="news-time">
        {dayjs(news.date).locale('id').format('dddd, DD/MM/YYYY HH:mm:ss')}
      </p>

      <figure className="flex justify-center align-center mt-4 mb-6 lg:mt-8 lg:mb-12">
        <img
          alt={news.title}
          src={news.image}
          className="rounded-2xl md:w-180"
        />
      </figure>
      
      <article id="news-content">
        <p>{news.content}</p>
      </article>
    </main>
  );
}
