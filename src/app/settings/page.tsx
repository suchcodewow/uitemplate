import getSession from "@/lib/get-session";
import { Card, CardBody } from "@heroui/card";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import SettingsClient from "./client";

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

  return (
    <Card className="mx-auto mt-4 max-w-2xl">
      <CardBody>
        <h1 className="text-center text-5xl">My Settings</h1>
        <SettingsClient user={user} />
      </CardBody>
    </Card>
  );
}
