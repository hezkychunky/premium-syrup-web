import { useParams } from "react-router";
import type { Route } from "./+types/product";
import Breadcrumb from "~/components/breadcrumb";

import products from "../data/products.json";
import { toNormalSpacing } from "~/utils/parser";
import { useState } from "react";
import ShopModal from "~/components/shop-modal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Product | Premium Syrup" },
    { name: "description", content: "Premium Syrup Products by Category" },
  ];
}

export default function Product() {
  const { category, product } = useParams();
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const parsedProduct = toNormalSpacing(product!);
  const productDetails = products.find(
    (product) => product.name.toLowerCase() === parsedProduct
  );

  const handleShopNowClick = () => {
    setIsShopModalOpen(true); // Open the modal when button is clicked
  };
  const handleCloseModal = () => {
    setIsShopModalOpen(false);
  };

  return (
    <div className="relative flex flex-col flex-grow items-center pt-32 sm:text-3xl text-2xl font-light">
      {isShopModalOpen && (
        <ShopModal
          tokopedia={productDetails?.tokopediaUrl!}
          shopee={productDetails?.shopeeUrl!}
          onClose={handleCloseModal}
        />
      )}
      <div
        className={`hidden fixed -top-[130px] -right-[400px] rounded-full w-[1200px] h-[1200px] opacity-20 xl:flex items-center justify-center`}
        style={{ backgroundColor: productDetails?.theme }}
      ></div>
      <h1
        className={`absolute sm:w-[580px] sm:top-[420px] top-[370px] sm:-left-[200px] -left-[130px] -rotate-90 whitespace-nowrap opacity-80 text-6xl font-bold ${
          product!.toUpperCase().length <= 9 ? "sm:text-8xl" : "sm:text-7xl"
        }`}
        style={{ color: productDetails?.theme }}
      >
        {productDetails ? productDetails?.name.toUpperCase() : "Not Found"}
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-2 w-screen min-h-[600px] px-5 sm:px-12 mb-4">
        <section className="mb-12 lg:mb-0 lg:w-1/2">
          <div className="text-lg mb-10">
            <Breadcrumb prefix="products" param1={category} param2={product} />
          </div>
          <div className="flex flex-grow h-full w-full">
            <div className="flex flex-grow justify-end sm:pr-28 h-full]">
              <img
                src={productDetails?.detail1}
                alt={`${productDetails?.image} image`}
                className="sm:h-[580px]"
              />
            </div>
          </div>
        </section>
        <section className="my-12 flex flex-col justify-between items-center lg:w-1/2 z-30">
          <div className="py-4">
            <h1 className="mb-4 font-bold">DESCRIPTION</h1>
            <p className="sm:text-lg text-sm">{productDetails?.description}</p>
          </div>
          <div className="border-y-4 py-4 w-full">
            <h1 className="mb-4 font-bold">VOLUME</h1>
            <p className="sm:text-lg text-sm">{productDetails?.volume}ml</p>
          </div>
          <div className="py-4 pb-12">
            <h1 className="mb-4 font-bold">INGREDIENTS</h1>
            <p className="sm:text-lg text-sm">{productDetails?.ingredients}</p>
          </div>
          <button
            onClick={handleShopNowClick}
            className="w-[220px] bg-[theme(--color-secondary)] shadow-md shadow-gray-600 rounded-lg border-2 border-gray-600 py-1 font-bold hover:scale-95"
          >
            SHOP NOW
          </button>
        </section>
      </div>
    </div>
  );
}
