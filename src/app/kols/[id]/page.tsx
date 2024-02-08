import { Metadata } from "next";
import { ProfileKolPage } from "./profile-kol-page";

export const metadata: Metadata = {
  title: "Profile | KOL3",
};

export default function ProfileKol() {
  return <ProfileKolPage />;
}
