import FollowUs from "~/components/follow-us";
import type { Route } from "./+types/home";
import Carousel from "~/components/carousel";
import OurStorySneak from "~/components/our-story-sneak";
import ProductSneak from "~/components/products-sneak";
import RecipesSneak from "~/components/recipes-sneak";
import PremiumMarquee from "~/components/premium-marquee";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup" },
    { name: "description", content: "Welcome to Premium Syrup Website" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24">
      <Carousel />
      <OurStorySneak />
      <ProductSneak />
      <RecipesSneak />
      <PremiumMarquee />
      <FollowUs />
    </div>
  );
}
