import ProductSneak from "~/components/products-sneak";
import type { Route } from "./+types/about-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Premium Syrup" },
    { name: "description", content: "Best Syrup for Any Beverages!" },
  ];
}

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-10 items-center pt-36 lg:pt-48 mb-8">
      <div className="flex flex-col lg:items-start gap-4 px-6 sm:px-12 text-2xl sm:text-4xl font-light">
        <h1 className="text-center text-[theme(--color-primary)]">
          ESTABLISHED <b>LEGACY</b>, EVOLVING <b>TASTE</b>
        </h1>
        <p className="text-lg sm:text-2xl xl:pr-32">
          Since 1968, <b>Premium® Syrup</b> has been committed to delivering
          high-quality syrup for all kinds of beverages. We dedicated to
          producing high quality syrups that enhance the drinking experience
          across generations. What began as a commitment to quality and
          consistency has now grown into a brand that moves with the times
          bridging tradition with innovation, and craftsmanship with creativity.
        </p>
      </div>
      <div className="flex flex-col lg:items-start gap-4 px-6 sm:px-12 text-2xl sm:text-4xl font-light">
        <h1 className="w-full lg:text-right text-center text-[theme(--color-primary)]">
          A <b>FLAVOR FOR EVERY IMAGINATION</b>
        </h1>
        <p className="lg:text-right text-lg sm:text-2xl xl:pl-32">
          Our tagline <b>"Best Syrup for Any Beverages"</b>, continues to be our
          guiding principle as we develop an extensive range of syrup flavors.
          From the classics like Vanilla, Caramel, and Hazelnut to tropical
          signatures like Rose and Bubble Gum, each Premium® Syrup is crafted to
          elevate beverages from barista-style coffees and artisan mixologist to
          mocktails, cocktails, and smoothies.
        </p>
      </div>
      <div className="flex flex-col lg:items-start gap-4 px-6 sm:px-12 text-2xl sm:text-4xl font-light">
        <h1 className="text-center text-[theme(--color-primary)]">
          <b>FROM HOME BARS, TO HOSPITALITY</b>
        </h1>
        <p className="text-lg sm:text-2xl xl:pr-32">
          Premium® Syrup serves a wide array of customers home brewers,
          mixologists, coffee shop owners, bartenders, hotel operators, and food
          & beverage professionals across Indonesia. Our products are trusted
          for their consistent flavor, high quality, and versatility, making
          them a key component in the menus of cafés, restaurants, and events.
        </p>
      </div>
      <div className="flex flex-col lg:items-start gap-4 px-6 sm:px-12 text-2xl sm:text-4xl font-light">
        <h1 className="w-full lg:text-right text-center text-[theme(--color-primary)]">
          <b>QUALITY</b> YOU CAN TASTE
        </h1>
        <p className="lg:text-right text-lg sm:text-2xl xl:pl-32">
          Our syrups are manufactured using hygienic processes, rigorous quality
          control, and selected ingredients to ensure every bottle delivers a
          smooth, balanced, and delightful taste. Every batch is tested to meet
          safety and food-grade standards, providing peace of mind to every
          customer and partner.
        </p>
      </div>
      <div className="flex flex-col lg:items-start gap-4 px-6 sm:px-12 text-2xl sm:text-4xl font-light">
        <h1 className="text-center text-[theme(--color-primary)]">
          INSPIRED BY <b>CREATIVITY</b>, BUILT FOR <b>EXPRESSION</b>
        </h1>
        <p className="text-lg sm:text-2xl xl:pr-32">
          Over the past few years, Premium® Syrup has expanded its digital
          footprint engaging a growing community of beverage lovers and creators
          through @premiumsyrup.id on social media. With tutorials, recipes,
          collaborations, and behind-the-scenes content, we invite audiences to
          explore, experiment, and express themselves with flavor.
        </p>
      </div>
      <div className="flex flex-col lg:items-start gap-4 px-6 sm:px-12 text-2xl sm:text-4xl font-light">
        <h1 className="w-full lg:text-right text-center text-[theme(--color-primary)]">
          MORE THAN A PRODUCT, IT'S AN <b>EXPERIENCE!</b>
        </h1>
        <p className="lg:text-right text-lg sm:text-2xl xl:pl-32">
          Premium® Syrup is more than a bottle of syrup. It’s a celebration of
          taste, a platform for creativity, and a reliable partner in the
          beverage journey. Whether you’re crafting a signature drink or
          enjoying a simple refreshment at home, we’re here to help make every
          sip memorable.
        </p>
      </div>
      <div className="flex flex-col lg:items-center gap-4 px-6 text-2xl sm:text-4xl font-light w-full">
        <h1 className="text-center text-[theme(--color-primary)]">
          <b>OUR VISION</b>
        </h1>
        <p className="text-lg sm:text-2xl text-center">
          To become the leading syrup brand in Indonesia and Southeast Asia by
          empowering beverage creativity through quality, accessibility, and
          innovation.
        </p>
      </div>
      <div className="flex flex-col lg:items-center gap-4 px-14 text-2xl sm:text-4xl font-light w-full">
        <h1 className="text-center text-[theme(--color-primary)]">
          <b>OUR MISSION</b>
        </h1>
        <ul className="text-lg sm:text-2xl list-disc">
          <li>
            To produce premium-quality syrups with consistent flavor and food
            safety.
          </li>
          <li>
            To support the beverage community with inspiration, education, and
            collaboration.
          </li>
          <li>To continuously innovate to meet evolving tastes and trends.</li>
        </ul>
      </div>
      <ProductSneak />
    </div>
  );
}
