import { Metadata } from "next";
import { ContactPage } from "./contact-page";

export const metadata: Metadata = {
  title: "Message | KOL3",
};

export default function Contact() {
  return <ContactPage />;
}
