import { Geist, Geist_Mono } from "next/font/google";
// evaluate: radix-ui
import "@/globals.css";
// import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ui",
  description: "Next.js UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme accentColor="orange" radius="medium">
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}
