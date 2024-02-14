"use client";

import { InfoKol } from "@/src/components/KolGig/CardKOL/InfoKol";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/src/components/shared/ui/select";
import { SelectValue } from "@radix-ui/react-select";

const dataFake = [
  {
    bg: ["/example/kols.png", "/example/1.png", "/example/2.png"],
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/avt.png",
    description:
      "I will promote crypto project on my Twitter account,I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: 100,
    rate: 4.9,
    socical: "$$$",
  },
];

export default function KolsPage() {
  return (
    <div className="py-10">
      <div className="flex items-center justify-between mb-6">
        <Select>
          <SelectTrigger className="max-w-[200px]">
            <span>Category</span>
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger className="max-w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="best-earn">Best Earn</SelectItem>
            <SelectItem value="kol-quality">KOLs Quality</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-3 gap-10 items-center justify-center">
        {dataFake?.map((kol, index) => {
          return <InfoKol kol={kol} />;
        })}
      </div>
    </div>
  );
}
