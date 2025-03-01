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
        className={`fixed w-full h-32 flex flex-col items-center shadow-md z-50 transition-colors ease-in-out duration-700 ${
          isScrolled
            ? "bg-[theme(--color-primary)] text-[theme(--color-secondary)]"
            : "bg-transparent"
        }`}
      >
        {/* Top Section */}
        <section className="flex justify-center items-center h-1/2 w-full">
          <Link to={"/"}>
            <img
              src="logos/premium-logo-01.png"
              alt="Premium Logo"
              className="h-32 w-32"
            />
          </Link>
          <div className="absolute flex gap-2 right-6">
            <button>ID</button>
            <button>EN</button>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="flex justify-center items-center h-1/2 w-full text-xl">
          <div className="flex justify-evenly items-center w-4/5">
            <button onClick={() => handleToggle("our-story")}>OUR STORY</button>
            <button onClick={() => handleToggle("products")}>PRODUCTS</button>
            <button onClick={() => handleToggle("recipes")}>RECIPES</button>
            <NavLink
              to={"/news"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              NEWS
            </NavLink>
            <NavLink
              to={"/faq"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              FAQ
            </NavLink>
            <NavLink
              to={"/contact-us"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CONTACT US
            </NavLink>
          </div>
          <button className="absolute h-6 w-6 right-6">
            <img src="/icons/search-lens.svg" alt="Search" />
          </button>
        </section>
      </nav>

      {/* Drawer Section */}
      <div
        className={`fixed top-32 h-auto w-full bg-[theme(--color-primary)]  overflow-hidden ${
          openDrawer
            ? "max-h-1/3 opacity-100 py-4 transition-all duration-300 ease-in"
            : "max-h-0 py-0 transition-all duration-500 ease-out"
        }`}
      >
        {openDrawer === "our-story" && (
          <div className="flex justify-center gap-24">
            <NavLink
              to={"/not-applied"}
              className="text-[theme(--color-secondary)]"
            >
              ABOUT US
            </NavLink>
            <NavLink
              to={"/not-applied"}
              className="text-[theme(--color-secondary)]"
            >
              PRODUCT KNOWLEDGE
            </NavLink>
          </div>
        )}
        {openDrawer === "products" && (
          <div className="flex flex-col">
            <NavLink
              to={"/not-applied"}
              className="text-[theme(--color-secondary)] h-32"
            >
              Explore our product categories and new arrivals
            </NavLink>
          </div>
        )}
        {openDrawer === "recipes" && (
          <NavLink
            to={"/not-applied"}
            className="text-[theme(--color-secondary)]"
          >
            Discover delicious recipes made with our products
          </NavLink>
        )}
      </div>
    </>
  );
}
