import type { Route } from "./+types/about-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup" },
    { name: "description", content: "Best Syrup for Any Beverages!" },
  ];
}

export default function AboutUs() {
  return (
    <div className="flex flex-col flex-grow items-center lg:items-start gap-12 px-6 sm:px-12 pt-36 lg:pt-48 text-4xl font-light">
      <h1 className="text-center">
        BEST <b>SYRUP</b> FOR ANY BEVERAGES
      </h1>
      <div className="flex flex-col gap-8 text-xl sm:text-2xl pb-10 xl:pr-32">
        <p>
          Founded in <b>1968, Premium Syrup</b> has been committed to delivering
          high-quality syrup for all kinds of beverages. With decades of
          experience, we are known for our exceptional taste, strict quality
          standards, and hygienic production processes.
        </p>
        <p>
          Our tagline, <b>"Best Syrup for Any Beverages"</b>, reflects our
          mission to complement everything from refreshing mocktails and smooth
          coffees to flavorful teas and creative drink recipes. With every
          bottle, Premium Syrup ensures a smooth, rich, and satisfying
          experience that turns ordinary drinks into something extraordinary.
        </p>
        <p>
          Driven by passion and innovation, we continue to create syrups that
          inspire creativity, enhance flavor, and bring joy to every sip. From
          homes to cafes, Premium Syrup is your trusted companion for delivering
          the perfect taste.
        </p>
      </div>
    </div>
  );
}
