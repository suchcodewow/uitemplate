import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import SettingsPage from "./client";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  return <SettingsPage user={user} />;
}
