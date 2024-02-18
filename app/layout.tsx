import ConvexClientProvider from "./ConvexClientProvider";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";

// Define fontSans for usage inside the layout
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "betule kedi bagisla - share kitties",
  description: "Donate cats to your loved ones.",
};

// RootLayout now doesn't export fontSans
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="icon" href="/favicon.png" />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.className // Use fontSans.className here
          )}
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
