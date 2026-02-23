import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auryan Pratama - Interactive Portfolio",
  description:
    "Game & Backend Programmer - Founder of PT Anoa Interactive Studio. Expert in Unity engine upgrades, live-ops, and cross-platform porting for global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-200 text-stone-900 selection:bg-amber-300`}
      >
        {children}
      </body>
    </html>
  );
}
