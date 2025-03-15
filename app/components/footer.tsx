import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <div className="min-h-32">
        <div className="flex flex-col sm:static mx-3 sm:mx-6 pt-3 sm:pt-6 h-full border-t-[2px] border-gray-500">
          <section className="flex flex-col items-center mb-4 md:absolute text-sm">
            <h1 className="font-bold mb-1 sm:mb-3">
              PT. Karya Ciptanyata Wisesa
            </h1>
            <p>Jl Tapak Raya No. 1A</p>
            <p>Tugurejo Semarang</p>
            <p>Jawa Tengah 50182</p>
          </section>
          <section className="flex flex-col items-center">
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
              <a
                href="mailto:premiumsyrup.indonesia@gmail.com"
                className="h-7 w-7"
              >
                <img src="/icons/email.svg" alt="email" />
              </a>
            </div>
            <div className="py-3 sm:py-5 text-sm lg:text-xl font-light text-gray-500">
              <p>Copyright © PT Karyanyata Cipta Wisesa</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
