import prisma from "@/lib/prisma";
import { Box, Flex, Table } from "@radix-ui/themes";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <Flex direction="column">
      <Box>hello</Box>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`} className="underline">
              {user.name || `User ${user.id}`}
            </Link>
          </li>
        ))}
      </ul>
    </Flex>
  );
}
