import type { Route } from "./+types/contact-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us" },
    { name: "description", content: "Premium Syrup Contact" },
  ];
}

export default function ContactUs() {
  return (
    <div className="flex flex-col flex-grow items-center pt-36 text-3xl font-light">
      <h1>CONTACT US</h1>
    </div>
  );
}
