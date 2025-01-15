"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { GuestBookSchema } from "@/lib/validation";
import { parseWithZod } from "@conform-to/zod";
export async function CreateGuestBookEntry(
  prevState: unknown,
  formData: FormData,
) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw Error("Unauthorized");
  }
  const submission = parseWithZod(formData, { schema: GuestBookSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.guestbookEntries.create({
    data: { message: submission.value.message, userId: userId },
  });
}
