import { NavLink, useParams } from "react-router";
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

  const parsedCategory = toNormalSpacing(category!);

  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <h1 className="">{parsedCategory.toUpperCase()}</h1>
      <section className="flex flex-wrap justify-evenly gap-10 pt-40 pr-20 mb-12">
        <NavLink to={`/products/${category}/${"productname"}`}>
          <ProductCard
            title={`${parsedCategory}`}
            image="/products/grenadine.png"
          />
        </NavLink>
        <NavLink to={`/products/${category}/${"productname"}`}>
          <ProductCard
            title={`${parsedCategory}`}
            image="/products/caramel.png"
          />
        </NavLink>
        <NavLink to={`/products/${category}/${"productname"}`}>
          <ProductCard
            title={`${parsedCategory}`}
            image="/products/bubble-gum.png"
          />
        </NavLink>
        <NavLink to={`/products/${category}/${"productname"}`}>
          <ProductCard
            title={`${parsedCategory}`}
            image="/products/grenadine.png"
          />
        </NavLink>
        <NavLink to={`/products/${category}/${"productname"}`}>
          <ProductCard
            title={`${parsedCategory}`}
            image="/products/caramel.png"
          />
        </NavLink>
        <NavLink to={`/products/${category}/${"productname"}`}>
          <ProductCard
            title={`${parsedCategory}`}
            image="/products/bubble-gum.png"
          />
        </NavLink>
        <NavLink to={`/products/${category}/${"productname"}`}>
          <ProductCard
            title={`${parsedCategory}`}
            image="/products/grenadine.png"
          />
        </NavLink>
        <NavLink to={`/products/${category}/${"productname"}`}>
          <ProductCard
            title={`${parsedCategory}`}
            image="/products/caramel.png"
          />
        </NavLink>
        <NavLink to={`/products/${category}/${"productname"}`}>
          <ProductCard
            title={`${parsedCategory}`}
            image="/products/bubble-gum.png"
          />
        </NavLink>
      </section>
    </div>
  );
}
