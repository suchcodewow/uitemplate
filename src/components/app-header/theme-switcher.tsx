"use client";

import { Switch } from "@heroui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

import useSystemTheme from "@/lib/use-system-theme";

export function ThemeSwitcher({ showLabel }: { showLabel?: boolean }) {
  const { theme, setTheme } = useSystemTheme();

  return (
    <Switch
      isSelected={theme === "light"}
      onValueChange={() =>
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }
      size="sm"
      color="success"
      startContent={<IconSun />}
      endContent={<IconMoon />}
    >
      {showLabel && "Theme"}
    </Switch>
  );
}
