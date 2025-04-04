import React, { useState } from "react";

interface IngredientsCardProps {
  image?: string | null;
  base?: string;
  title?: string;
}

const ML_TO_OZ = 0.033814;

/**
 * Convert volume, in ml by default, to oz by 2 decimal places
 */
const showVolumeByUnit = (volume: number, unit: 'ml' | 'oz' = 'ml'): string => {
  if (unit === 'oz') {
    return `${(Math.round(volume * ML_TO_OZ * 100) / 100).toFixed(2)} OZ`;
  }

  return `${volume} ML`;
}

const IngredientsCard: React.FC<IngredientsCardProps> = ({
  image,
  base,
  title,
}) => {
  const [volumeUnit, setVolumeUnit] = useState<'ml' | 'oz'>('ml');

  return (
    <div className="flex flex-col max-[450px]:w-72 w-96 min-h-[400px] rounded-xs border-2">
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
          <li className="flex justify-between items-start py-1.5">
            <p>PREMIUM® LYCHEE</p>
            <p className="font-semibold rounded-2xl text-center text-lg w-[100px] bg-gray-300">
              {showVolumeByUnit(20, volumeUnit)}
            </p>
          </li>
          <li className="flex justify-between items-start py-1.5">
            <p>SODA WATER</p>
            <p className="font-semibold rounded-2xl text-center text-lg w-[100px] bg-gray-300">
              {showVolumeByUnit(200, volumeUnit)}
            </p>
          </li>
          <li className="flex justify-between items-start py-1.5">
            <p>YAKULT</p>
            <p className="font-semibold rounded-2xl text-center text-lg w-[100px] bg-gray-300">
              {showVolumeByUnit(30, volumeUnit)}
            </p>
          </li>
          <li className="flex justify-between items-start py-1.5">
            <p>LYCHEE</p>
            <p className="font-semibold rounded-2xl text-center text-lg w-[100px] bg-gray-300">
              2 PCS
            </p>
          </li>
        </ul>
      </section>
      <section className="flex border-b-2 justify-between h-55px">
        <div className="flex flex-col flex-4 text-sm items-center border-r-2 h-full">
          <h2>Prep TIme</h2>
          <p className="text-lg font-semibold">10 MIN</p>
        </div>
        <div className="flex flex-6 text-lg justify-evenly items-center py-2 px-4 gap-4">
          <button
            disabled={volumeUnit == 'ml'}
            className={`flex-1 rounded-2xl shadow-md border-2 font-semibold ${volumeUnit === 'ml' ? 'text-white bg-primary border-primary cursor-default' : 'active:bg-gray-300'}`}
            onClick={() => setVolumeUnit('ml')}
          >
            ML
          </button>
          <button
            disabled={volumeUnit == 'oz'}
            className={`flex-1 rounded-2xl shadow-md border-2 font-semibold ${volumeUnit === 'oz' ? 'text-white bg-primary border-primary cursor-default' : 'active:bg-gray-300'}`}
            onClick={() => setVolumeUnit('oz')}
          >
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
