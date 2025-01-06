import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import { LogOut, Settings } from "lucide-react";
import { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { signOut } from "@/auth";

export default function UserSettings({ user }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" size="1">
          {user.name}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="1">
        <DropdownMenu.Item>
          <Link href="/settings">settings</Link>
        </DropdownMenu.Item>

        <DropdownMenu.Item>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit">
              <LogOut className="h-1 w-1" /> Sign Out
            </Button>
          </form>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
