"use client";

import { InfoKols } from "@/src/types/KOL";

export const InfoKol = ({ kol }: { kol: InfoKols }) => {
  return (
    <div className="flex flex-col items-center gap-2 border border-gray-200 rounded-lg p-2">
      <div className="flex flex-col items-center">
        <div className="w-[300px] h-[300px] relative">
          <img src={kol.bg} alt="KOLs" className="w-full h-full" />
          <img
            src={kol.avt}
            alt="avt"
            className="roudned-full h-14 w-14 absolute -bottom-7 left-2"
          />
        </div>
        <div>Follwers: {kol.followers}</div>
      </div>
      <div>
        <p>{kol.description}</p>
        <div>
          <p>
            4,9 <span>(30)</span>
          </p>
          From: $$$$
        </div>
      </div>
    </div>
  );
};
