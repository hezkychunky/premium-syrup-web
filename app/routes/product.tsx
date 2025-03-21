import { useParams } from "react-router";
import type { Route } from "./+types/product";
import Breadcrumb from "~/components/breadcrumb";

import products from "../data/products.json";
import { toNormalSpacing } from "~/utils/parser";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup Products" },
    { name: "description", content: "Premium Syrup Products by Category" },
  ];
}

export default function Product() {
  const { category, product } = useParams();

  const parsedProduct = toNormalSpacing(product!);
  const productDetails = products.find(
    (product) => product.name.toLowerCase() === parsedProduct
  );

  console.log(productDetails?.theme);

  return (
    <div className="relative flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <div
        className={`hidden fixed -top-[130px] -right-[400px] rounded-full w-[1200px] h-[1200px] opacity-20 xl:flex items-center justify-center`}
        style={{ backgroundColor: productDetails?.theme }}
      ></div>
      <h1
        className={`absolute w-[580px] top-[450px] -left-[200px] -rotate-90 whitespace-nowrap opacity-80 font-bold ${
          product!.toUpperCase().length <= 9 ? "text-8xl" : "text-7xl"
        }`}
        style={{ color: productDetails?.theme }}
      >
        {productDetails ? productDetails?.name.toUpperCase() : "Not Found"}
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-2 w-screen min-h-[600px] px-12">
        <section className="mb-12 lg:mb-0 lg:w-1/2">
          <div className="text-lg">
            <Breadcrumb prefix="products" param1={category} param2={product} />
          </div>
          <div className="flex flex-grow h-full w-full">
            <div className="flex items-center justify-center max-w-[150px]"></div>
            <div className="flex flex-grow justify-end pr-36 h-full]">
              <img src="/products/grenadine.png" alt="" className="h-[580px]" />
            </div>
          </div>
        </section>
        <section className="mb-12 flex flex-col justify-between items-center lg:w-1/2 z-30">
          <div className="py-4">
            <h1 className="mb-4 font-bold">DESCRIPTION</h1>
            <p className="text-2xl">
              Premium® Grenadine delivers a refreshing balance of sweetness and
              tanginess, enriched by the vibrant red hue and the fresh aroma of
              pomegranate. Perfect for elevating your drinks with fruity depth
              and a touch of elegance.
            </p>
          </div>
          <div className="border-y-4 py-4 w-full">
            <h1 className="mb-4 font-bold">VOLUME</h1>
            <p className="text-2xl">{productDetails?.volume}ml</p>
          </div>
          <div className="py-4">
            <h1 className="mb-4 font-bold">INGREDIENTS</h1>
            <p className="text-2xl">
              Granulated Sugar, Water, Acidity Regulator Citric Acid, Synthetic
              Pomegranate Flavoring, Preservative Potassium Sorbate, Salt,
              Synthetic Colorings (Ponceau 4R Cl 16255, Carmoisine Cl 14720)
            </p>
          </div>
          <button className="w-[220px] bg-[theme(--color-secondary)] shadow-md shadow-gray-600 rounded-lg border-2 border-gray-600 py-1 font-bold hover:scale-95">
            SHOP NOW
          </button>
        </section>
      </div>
    </div>
  );
}
