"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { ProfileSchema } from "@/lib/validation";
import { parseWithZod } from "@conform-to/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function UpdateProfile(prevState: unknown, formData: FormData) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw Error("Unauthorized");
  }
  const submission = parseWithZod(formData, { schema: ProfileSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.user.update({
    where: { id: userId },
    data: { name: submission.value.name },
  });
  revalidatePath("/settings");
  redirect("/settings");
}
