import ProductCard from "~/components/product-card";
import type { Route } from "./+types/products";
import { NavLink } from "react-router";

import products from "../data/products.json";

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
      <section className="flex flex-wrap justify-evenly gap-10 pt-40 pr-20 mb-12">
        {products.map((item) => {
          return (
            <NavLink to={`/products/${item.category}/${item.name}`}>
              <ProductCard title={item.name} image={item.image} />
            </NavLink>
          );
        })}
      </section>
    </div>
  );
}
