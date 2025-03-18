import { Link } from "react-router";
import type { Route } from "./+types/contact-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us" },
    { name: "description", content: "Premium Syrup Contact" },
  ];
}

export default function ContactUs() {
  return (
    <div className="flex flex-col flex-grow items-center pt-48 text-4xl font-semibold">
      <div className="flex flex-col gap-6 xl:flex-row xl:items xl:gap-0 w-full px-28 min-h-80 mb-12">
        <section className="flex flex-col w-full xl:w-1/2 pr-12 xl:pr-64">
          <h1>We will be happy to hear from you.</h1>
          <form
            action=""
            className="flex flex-col py-6 gap-6 text-xl font-light"
          >
            <input type="text" placeholder="NAME" className="border-b-1 pb-1" />
            <input
              type="email"
              placeholder="E-MAIL"
              className="border-b-1 pb-1"
            />
            <input type="tel" placeholder="PHONE" className="border-b-1 pb-1" />
            <textarea
              name="message"
              rows={4}
              cols={50}
              placeholder="MESSAGE"
              className="border-b-1 pb-1"
            ></textarea>
            <div className="w-full flex justify-center mt-10">
              <button className="shadow-md rounded-xl w-3/5 shadow-gray-400 py-2 hover:scale-95 hover:brightness-75">
                SUBMIT MESSAGE
              </button>
            </div>
          </form>
        </section>
        <section className="flex flex-col gap-10 pl-6 pr-52 w-full xl:w-1/2 ">
          <div className="flex flex-col gap-3 text-lg">
            <h1 className="text-3xl font-thin tracking-widest">LOCATION</h1>
            <h2>PT KARYA CIPTANYATA WISESA</h2>
            <p className="font-light">
              Jl Tapak Raya No .1A, Tugurejo Semarang, Jawa Tengah - 50182
            </p>
          </div>
          <div className="flex flex-col gap-3 text-lg">
            <h1 className="text-3xl font-thin tracking-widest">CONTACT</h1>
            <p className="text-bold">+62 855-8011-188</p>
            <p className="text-bold">premiumsyrup.indonesia@gmail.com</p>
          </div>
          <div className="flex flex-col gap-3 text-lg">
            <h1 className="text-3xl font-thin tracking-widest">SOCIAL MEDIA</h1>
            <div className="flex gap-4">
              <Link
                to={"https://www.instagram.com/premiumsyrup.id/"}
                target="_blank"
                className="h-7 w-7"
              >
                <img src="/icons/instagram.svg" alt="instagram" />
              </Link>
              <Link
                to={"https://www.tiktok.com/@premiumsyrup.id"}
                target="_blank"
                className="h-7 w-7"
              >
                <img src="/icons/tiktok.svg" alt="tiktok" />
              </Link>
              <Link
                to={"https://www.facebook.com/premiumsyrup"}
                target="_blank"
                className="h-7 w-7"
              >
                <img src="/icons/facebook.svg" alt="facebook" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
