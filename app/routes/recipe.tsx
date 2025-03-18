import { useParams } from "react-router";
import type { Route } from "./+types/recipe";
import Breadcrumb from "~/components/breadcrumb";
import IngredientsCard from "~/components/ingredients-card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup Products" },
    { name: "description", content: "Premium Syrup Products by Category" },
  ];
}

export default function Recipe() {
  const { category, recipe } = useParams();

  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <div className="hidden fixed -top-[130px] -right-[400px] rounded-full w-[1200px] h-[1200px] bg-[#d54d5d] opacity-20 xl:flex items-center justify-center"></div>
      <div className="flex flex-col lg:flex-row lg:gap-2 w-screen min-h-[600px] px-12">
        <section className="lg:w-1/2">
          <div className="text-lg">
            <Breadcrumb prefix="recipes" param1={category} param2={recipe} />
          </div>
          <div className="flex flex-grow h-full w-full z-30">
            <div className="flex flex-col items-start justify-start mt-8 w-full h-full">
              <h1 className="text-4xl mb-12">
                PREMIUM® LYCHEE - <b>{recipe}</b>
              </h1>
              <div className="flex flex-col xl:flex-row xl:justify-between w-full">
                <div className="flex flex-grow justify-center">
                  <img
                    src="/products/grenadine.png"
                    alt=""
                    className="h-[400px]"
                  />
                </div>
                <IngredientsCard />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-between items-center lg:w-1/2 z-30">
          <div className="flex flex-col h-full justify-center py-4">
            <h1 className="mb-8 text-4xl">HOW TO PREPARE</h1>
            <ol className="list-decimal list-inside">
              <li className="mb-4">Lorem ipsum dolor sit amet,</li>
              <li className="mb-4">consectetuer adipiscing elit,</li>
              <li className="mb-4">sed diam nonummy nibh euismod tincidunt</li>
              <li className="mb-4">
                ut laoreet dolore magna aliquam erat volutpat
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
