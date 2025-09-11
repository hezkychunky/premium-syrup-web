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
        <div className="text-4xl text-gray-50 font-medium mx-4 bg-[theme(--color-primary)] rounded-xl py-2 px-6">
          #BEST<b className="font-extrabold">SYRUP</b>FOR
          <b className="font-extrabold">ANY</b>BEVERAGES
        </div>
        <div className="text-4xl font-semibold mx-4">@PREMIUMSYRUP.ID</div>
        <div className="text-4xl text-gray-50 font-medium mx-4 bg-[theme(--color-primary)] rounded-xl py-2 px-6">
          #BEST<b className="font-extrabold">SYRUP</b>FOR
          <b className="font-extrabold">ANY</b>BEVERAGES
        </div>
        <div className="text-4xl font-semibold mx-4">@PREMIUMSYRUP.ID</div>
      </Marquee>
    </div>
  );
}
