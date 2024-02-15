import { Metadata } from "next";
import CreateCollabPage from "./create-collab-page";

export const metadata: Metadata = {
  title: "Create Collab | KOL3",
};

export default function CreateCollab() {
  return <CreateCollabPage />;
}
