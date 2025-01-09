import AppHeader from "@/components/app-header";
import Providers from "@/components/providers";
import type { Metadata } from "next";
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
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen w-screen">
        <Providers>
          <AppHeader />
          <main className="flex-grow overflow-auto bg-[url(/light-bg.svg)] bg-cover dark:bg-[url(/dark-bg.svg)]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
