"use client";

import React, { useEffect, useState } from "react";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { IconPackage } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

import AuthButton from "./auth-button";
import { ThemeSwitcher } from "./theme-switcher";

export default function AppHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { status } = useSession();

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
  ];

  if (status === "authenticated") {
    menuItems.push({
      label: "Guestbook",
      href: "/guestbook",
    });
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <IconPackage />
          <p className="font-bold text-inherit">Next.js Starter</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        {mounted && (
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        )}
        <NavbarItem>
          <AuthButton minimal={false} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {mounted && (
          <NavbarMenuItem>
            <ThemeSwitcher showLabel />
          </NavbarMenuItem>
        )}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <AuthButton />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
