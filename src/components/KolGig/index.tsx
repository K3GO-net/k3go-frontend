"use client";
import React from "react";
import TypeCard from "./TypeCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shared/ui/dialog";
import { signIn } from "next-auth/react";

const listTypeKol = [
  {
    title: "Marketer",
    info: "Discover niche KOLs, connect, collab and amplify.",
  },
  {
    title: "KOL",
    info: "Attract projects, collab, earn and share the success.",
  },
  {
    title: "Supporter",
    info: "Support KOLs and unlock gig revenue share.",
  },
];

const KolGig = () => {
  const confirm = async () => {
    signIn("twitter", {
      callbackUrl: "/create-collab?step=1",
      redirect: false,
    });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="text-title-1 bg-primary text-black py-[6px] px-[12px] rounded-[4px] mb-[10px] cursor-pointer">
          Open Case 1
        </DialogTrigger>
        <DialogContent className="bg-white py-[15px] px-[36px] flex flex-col items-center max-w-max">
          <DialogTitle className="text-title-1 mb-[20px]">
            Register As
          </DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-[36px]">
              {listTypeKol.map((item) => {
                return (
                  <TypeCard
                    key={item.title}
                    title={item.title}
                    info={item.info}
                    confirm={confirm}
                  />
                );
              })}
            </div>
            <div className="mt-[20px] flex justify-end cursor-pointer">
              <p>I’ll look around for now</p>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default KolGig;
