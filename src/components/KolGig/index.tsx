"use client";
import React, { useState } from "react";
import TypeCard from "./TypeCard";
import { signIn } from "next-auth/react";
import { Button } from "../shared/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CheckItem {
  id: string;
  checked: boolean;
}

const listTypeKol = [
  {
    id: "marketer",
    title: "Marketer",
    info: "Discover niche KOLs, connect, collab and amplify.",
  },
  {
    id: "kol",
    title: "KOL",
    info: "Attract projects, collab, earn and share the success.",
  },
  {
    id: "suporter",
    title: "Supporter",
    info: "Support KOLs and unlock collab revenue share.",
  },
];

const KolGig = () => {
  const [type, setType] = useState<CheckItem[]>([
    { id: "marketer", checked: false },
    { id: "kol", checked: false },
    { id: "suporter", checked: false },
  ]);

  const router = useRouter();

  const handleTypeChange = (id: string) => {
    setType((prev) =>
      prev.map((type) =>
        type.id === id ? { ...type, checked: !type.checked } : type
      )
    );
  };

  const confirm = async () => {
    if (type[1].checked) {
      signIn("twitter", {
        callbackUrl: "/create-collab?step=1",
        redirect: false,
      });
    } else {
      router.push("/kols");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-[0.5]">
      <div className="bg-white py-[15px] px-[36px] flex flex-col items-center max-w-max relative">
        <div className="text-title-1 mb-[20px]">Register As</div>
        <X
          onClick={confirm}
          role="button"
          className="absolute top-[10px] right-[10px] h-5 w-5 cursor-pointer hover:text-primary"
        />
        <div className="flex items-center gap-[36px]">
          {listTypeKol.map((item, index) => {
            return (
              <TypeCard
                key={item.id}
                id={item.id}
                title={item.title}
                info={item.info}
                checked={type[index].checked}
                onClick={handleTypeChange}
              />
            );
          })}
        </div>
        <Button onClick={confirm} className="mt-[20px]">
          Confirm
        </Button>
        <div
          onClick={confirm}
          role="button"
          className="mt-[20px] absolute bottom-[10px] right-[10px] cursor-pointer hover:text-primary"
        >
          <p>I’ll look around for now</p>
        </div>
      </div>
    </div>
  );
};

export default KolGig;
