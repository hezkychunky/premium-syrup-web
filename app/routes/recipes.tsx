import RecipeCard from "~/components/recipe-card";
import type { Route } from "./+types/recipes";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup Products" },
    { name: "description", content: "Premium Syrup Products" },
  ];
}

export default function Recipes() {
  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <h1>ALL RECIPES</h1>
      <section className="grid recipes-grid-col mx-12 my-16 gap-12">
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title="Moonlit Lychee"
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title="Moonlit Lychee"
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title="Moonlit Lychee"
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title="Moonlit Lychee"
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title="Moonlit Lychee"
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title="Moonlit Lychee"
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title="Moonlit Lychee"
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title="Moonlit Lychee"
          />
        </NavLink>
      </section>
    </div>
  );
}
