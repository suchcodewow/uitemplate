import { Card, CardBody } from "@heroui/card";

export default async function Home() {
  return (
    <Card className="mx-auto mt-2 min-h-40 max-w-3xl">
      <CardBody className="mx-auto text-center">
        <h1 className="text-2xl font-bold">SuchCodeWow UI Template</h1>
        <p className="pt-4">
          You&apos;ve successfully setup the SCW UI template! Ready to go with
          auth, server/client forms, and prisma support (with postgres by
          default).
        </p>
      </CardBody>
    </Card>
  );
}
