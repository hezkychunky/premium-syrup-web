import { Link, NavLink } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import recipes from "../data/recipes.json";
import ProductCard from "./product-card";
import { toKebabCase } from "~/utils/parser";
import RecipeCard from "./recipe-card";

export default function RecipesSneak() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className="h-auto flex flex-col gap-10 lg:gap-16 mb-20 pt-20 sm:items-center"
        data-aos="fade-up"
      >
        <section className="flex flex-col gap-6 lg:flex-row justify-between w-full px-10">
          <h1 className="text-3xl sm:text-5xl text-[theme(--color-primary)] font-sans font-extrabold">
            OUR RECIPES
          </h1>
          <div className="tracking-widest text-center duration-500 border-2 hover:bg-[theme(--color-primary)] hover:text-[theme(--color-secondary)] border-[theme(--color-primary)] text-[theme(--color-primary)] text-2xl font-bold py-2 w-52">
            <Link to={"/recipes"}>SEE ALL →</Link>
          </div>
        </section>
        {/* <section className="grid products-grid-col mx-10 gap-12 lg:flex lg:justify-evenly lg:w-full bg-amber-200"> */}
        <section className="flex flex-col items-center sm:flex-row flex-wrap justify-evenly h-auto w-full">
          {recipes.slice(10, 13).map((item, index) => {
            return (
              <NavLink
                key={index}
                to={`/recipes/${item.category}/${item["recipe-name"]}`}
                className="m-4"
              >
                <RecipeCard
                  image={`/recipes/${item.image1}`}
                  base={item["base-syrup"]}
                  title={item["recipe-name"]}
                />
              </NavLink>
            );
          })}
        </section>
      </div>
    </>
  );
}
