import TastesCard from "~/components/tastes-card";
import type { Route } from "./+types/product-knowledge";
import RecipesSneak from "~/components/recipes-sneak";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Product Knowloedge | Premium Syrup" },
    { name: "description", content: "Best Syrup for Any Beverages!" },
  ];
}

export default function ProductKnowledge() {
  return (
    <div className="pt-36 lg:pt-48">
      <div className="flex flex-col gap-12 px-6 md:px-16 lg:px-10 text-3xl sm:text-4xl font-light">
        <h1 className="text-center lg:text-start">
          KNOW OUR <b>3</b> TASTES
        </h1>

        <section className="flex flex-wrap justify-center sm:justify-between gap-10 lg:gap-0 lg:justify-evenly">
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
        <section className="flex flex-col gap-8 text-2xl lg:pr-32 mb-4">
          <h2>
            We take pride in offering three <b>key advantages</b> that set us
            apart:
          </h2>
          <div className="flex flex-col gap-2">
            <h3>
              <b>Smooth</b>
            </h3>
            <p>
              Made from the finest selected ingredients and produced through a
              high-standard process, our syrups deliver a smooth and consistent
              flavor in every drop.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>
              <b>Rich Taste</b>
            </h3>
            <p>
              With over 30 delightful flavors to choose from, our syrups provide
              endless options for every drink enthusiast. (
              <em>More details about flavor categories will follow</em>).
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>
              <b>Bigger Size</b>
            </h3>
            <p>
              Premium Syrup is available in larger packaging 650ml than other
              our syrups product line (Sirup Fres). Perfect for homes, cafés,
              and businesses that value quality and efficiency.
            </p>
          </div>
        </section>
      </div>
      <RecipesSneak />
    </div>
  );
}
