"use client";

import Link from "next/link";
import { ButtonConnectCustom } from "../Button/ButtonConncectCustom";
import { DialogGigs } from "../../Report/DialogGigs";
import { useModal } from "@/src/hooks/useModal";
import { Search } from "lucide-react";

export const Header = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-black">
      <div className="flex flex-1 items-center gap-8 pr-[40px]">
        <Link href="/" className="">
          <img src="/images/logo1.png" alt="" className="w-[80px] h-auto" />
        </Link>
        {/* <Link href="/kols">KOLs</Link>
        <Link href="/dashboard">Dashboard</Link>
        <div onClick={openModal} role="button">
          Report
        </div>
        <DialogGigs open={open} closeModal={closeModal} /> */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[300px] flex items-center gap-6 bg-[#404833] text-white py-[8px] px-[12px] rounded-full">
            <Search className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none flex-1 bg-[#404833]"
            />
          </div>
        </div>
      </div>
      <ButtonConnectCustom />
    </div>
  );
};
