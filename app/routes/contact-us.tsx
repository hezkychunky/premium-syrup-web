import { Link } from "react-router";
import { useFetcher } from "react-router";

import type { Route } from "./+types/contact-us";
import { contactUsValidator } from "~/utils/validator";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us" },
    { name: "description", content: "Premium Syrup Contact" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const result = contactUsValidator(formData);

  if (!result.data.success) {
    return result;
  }

  // TODO: send to API
  return result;
}

export default function ContactUs() {
  const fetcher = useFetcher();
  const result = fetcher.data;

  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-4xl font-semibold">
      <div className="flex flex-col gap-12 md:gap-0 md:flex-row md:items w-full px-12 sm:px-24 md:px-12 lg:px-24 min-h-80 mb-12">
        <section className="flex flex-col w-full md:w-1/2 md:pr-6 lg:pr-12">
          <h1>We will be happy to hear from you.</h1>
          <fetcher.Form
            method="post"
            className="flex flex-col py-6 gap-6 text-xl font-light md:pr-2 lg:pr-12"
          >
            <div>
              <input name="name" type="text" placeholder="NAME" className="w-full border-b-1 pb-1 focus:outline-0" />
              {
                result && result.errors['name']
                  ? <p>{result.errors['name']}</p>
                  : null
              }
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="E-MAIL"
                className="w-full border-b-1 pb-1 focus:outline-0"
              />
              {
                result && result.errors['email']
                  ? <p>{result.errors['email']}</p>
                  : null
              }
            </div>

            <div>
              <input name="phone" type="tel" placeholder="PHONE" className="w-full border-b-1 pb-1 focus:outline-0" />
              {
                result && result.errors['phone']
                  ? <p>{result.errors['phone']}</p>
                  : null
              }
            </div>

            <div>
              <textarea
                name="message"
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                className="w-full border-b-1 pb-1 focus:outline-0"
              />
              {
                result && result.errors['message']
                  ? <p>{result.errors['message']}</p>
                  : null
              }
            </div>

            <div className="w-full flex justify-center mt-10">
              <button className="shadow-md rounded-xl w-3/5 shadow-gray-400 py-2 hover:scale-95 hover:brightness-75">
                SUBMIT MESSAGE
              </button>
            </div>
          </fetcher.Form>
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
