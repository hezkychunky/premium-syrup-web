import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

import products from "../data/products.json";
import { toKebabCase } from "~/utils/parser";
import ProductCard from "~/components/product-card";
import type { Route } from "./+types/products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup Products" },
    { name: "description", content: "Premium Syrup Products" },
  ];
}

export default function Products() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
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
      <h1 className="page-title">ALL PRODUCTS</h1>
      <section className="grid products-grid-col mx-12 my-16 gap-12">
        {products.map((item, index) => {
          return (
            <div key={item.name} data-aos="fade-up" data-aos-delay={columns < 3 ? 100 : (index % columns) * 100}>
              <NavLink
                to={`/products/${toKebabCase(item.category)}/${toKebabCase(
                  item.name
                )}`}
              >
                <ProductCard title={item.name} image={item.image} />
              </NavLink>
            </div>
          );
        })}
      </section>
    </div>
  );
}
