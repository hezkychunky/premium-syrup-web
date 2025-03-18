import { NavLink, useParams } from "react-router";
import type { Route } from "./+types/recipes-by-category";
import RecipeCard from "~/components/recipe-card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup Products" },
    { name: "description", content: "Premium Syrup Products by Category" },
  ];
}

export default function RecipesByCategory() {
  const { category } = useParams();

  function toNormalSpacing(params: string) {
    return params.replace(/-/g, " ");
  }

  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <h1 className="">{toNormalSpacing(category!).toUpperCase()}</h1>
      <section className="flex flex-wrap justify-between px-20 mt-32 gap-12">
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
