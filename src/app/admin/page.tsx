import getSession from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  if (user.role !== "admin") {
    return (
      <main className="mx-auto my-10">
        <p className="text-center">You are not authorized to view this page</p>
      </main>
    );
  }
  const users = await prisma.user.findMany();

  return (
    <main className="mx-auto my-10 space-y-3">
      <h1 className="text-center text-xl font-bold">Admin Page</h1>
      <p className="text-center">Welcome, admin!</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`} className="underline">
              {user.name || `User ${user.id}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
