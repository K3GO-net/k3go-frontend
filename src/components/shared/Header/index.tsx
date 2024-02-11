"use client";

import Link from "next/link";
import { ButtonConnectCustom } from "../Button/ButtonConncectCustom";
import { DialogGigs } from "../../Report/DialogGigs";
import { useModal } from "@/src/hooks/useModal";

export const Header = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-gray-500">
      <div className="flex items-center gap-4">
        <Link href="/">KOL3</Link>
        <Link href="/kols">KOLs</Link>
        <Link href="/dashboard">Dashboard</Link>
        <div onClick={openModal} role="button">
          Report
        </div>
        <DialogGigs open={open} closeModal={closeModal} />
      </div>
      <ButtonConnectCustom />
    </div>
  );
};
