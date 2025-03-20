import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pageLocation = useLocation();
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const navDrawerMenus = ["our story", "products", "recipes"];
  const navMenus = ["news", "faq", "contact us"];

  const productCategories = [
    "fruity delights",
    "coffee delights",
    "exotic delights",
    "60ml pack",
    "100ml pack",
  ];

  const recipeCategories = [
    "fruity delights",
    "coffee delights",
    "exotic delights",
  ];

  useEffect(() => {
    // Close the drawer if clicked outside the Navbar
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenDrawer(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
        ref={navbarRef}
        className={`fixed w-full h-20 md:h-24 px-8 flex flex-col justify-center items-center shadow-md z-50 transition-colors ease-in-out duration-700 ${
          isScrolled ? "bg-[theme(--color-secondary)]" : "bg-transparent"
        }`}
      >
        {/* Navigation Buttons */}
        <section className="flex justify-center lg:justify-between items-center w-full text-lg lg:text-2xl overflow-hidden">
          <section>
            <button onClick={() => setOpenDrawer(null)}>
              <Link to={"/"}>
                <img
                  src="/logos/premium-logo-01.png"
                  alt="Premium Logo"
                  className="h-32 w-32"
                />
              </Link>
            </button>
          </section>
          <div className="hidden lg:flex font-sans justify-between items-center w-3/4 px-4">
            {navDrawerMenus.map((item) => {
              return (
                <button
                  onClick={() => handleToggle(item.replace(/\s/, "-"))}
                  className={
                    pageLocation.pathname.startsWith(
                      "/" + item.replace(/\s/, "-")
                    )
                      ? "active"
                      : ""
                  }
                >
                  {item.toUpperCase()}
                </button>
              );
            })}
            {navMenus.map((item) => {
              return (
                <button onClick={() => setOpenDrawer(null)}>
                  <NavLink
                    to={`/${item.replace(/\s/, "-")}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    viewTransition
                  >
                    {item.toUpperCase()}
                  </NavLink>
                </button>
              );
            })}
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
            {productCategories.map((category) => {
              const words = category.split(" ");
              return (
                <li className="flex items-center w-44">
                  <div className="h-40 w-16 overflow-hidden">
                    <img
                      src="/products/grenadine.png"
                      alt="Grenadine"
                      className="h-40"
                    />
                  </div>
                  <NavLink
                    to={`/products/${category.replace(/\s/, "-")}`}
                    className={({ isActive }) =>
                      isActive ? "active-light" : ""
                    }
                  >
                    <b className="block">{words[0].toUpperCase()}</b>{" "}
                    {words[1].toUpperCase()}
                  </NavLink>
                </li>
              );
            })}
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
              {recipeCategories.map((category) => {
                const words = category.split(" ");
                return (
                  <li>
                    <NavLink
                      to={`/recipes/${category.replace(/\s/, "-")}`}
                      className={({ isActive }) =>
                        isActive ? "active-light" : ""
                      }
                    >
                      <b className="block">{words[0].toUpperCase()}</b>{" "}
                      {words[1].toUpperCase()}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
