import { NavLink, useParams } from "react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import type { Route } from "./+types/products-by-category";
import ProductCard from "~/components/product-card";
import products from "../data/products.json";
import { toKebabCase, toNormalSpacing } from "~/utils/parser";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products | Premium Syrup" },
    { name: "description", content: "Premium Syrup Products by Category" },
  ];
}

export default function ProductsByCategory() {
  const [columns, setColumns] = useState(1);
  const { category } = useParams();

  const parsedCategory = toNormalSpacing(category!);

  const productsByCategory = products.filter(
    (product) => product.category.toLowerCase() === parsedCategory
  );

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
    });

    // show staggered animations on medium to large screens
    const width = window.innerWidth;
    if (width >= 1280) {
      setColumns(5);
    } else if (width >= 1024) {
      setColumns(4);
    } else if (width >= 768) {
      setColumns(3);
    }
  }, []);

  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-4xl font-semibold">
      <h1 className="page-title">{parsedCategory.toUpperCase()}</h1>
      <section className="flex flex-wrap justify-center xl:justify-start gap-10 pt-36 mb-12 w-11/12">
        {productsByCategory.map((product, index) => {
          return (
            <div
              key={product.name}
              data-aos="fade-up"
              data-aos-delay={columns < 3 ? 100 : (index % columns) * 100}
            >
              <NavLink
                key={product.id}
                to={`/products/${category}/${toKebabCase(product.name)}`}
              >
                <ProductCard
                  title={product.name}
                  image={product.image}
                  color={product.theme}
                />
              </NavLink>
            </div>
          );
        })}
      </section>
    </div>
  );
}
