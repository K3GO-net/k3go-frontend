"use client";

import { ReactNode } from "react";
import { Header } from "../components/shared/Header";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};
