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
    bg: ["/example/2.png", "/example/1.png", "/example/4.png"],
    avt: "example/avt.png",
    description: "I will promote crypto project on my Twitter account",
    followers: "100K",
    rate: 4.7,
    socical: "$",
  },
  {
    bg: ["/example/6.png", "/example/7.png"],
    avt: "example/av1.png",
    description: "I will promote crypto project on my Twitter account",
    followers: "80K",
    rate: 3.5,
    socical: "$$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/av2.png",
    description: "I will promote crypto project on my Twitter account",
    followers: "60K",
    rate: 5.0,
    socical: "$$",
  },
  {
    bg: ["/example/9.png", "/example/8.png"],
    avt: "example/av5.png",
    description:
      "I will promote crypto project on my Twitter account,I will promote crypto project on my Twitter account",
    followers: "12K",
    rate: 4.5,
    socical: "$$$",
  },
  {
    bg: ["/example/11.png", "/example/10.png"],
    avt: "example/av3.png",
    description: "I will promote crypto project on my Twitter account",
    followers: "44K",
    rate: 4.1,
    socical: "$",
  },
  {
    bg: ["/example/10.png", "/example/kols.png", "/example/7.png"],
    avt: "example/av4.png",
    description: "I will promote crypto project on my Twitter account",
    followers: "78K",
    rate: 4.0,
    socical: "$$$",
  },
  {
    bg: ["/example/13.png", "/example/14.png", "/example/7.png"],
    avt: "example/av6.png",
    description: "I will promote crypto project on my Twitter account",
    followers: "124K",
    rate: 4.2,
    socical: "$$",
  },
  {
    bg: ["/example/15.png", "/example/5.png", "/example/9.png"],
    avt: "example/av2.png",
    description: "I will promote crypto project on my Twitter account",
    followers: "48K",
    rate: 3.8,
    socical: "$$",
  },
  {
    bg: ["/example/12.png", "/example/13.png"],
    avt: "example/av1.png",
    description: "I will promote crypto project on my Twitter account",
    followers: "10K",
    rate: 3.9,
    socical: "$",
  },
  {
    bg: ["/example/kols.png"],
    avt: "example/av5.png",
    description: "I will promote crypto project on my Twitter account",
    followers: "200K",
    rate: 4.9,
    socical: "$",
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
          return <InfoKol key={index} kol={kol} />;
        })}
      </div>
    </div>
  );
}
