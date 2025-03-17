import { useParams } from "react-router";
import type { Route } from "./+types/products-by-category";
import ProductCard from "~/components/product-card";

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

  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <h1 className="">{toNormalSpacing(category!).toUpperCase()}</h1>
      <section className="flex flex-wrap justify-evenly gap-10 pt-40 pr-20 mb-12">
        <ProductCard title="PRODUCT1" image="/products/grenadine.png" />
        <ProductCard title="PRODUCT2" image="/products/caramel.png" />
        <ProductCard title="PRODUCT3" image="/products/bubble-gum.png" />
        <ProductCard title="PRODUCT4" image="/products/grenadine.png" />
        <ProductCard title="PRODUCT5" image="/products/caramel.png" />
        <ProductCard title="PRODUCT6" image="/products/bubble-gum.png" />
        <ProductCard title="PRODUCT7" image="/products/grenadine.png" />
        <ProductCard title="PRODUCT8" image="/products/caramel.png" />
        <ProductCard title="PRODUCT9" image="/products/bubble-gum.png" />
      </section>
    </div>
  );
}
