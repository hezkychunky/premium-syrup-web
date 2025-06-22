import type { Route } from "./+types/home";
import Carousel from "~/components/carousel";

const otherContent = [
  {
    image: "/samples/other-content.jpg",
    alt: "other-content",
    title: "Other Content",
    ctaText: "Add more content here",
    ctaLink: "#",
  },
];

const carouselItems = [
  {
    image: "/carousel/all_products.png",
    alt: "All Products",
    title: "",
    ctaText: "",
    ctaLink: "",
  },
  {
    image: "/carousel/premium_recipes.png",
    alt: "Premium Recipes",
    title: "",
    ctaText: "",
    ctaLink: "",
  },
  {
    image: "/carousel/marketplace.png",
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
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24 mb-12">
      <Carousel items={carouselItems} />
      <Carousel items={otherContent} />
      <Carousel items={otherContent} />
    </div>
  );
}
