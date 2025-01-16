"use client";

import { GuestBookSchema } from "@/lib/validation";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Textarea } from "@heroui/input";
import { useActionState } from "react";
import { CreateGuestBookEntry } from "./actions";

export default function GuestbookClient() {
  const [lastResult, action] = useActionState(CreateGuestBookEntry, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: GuestBookSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <Form
      className="mt-4 flex flex-col gap-2"
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
    >
      <Textarea
        label="message"
        placeholder="Enter your message"
        key={fields.message.key}
        name={fields.message.name}
        isInvalid={!fields.message.valid}
        errorMessage={fields.message.errors}
        className="w-full"
      ></Textarea>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
