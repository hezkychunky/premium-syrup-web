import { Link } from "react-router";

export default function FollowUs() {
  return (
    <>
      <div className="h-auto py-12 text-[theme(--color-primary)] text-3xl text-center font-extrabold">
        <h1 className="tracking-wider">FOLLOW US</h1>
        <div className="flex flex-col sm:static mx-3 sm:mx-6 pt-6 h-full text-[theme(--color-secondary)]">
          <section className="flex flex-col items-center">
            <div className="flex gap-6">
              <Link
                to={"https://www.instagram.com/premiumsyrup.id/"}
                target="_blank"
                className="h-9 w-9"
              >
                <img src="/icons/instagram.svg" alt="instagram" />
              </Link>
              <Link
                to={"https://www.tiktok.com/@premiumsyrup.id"}
                target="_blank"
                className="h-9 w-9"
              >
                <img src="/icons/tiktok.svg" alt="tiktok" />
              </Link>
              <Link
                to={"https://www.facebook.com/premiumsyrup"}
                target="_blank"
                className="h-9 w-9"
              >
                <img src="/icons/facebook.svg" alt="facebook" />
              </Link>
              <a
                href="mailto:premiumsyrup.indonesia@gmail.com"
                className="h-9 w-9"
              >
                <img src="/icons/email.svg" alt="email" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
