const { heroui } = require("@heroui/react");
import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  plugins: [heroui()],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
} satisfies Config;

export default config;
