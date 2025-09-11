import { useParams } from "react-router";
import type { Route } from "./+types/recipe";
import Breadcrumb from "~/components/breadcrumb";
import IngredientsCard from "~/components/ingredients-card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recipe | Premium Syrup" },
    { name: "description", content: "Premium Syrup Products by Category" },
  ];
}

export default function Recipe() {
  const { category, recipe } = useParams();

  return (
    <div className="pt-36 text-3xl font-light">
      {/* background */}
      <div className="hidden fixed z-0 -top-[130px] -right-[400px] rounded-full w-[1200px] h-[1200px] bg-[#d54d5d] opacity-20 min-[1200px]:flex items-center justify-center"></div>

      <div className="min-h-[600px] px-12 z-30">
        <div className="text-lg">
          <Breadcrumb prefix="recipes" param1={category} param2={recipe} />
        </div>

        {/* Title */}
        <h1 className="text-4xl mt-8 mb-12">
          PREMIUM® LYCHEE - <b>{recipe}</b>
        </h1>

        <div className="min-[1200px]:flex min-[1200px]:flex-row min-[1200px]:gap-16">
          {/* Left section */}
          <section className="flex flex-col md:flex-row items-center min-[1200px]:items-start md:justify-evenly min-[1200px]:gap-12">
            <img
              src="/products/grenadine.png"
              alt="Grenadine"
              className="h-[400px]"
            />
            <IngredientsCard />
          </section>

          {/* Right section */}
          <section className="pr-4 max-[1200px]:py-4 min-[1200px]:z-30 min-[1200px]:h-108 min-[1200px]:overflow-auto">
            <h1 className="mb-8 text-4xl">HOW TO PREPARE</h1>
            <ol className="list-decimal list-inside">
              <li className="mb-4">Lorem ipsum dolor sit amet,</li>
              <li className="mb-4">consectetuer adipiscing elit,</li>
              <li className="mb-4">sed diam nonummy nibh euismod tincidunt</li>
              <li className="mb-4">
                ut laoreet dolore magna aliquam erat volutpat
              </li>
              <li className="mb-4">Lorem ipsum dolor sit amet,</li>
              <li className="mb-4">consectetuer adipiscing elit,</li>
              <li className="mb-4">sed diam nonummy nibh euismod tincidunt</li>
              <li className="mb-4">
                ut laoreet dolore magna aliquam erat volutpat
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
