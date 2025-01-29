"use client";

import { ProfileSchema } from "@/lib/validation";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/react";
import { User } from "next-auth";
import { useActionState } from "react";
import { UpdateProfile } from "./actions";

interface SettingsClientProps {
  user: User;
}

export default function SettingsClient({ user }: SettingsClientProps) {
  const [lastResult, action] = useActionState(UpdateProfile, undefined);
  console.log("last result: ", lastResult);
  const [form, fields] = useForm({
    lastResult,
    defaultValue: { ...user },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ProfileSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <main className="px-3 py-10">
      <section className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>

        <Form
          className="mt-4 flex flex-col gap-2"
          id={form.id}
          onSubmit={form.onSubmit}
          action={action}
        >
          <Input
            label="name"
            placeholder="Your Name"
            key={fields.name.key}
            name={fields.name.name}
            isInvalid={!fields.name.valid}
            errorMessage={fields.name.errors}
            defaultValue={fields.name.initialValue}
          ></Input>
          <div className="flex w-full justify-end gap-2">
            <Button type="reset">Reset</Button>
            <Button type="submit">Update</Button>
          </div>
        </Form>
      </section>
    </main>
  );
}
