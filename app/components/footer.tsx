import { Link } from "react-router";

export default function Footer() {
  const footerMenus = [
    "our story",
    "products",
    "recipes",
    "news",
    "faq",
    "contact us",
  ];

  return (
    <>
      <div className="flex flex-col gap-3 h-auto bg-[theme(--color-primary)] text-[theme(--color-secondary)]">
        <div className="flex flex-col sm:flex-row justify-between sm:mx-8 sm:mt-8">
          <section className="flex flex-col items-center sm:flex-row sm:gap-14">
            <div>
              <img
                src="/logos/premium-logo-white.png"
                alt="Premium Logo 2"
                className="h-32 w-32"
              />
            </div>
            <div className="hidden sm:flex gap-10 text-xl font-bold">
              <div className="flex flex-col sm:gap-4">
                {footerMenus.slice(0, 3).map((item, index) => {
                  return (
                    <Link
                      key={index}
                      to={
                        index === 0
                          ? "/our-story/about-us"
                          : `/${item.replace(/\s/, "-")}`
                      }
                      className="hover:brightness-75"
                    >
                      {item.toUpperCase()}
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-col gap-4">
                {footerMenus.slice(3, 7).map((item, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/${item.replace(/\s/, "-")}`}
                      className="hover:brightness-75"
                    >
                      {item.toUpperCase()}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col text-sm items-center sm:items-end">
              <h1 className="font-extrabold mb-4">
                PT. Karya Ciptanyata Wisesa
              </h1>
              <p>Jl Tapak Raya No. 1A</p>
              <p>Tugurejo Semarang</p>
              <p>Jawa Tengah 50182</p>
            </div>
          </section>
        </div>
        <div className="mx-3 py-3 text-sm lg:text-xl font-light text-center">
          <p>Copyright © PT Karyanyata Cipta Wisesa 2025</p>
        </div>
      </div>
    </>
  );
}
