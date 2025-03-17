import type { Route } from "./+types/products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup Products" },
    { name: "description", content: "Premium Syrup Products" },
  ];
}

export default function Products() {
  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <h1>ALL PRODUCTS</h1>
    </div>
  );
}
