import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  theme: {
    logo: "/logo.png",
  },
  adapter: PrismaAdapter(prisma),
  providers: [],
});
