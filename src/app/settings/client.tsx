"use client";

// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "@radix-ui/themes";
import { Button } from "@nextui-org/react";
import { User } from "next-auth";
import { useForm } from "react-hook-form";
import { updateProfile } from "./actions";

interface SettingsPageProps {
  user: User;
}

export default function SettingsPage({ user }: SettingsPageProps) {
  // const { toast } = useToast();

  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: { name: user.name || "" },
  });

  async function onSubmit(data: UpdateProfileValues) {
    try {
      await updateProfile(data);
      // toast({ description: "Profile updated." });
    } catch (error) {
      // toast({
      //   variant: "destructive",
      //   description: "An error occurred. Please try again.",
      // });
    }
  }

  return (
    <main className="px-3 py-10">
      <section className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-sm space-y-2.5"
        >
          {/* <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a username" {...field} />
                </FormControl>
                <FormDescription>Your public username</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
}
