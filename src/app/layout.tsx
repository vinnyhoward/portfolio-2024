import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeWrapper from "@/lib/ThemeWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vince Howard - Portfolio",
  description:
    "Welcome to my portfolio👋 (btw this site is more fun on desktop😉",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeWrapper>
        <body className={inter.className}>{children}</body>
      </ThemeWrapper>
    </html>
  );
}
