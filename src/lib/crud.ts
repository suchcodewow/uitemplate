import prisma from "./prisma";

export async function GetGuestbookEntries({
  search,
  offset = 0,
  limit = 2,
}: {
  search?: string | undefined;
  offset?: number;
  limit?: number;
}) {
  const data = await prisma.guestbookEntries.findMany({
    where: { message: { contains: search } },
    include: { user: true },
    skip: offset,
    take: limit,
    orderBy: { createdAt: "desc" },
  });
  const totalCount = await prisma.guestbookEntries.count({
    where: { message: { contains: search } },
  });
  const totalPages = Math.ceil(totalCount / limit);

  return { data, totalCount, totalPages };
}
