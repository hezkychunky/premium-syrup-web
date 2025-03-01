import type { Route } from "./+types/news";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function News() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-36 bg-[theme(--color-secondary)] text-3xl font-light">
      <h1>NEWS</h1>
    </div>
  );
}
