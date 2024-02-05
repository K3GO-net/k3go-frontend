"use client";
import React, { useState } from "react";
import Popup from "../common/Popup";
import TypeCard from "./TypeCard";

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

  const onOpen = () => {
    setIsopen(true);
  };

  const onClose = () => {
    setIsopen(false);
  };

  const confirm = () => {
    console.log("Confirm");
  };

  return (
    <>
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
    </>
  );
};

export default KolGig;
