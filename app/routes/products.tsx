import ProductCard from "~/components/product-card";
import type { Route } from "./+types/products";
import { NavLink } from "react-router";

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
        <NavLink to={`/products/${"category"}/${"productname"}`}>
          <ProductCard title="PRODUCT1" image="/products/grenadine.png" />
        </NavLink>
        <NavLink to={`/products/${"category"}/${"productname"}`}>
          <ProductCard title="PRODUCT2" image="/products/caramel.png" />
        </NavLink>
        <NavLink to={`/products/${"category"}/${"productname"}`}>
          <ProductCard title="PRODUCT3" image="/products/bubble-gum.png" />
        </NavLink>
        <NavLink to={`/products/${"category"}/${"productname"}`}>
          <ProductCard title="PRODUCT4" image="/products/grenadine.png" />
        </NavLink>
        <NavLink to={`/products/${"category"}/${"productname"}`}>
          <ProductCard title="PRODUCT5" image="/products/caramel.png" />
        </NavLink>
        <NavLink to={`/products/${"category"}/${"productname"}`}>
          <ProductCard title="PRODUCT6" image="/products/bubble-gum.png" />
        </NavLink>
        <NavLink to={`/products/${"category"}/${"productname"}`}>
          <ProductCard title="PRODUCT7" image="/products/grenadine.png" />
        </NavLink>
        <NavLink to={`/products/${"category"}/${"productname"}`}>
          <ProductCard title="PRODUCT8" image="/products/caramel.png" />
        </NavLink>
        <NavLink to={`/products/${"category"}/${"productname"}`}>
          <ProductCard title="PRODUCT9" image="/products/bubble-gum.png" />
        </NavLink>
      </section>
    </div>
  );
}
