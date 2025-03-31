import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import ExpandableNavItem from "./expandable-nav-item";

import mobileNavMenus from "../data/menus.json";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pageLocation = useLocation();
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const navDrawerMenus = ["our story", "products", "recipes"];
  const navMenus = ["news", "faq", "contact us"];

  const productCategories = [
    { category: "fruity delights", image: "/icons/grenadine-icon.png" },
    { category: "coffee delights", image: "/icons/caramel-icon.png" },
    { category: "unique delights", image: "/icons/bubble-gum-icon.png" },
  ];

  const recipeCategories = [
    "fruity delights",
    "coffee delights",
    "unique delights",
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
  }, [openDrawer]);

  useEffect(() => {
    const onClickOutsideNavbar = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    document.addEventListener("click", onClickOutsideNavbar);

    return () => {
      document.removeEventListener("click", onClickOutsideNavbar);
    };
  }, [isSidebarOpen]);

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
        <section className="flex justify-center lg:justify-between items-center w-full text-lg xl:text-2xl overflow-hidden">
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
          <div className="hidden lg:flex font-sans justify-between items-center w-3/4 px-4 text-[theme(--color-primary)]">
            {navDrawerMenus.map((item, index) => {
              return (
                <div key={index} className="relative group">
                  <button
                    onClick={() => handleToggle(item.replace(/\s/, "-"))}
                    className={
                      pageLocation.pathname.startsWith(
                        "/" + item.replace(/\s/, "-")
                      )
                        ? "active pb-[6px]"
                        : "pb-[6px]"
                    }
                  >
                    {item.toUpperCase()}
                  </button>
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[theme(--color-primary)] transition-all duration-200 group-hover:w-full"></span>
                </div>
              );
            })}
            {navMenus.map((item, index) => {
              return (
                <div key={index} className="relative group">
                  <button
                    onClick={() => setOpenDrawer(null)}
                    className="mb-[6px]"
                  >
                    <NavLink
                      to={`/${item.replace(/\s/, "-")}`}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      viewTransition
                    >
                      {item.toUpperCase()}
                    </NavLink>
                  </button>
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[theme(--color-primary)] transition-all duration-200 group-hover:w-full"></span>
                </div>
              );
            })}
          </div>
          <button className="hidden lg:flex h-6 w-6">
            <img src="/icons/search-lens.svg" alt="Search" />
          </button>
        </section>

        {/* mobile navbar */}
        <button
          className="absolute lg:hidden flex flex-col gap-1 right-6"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
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
          <section className="flex justify-center py-2 gap-24">
            <div className="relative group">
              <div className="mb-[6px]">
                <NavLink
                  to={"/our-story/about-us"}
                  className={({ isActive }) =>
                    isActive ? "font-extrabold active-ourstory " : ""
                  }
                  viewTransition
                >
                  ABOUT US
                </NavLink>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-white transition-all duration-200 group-hover:w-full"></span>
            </div>
            <div className="relative group">
              <div className="mb-[6px]">
                <NavLink
                  to={"/our-story/product-knowledge"}
                  className={({ isActive }) =>
                    isActive ? "font-extrabold active-ourstory " : ""
                  }
                  viewTransition
                >
                  PRODUCT KNOWLEDGE
                </NavLink>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-white transition-all duration-200 group-hover:w-full"></span>
            </div>
          </section>
        )}
        {openDrawer === "products" && (
          <ul className="flex items-center justify-evenly pl-8">
            <li>
              <div className="relative group">
                <div className="mb-[6px]">
                  <NavLink
                    to={"/products"}
                    className={({ isActive }) =>
                      isActive ? "active-light" : ""
                    }
                    end
                  >
                    <b className="block">ALL</b> PRODUCTS
                  </NavLink>
                </div>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-white transition-all duration-200 group-hover:w-full"></span>
              </div>
            </li>
            {productCategories.map((item, index) => {
              const words = item.category.split(" ");
              return (
                <li key={index} className="flex items-center w-44">
                  <div className="h-40 w-16 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.category}
                      className="h-40"
                    />
                  </div>
                  <NavLink
                    to={`/products/${item.category.replace(/\s/, "-")}`}
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
                <div>
                  <NavLink
                    to={"/recipes"}
                    className={({ isActive }) =>
                      isActive ? "active-light" : ""
                    }
                    end
                  >
                    <b className="block">ALL</b> RECIPES
                  </NavLink>
                </div>
              </li>
              {recipeCategories.map((category, index) => {
                const words = category.split(" ");
                return (
                  <li key={index}>
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

      {/* Drawer Section: mobile */}
      <div
        ref={sidebarRef}
        className={`
          lg:hidden z-100 text-xl text-black bg-[theme(--color-secondary)] w-80 fixed inset-y-0 right-0 shadow-md overflow-y-auto
          ${
            isSidebarOpen
              ? "translate-x-0 duration-300 ease-in"
              : "translate-x-full duration-500 ease-out"
          }
        `}
      >
        <div id="sidebar" className="p-4">
          <p onClick={() => setSidebarOpen(false)}>Close</p>
          {/* Expandables */}
          {mobileNavMenus.map((drawer) => (
            <div key={drawer.title} className="py-1 text-end">
              <ExpandableNavItem
                key={drawer.title}
                drawer={drawer.title}
                children={drawer.children}
              />
            </div>
          ))}

          {/* Links */}
          {navMenus.map((menu) => (
            <div key={menu} className="py-1 text-end">
              <NavLink
                to={`/${menu.replace(/\s/, "-")}`}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setSidebarOpen(false)}
                viewTransition
              >
                {menu.toUpperCase()}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
