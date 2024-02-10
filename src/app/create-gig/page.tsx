import { Metadata } from "next";
import CreateGigPage from "./create-gig-page";
import GigFormProvider from "@/src/context/GigForm/provider";

export const metadata: Metadata = {
  title: "Create Gig | KOL3",
};

export default function CreateGig() {
  return (
    <GigFormProvider>
      <CreateGigPage />
    </GigFormProvider>
  );
}
