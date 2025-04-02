import { NavLink, useParams } from "react-router";
import type { Route } from "./+types/recipes-by-category";
import RecipeCard from "~/components/recipe-card";
import { toNormalSpacing } from "~/utils/parser";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup Products" },
    { name: "description", content: "Premium Syrup Products by Category" },
  ];
}

export default function RecipesByCategory() {
  const { category } = useParams();

  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <h1 className="">{toNormalSpacing(category!).toUpperCase()}</h1>
      <section className="grid recipes-grid-col mx-12 my-16 gap-12">
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title={`${category} category`}
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title={`${category} category`}
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title={`${category} category`}
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title={`${category} category`}
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title={`${category} category`}
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title={`${category} category`}
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title={`${category} category`}
          />
        </NavLink>
        <NavLink to={`/recipes/${"category"}/${"recipename"}`}>
          <RecipeCard
            image={""}
            base="PREMIUM® LYCHEE"
            title={`${category} category`}
          />
        </NavLink>
      </section>
    </div>
  );
}
