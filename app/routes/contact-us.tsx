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
    <div className="flex flex-col flex-grow items-center pt-36 text-4xl font-semibold">
      <div className="flex flex-col gap-12 md:gap-0 md:flex-row md:items w-full px-12 sm:px-24 md:px-12 lg:px-24 min-h-80 mb-12">
        <section className="flex flex-col w-full md:w-1/2 md:pr-6 lg:pr-12">
          <h1>We will be happy to hear from you.</h1>
          <form
            action=""
            className="flex flex-col py-6 gap-6 text-xl font-light md:pr-2 lg:pr-12"
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

        {/* Footer */}
        <section className="flex flex-col items-center md:items-start text-center md:text-start gap-10 w-full md:w-1/2 md:pl-6 lg:pl-12">
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
            <div className="flex justify-center md:justify-start gap-4">
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
