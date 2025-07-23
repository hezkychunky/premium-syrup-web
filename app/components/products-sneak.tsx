import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import products from "../data/products.json";
import ProductCard from "./product-card";
import { toKebabCase } from "~/utils/parser";
import ShopModal from "./shop-modal";

type Product = {
  name: string;
  category: string;
  image: string;
  theme: string;
  tokopediaUrl: string;
  shopeeUrl: string;
};

export default function ProductSneak() {
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleShopNowClick = (product: Product) => {
    setIsShopModalOpen(true); // Open the modal when button is clicked
    setSelectedProduct(product);
  };
  const handleCloseModal = () => {
    setIsShopModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className="h-auto flex flex-col gap-10 lg:gap-16 lg:mb-8 px-10 pt-20 sm:items-center"
        data-aos="fade-up"
      >
        <section className="flex flex-col gap-6 lg:flex-row justify-between w-full">
          <h1 className="text-3xl sm:text-5xl text-[theme(--color-primary)] font-sans font-extrabold">
            OUR PRODUCTS
          </h1>
          <div className="tracking-widest text-center duration-500 border-2 hover:bg-[theme(--color-primary)] hover:text-[theme(--color-secondary)] border-[theme(--color-primary)] text-[theme(--color-primary)] text-2xl font-bold py-2 w-52">
            <Link to={"/products"}>SEE ALL →</Link>
          </div>
        </section>
        <section className="grid products-grid-col mx-10 gap-12 lg:flex lg:justify-evenly lg:w-full">
          {products.slice(13, 17).map((item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <ProductCard
                  title={item.name}
                  image={item.image}
                  color={item.theme}
                />
                <div className="flex justify-between">
                  <Link
                    to={`/products/${toKebabCase(item.category)}/${toKebabCase(
                      item.name
                    )}`}
                    className="w-24 text-center border-2 border-[theme(--color-primary)] text-[theme(--color-primary)]"
                  >
                    ABOUT
                  </Link>
                  <button
                    onClick={() => handleShopNowClick(item)}
                    className="w-24 text-center border-2 border-[theme(--color-primary)] bg-[theme(--color-primary)] text-[theme(--color-secondary)]"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            );
          })}
        </section>
        {isShopModalOpen && selectedProduct && (
          <ShopModal
            tokopedia={selectedProduct.tokopediaUrl}
            shopee={selectedProduct.shopeeUrl}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}
