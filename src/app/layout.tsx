import AppHeader from "@/components/app-header/index";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ui",
  description: "Next.js UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="h-screen w-screen bg-[url(/light-bg.svg)] bg-cover dark:bg-[url(/dark-bg.svg)]">
        <Providers>
          <AppHeader />
          <main className="flex-grow overflow-auto">
            <Suspense>{children}</Suspense>
          </main>
        </Providers>
      </body>
    </html>
  );
}
