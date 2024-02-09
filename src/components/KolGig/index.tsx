"use client";
import React, { useState } from "react";
import Popup from "../common/Popup";
import TypeCard from "./TypeCard";
import { useModal } from "@/src/hooks/useModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/common/Dialog";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const [isOpen, setIsopen] = useState(false);
  const { open, openModal, closeModal } = useModal();
  const { data: session } = useSession();
  const router = useRouter();

  const onOpen = () => {
    setIsopen(true);
  };

  const onClose = () => {
    setIsopen(false);
  };

  const confirm = async () => {
    signIn("twitter", {
      callbackUrl: "/create-gig?step=1",
      redirect: false,
    });
  };

  return (
    <>
      <div>{session?.user?.name}</div>
      {session && (
        <div
          className="cursor-pointer"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </div>
      )}
      <div className="cursor-pointer" onClick={onOpen}>
        Open Case 1 Popup
      </div>
      <Popup title="Register As" isOpen={isOpen} onClose={onClose}>
        <div className="flex items-center gap-[36px]">
          {listTypeKol.map((item) => {
            return (
              <TypeCard title={item.title} info={item.info} confirm={confirm} />
            );
          })}
        </div>
      </Popup>
      <div className="cursor-pointer" onClick={openModal}>
        Open Case 3 Popup
      </div>
      <Popup title="Register As" isOpen={open} onClose={closeModal}>
        <div className="flex items-center gap-[36px]">
          {listTypeKol.map((item) => {
            return (
              <TypeCard title={item.title} info={item.info} confirm={confirm} />
            );
          })}
        </div>
      </Popup>
      <Dialog>
        <DialogTrigger className="text-title-1 bg-black text-white py-[6px] px-[12px] rounded-[4px]">
          Open
        </DialogTrigger>
        <DialogContent className="bg-white py-[15px] px-[36px] flex flex-col items-center">
          <DialogTitle className="text-title-1">Register As</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-[36px]">
              {listTypeKol.map((item) => {
                return (
                  <TypeCard
                    title={item.title}
                    info={item.info}
                    confirm={confirm}
                  />
                );
              })}
            </div>
          </DialogDescription>
          <DialogFooter>
            <p>I’ll look around for now</p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default KolGig;
