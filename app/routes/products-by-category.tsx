import { NavLink, useParams } from "react-router";
import type { Route } from "./+types/products-by-category";
import ProductCard from "~/components/product-card";

import products from "../data/products.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup Products" },
    { name: "description", content: "Premium Syrup Products by Category" },
  ];
}

export default function ProductsByCategory() {
  const { category } = useParams();

  function toNormalSpacing(params: string) {
    return params.replace(/-/g, " ");
  }
  function toKebabCase(params: string) {
    return decodeURIComponent(params).toLowerCase().replace(/\s/g, "-");
  }

  const parsedCategory = toNormalSpacing(category!);

  const productsByCategory = products.filter(
    (product) => product.category.toLowerCase() === parsedCategory
  );

  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <h1 className="">{parsedCategory.toUpperCase()}</h1>
      <section className="flex flex-wrap justify-evenly gap-10 pt-40 pr-20 mb-12">
        {productsByCategory.map((product) => {
          return (
            <NavLink
              key={product.id}
              to={`/products/${category}/${toKebabCase(product.name)}`}
            >
              <ProductCard title={product.name} image={product.image} />
            </NavLink>
          );
        })}
      </section>
    </div>
  );
}
