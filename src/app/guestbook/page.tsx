import CheckAuth from "@/lib/getSession";
import { Card, CardBody } from "@nextui-org/card";
import GuestbookClient from "./client";

export default async function GuestBook() {
  const session = await CheckAuth();
  return (
    <Card className="mx-auto mt-4 max-w-lg">
      <CardBody>
        <h1 className="text-center text-5xl">Welcome to the Guest Book</h1>
        <GuestbookClient />
      </CardBody>
    </Card>
  );
}
