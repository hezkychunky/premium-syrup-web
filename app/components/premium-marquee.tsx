import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function PremiumMarquee() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or fallback UI
  }

  return (
    <div className="flex items-center h-16 w-full py-2">
      <Marquee>
        <div className="text-4xl text-gray-50 font-bold mx-4 bg-[theme(--color-primary)] rounded-xl py-2 px-6">
          #BESTSYRUPFORANYBEVERAGES
        </div>
        <div className="text-4xl font-bold mx-4">@PREMIUMSYRUP.ID</div>
        <div className="text-4xl text-gray-50 font-bold mx-4 bg-[theme(--color-primary)] rounded-xl py-2 px-6">
          #BESTSYRUPFORANYBEVERAGES
        </div>
        <div className="text-4xl font-bold mx-4">@PREMIUMSYRUP.ID</div>
      </Marquee>
    </div>
  );
}
