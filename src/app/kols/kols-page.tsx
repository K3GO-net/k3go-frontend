"use client";

import { InfoKol } from "@/src/components/KolGig/CardKOL/InfoKol";

const dataFake = [
  {
    bg: "/example/kols.png",
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: "/example/kols.png",
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: "/example/kols.png",
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
];

export default function KolsPage() {
  return (
    <div className="grid grid-cols-3 gap-10 items-center justify-center px-[400px]">
      {dataFake?.map((kol, index) => {
        return <InfoKol kol={kol} />;
      })}
    </div>
  );
}
