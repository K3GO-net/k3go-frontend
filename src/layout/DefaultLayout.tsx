"use client";

import { ReactNode } from "react";
import { Header } from "../components/shared/Header";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative font-exo">
      <Header />
      <div className="container">
        <div className="px-8">{children}</div>
      </div>
    </div>
  );
};
