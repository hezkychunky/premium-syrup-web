import ProductCard from "~/components/product-card";
import type { Route } from "./+types/products";
import { NavLink } from "react-router";

import products from "../data/products.json";
import { toKebabCase } from "~/utils/parser";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup Products" },
    { name: "description", content: "Premium Syrup Products" },
  ];
}

export default function Products() {
  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-4xl font-semibold">
      <h1>ALL PRODUCTS</h1>
      <section className="flex flex-wrap justify-center xl:justify-start gap-10 pt-36 mb-12 w-11/12">
        {products.map((item) => {
          return (
            <NavLink
              to={`/products/${toKebabCase(item.category)}/${toKebabCase(
                item.name
              )}`}
            >
              <ProductCard title={item.name} image={item.image} />
            </NavLink>
          );
        })}
      </section>
    </div>
  );
}
