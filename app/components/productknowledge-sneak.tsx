import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TastesCard from "./tastes-card";

export default function ProductKnowledgeSneak() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className="h-auto flex flex-col gap-10 lg:gap-16 px-10 pt-20 sm:items-center"
        data-aos="fade-up"
      >
        <section className="flex flex-col gap-6 lg:flex-row justify-between w-full">
          <h1 className="text-3xl sm:text-5xl text-[theme(--color-primary)] font-sans font-extrabold">
            PRODUCT KNOWLEDGE
          </h1>
          <div className="tracking-widest text-center duration-500 border-2 hover:bg-[theme(--color-primary)] hover:text-[theme(--color-secondary)] border-[theme(--color-primary)] text-[theme(--color-primary)] text-2xl font-bold p-2 w-64">
            <Link to={"/our-story/product-knowledge"}>LEARN MORE →</Link>
          </div>
        </section>
        <section className="flex flex-wrap justify-center sm:justify-between gap-10 lg:justify-evenly">
          <Link
            className="hover:scale-95 duration-1000"
            to={"/products/fruity-delights"}
          >
            <TastesCard
              preTitle="TROPICAL"
              boldTitle="FRUIT"
              postTitle="CREATIONS"
              color="bg-red-800"
              image="/products/product-knowledge1.png"
              heading="Endless Fruity Flavors"
              description="Cantaloupe, Green Apple, Mango, Peach, Lychee, Banana, Blue Curacao, Coconut, Lemon Lime, Raspberry, Lemon, Passion Fruit, Strawberry, Grenadine, Lime, Blackcurrant, Pineapple.
"
            />
          </Link>
          <Link
            className="hover:scale-95 duration-1000"
            to={"/products/coffee-delights"}
          >
            <TastesCard
              preTitle="RICH"
              boldTitle="COFFEE"
              postTitle="INFUSIONS"
              color="bg-yellow-700"
              image="/products/product-knowledge2.png"
              heading="Sweet & Creamy for Coffee Delights"
              description="Caramel, Hazelnut, Irish Cream, Vanilla, Tiramisu, Butterscotch."
            />
          </Link>
          <Link
            className="hover:scale-95 duration-1000"
            to={"/products/unique-delights"}
          >
            <TastesCard
              preTitle="EXOTIC &"
              boldTitle="UNIQUE"
              postTitle="BLENDS"
              color="bg-teal-700"
              image="/products/product-knowledge3.png"
              heading="Exotic & Unique Flavors "
              description="Pandan, Palm Sugar, Rose, Elderflower, Bubble Gum, Taro, Mint."
            />
          </Link>
        </section>
      </div>
    </>
  );
}
