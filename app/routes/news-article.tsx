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
    <main className="pl-12 pr-12 lg:pr-72 pt-28 md:pt-36">
      <h1 id="news-title" className="text-[22px] md:text-[36px]">{news.title}</h1>
      <p id="news-time">
        {dayjs(news.date).locale('id').format('dddd, DD/MM/YYYY HH:mm:ss')}
      </p>
      <img alt={news.title} src={news.image} className="mt-4 mb-8 rounded-2xl md:w-180" />
      <article id="news-content">
        <p>{news.content}</p>
      </article>
    </main>
  );
}
