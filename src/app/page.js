import prisma from "@/lib/prisma";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <Button>le button</Button>
      <Card>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`} className="underline">
              {user.name || `User ${user.id}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
