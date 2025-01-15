import prisma from "@/lib/prisma";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import GuestbookClient from "./client";

export default async function GuestBook() {
  const entries = await prisma.guestbookEntries.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: true },
  });
  return (
    <Card className="mx-auto mt-4 max-w-lg">
      <CardBody>
        <h1 className="text-center text-5xl">Welcome to the Guest Book</h1>
        <GuestbookClient />
        {entries.map((entry) => (
          <Card key={entry.messageId} className="m-2">
            <CardHeader className="justify-between">
              <div className="flex gap-5">{entry.user.name}</div>
            </CardHeader>
            <CardBody>{entry.message}</CardBody>
            <CardFooter>{entry.createdAt.toLocaleString()}</CardFooter>
          </Card>
        ))}
      </CardBody>
    </Card>
  );
}
