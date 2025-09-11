import RecipeCard from "~/components/recipe-card";
import type { Route } from "./+types/recipes";
import { NavLink } from "react-router";
import recipes from "../data/recipes.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recipes | Premium Syrup" },
    { name: "description", content: "Premium Syrup Products" },
  ];
}

export default function Recipes() {
  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <h1 className="page-title">ALL RECIPES</h1>
      <section className="grid recipes-grid-col mx-12 my-16 gap-12">
        {recipes.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={`/recipes/${item.category}/${item["recipe-name"]}`}
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
  );
}
