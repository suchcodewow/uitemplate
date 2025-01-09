import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animate")],
  content: [
    "./src/**/*.{ts,tsx,js,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
} satisfies Config;

export default config;
