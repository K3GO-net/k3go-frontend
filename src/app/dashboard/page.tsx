import { Metadata } from "next";
import { DashboardPage } from "./dashboard-page";

export const metadata: Metadata = {
  title: "Dashboard | KOL3",
};

export default function Dashboard() {
  return <DashboardPage />;
}
