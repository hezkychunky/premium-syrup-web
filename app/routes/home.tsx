import FollowUs from "~/components/follow-us";
import type { Route } from "./+types/home";
import Carousel from "~/components/carousel";
import OurStorySneak from "~/components/our-story-sneak";
import ProductSneak from "~/components/products-sneak";
import RecipesSneak from "~/components/recipes-sneak";

const otherContent = [
  {
    image: "/samples/grey.jpg",
    alt: "other-content",
    title: "About Us",
    ctaText: "Learn More",
    ctaLink: "/our-story/about-us",
  },
  {
    image: "/samples/grey.jpg",
    alt: "other-content",
    title: "Product Knowledge",
    ctaText: "Learn More",
    ctaLink: "/our-story/product-knowledge",
  },
];

const carouselItems = [
  {
    image: "/carousel/all_products.png",
    bgColor: "#d0152c",
    alt: "All Products",
    title: "",
    ctaText: "",
    ctaLink: "/products",
  },
  {
    image: "/carousel/premium_recipes.png",
    bgColor: "rgb(56, 118, 29)",
    alt: "Premium Recipes",
    title: "",
    ctaText: "",
    ctaLink: "/recipes",
  },
  {
    image: "/carousel/marketplace.png",
    bgColor: "rgb(255, 217, 102)",
    alt: "Marketplace",
    title: "",
    ctaText: "",
    ctaLink: "",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup" },
    { name: "description", content: "Welcome to Premium Syrup Website" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24">
      <Carousel items={carouselItems} />
      <OurStorySneak />
      <ProductSneak />
      <RecipesSneak />
      <FollowUs />
    </div>
  );
}
