import { useState } from "react";
import type { Route } from "./+types/faq";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQ | Premium Syurp" },
    { name: "description", content: "Premium Syrup FAQ" },
  ];
}

export default function Faq() {
  const [openDrawer, setOpenDrawer] = useState<string[]>([]);

  const handleToggle = (section: string) => {
    setOpenDrawer(
      (prev) =>
        prev.includes(section)
          ? prev.filter((item) => item !== section) // Close if already open
          : [...prev, section] // Open new section
    );
  };

  return (
    <div className="flex flex-grow flex-col gap-8 items-center pt-36 pb-10 font-light">
      <h1 className="text-2xl md:text-4xl xl:mb-14">
        <b className="font-extrabold">FREQUENTLY ASKED QUESTIONS</b>
      </h1>
      <div className="flex flex-col gap-6 w-3/4 lg:w-3/5">
        <section>
          <button
            onClick={() => handleToggle("ordering")}
            className="w-full flex items-center gap-4 border-2 px-4 font-extrabold"
          >
            <span className="pb-1">
              {openDrawer.includes("ordering") ? "-" : "+"}
            </span>
            <h1 className="text-xl md:text-3xl font-semibold">ORDERING</h1>
          </button>
          <div
            id="ordering"
            className={`flex flex-col overflow-hidden expandable-children ${
              openDrawer.includes("ordering") ? "open" : "close"
            }`}
          >
            <ul className="list-disc ml-10 text-base mt-2">
              <li>
                Visit our website at{" "}
                <span className="font-semibold">www.premiumsyrup.com</span>.
              </li>
              <li>Select the items you want to order.</li>
              <li>
                Click one of the available buttons (<b>Tokopedia</b> /
                <b>Shopee</b>). Simply click once, and you’ll be redirected to
                the purchase page or marketplace catalog.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <button
            onClick={() => handleToggle("product-stock")}
            className="w-full flex items-center gap-4 border-2 px-4 font-extrabold"
          >
            <span className="pb-1">
              {openDrawer.includes("product-stock") ? "-" : "+"}
            </span>
            <h1 className="text-xl md:text-3xl font-semibold">PRODUCT STOCK</h1>
          </button>
          {/* {openDrawer.includes("product-stock") && ( */}
          <div
            className={`flex flex-col overflow-hidden expandable-children ${
              openDrawer.includes("product-stock") ? "open" : "close"
            }`}
          >
            <p className="text-base pl-5 mt-2">
              For details, stock availability, and prices, visit
              <b> www.premiumsyrup.com</b> or contact our admin via{" "}
              <b>Tokopedia</b> and <b>Shopee</b> .
            </p>
          </div>
          {/* )} */}
        </section>
        <section>
          <button
            onClick={() => handleToggle("shipping")}
            className="w-full flex items-center gap-4 border-2 px-4 font-extrabold"
          >
            <span className="pb-1">
              {openDrawer.includes("shipping") ? "-" : "+"}
            </span>
            <h1 className="text-xl md:text-3xl font-semibold">SHIPPING</h1>
          </button>
          <div
            className={`flex flex-col overflow-hidden expandable-children ${
              openDrawer.includes("shipping") ? "open" : "close"
            }`}
          >
            <p className="text-base pl-5 mt-2">
              Standard delivery takes approximately 1-2 business days within
              Indonesia. If delivery exceeds the maximum estimated time, it is
              usually due to issues such as difficulty locating the recipient's
              address, the recipient's phone number being unreachable, or the
              selected item being out of stock.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
