import { GetGuestbookEntries } from "@/lib/crud";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Pagination } from "@heroui/pagination";
import GuestbookClient from "./client";

export default async function GuestBook(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    limit?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 20;
  const offset = (currentPage - 1) * limit;

  const { data, totalPages } = await GetGuestbookEntries({
    offset,
    limit,
    search,
  });
  return (
    <Card className="mx-auto mt-4 max-w-lg">
      <CardBody>
        <h1 className="text-center text-5xl">Welcome to the Guest Book</h1>
        <GuestbookClient />
        {data.map((entry) => (
          <Card key={entry.messageId} className="m-2">
            <CardHeader className="justify-between">
              <div className="flex gap-5">{entry.user.name}</div>
            </CardHeader>
            <CardBody>{entry.message}</CardBody>
            <CardFooter>{entry.createdAt.toLocaleString()}</CardFooter>
          </Card>
        ))}
        <Card>
          <Pagination total={totalPages} />
        </Card>
      </CardBody>
    </Card>
  );
}
