import { Metadata } from "next";
import GigFormProvider from "@/src/context/GigForm/provider";
import CreateCollabPage from "./create-collab-page";

export const metadata: Metadata = {
  title: "Create Collab | KOL3",
};

export default function CreateCollab() {
  return (
    <GigFormProvider>
      <CreateCollabPage />
    </GigFormProvider>
  );
}
