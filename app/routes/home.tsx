import type { Route } from "./+types/home";
import Carousel from "~/components/carousel";
import OurStorySneak from "~/components/our-story-sneak";
import ProductSneak from "~/components/products-sneak";
import RecipesSneak from "~/components/recipes-sneak";
import PremiumMarquee from "~/components/premium-marquee";
import ProductKnowledgeSneak from "~/components/productknowledge-sneak";
import FollowUs from "~/components/follow-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Premium Syrup" },
    { name: "description", content: "Welcome to Premium Syrup Website" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24">
      <Carousel />
      <div className="relative">
        <div className="hidden xl:block absolute inset-0 pointer-events-none overflow-hidden">
          {/* Bubble 1 */}
          <div className="absolute -top-16 -right-56 w-[900px] h-[900px] bg-emerald-900 opacity-5 rounded-full" />
          {/* Bubble 2 */}
          <div className="absolute top-[600px] -left-80 w-[1000px] h-[1000px] bg-red-900 opacity-10 rounded-full" />
          {/* Bubble 3 */}
          <div className="absolute top-[1300px] -right-60 w-[900px] h-[900px] bg-lime-200 rounded-full opacity-10" />
          {/* Bubble 4 */}
          <div className="absolute top-[2000px] -left-80 w-[1000px] h-[1000px] bg-lime-800 rounded-full opacity-10" />
          {/* Bubble 5 */}
          <div className="absolute top-[2700px] -right-60 w-[900px] h-[900px] bg-green-950 rounded-full opacity-15" />
        </div>
        <OurStorySneak />
        <ProductSneak />
        <ProductKnowledgeSneak />
        <RecipesSneak />
        <PremiumMarquee />
        <FollowUs />
      </div>
    </div>
  );
}
