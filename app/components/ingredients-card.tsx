import React from "react";

interface IngredientsCardProps {
  image?: string | null;
  base?: string;
  title?: string;
}

const IngredientsCard: React.FC<IngredientsCardProps> = ({
  image,
  base,
  title,
}) => {
  return (
    <div className="flex flex-col w-[400px] min-h-[400px] rounded-xs border-2">
      <section className="flex border-b-2 text-2xl items-center justify-between h-[55px] px-2">
        <div>
          <h1 className="font-semibold">INGREDIENTS</h1>
        </div>
        <div className="flex items-center justify-center border-l-2 h-full">
          <p className="text-lg px-2">SHARE</p>
        </div>
      </section>
      <section className="flex border-b-2 p-2 text-xl min-h-[250px]">
        <ul className="w-full">
          <li className="flex justify-between py-1.5">
            <p>PREMIUM® LYCHEE</p>
            <p className="font-semibold rounded-2xl text-center text-lg w-[100px] bg-gray-300">
              20 ML
            </p>
          </li>
          <li className="flex justify-between py-1.5">
            <p>SODA WATER</p>
            <p className="font-semibold rounded-2xl text-center text-lg w-[100px] bg-gray-300">
              200 ML
            </p>
          </li>
          <li className="flex justify-between py-1.5">
            <p>YAKULT</p>
            <p className="font-semibold rounded-2xl text-center text-lg w-[100px] bg-gray-300">
              30 ML
            </p>
          </li>
          <li className="flex justify-between py-1.5">
            <p>LYCHEE</p>
            <p className="font-semibold rounded-2xl text-center text-lg w-[100px] bg-gray-300">
              2 PCS
            </p>
          </li>
        </ul>
      </section>
      <section className="flex border-b-2 justify-between h-55px]">
        <div className="flex flex-col w-[120px] text-sm items-center border-r-2 h-full">
          <h2>Prep TIme</h2>
          <p className="text-lg font-semibold">10 MIN</p>
        </div>
        <div className="flex text-lg justify-evenly flex-grow items-center py-2">
          <button className="rounded-2xl shadow-md border-2 font-semibold w-[80px]">
            ML
          </button>
          <button className="rounded-2xl shadow-md border-2 font-semibold w-[80px]">
            OZ
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center h-[55px]">
        <p className="text-sm">Featuring</p>
        <div className="text-lg font-semibold">PREMIUM® LYCHEE</div>
      </section>
    </div>
  );
};

export default IngredientsCard;
