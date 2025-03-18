import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle the drawer
  const handleToggle = (section: string) => {
    setOpenDrawer(openDrawer === section ? null : section);
  };

  return (
    <>
      <nav
        className={`fixed w-full h-20 md:h-24 px-8 flex flex-col justify-center items-center shadow-md z-50 transition-colors ease-in-out duration-700 ${
          isScrolled ? "bg-[theme(--color-secondary)]" : "bg-transparent"
        }`}
      >
        {/* Navigation Buttons */}
        <section className="flex justify-center lg:justify-between items-center w-full text-lg lg:text-2xl overflow-hidden">
          <section>
            <Link to={"/"}>
              <img
                src="/logos/premium-logo-01.png"
                alt="Premium Logo"
                className="h-32 w-32"
              />
            </Link>
          </section>
          <div className="hidden lg:flex font-sans justify-between items-center w-3/4 px-4">
            <button onClick={() => handleToggle("our-story")}>OUR STORY</button>
            <button onClick={() => handleToggle("products")}>
              <NavLink to={"/products"}>PRODUCTS</NavLink>
            </button>
            <button onClick={() => handleToggle("recipes")}>
              <NavLink to={"/recipes"}>RECIPES</NavLink>
            </button>
            <button onClick={() => setOpenDrawer(null)}>
              <NavLink
                to={"/news"}
                className={({ isActive }) => (isActive ? "active" : "")}
                viewTransition
              >
                NEWS
              </NavLink>
            </button>
            <button onClick={() => setOpenDrawer(null)}>
              <NavLink
                to={"/faq"}
                className={({ isActive }) => (isActive ? "active" : "")}
                viewTransition
              >
                FAQ
              </NavLink>
            </button>
            <button onClick={() => setOpenDrawer(null)}>
              <NavLink
                to={"/contact-us"}
                viewTransition
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                CONTACT US
              </NavLink>
            </button>
          </div>
          <button className="hidden lg:flex h-6 w-6">
            <img src="/icons/search-lens.svg" alt="Search" />
          </button>
        </section>
        <button className="absolute lg:hidden flex flex-col gap-1 right-6">
          <span className="w-5 border-1"></span>
          <span className="w-5 border-1"></span>
          <span className="w-5 border-1"></span>
        </button>
      </nav>

      {/* Drawer Section */}
      <div
        className={`z-50 fixed top-24 h-auto w-full text-xl bg-[theme(--color-primary)] text-[theme(--color-secondary)] overflow-hidden ${
          openDrawer
            ? "max-h-1/3 opacity-100 py-2 transition-all duration-300 ease-in"
            : "max-h-0 py-0 transition-all duration-500 ease-out"
        }`}
      >
        {openDrawer === "our-story" && (
          <div className="flex justify-center py-2 gap-24">
            <NavLink
              to={"/our-story/about-us"}
              className={({ isActive }) => (isActive ? "font-extrabold" : "")}
              viewTransition
            >
              ABOUT US
            </NavLink>
            <NavLink
              to={"/our-story/product-knowledge"}
              className={({ isActive }) => (isActive ? "font-extrabold" : "")}
              viewTransition
            >
              PRODUCT KNOWLEDGE
            </NavLink>
          </div>
        )}
        {openDrawer === "products" && (
          <ul className="flex items-center justify-between pl-8">
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) => (isActive ? "active-light" : "")}
                end
              >
                <b className="block">ALL</b> PRODUCTS
              </NavLink>
            </li>
            <li className="flex items-center w-44">
              <div className="h-40 w-16 overflow-hidden">
                <img
                  src="/products/grenadine.png"
                  alt="Grenadine"
                  className="h-40"
                />
              </div>
              <NavLink
                to={"/products/fruity-delights"}
                className={({ isActive }) => (isActive ? "active-light" : "")}
              >
                <b className="block">FRUITY</b> DELIGHTS
              </NavLink>
            </li>
            <li className="flex items-center w-44">
              <div className="h-40 w-16">
                <img
                  src="/products/caramel.png"
                  alt="Grenadine"
                  className="h-40"
                />
              </div>
              <NavLink
                to={"/products/coffee-delights"}
                className={({ isActive }) => (isActive ? "active-light" : "")}
              >
                <b className="block">COFFEE</b> DELIGHTS
              </NavLink>
            </li>
            <li className="flex items-center w-44">
              <div className="h-40 w-16 ">
                <img
                  src="/products/bubble-gum.png"
                  alt="Grenadine"
                  className="h-40"
                />
              </div>
              <NavLink
                to={"/products/unique-delights"}
                className={({ isActive }) => (isActive ? "active-light" : "")}
              >
                <b className="block">UNIQUE</b> DELIGHTS
              </NavLink>
            </li>
            <li className="flex items-center w-44">
              <div className="h-40 w-16 ">
                <img
                  src="/products/grenadine.png"
                  alt="Grenadine"
                  className="h-40"
                />
              </div>
              <NavLink
                to={"/products/60ml-pack"}
                className={({ isActive }) => (isActive ? "active-light" : "")}
              >
                <b className="block">60ml</b> PACK
              </NavLink>
            </li>
            <li className="flex items-center w-44">
              <div className="h-40 w-16 ">
                <img
                  src="/products/grenadine.png"
                  alt="Grenadine"
                  className="h-40"
                />
              </div>
              <NavLink
                to={"/products/100ml-pack"}
                className={({ isActive }) => (isActive ? "active-light" : "")}
              >
                <b className="block">100ml</b> PACK
              </NavLink>
            </li>
          </ul>
        )}
        {openDrawer === "recipes" && (
          <div className="flex justify-center py-4">
            <ul className="flex justify-between w-3/5">
              <li>
                <NavLink
                  to={"/recipes"}
                  className={({ isActive }) => (isActive ? "active-light" : "")}
                  end
                >
                  <b className="block">ALL</b> RECIPES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/recipes/fruity-delights"}
                  className={({ isActive }) => (isActive ? "active-light" : "")}
                >
                  <b className="block">FRUITY</b> DELIGHTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/recipes/coffee-delights"}
                  className={({ isActive }) => (isActive ? "active-light" : "")}
                >
                  <b className="block">COFFEE</b> DELIGHTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/recipes/unique-delights"}
                  className={({ isActive }) => (isActive ? "active-light" : "")}
                >
                  <b className="block">UNIQUE</b> DELIGHTS
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
