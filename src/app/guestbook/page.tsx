import { Card, CardBody } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";

export default function GuestBook() {
  return (
    <Card className="mx-auto mt-4 max-w-lg">
      <CardBody>
        <h1 className="text-center text-5xl">Welcome to the Guest Book</h1>
        <form className="mt-4 flex flex-col gap-2">
          <Textarea
            label="message"
            placeholder="Enter your message"
            className="w-full"
          ></Textarea>
        </form>
      </CardBody>
    </Card>
  );
}
