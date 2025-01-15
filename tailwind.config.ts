import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animate")],
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{ts,tsx,js,jsx}",
  ],
} satisfies Config;

export default config;
