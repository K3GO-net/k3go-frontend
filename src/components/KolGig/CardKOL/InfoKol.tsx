"use client";

import { InfoKols } from "@/src/types/KOL";
import Link from "next/link";

export const InfoKol = ({ kol }: { kol: InfoKols }) => {
  return (
    <div className="group">
      <a href="/kols/2">
        <div className="flex flex-col items-center gap-2 border border-gray-200 rounded-lg p-2">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src={kol.bg} alt="KOLs" className="w-[400px] h-[300px]" />
              <img
                src={kol.avt}
                alt="avt"
                className="roudned-full h-14 w-14 absolute -bottom-7 left-2"
              />
            </div>
            <div>Follwers: {kol.followers}</div>
          </div>
          <div>
            <div className="group-hover:text-purple-500 group-hover:underline">
              {kol.description}
            </div>
            <div>
              <p className="flex items-center gap-2">
                <img src="/images/star.svg" />
                4,9 <span>(30)</span>
              </p>
              From: $$$$
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
