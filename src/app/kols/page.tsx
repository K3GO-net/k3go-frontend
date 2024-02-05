import { Metadata } from "next";
import KolsPage from "./kols-page";

export const metadata: Metadata = {
  title: "KOLs | KOL3",
};

export default function Kols() {
  return <KolsPage />;
}
