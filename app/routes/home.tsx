import type { Route } from "./+types/home";
import Carousel from "~/components/carousel";

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
    ctaLink: "",
  },
  {
    image: "/carousel/premium_recipes.png",
    bgColor: "rgb(56, 118, 29)",
    alt: "Premium Recipes",
    title: "",
    ctaText: "",
    ctaLink: "",
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
    <div className="flex flex-col min-h-screen pt-20 sm:pt-24 mb-12">
      <Carousel items={carouselItems} />

      <div className="py-4" />

      <Carousel items={otherContent} />

      {/* <div className="py-4" />

      <Carousel items={otherContent} /> */}
    </div>
  );
}
