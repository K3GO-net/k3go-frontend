"use client";

import { ButtonConnectCustom } from "../Button/ButtonConncectCustom";

export const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-gray-500">
      <p>KOL3</p>
      <ButtonConnectCustom />
    </div>
  );
};
