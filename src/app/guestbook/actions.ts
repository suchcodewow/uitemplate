"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { GuestBookSchema } from "@/lib/validation";
import { parseWithZod } from "@conform-to/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
  revalidatePath("/guestbook");
  // not needed if staying on page. revalidate refreshes the data
  redirect("/guestbook");
}
