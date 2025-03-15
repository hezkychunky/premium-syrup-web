import type { Route } from "./+types/product-knowledge";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Premium Syrup" },
    { name: "description", content: "Best Syrup for Any Beverages!" },
  ];
}

export default function ProductKnowledge() {
  return (
    <div className="flex flex-col flex-grow gap-12 pl-6 pt-48 text-4xl font-light">
      <h1>
        KNOW OUR <b>3</b> TASTES
      </h1>
      <section className="flex flex-col gap-8 text-2xl pr-32">
        <h2>
          We take pride in offering three <b>key advantages</b> that set us
          apart:
        </h2>
        <div className="flex flex-col gap-2">
          <h3>
            <b>Smooth</b>
          </h3>
          <p>
            Made from the finest selected ingredients and produced through a
            high-standard process, our syrups deliver a smooth and consistent
            flavor in every drop.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>
            <b>Rich Taste</b>
          </h3>
          <p>
            With over 30 delightful flavors to choose from, our syrups provide
            endless options for every drink enthusiast. (
            <em>More details about flavor categories will follow</em>).
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>
            <b>Bigger Size</b>
          </h3>
          <p>
            Premium Syrup is available in larger packaging 650ml than other our
            syrups product line (Sirup Fres). Perfect for homes, cafés, and
            businesses that value quality and efficiency.
          </p>
        </div>
      </section>
    </div>
  );
}
