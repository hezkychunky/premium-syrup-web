import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OurStorySneak() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="h-auto flex flex-col lg:flex-row gap-10 px-10 pt-14 sm:items-center">
        <section
          className="relative sm:w-[550px] h-[600px]"
          data-aos="fade-right"
        >
          <img
            src="/samples/our-story1.jpg"
            alt="Top Left"
            className="absolute top-0 left-0 object-cover w-3/4 sm:w-72"
          />
          <img
            src="/samples/our-story2.jpg"
            alt="Bottom Right"
            className="absolute bottom-0 right-0 object-cover w-3/4 sm:w-72"
          />
        </section>
        <section
          className="flex flex-col justify-between lg:pt-16 max-w-3xl xl:pr-14"
          data-aos="fade-up"
        >
          <div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[theme(--color-primary)] tracking-wider">
                BEST SYRUP FOR
              </h1>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[theme(--color-primary)] tracking-wider">
                ANY BEVERAGES
              </h1>
            </div>
            <div className="text-xl sm:text-2xl leading-loose py-4">
              <h2 className="font-semibold">A Flavor for Every Imagination.</h2>
              <p>
                Premium® Syrup is more than a bottle of syrup. It’s a
                celebration of taste, a platform for creativity, and a reliable
                partner in the beverage journey. Whether you’re crafting a
                signature drink or enjoying a simple refreshment at home, we’re
                here to help make every sip memorable.
              </p>
            </div>
          </div>
          <div className="tracking-widest text-center border-2 hover:bg-[theme(--color-primary)] hover:text-[theme(--color-secondary)] border-[theme(--color-primary)] text-[theme(--color-primary)] text-2xl font-bold py-2 w-80">
            <Link to={"/our-story/about-us"}>SEE OUR STORY →</Link>
          </div>
        </section>
      </div>
    </>
  );
}
