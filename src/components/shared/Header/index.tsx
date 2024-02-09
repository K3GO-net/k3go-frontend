"use client";

import Link from "next/link";
import { ButtonConnectCustom } from "../Button/ButtonConncectCustom";

export const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-gray-500">
      <div className="flex items-center gap-4">
        <Link href="/">KOL3</Link>
        <Link href="/kols">KOLs</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      <ButtonConnectCustom />
    </div>
  );
};
