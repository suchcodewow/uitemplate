"use client";

import {
  Avatar,
  Button,
  CircularProgress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { ThemeSwitcher } from "./theme-switcher";

export default function AuthButton({ minimal = true }: { minimal?: boolean }) {
  const { data, status } = useSession();

  if (status === "loading") {
    return <CircularProgress aria-label="Loading authentication status..." />;
  }

  if (status === "authenticated") {
    const signOutClick = () =>
      signOut({
        callbackUrl: "/",
      });
    if (minimal) {
      return (
        <Button onPress={signOutClick} color="primary" variant="ghost">
          <IconBrandGoogle />
          Sign Out
        </Button>
      );
    }

    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!data.user?.image}
            src={data.user?.image || ""}
          />
        </DropdownTrigger>
        <DropdownMenu
          disabledKeys={["profile"]}
          aria-label="Profile Actions"
          variant="flat"
        >
          <DropdownItem key="profile">{data.user?.email}</DropdownItem>
          <DropdownItem key="darkmode">
            <ThemeSwitcher />
          </DropdownItem>
          <DropdownItem key="settings" href="/settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="sign-out" onPress={signOutClick}>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Button onPress={() => signIn()} color="primary" variant="ghost">
      <IconBrandGoogle />
      Sign In
    </Button>
  );
}
