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
    image: "/samples/carousel-1.jpg.webp",
    alt: "Image 1",
    title: "BEST SYRUP FOR EVERY BEVERAGE",
    ctaText: "Learn More",
    ctaLink: "#",
  },
  {
    image: "/samples/carousel-2.jpg",
    alt: "Image 2",
    title: "Unleash the Power",
    ctaText: "Explore Now",
    ctaLink: "#",
  },
  {
    image: "/samples/carousel-3.webp.jpeg",
    alt: "Image 3",
    title: "Get Ready for the Future",
    ctaText: "Shop Now",
    ctaLink: "#",
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
    <div className="flex flex-col gap-20 min-h-screen pt-40 mb-12">
      <Carousel items={carouselItems} />
      <Carousel items={otherContent} />
      <Carousel items={otherContent} />
    </div>
  );
}
